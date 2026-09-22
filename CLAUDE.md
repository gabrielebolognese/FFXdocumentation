# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response format

End **every** reply with a `**Recap**` block, even short or conversational ones. Keep it to a few lines:

- **Project** — one line on where the overall effort stands (e.g. which milestones are done, what phase the work is in)
- **Done** — what actually changed this turn, with `file:line` references where relevant
- **Next milestone** — the next milestone by name, and the concrete first step(s) into it; say "nothing pending" if the work is complete
- **Needs you** — anything blocked on a decision, credential, or command the user must run themselves; omit this line when there is nothing

Never put new information in the recap — it restates what the response already said, so the user can skim it alone and know where things stand.

The active plan lives in `SEO-documentation.md` (milestones M0–M6). Keep its status markers current as work lands. Current state: M1, M3, M4, M5 complete; M2 partially blocked (see Standing constraints); M6 in progress; M0 blocked on deploy + Search Console access.

## What this is

The FlashFX product documentation site (documentation.flashfx.app) — a Vite + React 18 + TypeScript SPA styled with Tailwind, **prerendered to static HTML at build time**. Scaffolded from a Bolt template (`.bolt/`).

It documents three products: **FlashFX** (a browser-based motion/animation editor at editor.flashfx.app — the bulk of the site), **FlashFX Lite** under `/lite/*`, and **FlashCC** (a companion carousel app) under `/flashcc/*`. FlashCC is new and almost entirely unwritten: only its overview page has content, the six section pages below it are scaffolding, and their names are placeholders to reshape rather than a settled structure. Nothing in the repo describes FlashCC's features — do not infer them from FlashFX.

Every documentation page is a hand-written `.tsx` component — there is no Markdown pipeline. The `.md` files at the repo root (`01_Fundamentals_and_Settings.md` … `07_Timeline_Features_for_Composition.md`, `3D_DOCUMENTATION.md`) and in `src/data/` are **source material only**; nothing imports them. They map 1:1 onto the sidebar sections and are the reference text pages are transcribed from.

> ⛔ **`architecture.md`, `document-schema.md`, `role-layouts.md` and `template-system.md` are NOT usable source material.** They sit at the repo root next to the FlashFX references and look like FlashCC documentation, but every one of them opens with a banner reading *"Superseded … nothing in it matches the code."* Their own index, `README.md`, is titled "Superseded design documents" and says: **"None of them match the code. Do not use them to answer a question about how the app works."** They describe a document/template/role design that a later rewrite replaced with flat layers on an artboard. Transcribing them would document a product that was deliberately abandoned — the M2 Rive failure mode, with the source material warning you in its first line.
>
> The two files that *are* current — `reference.md` and `interaction-principles.md` (the latter explicitly **not** superseded) — are referenced by that README but are **not in this repo**. FlashCC cannot be documented until they are supplied.

## Commands

```bash
npm install          # node_modules is gitignored
npm run dev          # Vite dev server (CSR only — no prerender; index.html serves its default head tags)
npm run build        # generate-sitemap.mjs -> vite build -> prerender.mjs
npm run sitemap      # sitemap generation alone (writes into public/)
npm run prerender    # prerender alone; needs an existing dist/ from `vite build`
npm run preview      # serve the built output
npm run lint         # eslint over the repo
npm run typecheck    # tsc --noEmit -p tsconfig.app.json
```

`SITEMAP_STRICT=1 npm run build` promotes the sitemap generator's two guards from warnings to a build failure.

There is no test framework configured. **`npm run typecheck` reports ~139 pre-existing errors** — mostly local `Section`/`Table` helpers whose props drifted from their call sites (see Page shape). Treat that as the baseline: check that a change doesn't *raise* the count rather than expecting zero.

## Architecture

### The build is a three-stage pipeline

`npm run build` does considerably more than `vite build`, and the extra stages are load-bearing:

1. **`scripts/generate-sitemap.mjs`** — emits a `sitemap.xml` index plus six section sitemaps (`editor`, `troubleshooting`, `tutorials`, `lite`, `blog`, `core`) into `public/`, ~234 URLs. Also runs the two guards described below.
2. **`vite build`** — the client bundle, with `react` / `router` / `helmet` split into vendor chunks (`vite.config.ts`).
3. **`scripts/prerender.mjs`** — runs a second Vite SSR build of `src/entry-server.tsx`, then renders **every** route to a real `dist/<path>/index.html`, plus `dist/404.html`. `src/main.tsx` branches `hydrateRoot` vs `createRoot` depending on whether the container already holds markup.

Consequences worth internalizing:

- **`index.html` carries `<!--app-head-start-->` / `<!--app-head-end-->` / `<!--app-html-->` markers.** The prerenderer replaces everything between the head markers with that route's real Helmet output; the tags currently sitting between them are dev-only defaults. Removing or renaming a marker fails the build loudly, by design.
- **Do not introduce `React.lazy` or route-level code splitting.** `entry-server.tsx` uses `renderToString`, which throws on a suspended lazy component rather than waiting for it. Adopting lazy routes means moving the prerenderer to `renderToPipeableStream` + `onAllReady` first. Documented in both `vite.config.ts` and `entry-server.tsx`.
- **Anything rendered only after mount is invisible to crawlers.** This caused P0-5: `Sidebar.tsx` used to unmount collapsed children, so prerendered pages carried 18 links instead of 138. Collapsed subtrees are now always rendered and hidden with the `hidden` attribute (`Sidebar.tsx:85`, `Sidebar.tsx:192`). Keep it that way.

### The build scripts parse source with regexes

`scripts/lib/routes.mjs` is shared by the sitemap generator and the prerenderer so the two can never disagree about what URLs exist. It does **not** import the app — it regex-parses:

- `src/App.tsx` for `import X from './pages/…'` and `<Route path="…" element={<X />} />`
- `src/data/blogPosts.ts` for `slug:` / `date:`
- `src/pages/TutorialDetail.tsx` for the `tutorialVideos` map
- `src/data/beginnerToHero.ts` for step objects carrying a `videoId`

So **route and import formatting is functionally significant**. A route split across lines, carrying a prop other than `element`, or whose element isn't a bare `<Component />`, is silently skipped — not prerendered, not in the sitemap. Match the existing single-line style exactly.

### Routing — everything is declared in `src/App.tsx`

`App.tsx` is a single flat `<Routes>` list of 413 explicit routes with no lazy loading and no route params (except `/blog/:slug`). It exports both `App` (default) and `AppRoutes` (named) — `entry-server.tsx` imports `AppRoutes` so it can supply its own `StaticRouter`.

Adding a page means touching **three** places:

1. Create the page component under `src/pages/…`
2. Add its `import` + `<Route>` in `src/App.tsx`
3. Add its entry to the right sidebar config in `src/data/navigation.ts`

Skipping step 3 removes it from search *and* from the internal link graph — `npm run build` then reports it under "page(s) with real content have no inbound internal link".

Unmatched paths render `src/pages/NotFound.tsx`, which sets `noindex, follow`; `dist/404.html` is what gives it a genuine 404 status on static hosts.

Three route families are content-table–driven rather than one-file-per-page. Each renders one component for many paths, looks the current `location.pathname` up in its data, and returns `null` for an unknown path:

| Routes | Component | Data |
|---|---|---|
| `/tutorials/*` | `TutorialDetail.tsx` | maps **inside** that file |
| `/troubleshooting/*` | `TroubleshootingDetail.tsx` | `src/data/troubleshooting.ts` |
| `/beginner-to-hero/*` | `BeginnerToHeroStep.tsx` | `src/data/beginnerToHero.ts` |

Adding an entry to any of them means adding a row to the data **and** a `<Route>` in `App.tsx` **and** a nav entry. All three are parsed by the build — see below.

`/beginner-to-hero` is an ordered 73-step course (the overview page is `BeginnerToHero.tsx`). It is deliberately one route per step rather than a client-side carousel: the previous/next arrows are real `<Link>`s, so each step is prerendered, deep-linkable, and carries an inbound link from both neighbours.

### Navigation is the single source of truth

`src/data/navigation.ts` (~672 lines) exports `mainTabs` (header tabs) and one `SidebarConfig` per tab, collected into `sidebarConfigs: Record<tabPath, SidebarConfig>`. A `SidebarConfig` is any mix of `iconItems`, `sections` (labelled, optionally `collapsible` / `defaultExpanded`), and `items` (arbitrarily nested via `children`).

Three consumers derive from it automatically:
- `src/components/Sidebar.tsx` renders whichever config matches the active tab.
- `src/utils/searchIndex.ts` walks **all** configs to build the ⌘K/Ctrl+K search index. Search is a simple scoring pass (exact label 100 / prefix 50 / keyword substring 10, top 8) over label + category + tab. **A page absent from `navigation.ts` is unsearchable.**
- `src/utils/structuredData.ts` walks the same tree for `BreadcrumbList` labels.

**`featuresSidebar`, `sidebarShortcuts` and `sidebarSections` are exported but referenced nowhere.** They are dead code, and the ~21 nonexistent paths inside them are *not* live broken links — nothing renders them as anchors. The build guard deliberately walks only configs reachable from `sidebarConfigs` (plus `mainTabs` and `Footer.tsx`) so it doesn't report them. Don't "fix" those paths, and don't wire these exports into anything.

**Active-tab resolution is duplicated in four files** — `Layout.tsx`, `Sidebar.tsx`, `Header.tsx` and `structuredData.ts`. `Header` and `structuredData` derive their list from `mainTabs`, but all four carry their own hand-written special cases, because **two sections live under a tab they are not named after**:

| Path prefix | Resolves to tab |
|---|---|
| `/troubleshooting/*` | `/runtimes` (the header tab labelled "Troubleshooting") |
| `/beginner-to-hero/*` | `/tutorials` |

A section whose prefix matches no branch silently falls through to `/` and renders the **home** sidebar — no error, just the wrong nav. That is what happened when `/beginner-to-hero` was first added. After changing tab structure, check a deep page of the new section actually renders its own sidebar; `grep -c 'href="/<section>/' dist/<section>/<page>/index.html` on the built output is the fastest check.

Adding a whole new tab means: an entry in `mainTabs`, a `SidebarConfig` registered in `sidebarConfigs`, and a branch in the `Layout.tsx` and `Sidebar.tsx` chains (the other two follow `mainTabs` automatically for a tab whose paths share its prefix).

`Footer.tsx` is a second real source of internal links — the five comparison pages (`/compare/after-effects`, `/compare/capcut`, `/compare/davinci-resolve`, `/free-motion-graphics`, `/lightweight-editor`) are linked from there rather than from `navigation.ts`, and the build guard reads it for that reason.

### Page shape

Nearly every page (236 of 241) follows this pattern:

```tsx
import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [{ id: 'section-id', label: 'Section Title' }, …];

export default function PageName() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO title="…" description="…" keywords="…" />
      {/* content */}
    </Layout>
  );
}

// local helpers, redeclared per-file
function Section({ id, title, children }) { … }
function Table({ headers, rows }) { … }
```

`Section` and `Table` are **not** shared components — they are copy-pasted local declarations in ~139 and ~73 page files respectively, and their markup and prop names drift between files (some take `title`, some `label`; that drift is most of the 139 typecheck errors). Match the conventions of the file you are editing rather than importing from elsewhere; do not "fix" this by centralizing them unless asked.

The `tableOfContents` `id`s must match the `id` attributes on the rendered sections — `TableOfContents.tsx` scroll-spies them via `getElementById`, and `scroll-mt-24`/`scroll-mt-32` on the section compensates for the fixed header.

`Layout` accepts `wide` / `extraWide` to widen the content column (rarely used). It renders a 6-column grid: spacer / sticky sidebar / content / sticky ToC / spacer, and adds a browser-compatibility bar in the header on `/runtimes` and `/troubleshooting/*` — which shifts every sticky offset from `111px` to `183px`.

### SEO

`src/components/SEO.tsx` sits on every page and does real work: title normalisation, self-referencing canonical, OG/Twitter tags, and a JSON-LD `@graph` built by `src/utils/structuredData.ts`. Things that will bite:

- **`buildTitle()` appends ` | FlashFX Documentation` only when the title doesn't already contain "flashfx".** ~126 pages self-suffix. Pass whichever form reads best; don't hand-suffix "to be safe" or it renders twice.
- **`keywords` is accepted and deliberately not rendered.** ~235 pages still pass it; the prop stays only so dropping it isn't a codebase-wide edit. Don't add new uses, don't strip existing ones.
- **`noindex` suppresses the JSON-LD graph as well.** Used by `NotFound.tsx`.
- **`structuredData` takes extra `@graph` entities** — build them with the helpers in `structuredData.ts` so `@id` cross-references stay consistent. `TutorialDetail.tsx` uses this for `VideoObject`.
- `structuredData.ts` deliberately omits `FAQPage`, `HowTo` and `SearchAction` (all retired by Google), and omits `datePublished` / `offers` / `aggregateRating` because no trustworthy source for them exists in the repo. Fabricated structured data is a manual-action risk — don't add them.

### State

`SidebarStateContext` holds per-tab expand/collapse state and per-tab sidebar scroll position, all in memory (`useState`, no persistence) — it resets on reload, and during prerendering it is always at its defaults. Expansion keys are derived from the item's *label path* through the tree (`Parent/Child`), so renaming a sidebar label silently drops its saved state.

### Backend

There is effectively none. `supabase/migrations/` contains a `suggestions` table migration with RLS, but `@supabase/supabase-js` is **not** a dependency, `.env` is empty, and `SuggestionPortal.tsx` (rendered on `/support`) validates the form then sets status to `'success'` without sending anything. Wiring it up is unfinished work, not a bug in the UI.

## Standing constraints

- **Never delete a placeholder page.** The 65 remaining `"Content will appear here"` pages are a queue of pages waiting to be written, not dead scaffolding. Never remove the file, never remove its `<Route>`. They are already handled correctly and automatically: `scripts/lib/routes.mjs` detects the marker, so they are still prerendered (a URL a user can reach must return real HTML) but stay out of the sitemap and out of the unlinked-page guard — and they re-enter both on their own the moment the marker is gone.
- **Placeholder content is prerendered but never put in the sitemap.** Three separate mechanisms in `routes.mjs` implement this, all self-healing — supply the missing content and the URL enters the sitemap on the next build, with no other edit:

  | Set | Enters the sitemap when |
  |---|---|
  | 55 routed `"Content will appear here"` pages (incl. the 6 under `/flashcc/*`) | the marker is removed |
  | 57 `"Video coming soon"` tutorials | the path gets a row in `tutorialVideos` |
  | 73 `/beginner-to-hero/*` steps | the step object gets a `videoId` |

  **`isPlaceholder()` is a naive `includes()` over the whole source file.** Writing the marker string anywhere in a page — including in a comment *about* placeholders — silently drops that page from the sitemap. Refer to it indirectly in prose instead.

  Course steps currently render a **stand-in** video (rotating the three real `/tutorials/*` videos) plus a visible "Placeholder" notice, and deliberately emit **no** `VideoObject` JSON-LD — describing someone else's video as a FlashFX lesson is fabricated structured data and a manual-action risk.
- **Those 65 placeholders describe Rive, not FlashFX** — IK/constraints, bones, state machines, N-slicing, artboards, and a file literally named `FramerAndRive.tsx`. Writing them from the existing `.md` source material would mean inventing FlashFX features out of a competitor's documentation. Blocked pending product input; see the M2 blocker in `SEO-documentation.md`. Don't write them speculatively.
- `scripts/fix-punctuation.mjs` is a **one-off repair tool**, not part of the build. It has already run (812 fixes across 107 files). Read its header before re-running it — naive `word,Word` replacement corrupts object literals, which is why it only touches JSX text nodes and `title=` / `description=` values.

## Styling

`description.md` is an exhaustive design-system reference for this site — read it before making visual changes. Key points:

- Dark mode only. Palette lives in `tailwind.config.js` as semantic names: `navy-deepest` `#0A0F1E`, `navy-panel` `#111827`, `navy-elevated` `#162033`, `navy-border` `#1E2D45`, `blue-muted` `#8BA3C7` (universal secondary text), `yellow-accent` `#FACC15` (the only warm color — active states, links, inline code, CTA). `blue-primary` / `blue-hover` and the `purple-*` set also exist but are used sparingly.
- Base font size is **12px** (set on `body` in `src/index.css`), so Tailwind's `text-sm` = 14px reads as body copy and `text-xs` = 12px as UI chrome. Only weights 400/500/600.
- Inter is loaded from `index.html` (`preconnect` + `stylesheet`), **not** from `src/index.css`. Moving it back into CSS as an `@import` re-adds a round trip in front of first paint.
- Icons come from `lucide-react` exclusively. Per `.bolt/prompt`, do not add UI/icon/theme packages. Build-only devDependencies (e.g. `sharp` for the deferred image compression) are not covered by that rule.
- `lucide-react` is deliberately in Vite's `optimizeDeps.exclude`; `cookie` is force-included (react-router v7 needs it pre-bundled).

One known inconsistency to be aware of rather than trip over: `bg-navy-darker` is used in a handful of places but is **not** defined in `tailwind.config.js` — those elements render with no background. Replace it with `bg-navy-panel` or `bg-navy-elevated` when you are already rewriting the markup that uses it; don't go hunting for it otherwise.
