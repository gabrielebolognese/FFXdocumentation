# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response format

End **every** reply with a `**Recap**` block, even short or conversational ones. Keep it to a few lines:

- **Project** — one line on where the overall effort stands (e.g. which milestones are done, what phase the work is in)
- **Done** — what actually changed this turn, with `file:line` references where relevant
- **Next milestone** — the next milestone by name, and the concrete first step(s) into it; say "nothing pending" if the work is complete
- **Needs you** — anything blocked on a decision, credential, or command the user must run themselves; omit this line when there is nothing

Never put new information in the recap — it restates what the response already said, so the user can skim it alone and know where things stand.

The active plan lives in `SEO-documentation.md` (milestones M0–M6). Keep its status markers current as work lands.

## What this is

The FlashFX product documentation site (documentation.flashfx.app) — a Vite + React 18 + TypeScript SPA styled with Tailwind. It documents FlashFX (a browser-based motion/animation editor at editor.flashfx.app) and FlashFX Lite. Scaffolded from a Bolt template (`.bolt/`); not a git repository.

Every documentation page is a hand-written `.tsx` component — there is no Markdown pipeline. The `.md` files at the repo root (`01_Fundamentals_and_Settings.md` … `07_Timeline_Features_for_Composition.md`, `3D_DOCUMENTATION.md`) and in `src/data/` are **source material only**; nothing imports them. They map 1:1 onto the sidebar sections and are the reference text pages are transcribed from.

## Commands

```bash
npm install          # node_modules is not checked in / not present
npm run dev          # Vite dev server
npm run build        # production build to dist/
npm run preview      # serve the built output
npm run lint         # eslint over the repo
npm run typecheck    # tsc --noEmit -p tsconfig.app.json
```

There is no test framework configured.

## Architecture

### Routing — everything is declared in `src/App.tsx`

`App.tsx` is a single flat `<Routes>` list of 327 explicit routes with no lazy loading and no route params (except `/blog/:slug`). Adding a page means touching **three** places:

1. Create the page component under `src/pages/…`
2. Add its `import` + `<Route>` in `src/App.tsx`
3. Add its entry to the right sidebar config in `src/data/navigation.ts`

Skipping step 3 also removes it from search (see below). Unmatched paths fall through to `<Route path="*" element={<Home />} />` — a typo'd route renders the homepage rather than a 404.

Two routes are content-table–driven rather than one-file-per-page: `/tutorials/*` all render `TutorialDetail.tsx` and `/troubleshooting/*` all render `TroubleshootingDetail.tsx`, both of which look the current `location.pathname` up in a `Record<path, content>` map inside the file. Adding a tutorial or troubleshooting entry means adding a row to that map **and** a `<Route>` in `App.tsx` **and** a nav entry — the component itself returns `null` for unknown paths.

### Navigation is the single source of truth

`src/data/navigation.ts` (~635 lines) exports `mainTabs` (header tabs) and one `SidebarConfig` per tab, collected into `sidebarConfigs: Record<tabPath, SidebarConfig>`. A `SidebarConfig` is any mix of `iconItems`, `sections` (labelled, optionally `collapsible` / `defaultExpanded`), and `items` (arbitrarily nested via `children`).

Two consumers derive from it automatically:
- `src/components/Sidebar.tsx` renders whichever config matches the active tab.
- `src/utils/searchIndex.ts` walks **all** configs to build the ⌘K/Ctrl+K search index. Search is a simple scoring pass (exact label 100 / prefix 50 / keyword substring 10, top 8) over label + category + tab. **A page absent from `navigation.ts` is unsearchable.**

Active-tab resolution is duplicated in three files — `Layout.tsx`, `Sidebar.tsx`, and `Header.tsx` each have their own `path.startsWith(...)` chain. Note the non-obvious mapping: `/troubleshooting/*` belongs to the `/runtimes` tab, and the header tab labelled "Troubleshooting" points at `/runtimes`. Changing tab structure means updating all three.

### Page shape

Nearly every page (230 of 235) follows this pattern:

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

`Section` and `Table` are **not** shared components — they are copy-pasted local declarations in ~113 and ~52 page files respectively, and their markup drifts between files. Match the conventions of the file you are editing rather than importing from elsewhere; do not "fix" this by centralizing them unless asked.

The `tableOfContents` `id`s must match the `id` attributes on the rendered sections — `TableOfContents.tsx` scroll-spies them via `getElementById`, and `scroll-mt-24`/`scroll-mt-32` on the section compensates for the fixed header.

`Layout` accepts `wide` / `extraWide` to widen the content column (rarely used). It renders a 6-column grid: spacer / sticky sidebar / content / sticky ToC / spacer, and adds a browser-compatibility bar in the header on `/runtimes` and `/troubleshooting/*` — which shifts every sticky offset from `111px` to `183px`.

### State

`SidebarStateContext` holds per-tab expand/collapse state and per-tab sidebar scroll position, all in memory (`useState`, no persistence) — it resets on reload. Expansion keys are derived from the item's *label path* through the tree (`Parent/Child`), so renaming a sidebar label silently drops its saved state.

### Backend

There is effectively none. `supabase/migrations/` contains a `suggestions` table migration with RLS, but `@supabase/supabase-js` is **not** a dependency, `.env` is empty, and `SuggestionPortal.tsx` (rendered on `/support`) validates the form then sets status to `'success'` without sending anything. Wiring it up is unfinished work, not a bug in the UI.

## Styling

`description.md` is an exhaustive design-system reference for this site — read it before making visual changes. Key points:

- Dark mode only. Palette lives in `tailwind.config.js` as semantic names: `navy-deepest` `#0A0F1E`, `navy-panel` `#111827`, `navy-elevated` `#162033`, `navy-border` `#1E2D45`, `blue-muted` `#8BA3C7` (universal secondary text), `yellow-accent` `#FACC15` (the only warm color — active states, links, inline code, CTA).
- Base font size is **12px** (set on `body` in `src/index.css`), so Tailwind's `text-sm` = 14px reads as body copy and `text-xs` = 12px as UI chrome. Only weights 400/500/600.
- Icons come from `lucide-react` exclusively. Per `.bolt/prompt`, do not add UI/icon/theme packages.
- `lucide-react` is deliberately in Vite's `optimizeDeps.exclude`; `cookie` is force-included (react-router v7 needs it pre-bundled).

Two known inconsistencies to be aware of rather than trip over:
- `bg-navy-darker` is used in ~7 places but is **not** defined in `tailwind.config.js` — those elements render with no background.
- `SEO.tsx` ignores its `title` prop entirely and hardcodes `<title>Documentation</title>` for every page. Passing a title does nothing until that component is fixed.
