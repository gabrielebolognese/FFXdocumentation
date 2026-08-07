/**
 * Sitemap generator for documentation.flashfx.app
 *
 * Derives the sitemap from `src/App.tsx` (the route table) rather than a
 * hand-maintained list, so it cannot drift as routes are added or removed.
 *
 * Run:  npm run sitemap        (also runs automatically as part of `npm run build`)
 *
 * Design notes — see SEO-documentation.md M1:
 *
 *  - `<priority>` and `<changefreq>` are deliberately NOT emitted. Google
 *    ignores both ("Google ignores <priority> and <changefreq> values" —
 *    developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
 *
 *  - `<lastmod>` is emitted ONLY for blog posts, where a real publication date
 *    exists in src/data/blogPosts.ts. Every source file in src/pages/ carries an
 *    identical filesystem mtime, so a file-derived lastmod would be fiction, and
 *    Google devalues a lastmod it learns to distrust.
 *
 *  - Placeholder pages are excluded. They are still prerendered (a URL a user
 *    can reach must return real HTML) but submitting 127 empty pages would
 *    invite a thin-content assessment. They re-enter automatically once the
 *    placeholder text is removed, so M2 needs no change here.
 *
 *  - Output is a sitemap index plus one sitemap per section. At this scale a
 *    single file would be well inside the 50,000 limit, but Search Console
 *    reports coverage per submitted sitemap — segmenting turns "how much of the
 *    site is indexed?" into "which section is failing?".
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, collectUrls } from './lib/routes.mjs';

const PUBLIC_DIR = join(ROOT, 'public');

const BASE_URL = (process.env.SITE_URL || 'https://documentation.flashfx.app').replace(/\/$/, '');

/**
 * Sections, in sitemap-index order. `match` decides which section a URL lands
 * in; the first match wins, so order matters and `core` must stay last.
 */
const SECTIONS = [
  { id: 'editor', file: 'sitemap-editor.xml', match: (p) => p.startsWith('/editor/') },
  { id: 'troubleshooting', file: 'sitemap-troubleshooting.xml', match: (p) => p.startsWith('/troubleshooting/') },
  { id: 'tutorials', file: 'sitemap-tutorials.xml', match: (p) => p.startsWith('/tutorials/') },
  { id: 'lite', file: 'sitemap-lite.xml', match: (p) => p.startsWith('/lite/') },
  { id: 'blog', file: 'sitemap-blog.xml', match: (p) => p === '/blog' || p.startsWith('/blog/') },
  { id: 'core', file: 'sitemap-core.xml', match: () => true },
];

// URL collection and placeholder classification live in scripts/lib/routes.mjs,
// shared with the prerenderer so the sitemap can never advertise a URL that was
// not prerendered, or omit one that was.
const { urls, routes } = collectUrls();

const included = urls.filter((u) => u.inSitemap).map((u) => ({ path: u.path, lastmod: u.lastmod }));
const excluded = urls.filter((u) => !u.inSitemap).map((u) => ({ path: u.path, reason: u.reason }));
excluded.push({ path: '*', reason: 'catch-all route' });

included.sort((a, b) => a.path.localeCompare(b.path));

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function renderUrlset(entries) {
  const body = entries
    .map(({ path, lastmod }) => {
      const loc = `  <url>\n    <loc>${escapeXml(BASE_URL + path)}</loc>`;
      return lastmod ? `${loc}\n    <lastmod>${lastmod}</lastmod>\n  </url>` : `${loc}\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function renderIndex(files) {
  const body = files
    .map(({ file, lastmod }) => {
      const loc = `  <sitemap>\n    <loc>${escapeXml(`${BASE_URL}/${file}`)}</loc>`;
      return lastmod ? `${loc}\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>` : `${loc}\n  </sitemap>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

const buckets = new Map(SECTIONS.map((s) => [s.id, []]));
for (const entry of included) {
  const section = SECTIONS.find((s) => s.match(entry.path));
  buckets.get(section.id).push(entry);
}

if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });

const writtenFiles = [];
for (const section of SECTIONS) {
  const entries = buckets.get(section.id);
  if (entries.length === 0) continue;
  writeFileSync(join(PUBLIC_DIR, section.file), renderUrlset(entries), 'utf8');
  // Index-level lastmod = newest child lastmod, so Google can skip re-fetching
  // unchanged sections. Omitted where no child has a trustworthy date.
  const dates = entries.map((e) => e.lastmod).filter(Boolean).sort();
  writtenFiles.push({ file: section.file, lastmod: dates.length ? dates[dates.length - 1] : null });
}
writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), renderIndex(writtenFiles), 'utf8');

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

const byReason = excluded.reduce((acc, e) => {
  acc[e.reason] = (acc[e.reason] || 0) + 1;
  return acc;
}, {});

console.log(`\nsitemap  ${BASE_URL}`);
console.log(`         ${routes.length} routes parsed -> ${included.length} URLs in sitemap\n`);
for (const section of SECTIONS) {
  const n = buckets.get(section.id).length;
  if (n) console.log(`  ${section.file.padEnd(30)} ${String(n).padStart(4)}`);
}
console.log(`  ${'sitemap.xml (index)'.padEnd(30)} ${String(writtenFiles.length).padStart(4)} sitemaps`);
console.log(`\n  excluded (${excluded.length}):`);
for (const [reason, n] of Object.entries(byReason).sort((a, b) => b[1] - a[1])) {
  console.log(`    ${String(n).padStart(4)}  ${reason}`);
}
console.log('');

// ---------------------------------------------------------------------------
// Consistency guard — nav links that point at nothing become soft 404s.
//
// Only configs reachable from `sidebarConfigs` are checked. navigation.ts also
// exports `featuresSidebar`, `sidebarShortcuts` and `sidebarSections`, which
// are declared but referenced nowhere — their paths never render as anchors,
// so a dangling path there is dead code, not a live broken link. Scanning the
// whole file (the obvious implementation) reports 21 false positives.
// ---------------------------------------------------------------------------

const navSource = readFileSync(join(ROOT, 'src', 'data', 'navigation.ts'), 'utf8');

/** Config identifiers actually wired into `sidebarConfigs`, plus `mainTabs`. */
function liveConfigNames(source) {
  const block = source.match(/export const sidebarConfigs[^{]*\{([\s\S]*?)\n\};/);
  const names = block ? [...block[1].matchAll(/:\s*(\w+)/g)].map((m) => m[1]) : [];
  return [...new Set([...names, 'mainTabs'])];
}

/** Paths declared inside a single `export const <name> = …` block. */
function pathsInExport(source, name) {
  const start = source.indexOf(`export const ${name}`);
  if (start === -1) return [];
  const rest = source.slice(start);
  const end = rest.indexOf('\nexport const ', 1);
  const block = end === -1 ? rest : rest.slice(0, end);
  return [...block.matchAll(/path:\s*'(\/[^']*)'/g)].map((m) => m[1]);
}

const navPaths = new Set(
  liveConfigNames(navSource)
    .flatMap((name) => pathsInExport(navSource, name))
    .filter((p) => !p.startsWith('//'))
);

// The footer is a second real source of internal links, so pages linked only
// from there (the comparison pages) are genuinely reachable and must not be
// reported as unlinked. The guard measures inbound links, not nav membership.
const footerSource = readFileSync(join(ROOT, 'src', 'components', 'Footer.tsx'), 'utf8');
for (const m of footerSource.matchAll(/to:\s*'(\/[^']*)'/g)) navPaths.add(m[1]);
const routePaths = new Set(routes.map((r) => r.path));
const dangling = [...navPaths].filter((p) => !routePaths.has(p)).sort();

if (dangling.length > 0) {
  console.error(`  WARNING  ${dangling.length} navigation links have no matching route.`);
  console.error('           These fall through to the 404 page:');
  for (const p of dangling) console.error(`             ${p}`);
  console.error('');
}

// ---------------------------------------------------------------------------
// The reverse guard: a page with real content that nothing links to.
//
// This is the check that would have caught the 22 written-but-unreachable 3D
// pages. Sitemap presence alone is weak discovery — without an inbound link
// there is no PageRank flow, and `searchIndex.ts` builds from the same nav
// tree, so an unlinked page is missing from on-site ⌘K search too.
//
// Placeholder pages are deliberately NOT reported. They are unlinked on
// purpose until someone writes them, and they re-enter this check
// automatically once their marker is gone.
// ---------------------------------------------------------------------------

const unlinked = included
  .map((e) => e.path)
  .filter((p) => !navPaths.has(p))
  // Blog posts are linked from the /blog listing, not from navigation.ts.
  .filter((p) => !p.startsWith('/blog/'))
  .sort();

if (unlinked.length > 0) {
  console.error(`  WARNING  ${unlinked.length} page(s) with real content have no inbound internal link.`);
  console.error('           Sitemap-only discovery: no PageRank flow, absent from site search.');
  for (const p of unlinked) console.error(`             ${p}`);
  console.error('');
}

if ((dangling.length > 0 || unlinked.length > 0) && process.env.SITEMAP_STRICT === '1') {
  process.exit(1);
}
