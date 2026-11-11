# FlashFX Documentation

The source of the [FlashFX](https://flashfx.app) documentation site, live at **[documentation.flashfx.app](https://documentation.flashfx.app)**.

## What it covers

- **Editor:** fundamentals and settings, shapes, text, images, animate mode, GPU effects, constraints, timeline, layouts, state machines and exporting
- **3D:** guides, architecture and the API reference
- **FlashFX Lite** and **FlashCC**
- **Comparisons** with other tools, plus tutorials and troubleshooting

## Stack

React 18, TypeScript, Vite and Tailwind CSS. Pages are prerendered to static HTML at build time, and the sitemaps are generated from the route list.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # generate sitemaps, build, then prerender every route
```

## What is where

| Path | What it holds |
| --- | --- |
| `src/pages/` | One component per documentation page, grouped by section |
| `src/data/` | Navigation and page data |
| `scripts/` | Sitemap generation and prerendering |
| `public/` | `robots.txt` and the generated sitemaps |
| `01_…` to `07_…` `.md` | Source notes the editor pages were written from |
| `description.md` | The design system reference for the site |

## Older design documents

`architecture.md`, `document-schema.md`, `role-layouts.md` and `template-system.md` describe FlashCC before its rewrite to a flat layer model. They no longer match the code and are kept only as a record of the reasoning; `reference.md` is the current one.
