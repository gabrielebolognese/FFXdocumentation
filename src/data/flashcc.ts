/**
 * FlashCC documentation — all 29 sections of `reference.md`.
 *
 * Transcribed from `reference.md` at the repo root, which is the current
 * reference and explicitly **supersedes** `architecture.md`,
 * `document-schema.md`, `role-layouts.md` and `template-system.md`. Those four
 * describe a document/template/role design that the Photoshop-model rewrite
 * replaced; every one of them carries a banner saying nothing in it matches the
 * code. Do not transcribe from them. See the warning in CLAUDE.md.
 *
 * Why a data file rather than 29 `.tsx` pages: the sections are uniform
 * transcribed prose, tables and code, so one renderer plus structured content
 * beats 29 files that each redeclare the same local `Section` and `Table`
 * helpers. Same call as `src/data/troubleshooting.ts`.
 *
 * Content is faithful to the source, including the constants and the defect
 * list in §29 — those are the parts an engineer opens this page for. Where the
 * reference hedges ("currently", "has not been run"), the hedge is kept.
 */

/** Inline markup supported in every `text` field: `**bold**` and `` `code` ``. */
export type Block =
  | { kind: 'p'; text: string }
  /** Sub-heading. Its `id` becomes a table-of-contents anchor. */
  | { kind: 'h'; id: string; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'code'; text: string }
  | { kind: 'note'; tone: 'info' | 'warn'; text: string };

export interface FlashCCSection {
  /** URL segment under /flashcc. */
  slug: string;
  /** Section number in reference.md. */
  number: number;
  title: string;
  /** One sentence — drives the meta description and the card copy. */
  summary: string;
  blocks: Block[];
}

export interface FlashCCGroup {
  label: string;
  blurb: string;
  sections: FlashCCSection[];
}

export const BASE_PATH = '/flashcc';

export const groups: FlashCCGroup[] = [
  {
    label: 'Orientation',
    blurb: 'What the product is, how to run it, and the rules it is built on.',
    sections: [
      {
        slug: 'what-it-is',
        number: 1,
        title: 'What it is',
        summary:
          'FlashCC turns a written post into a social carousel and keeps the record of how that carousel performed.',
        blocks: [
          {
            kind: 'p',
            text: 'FlashCC turns a written post into a social carousel, and then keeps the record of how that carousel did.',
          },
          {
            kind: 'p',
            text: 'Two halves, and the split matters commercially. The **editor** is a Photoshop-style canvas that makes the artwork. The **pipeline** is what happens after: schedule it, mark it posted, type the numbers in, and find out which structural choices actually worked.',
          },
          {
            kind: 'p',
            text: 'The editor is what competitors have. The pipeline — specifically the attribution of performance to *framework, hook shape and slide count* — is what none of seventeen audited competitors ship.',
          },
          {
            kind: 'h', id: 'stack', text: 'The stack',
          },
          {
            kind: 'list',
            items: [
              'React 19, Vite 6, Tailwind 3',
              'TypeScript with every strict flag on',
              'Supabase for accounts and sync',
              'Stripe for billing',
              'Playwright for export',
            ],
          },
          {
            kind: 'p',
            text: 'There is no framework on the server: four routes do not need one.',
          },
        ],
      },
      {
        slug: 'running-it',
        number: 2,
        title: 'Running it',
        summary:
          'The dev commands, the two ports, the Vite proxy that removes the need for CORS, and why no configuration is an error state.',
        blocks: [
          {
            kind: 'code',
            text: 'npm run dev        # both servers via scripts/dev.mjs\nnpm run typecheck  # app AND server — the build only checks the app\nnpx vitest run     # 296 tests across 17 files\nnpm run build      # tsc --noEmit then vite build',
          },
          {
            kind: 'list',
            items: [
              '**App: http://localhost:5173** (Vite, `strictPort: false`, so it falls forward if taken)',
              '**API: http://localhost:8787** (bare `node:http`, `tsx watch`)',
            ],
          },
          {
            kind: 'p',
            text: 'Vite proxies `/api` → `:8787`, which is why every client call is same-origin and the server has no CORS handling at all. `scripts/dev.mjs` spawns both as separate shell processes; killing the supervisor leaves them running.',
          },
          { kind: 'h', id: 'no-configuration', text: 'No configuration is the free tier' },
          {
            kind: 'p',
            text: 'Everything works with no configuration. No Supabase means no accounts and localStorage only; no `ANTHROPIC_API_KEY` means AI drafting degrades to "write it yourself"; no Stripe means no checkout.',
          },
          {
            kind: 'note',
            tone: 'info',
            text: 'None of these are error states — the free tier **is** the no-config state.',
          },
        ],
      },
      {
        slug: 'the-invariants',
        number: 3,
        title: 'The invariants',
        summary:
          'Five rules the codebase is built on: nothing is derived, presets run once, one painter, pure modules stay DOM-free, and two colour systems never mix.',
        blocks: [
          {
            kind: 'p',
            text: 'Five rules the codebase is built on. Breaking one is how this gets slowly worse.',
          },
          { kind: 'h', id: 'nothing-is-derived', text: 'Nothing is derived' },
          {
            kind: 'p',
            text: 'What is stored is what renders. A layer a preset created and a layer you drew are the same object with the same handles. There is no template engine, no roles, no blocks.',
          },
          { kind: 'h', id: 'presets-run-once', text: 'Presets run once' },
          {
            kind: 'p',
            text: '`presets.ts`, `compositions.ts` and `styles.ts` return plain layers and are then gone. There is no live template to fight with.',
          },
          { kind: 'h', id: 'one-painter', text: '`LayerView` is the only painter' },
          {
            kind: 'p',
            text: 'Canvas, filmstrip thumbnails, previews, the print portal and the **server-side export** all render through it. Export works by serialising `LayerView`’s own output and screenshotting it — a second renderer would drift within a week.',
          },
          { kind: 'h', id: 'pure-modules', text: 'Pure modules are DOM-free and tested' },
          {
            kind: 'p',
            text: '`geometry.ts`, `text.ts`, `colour.ts`, `gradient.ts`, `reflow.ts`, `insights.ts`, `preflight.ts`, `search.ts`, `sync.ts`. That is where the reasoning lives and where the tests point.',
          },
          { kind: 'h', id: 'two-colour-systems', text: 'Two colour systems never mix' },
          {
            kind: 'p',
            text: 'App chrome uses the FlashFX tokens; slide content uses the document’s own palette. An app colour inside a slide is a bug.',
          },
        ],
      },
    ],
  },
  {
    label: 'The canvas',
    blurb: 'The document model and the editor that manipulates it.',
    sections: [
      {
        slug: 'the-data-model',
        number: 4,
        title: 'The data model',
        summary:
          'Doc, Slide and Layer in artboard pixels — array order is z-order, and framework and styleId are stamped once so analytics can attribute performance.',
        blocks: [
          {
            kind: 'code',
            text: "Doc  { version: 3, id, name, width, height, palette[], media[],\n       group?, framework?, styleId?, archived?, slides[], createdAt, updatedAt }\nSlide{ id, name, background, gradient?, layers[] }\nLayer{ id, name, kind, x, y, w, h, rotation, opacity, visible, locked,\n       fill, gradient?, stroke, strokeWidth, radius, …kind-specific }",
          },
          {
            kind: 'p',
            text: '`LayerKind` is `text | rect | ellipse | triangle | line | icon | image`.',
          },
          {
            kind: 'list',
            items: [
              '**Coordinates are artboard pixels.** A layer at `x: 540` is at 540. Not fractions, not percentages.',
              '**Array order is z-order**, index 0 at the back.',
            ],
          },
          {
            kind: 'p',
            text: '`framework` and `styleId` are stamped once at generation and never re-derived. They exist so analytics can attribute performance to how a carousel was built — a post cannot tell you that Problem → Solution outperforms unless something remembered which one it was.',
          },
          { kind: 'h', id: 'defaults', text: 'Defaults worth knowing' },
          {
            kind: 'table',
            headers: ['Thing', 'Default'],
            rows: [
              ['Text layer', '`"Type something"`, sans, 64px, weight 600, line-height 1.2, align left, valign top'],
              ['Icon', 'glyph `star`, `stroke = fill`, `strokeWidth 2`, `fill: "none"`'],
              ['Line', '`h: 8, radius: 4` — **forced, overriding whatever height you passed**'],
              ['Image', '`fit: "cover"`'],
              ['Slide', 'background `#12161c`'],
              ['Doc', '1080×1350, one slide'],
            ],
          },
          { kind: 'h', id: 'ids-and-fonts', text: 'Ids and font fallback' },
          {
            kind: 'p',
            text: '`uid(prefix)` is `${prefix}_${Date.now().toString(36)}${seq.toString(36)}` with a module-level counter. Unique per process, **not globally** — two tabs can collide.',
          },
          {
            kind: 'p',
            text: '`fontStack(id)` checks uploaded faces before built-ins and falls back to `FONTS[0]`, so an unknown id silently becomes Sans rather than `undefined`.',
          },
        ],
      },
      {
        slug: 'the-canvas',
        number: 5,
        title: 'The canvas',
        summary:
          'Four nested elements, artboard-space hit testing, cursor-anchored zoom, the tool and drag modes, snapping, keyboard and snapshot history.',
        blocks: [
          {
            kind: 'p',
            text: '`Canvas.tsx` owns zoom, pan, tools, drag, resize, marquee, drawing, snapping, keyboard and media drops. `useStudio.ts` owns all state and history.',
          },
          { kind: 'h', id: 'structure', text: 'Structure' },
          {
            kind: 'p',
            text: 'Four nested elements, and the split between them is load-bearing:',
          },
          {
            kind: 'list',
            ordered: true,
            items: [
              '**host** — `overflow-hidden`, owns the wheel and pointer listeners',
              '**centring wrapper** — `translate(-50%,-50%) translate(panX, panY)`',
              '**board** — sized `width*zoom × height*zoom`, painted by `slidePaint`. Selection chrome, handles and the marquee are children here, in **screen space**',
              '**inner** — sized `width × height` with `transform: scale(zoom)`. `LayerView`s, safe zones and snap guides live here, in **artboard space**',
            ],
          },
          {
            kind: 'p',
            text: '`toBoard(clientX, clientY) = (client - boardRect.left) / zoom`. Everything past that point is artboard pixels.',
          },
          {
            kind: 'note',
            tone: 'info',
            text: '**Every layer is `pointerEvents: "none"`.** All hit testing is done in artboard coordinates by `Canvas` against `geometry.ts`, never by DOM events. Only a `contentEditable` being edited re-enables pointer events.',
          },
          { kind: 'h', id: 'zoom-and-pan', text: 'Zoom and pan' },
          {
            kind: 'table',
            headers: ['Control', 'Behaviour'],
            rows: [
              ['Fit', '`min((hostW - 120)/w, (hostH - 120)/h)`, clamped `[0.05, 2]`'],
              ['Wheel', '**zooms** — inverted from the browser default. `ctrl`/`meta`/`shift` pans. Step ×1.12, clamp `[0.05, 4]`'],
              ['Keyboard', '`Cmd+=` / `-` / `0`, step ×1.2'],
            ],
          },
          {
            kind: 'p',
            text: 'Zoom is cursor-anchored: `pan` is recomputed so the artboard point under the pointer stays put. The wheel handler is registered once with `{ passive: false }` and reads zoom through a ref, because the handler from whichever render installed it would otherwise hold a stale value.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: 'A `ResizeObserver` on the host re-runs fit, **which discards the user’s pan and zoom** on any host resize.',
          },
          { kind: 'h', id: 'tools-and-drag', text: 'Tools and drag' },
          {
            kind: 'p',
            text: '`Tool = select | text | rect | ellipse | triangle | line | icon`.',
          },
          {
            kind: 'p',
            text: 'Pointer-down with a draw tool creates a 1×1 layer and enters `draw` mode. On release, anything still ≤4px in either axis was a click rather than a drag and gets a default size: **text 640×120, line 400×8, everything else 240×240**. Text then enters editing. The tool resets to `select` — draw tools are single-shot.',
          },
          {
            kind: 'p',
            text: 'Hit testing runs **topmost first** and requires `visible && !locked`. Shift toggles membership. Clicking an already-selected layer preserves the whole selection, so multi-drag works.',
          },
          {
            kind: 'table',
            headers: ['Mode', 'Behaviour'],
            rows: [
              ['`move`', 'Snaps unless **Alt** is held; positions rounded'],
              ['`resize`', '**Shift** constrains aspect. No snapping. Every selected layer re-derives from its captured origin rect'],
              ['`marquee`', 'Selects everything intersecting — **including locked layers**, unlike click'],
              ['`draw`', 'Normalised, clamped to ≥4'],
              ['`pan`', 'Space held, or middle mouse button'],
            ],
          },
          { kind: 'h', id: 'snapping', text: 'Snapping' },
          {
            kind: 'p',
            text: '`SNAP_PX = 6` screen pixels, divided by zoom before reaching `geometry.snap`.',
          },
          {
            kind: 'p',
            text: 'Targets per axis: artboard `0`, midpoint and full extent, plus every other rect’s start, mid and end. Moving edges are the moving box’s start, mid and end. Tolerance is strict `<`, so exactly-at-tolerance does not snap.',
          },
          {
            kind: 'note',
            tone: 'info',
            text: '**Guides only appear when a correction is actually applied.** A box already perfectly aligned produces `dx = 0` and therefore no visible guide.',
          },
          { kind: 'h', id: 'keyboard', text: 'Keyboard' },
          {
            kind: 'p',
            text: 'Window-level, skipped while typing (`INPUT`, `TEXTAREA`, `contentEditable`).',
          },
          {
            kind: 'table',
            headers: ['Key', 'Action'],
            rows: [
              ['`Space`', 'Pan (checked before the typing guard)'],
              ['`Cmd+Z` / `Shift+Cmd+Z`', 'Undo / redo'],
              ['`Cmd+D` / `Cmd+A`', 'Duplicate / select all on slide'],
              ['`Cmd+]` / `Cmd+[`', 'Forward / backward'],
              ['`Delete` / `Backspace`', 'Remove selection'],
              ['`Escape`', 'Clear editing, clear selection, tool → select'],
              ['`Enter`', 'Edit text (exactly one text layer selected)'],
              ['`v t r o l i`', 'select, text, rect, ellipse, line, icon'],
              ['Arrows', 'Nudge 1px, **10px with Shift**'],
            ],
          },
          {
            kind: 'note',
            tone: 'warn',
            text: 'There is **no shortcut for the triangle tool**.',
          },
          { kind: 'h', id: 'history', text: 'History' },
          {
            kind: 'p',
            text: 'Snapshot-based: `commit(doc, coalesceTag?)` pushes the previous `Doc` onto `past`. `LIMIT = 120` (the array peaks at 121). Undo covers everything — layer edits, reorders, slide operations — with no command class per action.',
          },
          {
            kind: 'p',
            text: 'Coalescing suppresses a push when the tag matches the previous one, so a drag is one undo step rather than sixty. It has **no time or gesture boundary** — see the defect list.',
          },
          {
            kind: 'p',
            text: '`commit` is also where auto-naming happens: a document whose name is one the app supplied takes its name from the first text layer on slide 1. A name you chose is never overwritten.',
          },
        ],
      },
      {
        slug: 'text-measurement-and-fitting',
        number: 6,
        title: 'Text measurement and fitting',
        summary:
          'The per-character advance table, greedy wrapping with pre-wrap semantics, and the size ladder that fits text to its box without ever clamping.',
        blocks: [
          {
            kind: 'p',
            text: '`text.ts` replaced `ceil(len / 18) * size`, which overflowed the artboard on long hooks. Canvas `measureText` was rejected deliberately: *"a layout that differs between test and production is worse than one that is slightly conservative in both."*',
          },
          { kind: 'h', id: 'advance-table', text: 'Advance table (em)' },
          {
            kind: 'table',
            headers: ['Class', 'Characters', 'Advance'],
            rows: [
              ['space', '`" "`', '0.26'],
              ['thin', '`iljI|!.,;:\'` `` ` ``', '0.28'],
              ['narrow', '`ft()[]{}/\\-r`', '0.36'],
              ['wide', '`mwMW@`', '0.86'],
              ['uppercase', '`A–Z`', '0.68'],
              ['digits', '`0–9`', '0.56'],
              ['everything else', '', '0.53'],
            ],
          },
          {
            kind: 'p',
            text: '`FAMILY_SCALE = { sans: 1, display: 1, serif: 0.97, mono: 1.15 }`, `MONO_ADVANCE = 0.6`, **`SAFETY = 1.02`** — a deliberate 2% over-estimate, because predicting one line too many costs a slightly smaller font and predicting one too few puts text off the slide.',
          },
          { kind: 'h', id: 'wrapping', text: 'Wrapping' },
          {
            kind: 'p',
            text: 'Greedy, with `pre-wrap` semantics. Split on `\\n` (hard breaks), then on `/(\\s+)/` keeping whitespace runs as tokens. If a word does not fit, flush the line; if the token was whitespace, drop it (browsers drop leading whitespace on a wrapped line); an over-wide single word is broken mid-word by scanning for the longest prefix that fits.',
          },
          {
            kind: 'p',
            text: '`lineCount` is `Math.max(1, lines)` — never zero.',
          },
          { kind: 'h', id: 'fitting', text: 'Fitting' },
          {
            kind: 'p',
            text: '`fitToBox` sorts the ladder descending regardless of input order and returns the first size where `lines × fontSize × lineHeight <= maxHeight`. If none fit it returns the smallest **with `overflows: true`** and its real height. It never clamps; callers must.',
          },
          {
            kind: 'p',
            text: '`ladder(max, min, steps = 12)` produces evenly spaced integers, deduped. `ladder(104, 40)` → `104, 98, 92, 87, 81, 75, 69, 63, 57, 52, 46, 40`.',
          },
          {
            kind: 'p',
            text: '`clampY` pins an oversized block to the top of its region rather than centring it, so the start stays readable.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: 'This guarantee currently holds for **sans and serif only**. See defect D1 — it is the most consequential defect in the reference.',
          },
        ],
      },
      {
        slug: 'colour-and-contrast',
        number: 7,
        title: 'Colour and contrast',
        summary:
          'Why inversion is not contrast, the WCAG maths, the softened poles, and the 168-point sweep that proves bestText always clears 4.5:1.',
        blocks: [
          {
            kind: 'p',
            text: '`colour.ts` exists because literal RGB inversion is not contrast: `#808080` inverts to `#7f7f7f`, a ratio of about 1.0.',
          },
          {
            kind: 'p',
            text: 'Standard WCAG maths — sRGB linearisation `s <= 0.04045 ? s/12.92 : ((s+0.055)/1.055) ** 2.4`, relative luminance `0.2126R + 0.7152G + 0.0722B`, contrast `(max + 0.05) / (min + 0.05)`.',
          },
          {
            kind: 'table',
            headers: ['Constant', 'Value', 'Meaning'],
            rows: [
              ['`AA`', '4.5', 'WCAG AA body text'],
              ['`INK` / `PAPER`', '`#0e1013` / `#f8fafc`', 'Softened poles — pure black and white read harsh on a tinted ground'],
              ['Luminance crossover', '**0.1791**', 'Where `bestText` switches to a pure pole'],
              ['Muted target', '4.6', '`textFor`’s second colour'],
            ],
          },
          {
            kind: 'p',
            text: '`bestText(bg)` takes the softened pole with more contrast; if it clears 4.5 it is returned. If not — a mid-blue like `#6767e4` tops out at 4.33 — it falls back to pure black or white, which guarantee at least 4.58:1 against any colour.',
          },
          {
            kind: 'p',
            text: 'Tested across a 168-point sweep: hue 0–345 in steps of 15, saturation 70, lightness `{8, 20, 35, 50, 65, 80, 95}`.',
          },
        ],
      },
      {
        slug: 'gradients',
        number: 8,
        title: 'Gradients',
        summary:
          'Gradients are stored as data rather than a CSS string, and each layer kind renders one differently — with two that ignore gradients entirely.',
        blocks: [
          {
            kind: 'p',
            text: 'Stored as **data, never as a CSS string**, so the same value paints on canvas, reads back into the editor, and rides along inside a style preset.',
          },
          {
            kind: 'code',
            text: 'Gradient { kind: "linear" | "radial" | "conic", angle, cx, cy, stops: { colour, at }[] }',
          },
          {
            kind: 'p',
            text: '`angle` is direction for linear, sweep start for conic, and **unused by radial**. `cx`/`cy` are 0–1 origins for radial and conic only. `MIN_STOPS = 2`, `MAX_STOPS = 8`; `addStop` and `removeStop` are no-ops at the limits rather than errors.',
          },
          {
            kind: 'p',
            text: 'Ten presets. CSS emission sorts and clamps stops first, rounds percentages to one decimal.',
          },
          { kind: 'h', id: 'per-kind', text: 'How each layer kind renders one' },
          {
            kind: 'table',
            headers: ['Kind', 'Rendering'],
            rows: [
              ['text', '`backgroundImage` + `backgroundClip: text` + `color: transparent`'],
              ['rect / line', '`backgroundImage` on a div'],
              ['**ellipse**', 'A div with `borderRadius: 50%` — deliberately not SVG, so a ramp and a border both work without a paint server'],
              ['**triangle**', 'Stays SVG (a border cannot follow it), so the ramp becomes a `<defs>` paint server. **Conic falls back to linear** — SVG has no conic ramp'],
              ['icon, image', '**Gradients are ignored**'],
            ],
          },
        ],
      },
      {
        slug: 'changing-format',
        number: 9,
        title: 'Changing format (reflow)',
        summary:
          'Why proportional scaling is the wrong answer to a format change, and the split rule reflow.ts uses instead.',
        blocks: [
          {
            kind: 'p',
            text: 'The old `setFormat` changed `width`/`height` and left every layer at its pixel position, so 4:5 → 9:16 stranded the content in the top two-thirds. Proportional scaling — Magic Resize’s approach — is the other wrong answer: it squashes type and turns circles into ovals.',
          },
          { kind: 'h', id: 'the-split-rule', text: 'The split rule' },
          {
            kind: 'list',
            items: [
              '**Horizontal follows the board.**',
              '**Vertical position follows the board**, so a block that sat low still sits low.',
              '**Vertical size does not stretch.** Text keeps its point size, is re-wrapped to the new column, and its box is re-measured from the lines it actually needs.',
              'Full-bleed layers (≥98% of the board) re-cover exactly.',
              'Non-text layers scale by `min(sx, sy)`, which is what keeps circles circular.',
            ],
          },
          {
            kind: 'p',
            text: 'It re-lays **the layers that are there** rather than regenerating from source text. Regenerating is easier and silently deletes every hand-drawn shape, moved block and placed image.',
          },
          {
            kind: 'p',
            text: '`verticalFill` exists purely for the tests: *"everything is inside the artboard"* passes for the broken version too, because stranded content overflows nothing.',
          },
        ],
      },
    ],
  },
  {
    label: 'Making a deck',
    blurb: 'Everything between a blank brief and a finished carousel.',
    sections: [
      {
        slug: 'the-four-frameworks',
        number: 10,
        title: 'The four frameworks',
        summary:
          'Problem, Showcase, Educational and Story — the slot structures that are the product\u2019s core IP, and the tests that police their writing.',
        blocks: [
          {
            kind: 'p',
            text: '`structures.ts`. The product\u2019s core IP. Every framework has 8 slots except Story, which has 9. Slot 1 is always `hook`; the last is always `cta`.',
          },
          {
            kind: 'p',
            text: 'Slots carry `id`, `label`, `note` (one line, beside the box), `detail` (hover), `placeholder`, `examples[]` and `repeatable?`. **`id` is not unique** — three `point` slots per framework — which is exactly why `alignToSlots` needs two passes.',
          },
          { kind: 'h', id: 'problem', text: '`problem` — Problem → Solution' },
          {
            kind: 'p',
            text: '*Name a pain, then fix it. The workhorse, and it works on a cold audience.*',
          },
          {
            kind: 'table',
            headers: ['#', 'id', 'Label', 'Note'],
            rows: [
              ['1', 'hook', 'Hook', 'Decides whether slide 2 is ever seen'],
              ['2', 'problem', 'The problem', 'Make it sting before you fix it'],
              ['3', 'why', 'Why it happens', 'Name the cause, not the symptom'],
              ['4', 'solution', 'Solution outline', 'The turn. One line, no detail yet'],
              ['5–7', 'point ↻', 'Fix', 'One fix per slide. Verb first · Same shape as the one before · Three is the sweet spot'],
              ['8', 'cta', 'Call to action', 'One ask. Two gets you neither'],
            ],
          },
          { kind: 'h', id: 'showcase', text: '`showcase` — Showcase / Portfolio' },
          {
            kind: 'p',
            text: '*Show the work and the thinking behind it. This is the one that books clients.*',
          },
          {
            kind: 'table',
            headers: ['#', 'id', 'Label', 'Note'],
            rows: [
              ['1', 'hook', 'Hook', 'Lead with the result, not the client'],
              ['2', 'context', 'Context', 'One sentence a stranger would get'],
              ['3', 'goal', 'The goal', 'Their brief, in their words'],
              ['4', 'process', 'The process', 'Show where it started'],
              ['5–6', 'point ↻', 'Key decision', 'Explain the why. That\u2019s the expertise · Pick the surprising choice'],
              ['7', 'result', 'Final result', 'A number beats three adjectives'],
              ['8', 'cta', 'Call to action', 'A keyword beats a link'],
            ],
          },
          { kind: 'h', id: 'educational', text: '`educational` — Educational / Value' },
          {
            kind: 'p',
            text: '*Teach one thing properly. Builds the authority the others cash in.*',
          },
          {
            kind: 'table',
            headers: ['#', 'id', 'Label', 'Note'],
            rows: [
              ['1', 'hook', 'Hook', 'Numbers beat vague. "3 tricks" wins'],
              ['2', 'promise', 'The promise', 'What they\u2019ll know by the end'],
              ['3', 'concept', 'The concept', 'The principle underneath'],
              ['4', 'breakdown', 'Breakdown', 'Start with the verb'],
              ['5–6', 'point ↻', 'Example', 'Show it working on something real · Three total. A fourth repeats'],
              ['7', 'takeaway', 'Key takeaway', 'The line that gets quoted'],
              ['8', 'cta', 'Call to action', '"Save" beats "follow" here'],
            ],
          },
          { kind: 'h', id: 'story', text: '`story` — Story / Case Study' },
          {
            kind: 'p',
            text: '*Take them through what happened. The most shared of the four.*',
          },
          {
            kind: 'table',
            headers: ['#', 'id', 'Label', 'Note'],
            rows: [
              ['1', 'hook', 'Hook', 'Open mid-scene. No setup'],
              ['2', 'situation', 'The situation', 'Just enough for the turn to land'],
              ['3', 'problem', 'The problem', 'Be specific about the symptom'],
              ['4', 'point ↻', 'What they\u2019d tried', 'Failed attempts make the fix credible'],
              ['5', 'turn', 'The turning point', 'The sharpest sentence you have'],
              ['6', 'solution', 'What you changed', 'One change, precisely stated'],
              ['7', 'result', 'The result', 'Let the numbers persuade'],
              ['8', 'lesson', 'The lesson', 'This is what makes it a case study'],
              ['9', 'cta', 'Call to action', '"More breakdowns" beats a pitch'],
            ],
          },
          { kind: 'h', id: 'writing-tests', text: 'The writing is tested' },
          {
            kind: 'p',
            text: 'Tests enforce the writing itself: notes are 11–46 characters, carry no trailing full stop and no em dash; every slot has a placeholder and at least one example; slot 1 is `hook` and the last is `cta`; every framework has a repeatable slot.',
          },
        ],
      },
      {
        slug: 'generation',
        number: 11,
        title: 'Generation',
        summary:
          'buildSlides runs once and returns plain layers — the geometry constants, how a composition is chosen, and what each of the eight compositions produces.',
        blocks: [
          {
            kind: 'p',
            text: '`buildSlides(texts, theme, roles?, options?) → Slide[]`. Runs once and returns plain layers.',
          },
          {
            kind: 'list',
            ordered: true,
            items: [
              'Drop blank texts. **Roles are indexed by the original position**, so they stay attached to their text even when earlier entries were empty.',
              'Nothing survives → one empty slide. Never an empty deck.',
              'Per entry: pick a composition, compute the regions, build the layers, apply fonts.',
              'The image placeholder is **layer 0 (back)**, so it and the text cannot hide each other.',
            ],
          },
          { kind: 'h', id: 'geometry', text: 'Geometry' },
          {
            kind: 'p',
            text: '`W 1080 · H 1350 · M 96 · COL 888 · BAND 430 · BAND_GAP 56`, inner height 1158.',
          },
          {
            kind: 'table',
            headers: ['Image setting', 'Image band', 'Text region'],
            rows: [
              ['No image', '—', '96, 96, 888, 1158'],
              ['`above`', '96, 96, 888, 430', '96, 582, 888, 672'],
              ['`below`', '96, 824, 888, 430', '96, 96, 888, 672'],
            ],
          },
          {
            kind: 'p',
            text: 'With images off, text gets the whole safe box — which is why "never" produces a visibly larger hook.',
          },
          { kind: 'h', id: 'composition-selection', text: 'Composition selection' },
          {
            kind: 'p',
            text: '`CYCLE = [heading-body, statement, numbered, quote, underline, caps]`. `BY_ROLE = { hook: title, cta: block, takeaway: statement, lesson: statement, turn: quote, result: numbered }`.',
          },
          {
            kind: 'p',
            text: 'Without roles: slide 1 is `title`, the last is `block` (when total > 2), everything else cycles. With roles, a pinned composition is used unless it would repeat the previous slide.',
          },
          {
            kind: 'table',
            headers: ['Framework', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            rows: [
              ['problem', 'title', 'heading-body', 'statement', 'numbered', 'quote', 'underline', 'caps', 'block', ''],
              ['showcase', 'title', 'heading-body', 'statement', 'numbered', 'quote', 'underline', 'numbered', 'block', ''],
              ['educational', 'title', 'heading-body', 'statement', 'numbered', 'quote', 'underline', 'statement', 'block', ''],
              ['story', 'title', 'heading-body', 'statement', 'numbered', 'quote', 'underline', 'numbered', 'statement', 'block'],
            ],
          },
          { kind: 'h', id: 'the-eight-compositions', text: 'The eight compositions' },
          {
            kind: 'table',
            headers: ['id', 'Band', 'Ladder', 'Layers'],
            rows: [
              ['`title`', 'above', '104→40, w700', '`Rule` (accent bar), `Title`'],
              ['`heading-body`', 'above', 'head 58→30 (capped at 40% of region), body 40→22 in muted', '`Heading`, `Body`'],
              ['`statement`', 'below', '76→30, w700, centred', '`Statement`'],
              ['`numbered`', 'below', 'body 46→22, numeral fixed 100px', '`Number`, `Tick`, `Text`'],
              ['`quote`', 'above', '62→26, italic, indent 44', '`Bar`, `Quote`'],
              ['`underline`', 'below', '70→30, w700', '`Text`, `Underline`'],
              ['`caps`', 'below', '56→22, uppercase, tracked 0.06', '`Text`'],
              ['`block`', 'above', '68→26, centred, text in `theme.bg`', '`Block` (full-bleed 0→1080), `Text`'],
            ],
          },
          {
            kind: 'note',
            tone: 'warn',
            text: '`heading-body` **silently delegates to `underline`** when the text has no sentence break, so a slide whose composition "is" heading-body can render as a single underlined block. `caps` is the only composition that measures uppercased and tracked, since that is what renders. `block` is the only layer that ignores the 96px margin. `numbered`\u2019s numeral is the **slide\u2019s position in the deck**, not the nth point — "Fix 1" on slide 5 displays `05`.',
          },
          { kind: 'h', id: 'decor', text: 'Decor' },
          {
            kind: 'p',
            text: '`0` removes accent rules, `1` normal, `1.8` bold. It scales the rule\u2019s **height** (quote\u2019s bar: width). `block` ignores it entirely. `title` and `underline` also reserve vertical space for the rule, so turning decor off changes the type fit, not just the graphics.',
          },
        ],
      },
      {
        slug: 'styles-and-themes',
        number: 12,
        title: 'Styles and themes',
        summary:
          'Fifteen styles — ten flat and five gradient — and the contrast tests each has to clear, including bg-on-accent for the CTA block.',
        blocks: [
          {
            kind: 'code',
            text: 'Theme { bg, fg, accent, muted, displayFont?, bodyFont?, bgGradient? }',
          },
          {
            kind: 'p',
            text: 'Fifteen styles: ten flat, five gradient.',
          },
          {
            kind: 'table',
            headers: ['id', 'Name', 'bg', 'fg', 'accent', 'muted', 'Faces'],
            rows: [
              ['dark', 'Dark', '`#101215`', '`#f2f4f7`', '`#ffffff`', '`#8b93a1`', 'sans'],
              ['light', 'Light', '`#ffffff`', '`#101215`', '`#101215`', '`#6b7280`', 'sans'],
              ['ink', 'Ink', '`#12161c`', '`#f4f6f8`', '`#d9a521`', '`#8b96a5`', 'sans'],
              ['paper', 'Paper', '`#f7f4ed`', '`#1a1a18`', '`#c2410c`', '`#6b665c`', 'serif'],
              ['cobalt', 'Cobalt', '`#12285a`', '`#ffffff`', '`#7ec8ff`', '`#9fb2d9`', 'sans'],
              ['bloom', 'Bloom', '`#fdf2f8`', '`#2b1220`', '`#db2777`', '`#7a556a`', 'sans'],
              ['forest', 'Forest', '`#0f2419`', '`#eef7f0`', '`#5fd08a`', '`#8aa896`', 'sans'],
              ['terminal', 'Terminal', '`#0a0a0a`', '`#e6e6e6`', '`#4ade80`', '`#7d7d7d`', '**mono**'],
              ['noir', 'Noir', '`#0c0c0d`', '`#fafafa`', '`#ef4444`', '`#8a8a8f`', 'sans'],
              ['sand', 'Sand', '`#efe7da`', '`#2a2118`', '`#9a6b3f`', '`#7c6f5f`', 'serif/sans'],
            ],
          },
          {
            kind: 'p',
            text: 'Gradient styles: **Dusk** indigo→magenta, **Ember** deep red→burnt amber, **Deep sea** navy→teal, **Halo** (radial) lit centre on near-black, **Dawn** cream→rose.',
          },
          { kind: 'h', id: 'contrast-tests', text: 'What the tests enforce' },
          {
            kind: 'p',
            text: 'Per style: fg/bg ≥ 4.5:1, muted/bg ≥ 3:1, accent/bg ≥ 3:1, and **bg-on-accent ≥ 3:1** — because the CTA block prints `theme.bg` text on `theme.accent`.',
          },
          {
            kind: 'p',
            text: 'Gradient styles are additionally checked against **every stop**, not just the first: contrast against `theme.bg` only checks one end of a ramp that text sits across the whole of. That test caught two real failures during development.',
          },
        ],
      },
      {
        slug: 'onboarding',
        number: 13,
        title: 'Onboarding',
        summary:
          'Five questions stored under flashcc:v3:prefs, and why a custom ground can never produce an unreadable deck.',
        blocks: [
          {
            kind: 'p',
            text: 'Five questions, stored under `flashcc:v3:prefs`.',
          },
          {
            kind: 'table',
            headers: ['Question', 'Field', 'Effect'],
            rows: [
              ['Light or dark?', '`ground` (+`customBg`)', '`theme.bg/fg/muted`'],
              ['Pick an accent', '`accent`', 'Rules, numerals, quote bar, CTA block'],
              ['How should headings read?', '`displayFont`', '`theme.displayFont`'],
              ['Do you use photos?', '`images`', 'Reserve an image band or not'],
              ['Lines and accents?', '`decor`', '0 / 1 / 1.8'],
            ],
          },
          {
            kind: 'p',
            text: 'Ten grounds, eight accent swatches, plus a freeform colour picker. A custom ground derives its text colours through `colour.textFor`, so **one decision cannot produce an unreadable deck**.',
          },
          {
            kind: 'p',
            text: 'Every storage access is try/caught, and in private mode `hasOnboarded()` returns **true** — never nag someone whose browser cannot remember the answer.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: '`REPLAY_IN_DEV = true` in `onboarding.ts` forces onboarding on every dev load. The returning-user path is unreachable in dev without flipping it.',
          },
        ],
      },
      {
        slug: 'ai-drafting',
        number: 14,
        title: 'AI drafting',
        summary:
          'The key lives on the server and never reaches the bundle — the request flow, the system prompt constraints, and the two-pass slot alignment.',
        blocks: [
          {
            kind: 'p',
            text: 'The key lives on the server and never reaches the bundle. That is the entire reason the server process exists.',
          },
          {
            kind: 'list',
            ordered: true,
            items: [
              '`AiChat` takes a brief. `Cmd/Ctrl+Enter` submits; a new request aborts any in flight.',
              '`draftSlides` POSTs `{ brief, structure: { name, shape, slots } }` to `/api/draft`.',
              'The server calls `claude-opus-5` through `messages.parse()` with a zod output format. The system prompt enforces: finished copy not placeholders, one idea per slide, hook under 90 characters, body under 220, stay in the brief\u2019s voice, add no claims the brief does not contain, no hashtags or emoji.',
              '**A policy decline returns 200 with no usable content**, so `stop_reason === "refusal"` is checked before reading and mapped to 422.',
              '`alignToSlots` runs **two passes**: first match drafts to slots by role, then fill what is left positionally. One pass swallowed the CTA whenever the model answered out of order — the three `point` slots sharing an id is exactly what breaks a naive match.',
            ],
          },
        ],
      },
      {
        slug: 'bulk-create',
        number: 15,
        title: 'Bulk create',
        summary:
          'Three dashes separate carousels, a blank line separates slides — and the parsing rules that stop an em dash in prose from splitting a deck.',
        blocks: [
          {
            kind: 'p',
            text: '`---` on its own line separates carousels; a blank line separates slides.',
          },
          {
            kind: 'code',
            text: 'parseBulk: normalise CRLF → split /^[ \\t]*-{3,}[ \\t]*$/m → trim, drop empties\n           → split each on /\\n\\s*\\n/ → title = nameFromHook(first line)',
          },
          {
            kind: 'p',
            text: '`"A --- B"` on one line does not split, and neither does `"Cut on motion - not on beat"`. Empty blocks are dropped.',
          },
        ],
      },
      {
        slug: 'media-and-fonts',
        number: 16,
        title: 'Media and fonts',
        summary:
          'The 24-image pool and its re-encoding rules, and the six-font upload cap with namespaced families.',
        blocks: [
          { kind: 'h', id: 'media', text: 'Media' },
          {
            kind: 'p',
            text: '`media.ts`: pool of 24, downscaled to 1600px max edge at quality 0.82. PNG and WebP re-encode to WebP, everything else to JPEG, and the re-encode is discarded if it came out bigger.',
          },
          {
            kind: 'p',
            text: 'Small files under 400KB skip re-encoding entirely — **deliberately, so small GIFs keep their animation**, which a canvas round-trip would kill. One unreadable file is swallowed so the rest of a drop survives.',
          },
          {
            kind: 'p',
            text: 'Drag from the pool onto an image placeholder fills it at the slot\u2019s size; drop on bare canvas places it where you dropped it.',
          },
          { kind: 'h', id: 'fonts', text: 'Fonts' },
          {
            kind: 'p',
            text: '`fonts.ts`: 8 built-in stacks chosen so nothing has to be downloaded. Uploads are capped at **6 fonts, 400KB each**, stored as data URLs in localStorage and registered through the FontFace API.',
          },
          {
            kind: 'p',
            text: 'Families are namespaced `FCC <label> <timestamp>` so an uploaded "Inter" cannot shadow a system face. `FontUpload` teaches what a usable font file is, because most people have never downloaded a `.woff2` and will otherwise drop in a 3MB `.ttf` and hit the cap with no idea why.',
          },
        ],
      },
      {
        slug: 'screen-flow',
        number: 17,
        title: 'Screen flow',
        summary:
          'The eight screens from welcome to studio, where the document is actually minted, and the deliberate delays.',
        blocks: [
          {
            kind: 'code',
            text: 'welcome → firstRun → start(Home) → frameworks → ai → compose → style → studio',
          },
          {
            kind: 'list',
            items: [
              '**welcome** — the five questions, or straight through',
              '**firstRun** — typewriter, then create / see examples / not yet',
              '**start** — `Home`, the six-view shell',
              '**frameworks** — the four cards plus "Not sure" (→ `problem`)',
              '**ai** — draft with Claude, or write it yourself',
              '**compose** — one field per slot, examples clickable, `+` between fields',
              '**style** — the gallery, then the document is minted',
              '**studio** — the canvas',
            ],
          },
          {
            kind: 'p',
            text: 'The document is created in `style → onUse`: name from the hook, `framework` and `styleId` stamped, palette built, `buildSlides` run. `Studio` is keyed on `doc.id` so each project gets a fresh history stack.',
          },
          { kind: 'h', id: 'deliberate-delays', text: 'Deliberate delays' },
          {
            kind: 'p',
            text: 'Frameworks 1000ms, AI chat 300ms, style picker 1500ms with five fake progress steps, bulk 1400ms, welcome exit 1000ms. The style picker\u2019s comment says it plainly: *"Real work is instant; this is the beat that shows it happened."*',
          },
        ],
      },
    ],
  },
  {
    label: 'The product',
    blurb: 'What happens after the artwork is finished.',
    sections: [
      {
        slug: 'the-pipeline',
        number: 18,
        title: 'The pipeline',
        summary:
          'A Post is not a Doc — the structural snapshot is copied at creation so the version that earned the numbers is the one that went out.',
        blocks: [
          {
            kind: 'p',
            text: 'A **Post is not a Doc.** A Doc is the artwork; a Post is one publication of it, so the same carousel can go to LinkedIn on Tuesday and Instagram on Friday as two records with two sets of numbers.',
          },
          {
            kind: 'code',
            text: 'Post { id, docId, title, stage, platform,\n       framework, slideCount, hook, styleId,      // the structural snapshot\n       scheduledFor, postedAt, url, caption, notes, metrics,\n       createdAt, updatedAt }',
          },
          {
            kind: 'p',
            text: 'The structural fields are **copied at creation, not looked up through `docId`**, because the document keeps being edited and the version that earned the numbers is the one that went out.',
          },
          { kind: 'h', id: 'stages', text: 'Stages' },
          {
            kind: 'table',
            headers: ['Stage', 'Hint'],
            rows: [
              ['`idea`', 'A thought, not a carousel yet'],
              ['`drafting`', 'Being written or designed'],
              ['`ready`', 'Finished, waiting for a slot'],
              ['`scheduled`', 'Has a date'],
              ['`posted`', 'Live, collecting numbers'],
            ],
          },
          {
            kind: 'p',
            text: 'Entering `posted` stamps a date; **leaving it clears the date again.** A post sitting in "drafting" while still carrying `postedAt` would keep feeding the baseline — a bug nobody notices and everybody acts on.',
          },
          {
            kind: 'p',
            text: '`isMeasured` requires stage `posted`, a `postedAt`, a `metrics` object **and non-zero reach**. Every ratio downstream divides by reach, so zero has to be turned away at the door.',
          },
          {
            kind: 'p',
            text: 'Seven metrics are entered by hand, each labelled with the platform\u2019s own word for it, because the fastest way to make manual entry hurt is to make people guess which number goes in which box. `engagements = likes + comments + shares + saves` — clicks and follows excluded.',
          },
        ],
      },
      {
        slug: 'analytics',
        number: 19,
        title: 'Analytics',
        summary:
          'Everything is a ratio against the median of your own recent posts, and six dimensions of attribution derived from data already stored.',
        blocks: [
          { kind: 'p', text: 'Two ideas carry `insights.ts`.' },
          { kind: 'h', id: 'the-baseline', text: 'The baseline' },
          {
            kind: 'p',
            text: 'An outlier is not "a big number", it is "a big number **for you**". 4,000 impressions is a triumph on a small account and a flop on a large one. So everything is a ratio against the median of your own recent posts.',
          },
          {
            kind: 'p',
            text: '**Median, never mean.** One genuinely viral post drags a mean so far up that nothing clears the bar again — the feature would quietly stop working exactly when it got interesting. There is a test with a 100k post among five ordinary ones that pins this.',
          },
          {
            kind: 'table',
            headers: ['Constant', 'Value', 'Gates'],
            rows: [
              ['`BASELINE_WINDOW`', '20', 'How many recent measured posts the median draws from'],
              ['`MIN_TOTAL`', '5', '`Baseline.ready`; `findings()` returns `[]` entirely below it'],
              ['`MIN_GROUP`', '3', 'A bucket is not reported below this n'],
              ['`OUTLIER_AT`', '2', 'The outlier band'],
              ['`WEAK_AT`', '0.5', 'The weak band'],
            ],
          },
          {
            kind: 'p',
            text: '`confidence(n)`: under 5 "Early signal", under 10 "Worth watching", else "Consistent". The wording is deliberately hedged at the low end — *"early signal" invites another post, "consistent" invites a decision.*',
          },
          { kind: 'h', id: 'attribution', text: 'Attribution' },
          {
            kind: 'p',
            text: 'Six dimensions, all derived from data already stored: **framework, hook shape, length band, style, platform, weekday**.',
          },
          {
            kind: 'p',
            text: 'Hook shape is classified in this order: leading digit → Number; `^how (to|i|we|this|these)` → How-to; contains `?` → Question; a mid-string listicle pattern → Number; else Statement. So *"3 reasons your edit drags. Recognise any?"* is a Number, and *"How do you know when it is done?"* is a Question rather than a How-to.',
          },
          {
            kind: 'p',
            text: '`findings()` reports a bucket only when it clears both gates **and** sits outside a dead band of 0.8–1.25, sorted by `|log(lift)|` so the strongest deviation in either direction comes first.',
          },
          {
            kind: 'p',
            text: '`whatOutliersShare()` asks a different question: what do the winners have that the rest do not? A trait must be present in **at least half the outliers and at least 1.2× rarer among everything else** — a trait shared by every post you have ever made explains nothing about why five took off.',
          },
        ],
      },
      {
        slug: 'the-library',
        number: 20,
        title: 'The library',
        summary:
          'Search runs over a flattened blob written at save time, matching is AND not OR, and facets are derived rather than entered.',
        blocks: [
          {
            kind: 'p',
            text: 'Search runs over a **flattened blob written into the summary at save time**, not over the documents. Parsing fifty stored documents on every keystroke — each carrying its media as base64 — would make search feel broken at exactly the volume where search starts to matter. Capped at 4,000 characters.',
          },
          {
            kind: 'p',
            text: 'Matching is **AND, not OR**. A two-word query that returns everything matching either word is indistinguishable from a broken search box.',
          },
          {
            kind: 'p',
            text: 'Facets are **derived, never entered.** There is no tag field and there will not be one: tagging fails on vocabulary drift — one asset filed as "blazer" and the next as "sportscoat" — and on maintenance time small teams do not have. A facet only appears once there is more than one value to choose between.',
          },
          {
            kind: 'p',
            text: 'Counts are taken over the **active** set, never the filtered one. A facet reading "3" that then shows one result is a bug report.',
          },
          {
            kind: 'p',
            text: 'Archived work is dropped **before every other test**, including the query. "Unfiled" means no group *or* a name the app supplied — both are how work goes missing. Published state is derived from the pipeline rather than stored on the document, so the two cannot disagree.',
          },
        ],
      },
      {
        slug: 'export',
        number: 21,
        title: 'Export',
        summary:
          'What each platform does to a deck after upload, the pre-flight rules, and why export renders through headless Chromium rather than a canvas library.',
        blocks: [
          { kind: 'h', id: 'platform-constraints', text: 'What each platform does to a deck after upload' },
          {
            kind: 'table',
            headers: ['', 'LinkedIn', 'Instagram', 'TikTok'],
            rows: [
              ['Size', '1080×1350', '1080×1350', '1080×1920'],
              ['Output', 'PDF', 'Numbered images', 'Numbered images'],
              ['Format / quality', 'JPEG 0.92', 'JPEG 0.90', 'JPEG 0.90'],
              ['Byte band', '800KB–2MB', '200KB–1.5MB', '200KB–2MB'],
              ['Max slides', '300', '**10 API / 20 app**', '35'],
              ['Safe zone T/R/B/L', '80/40/80/40', '135/0/135/0', '100/180/480/40'],
              ['Min body / heading', '18 / 24pt', '18 / 24pt', '20 / 28pt'],
            ],
          },
          {
            kind: 'p',
            text: '**LinkedIn rasterises every PDF** to 1080px wide at JPEG ~80–85%, so "keep the text vector" is folk wisdom that does not survive the pipeline. What survives is designing at the exact size, in sRGB, with type big enough to read after a lossy pass.',
          },
          {
            kind: 'p',
            text: '**Instagram crops every slide to the first slide\u2019s ratio.** Get slide 1 wrong and all ten are ruined. Its profile grid also shows a centred square, which is why the safe inset at 4:5 is 135px top and bottom — anything outside it is invisible to anyone browsing your profile.',
          },
          {
            kind: 'p',
            text: '**API ceilings differ from app ceilings.** A 20-slide Instagram deck can be posted by hand and by no scheduler that exists.',
          },
          { kind: 'h', id: 'pre-flight', text: 'Pre-flight' },
          {
            kind: 'p',
            text: 'Blocking: too many slides, an empty deck, type below the platform floor, text that does not fit its box. Warnings: the app-vs-API slide gap, wrong artboard size, placeholder copy, hairline strokes, anything reaching into a safe zone, a weak hook on slide 1, and — after rendering — a file outside the byte band.',
          },
          {
            kind: 'note',
            tone: 'info',
            text: '**Blocks block; warnings do not.** A tool that refuses to export because a stroke is 1px is a tool people route around. The overflow message names another slide as the remedy and names shrinking as the thing not to do, because shrink-to-fit is the complaint rather than the fix.',
          },
          { kind: 'h', id: 'rendering', text: 'Rendering' },
          {
            kind: 'p',
            text: 'The client serialises the markup `LayerView` already produced — `renderToStaticMarkup` per visible layer — and POSTs it. The server renders it in a real headless Chromium at exact pixel size.',
          },
          {
            kind: 'p',
            text: 'A canvas library was rejected because FlashCC leans on `background-clip: text` for gradient type and the FontFace API for uploads, and the html-to-canvas converters are unreliable on exactly those two.',
          },
          {
            kind: 'p',
            text: 'One browser is kept warm across requests; launching Chromium is most of the time budget for a ten-slide deck. Uploaded faces travel with the markup as `@font-face` rules carrying their data URLs — they live in that browser\u2019s localStorage and the server has never heard of them, so anything not sent is silently substituted with Arial.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: '**LinkedIn PDFs are built from JPEG pages**, not PNG: PNG pages have been observed converting into a PDF that renders blank, and the failure is silent until the post is live.',
          },
          {
            kind: 'p',
            text: 'Filenames are zero-padded (`01.jpg`), because every upload dialog sorts by filename and a carousel out of order is worse than no carousel. The zip uses `STORE` — JPEG is already compressed, so deflating costs time and saves nothing.',
          },
        ],
      },
    ],
  },
  {
    label: 'Infrastructure',
    blurb: 'Storage, sync, accounts, billing, the schema and the tokens.',
    sections: [
      {
        slug: 'persistence',
        number: 22,
        title: 'Persistence',
        summary:
          'The localStorage keys, and the two load-bearing distinctions: saveDoc vs putDoc, and deleteDoc vs dropDoc.',
        blocks: [
          {
            kind: 'table',
            headers: ['Key', 'Holds'],
            rows: [
              ['`flashcc:v3:index`', '`DocSummary[]` — the grid and the search blob'],
              ['`flashcc:v3:doc:<id>`', 'One full `Doc`, media included as base64'],
              ['`flashcc:v3:index-version`', 'Retires the one-shot summary backfill'],
              ['`flashcc:v3:fonts`', 'Uploaded faces as data URLs'],
              ['`flashcc:v3:onboarded` / `:prefs`', 'Onboarding state and answers'],
              ['`flashcc:v1:posts`', 'The entire pipeline in one key'],
              ['`flashcc:v1:tombstones`', 'Deletions, both kinds'],
              ['`flashcc:v1:sync-cursor`', 'Last successful sync — read only for the "Synced 3m ago" label'],
            ],
          },
          {
            kind: 'p',
            text: '**`saveDoc` versus `putDoc` is the load-bearing distinction.** `saveDoc` restamps `updatedAt`; `putDoc` writes verbatim. Sync applies remote records through `putDoc`, because restamping a record the moment it arrives makes the local copy look newer than the server\u2019s — the next merge pushes it straight back and the two sides take turns overwriting each other forever.',
          },
          {
            kind: 'p',
            text: '**`deleteDoc` versus `dropDoc`** is the same shape of decision. `deleteDoc` removes and records a tombstone. `dropDoc` removes without one, for the only two cases that are not deletions: applying a remote delete, and clearing the machine on sign-out. Tombstoning either would push a delete back up for work that is very much alive on the account.',
          },
        ],
      },
      {
        slug: 'sync',
        number: 23,
        title: 'Sync',
        summary:
          'Last write wins on the record\u2019s own updatedAt, deletion competes on the same terms as an edit, and the pull is deliberately full rather than incremental.',
        blocks: [
          {
            kind: 'p',
            text: 'Last write wins on the record\u2019s own `updatedAt`. Not CRDTs, not field-level merging. One person on a laptop and a phone rarely touches the same carousel in the same minute, and when they do, "the newer edit survives" is a result they can predict. A clever merge produces a slide neither device ever had, and nobody can explain it afterwards.',
          },
          {
            kind: 'p',
            text: '**Deletion is not a special case.** A deleted record becomes an entry whose value is null and whose timestamp is when it went, so it competes on the same terms as an edit. Without that, deleting a project on your laptop and syncing your phone resurrects it — and keeps resurrecting it every time the two meet.',
          },
          {
            kind: 'p',
            text: 'Ties resolve to **doing nothing**, which is what makes a repeated sync free.',
          },
          {
            kind: 'p',
            text: 'The pull is deliberately **full, not incremental**. An incremental pull keyed on the server clock can only be correct once every device is known to have seen every tombstone, and getting that wrong resurrects deleted records. `server_updated_at` and the sync indexes exist for that future; the cursor is currently written and read only for the UI label.',
          },
          {
            kind: 'p',
            text: 'Docs push before posts, because posts reference docs. Tombstones are cleared **only after** the upsert succeeds.',
          },
          {
            kind: 'p',
            text: 'Triggers: session adoption, window focus (throttled to 30s), 3s after local edits settle, manual, and sign-out. **Sign-out pushes before it clears** — the other order throws away anything edited since the last sync.',
          },
        ],
      },
      {
        slug: 'auth',
        number: 24,
        title: 'Auth',
        summary:
          'Magic link only, an origin-pinned redirect, and why the profile row is created by the client rather than a trigger.',
        blocks: [
          {
            kind: 'p',
            text: 'Magic link only. No password to store, no reset flow, no credential for this app to be careless with.',
          },
          {
            kind: 'p',
            text: 'The redirect is pinned to `${origin}${pathname}` — origin-pinned so a stolen link cannot be bounced elsewhere, query-stripped so the token does not land beside whatever state was in the URL.',
          },
          {
            kind: 'p',
            text: 'The profile row is created **by the client on first sign-in**, not by a trigger on `auth.users`. Supabase has tightened ownership of that table and the trigger now fails on many projects with `must be owner of relation users` — and because the SQL editor runs a script in one transaction, that single error rolls the whole schema back.',
          },
          {
            kind: 'p',
            text: 'Nothing is trusted to the client by moving it: the INSERT privilege is narrowed to `(id, email, display_name)`, so `plan` takes its default whatever the request contains.',
          },
          {
            kind: 'p',
            text: 'An unknown email address gets no error — Supabase\u2019s enumeration protection, which the copy explains rather than papers over.',
          },
        ],
      },
      {
        slug: 'billing',
        number: 25,
        title: 'Billing',
        summary:
          'The browser can only ask for a Checkout link; entitlement is decided by a signature-verified webhook reading raw bytes.',
        blocks: [
          {
            kind: 'p',
            text: 'The browser can do exactly one billing thing: **ask for a Checkout link.** It never states what plan someone is on and the server never believes it if it does. Entitlement is decided in one place — a webhook whose signature is verified against the Stripe secret — and written with the service role key.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: 'Signature verification is load-bearing, not hygiene: without it that endpoint is an open door where anyone who guesses the URL POSTs themselves a subscription. The body is read as **raw bytes** for the same reason — string concatenation re-encodes, and one multi-byte character on a chunk boundary breaks verification in a way that looks exactly like a wrong secret.',
          },
          {
            kind: 'p',
            text: '`ENTITLED = { active, trialing, past_due }` — a failed payment does not cut access off mid-retry. An **unrecognised price id becomes `free`** rather than a guess: a rotated price should cost a support ticket, not hand out a tier.',
          },
          {
            kind: 'p',
            text: '`checkout.session.completed` re-retrieves the subscription rather than trusting the session, because the session carries a snapshot and the subscription carries the truth.',
          },
          {
            kind: 'p',
            text: 'Stripe returns the browser before the webhook necessarily lands, so the app polls the profile for about 20 seconds and says "turning your plan on" rather than showing Free to somebody who has just paid.',
          },
        ],
      },
      {
        slug: 'database',
        number: 26,
        title: 'Database',
        summary:
          'Three tables keyed on (user_id, id), two timestamps for a reason, and the column-level GRANT that is the actual paywall.',
        blocks: [
          {
            kind: 'p',
            text: 'Three tables, all with `(user_id, id)` composite primary keys.',
          },
          {
            kind: 'list',
            items: [
              '**Identity is the client\u2019s.** The app mints ids offline and creates records before anyone signs in, so there is no id remapping on sync and ids only need to be unique per person.',
              '**Two timestamps.** `updated_at` is the client\u2019s own and is what LWW compares; `server_updated_at` is trigger-stamped. Collapsing them breaks sync in a way that looks fine until two devices disagree.',
              '**`docs.data` is the truth.** The flat columns beside it are a projection so the grid can draw without pulling every slide and image down the wire. If they ever disagree, the blob wins.',
              '**`posts` is columnar** because analytics groups and filters by those fields and a jsonb blob cannot be indexed usefully for that.',
              '`doc_id` has **no foreign key**, deliberately: a composite FK would need `ON DELETE SET NULL (doc_id)`, which is Postgres 15+ only, and it makes account deletion order-sensitive.',
            ],
          },
          { kind: 'h', id: 'the-paywall-is-a-grant', text: 'The paywall is a GRANT, not a policy' },
          {
            kind: 'code',
            text: 'revoke update on public.profiles from authenticated, anon;\ngrant  update (display_name) on public.profiles to authenticated;\nrevoke insert on public.profiles from authenticated, anon;\ngrant  insert (id, email, display_name) on public.profiles to authenticated;',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: '**This is the single most security-relevant passage in the repo.** RLS cannot express "this row but not that column". Supabase grants `authenticated` UPDATE on the whole table by default, and in Postgres **a column-level REVOKE does nothing while a table-wide grant stands**. The only way to narrow it is to drop the table privilege and grant back the one safe column.',
          },
          {
            kind: 'p',
            text: 'Get it wrong and the paywall is decorative: any signed-in user can `PATCH /rest/v1/profiles` with `{"plan":"pro"}` from the console. The INSERT narrowing matters more — without it someone creates their own row at `plan: \'pro\'` on first sign-in and never pays.',
          },
          {
            kind: 'p',
            text: '`02-pro-gate.sql` makes the cloud pipeline Pro-only **and has not been run.** Until it is, a free account syncs its pipeline exactly like a paying one. Reads stay open to lapsed subscribers, because cancelling should not look like confiscation. Carousels are never gated — the editor is the free tier; the history is what compounds, so the history is what costs money.',
          },
        ],
      },
      {
        slug: 'design-tokens',
        number: 27,
        title: 'Design tokens',
        summary:
          'The surface ladder, white-alpha lines, hierarchy by value step, and the transition rule that makes hover 0ms on purpose.',
        blocks: [
          {
            kind: 'p',
            text: '`tokens.css` is the single source of truth; `tailwind.config.ts` only points at it.',
          },
          {
            kind: 'list',
            items: [
              '**Surface ladder** — depth via a lighter step, never a shadow: `#070f1c` sunken, `#0a1424` base, then surfaces 1–5 from `#0e1b2e` to `#2a3f5c`.',
              '**Lines** are white-alpha so they adapt to any surface: hairline `rgba(255,255,255,0.08)`, border `0.14`.',
              '**Text** is hierarchy by value step, not colour: `#e6edf6` → `#94a3b8` → `#64748b` → `#475569`.',
              '**Accent** `#d9a521`, used sparingly. **Brand gold** is a gradient, so it cannot be a Tailwind colour and is always applied inline.',
            ],
          },
          {
            kind: 'p',
            text: 'Type scale: overline 10, caption 11, body 12, title 13, stat 15, display 22.',
          },
          {
            kind: 'p',
            text: 'Motion: `instant 80ms`, `micro 120ms`, `standard 200ms`, `large 300ms`. **`* { transition-property: none }`** is the base rule — hover and selection are 0ms, because motion on a pointer-reactive control reads as latency. Onboarding is the deliberate exception and carries its own animation set, all disabled under `prefers-reduced-motion`.',
          },
          {
            kind: 'note',
            tone: 'warn',
            text: '**Gotcha:** because these are `var()`-based rather than RGB channels, Tailwind\u2019s `/opacity` suffix **does not work**. `text-accent/40` renders nothing. Use a predefined wash or a built-in scale like `white/[0.04]`.',
          },
        ],
      },
      {
        slug: 'testing',
        number: 28,
        title: 'Testing',
        summary:
          '296 tests across 17 files, written as design guards — several encode an argument that would otherwise be lost.',
        blocks: [
          {
            kind: 'p',
            text: '296 tests across 17 files. They are design guards, not coverage theatre — several encode an argument that would otherwise be lost:',
          },
          {
            kind: 'list',
            items: [
              '**mean vs median** — five posts and one at 100k, proving a mean baseline would switch outlier detection off permanently',
              '**contrast against every gradient stop**, not just the first; it caught two real failures',
              '**`verticalFill`** — because "everything is inside the artboard" passes for the broken reflow too',
              '**the gates stay quiet** — no finding below `MIN_TOTAL`, none from a group below `MIN_GROUP`',
              '**the demo\u2019s two Story posts** have excellent numbers on purpose, so a test can prove the app refuses to conclude from them',
              '**deletions do not resurrect** across a second sync round trip',
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Reality check',
    blurb: 'What is known to be wrong, ordered by consequence.',
    sections: [
      {
        slug: 'known-defects',
        number: 29,
        title: 'Known defects',
        summary:
          'Twenty defects found by reading the code, ordered by consequence. None are fixed — D1 is the most consequential.',
        blocks: [
          {
            kind: 'note',
            tone: 'warn',
            text: 'Found by reading the code for the reference document. Ordered by consequence. **None are fixed.**',
          },
          { kind: 'h', id: 'd1', text: 'D1 — Text is fitted with sans metrics, then restyled' },
          {
            kind: 'p',
            text: '`compositions.ts` fits every text layer through `fit()` with the **default** `Measure`, then maps `applyFonts` over the result. So the size is chosen using sans metrics and the layer is *then* given the theme\u2019s real face. Mono measures **1.15× wider** and the safety margin is 2%.',
          },
          {
            kind: 'p',
            text: 'Reproduced on the Terminal style with a four-slide deck — 3 of 4 slides overflow:',
          },
          {
            kind: 'code',
            text: 'slide 2 "Heading"   font=mono size=58 box=67  needs=133\nslide 3 "Statement" font=mono size=76 box=448 needs=538\nslide 4 "Text"      font=mono size=68 box=82  needs=163',
          },
          {
            kind: 'p',
            text: 'Serif is safe only by luck: it measures at 0.97, so sans **over**-estimates. The "text never overflows" guarantee currently holds for sans and serif, not for mono — and not for `grotesk`, `slab`, `elegant` or `impact`, which have no `FAMILY_SCALE` entry at all and silently take sans metrics. `impact` is condensed and `elegant` is a Didot; both will mis-fit.',
          },
          {
            kind: 'p',
            text: '**Fix:** pass the family into `Measure` at fit time, and apply fonts before fitting rather than after.',
          },
          { kind: 'h', id: 'd2', text: 'D2 — Resizing a text layer compounds its font size' },
          {
            kind: 'p',
            text: '`Canvas.tsx`. Position and size derive from the **captured origin rect**; `fontSize` derives from `l.fontSize`, the already-updated layer. So the cumulative ratio is re-applied on every pointer-move event:',
          },
          {
            kind: 'code',
            text: 'move 1  k=1.1  64 → 70     (correct)\nmove 2  k=1.2  70 → 84     (should be 77)\nmove 3  k=1.3  84 → 109    (should be 83)',
          },
          {
            kind: 'p',
            text: '**Fix:** derive from the origin rect\u2019s font size, captured alongside the geometry.',
          },
          { kind: 'h', id: 'd3-d10', text: 'D3 – D10' },
          {
            kind: 'list',
            items: [
              '**D3 — `app-only-slide-count` can never be useful advice.** Its condition requires `count > maxSlides`, which is exactly the `too-many-slides` **block** condition. A 15-slide Instagram deck gets a warning saying it *"works if you post by hand"* next to a hard block that disables the export button. **Fix:** block at `appMaxSlides ?? maxSlides`.',
              '**D4 — `intrudes()` assumes symmetric safe-zone insets.** It tests `l.w >= box.w + box.x * 2 - 1`, using the left inset twice. TikTok\u2019s insets are 40 left and 180 right, so the effective full-bleed threshold is 939×1539 rather than 1080×1920 — any layer above that size is exempted wherever it sits.',
              '**D5 — Hidden layers are skipped everywhere except the hook check.** A hidden 88pt layer suppresses the `weak-hook` warning for the visible copy underneath.',
              '**D6 — Two exported types named `Platform`, two named `Finding`.** `pipeline.ts` exports a four-value union **including `"x"`**; `platforms.ts` exports three ids and no `"x"`. A post on `"x"` has no artboard, no safe zone, no pre-flight and no export target.',
              '**D7 — `whatOutliersShare` is ungated.** It applies neither `MIN_TOTAL` nor `MIN_GROUP`, so with a single outlier it can report six "shared traits" from n=1 — contradicting its own file header.',
              '**D8 — Two denominators, one label.** `Scored.ratio` divides by the **windowed** baseline (last 20); `Group.lift` divides by the median of **all** measured posts. The Outliers screen calls both "your median" in adjacent paragraphs.',
              '**D9 — `bodyFont` reaches exactly one layer.** `applyFonts` gives `theme.bodyFont` only to a layer literally named `"Body"`. Quote prose and numbered body text all take the *display* face, despite the module comment saying otherwise.',
              '**D10 — Samples and bulk decks are invisible to analytics.** `buildFrameworkSamples` and `buildDocs` never stamp `doc.framework` or `doc.styleId`, so they are excluded from the attribution that is the product\u2019s main differentiator — even though the bulk UI made the user pick a framework.',
            ],
          },
          { kind: 'h', id: 'd11-d19', text: 'D11 – D19' },
          {
            kind: 'list',
            items: [
              '**D11 — Onboarding offers a choice generation does not make.** `images: "always"` and `"sometimes"` are identical downstream; only `"never"` differs.',
              '**D12 — Rotation is invisible to the entire geometry layer.** `bounds`, `rectOf`, `contains`, `intersects`, `snap`, `resize`, the selection outline, the handles and reflow\u2019s clamp all use the **unrotated** box. Past roughly 15°, a layer is grabbable where it is not drawn.',
              '**D13 — Locked layers are marquee-selectable.** Click filters `visible && !locked`; marquee filters only `visible`. Once selected, a locked layer can be moved, nudged, resized and deleted.',
              '**D14 — Pasting slides ignores the document\u2019s style.** `Studio.tsx` hardcodes `THEMES.ink`, so slides appended to a Paper or Cobalt project arrive in Ink colours. It also does not enforce `MAX_SLIDES`.',
              '**D15 — Undo coalescing has no boundary.** Two separate drags minutes apart collapse into one undo step.',
              '**D16 — A full quota silently defeats tombstones.** `tombstones.write()` swallows quota errors, so under quota pressure a delete succeeds locally, records nothing, and the next sync resurrects it. This is the one failure mode that defeats the whole design.',
              '**D17 — `PostRow.impressions` documents a column that does not exist.** The generated column was removed while de-risking a failed migration and the comment was not.',
              '**D18 — The production posture is unfinished.** `/api/draft` and `/api/export` take **no authentication**. Anyone who can reach port 8787 can burn Anthropic tokens or drive Chromium renders. `render.ts` interpolates client-supplied HTML and CSS unescaped, the browser context is not network-isolated, and there is no rate limiting or CORS policy anywhere.',
              '**D19 — `Upgrade.tsx` sells things nothing gates.** PNG export, AI drafting and the pipeline are advertised as Pro. No screen reads `plan`, no platform emits PNG, and `02-pro-gate.sql` is unrun.',
            ],
          },
          { kind: 'h', id: 'd20', text: 'D20 — Smaller things' },
          {
            kind: 'list',
            items: [
              '`CLAUDE.md` still lists image upload as not built; `media.ts` and `MediaPool.tsx` shipped long ago',
              '`paint.ts#layerPaint` is dead **and** disagrees with `LayerView` about whether a fill sits under a gradient',
              '`FAMILY_SCALE.mono` is unreachable — the mono branch substitutes `MONO_ADVANCE` first',
              '`useStudio.canUndo` reads a ref at render time, so it is never reactive; `canRedo` does not exist',
              '`undo`/`redo` mutate refs inside a `setDoc` updater, which StrictMode double-invokes',
              'The same 10-colour palette literal is written out three times',
              '`M = 96` in `compositions.ts`, `M = 88` in `presets.ts`',
              'Dead exports: `compositionLabel`, `slidesFromText`, `GRADIENT_STYLE_IDS`, `asChoice`, `isValidHex`, `NO_INSET`, `hasSafeZone`, `AuthState`, `setDisplayName`, `fetchBillingStatus`, `closeBrowser`, `boardCounts`, `outlierCount`, `DEMO_COUNT`',
              '`educational` slot 4 is labelled "Breakdown" with placeholder "Technique #1" while slots 5–6 are "Example" with "Technique #2/#3" — labels and placeholders disagree',
              'Seven components re-enable transitions that `index.css` and R4 forbid',
            ],
          },
        ],
      },
    ],
  },
];

/** Every section in reference order. */
export const sections: FlashCCSection[] = groups.flatMap((group) => group.sections);

export const groupOfSlug: Record<string, string> = Object.fromEntries(
  groups.flatMap((group) => group.sections.map((section) => [section.slug, group.label]))
);

export function pathForSection(section: FlashCCSection): string {
  return `${BASE_PATH}/${section.slug}`;
}

export function indexOfSlug(slug: string): number {
  return sections.findIndex((section) => section.slug === slug);
}
