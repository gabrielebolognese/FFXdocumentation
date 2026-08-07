# SEO Documentation — FlashFX Docs

Full technical + content SEO audit of `documentation.flashfx.app`, and the milestone plan to fix it.

**Audited:** 2026-08-07 · **Codebase:** Vite + React 18 SPA, 235 page components, 327 declared routes
**Goal:** rank #1 for *"FlashFX docs"*, *"FlashFX documentation"*, and for how-to/troubleshooting questions about the FlashFX editor.

---

## 0. Verdict

**The site is currently close to un-rankable, and the cause is a single-digit number of defects — not a content problem.**

There is a large amount of genuinely useful documentation here (~336 indexable URLs, 78 pages with substantial depth). Almost none of it can win a search result today, for four compounding reasons:

1. **Every page emits the identical `<title>Documentation</title>`.** The title tag is the single strongest on-page ranking signal and the headline of every SERP result. 231 pages currently compete with each other under one meaningless, brand-free title. A search for "FlashFX docs" has nothing to match against.
2. **There is no `robots.txt` and no `sitemap.xml`, and 69 of the routed URLs have zero inbound internal links.** Those 69 pages — the entire 3D, constraints, state-machines, layouts, shapes and interface-overview trees — are undiscoverable by any crawler. They will never be indexed.
3. **The site renders client-side only, with no canonical tags and no structured data.** Googlebot will eventually render it, but every other crawler that matters here (Bing, DuckDuckGo, Perplexity, ChatGPT's fetcher — the exact set the site's own header bar advertises) largely will not.
4. **21 navigation links point at routes that do not exist**, and the catch-all route serves the homepage at HTTP 200 instead of a 404. Google sees 21 duplicate-homepage soft-404s advertised in the primary navigation.

None of these are hard to fix. Items 1, 2 and 4 are roughly a day of work combined and account for most of the recoverable traffic. The plan below sequences them by impact-per-hour.

**One strategic risk to settle before investing in content:** "FlashFX" is not an unambiguous brand token — there is at least one established company (an Australian FX/payments business) trading under a near-identical name. Bare `flashfx` queries may be permanently contested. Milestone M0 includes a SERP check to confirm this; if it holds, the keyword strategy in §5 should anchor on qualified terms (*FlashFX editor*, *FlashFX animation*, *FlashFX docs*) rather than the bare brand.

---

## 1. Method and limits

**What was audited:** the full source tree — `index.html`, `src/App.tsx` (route table), `src/data/navigation.ts` (nav + search index source), `src/components/SEO.tsx`, `src/index.css`, all 235 page components under `src/pages/`, `public/`, and the build/deploy configuration.

**What this audit is based on:** static analysis of the repository. Every number below is derived from the source and is reproducible.

**What this audit could NOT check, and why:**

| Not checked | Reason | Covered by |
|---|---|---|
| Live HTTP status codes, redirects, HTTPS config | Requires fetching the deployed site | M0 |
| Whether the host serves an SPA fallback (deep links may hard-404) | No hosting config in the repo at all | M0 |
| Current index coverage, impressions, existing rankings | Requires Google Search Console access | M0 |
| Real Core Web Vitals field data | Requires CrUX / a live Lighthouse run | M0 |
| Competitor SERP landscape for "flashfx" | Requires live SERP inspection | M0 |
| Backlink profile / referring domains | Requires a third-party tool | M6 |

M0 exists specifically to close these gaps. Do not skip it — a couple of them (SPA fallback in particular) could change the priority order.

---

## 2. Site inventory — the sitemap

This is the URL surface the sitemap must cover, and the map of what is actually reachable.

### 2.1 Totals

| Metric | Count |
|---|---|
| `<Route>` entries in `src/App.tsx` | 327 |
| — static URLs | 325 |
| — dynamic (`/blog/:slug`) | 1 |
| — catch-all (`*`) | 1 |
| Blog post URLs (from `src/data/blogPosts.ts`) | 11 |
| **Total indexable URLs** | **336** |
| Page components under `src/pages/` | 235 |
| Paths declared in `src/data/navigation.ts` | 277 |

### 2.2 URLs by section

| Section | URLs | Notes |
|---|---|---|
| `/editor/*` | 165 | The core value of the site |
| `/troubleshooting/*` | 65 | All render `TroubleshootingDetail.tsx` |
| `/tutorials/*` | 61 | All render `TutorialDetail.tsx`; 57 are video placeholders |
| `/lite/*` | 14 | FlashFX Lite |
| `/blog` + posts | 12 | Real content, real detail views |
| Top-level singles | 23 | `/pricing`, `/support`, `/terms`, `/community`, etc. |

`/editor/*` breaks down as: shapes 22 · **3d 22** · animate 15 · timeline 14 · text 14 · images 14 · gpu 14 · fundamentals 13 · constraints 9 · layouts 7 · state-machines 6 · interface-overview 5 · exporting 3 · share-links 2 · events 2 · data-binding 2.

### 2.3 Crawl reachability — the critical number

| Bucket | Count | Consequence |
|---|---|---|
| URLs reachable via nav + no crawl blockers | 256 | Discoverable once titles are fixed |
| **URLs with zero inbound internal links** | **69** | **Invisible to every crawler** |
| Nav links pointing at non-existent routes | 21 | Soft 404s serving homepage HTML at 200 |
| Page components with content but no route | 28 | Written, paid for, earning nothing |
| **Routed URLs that are empty placeholders** | **70** | **Excluded from the sitemap — see P1-5** |
| **URLs actually worth submitting today** | **208** | **What the generated sitemap contains** |

The 69 orphaned URLs (Appendix C) are not marginal pages — they include the complete `/editor/3d/*` (22), `/editor/constraints/*` (9), `/editor/shapes/*` (8), `/editor/state-machines/*` (6), `/editor/layouts/*` (7), `/editor/interface-overview/*` (5), and `/editor/exporting/*` (3) trees. This is the most technically differentiated content on the site and it is currently unreachable.

---

## 3. Findings

Severity: **P0** = blocking indexation or ranking outright · **P1** = major ranking loss · **P2** = meaningful improvement · **P3** = polish.

### P0-1 — Every page has the same title tag

`src/components/SEO.tsx:11` discards the `title` prop it receives:

```tsx
export default function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const fullTitle = `Documentation`;          // <-- `title` is never used
```

230 of 231 pages pass a correct, descriptive title (`"Snapping System | FlashFX Documentation"`). All 231 render `<title>Documentation</title>`. `index.html:7` hardcodes the same.

**Impact:** maximal. The title is the primary relevance signal and the clickable SERP headline. With no page-level titles and no brand token anywhere in them, the site cannot match *"FlashFX docs"* or any topic query. Google will also treat 231 identically-titled pages as a duplicate-content cluster and index a fraction of them.

**Fix:** use the prop. One line. This is the highest impact-per-character change available.

### P0-2 — No robots.txt, no sitemap.xml

`public/` contains 26 images and nothing else. No `robots.txt`, `sitemap.xml`, `_redirects`, `_headers`, `netlify.toml`, or `vercel.json` exists anywhere in the repository.

**Impact:** no crawl directives, no canonical host declaration, and — critically — no way for the 69 link-orphaned URLs to ever be discovered. A sitemap is the only discovery mechanism available to them.

### P0-3 — 69 routed URLs have no inbound internal link

Cross-referencing `src/App.tsx` routes against `src/data/navigation.ts` and every `<Link>` in the source: 69 valid routes are referenced from nowhere. Full list in Appendix C.

**Impact:** PageRank cannot flow to them, crawlers cannot reach them, and the ⌘K search index (built from `navigation.ts` in `src/utils/searchIndex.ts`) cannot surface them either — so users can't find them on-site any more than Google can.

### P0-4 — Client-side rendering only, for a documentation site

No SSR, no SSG, no prerendering. `src/App.tsx` statically imports all 235 page components — roughly 26,000 lines of page code in a single eager bundle — and every word of content requires JS execution to appear.

**Impact:** Googlebot renders JS but defers it to a second queue, which slows indexation of new/changed pages from hours to days or weeks. Bing, DuckDuckGo, and AI crawlers (Perplexity, ChatGPT, Claude) handle JS-rendered content poorly or not at all. For a docs site whose entire purpose is being found when someone asks a question, this is a structural handicap — and increasingly so as answer engines take share from classic search.

### P0-5 — The sidebar rendered no links at all *(found and fixed in M3)*

> ## ✅ **Fixed — 2026-08-07.** Internal links per page: **18 → 138.**

Found while verifying M3, and more serious than the orphan problem M3 was written to solve.

`Sidebar.tsx` unmounted collapsed children rather than hiding them. Sidebar state lives in `useState` with no persistence and defaults to collapsed, so during server rendering **nothing was expanded and no sub-page link was ever emitted**. A prerendered page carried 18 links, all of them header and footer chrome:

| Link group | Before | After |
|---|---|---|
| `/editor/fundamentals/*` | **0** | 13 |
| `/editor/shapes/*` | **0** | 14 |
| `/editor/gpu/*` | **0** | 14 |
| `/editor/3d/*` | **0** | 22 |
| **Total internal links per page** | **18** | **138** |

**Why this outranks the orphan finding.** P0-3 reported 69 pages with no inbound link. The real number was effectively *every* page: from a crawler's perspective the site had no internal link graph whatsoever. Discovery rested entirely on the sitemap, no PageRank flowed anywhere, and adding pages to `navigation.ts` — the whole of M3 — would have changed nothing on its own.

**The fix** renders children always and hides them with the `hidden` attribute when collapsed, instead of unmounting. The links live in the HTML for crawlers; users see identical collapse behaviour; `hidden` also keeps collapsed links out of the accessibility tree and tab order, so keyboard navigation is unaffected. This is not cloaking — the content is genuinely present and the accordion is a standard disclosure pattern.

**How it was missed until now.** Every earlier check verified *rendered content* — titles, canonicals, h1s, JSON-LD, body copy — and all of those were correct. Nothing had counted the links. It only surfaced because M3 gave a concrete number to check against: "22 3D pages should now be linked", which returned 0.

---

### P1-1 — Catch-all route served the homepage *(revised — the "21 broken nav links" were a false positive)*

> **Correction.** The first pass reported 21 navigation links producing soft 404s. That was wrong. Those paths live in three exports — `featuresSidebar` (20 paths), `sidebarShortcuts` (4) and `sidebarSections` (9) — that are **declared and exported but referenced nowhere**: not by `sidebarConfigs`, not by any component. They never render as anchors, so no crawler has ever seen them. The original scan grepped every `path:` in `navigation.ts` and could not tell live config from dead code.
>
> No action was taken on them. They are dead code with zero SEO impact — a code-hygiene item, not a ranking one. The generator's guard now walks only configs reachable from `sidebarConfigs`, and reports **zero** live dangling links.

The genuine half of this finding stands: `src/App.tsx` ended with `<Route path="*" element={<Home />} />`, so *any* mistyped, guessed, or stale URL rendered full homepage content at HTTP 200 — a soft 404 on an unbounded URL space, which is worse than 21 fixed ones.

**Fixed in M1.** The catch-all now renders `src/pages/NotFound.tsx`, which carries `noindex, follow` and links back into the four main sections.

**Residual limitation:** a static host returns 200 for these URLs regardless, because there is no server to set a status code. `noindex` is what actually keeps them out of the index. A true 404 status needs either prerendering (M5) or a host-level rule.

### P1-2 — No canonical tags anywhere

`SEO.tsx` emits no `<link rel="canonical">` and no `og:url`. With an SPA, tracking parameters, trailing-slash variants, and the catch-all serving homepage content on arbitrary paths, there is nothing telling Google which URL is authoritative for any given page.

### P1-3 — No structured data *(fixed in M4 — but half the recommendations were obsolete)*

The codebase had zero JSON-LD. It now emits a single `@graph` per page from `src/components/SEO.tsx`.

> **Correction.** The original list included three features Google has since retired. Checking their status before implementing was the difference between shipping useful markup and shipping dead weight:
>
> | Recommended | Actual status | Verdict |
> |---|---|---|
> | `FAQPage` on 65 troubleshooting pages | Rich results stopped **2026-05-07**; docs removed **2026-06-15** | **Dropped** |
> | `HowTo` on tutorial pages | Rich results retired; documentation removed | **Dropped** |
> | `WebSite` + `SearchAction` (sitelinks searchbox) | Deprecated **2024-11-21** | **Dropped** |
>
> `FAQPage` is still valid schema.org and harmless to emit, but it was dropped on semantic grounds too: each troubleshooting page is *one* question with one answer, not a FAQ list. `TechArticle` models that more honestly.

**Implemented** — all confirmed still live:

- `Organization` with `sameAs` → X, Instagram, YouTube. **The highest-value item here**, because it is the entity signal separating FlashFX-the-editor from the similarly-named payments company (§5b).
- `WebSite`, publisher-linked to the Organization.
- `SoftwareApplication` — full description on the homepage, `@id`-matched stub elsewhere so `TechArticle.about` resolves inside each page's own graph instead of dangling.
- `TechArticle` on every indexable page, cross-linked to org / website / breadcrumb.
- `BreadcrumbList` — Home → Tab → Page.
- `VideoObject` on the 3 tutorials with real videos.

**Two omissions, both because the data doesn't exist:** `datePublished`/`dateModified` on `TechArticle`, and `offers`/`aggregateRating` on `SoftwareApplication`. The latter pair is exactly what a Software App rich result requires, so that rich result stays unavailable until real pricing and rating data exists. Inventing either is a manual-action risk — the same reasoning that kept `lastmod` off the sitemap.

### P1-4 — OG/Twitter images point at the wrong domain and at Bolt's default

- `src/components/SEO.tsx:12` → `https://flashfx.com/og-image.jpg` — **wrong TLD**, the product is `flashfx.app`
- `index.html:8,10` → `https://bolt.new/static/og_default.png` — leftover scaffold default

Every social share and every link preview currently shows a broken image or Bolt's logo. Two further wrong-TLD references: `src/pages/editor/fundamentals/Accessibility.tsx:199` (`accessibility@flashfx.com`) and `:218` (`flashfx.com/accessibility`).

### P1-5 — 86 pages are empty placeholders *(revised — the real number is far higher than first reported)*

> **Correction.** The first pass of this audit reported 22 empty 3D stubs. Building the sitemap generator forced an exact per-route content check, and the true figure is **86 placeholder files, 70 of them routed and live.** The remaining 16 are unrouted (they overlap the Appendix D set). Everything below reflects the verified count.

86 files under `src/pages/` render nothing but a heading and the literal string `Content will appear here`:

```tsx
<h1 className="…">SceneManager</h1>
<p className="text-sm text-white">Content will appear here.</p>
```

They are not confined to 3D. By area:

| Area | Placeholder pages |
|---|---|
| `editor/fundamentals` | 15 |
| `threed/*` (all subtrees) | 21 |
| `editor/constraints` | 9 |
| `editor/shapes` | 8 |
| `editor/layouts` | 7 |
| `editor/state-machines` | 6 |
| `editor/interface-overview` | 5 |
| `editor/exporting` | 3 |
| `editor/data-binding`, `events`, `share-links` | 6 |
| Top-level (`FeatureSupport`, `CaseStudies`, `Experts`, `CommunityOverview`, `Workspaces`, `S3Bucket`) | 6 |

**This substantially reframes P0-3 and M3.** The 69 link-orphaned URLs are not neglected content — they are overwhelmingly *unwritten* content, which is why nobody linked them. Adding them to the navigation without writing them first would convert a hidden problem into a visible one. M3 is therefore gated on M2, not parallel to it.

**Two findings that need attention beyond the sitemap:**

- **`/feature-support` is a placeholder, and it is a main header tab.** A top-level navigation destination renders "Content will appear here" to every visitor who clicks it.
- **`editor/fundamentals` — the most-linked section on the site — is 15 pages of placeholder.** This is where the highest-intent traffic would land.

**Impact:** submitting these would make 33% of the URL set empty on first crawl. They are excluded from the generated sitemap (see M1 status) and must be either written or `noindex`ed.

### P1-6 — 57 of 60 tutorial pages are placeholders

`src/pages/TutorialDetail.tsx` defines 60 tutorial titles but only 3 videos (lines 7–20). The other 57 render a title, an icon, and "Video coming soon" — no text at all. All 60 share the same meta description template: `Learn ${title.toLowerCase()} in FlashFX`.

**Impact:** 57 near-duplicate, zero-content pages. These are exactly the queries most worth winning ("how to animate rotation in FlashFX") and they currently offer a searcher nothing.

### P2-1 — Meta descriptions are too short

231 descriptions, all unique — good. But length distribution is poor:

| Length | Count |
|---|---|
| Under 70 chars | **108** |
| 70–119 | 110 |
| 120–160 (optimal) | 13 |
| Over 160 | 0 |

Shortest is 12 characters. Descriptions don't rank, but they drive click-through, and CTR is a ranking input over time. 218 of 231 pages leave SERP snippet space unused.

### P2-2 — Content corruption: em-dashes replaced by commas *(fixed)*

> ## ✅ **Repaired — 2026-08-07.** 812 fixes across 107 files. Zero residual in source or built HTML.

A find-and-replace had turned every ` — ` into a bare `,` with no following space, sitewide. It reached user-visible headings and SEO titles — `EasingPresets.tsx` rendered an `<h1>` of "Easing Presets,Full Reference", and the sidebar label in `navigation.ts` matched.

Repaired by `scripts/fix-punctuation.mjs` (committed, re-runnable, dry-run by default). **Three** distinct signatures, not the one originally reported:

| Signature | Fixes | Notes |
|---|---|---|
| `</strong>,text` | 572 | The bulk. Definition-list style throughout the editor docs. |
| `word,Word` in prose | 226 | Includes string literals — sidebar labels, ToC labels, `Table` row arrays. |
| `{',text'}` | 14 | Comma is the *first* character inside a JSX expression string, so it has a quote before it, not a word character. **Missed by the first two passes**; found only by re-scanning the built HTML after applying them. |

**What made this risky, and how it was contained.** A naive `word,Word` replacement corrupts code: `count: 10,label: 'x'` in an object literal matches `digit,letter` and would be rewritten into a syntax error. The script therefore classifies every character position as prose or code — tracking tag depth, brace depth and string context — and only rewrites prose. Attributes holding code (`className`, `href`, `d`, `style`, CSS-in-JS props) are denied outright.

**Two categories deliberately left alone:**

- **Comma followed by a space is never touched.** That is ordinary English; 21 such cases exist after `</strong>` alone, e.g. "…</strong>, not interleaved with them."
- **`{', '}`** — a real inline separator, distinguished from the corrupt `{',text'}` purely by the space.

Verified: 0 residual occurrences in source *and* in all 336 prerendered HTML files; build green; typecheck unchanged at its 139-error pre-existing baseline; the two ESLint errors that remain were confirmed present in `HEAD` before this change.

### P2-3 — Performance / Core Web Vitals

| Problem | Detail |
|---|---|
| Single eager bundle | 235 page components, ~26k LOC, no `React.lazy`, no route splitting |
| Render-blocking font | `src/index.css:1` — `@import url('https://fonts.googleapis.com/css2?family=Inter…')`. A CSS `@import` is the slowest possible way to load a font: it blocks until the CSS parses, then opens a new connection. |
| Oversized images | `VISUALS.png` 1.73 MB · `VISUALS2.png` 1.67 MB · `Screenshot_2026-03-01_200913.png` 552 KB · `firefox-logo.webp` 266 KB · `Safari-Logo.png` 263 KB. `public/` totals ~6.5 MB. |
| Duplicate asset | `android-chrome-192x192 copy.png` is byte-identical to `android-chrome-192x192.png` |

Every visitor downloads the whole documentation site to read one page. LCP and INP will both suffer, and Core Web Vitals is a confirmed (if modest) ranking factor.

### P2-4 — 28 written pages have no URL

28 page components exist under `src/pages/` with real content and are imported by nothing (Appendix D) — `PenToolOverview`, `TextStyles`, `Timeline`, `Groups`, `FillAndStroke`, `Keys`, `Interpolation`, and 21 more. Several are core topics that *should* be the site's strongest pages.

### ~~P3-1 — Missing image alt text~~ *(false positive — retracted)*

> The original scan reported 4 of 6 `<img>` tags missing `alt`. It checked line-by-line, and multi-line JSX puts `src` and `alt` on separate lines. A multiline-aware re-check found **all 6 tags have `alt`**. No action needed, no defect here.

### P3-2 — Deprecated `keywords` meta on 231 pages

`SEO.tsx` emits `<meta name="keywords">`. Google has ignored this since 2009. Harmless, but it is dead weight and a signal of dated SEO practice.

### P3-3 — Internal pages flagged as external links

`src/data/navigation.ts` marks `/case-studies`, `/community`, `/blog`, `/early-access`, `/community-overview`, `/experts` and `/account-overview` as `external: true`, so `src/components/Sidebar.tsx:46` gives them `target="_blank"`. They are internal pages. Minor UX/consistency issue; `/case-studies` is also one of the 21 broken links.

### P3-4 — Work-in-progress banner in the header

`src/components/Header.tsx:55` renders "Documentation is work in progress and not complete" on every page. That string is in the DOM of all 336 URLs and is a candidate for snippet extraction. Once M2 lands, remove it or scope it to genuinely incomplete sections.

---

## 4. Milestones

Sequenced by impact-per-hour. Each milestone is independently shippable and has a concrete acceptance test. Effort estimates assume one developer.

---

### M0 — Baseline and verification *(0.5 day)*

**Nothing else should be measured until this exists.** Also closes the gaps in §1.

- [ ] Verify the production host serves an SPA fallback (all unknown paths → `index.html`). Test a deep link like `documentation.flashfx.app/editor/shapes/bones` in a fresh browser — if it hard-404s, **this becomes P0-0 and jumps ahead of everything else**.
- [ ] Confirm canonical host: `www` vs apex, HTTP→HTTPS redirect, trailing-slash behaviour.
- [ ] Create and verify a Google Search Console property (+ Bing Webmaster Tools). Record current index coverage, impressions, and top queries as the baseline.
- [ ] Run Lighthouse on the homepage, a deep editor page, and a tutorial page. Record LCP / INP / CLS.
- [ ] `site:documentation.flashfx.app` — how many URLs are actually indexed today?
- [ ] SERP check: search `flashfx`, `flashfx docs`, `flashfx documentation`, `flashfx editor`, `flashfx animation`. Document who ranks and whether the fintech brand collision is real. **This decides the §5 keyword strategy.**
- [ ] Confirm whether `flashfx.app` and `editor.flashfx.app` link to the docs subdomain, and how.

**Acceptance:** a one-page baseline snapshot committed alongside this document. Every M0 question has a written answer.

---

### M1 — Make the site indexable *(1 day) — highest ROI in the plan*

Fixes P0-1, P0-2, P0-3, P1-1, P1-2, P1-4.

> ## ✅ **M1 COMPLETE — 2026-08-07**
>
> Every page now has a unique, brand-bearing title and a self-referencing canonical.
> `robots.txt` and six section sitemaps (208 URLs) ship from a generator wired into the build.
> The catch-all serves a real, `noindex`ed 404 instead of homepage content.
>
> Verified: 12/12 head-output assertions pass (title normalisation, canonical form, `og:url`
> agreement, `noindex`, image domain); `npm run build` green; ESLint clean on all changed files;
> zero live dangling nav links.
>
> Reference: [Google — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) ·
> [Google — robots.txt spec](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt) ·
> [OpenAI bots](https://developers.openai.com/api/docs/bots)

- [x] **`src/components/SEO.tsx` now uses the `title` prop.** `buildTitle()` appends ` | FlashFX Documentation` only when the title doesn't already carry the brand — ~126 pages self-suffix, and appending blindly would have produced "… | FlashFX Documentation | FlashFX Documentation".
- [x] **Canonical + `og:url`**, both derived from `useLocation()`. Trailing slashes stripped, except the root, which keeps its slash so it agrees with `index.html`. *(A bug here — the homepage canonical rendering without its slash, giving the homepage two canonical spellings — was caught by the verification pass, not by review.)*
- [x] **OG image fixed** to `/android-chrome-512x512.png` on the correct domain, replacing `flashfx.com/og-image.jpg` (wrong TLD) and `bolt.new/static/og_default.png` (scaffold leftover). Added `og:site_name`, `og:type`, `og:url`. `twitter:card` is `summary`, not `summary_large_image` — the icon is square, and a square image in a large-image card renders letterboxed. **Follow-up: a purpose-built 1200×630 share image is a small design task worth doing.**
- [x] `index.html` given a real title, description, canonical and full social tags — this is what a non-rendering crawler sees before React mounts.
- [x] Fixed the two wrong-TLD references in `Accessibility.tsx:199,218`.
- [x] **`public/robots.txt`** — allow-all, sitemap declared, and AI crawlers named explicitly in two blocks: search/retrieval (`OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot`, `ChatGPT-User`, `Claude-User`, `Perplexity-User`, `Applebot`) and training (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `meta-externalagent`). Both allowed; the split means opting out of training later costs no AI-answer citations. Named groups each repeat `Allow: /` because a crawler matching its own user-agent ignores the `*` group entirely.
- [x] **`scripts/generate-sitemap.mjs`** — parses `src/App.tsx`, expands `/blog/:slug` from `blogPosts.ts`, classifies every route, and emits a sitemap index + 6 section sitemaps. Wired into `npm run build`, so it cannot drift. Also warns on nav paths with no route (the M3 CI guard, delivered early — set `SITEMAP_STRICT=1` to make it fail the build).
- [x] **208 URLs submitted, 128 excluded** — 70 placeholder pages, 57 empty tutorials, 1 catch-all. `<priority>` and `<changefreq>` omitted (Google ignores both); `<lastmod>` emitted only for blog posts, where `blogPosts.ts` has real dates — every file in `src/pages/` shares one mtime, so a file-derived date would be fiction, and Google devalues a lastmod it learns to distrust.
- [x] **Replaced the catch-all** with `src/pages/NotFound.tsx` — carries `noindex, follow`, shows the attempted path, and links into the four main sections.
- [x] ~~Fix the 21 broken nav links~~ — **not a real defect.** See the correction under P1-1: they exist only in exports that nothing references.

**Acceptance — met**, except the two items that require the deployed site:

| Criterion | Status |
|---|---|
| Every page has a unique title containing "FlashFX" | ✅ verified, 12/12 assertions |
| Self-referencing canonical on every page | ✅ verified |
| `/robots.txt` and `/sitemap.xml` resolve | ✅ in `dist/`, served by `vite preview` |
| Sitemap contains exactly the intended URL set | ✅ 208 URLs, leak-checked both directions |
| No live nav link 404s | ✅ generator guard reports zero |
| `npm run build` green, ESLint clean | ✅ |
| Sitemap submitted in Search Console | ⬜ **needs deploy + GSC access** |
| Deep links return 200 from the host (SPA fallback) | ⬜ **M0 — still unverified** |

---

### M2 — Fix the content that shouldn't be indexed

> ### ⛔ Standing constraint — the placeholder pages are **never** to be deleted
>
> Stated by the project owner on 2026-08-07: the 86 "Content will appear here" pages are a
> **queue of pages waiting to be written**, not abandoned scaffolding. The only acceptable
> actions are (a) write the content, or (b) keep the page out of the sitemap until it is written.
> Never remove the file, never remove its `<Route>`.
>
> Option (b) is already implemented and automatic: `scripts/lib/routes.mjs` detects the
> placeholder marker, so these pages are still prerendered (their URLs return real HTML) but stay
> out of the sitemap — and they re-enter it on their own the moment the marker is gone.
> Nothing needs to be un-done as pages get written.
>
> **Progress: punctuation repaired, 21 of 86 placeholder pages written.**
> The remaining 65 are blocked on a product question, not on effort — see below.

Fixes P1-5, P1-6, P2-2. Do this **before** M3 — pushing crawlers at 79 empty pages actively hurts.

- [x] **All 21 remaining 3D placeholder pages written** from `3D_DOCUMENTATION.md`, which maps 1:1 onto the page tree — transcription, not authorship. Architecture, full API reference, geometry/material parameter tables, performance, troubleshooting and extension guides. They entered the sitemap automatically (208 → 229 URLs) because the generator keys off the placeholder marker.
- [x] **Em-dash corruption repaired** — 812 fixes across 107 files. See P2-2.
- [ ] **57 tutorial placeholders** — still title-plus-"Video coming soon". Writable: the titles map onto `02_Manipulating_Shapes.md` and `05_Animate_Mode.md`, which carry procedural detail down to menu paths and shortcuts. Not yet attempted.
- [ ] ⛔ **65 placeholder pages are BLOCKED — they describe a different product.** See below.

### ⛔ The blocker: 65 pages document Rive, not FlashFX

Mapping every placeholder against the source material surfaced something the earlier passes missed. The `.md` source files cover exactly the topics that are **already written**. The 65 remaining placeholders are a disjoint set, and they are recognisably **Rive's feature list**:

| Cluster | Pages | Topics |
|---|---|---|
| `editor/constraints/*` | 9 | IK, distance, follow-path, rotation, scale, transform, translation constraints |
| `editor/shapes/*` | 8 | Bones, bone tips, joysticks, solos, trim path, meshes, clipping |
| `editor/layouts/*` | 7 | N-slicing, layout parameters, scrolling, styles |
| `editor/state-machines/*` | 6 | States, transitions, inputs, layers, listeners |
| `editor/interface-overview/*` | 5 | Stage, Hierarchy, Inspector — Rive's panel names, not FlashFX's |
| `editor/fundamentals/*` | 15 | Artboards, components, freeze/origin, transform spaces, design-vs-animate mode |
| `editor/exporting`, `events`, `data-binding`, `share-links` | 9 | Incl. one page literally named **`FramerAndRive`** |
| Top-level | 6 | FeatureSupport, CaseStudies, Experts, CommunityOverview, Workspaces, S3Bucket |

Three independent signals confirm the provenance:

1. **The dead `/features/api/*` nav paths** found in P1-1 — `artboards`, `mat2d`, `vec2d`, `renderer`, `paint`, `path`, `gradient`, `datavalue` — are the **Rive runtime API surface**, verbatim.
2. **Five placeholders duplicate already-written FlashFX pages under Rive's names**: `fundamentals/EditVertices` vs the written `shapes/VertexEditing`; `FillAndStroke` vs `FillTypes`; `Groups` vs `GroupsComposition`; `PenToolOverview` vs `PenTool`; `ShapesAndPathsOverview` vs `ShapePrimitives`.
3. **`share-links/FramerAndRive.tsx`** names the product outright.

**Why this stops the work rather than slowing it.** Writing these means inventing FlashFX features from a competitor's documentation — does FlashFX have IK constraints? bones? state machines? N-slicing? Nothing in this repo says so. Publishing 65 pages of invented behaviour would be worse than the placeholders: wrong documentation destroys user trust, generates support load, and is precisely what Google's helpful-content systems demote. It would actively undo the SEO work in M1–M5.

**What unblocks it, in order of preference:**

1. **Confirm which of these features FlashFX actually has**, and supply source material for those — same form as the existing `.md` files. Those pages then get written the same way the 3D pages just were.
2. **For features FlashFX does not have**, the pages should be removed from `navigation.ts` and their routes dropped. *(The files themselves stay — per the standing constraint above, placeholders are never deleted.)*
3. **Leave as-is.** Safe by default: they are already excluded from the sitemap and still prerender, so they cost nothing in SEO terms. They just earn nothing either.

**Acceptance:** no page in the sitemap contains "Content will appear here" or "Video coming soon"; zero `</strong>,` occurrences remain; every tutorial has a distinct description.

---

### M3 — Recover the orphaned content

> ## ✅ **M3 COMPLETE — 2026-08-07**
>
> Internal links per page **18 → 138**. All 22 written 3D pages are now linked, searchable
> and crawlable. A reverse guard now fails the build on any content page that nothing links to.

Fixes P0-3, and uncovered P0-5 — which turned out to be the larger problem.

- [x] **Fixed the sidebar link rendering (P0-5).** Collapsed children were unmounted, so no sub-page link reached the server-rendered HTML. They are now rendered always and hidden with the `hidden` attribute. **This was the actual blocker** — without it, adding pages to `navigation.ts` would have had no crawlable effect.
- [x] **Added the 22 written 3D pages to `navigation.ts`** as three groups: 3D System, 3D API Reference, 3D Guides. Confirmed present in the rendered sidebar HTML and in the ⌘K index (22 entries; "MaterialSystem" and "gizmo" both resolve).
- [x] **Added the reverse CI guard** to `scripts/generate-sitemap.mjs`: warns on any sitemap-eligible page with no inbound internal link, and with `SITEMAP_STRICT=1` fails the build. This is the check that would have caught the 22 unreachable pages. Placeholder pages are deliberately exempt — they are unlinked on purpose and re-enter the check automatically once written.
- [ ] **48 orphan placeholders deliberately left unlinked.** These are the Rive-derived pages from the M2 blocker. Linking empty pages would advertise them to crawlers and users — exactly the failure mode M3 was sequenced after M2 to avoid.
- [ ] `/features` — one real page ("FlashScript"), still unlinked. It heads the Rive-derived `/features/*` subtree whose children do not exist, so it is left for the same product decision as the M2 blocker. The guard reports it every build as a standing reminder.
- [ ] Breadcrumb navigation in `Layout.tsx` — not done. The `BreadcrumbList` JSON-LD from M4 is already emitted; this would add the visible trail.
- [ ] "Related pages" links at the bottom of deep pages — not done.

**Acceptance:**

| Criterion | Status |
|---|---|
| Every written page appears in the rendered sidebar HTML | ✅ 138 links/page, verified |
| 3D pages resolve in ⌘K search | ✅ 22 entries |
| Reverse guard wired into the build | ✅ `SITEMAP_STRICT=1` fails on unlinked content |
| Typecheck at baseline, ESLint clean, build green | ✅ |
| No placeholder page linked from navigation | ✅ 48 correctly excluded |

---

### M4 — Structured data and entity signals

> ## ✅ **M4 COMPLETE — 2026-08-07**
>
> Every indexable page emits one JSON-LD `@graph` from `src/components/SEO.tsx`, built by
> `src/utils/structuredData.ts`. Cost: **+3.9 KB raw / +1.4 KB gzip** across the whole bundle.
>
> Verified: 16/16 graph assertions pass; build green; ESLint clean; no new type errors.

Fixes P1-3. This is what makes the site win *"FlashFX docs"* specifically, and what makes it citable by AI answer engines.

- [x] **`Organization`** with `sameAs` → X, Instagram, YouTube; `url` → `flashfx.app`; logo. Emitted on every page, declared once by `@id` and referenced thereafter. **The disambiguation signal** separating FlashFX-the-editor from the similarly-named payments company.
- [x] **`WebSite`**, publisher-linked to the Organization.
- [x] **`SoftwareApplication`** — full node on the homepage (category, browser requirements, description); `@id`-matched stub on other pages so `TechArticle.about` resolves within the page's own graph rather than pointing at nothing.
- [x] **`TechArticle`** on every indexable page, cross-linked to org / website / breadcrumb. *Without* `datePublished`/`dateModified` — no trustworthy source exists, same call as `lastmod` in M1.
- [x] **`BreadcrumbList`** — Home → Tab → Page, derived from `sidebarConfigs` with URL-segment fallback for the 69 pages absent from navigation. Correctly resolves `/troubleshooting/*` to the **Troubleshooting** tab at `/runtimes`.
- [x] **`VideoObject`** on the 3 tutorials with real videos, via a new optional `structuredData` prop on `<SEO>`.
- [x] Suppressed entirely on `noindex` pages — structured data describes content meant for the index, and a 404 isn't that.
- [x] ~~`FAQPage`~~ / ~~`HowTo`~~ / ~~`SearchAction`~~ — **all three retired by Google.** See the correction under P1-3.

**Three defects found by inspecting the emitted graph, not by the assertions** — worth recording, because each would have passed a naive "does it validate" check:

1. The breadcrumb emitted a category level ("Fundamentals & Settings") whose URL was *the page's own*, so positions 3 and 4 were the same URL. The site has no category landing pages, so that level isn't a breadcrumb. Removed.
2. The homepage emitted a one-item `BreadcrumbList`. Google requires ≥2 and discards the rest. Now omitted on `/` entirely, with `TechArticle.breadcrumb` dropped alongside it so the reference doesn't dangle.
3. `TechArticle.about` pointed at `#software`, which existed only in the homepage graph. Now resolved on every page by the stub node.

**Acceptance — met**, except the item needing a live URL:

| Criterion | Status |
|---|---|
| Every page type emits valid JSON-LD | ✅ 16/16 assertions |
| All `@id`s absolute, all internal references resolve | ✅ asserted |
| No deprecated types emitted | ✅ asserted |
| No fabricated dates, offers or ratings | ✅ asserted |
| Rich Results Test reports zero errors | ⬜ **needs deploy** — the sample graph is printed by the verification run for pasting into the tool |
| GSC Enhancements reports breadcrumb eligibility | ⬜ needs deploy + GSC |

---

### M5 — Performance and rendering

> ## ✅ **M5 COMPLETE — 2026-08-07** *(image compression deferred, see below)*
>
> **Every route is now prerendered to static HTML.** 336 files; a crawler with no JavaScript
> sees the full page — title, canonical, description, JSON-LD, `<h1>` and body copy.
> This closes P0-4, the last of the four P0 findings.

Fixes P0-4 and P2-3. P0-4 was the ceiling on everything else.

- [x] **Prerendered to static HTML.** `src/entry-server.tsx` + `scripts/prerender.mjs`, wired into `npm run build`. No new dependencies — Vite's built-in SSR build plus `react-dom/server`. Every one of the 336 URLs ships complete HTML; React hydrates on top (`src/main.tsx` now branches `hydrateRoot` vs `createRoot`).
  - **Placeholder pages are prerendered but stay out of the sitemap.** A URL a user can reach must return real HTML; that's separate from inviting Google to index it. `scripts/lib/routes.mjs` is now shared by the prerenderer and the sitemap generator so the two can never disagree about what exists.
  - **`dist/404.html` is emitted**, which is what finally gives the NotFound page a genuine 404 status on GitHub Pages / Netlify / S3 — closing the residual limitation noted under P1-1.
  - **Deep links no longer need an SPA fallback rewrite**, because a real file exists at every path. This substantially de-risks the M0 hosting question.
- [x] **Font moved out of CSS.** `src/index.css:1` had `@import url(fonts.googleapis.com…)` — the slowest possible path, forcing the browser to fetch and parse the app stylesheet before it could even *discover* the font request. Now `preconnect` + `stylesheet` in `index.html`, where the preload scanner starts both connections immediately.
- [x] **Vendor chunk splitting** — react (140 KB), router (37 KB), helmet (17 KB) split out of the app bundle so a typo fix no longer invalidates ~194 KB of vendor code in every visitor's cache.
- [x] Deleted `VISUALS2.png` (1.6 MB) and `android-chrome-192x192 copy.png` — **both unreferenced anywhere in the source.** `public/` is down from 6.5 MB to 4.9 MB with zero visual change.
- [x] Proper favicon set wired into `index.html` (`favicon-32x32.png` was sitting unreferenced in `public/`).
- [x] Fixed a missing React `key` in `Pricing.tsx` — an unkeyed `<>` fragment inside `sections.map()`. Pre-existing, and **surfaced only because prerendering renders every page**, which the browser never did on a page nobody visited.
- [x] ~~Add 4 missing `alt` attributes~~ — **false positive, retracted.** See P3-1.
- [x] `keywords` meta dropped in M1.

**Deferred — route-level code splitting.** `React.lazy` and the current prerenderer are incompatible: `renderToString` throws on a suspended lazy component rather than waiting for it. Adopting it requires moving `scripts/prerender.mjs` to `renderToPipeableStream` with `onAllReady` first. Deliberately not attempted in the same change as prerendering — but note that most of the original justification is now gone, because first paint no longer waits on JS at all. The app chunk is still 1.20 MB / 224 KB gzip, which matters for hydration and INP, not for LCP.

**Deferred — image recompression.** Needs tooling that isn't installed (no ImageMagick, no `sharp`; the `convert` on PATH is Windows' FAT converter, not ImageMagick). The remaining targets, all rendered far smaller than their source:

| File | Size | Rendered at |
|---|---|---|
| `VISUALS.png` | 1.7 MB | — |
| `Screenshot_2026-03-01_200913.png` | 540 KB | — |
| `Safari-Logo.png` | 260 KB | 28×28 |
| `firefox-logo.webp` | 260 KB | 28×28 |
| `The_DuckDuckGo_Duck.png` | 152 KB | 28×28 |

Roughly 1.2 MB of that is browser logos displayed at 28 px. Say the word and I'll add `sharp` as a devDependency and script the resize — it is a build tool, not a UI package, so it doesn't conflict with `.bolt/prompt`.

**Acceptance:**

| Criterion | Status |
|---|---|
| Any URL returns fully-rendered HTML with its h1 and body copy | ✅ **336/336 verified** |
| Exactly one `<title>`, one canonical, one description per page | ✅ 336/336 — no default/Helmet duplication |
| JSON-LD present on every indexable page | ✅ 335/336 (404 excluded by design) |
| No unreplaced template markers | ✅ verified |
| Build green, ESLint clean, no new type errors | ✅ (139 pre-existing errors unchanged) |
| Lighthouse Performance ≥ 90, LCP < 2.5 s | ⬜ **needs deploy** |

---

### M6 — Content strategy and authority

> ## 🟡 **M6 IN PROGRESS — the in-repo half is done**
>
> Five comparison pages shipped, targeting non-brand queries. The highest-value remaining
> items are **outside this repository** and need you — see below.

Ranking is won here once M1–M5 remove the obstacles.

- [x] **Built the five comparison pages the footer already advertised.** `src/components/Footer.tsx` listed *vs After Effects*, *vs CapCut*, *vs DaVinci Resolve*, *Free Motion Graphics* and *Lightweight Editor* as `disabled: true` — five dead links in every page footer. All five now exist, are routed, are linked from the footer sitewide, and are in the sitemap.

  | Page | URL | Targets |
  |---|---|---|
  | FlashFX vs After Effects | `/compare/after-effects` | "after effects alternative", "browser motion graphics" |
  | FlashFX vs CapCut | `/compare/capcut` | "capcut alternative", "motion graphics vs video editing" |
  | FlashFX vs DaVinci Resolve | `/compare/davinci-resolve` | "davinci resolve alternative", "fusion alternative" |
  | Free Motion Graphics Software | `/free-motion-graphics` | "free motion graphics software", "free animation software" |
  | Lightweight Motion Editor | `/lightweight-editor` | "lightweight animation software", "no install animation" |

  **On factual accuracy:** every FlashFX claim is sourced from the feature table in `Pricing.tsx`. Competitor descriptions are limited to broad, stable, verifiable facts — category, platform, licensing model. No competitor pricing and no specific competitor feature claims, because those change and a wrong claim about another product is both a trust problem and a legal one. Each page states plainly where the competitor is the better tool; a comparison page that never concedes anything reads as marketing and converts worse.

- [x] ~~**Secure internal links from `flashfx.app` to the docs subdomain.**~~ **Already in place — verified 2026-08-07.** `flashfx.app` links to `documentation.flashfx.app` from its main navigation header, alongside Features and Pricing. Because it sits in the nav it appears on every page of the marketing site, which is the best available placement.

  > **Correction.** This was listed as "the single highest-value item left in the entire plan" on the strength of an M0 check that was never actually run. It was an assumption, not a finding. Checking the live site showed the link already exists, so the item drops off the critical path entirely.
  >
  > **Why the link matters at all, given the shared root domain:** authority propagates along links, not along DNS. Google does treat subdomains as generally part of the same site, and the shared domain supplies entity association and site-level trust signals — reinforced by the `Organization` schema added in M4. But whatever links `flashfx.app` has earned accumulate on `flashfx.app`; they reach the docs subdomain only because `flashfx.app` points at it. Same street, different shop: the sign is what moves people, and here the sign is already up.

- [ ] **Remaining off-repo linking — minor.** No footer link on `flashfx.app` (the nav link already does the heavy lifting), and no contextual deep links from inside the editor to specific doc pages. The second is still worth doing — high-intent and compounding — but it is an optimisation, not a blocker.
- [ ] Expand the 65 troubleshooting pages from bullet lists into full answers with causes, symptoms and step-by-step resolutions. In-repo and doable, but it needs product knowledge to state causes accurately rather than plausibly.
- [ ] Publish blog posts on a cadence. The section is well-built and holds 10 posts; it is the site's only natural link-earning surface.
- [ ] Wire up the suggestion form. `SuggestionPortal.tsx` validates then discards; the Supabase migration exists but `@supabase/supabase-js` is not installed and `.env` is empty, so this needs credentials before it can be finished.
- [ ] Quarterly: review GSC queries at positions 5–20 and improve those pages first.

---

### Sequencing summary

| Milestone | Effort | Priority | Status |
|---|---|---|---|
| M0 Baseline & verification | 0.5 d | **Do first** | ⬜ Blocked on deploy + GSC access |
| M1 Indexability | 1 d | **Critical** | ✅ **Complete — 2026-08-07** |
| M2 Content cleanup | — | **Critical** | 🟡 Punctuation + 21 pages done; **65 blocked on product input** |
| M3 Orphan recovery | 1 d | High | ✅ **Complete — 2026-08-07** (found & fixed P0-5) |
| M4 Structured data | 1–2 d | High | ✅ **Complete — 2026-08-07** |
| M5 Performance & prerender | 3–5 d | High | ✅ **Complete — 2026-08-07** (images deferred) |
| M6 Content & authority | Ongoing | Sustained | 🟡 5 comparison pages shipped; **rest needs off-repo links** |

**Two revisions to the original sequencing, both from evidence found while building M1:**

- **M2 grew from 2–3 days to 5–8.** The placeholder count was 86, not 22 (P1-5). Writing them is now the single largest piece of remaining work — and the one that most directly serves the ranking goal, since 70 live URLs currently have nothing to rank.
- **M3 shrank and moved behind M2.** With the 21 nav links revealed as dead code (P1-1), M3 is just wiring ~69 URLs into `navigation.ts` — roughly a day. But it must follow M2: adding empty pages to the navigation would advertise them to crawlers, converting a hidden problem into a visible one.

**M4 and M5 are independent of M2** and can proceed in parallel — neither depends on page content existing.

---

## 5. Ranking strategy for the stated goal

The goal is #1 for *"FlashFX docs"* and for FlashFX questions. These are three different problems.

**a) Brand + docs queries** — *"FlashFX docs"*, *"FlashFX documentation"*
Almost entirely solved by M1. These queries need the brand in the title tag, a crawlable site, and a clear entity. The competition is only the other FlashFX properties. The one thing to get right: `documentation.flashfx.app` should own *docs* queries while `flashfx.app` owns bare brand queries — don't have both target the same terms.

**b) Bare brand queries** — *"FlashFX"*
Contested, and possibly not winnable outright. Confirm the name collision in M0. If it holds, the answer is entity disambiguation (M4's `Organization` + `sameAs`) plus consistent qualification of the brand as "FlashFX editor" / "FlashFX motion editor" in titles and copy — teach Google the association rather than fight for the ambiguous token.

**c) Question and how-to queries** — *"how to animate rotation in FlashFX"*, *"FlashFX export not working"*
This is where the volume is and where the site should dominate — it's the only site on the internet that can authoritatively answer them. It needs, in order: unique titles (M1), actual content on the 57 tutorial and 22 3D stubs (M2), crawl reachability for the 69 orphans (M3), `HowTo`/`FAQPage` markup (M4), and server-rendered HTML so answer engines can cite it (M5). All six milestones feed this one.

**Cross-cutting: be citable by AI answer engines.** The header bar advertises Perplexity and DuckDuckGo support, which means the audience already uses them. Those crawlers largely do not execute JS — M5's prerendering plus M1's explicit `robots.txt` allowances are what make FlashFX documentation the source an AI cites when someone asks it how to use the editor. For a product this new, that channel may outperform classic search.

---

## 6. Measurement

Track monthly against the M0 baseline:

| Metric | Source | Target |
|---|---|---|
| Indexed URLs | GSC Coverage | 300+ of 336 |
| Pages with unique titles | Crawl | 336 / 336 |
| Position for "flashfx docs" | GSC | 1 |
| Position for "flashfx documentation" | GSC | 1 |
| Non-brand impressions | GSC | Rising month over month |
| Soft 404s | GSC | 0 |
| Core Web Vitals — good URLs | GSC / CrUX | 100% |
| Rich results (FAQ, breadcrumb) | GSC Enhancements | Growing |
| Referring domains | Third-party tool | Growing |

Re-run this audit after M5 lands.

---

## Appendix A — Full URL inventory (sitemap source of truth)

325 static routes, plus 11 `/blog/{slug}` URLs generated from `src/data/blogPosts.ts` = **336 indexable URLs**.

### A.1 — Top level (23)

```
/
/account-overview
/best-practices
/blog
/community
/community-overview
/creators
/early-access
/editor
/experts
/feature-support
/features
/lite
/marketplace-overview
/pricing
/privacy-policy
/quick-links
/runtimes
/s3-bucket
/support
/terms
/tutorials
/workspaces
```

### A.2 — /editor (165)

```
/editor
/editor/3d/api/geometryfactory
/editor/3d/api/gizmocontroller
/editor/3d/api/materialsystem
/editor/3d/api/model-import
/editor/3d/api/properties-panel
/editor/3d/api/scenemanager
/editor/3d/api/shape-library
/editor/3d/api/texture-system
/editor/3d/api/threedengine
/editor/3d/api/threedshapeelement
/editor/3d/architecture/canvas-integration
/editor/3d/architecture/dirty-flag-render-loop
/editor/3d/architecture/mode-system
/editor/3d/architecture/per-shape-renderer
/editor/3d/architecture/scene-serialization
/editor/3d/file-structure
/editor/3d/guides/extending
/editor/3d/guides/keyboard-shortcuts
/editor/3d/guides/performance
/editor/3d/guides/troubleshooting
/editor/3d/overview
/editor/3d/technology-stack
/editor/animate/animating-colors
/editor/animate/easing-graph
/editor/animate/easing-interpolation
/editor/animate/easing-presets
/editor/animate/entering-mode
/editor/animate/expressions
/editor/animate/keyframe-system
/editor/animate/looping
/editor/animate/morph-deform
/editor/animate/motion-paths
/editor/animate/multi-property
/editor/animate/parenting-hierarchy
/editor/animate/path-animation
/editor/animate/playback-preview
/editor/animate/property-tracks
/editor/constraints/distance-constraint
/editor/constraints/follow-path-constraint
/editor/constraints/ik-constraint
/editor/constraints/overview
/editor/constraints/rotation-constraint
/editor/constraints/scale-constraint
/editor/constraints/scroll-constraints
/editor/constraints/transform-constraint
/editor/constraints/translation-constraint
/editor/data-binding/lists
/editor/data-binding/overview
/editor/events/audio-events
/editor/events/overview
/editor/exporting/backup
/editor/exporting/runtime
/editor/exporting/video-or-static
/editor/fundamentals/accessibility
/editor/fundamentals/accounts-storage
/editor/fundamentals/application-settings
/editor/fundamentals/canvas-project-setup
/editor/fundamentals/color-system
/editor/fundamentals/grid-rulers-guides
/editor/fundamentals/interface-overview
/editor/fundamentals/keyboard-shortcuts
/editor/fundamentals/panels-layout
/editor/fundamentals/snapping-system
/editor/fundamentals/what-is-flashfx
/editor/fundamentals/workspace-modes
/editor/fundamentals/zoom-navigation
/editor/gpu/3d-exporting
/editor/gpu/3d-lighting
/editor/gpu/3d-optimization
/editor/gpu/3d-transform
/editor/gpu/blend-mode-constraints
/editor/gpu/browser-constraints
/editor/gpu/filter-costs
/editor/gpu/memory-management
/editor/gpu/perspective-camera
/editor/gpu/profiling-tools
/editor/gpu/rendering-environment
/editor/gpu/tier-detection
/editor/gpu/webgl-architecture
/editor/gpu/z-depth-ordering
/editor/images/ai-generated
/editor/images/animating-images
/editor/images/artistic-filters
/editor/images/asset-management
/editor/images/blur-filters
/editor/images/color-adjustment
/editor/images/cropping-masking
/editor/images/distortion-filters
/editor/images/fill-mode
/editor/images/filter-stacking
/editor/images/importing
/editor/images/light-atmosphere
/editor/images/performance
/editor/images/transform-placement
/editor/interface-overview/hierarchy
/editor/interface-overview/inspector
/editor/interface-overview/overview
/editor/interface-overview/stage
/editor/interface-overview/toolbar
/editor/layouts/animation
/editor/layouts/n-slicing
/editor/layouts/overview
/editor/layouts/parameters
/editor/layouts/scrolling
/editor/layouts/styles
/editor/layouts/tools
/editor/shapes/alignment-distribution
/editor/shapes/blend-modes
/editor/shapes/bone-tips
/editor/shapes/bones
/editor/shapes/boolean-operations
/editor/shapes/clipping
/editor/shapes/fill-types
/editor/shapes/groups-composition
/editor/shapes/joysticks
/editor/shapes/material-system
/editor/shapes/meshes
/editor/shapes/overview
/editor/shapes/pen-tool
/editor/shapes/primitives
/editor/shapes/shadows-glow
/editor/shapes/shape-effects
/editor/shapes/solos
/editor/shapes/stroke-properties
/editor/shapes/transform-operations
/editor/shapes/trim-path
/editor/shapes/vertex-editing
/editor/shapes/z-order
/editor/share-links/framer-and-rive
/editor/share-links/overview
/editor/state-machines/inputs
/editor/state-machines/layers
/editor/state-machines/listeners
/editor/state-machines/overview
/editor/state-machines/states
/editor/state-machines/transitions
/editor/text/animation-modes
/editor/text/character-formatting
/editor/text/convert-to-outlines
/editor/text/paragraph-formatting
/editor/text/placing-text
/editor/text/stagger-animation
/editor/text/text-background
/editor/text/text-box-modes
/editor/text/text-fill
/editor/text/text-on-path
/editor/text/text-shadow
/editor/text/text-stroke
/editor/text/text-transform
/editor/text/typography-controls
/editor/timeline/advanced-workflows
/editor/timeline/architecture
/editor/timeline/graph-editor
/editor/timeline/keyframe-operations
/editor/timeline/layer-duration
/editor/timeline/markers
/editor/timeline/nested-sequences
/editor/timeline/rendering-cues
/editor/timeline/ruler-time-display
/editor/timeline/search-filtering
/editor/timeline/sequence-compositor
/editor/timeline/time-remapping
/editor/timeline/track-organization
/editor/timeline/work-area
```

### A.3 — /troubleshooting (65)

```
/troubleshooting/animation-export-fails
/troubleshooting/animation-presets-are-not-applying
/troubleshooting/animation-preview-does-not-play
/troubleshooting/animation-timing-cannot-be-adjusted
/troubleshooting/animation-will-not-loop
/troubleshooting/animation-will-not-reverse
/troubleshooting/auto-align-animation-is-not-working
/troubleshooting/blur-effect-is-not-visible
/troubleshooting/cannot-navigate-the-canvas
/troubleshooting/canvas-background-color-does-not-change
/troubleshooting/canvas-is-not-rendering
/troubleshooting/changes-are-not-saving
/troubleshooting/circle-cannot-be-created
/troubleshooting/color-presets-are-missing-or-not-applying
/troubleshooting/compound-animations-are-not-working
/troubleshooting/copy-and-paste-of-shapes-does-not-work
/troubleshooting/custom-color-palette-cannot-be-saved
/troubleshooting/custom-polygon-shapes-cannot-be-created
/troubleshooting/distortion-effects-are-not-applied
/troubleshooting/easing-presets-are-not-affecting-animation
/troubleshooting/editor-is-slow
/troubleshooting/effect-presets-cannot-be-saved-or-reused
/troubleshooting/eyedropper-tool-does-not-pick-colors
/troubleshooting/file-cannot-be-opened
/troubleshooting/glow-effect-is-not-visible
/troubleshooting/gradient-fill-is-not-working
/troubleshooting/gradient-or-color-animation-is-not-working
/troubleshooting/inner-shadows-are-not-appearing
/troubleshooting/keyframes-cannot-be-copied-or-pasted
/troubleshooting/keyframes-cannot-be-created
/troubleshooting/layer-cannot-be-locked-or-unlocked
/troubleshooting/layer-will-not-hide-or-unhide
/troubleshooting/layers-are-disorganized-or-hard-to-manage
/troubleshooting/light-mode-or-dark-mode-does-not-switch
/troubleshooting/line-tool-is-not-drawing-lines
/troubleshooting/mask-animation-does-not-work
/troubleshooting/mask-cannot-be-created
/troubleshooting/mask-inversion-does-not-apply
/troubleshooting/masks-cannot-be-animated
/troubleshooting/motion-paths-are-not-applied-to-objects
/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly
/troubleshooting/multiple-masks-do-not-work-on-the-same-layer
/troubleshooting/multiple-objects-do-not-animate-with-offset-timing
/troubleshooting/objects-are-not-duplicating
/troubleshooting/objects-cannot-be-distributed-evenly
/troubleshooting/objects-cannot-be-grouped-or-ungrouped
/troubleshooting/objects-will-not-align-correctly
/troubleshooting/opacity-animation-does-not-fade-objects
/troubleshooting/opacity-changes-are-not-applied
/troubleshooting/position-animation-does-not-work
/troubleshooting/project-cannot-be-created
/troubleshooting/project-does-not-save-or-export
/troubleshooting/rectangle-cannot-be-created
/troubleshooting/rotation-animation-does-not-rotate-objects
/troubleshooting/scale-animation-does-not-change-the-object-size
/troubleshooting/shadow-effect-does-not-appear
/troubleshooting/shadow-or-glow-effects-are-not-visible
/troubleshooting/shape-color-fill-does-not-apply
/troubleshooting/shape-size-position-or-rotation-cannot-be-edited
/troubleshooting/stroke-or-border-settings-are-not-visible-or-applied
/troubleshooting/text-properties-cannot-be-animated
/troubleshooting/texture-overlays-are-not-applying
/troubleshooting/timeline-is-difficult-to-control-or-not-responding
/troubleshooting/undo-or-redo-history-is-not-working
/troubleshooting/zoom-or-pan-is-not-working-correctly
```

### A.4 — /tutorials (61)

```
/tutorials
/tutorials/how-to-add-inner-shadows
/tutorials/how-to-adjust-opacity
/tutorials/how-to-adjust-timing-of-animations
/tutorials/how-to-align-objects-perfectly
/tutorials/how-to-animate-a-mask
/tutorials/how-to-animate-gradients-or-color-changes
/tutorials/how-to-animate-masks
/tutorials/how-to-animate-opacity
/tutorials/how-to-animate-position
/tutorials/how-to-animate-rotation
/tutorials/how-to-animate-scale
/tutorials/how-to-animate-text-properties
/tutorials/how-to-apply-auto-align-animation
/tutorials/how-to-apply-blur-effects
/tutorials/how-to-apply-distortion-effects
/tutorials/how-to-apply-glow-effects
/tutorials/how-to-apply-gradient-fills
/tutorials/how-to-apply-shadow-effects
/tutorials/how-to-apply-shadows-and-glows
/tutorials/how-to-apply-texture-overlays
/tutorials/how-to-change-background-color
/tutorials/how-to-combine-multiple-effects
/tutorials/how-to-copy-and-paste-keyframes
/tutorials/how-to-copy-paste-shapes
/tutorials/how-to-create-a-basic-mask
/tutorials/how-to-create-a-circle
/tutorials/how-to-create-a-line
/tutorials/how-to-create-a-new-project
/tutorials/how-to-create-a-rectangle
/tutorials/how-to-create-compound-animations
/tutorials/how-to-create-custom-polygon-shapes
/tutorials/how-to-create-keyframes
/tutorials/how-to-create-offset-animations-for-multiple-objects
/tutorials/how-to-distribute-objects-evenly
/tutorials/how-to-duplicate-objects
/tutorials/how-to-edit-shape-properties
/tutorials/how-to-fill-a-shape-with-color
/tutorials/how-to-group-and-ungroup-objects
/tutorials/how-to-hide-unhide-layers
/tutorials/how-to-invert-masks
/tutorials/how-to-lock-unlock-layers
/tutorials/how-to-loop-animations
/tutorials/how-to-navigate-the-canvas
/tutorials/how-to-organize-layers
/tutorials/how-to-preview-animations
/tutorials/how-to-reverse-animations
/tutorials/how-to-save-and-export-a-project
/tutorials/how-to-save-and-reuse-effect-presets
/tutorials/how-to-save-custom-color-palettes
/tutorials/how-to-switch-between-light-and-dark-mode
/tutorials/how-to-use-animation-presets
/tutorials/how-to-use-color-presets
/tutorials/how-to-use-easing-presets
/tutorials/how-to-use-eyedropper-tool-to-pick-colors
/tutorials/how-to-use-motion-paths
/tutorials/how-to-use-multiple-masks-on-a-single-layer
/tutorials/how-to-use-stroke-border-settings
/tutorials/how-to-use-the-timeline-efficiently
/tutorials/how-to-use-the-undo-redo-history
/tutorials/how-to-zoom-and-pan-efficiently
```

### A.5 — /lite (14)

```
/lite
/lite/animation
/lite/creating-project
/lite/export
/lite/gestures
/lite/interface
/lite/limitations
/lite/objects
/lite/objects/circle
/lite/objects/line
/lite/objects/square
/lite/objects/text
/lite/troubleshooting
/lite/upgrade
```

### A.6 — /blog posts (11, generated from blogPosts.ts)

```
/blog/first-tutorials-now-live
/blog/full-3d-shape-support
/blog/redesigned-image-filter-panel
/blog/new-keyframe-features
/blog/pattern-fill-properties
/blog/faster-gpu-acceleration
/blog/alpha-release-3-0
/blog/beta-release-1
/blog/beta-release-2
/blog/beta-release-4
```

---

## Appendix B — Navigation links with no matching route (21 soft 404s)

Declared in `src/data/navigation.ts`, no `<Route>` in `src/App.tsx`. Each currently renders the homepage at HTTP 200.

```
/case-studies
/features/api/artboards
/features/api/color
/features/api/datavalue
/features/api/gradient
/features/api/image
/features/api/interfaces
/features/api/mat2d
/features/api/paint
/features/api/path
/features/api/renderer
/features/api/vec2d
/features/configuration
/features/creating-scripts
/features/data-binding
/features/debugging/tools
/features/demos
/features/keyboard-shortcuts
/features/pointer-events
/features/protocols/overview
/features/script-inputs
```

---

## Appendix C — Routed URLs with zero inbound internal links (69 orphans)

Valid routes, absent from `navigation.ts` and not linked from any component. Undiscoverable by crawlers and absent from on-site search.

```
/editor/3d/api/geometryfactory
/editor/3d/api/gizmocontroller
/editor/3d/api/materialsystem
/editor/3d/api/model-import
/editor/3d/api/properties-panel
/editor/3d/api/scenemanager
/editor/3d/api/shape-library
/editor/3d/api/texture-system
/editor/3d/api/threedengine
/editor/3d/api/threedshapeelement
/editor/3d/architecture/canvas-integration
/editor/3d/architecture/dirty-flag-render-loop
/editor/3d/architecture/mode-system
/editor/3d/architecture/per-shape-renderer
/editor/3d/architecture/scene-serialization
/editor/3d/file-structure
/editor/3d/guides/extending
/editor/3d/guides/keyboard-shortcuts
/editor/3d/guides/performance
/editor/3d/guides/troubleshooting
/editor/3d/overview
/editor/3d/technology-stack
/editor/constraints/distance-constraint
/editor/constraints/follow-path-constraint
/editor/constraints/ik-constraint
/editor/constraints/overview
/editor/constraints/rotation-constraint
/editor/constraints/scale-constraint
/editor/constraints/scroll-constraints
/editor/constraints/transform-constraint
/editor/constraints/translation-constraint
/editor/data-binding/lists
/editor/data-binding/overview
/editor/events/audio-events
/editor/events/overview
/editor/exporting/backup
/editor/exporting/runtime
/editor/exporting/video-or-static
/editor/interface-overview/hierarchy
/editor/interface-overview/inspector
/editor/interface-overview/overview
/editor/interface-overview/stage
/editor/interface-overview/toolbar
/editor/layouts/animation
/editor/layouts/n-slicing
/editor/layouts/overview
/editor/layouts/parameters
/editor/layouts/scrolling
/editor/layouts/styles
/editor/layouts/tools
/editor/shapes/bone-tips
/editor/shapes/bones
/editor/shapes/clipping
/editor/shapes/joysticks
/editor/shapes/meshes
/editor/shapes/overview
/editor/shapes/solos
/editor/shapes/trim-path
/editor/share-links/framer-and-rive
/editor/share-links/overview
/editor/state-machines/inputs
/editor/state-machines/layers
/editor/state-machines/listeners
/editor/state-machines/overview
/editor/state-machines/states
/editor/state-machines/transitions
```

Plus three top-level orphans: `/features`, `/s3-bucket`, `/workspaces`.

---

## Appendix D — Page components with content and no route (28)

These files exist under `src/pages/`, contain written documentation, and are imported by nothing. They have no URL at all.

| Component | File |
|---|---|
| `AnimatingDrawOrder` | `src/pages/editor/animate/AnimatingDrawOrder.tsx` |
| `AnimatingImages` | `src/pages/editor/images/AnimatingImages.tsx` |
| `AnimationMixing` | `src/pages/editor/animate/AnimationMixing.tsx` |
| `Artboards` | `src/pages/editor/fundamentals/Artboards.tsx` |
| `CaseStudies` | `src/pages/CaseStudies.tsx` |
| `ColorFilters` | `src/pages/editor/images/ColorFilters.tsx` |
| `Components` | `src/pages/editor/fundamentals/Components.tsx` |
| `CroppingMasking` | `src/pages/editor/images/CroppingMasking.tsx` |
| `DesignVsAnimateMode` | `src/pages/editor/fundamentals/DesignVsAnimateMode.tsx` |
| `DistortionFilters` | `src/pages/editor/images/DistortionFilters.tsx` |
| `EditVertices` | `src/pages/editor/fundamentals/EditVertices.tsx` |
| `FillAndStroke` | `src/pages/editor/fundamentals/FillAndStroke.tsx` |
| `Fonts` | `src/pages/editor/text/Fonts.tsx` |
| `FreezeAndOrigin` | `src/pages/editor/fundamentals/FreezeAndOrigin.tsx` |
| `Groups` | `src/pages/editor/fundamentals/Groups.tsx` |
| `ImportingAssets` | `src/pages/editor/fundamentals/ImportingAssets.tsx` |
| `Interpolation` | `src/pages/editor/animate/Interpolation.tsx` |
| `Keys` | `src/pages/editor/animate/Keys.tsx` |
| `PenToolOverview` | `src/pages/editor/fundamentals/PenToolOverview.tsx` |
| `ProceduralShapes` | `src/pages/editor/fundamentals/ProceduralShapes.tsx` |
| `RevisionHistory` | `src/pages/editor/fundamentals/RevisionHistory.tsx` |
| `SelectingAndNavigatingGroups` | `src/pages/editor/fundamentals/SelectingAndNavigatingGroups.tsx` |
| `ShapesAndPathsOverview` | `src/pages/editor/fundamentals/ShapesAndPathsOverview.tsx` |
| `TextModifiers` | `src/pages/editor/text/TextModifiers.tsx` |
| `TextRuns` | `src/pages/editor/text/TextRuns.tsx` |
| `TextStyles` | `src/pages/editor/text/TextStyles.tsx` |
| `Timeline` | `src/pages/editor/animate/Timeline.tsx` |
| `TransformSpaces` | `src/pages/editor/fundamentals/TransformSpaces.tsx` |

> `Introduction.tsx` and `lite/objects/ObjectDetail.tsx` also appear unimported by `App.tsx` but are **not** orphans — they are rendered via `Home.tsx` and the four `lite/objects/*` wrappers respectively.

---

## Appendix E — Files to change, by milestone

| File | Milestones | What changes |
|---|---|---|
| `src/components/SEO.tsx` | M1, M4, M5 | Use `title`; add canonical + `og:url`; fix OG image domain; add JSON-LD; drop `keywords` |
| `index.html` | M1, M5 | Real title + description; fix Bolt OG defaults; move font to `<link>` |
| `public/robots.txt` | M1 | **New file** |
| `public/sitemap.xml` | M1 | **New file**, build-generated from `App.tsx` |
| `src/App.tsx` | M1, M3, M5 | Real 404 route; 28 new routes; `React.lazy` splitting |
| `src/data/navigation.ts` | M1, M3 | Fix 21 dead paths; add 69 orphans + 28 new pages |
| `src/pages/threed/*.tsx` (22) | M2 | Fill in or `noindex` |
| `src/pages/TutorialDetail.tsx` | M2, M4 | Written steps for 57; per-page descriptions; `HowTo` schema |
| `src/pages/TroubleshootingDetail.tsx` | M4, M6 | `FAQPage` schema; expand answers |
| 73 page files | M2 | Repair 593 em-dash → comma corruptions |
| `src/components/Layout.tsx` | M3, M4 | Breadcrumbs + `BreadcrumbList` |
| `src/components/Header.tsx` | M2 | Remove/scope the WIP banner (line 55) |
| `src/components/Footer.tsx` | M6 | Enable the 5 disabled comparison links |
| `src/index.css` | M5 | Remove the render-blocking `@import` (line 1) |
| `public/*.png` | M5 | Recompress ~6.5 MB → under 1.5 MB |
| `src/pages/editor/fundamentals/Accessibility.tsx` | M1 | Fix `flashfx.com` refs (lines 199, 218) |
| `vite.config.ts` / `package.json` | M5 | Prerender plugin + build-time sitemap script |

