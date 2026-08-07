/**
 * Prerenders every route to static HTML.
 *
 * Why this exists (SEO-documentation.md P0-4): the site was client-render-only,
 * so every word of content required JS execution. Googlebot renders JS but
 * defers it to a second queue; Bing, DuckDuckGo and the AI answer engines the
 * site's own header advertises largely do not. For a documentation site whose
 * entire purpose is being found when someone asks a question, that was a
 * structural handicap.
 *
 * After this step each URL is a real HTML file containing its own h1, body copy
 * and head tags. React hydrates on top (see src/main.tsx).
 *
 * A second benefit: static hosts no longer need an SPA fallback rewrite for
 * deep links, because a file genuinely exists at every path.
 *
 * Run as part of `npm run build`, after `vite build` has produced dist/.
 */

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { ROOT, collectUrls } from './lib/routes.mjs';

const DIST = join(ROOT, 'dist');
const SSR_DIST = join(ROOT, '.ssr-build');

const HEAD_START = '<!--app-head-start-->';
const HEAD_END = '<!--app-head-end-->';
const HTML_MARKER = '<!--app-html-->';

// ---------------------------------------------------------------------------
// Build the server bundle
// ---------------------------------------------------------------------------

console.log('\nprerender  building server bundle...');
execFileSync(
  process.execPath,
  [
    join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js'),
    'build',
    '--ssr',
    'src/entry-server.tsx',
    '--outDir',
    '.ssr-build',
    '--logLevel',
    'warn',
  ],
  { cwd: ROOT, stdio: 'inherit' }
);

const { render } = await import(pathToFileURL(join(SSR_DIST, 'entry-server.js')).href);

// ---------------------------------------------------------------------------
// Render every route
// ---------------------------------------------------------------------------

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

for (const marker of [HEAD_START, HEAD_END, HTML_MARKER]) {
  if (!template.includes(marker)) {
    console.error(`\n  ERROR  index.html is missing the ${marker} marker.`);
    console.error('         Prerendering cannot place content without it.\n');
    process.exit(1);
  }
}

const headStart = template.indexOf(HEAD_START);
const headEnd = template.indexOf(HEAD_END) + HEAD_END.length;
const templateBefore = template.slice(0, headStart);
const templateAfter = template.slice(headEnd);

/** `/editor/shapes/bones` -> `dist/editor/shapes/bones/index.html` */
function outputPath(urlPath) {
  if (urlPath === '/') return join(DIST, 'index.html');
  return join(DIST, urlPath.replace(/^\//, ''), 'index.html');
}

const { urls } = collectUrls();

let written = 0;
const failures = [];

for (const { path } of urls) {
  try {
    const { html, head } = render(path);
    const page = templateBefore + head + templateAfter.replace(HTML_MARKER, html);
    const file = outputPath(path);
    mkdirSync(join(file, '..'), { recursive: true });
    writeFileSync(file, page, 'utf8');
    written++;
  } catch (err) {
    failures.push({ path, message: err?.message || String(err) });
  }
}

/**
 * 404.html at the dist root. Most static hosts (GitHub Pages, Netlify, S3
 * website endpoints) serve this for unmatched paths, which is what finally
 * gives the NotFound page a real 404 status instead of a soft 200.
 */
try {
  const { html, head } = render('/__not_found__');
  writeFileSync(
    join(DIST, '404.html'),
    templateBefore + head + templateAfter.replace(HTML_MARKER, html),
    'utf8'
  );
  written++;
} catch (err) {
  failures.push({ path: '404.html', message: err?.message || String(err) });
}

rmSync(SSR_DIST, { recursive: true, force: true });

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

console.log(`prerender  ${written} HTML files written to dist/`);
console.log(`           ${urls.filter((u) => u.inSitemap).length} in sitemap, ${urls.filter((u) => !u.inSitemap).length} prerendered but excluded from it`);

if (failures.length > 0) {
  console.error(`\n  ${failures.length} route(s) failed to prerender:`);
  for (const f of failures.slice(0, 10)) console.error(`    ${f.path}  ${f.message}`);
  if (failures.length > 10) console.error(`    ... and ${failures.length - 10} more`);
  console.error('');
  process.exit(1);
}

console.log('');
