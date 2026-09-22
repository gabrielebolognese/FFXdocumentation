/**
 * Shared route parsing for scripts/generate-sitemap.mjs and
 * scripts/prerender.mjs.
 *
 * Both need the same answer to "what URLs does this site have?", and a sitemap
 * that disagrees with the set of prerendered files would either advertise URLs
 * that 404 or leave real pages undiscoverable. One parser, one answer.
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Marker rendered by scaffolded pages that have no content yet. */
export const PLACEHOLDER_MARKER = 'Content will appear here';

/** component name -> source file path, from App.tsx's import statements. */
export function parseImports(source) {
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
export function parseRoutes(source) {
  const routes = [];
  const re = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}/g;
  let m;
  while ((m = re.exec(source)) !== null) {
    routes.push({ path: m[1], component: m[2] });
  }
  return routes;
}

/** Blog slugs + publication dates — the only trustworthy lastmod on the site. */
export function parseBlogPosts() {
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
 * structure holds the prose.
 */
export function parseTutorialsWithContent() {
  const src = readFileSync(join(ROOT, 'src', 'pages', 'TutorialDetail.tsx'), 'utf8');
  const videoBlock = src.match(/const tutorialVideos[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!videoBlock) return new Set();
  return new Set([...videoBlock[1].matchAll(/'(\/tutorials\/[^']+)'/g)].map((m) => m[1]));
}

/**
 * "From Beginner to Hero" steps that have a real video rather than a stand-in.
 *
 * A step object in src/data/beginnerToHero.ts carries `videoId` only once a
 * real FlashFX recording exists for it. Until then the page renders a rotating
 * placeholder video, and it is still prerendered — a URL a user can reach must
 * return real HTML — but it stays out of the sitemap, exactly as the empty
 * /tutorials/* pages do. Adding `videoId` lets the step into the sitemap on the
 * next build with no other change.
 *
 * Step objects hold only string fields, so `[^}]*` safely bounds each one. The
 * `BeginnerToHeroStep` interface declares `slug: string` without quotes, so it
 * cannot match.
 */
export function parseCourseStepsWithVideo() {
  const src = readFileSync(join(ROOT, 'src', 'data', 'beginnerToHero.ts'), 'utf8');
  const withVideo = new Set();
  for (const match of src.matchAll(/\{\s*slug: '([^']+)'[^}]*\}/g)) {
    if (match[0].includes('videoId:')) withVideo.add(`/beginner-to-hero/${match[1]}`);
  }
  return withVideo;
}

const placeholderCache = new Map();
export function isPlaceholder(file) {
  if (!file) return false;
  if (!placeholderCache.has(file)) {
    placeholderCache.set(file, readFileSync(file, 'utf8').includes(PLACEHOLDER_MARKER));
  }
  return placeholderCache.get(file);
}

/**
 * Every concrete URL the app can serve, with a flag for whether it belongs in
 * the sitemap.
 *
 * The distinction matters: placeholder and empty-tutorial pages are still
 * *prerendered* — a real URL a user can reach must return real HTML — but they
 * are kept out of the sitemap so Google isn't invited to index empty pages.
 */
export function collectUrls() {
  const appSource = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');
  const imports = parseImports(appSource);
  const routes = parseRoutes(appSource);
  const blogPosts = parseBlogPosts();
  const tutorialsWithContent = parseTutorialsWithContent();
  const courseStepsWithVideo = parseCourseStepsWithVideo();

  const urls = [];

  for (const { path, component } of routes) {
    if (path === '*') continue;

    if (path === '/blog/:slug') {
      for (const post of blogPosts) {
        urls.push({ path: `/blog/${post.slug}`, lastmod: post.lastmod, inSitemap: true });
      }
      continue;
    }

    if (path.startsWith('/tutorials/') && !tutorialsWithContent.has(path)) {
      urls.push({ path, lastmod: null, inSitemap: false, reason: 'tutorial placeholder (no video, no written steps)' });
      continue;
    }

    // The course overview is real content and always belongs in the sitemap;
    // only its individual steps wait on a video.
    if (path.startsWith('/beginner-to-hero/') && !courseStepsWithVideo.has(path)) {
      urls.push({ path, lastmod: null, inSitemap: false, reason: 'course step (placeholder video)' });
      continue;
    }

    if (isPlaceholder(imports.get(component))) {
      urls.push({ path, lastmod: null, inSitemap: false, reason: 'placeholder page ("Content will appear here")' });
      continue;
    }

    urls.push({ path, lastmod: null, inSitemap: true });
  }

  urls.sort((a, b) => a.path.localeCompare(b.path));
  return { urls, routes, imports };
}
