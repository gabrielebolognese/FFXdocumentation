import { sidebarConfigs, mainTabs, SidebarConfig, SidebarItem } from '../data/navigation';

/**
 * JSON-LD builders. Everything is emitted as a single `@graph` from
 * src/components/SEO.tsx, with entities cross-referenced by `@id` so the
 * Organization and WebSite are declared once and pointed at rather than
 * duplicated on every page.
 *
 * Scope note — three features recommended in the original M4 plan are NOT
 * implemented, because Google has retired all three:
 *
 *   FAQPage      rich results stopped appearing 2026-05-07; docs removed
 *                2026-06-15. The type is still valid schema.org, but the
 *                troubleshooting pages are one question with one answer each,
 *                which TechArticle already models more honestly.
 *   HowTo        rich results retired; documentation removed.
 *   SearchAction sitelinks searchbox deprecated 2024-11-21.
 *
 * Live and implemented: Organization, WebSite, BreadcrumbList, TechArticle,
 * SoftwareApplication, VideoObject.
 *
 * Deliberately absent: `datePublished` / `dateModified` on TechArticle, and
 * `offers` / `aggregateRating` on SoftwareApplication. No trustworthy source
 * for either exists in the repo, and fabricated structured data is a
 * manual-action risk. See SEO-documentation.md M4 for what unblocks them.
 */

export const SITE_URL = 'https://documentation.flashfx.app';
const PRODUCT_URL = 'https://flashfx.app';
const EDITOR_URL = 'https://editor.flashfx.app';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

type Json = Record<string, unknown>;

/**
 * The entity signal. `sameAs` is what tells Google which "FlashFX" this is —
 * the name collides with an unrelated FX/payments company, so linking the
 * documentation to the product's own verified profiles is the disambiguation
 * play described in SEO-documentation.md section 5.
 */
export function organizationEntity(): Json {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'FlashFX',
    url: PRODUCT_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    description:
      'FlashFX is a browser-based motion graphics and animation editor for designing, animating and exporting motion content without desktop software.',
    sameAs: [
      'https://x.com/FlashFXeditor',
      'https://www.instagram.com/flashfxeditor',
      'https://www.youtube.com/@flashfxeditor',
    ],
  };
}

export function websiteEntity(): Json {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: 'FlashFX Documentation',
    description: 'Official documentation for the FlashFX motion and animation editor.',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en',
  };
}

/**
 * Homepage only. No `offers` or `aggregateRating`: both would be required for
 * a Software App rich result, and neither can be sourced without inventing
 * numbers. The entity itself still helps Google associate the docs with the
 * product.
 */
export function softwareApplicationEntity(): Json {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: 'FlashFX',
    url: EDITOR_URL,
    applicationCategory: 'DesignApplication',
    applicationSubCategory: 'Motion graphics and animation editor',
    operatingSystem: 'Web browser',
    browserRequirements: 'Requires a WebGL-capable browser (Chrome, Edge, Firefox, Safari, Brave, Opera)',
    description:
      'Browser-based motion graphics editor for creating, animating and exporting vector animations, with a timeline, keyframe editor, GPU-accelerated effects and 3D support.',
    publisher: { '@id': ORG_ID },
    softwareHelp: { '@id': WEBSITE_ID },
  };
}

export function techArticleEntity(opts: {
  title: string;
  description: string;
  canonical: string;
  /** Omit the `breadcrumb` link when no BreadcrumbList is in the graph. */
  hasBreadcrumb?: boolean;
}): Json {
  return {
    '@type': 'TechArticle',
    '@id': `${opts.canonical}#article`,
    headline: opts.title,
    description: opts.description,
    url: opts.canonical,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
    inLanguage: 'en',
    about: { '@id': SOFTWARE_ID },
    ...(opts.hasBreadcrumb ? { breadcrumb: { '@id': `${opts.canonical}#breadcrumb` } } : {}),
  };
}

export function videoObjectEntity(opts: {
  name: string;
  description: string;
  videoId: string;
  canonical: string;
}): Json {
  return {
    '@type': 'VideoObject',
    '@id': `${opts.canonical}#video`,
    name: opts.name,
    description: opts.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${opts.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${opts.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${opts.videoId}`,
    publisher: { '@id': ORG_ID },
  };
}

// ---------------------------------------------------------------------------
// Breadcrumbs
// ---------------------------------------------------------------------------

/**
 * path -> the label chain that leads to it, built once from the same
 * `sidebarConfigs` tree the sidebar and search index walk. Pages absent from
 * navigation (the orphan set) fall back to URL-segment derivation.
 */
function buildLabelIndex(): Map<string, { label: string; trail: string[] }> {
  const index = new Map<string, { label: string; trail: string[] }>();

  const walk = (item: SidebarItem, trail: string[]) => {
    if (item.path && !item.external && !index.has(item.path)) {
      index.set(item.path, { label: item.label, trail });
    }
    item.children?.forEach((child) => walk(child, [...trail, item.label]));
  };

  const walkConfig = (config: SidebarConfig) => {
    config.iconItems?.forEach((item) => walk(item, []));
    config.sections?.forEach((section) =>
      section.items.forEach((item) => walk(item, section.label ? [section.label] : []))
    );
    config.items?.forEach((item) => walk(item, []));
  };

  Object.values(sidebarConfigs).forEach(walkConfig);
  return index;
}

const labelIndex = buildLabelIndex();

/** "shapes-and-paths" -> "Shapes And Paths". Fallback for unindexed pages. */
function humanize(segment: string): string {
  return segment
    .split('-')
    .map((word) => (word.length <= 2 ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)))
    .join(' ');
}

/**
 * Which header tab a path belongs to. Mirrors the resolution in Layout,
 * Sidebar and Header — note that `/troubleshooting/*` belongs to the
 * `/runtimes` tab and `/beginner-to-hero/*` to `/tutorials`, which is why this
 * can't be a plain prefix match.
 */
function resolveTab(pathname: string): { label: string; path: string } | null {
  if (pathname === '/') return null;
  if (pathname.startsWith('/troubleshooting')) return { label: 'Troubleshooting', path: '/runtimes' };
  if (pathname.startsWith('/beginner-to-hero')) return { label: 'Tutorials', path: '/tutorials' };
  const tab = mainTabs.find((t) => !t.external && t.path !== '/' && pathname.startsWith(t.path));
  return tab ? { label: tab.label, path: tab.path } : null;
}

export interface Crumb {
  name: string;
  url: string;
}

/**
 * Home -> Tab -> Page.
 *
 * No intermediate category crumb. Navigation records one (e.g. "Fundamentals
 * & Settings"), but the site has no category landing pages, so that level has
 * no URL of its own — emitting it would repeat the page's own URL at two
 * positions in the trail. A breadcrumb level that doesn't correspond to a real
 * URL isn't a breadcrumb.
 *
 * Returns an empty array for the homepage: Google needs at least two
 * ListItems, and a one-item trail is discarded anyway.
 */
export function buildCrumbs(pathname: string, pageTitle: string): Crumb[] {
  if (pathname === '/') return [];

  const crumbs: Crumb[] = [{ name: 'FlashFX Documentation', url: `${SITE_URL}/` }];

  const tab = resolveTab(pathname);
  if (tab && tab.path !== pathname) {
    crumbs.push({ name: tab.label, url: `${SITE_URL}${tab.path}` });
  }

  const entry = labelIndex.get(pathname);
  const leaf =
    entry?.label || pageTitle.split('|')[0].trim() || humanize(pathname.split('/').filter(Boolean).pop() || '');
  crumbs.push({ name: leaf, url: `${SITE_URL}${pathname}` });

  return crumbs;
}

export function breadcrumbEntity(canonical: string, crumbs: Crumb[]): Json {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Graph assembly
// ---------------------------------------------------------------------------

/**
 * Stub node so `TechArticle.about` resolves within the page's own graph.
 * The homepage carries the full SoftwareApplication; every other page carries
 * this, which keeps the graph self-contained without repeating ~600 bytes of
 * product description on all 208 URLs. Same `@id`, so consumers merge them.
 */
function softwareReference(): Json {
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: 'FlashFX',
    url: EDITOR_URL,
  };
}

export function buildGraph(opts: {
  title: string;
  description: string;
  canonical: string;
  pathname: string;
  extra?: Json[];
}): string {
  const isHome = opts.pathname === '/';
  const crumbs = buildCrumbs(opts.pathname, opts.title);

  const graph: Json[] = [organizationEntity(), websiteEntity()];

  graph.push(isHome ? softwareApplicationEntity() : softwareReference());

  // Omitted on the homepage, where the trail would be a single item.
  if (crumbs.length >= 2) graph.push(breadcrumbEntity(opts.canonical, crumbs));

  graph.push(
    techArticleEntity({
      title: opts.title,
      description: opts.description,
      canonical: opts.canonical,
      hasBreadcrumb: crumbs.length >= 2,
    })
  );

  if (opts.extra?.length) graph.push(...opts.extra);

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
