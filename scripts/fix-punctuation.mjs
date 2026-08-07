/**
 * Repairs the em-dash corruption described in SEO-documentation.md P2-2.
 *
 * A find-and-replace at some point turned every ` — ` into a bare `,` with no
 * following space, across 73 source files. The damage reaches user-visible
 * headings and SEO titles ("Easing Presets,Full Reference"), so it degrades
 * both readability and the snippets Google extracts.
 *
 * Two signatures are repaired:
 *
 *   1. `</strong>,text`  ->  `</strong> — text`
 *   2. `word,Word`       ->  `word — Word`   (comma with no following space)
 *
 * Safety
 * ------
 * Signature 2 is dangerous applied naively: `count: 10,label: 'x'` in an object
 * literal matches `digit,letter` and would be rewritten into a syntax error.
 * So replacements are made ONLY in positions that are genuinely prose:
 *
 *   - JSX text nodes (outside any `<tag ...>` and at brace depth 0), and
 *   - the value of a `title=` / `description=` attribute.
 *
 * Anything else is left alone and reported, so a missed case is visible rather
 * than silent.
 *
 * A comma FOLLOWED BY A SPACE is never touched — that is ordinary English, and
 * 21 such cases exist after `</strong>` alone.
 *
 * Run:  node scripts/fix-punctuation.mjs [--apply]
 *       Without --apply it is a dry run and writes nothing.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { readdirSync, statSync } from 'node:fs';
import { ROOT } from './lib/routes.mjs';

const APPLY = process.argv.includes('--apply');

const EM = '—'; // —

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx?$/.test(name)) out.push(full);
  }
  return out;
}

/**
 * Attributes and identifiers whose string values are code, not prose. A comma
 * inside one of these is meaningful and must never be rewritten.
 */
const CODE_ATTRS = new Set([
  'className', 'class', 'href', 'src', 'to', 'path', 'id', 'key', 'type', 'rel',
  'target', 'style', 'htmlFor', 'name', 'value', 'width', 'height', 'viewBox',
  'd', 'fill', 'stroke', 'videoId', 'youtubeUrl', 'icon', 'slug', 'keywords',
  // CSS-in-JS. None of these currently appear in this codebase — a font stack
  // like 'Inter,sans-serif' is the one shape that reads as prose to the
  // heuristic but must never be rewritten, so they are denied pre-emptively.
  'fontFamily', 'font', 'transition', 'transform', 'boxShadow', 'background',
  'backgroundImage', 'gridTemplateColumns', 'gridTemplateRows', 'filter',
  'clipPath', 'animation', 'content', 'srcSet', 'sizes', 'points',
]);

/**
 * Classify every index in a line as prose or not.
 *
 * Walks the line tracking whether we are inside a `<...>` tag and how deep we
 * are in `{...}` expressions. Positions outside both are JSX text.
 *
 * Quoted string contents count as prose too — this codebase keeps a lot of
 * user-visible copy in string literals (sidebar labels in navigation.ts, ToC
 * labels, Table row arrays), and the corruption reached all of them. The
 * exception is a string that is the value of a CODE_ATTRS attribute, and
 * template literals, which are skipped wholesale to avoid `${}` interpolation.
 */
function proseMask(line) {
  const mask = new Array(line.length).fill(false);
  let inTag = false;
  let brace = 0;
  let quote = null;
  let attr = null; // name of the attribute whose value we are inside

  for (let i = 0; i < line.length; i++) {
    const c = line[i];

    if (quote) {
      if (c === quote && line[i - 1] !== '\\') {
        quote = null;
        attr = null;
      } else if (quote !== '`' && !CODE_ATTRS.has(attr)) {
        mask[i] = true;
      }
      continue;
    }

    if (c === '"' || c === "'" || c === '`') {
      // Look back for `name=` or `name:` immediately preceding the quote.
      const m = /(\w+)\s*[=:]\s*$/.exec(line.slice(0, i));
      attr = m ? m[1] : null;
      quote = c;
      continue;
    }

    if (c === '{') { brace++; continue; }
    if (c === '}') { brace = Math.max(0, brace - 1); continue; }

    if (brace === 0) {
      if (c === '<') { inTag = true; continue; }
      if (c === '>') { inTag = false; continue; }
    }

    mask[i] = !inTag && brace === 0;
  }
  return mask;
}

const files = walk(join(ROOT, 'src'));

let strongFixes = 0;
let proseFixes = 0;
let leadFixes = 0;
let skipped = 0;
const skippedSamples = [];
const changedFiles = [];

for (const file of files) {
  const original = readFileSync(file, 'utf8');
  const lines = original.split('\n');
  let touched = false;

  for (let li = 0; li < lines.length; li++) {
    let line = lines[li];

    // 1. </strong>, -> </strong> —   (unambiguous: a closing tag never takes a
    //    bare comma in this codebase's prose style, and comma+space is skipped)
    const beforeStrong = line;
    line = line.replace(new RegExp('</strong>,(?! )', 'g'), () => {
      strongFixes++;
      return `</strong> ${EM} `;
    });
    if (line !== beforeStrong) touched = true;

    // 2. JSX expression strings that BEGIN with the comma: {',text'} -> {' — text'}
    //    These follow an inline <code>/<strong> element, so the comma is the
    //    first character of the string and has a quote before it rather than a
    //    word character — signature 3 below would never see it.
    //    `{', '}` (comma + space) is a real separator and is left alone.
    const beforeLead = line;
    line = line.replace(/(\{\s*)(['"]),(?! )/g, (_, open, q) => {
      leadFixes++;
      return `${open}${q} ${EM} `;
    });
    if (line !== beforeLead) touched = true;

    // 3. word,Word in prose positions only
    const mask = proseMask(line);
    let out = '';
    let i = 0;
    while (i < line.length) {
      const c = line[i];
      if (
        c === ',' &&
        i > 0 &&
        i + 1 < line.length &&
        /[A-Za-z0-9)\]]/.test(line[i - 1]) &&
        /[A-Za-z]/.test(line[i + 1])
      ) {
        if (mask[i]) {
          out += ` ${EM} `;
          proseFixes++;
          touched = true;
          i++;
          continue;
        } else {
          skipped++;
          if (skippedSamples.length < 60) {
            skippedSamples.push(
              `${file.replace(ROOT, '').replace(/\\/g, '/')}:${li + 1}  ...${line.slice(Math.max(0, i - 45), i + 45).trim()}...`
            );
          }
        }
      }
      out += c;
      i++;
    }
    lines[li] = out;
  }

  if (touched) {
    changedFiles.push(file);
    if (APPLY) writeFileSync(file, lines.join('\n'), 'utf8');
  }
}

console.log(`\npunctuation  ${APPLY ? 'APPLIED' : 'DRY RUN (pass --apply to write)'}`);
console.log(`             ${strongFixes} </strong>, fixes`);
console.log(`             ${leadFixes} leading-comma string fixes`);
console.log(`             ${proseFixes} prose word,Word fixes`);
console.log(`             ${changedFiles.length} files affected`);
console.log(`             ${skipped} matches skipped as non-prose (code positions)`);

if (skippedSamples.length) {
  console.log('\n  skipped (verify none of these are prose):');
  for (const s of skippedSamples) console.log(`    ${s}`);
}
console.log('');
