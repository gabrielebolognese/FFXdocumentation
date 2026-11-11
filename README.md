# FlashFX Documentation

The source of the FlashFX product documentation site, published at [documentation.flashfx.app](https://documentation.flashfx.app). It documents three products: **FlashFX**, a browser-based motion and animation editor (the bulk of the site), **FlashFX Lite**, and **FlashCC**, a companion app that turns a written post into a social carousel. The site is a React single-page app that is prerendered to static HTML at build time, so every page is a real HTML file that search engines and AI answer engines can read without running JavaScript.

It is meant for whoever maintains the FlashFX docs: every page is a hand-written React component, and the build derives the sitemap, the search index and the breadcrumbs from the route table and the navigation data.

## Features

**Content**

- Editor documentation grouped by section: fundamentals and settings, interface overview, shapes, text, images, animate mode, constraints, GPU and 3D, timeline, layouts, state machines, data binding, events, share links and exporting
- 3D documentation: overview, technology stack, file structure, architecture pages, API reference pages and guides
- FlashFX Lite section: interface, objects, animation, gestures, export, limitations and upgrade path
- FlashCC reference, stored as typed content blocks in `src/data/flashcc.ts` and rendered by a single section component
- Troubleshooting articles driven by `src/data/troubleshooting.ts`, with a browser-compatibility bar in the header
- Tutorials with embedded YouTube videos, and a 73-step "Beginner to Hero" course with one route per step
- Blog, comparison pages (After Effects, CapCut, DaVinci Resolve), pricing, privacy policy and terms

**Site**

- Header tabs with a per-tab sidebar, all driven by `src/data/navigation.ts`
- Keyboard search (Ctrl+K / Cmd+K) built from the same navigation tree
- Per-page table of contents with scroll tracking
- Dark theme only, styled with Tailwind using a custom navy and yellow palette
- A suggestion form on `/support` (see Status: it validates input but does not send anything yet)

**SEO and build**

- Every route is prerendered to `dist/<path>/index.html`, plus a `dist/404.html`, and hydrated in the browser
- Per-page title, canonical URL, Open Graph and Twitter tags, and a JSON-LD graph (Organization, WebSite, SoftwareApplication, TechArticle, BreadcrumbList, and VideoObject on tutorials)
- A sitemap index plus six section sitemaps (editor, troubleshooting, tutorials, lite, blog, core) generated from the route table
- Placeholder pages are still prerendered but are left out of the sitemap automatically until they have real content
- Build guards that warn about navigation links with no matching route and about written pages that nothing links to
- React, the router and Helmet are split into separate vendor chunks so content edits do not invalidate them in visitors' caches

## Getting started

### Prerequisites

- Node.js 18 or 20+ (required by Vite 5)
- npm

### Download

```bash
git clone https://github.com/gabrielebolognese/FFXdocumentation.git
cd FFXdocumentation
```

### Install

```bash
npm install
```

### Configuration

No environment variables are required. Two optional ones are read by the sitemap generator:

| Variable | Effect |
| --- | --- |
| `SITE_URL` | Base URL written into the sitemaps. Defaults to `https://documentation.flashfx.app` |
| `SITEMAP_STRICT` | Set to `1` to turn the two navigation guards from warnings into a build failure |

### Run in development

```bash
npm run dev
```

This starts the Vite dev server. In development the site is client-rendered only; prerendering happens only in the production build.

## Build and deploy

```bash
npm run build
```

The build is a three-stage pipeline:

1. `scripts/generate-sitemap.mjs` writes `sitemap.xml` and the six section sitemaps into `public/` and runs the navigation guards.
2. `vite build` produces the client bundle in `dist/`.
3. `scripts/prerender.mjs` builds a server bundle from `src/entry-server.tsx`, renders every route into `dist/<path>/index.html`, and writes `dist/404.html`.

The output in `dist/` is a fully static site. Upload it to any static host; because a real file exists at every path, no single-page-app fallback rewrite is needed, and hosts that serve `404.html` for unmatched paths return a real 404 status. The repository contains no hosting configuration or CI workflow, so deployment is a manual step.

To check the result locally:

```bash
npm run preview
```

## Usage

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server, client-rendered |
| `npm run build` | Sitemaps, client build, then prerender of every route |
| `npm run sitemap` | Sitemap generation alone, written into `public/` |
| `npm run prerender` | Prerender alone; needs an existing `dist/` from `vite build` |
| `npm run preview` | Serves the built `dist/` |
| `npm run lint` | ESLint over the repository |
| `npm run typecheck` | `tsc --noEmit` against `tsconfig.app.json` |

There is no test framework configured. `scripts/fix-punctuation.mjs` is a one-off repair tool that is not part of the build; without `--apply` it is a dry run.

### Adding a page

1. Create the page component under `src/pages/`.
2. Add its `import` and `<Route>` to `src/App.tsx`.
3. Add its entry to the right sidebar config in `src/data/navigation.ts`.

Keep each import and route on a single line in the existing style. The build scripts read `src/App.tsx` with regular expressions instead of importing the app, so a route split across lines, or one whose element is not a bare `<Component />`, is silently skipped: it is neither prerendered nor listed in the sitemap. A page missing from `navigation.ts` does not appear in search or in the sidebar.

Tutorials, troubleshooting articles, course steps and FlashCC sections are data-driven: adding one means adding a row to its data file (or, for tutorials, to the maps inside `src/pages/TutorialDetail.tsx`) as well as a route and a navigation entry.

Do not introduce `React.lazy` or route-level code splitting. The prerenderer uses `renderToString`, which fails on a suspended lazy component.

## Project structure

| Path | What it holds |
| --- | --- |
| `src/App.tsx` | The flat route table for the whole site |
| `src/pages/` | One component per documentation page, grouped by section (`editor/`, `threed/`, `lite/`, `flashcc/`, `compare/`) |
| `src/components/` | Layout, header, sidebar, footer, search, table of contents, SEO tags, video embed, suggestion form |
| `src/data/` | Navigation, blog posts, troubleshooting articles, course steps and FlashCC content |
| `src/utils/` | Search index and JSON-LD structured data builders |
| `src/entry-server.tsx` | Server render entry used by the prerenderer |
| `scripts/` | Sitemap generator, prerenderer, shared route parser, punctuation repair tool |
| `public/` | `robots.txt`, generated sitemaps, icons and images |
| `supabase/migrations/` | SQL migration for a `suggestions` table (not wired to the site) |
| `01_…` to `07_…` `.md`, `3D_DOCUMENTATION.md` | Source notes the pages were written from; nothing imports them |

## Tech stack

- React 18 and TypeScript
- Vite 5, with a second server-side build for prerendering
- React Router 7
- react-helmet-async for head tags
- Tailwind CSS 3 with PostCSS and Autoprefixer
- lucide-react for icons
- ESLint 9 with typescript-eslint

## Further documentation

- [`CLAUDE.md`](CLAUDE.md): the most complete guide to the architecture, conventions and standing constraints
- [`SEO-documentation.md`](SEO-documentation.md): the SEO audit and the milestone plan behind the prerendering and sitemap work
- [`description.md`](description.md): the design system reference (colours, typography, components)
- [`reference.md`](reference.md): the current FlashCC reference that the `/flashcc` pages are transcribed from
- [`footer-links.md`](footer-links.md): the footer link list
- [`3D_DOCUMENTATION.md`](3D_DOCUMENTATION.md) and the numbered `01_…` to `07_…` files: source material for the editor and 3D sections

`architecture.md`, `document-schema.md`, `role-layouts.md` and `template-system.md` describe FlashCC before its rewrite to a flat layer model. They no longer match the product and are kept only as a record; `reference.md` supersedes them.

## Status

In active development and serving a live site. Known gaps:

- Around 65 pages are placeholders with no content yet. They are routed and prerendered but excluded from the sitemap.
- Most tutorial pages and all course steps are still waiting for their videos; course steps currently show a stand-in video with a visible notice.
- The suggestion form on `/support` validates input and shows a success state but sends nothing. The Supabase migration exists, but there is no Supabase client in the dependencies.
- `npm run typecheck` reports existing errors, mostly from per-page helper components whose props differ between files.
- The repository has no license file.
