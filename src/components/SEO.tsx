import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { buildGraph, SITE_URL } from '../utils/structuredData';

const SITE_NAME = 'FlashFX Documentation';

/**
 * Square app icon, used until a purpose-built 1200x630 share image exists.
 * `twitter:card` is `summary` rather than `summary_large_image` to match —
 * a square image in a large-image card renders letterboxed and cropped.
 */
const DEFAULT_OG_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

interface SEOProps {
  title: string;
  description: string;
  /**
   * Accepted but not rendered. Google has ignored the keywords meta since 2009.
   * The prop stays in the interface because ~231 pages pass it; removing it
   * would be a codebase-wide edit for no gain.
   */
  keywords?: string;
  ogImage?: string;
  /** Set on pages that must never be indexed (404, placeholders). */
  noindex?: boolean;
  /**
   * Extra JSON-LD entities merged into this page's `@graph` — e.g. a
   * VideoObject from TutorialDetail. Build them with the helpers in
   * utils/structuredData.ts so `@id` cross-references stay consistent.
   */
  structuredData?: Record<string, unknown>[];
}

/**
 * Pages are inconsistent about whether they suffix their own title, so
 * normalise here: append the site name only when the title doesn't already
 * carry the brand. Without this, ~126 pages would render
 * "… | FlashFX Documentation | FlashFX Documentation".
 */
function buildTitle(title: string): string {
  const trimmed = title?.trim();
  if (!trimmed) return SITE_NAME;
  if (/flashfx/i.test(trimmed)) return trimmed;
  return `${trimmed} | ${SITE_NAME}`;
}

/**
 * Canonical URL: absolute, no query string, no trailing slash — except the
 * root, which keeps its slash so it matches the canonical declared in
 * index.html. Two spellings of the homepage URL would be two canonicals.
 */
function buildCanonical(pathname: string): string {
  const path = pathname.replace(/\/+$/, '');
  return path ? `${SITE_URL}${path}` : `${SITE_URL}/`;
}

export default function SEO({ title, description, ogImage, noindex = false, structuredData }: SEOProps) {
  const { pathname } = useLocation();

  const fullTitle = buildTitle(title);
  const canonical = buildCanonical(pathname);
  const image = ogImage || DEFAULT_OG_IMAGE;

  // Suppressed on noindex pages: structured data describes content meant for
  // the index, and a 404 is not that.
  const graph = noindex
    ? null
    : buildGraph({ title: fullTitle, description, canonical, pathname, extra: structuredData });

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {graph && <script type="application/ld+json">{graph}</script>}
    </Helmet>
  );
}
