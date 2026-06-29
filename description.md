# FlashFX Design System Reference

A precise, exhaustive reference for replicating the exact visual style of the FlashFX Documentation site on the new FlashFX Roadmap website.

---

## 1. Color Palette

The entire site is built on a deep navy/dark-blue dark mode. There is no light mode.

### Core Background Colors
| Role | Hex | Usage |
|---|---|---|
| Page background | `#0A0F1E` | `<body>`, main canvas, deepest layer |
| Panel background | `#111827` | Header, footer, sidebar containers |
| Elevated surface | `#162033` | Cards, code blocks, table rows (even) |
| Border / divider | `#1E2D45` | All `border` lines, table cell borders, section dividers |

The body background also has a very subtle dot-grid texture:
```css
background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='10' cy='10' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
```
This is white circles at 2% opacity on a 20×20 grid — nearly invisible but adds premium texture.

### Text Colors
| Role | Value | Usage |
|---|---|---|
| Primary text | `#FFFFFF` | Headings, body text, table content |
| Secondary text | `#8BA3C7` (`blue-muted`) | Sidebar links (inactive), nav tabs (inactive), metadata captions |
| Dimmed text | `rgba(255,255,255,0.40)` | Footer body copy, sidebar section labels |
| Very dimmed text | `rgba(255,255,255,0.25)` | Footer copyright, disabled items |
| Very subtle label | `rgba(255,255,255,0.30)` | Footer column titles |

### Accent Colors
| Role | Hex | Usage |
|---|---|---|
| Yellow accent | `#FACC15` | Active nav tab, active sidebar link, CTA button background, links, inline code |
| Yellow hover | `#fde047` | Link hover state |
| Blue primary | `#3B82F6` | Informational highlights |
| Blue hover | `#60A5FA` | Blue interactive hover |
| Orange warning | `orange-500` (Tailwind) | "Work in progress" banner text in header |

### Scrollbar
Custom 6px-wide scrollbar:
- Track: `#0A0F1E`
- Thumb: `#1E2D45` with `border-radius: 3px`
- Thumb hover: `#2a3f5f`

---

## 2. Typography

### Font Family
**Inter** — loaded from Google Fonts (`wght@400;500;600`). Fallback: `system-ui, -apple-system, sans-serif`.

Code uses: `'Fira Code', 'Courier New', monospace`.

Anti-aliasing: `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on `<body>`.

### Base Font Size
**12px** — this is unusually small and is intentional. The entire UI reads compact and dense. All sizing below is relative to this 12px base.

### Heading Scale (in content pages)
| Element | Size | Weight | Color |
|---|---|---|---|
| `h1` (page title) | `text-4xl` = 36px | 600 (semibold) | `#FFFFFF` |
| `h2` (section) | `text-3xl` = 30px | 600 | `#FFFFFF` |
| `h3` (subsection) | `text-2xl` = 24px | 600 | `#FFFFFF` |
| All headings default | — | 600, `line-height: 1.2` | `#FFFFFF` |

Inside `.prose` blocks (markdown-rendered content):
- `h2`: `font-size: 1.625em`, `font-weight: 600`, `margin-top: 1.75em`
- `h3`: `font-size: 1.375em`, `font-weight: 500`, `margin-top: 1.4em`

### Body Text
| Element | Size | Weight | Color |
|---|---|---|---|
| Standard paragraph | `text-sm` = 14px | 400 | `#FFFFFF` |
| `.prose p` | 13px explicit | 400 | — |
| Caption / metadata | `text-sm` = 14px | 400 | `#8BA3C7` |
| Table cell content | `text-sm` = 14px | 400 | `#FFFFFF` |
| Table header text | `text-sm` = 14px | 600 | `#FFFFFF` |
| Sidebar links | `text-xs` = 12px | 400 (active: 500) | `#8BA3C7` / active: `#FACC15` |
| Nav tabs | `text-xs` = 12px | 500 | `#8BA3C7` / active: `#FACC15` |
| Sidebar section labels | `text-[10px]` = 10px | 500 | `rgba(255,255,255,0.40)` — uppercase + wide tracking |
| Footer column titles | `text-[11px]` = 11px | 600 | `rgba(255,255,255,0.30)` — uppercase + widest tracking |
| Footer links | `text-[13px]` = 13px | 400 | `rgba(255,255,255,0.50)` / hover: `#FFFFFF` |
| Inline code | 11px | 400 | `#FACC15` |
| `<pre>` code blocks | 11px | — | inherit |
| `<kbd>` | 10px | — | — |

Line heights: `1.6` for `<p>`, `1.2` for headings, `150%` effective for body copy via `leading-relaxed`.

### Letter Spacing
- Sidebar section labels: `tracking-widest` (0.1em+)
- Footer column titles: `tracking-widest`
- Header "work in progress" badge: `tracking-wide`
- Nav tabs / sidebar links: default (no extra tracking)

### Font Weights Used
Only three weights throughout: **400** (regular), **500** (medium), **600** (semibold). Never bold (700+) except `font-bold` on the logo wordmark.

---

## 3. Layout & Spacing

### Overall Page Structure
Fixed header at top, then full-height content below.

```
[Fixed Header — 111px tall total]
  Row 1: logo + search + right buttons  (py-3 px-5)
  Row 2: nav tabs                        (border-t, tabs have py-3)

[Content area — pt-[111px] to clear header]
  Max width: 1800px, centered (mx-auto)
  6-column grid (col-span-6):
    col 1:  spacer
    col 2:  sidebar (sticky, 300px wide, scrolls independently)
    col 3-4: main content (px-12 py-12) — or col 3-5 if wide=true
    col 5:  table of contents (sticky, 300px wide)
    col 6:  spacer

[Footer]
  bg-navy-panel, border-t navy-border, mt-24
  90vw centered content
  pt-20 pb-16
```

### Spacing System (8px base)
- Content area padding: `px-12 py-12` = 48px
- Section gaps in sidebar: `space-y-6` = 24px
- Sidebar link row height: `py-1.5` = 6px top+bottom
- Component gaps: multiples of 4 or 8px throughout
- Footer section gap: `gap-16` = 64px between brand column and link grid

### Sidebar
- Width: fixed 300px
- Sticky to top: `top-[111px]`
- Height: `calc(100vh - 111px)` with `overflow-y-auto`
- Padding: `py-8 pr-8` (no left padding — flush to left edge of column)
- Links indent by level: `paddingLeft: level * 12px`

### Table of Contents
- Same sticky behavior as sidebar, right column
- Width: 300px

---

## 4. Component Styles

### Header
- `fixed top-0 left-0 right-0 z-50`
- Background: `bg-navy-panel` (`#111827`)
- Bottom border: `border-b border-navy-border` (`#1E2D45`)
- Logo: 28×28px rounded-lg image + `text-base font-medium text-white`
- CTA button: `bg-yellow-accent text-navy-deepest px-4 py-1.5 rounded-md text-xs font-medium` with glow on hover: `hover:shadow-[0_0_18px_rgba(250,204,21,0.75)]`

### Navigation Tabs (inside header)
- `flex items-center justify-center gap-6` — centered
- Each tab: `py-3 text-xs font-medium transition-colors`
- Inactive: `text-blue-muted` (`#8BA3C7`) → hover: `text-white`
- Active: `text-yellow-accent` (`#FACC15`) — no underline, no background, color only

### Sidebar Links
- `text-xs transition-colors`
- Inactive: `text-blue-muted` → hover: `text-white`
- Active: `text-yellow-accent font-medium`
- Chevron icons: `w-3 h-3`

### Tables
- `min-w-full border-collapse`
- Header row background: `bg-yellow-accent/10` (yellow at 10% opacity)
- All cells: `border border-navy-border px-4 py-2`
- Header cells: `text-sm font-semibold text-white`
- Data cells: `text-sm text-white`
- Row key column (first td): `font-medium`
- No zebra striping — all rows same background (transparent over `#0A0F1E`)
- Wrapped in `overflow-x-auto` div

### Code Blocks (`<pre>`)
- Background: `#162033`
- Border: `1px solid #1E2D45`
- Border radius: 6px
- Padding: 0.75rem
- Font size: 11px

### Inline Code
- Color: `#FACC15`
- Font: Fira Code / monospace
- No background, no border

### Links
- Default color: `#FACC15`
- Hover: `#fde047`
- Transition: `all 0.2s ease`
- No underline by default

### Footer
- Background: `bg-navy-panel` (`#111827`)
- Top border: `border-t border-navy-border`
- Column title: 11px, uppercase, `tracking-widest`, `text-white/30`, `font-semibold`
- Link items: 13px, `text-white/50` → hover `text-white`, transition 150ms
- Disabled items: 13px, `text-white/25`, `cursor-not-allowed`
- Bottom bar: `border-t border-navy-border pt-8`, copyright at `text-xs text-white/25`

---

## 5. Interactivity & Motion

All interactive transitions use `transition-colors` or `transition-all` with `duration-150` to `duration-200`.

- Nav tabs: `transition-colors` on color only
- Sidebar links: `transition-colors`
- Footer links: `transition-colors duration-150`
- Header CTA: `transition-all` (color + box-shadow glow)
- Links: `transition: all 0.2s ease`

There are no page transition animations — navigation is instant. The premium feel comes from the refined color choices and spacing, not from motion.

---

## 6. Premium Design Signals

The following micro-decisions collectively create the high-quality feel:

1. **12px base font size** — extremely compact, professional, information-dense. Not for readability but for tool-like precision.
2. **Invisible dot texture on body** — barely perceptible `fill-opacity: 0.02` polka-dot SVG on `#0A0F1E` adds depth to flat dark backgrounds.
3. **Yellow accent is singular** — `#FACC15` is the only warm color. It appears only on: active states, the CTA button, links, and inline code. Everything else is cool-neutral.
4. **Three font weights maximum** — 400, 500, 600 only.
5. **No rounded corners on tables** — `border-collapse` with sharp corners. Clinical precision.
6. **Section headers are ALL CAPS + widest tracking** — `text-[10px] uppercase tracking-widest text-white/40` for sidebar sections and footer column titles.
7. **No purple/violet anywhere** — despite it being in the Tailwind config, zero purple is used in the actual UI.
8. **CTA glow on hover** — `shadow-[0_0_18px_rgba(250,204,21,0.75)]` — the yellow button pulses with a soft glow.
9. **Custom 6px scrollbar** — thin, matching the background, barely visible.
10. **Consistent `border-navy-border` (#1E2D45)** — this single border color is used absolutely everywhere, creating visual coherence.
11. **Blue-muted (#8BA3C7) as the universal secondary text** — not white/opacity, but a specific blue-gray that matches the deep navy palette.

---

## 7. Page Content Structure (per documentation page)

Each content page follows this exact pattern:

```
<div className="space-y-8">

  <!-- Page header -->
  <div>
    <h1 className="text-4xl font-semibold text-white">Page Title</h1>
    <p className="text-sm text-blue-muted mt-2">Subtitle · Context</p>
  </div>

  <!-- Section -->
  <div id="section-id" className="scroll-mt-32 space-y-4">
    <h2 className="text-3xl font-semibold text-white">1. Section Title</h2>
    <p className="text-sm text-white leading-relaxed">Body text...</p>

    <!-- Table (most sections have one) -->
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-yellow-accent/10">
            <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Key</td>
            <td className="border border-navy-border px-4 py-2 text-sm text-white">Value</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
```

`scroll-mt-32` (128px scroll margin) accounts for the fixed header when anchor-linking to sections.

---

## 8. Icons

All icons from **lucide-react** only. No other icon libraries.

Common sizes:
- Navigation/sidebar: `w-3 h-3` (12px)
- Icon items in sidebar: `w-3.5 h-3.5` (14px)
- Header CTA arrow: `w-3.5 h-3.5`
- External link indicators: `w-3 h-3`
