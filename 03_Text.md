# FlashFX — 03 · Text
### Complete Reference · Alpha Release

---

## Table of Contents

1. [Placing Text](#1-placing-text)
2. [Text Box Modes](#2-text-box-modes)
3. [Character-Level Formatting](#3-character-level-formatting)
4. [Paragraph-Level Formatting](#4-paragraph-level-formatting)
5. [Typography Controls](#5-typography-controls)
6. [Text Fill & Material System](#6-text-fill--material-system)
7. [Text Stroke](#7-text-stroke)
8. [Text Shadow & Glow](#8-text-shadow--glow)
9. [Text Background & Highlight](#9-text-background--highlight)
10. [Text Transform Properties](#10-text-transform-properties)
11. [Text Animation Modes](#11-text-animation-modes)
12. [Stagger & Per-Unit Animation](#12-stagger--per-unit-animation)
13. [Text on a Path](#13-text-on-a-path)
14. [Converting Text to Outlines](#14-converting-text-to-outlines)

---

## 1. Placing Text

### 1.1 The Text Tool

Activate the Text tool with `T` or click the Text tool in the toolbar.

**Point Text:** Click once on the canvas to place a text element at a single point. The text box expands horizontally as you type. Point text never wraps automatically — it extends on one line unless you press `Enter` for a manual line break.

**Area Text:** Click and drag to define a rectangular text frame before typing. Text inside this frame wraps automatically when it reaches the right edge. The frame dimensions are adjustable.

### 1.2 Entering and Editing Text Content

Once the text tool is active and a text element is placed, the cursor appears and you can type immediately. The standard editing controls apply:

- Arrow keys move the cursor
- `Home` / `End` jump to the line start/end
- `Ctrl+Home` / `Ctrl+End` jump to the text start/end
- `Shift+Arrow` selects text
- `Ctrl+A` selects all text within the element
- `Ctrl+C` / `Ctrl+V` copies and pastes text

**Exiting text editing:** Press `Escape` or click outside the text element. The element returns to the selection state.

**Re-entering text editing:** Double-click the text element to re-enter edit mode.

---

## 2. Text Box Modes

### 2.1 Auto Width (Point Text)

The text box width expands and contracts as text is added or removed. No wrapping occurs unless `Enter` is pressed. This mode is appropriate for:

- Single-word or short-phrase labels
- Title text where line breaks are manually controlled
- Text elements that will be animated per-character or per-word

### 2.2 Auto Height (Fixed Width)

The width is fixed by the text box definition. The height expands automatically as content grows. Text wraps when it reaches the right edge. This mode is appropriate for:

- Body copy that must fit a column width
- Subtitle and caption text
- Multi-paragraph text blocks

The width is adjustable by dragging the right edge of the bounding box in selection mode.

### 2.3 Fixed Frame

Both width and height are fixed. If text overflows the defined frame, it is clipped. An overflow indicator (a small `+` symbol at the bottom-right of the frame) appears when the text content is larger than the frame. Text is not automatically scaled down — content that overflows is hidden.

### 2.4 Converting Between Modes

Right-click a text element and select "Text Box Type" to switch between modes at any time. Content is preserved.

---

## 3. Character-Level Formatting

All character-level formatting is accessible in the Character section of the Properties Panel while text is selected (in both selection mode and text-edit mode).

### 3.1 Font Family

The typeface applied to selected characters. FlashFX provides access to:

- **System fonts** — fonts installed on the local operating system and accessible to the browser
- **Google Fonts** — the full Google Fonts library, loaded on demand (requires internet connection on first use)
- **Uploaded fonts** — custom font files (OTF, TTF, WOFF, WOFF2) uploaded by the user to their account

**Font Search:** The font family dropdown includes a search field. Type any portion of a font name to filter results.

**Font Preview:** Each font in the dropdown previews with a short text sample in that typeface.

### 3.2 Font Weight

The weight variant of the selected font family. Available weights depend on the font. Common weights:

| Value | Name |
|---|---|
| 100 | Thin |
| 200 | ExtraLight |
| 300 | Light |
| 400 | Regular |
| 500 | Medium |
| 600 | SemiBold |
| 700 | Bold |
| 800 | ExtraBold |
| 900 | Black |

### 3.3 Font Style

Italic or Oblique, when available in the font family. Italic is a designed alternate style; Oblique is a mechanical slant applied to the regular style when a true italic is not available.

**Faux Italic:** When a true italic is not available, FlashFX can apply a synthetic oblique slant. This is a visual approximation and is generally less refined than a true italic. Indicated by an asterisk in the style selector.

### 3.4 Font Size

The size of the text in pixels. Range: 1px to 2000px. Fractional values are supported (e.g., 14.5px).

**Relative Sizing:** While multiple characters are selected with different sizes, changing the font size applies relative scaling: typing `+4` increases all selected characters by 4px regardless of their individual starting sizes.

### 3.5 Underline & Strikethrough

**Underline:** A line drawn beneath the text baseline.

- **Style:** Solid, Dashed, Dotted, Double
- **Color:** Independent of the text fill color
- **Thickness:** Weight of the underline in pixels
- **Offset:** Vertical distance from the baseline in pixels

**Strikethrough:** A line drawn through the middle of the text.

- **Style, Color, Thickness:** Same controls as Underline

### 3.6 Superscript & Subscript

**Superscript:** Reduces character size and raises it above the baseline. Used for footnote markers, exponents.

**Subscript:** Reduces character size and lowers it below the baseline. Used for chemical formulas.

Size reduction factor and vertical offset are configurable in Typography Settings.

### 3.7 All Caps & Small Caps

**All Caps:** Converts all selected characters to uppercase in the rendered output. The underlying text data is not modified.

**Small Caps:** Renders lowercase letters as uppercase letters at a reduced size (typically 70–80% of the regular cap height). When the font includes OpenType small caps glyphs, those are used; otherwise, FlashFX synthesizes them.

### 3.8 Character Spacing (Tracking)

Adjusts the uniform spacing between all characters in a selection. Measured in **em units** (1000 = 1em) or pixels, depending on the unit setting.

- Positive values spread characters apart
- Negative values bring characters closer together
- 0 = font's default spacing

### 3.9 Kerning

Adjusts the spacing between two specific adjacent characters. Distinct from tracking, which applies uniformly to all characters in a selection.

**Auto Kerning:** FlashFX applies the font's built-in kerning pairs automatically. Most professional fonts contain kerning tables that correct optically awkward pairings like "AV" or "To."

**Optical Kerning:** An algorithmic kerning mode that analyzes the actual shapes of adjacent characters and applies spacing corrections even when the font's kerning table does not include that pair.

**Manual Kerning:** Place the cursor between two characters and adjust the kerning value in the Properties Panel to apply a custom correction on top of auto or optical kerning.

### 3.10 Baseline Shift

Moves selected characters vertically relative to the text baseline without changing font size or line height. Positive values move characters up; negative values move them down.

Useful for:
- Custom superscript/subscript refinement
- Mixed-size type alignment
- Creative typographic treatments

### 3.11 Horizontal Scale & Vertical Scale

Stretches or compresses characters along either axis:

- **Horizontal Scale:** Widens (>100%) or narrows (<100%) the character horizontally
- **Vertical Scale:** Stretches (>100%) or squashes (<100%) the character vertically

These are non-typographic transforms applied after rendering the glyph. They do not change the font's optical proportions the way a condensed or extended font variant would.

---

## 4. Paragraph-Level Formatting

Paragraph properties apply to a full paragraph (a block of text separated by line breaks). They are configured in the Paragraph section of the Properties Panel.

### 4.1 Horizontal Alignment

| Alignment | Description |
|---|---|
| **Left** | Text aligns to the left edge of the text box |
| **Center** | Each line is centered within the text box width |
| **Right** | Text aligns to the right edge of the text box |
| **Justify** | Text is spaced to fill the full width of each line except the last |
| **Justify All** | Justification is applied even to the last line of the paragraph |

### 4.2 Vertical Alignment

For area text with a fixed frame:

| Alignment | Description |
|---|---|
| **Top** | Text starts at the top of the frame |
| **Middle** | Text is centered vertically within the frame |
| **Bottom** | Text is pushed to the bottom of the frame |

### 4.3 Line Spacing (Leading)

The vertical distance between lines, measured from baseline to baseline.

- **Auto:** Leading is set to a percentage of the font size (typically 120%). Adjusts automatically when font size changes.
- **Fixed:** A specific pixel value. Does not change when font size changes.

### 4.4 Paragraph Spacing

- **Space Before:** Extra vertical space added above the paragraph
- **Space After:** Extra vertical space added below the paragraph

Allows differentiation between line spacing within a paragraph and spacing between separate paragraphs.

### 4.5 Indentation

- **First Line Indent:** Indents only the first line of the paragraph
- **Left Indent:** Indents all lines from the left margin
- **Right Indent:** Indents all lines from the right margin

### 4.6 Tab Stops

Custom tab stop positions within a paragraph. Each tab stop has:

- **Position:** Distance from the left margin in pixels
- **Alignment:** Left, Center, Right, or Decimal (text aligns by its decimal point, useful for numeric columns)

---

## 5. Typography Controls

### 5.1 OpenType Features

For fonts that include OpenType features, FlashFX exposes them in the Typography section:

| Feature | Description |
|---|---|
| **Ligatures** | Combines specific letter pairs into single glyphs (fi, fl, ff, ffi, ffl) |
| **Contextual Alternates** | Substitutes alternate glyphs based on surrounding characters |
| **Stylistic Alternates** | Switches to an alternative glyph design for specific characters |
| **Swash** | Decorative flourishes on selected characters (typically for display fonts) |
| **Ordinals** | Automatically raises and sizes ordinal suffixes (1st, 2nd, 3rd) |
| **Fractions** | Converts manually typed fractions (1/2, 3/4) to designed fraction glyphs |
| **Tabular Figures** | Forces all digits to use equal width (important for aligning numbers in columns) |
| **Oldstyle Figures** | Uses figures that descend below the baseline (0–9 with varying heights), for use in running text |
| **Lining Figures** | Uses figures that sit on the baseline at cap height |
| **Proportional Figures** | Figures with widths based on their natural shape (default in most body text fonts) |

### 5.2 Text Rendering

**Antialiasing Mode:**
- **Default** — browser-managed antialiasing
- **Crisp** — optimized for screen legibility at small sizes; reduces blurring at pixel boundaries
- **Smooth** — maximum smoothness, best for large display type
- **Geometric Precision** — disables browser kerning hinting for consistent cross-browser rendering

**Subpixel Rendering:** On high-DPI displays, enables subpixel color channel antialiasing for sharper text at small sizes (browser-dependent support).

---

## 6. Text Fill & Material System

Text in FlashFX uses the same material stack as vector shapes. Every typographic fill feature available for shapes is also available for text.

### 6.1 Solid Color Fill

The most common text fill. Set via the color picker in the Fill section.

### 6.2 Gradient Text

A gradient fill mapped across the text string.

**Gradient Mapping Mode:**
- **Per Character** — the gradient is applied independently to each character. Each character shows the full gradient range.
- **Per Word** — the gradient is applied independently to each word.
- **Across Text** — the gradient spans the full width or height of the entire text element. Individual characters show only the portion of the gradient at their position.

**Across Text** mode is the most visually impactful for display text — long gradients sweep across headings smoothly, with each character showing a slightly different point in the gradient.

### 6.3 Texture and Pattern Fills

All texture and pattern fill types available for shapes are equally available for text fills. A noise texture applied as a text fill creates a grungy, printed-on appearance. A halftone pattern fill creates a graphic arts dot-matrix effect.

### 6.4 Multi-Layer Text Fills

The full material stack is supported for text. Multiple fill layers can be combined — for example:

1. A solid white fill as the base layer
2. A gradient overlay layer in Screen blend mode for a shimmering color effect
3. A noise texture in Multiply blend mode for a grungy print texture

---

## 7. Text Stroke

Text stroke in FlashFX works identically to shape stroke, with one important additional consideration: large strokes on small text can quickly become illegible. Test stroke readability at the final export resolution.

**Stroke Settings (text-specific behavior):**

- Stroke on text is always rendered **outside** the character shape by default, preventing the stroke from eating into the fill. This can be changed to Inside or Center in the stroke alignment settings.
- Heavy stroke weights on thin fonts produce a "fat face" typography effect. Use intentionally and test at export size.
- Stroke color, gradient stroke, and dashed stroke are all available on text.

**Multiple Strokes:** Like shapes, text can have multiple stroke layers applied. Each is independent. A common technique is applying two strokes — a thin bright inner stroke and a thick dark outer stroke — to achieve a hand-lettered outlined effect.

---

## 8. Text Shadow & Glow

Text shadow and glow work identically to shape shadow and glow (see Document 02, Section 9).

**Text-specific considerations:**

- Drop shadows on small text at large blur radii can reduce legibility — keep blur under 50% of the font size for readable text
- Inner shadows on display typography create an engraved or debossed effect
- Outer glow at low opacity is commonly used for subtle text lift from the background — a glow matching the background color creates a text halo that optically separates text from complex backgrounds
- Multiple shadows are supported; a common technique is combining a tight dark drop shadow with a larger diffuse colored glow to produce neon or luminous text effects

---

## 9. Text Background & Highlight

A text background applies a filled rectangle behind the text content.

### 9.1 Per-Character Background

When the animation granularity is set to Character or Word mode, backgrounds can be applied per unit:

- Each character or word can have its own background rectangle
- The background rectangle can have padding (horizontal and vertical expansion beyond the character bounds)
- Background corner radius can be set to round the per-character backgrounds
- Background color, opacity, and blend mode are configurable

This feature enables **highlight text effects** — colored boxes behind individual words or characters — which are common in social media caption animations and subtitle styling.

### 9.2 Full Text Block Background

An alternative mode applies a single background rectangle behind the entire text block (the combined bounding box of all text). Configured via the Text Background toggle in the Properties Panel.

---

## 10. Text Transform Properties

Text elements participate fully in the transform system (position, rotation, scale, skew, opacity, anchor point — all as described in Document 02, Section 3).

Additionally, text has several transform properties that are exclusive to it:

### 10.1 Character Rotation

In Character or Word animation mode, individual characters can have independent rotation values applied. This produces rotated letter effects without converting to outlines.

### 10.2 Character Position Offset

In Character or Word mode, each character unit can have an X and Y position offset relative to its natural position in the text flow. This enables scatter, fan, and 3D-arc text arrangements.

### 10.3 Perspective Warp on Text

A perspective warp envelope can be applied to the entire text element, distorting the text as if it is receding into the distance or viewed at an angle. Four corner handles control the warp. Perspective warp is animatable.

### 10.4 Text Path Alignment

When text is placed on a path (see Section 13), the following alignment properties become available:

- **Path Offset** — how far along the path the text starts (0 = path start)
- **Character Spacing on Path** — adjusts letter spacing specifically for curved path placement
- **Flip on Path** — mirrors the text to the opposite side of the path

---

## 11. Text Animation Modes

Text animation modes determine the granularity at which the animation system interacts with text content. This is one of FlashFX's most powerful and distinctive features.

### 11.1 Block Mode

The entire text element is treated as a single unit for animation purposes.

- One set of transform and property tracks in the timeline
- Position, rotation, scale, opacity, and all fill properties can be keyframed
- Any animation applied affects the entire text block simultaneously

**Use for:** Most basic text animations — fades, slides, scale entries and exits.

### 11.2 Line Mode

The text is divided into individual lines (determined by line breaks — both hard returns and soft wraps). Each line is an independently animatable unit.

- The timeline shows a track for each line
- Properties animatable per line: position, rotation, scale, opacity, fill color, blur
- Lines animate independently but remain part of the text element (font and paragraph settings still apply globally)

**Use for:** Staggered line reveals, one-line-at-a-time subtitle animations, cascading title entries.

### 11.3 Word Mode

The text is divided into individual words. Each word is independently animatable.

- The timeline shows a track per word (or the stagger system controls timing automatically)
- All per-character properties are available per word
- Word boundaries are defined by spaces; punctuation is attached to the preceding word

**Use for:** Typewriter-style effects, highlighted word animations, flowing conversational caption reveals.

### 11.4 Character Mode

The text is divided into individual glyphs. Each character is independently animatable.

- The timeline can show a track per character (or the stagger system automates timing)
- All transform properties (position, rotation, scale, skew, opacity, color, blur) are available per character
- This mode enables scramble/shuffle text effects, wave-like motion, 3D flip-in effects, and other expressive typographic animations

**Performance note:** Character mode on long strings generates many active animation tracks. See Best Practices (Document 00) for Character mode performance guidance.

### 11.5 Switching Between Modes

Changing the animation mode on a text element that already has animation data will prompt a conversion dialog:

- **Convert:** Existing animation data is redistributed to the new granularity as best as possible (block animation becomes applied to all units)
- **Reset:** Animation data is cleared and the text element starts fresh in the new mode
- **Cancel:** No change is made

---

## 12. Stagger & Per-Unit Animation

### 12.1 Stagger System

Rather than manually keyframing each character, word, or line individually, the stagger system applies a time offset to each successive unit, creating a sequential animation cascade automatically.

**Stagger Settings:**

- **Delay per Unit** — time in milliseconds between the start of each successive unit's animation. Default: 50ms.
- **Stagger Direction:**
  - **Forward** — units animate from left to right (first character first)
  - **Backward** — units animate from right to left (last character first)
  - **From Center** — units animate outward from the center simultaneously in both directions
  - **From Edges** — units animate inward from both ends toward the center
  - **Random** — each unit starts at a random delay within a configurable range
- **Easing Override:** An easing curve applied to the stagger timing envelope itself (controls the acceleration of the stagger sequence), separate from the easing applied to each unit's individual animation

### 12.2 Per-Unit Properties

When stagger is active, the following properties can be defined as the **animated state** that each unit transitions from:

| Property | Description |
|---|---|
| **Opacity** | Fade in from 0% opacity |
| **Position X / Y** | Slide in from an offset position |
| **Scale X / Y** | Scale in from a smaller or larger size |
| **Rotation** | Rotate in from a defined angle |
| **Blur** | Defocus in from a blurred state |
| **Color** | Transition from an alternate color to the primary color |
| **Skew X / Y** | Straighten in from a skewed state |
| **Baseline Shift** | Rise up from below the baseline |

Multiple properties can be combined. Example: entering from opacity 0, position Y +30px, blur radius 8px simultaneously creates a "lift in from below while fading and sharpening" effect.

### 12.3 Stagger With Manual Overrides

The stagger system provides automated timing, but individual units can receive manual overrides on top of the stagger:

- Select a specific unit's keyframe in the timeline
- Adjust the keyframe position to deviate from the stagger timing
- Add additional keyframes for properties not covered by the stagger definition

---

## 13. Text on a Path

Text can be placed along the edge of any vector path, following the curve of the path.

### 13.1 Creating Text on a Path

1. Draw any vector path (open or closed)
2. Select both the text element and the path
3. `Text → Place on Path`

The text flows along the path starting from the path's first anchor point.

**Alternatively:** With the Text tool active, hover over an existing path until the cursor shows a path indicator, then click to begin typing directly on the path.

### 13.2 Path Text Controls

**Path Offset:** Moves the text's start point along the path. Dragging the offset control slides the text forward or backward along the path. Animating the offset creates a text-crawling-along-a-path effect.

**Side of Path:** Text can be placed on the top (outside) or bottom (inside) of the path curve. For a circular path:
- Top side = text reads along the top arc (like the top of a badge or seal)
- Bottom side = text reads along the bottom arc (like the bottom of a badge, inverted)

**Flip:** Mirrors the text to the opposite side of the path and reverses the reading direction.

**Path Spacing:** Adjusts the letter spacing specifically for path-bound text. On tight curves, increasing path spacing prevents characters from overlapping.

**Path Alignment:** Controls the character baseline relationship to the path:
- **Baseline on path** — the text baseline sits directly on the path
- **Centered on path** — characters are centered on the path (baseline sits slightly above/below depending on character height)
- **Ascent on path** — the top of characters sits on the path

### 13.3 Path Text Animation

All text animation modes (Block, Line, Word, Character) work for path text. In Character mode, individual characters slide along the path as their position offset is animated — each character orbits along the curve rather than moving in a straight line.

### 13.4 Detaching from Path

`Text → Detach from Path` — converts path text back to standard text at its current visual position. The path is no longer linked to the text.

---

## 14. Converting Text to Outlines

Converting text to outlines transforms the text element into vector shapes. The glyphs become editable paths, losing all text-specific properties (font, kerning, text animation modes, etc.) in exchange for full vector editability.

### 14.1 When to Convert

**Convert when:**
- Exporting a .flashfx file for use on another device that may not have the same fonts installed
- Editing individual letterform shapes (cutting notches, extending serifs, creating custom lettermarks)
- Applying boolean operations to text shapes
- Applying per-vertex animation to glyph paths

**Do not convert when:**
- The text content may need to be edited again
- Text animation modes (character, word) are being used (they do not work on outline shapes)
- The font renders correctly on all target systems

### 14.2 How to Convert

Select the text element, then:
- `Text → Create Outlines` (or `Ctrl+Shift+O`)

The text element is replaced by a group of vector paths, one per character (or one compound path per word, depending on the setting). Each path is fully editable in Vertex Edit mode.

### 14.3 Preserving Original Text

Before converting, duplicate the text element (`Ctrl+D`) and hide the duplicate. This preserves the editable original as a hidden backup while the outlined version is used for design work.

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
