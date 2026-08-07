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
 *    identical filesystem mtime (the tree was copied, not versioned), so a
 *    file-derived lastmod would be fiction. Google treats a consistently
 *    inaccurate lastmod as a reason to stop trusting the field, so omitting it
 *    is strictly better than guessing.
 *
 *  - Placeholder pages are EXCLUDED. Google's guidance is that a sitemap
 *    contains canonical URLs you want indexed; submitting 86 pages that read
 *    "Content will appear here" invites a thin-content assessment across the
 *    whole site. Excluded URLs are still crawlable — this is a prioritisation
 *    signal, not a block. They re-enter the sitemap automatically as soon as
 *    the placeholder text is removed, so M2 needs no change here.
 *
 *  - Output is a sitemap index plus one sitemap per section. At 336 URLs a
 *    single file would be well within the 50,000 limit, but Search Console
 *    reports index coverage per submitted sitemap — segmenting turns "how much
 *    of the site is indexed?" into "which section is failing?", which is the
 *    exact question this site needs answered.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC_DIR = join(ROOT, 'public');

const BASE_URL = (process.env.SITE_URL || 'https://documentation.flashfx.app').replace(/\/$/, '');

/** Marker rendered by scaffolded pages that have no content yet. */
const PLACEHOLDER_MARKER = 'Content will appear here';

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

// ---------------------------------------------------------------------------
// Parse the route table
// ---------------------------------------------------------------------------

const appSource = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');

/** component name -> source file path, from App.tsx's import statements. */
function parseImports(source) {
  const map = new Map();
  const re = /^import\s+(\w+)\s+from\s+'(\.\/[^']+)'/gm;
  let m;
  while ((m = re.exec(source)) !== null) {
    const [, name, rel] = m;
    if (!rel.startsWith('./pages/')) continue;
    const base = join(ROOT, 'src', rel.slice(2));
    const file = ['.tsx', '.ts', '/index.tsx'].map((ext) => base + ext).find(existsSync);
    if (file) map.set(name, file);
  }
  return map;
}

/** route path -> component name, from App.tsx's <Route> elements. */
function parseRoutes(source) {
  const routes = [];
  const re = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    routes.push({ path: m[1], component: m[2] });
  }
  return routes;
}

const imports = parseImports(appSource);
const routes = parseRoutes(appSource);

// ---------------------------------------------------------------------------
// Content-driven data sources
// ---------------------------------------------------------------------------

/** Blog slugs + publication dates — the only trustworthy lastmod on the site. */
function parseBlogPosts() {
  const src = readFileSync(join(ROOT, 'src', 'data', 'blogPosts.ts'), 'utf8');
  const posts = [];
  const re = /slug:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const [, slug, dateText] = m;
    const parsed = new Date(`${dateText} UTC`);
    posts.push({
      slug,
      lastmod: Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().slice(0, 10),
    });
  }
  return posts;
}

/**
 * Tutorial routes that actually have content. Today that means "has a video".
 * When M2 adds written steps to TutorialDetail.tsx, widen this to read whatever
 * structure holds the prose — the rest of the generator needs no change.
 */
function parseTutorialsWithContent() {
  const src = readFileSync(join(ROOT, 'src', 'pages', 'TutorialDetail.tsx'), 'utf8');
  const videoBlock = src.match(/const tutorialVideos[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!videoBlock) return new Set();
  const paths = [...videoBlock[1].matchAll(/'(\/tutorials\/[^']+)'/g)].map((m) => m[1]);
  return new Set(paths);
}

const blogPosts = parseBlogPosts();
const tutorialsWithContent = parseTutorialsWithContent();

// ---------------------------------------------------------------------------
// Classify every route
// ---------------------------------------------------------------------------

const placeholderCache = new Map();
function isPlaceholder(file) {
  if (!file) return false;
  if (!placeholderCache.has(file)) {
    placeholderCache.set(file, readFileSync(file, 'utf8').includes(PLACEHOLDER_MARKER));
  }
  return placeholderCache.get(file);
}

const included = [];
const excluded = [];

function include(path, lastmod = null) {
  included.push({ path, lastmod });
}
function exclude(path, reason) {
  excluded.push({ path, reason });
}

for (const { path, component } of routes) {
  // Catch-all: renders <Home />. Never a canonical URL.
  if (path === '*') {
    exclude(path, 'catch-all route');
    continue;
  }

  // Dynamic blog route: expand to the real post URLs, with real dates.
  if (path === '/blog/:slug') {
    for (const post of blogPosts) include(`/blog/${post.slug}`, post.lastmod);
    continue;
  }

  // Tutorials: only those with content. The other 57 render a title over
  // "Video coming soon" and would be 57 near-duplicate empty pages.
  if (path.startsWith('/tutorials/') && !tutorialsWithContent.has(path)) {
    exclude(path, 'tutorial placeholder (no video, no written steps)');
    continue;
  }

  // Scaffolded pages that were never written.
  if (isPlaceholder(imports.get(component))) {
    exclude(path, 'placeholder page ("Content will appear here")');
    continue;
  }

  include(path);
}

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
const routePaths = new Set(routes.map((r) => r.path));
const dangling = [...navPaths].filter((p) => !routePaths.has(p)).sort();

if (dangling.length > 0) {
  console.error(`  WARNING  ${dangling.length} navigation links have no matching route.`);
  console.error('           These render the homepage at HTTP 200 (soft 404):');
  for (const p of dangling) console.error(`             ${p}`);
  console.error('');
  if (process.env.SITEMAP_STRICT === '1') process.exit(1);
}
