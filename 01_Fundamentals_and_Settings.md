# FlashFX — 01 · Fundamentals & Settings
### Complete Reference · Alpha Release

---

## Table of Contents

1. [What is FlashFX](#1-what-is-flashfx)
2. [Interface Overview](#2-interface-overview)
3. [Workspace Modes](#3-workspace-modes)
4. [Canvas & Project Setup](#4-canvas--project-setup)
5. [Application Settings](#5-application-settings)
6. [Grid, Rulers & Guides](#6-grid-rulers--guides)
7. [Snapping System](#7-snapping-system)
8. [Zoom & Navigation](#8-zoom--navigation)
9. [Color System & Color Picker](#9-color-system--color-picker)
10. [Panels & Layout Customization](#10-panels--layout-customization)
11. [Accounts, Storage & Sync](#11-accounts-storage--sync)
12. [Keyboard Shortcuts — Master Reference](#12-keyboard-shortcuts--master-reference)
13. [Accessibility Settings](#13-accessibility-settings)

---

## 1. What is FlashFX

FlashFX is a professional, web-native motion graphics and animation design platform built to run entirely inside a modern web browser. It is designed to serve the full motion design workflow — from initial vector composition through animation authoring to publication-ready export — without any installation, plugin, or native application dependency.

The platform is structured around three disciplines:

- **Vector Design** — a complete drawing, shaping, and compositing environment with a material system capable of producing complex layered surfaces.
- **Animation** — a keyframe-based animation engine with per-property tracks, custom easing curves, and a multi-sequence compositor for long-form productions.
- **Export** — a deterministic, frame-accurate renderer that outputs to MP4, WebM, PNG Sequence, GIF, and static PNG directly from the browser.

FlashFX is not a video editor, a photo editor, or a 3D application. It operates in the 2D motion graphics space with optional perspective transform support for pseudo-3D effects. Its closest conceptual relatives are Adobe After Effects and Motion, though it is purpose-built for the web and for accessibility across skill levels.

### Who FlashFX is For

- **Motion designers** creating branded animations, title sequences, and social media content
- **Content creators** producing Reels, Shorts, Stories, and looping GIFs
- **UI/UX designers** prototyping animated interface concepts
- **Developers** visualizing motion specifications before implementation
- **Educators and students** learning motion design principles without software cost

---

## 2. Interface Overview

When FlashFX opens, the interface is organized into five primary regions. Understanding the role of each region is the foundation for working efficiently.

### 2.1 The Menu Bar

The topmost strip of the application. Contains:

- **FlashFX logo / Home** — returns to the project dashboard
- **File menu** — new project, open, save, export, import, and project settings
- **Edit menu** — undo, redo, cut, copy, paste, duplicate, select all, preferences
- **View menu** — zoom controls, grid, rulers, guides, panel visibility
- **Mode switcher** — toggles between Design, Animate, and Advanced workspace modes
- **Account indicator** — shows current account status (Guest or authenticated), storage usage, and sync state
- **Help** — documentation, keyboard shortcut reference, release notes, support

### 2.2 The Toolbar

The vertical strip on the left edge of the canvas. Contains all drawing and selection tools:

| Tool | Shortcut | Function |
|---|---|---|
| Selection (Pointer) | `V` | Select, move, and transform elements |
| Rectangle | `R` | Draw rectangles and squares |
| Circle / Ellipse | `C` | Draw circles and ellipses |
| Star & Polygon | `P` | Draw multi-point stars and polygons |
| Line | `L` | Draw straight line segments |
| Pen (Path) | `B` | Draw custom bezier paths |
| Text | `T` | Place and edit text objects |
| Image Import | `I` | Import raster images onto the canvas |
| Hand (Pan) | `H` | Pan the canvas without affecting selection |
| Zoom | `Z` | Click to zoom in; Alt+click to zoom out |

The toolbar also contains quick-access buttons at the bottom:
- **Grid toggle** — shows or hides the canvas grid
- **Snap toggle** — enables or disables the snapping system
- **Ruler toggle** — shows or hides horizontal and vertical rulers

### 2.3 The Properties Panel

The right-side panel. Context-sensitive — its contents change completely based on what is currently selected:

- **Nothing selected:** Shows canvas/artboard settings (dimensions, background, frame rate)
- **Shape selected:** Shows transform properties, material system, layer blend settings
- **Text selected:** Shows typography controls, text material, animation mode settings
- **Image selected:** Shows image properties, filter stack, blend mode
- **Group selected:** Shows group-level transform and composite settings
- **Keyframe selected:** Shows easing controls and interpolation settings

The Properties Panel is always visible in Design and Advanced modes. In Animate mode it collapses to a narrower form to give the timeline more vertical space.

### 2.4 The Canvas

The central viewport. The canvas represents the output artboard — everything within its bounds is included in export; everything outside is clipped. The canvas itself has a configurable background color or transparency.

The area outside the canvas boundary (the **pasteboard**) is a dark neutral surface. Elements can be placed on the pasteboard to keep them out of the export while remaining part of the project — useful for storing unused assets or off-screen animation start positions.

### 2.5 The Layer Panel

The panel on the left side of the interface (below the toolbar in Design mode, a collapsible drawer in Animate mode). Lists every element in the current sequence in Z-order, with:

- Element name (double-click to rename)
- Visibility toggle (eye icon)
- Lock toggle (padlock icon)
- Solo toggle (circle icon) — hides all other layers
- Element type icon (shape, text, image, group)
- Expand arrow for groups

### 2.6 The Timeline

Visible in Animate and Advanced modes. Occupies the lower portion of the interface. Contains:

- **Playhead** — the current time position, draggable
- **Timecode display** — shows current time in `HH:MM:SS:FF` format
- **Frame counter** — shows current frame number
- **Track list** — one row per animated element, expandable to show individual property tracks
- **Keyframe area** — the horizontal space where keyframe diamonds appear
- **Transport controls** — play, pause, stop, step back, step forward, loop toggle
- **Zoom slider** — adjusts visible time range

---

## 3. Workspace Modes

FlashFX uses a three-mode workspace system. Modes do not change the underlying project state — they reorganize the interface layout to prioritize different tasks.

### 3.1 Design Mode

The default mode when opening a project. Optimized for composition — building the visual structure of scenes before animation begins.

**What is visible:**
- Full canvas viewport (maximum screen space)
- Toolbar (all drawing tools)
- Full Properties Panel
- Layer Panel
- Minimal timeline strip (shows duration but not keyframe tracks)

**What is hidden:**
- Full timeline tracks
- Easing graph editor
- Sequence compositor panel

**Best used for:**
- Drawing shapes, placing text, importing images
- Arranging the layer stack and building groups
- Configuring materials, colors, and fills
- Setting up static compositions before animating

### 3.2 Animate Mode

The mode for building and refining animation. The timeline expands to take the lower half of the screen.

**What is visible:**
- Canvas viewport (reduced height to accommodate timeline)
- Full timeline with property tracks
- Easing graph editor panel
- Compact Properties Panel (transform and keyframe-relevant properties only)
- Layer Panel integrated into the timeline track list

**What is hidden:**
- Some material system controls (accessible via a panel toggle)
- Full typography controls

**Best used for:**
- Setting keyframes and adjusting timing
- Working with the easing graph
- Previewing animation playback
- Scrubbing through sequences

### 3.3 Advanced Mode

A power-user layout that keeps all panels simultaneously accessible. Screen real estate is sacrificed for functionality.

**What is visible:**
- All panels simultaneously
- Full Properties Panel alongside the full Timeline
- Layer Panel always open
- Easing graph always accessible

**Best used for:**
- Complex projects requiring rapid switching between design and animation
- Detailed keyframe work that also requires material adjustments
- Projects where the animator also controls the design

---

## 4. Canvas & Project Setup

Every FlashFX project begins with a canvas configuration. These settings define the output dimensions, frame rate, and background appearance.

### 4.1 Canvas Dimensions

Canvas dimensions are set in pixels. FlashFX does not use physical units (mm, inches) — all measurements are pixel-based and resolution-independent.

**Common presets:**

| Name | Dimensions | Use Case |
|---|---|---|
| HD | 1280 × 720 | Web video, YouTube |
| Full HD | 1920 × 1080 | Broadcast, standard social video |
| 4K UHD | 3840 × 2160 | High-resolution output, future-proofing |
| Instagram Square | 1080 × 1080 | Instagram feed posts |
| Instagram Portrait | 1080 × 1350 | Instagram portrait feed |
| Reels / Shorts / Stories | 1080 × 1920 | Vertical video |
| Twitter/X Banner | 1500 × 500 | Profile banner |
| Custom | Any value | Set manually |

**Width** and **Height** are independently configurable. There is no minimum or maximum canvas dimension enforced by the application, though performance degrades significantly above 4K on browser-based rendering.

### 4.2 Pixel Aspect Ratio

FlashFX defaults to **square pixels (1:1 PAR)**, which is correct for all modern digital delivery. Non-square pixel ratios (used in legacy broadcast formats) are not supported.

### 4.3 Frame Rate

The project frame rate determines how many frames are produced per second of animation. It affects the timeline's frame grid, scrubbing resolution, and export output.

| Frame Rate | Use Case |
|---|---|
| 24 fps | Cinematic, film-style motion |
| 25 fps | PAL broadcast standard (European TV) |
| 30 fps | NTSC broadcast standard, standard social media |
| 60 fps | High-motion content, UI demos, smooth loops |

Frame rate can be changed after project creation. Changing frame rate **does not stretch or retime existing keyframes** — keyframes remain at the same frame numbers, but the wall-clock time they represent changes. Always set frame rate before beginning animation work.

### 4.4 Background

The canvas background can be configured as:

- **Solid color** — set via the color picker; supports any RGB or HSL color
- **Transparent** — exports with an alpha channel (PNG, WebM with alpha, single-frame PNG)
- **Gradient** — applies a linear or radial gradient directly to the canvas background layer

The background is not a selectable element — it cannot be animated directly. To animate a background, place a rectangle the size of the canvas on the bottom-most layer and animate its material properties.

### 4.5 Project Duration

Total project duration is set in seconds or in frames (based on the current frame rate). Duration determines:

- The length of the timeline scrub range
- The default export range
- The total length of the final rendered output

Duration can be extended at any time. Shortening duration does not delete keyframes beyond the new end point — those keyframes are preserved but will not be included in export unless the duration is re-extended.

### 4.6 Project Metadata

Each project stores:

- **Project name** — set at creation, editable at any time
- **Description** — optional free-text field
- **Tags** — optional organizational labels (used in the project dashboard for filtering)
- **Created date** — automatic
- **Last modified date** — automatic, updated on every save

---

## 5. Application Settings

Application settings are accessed via **Edit → Preferences** (or the keyboard shortcut `Ctrl+,`). Settings are stored per-account in authenticated mode, or in browser local storage in Guest mode.

### 5.1 General Settings

**Language**
The UI language. Currently English only; additional languages are planned for future releases.

**Auto-save Interval**
How frequently the application syncs the current project state to the cloud. Options: 30 seconds, 1 minute (default), 2 minutes, 5 minutes, Manual only.

**Startup Behavior**
- Open last project
- Open project dashboard
- Open new project dialog

**Undo History Depth**
The number of undoable steps maintained in the session history. Default: unlimited. Setting a numeric cap reduces memory usage on very long sessions with complex projects.

**UI Scale**
Adjusts the density of the interface. Options: Compact (0.85×), Default (1.0×), Comfortable (1.15×), Large (1.3×). Useful for high-DPI displays where the browser's default scaling produces an interface that is too large or too small.

### 5.2 Canvas Settings

**Default Canvas Color**
The default background color applied to new projects. Overrides the factory default of white.

**Checkerboard for Transparency**
When the canvas background is set to Transparent, shows a checkerboard pattern in the canvas area to indicate transparency. Does not affect export.

**Canvas Shadow**
Toggles the drop shadow displayed around the canvas boundary in the viewport. Purely cosmetic; has no effect on export.

**Pasteboard Color**
The color of the area surrounding the canvas in the viewport. Defaults to a dark neutral. Change to a lighter color if working with dark-dominant compositions where the canvas boundary is difficult to perceive.

**Pixel Grid**
When zoomed in beyond 400%, displays a 1px grid aligned to individual pixels. Useful for pixel-precise work on small or icon-scale compositions.

### 5.3 Animation Settings

**Default Easing**
The easing preset applied to new keyframes by default. Factory default: Ease In-Out. Change to Linear if working in a context where uniform speed is the baseline and easing is applied selectively.

**Keyframe Snapping**
When enabled, dragging a keyframe on the timeline snaps it to the nearest frame boundary. When disabled, keyframes can be positioned at sub-frame precision (useful for advanced timing control, but generally unnecessary).

**Auto-keyframe Mode**
- **On by default** — keyframe recording is active whenever Animate mode is open
- **Manual** — recording must be explicitly toggled on before property changes create keyframes

**Preview Quality**
Controls the resolution at which the live canvas preview renders during playback. Options: Full, Half, Quarter. Reducing preview quality significantly improves playback frame rate on complex compositions without affecting final export quality.

**Scrub Audio**
When audio track support is available, this setting controls whether audio is audible during timeline scrubbing. Default: Off.

### 5.4 Export Settings

**Default Export Directory**
Where exported files are saved in the browser's download system. This is a browser-level setting and is not controlled by FlashFX directly.

**Default Export Format**
The format pre-selected in the export dialog when it opens. Change to MP4 if MP4 is the most common delivery format in a given workflow.

**Include Metadata in Export**
When enabled, embeds project name, creator name, and creation date into exported video files as metadata. Default: On.

**Confirm Before Batch Export**
Shows a summary of all queued export jobs before beginning the batch render. Default: On. Disable to skip the confirmation dialog and begin rendering immediately.

### 5.5 Input Settings

**Mouse Wheel Behavior on Canvas**
- **Zoom** (default) — scroll to zoom in/out
- **Scroll** — scroll to pan the canvas vertically; Shift+scroll to pan horizontally

**Trackpad Gesture Support**
When enabled, two-finger pinch gestures on a trackpad zoom the canvas, and two-finger pan gestures move the viewport. Default: On.

**Pen/Stylus Pressure Sensitivity**
When a drawing tablet is connected and the browser reports pressure data, enables pressure-sensitive stroke width for the Pen tool. Default: Off.

---

## 6. Grid, Rulers & Guides

### 6.1 Grid

The grid is an optional visual overlay on the canvas. It does not appear in exported output.

**Enabling the Grid:** `View → Grid` or `Ctrl+;`

**Grid Settings** (accessed via `View → Grid Settings`):

- **Grid Size** — the spacing between grid lines in pixels. Default: 10px. Common values: 5px, 8px, 10px, 16px, 20px.
- **Grid Color** — the color of grid lines. Default: a subtle mid-gray. Adjustable for contrast against the canvas background.
- **Grid Opacity** — how prominently the grid lines are rendered. Range: 10%–100%. Default: 30%.
- **Grid Type:**
  - **Lines** — horizontal and vertical lines across the full canvas
  - **Dots** — dots at each grid intersection (less visually busy than lines)
  - **Columns** — vertical columns only, useful for multi-column layout work

**Subdivision:** A secondary grid interval that shows finer divisions within the main grid. Example: main grid at 100px with subdivision at 10px shows every 10px as a lighter line within the 100px major grid.

### 6.2 Rulers

Rulers appear along the top and left edges of the canvas viewport. They display coordinates in pixels, anchored to the canvas origin (top-left corner = 0,0 by default).

**Enabling Rulers:** `View → Rulers` or `Ctrl+R`

**Ruler Origin:** The ruler zero point can be repositioned by clicking and dragging from the intersection point of the two rulers (top-left corner of the ruler area). Double-click the origin to reset it to the canvas top-left.

**Reading Rulers:**
- The **horizontal ruler** measures X-axis position
- The **vertical ruler** measures Y-axis position
- A **position indicator line** follows the cursor position on both rulers simultaneously

### 6.3 Guides

Guides are user-placed reference lines that snap elements during placement. Like the grid, they are non-printing — they do not appear in export.

**Creating Guides:**
- Click and drag from the horizontal ruler to create a horizontal guide
- Click and drag from the vertical ruler to create a vertical guide
- `View → New Guide` to create a guide at a precise numeric position

**Moving Guides:** Click and drag an existing guide to reposition it. Guides snap to the grid if grid snapping is enabled.

**Locking Guides:** `View → Lock Guides` — prevents accidental repositioning when working near guides.

**Hiding Guides:** `View → Hide Guides` (`Ctrl+Shift+;`) — makes guides temporarily invisible without deleting them.

**Deleting Guides:**
- Drag a guide off the canvas edge to delete it
- `View → Clear All Guides` to remove all guides at once
- Click a guide and press `Delete`

**Smart Guides:** Dynamically generated alignment indicators that appear during element movement. They show relationships between the element being moved and the edges and centers of other elements on the canvas. Smart guides are a type of real-time snapping feedback, not persistent guide lines.

---

## 7. Snapping System

Snapping assists with precise element placement by magnetically aligning element edges and centers to reference points.

### 7.1 Snapping Controls

**Master Snap Toggle:** `Ctrl+'` — enables or disables all snapping globally.

Individual snap types can be enabled or disabled independently via `View → Snap Settings`:

| Snap Type | What It Does |
|---|---|
| **Snap to Grid** | Aligns element edges/centers to the grid |
| **Snap to Canvas Edge** | Aligns to the canvas boundary |
| **Snap to Canvas Center** | Aligns to the horizontal/vertical center of the canvas |
| **Snap to Element Edges** | Aligns to the edges of other elements |
| **Snap to Element Centers** | Aligns to the horizontal/vertical center of other elements |
| **Snap to Guide Lines** | Aligns to manually placed guide lines |
| **Snap to Pixel** | Rounds element position to the nearest whole pixel |

### 7.2 Snap Strength

**Snap Threshold** — the distance in screen pixels at which the snap magnet activates. Range: 2px–20px. Default: 6px. A larger threshold creates a more aggressive snap effect; a smaller threshold requires more precise positioning before snapping engages.

### 7.3 Snapping During Transform Operations

Snapping applies not only to element movement but also to:

- **Resize operations** — edges snap to reference points while dragging resize handles
- **Rotation** — rotation snaps to 45° increments when Shift is held; snaps to 15° increments when within 3° of any 15° boundary
- **Pen tool path points** — bezier anchor points snap to the grid and to other anchor points

---

## 8. Zoom & Navigation

### 8.1 Zoom Controls

| Action | Shortcut |
|---|---|
| Zoom In | `Ctrl+=` or `Ctrl+Scroll Up` |
| Zoom Out | `Ctrl+-` or `Ctrl+Scroll Down` |
| Fit Canvas to Window | `Ctrl+0` |
| Zoom to 100% (Actual Size) | `Ctrl+1` |
| Zoom to 200% | `Ctrl+2` |
| Zoom to Selection | `Ctrl+Shift+F` |

**Zoom Range:** 5% to 3200%.

**Zoom Anchor:** Zoom in/out is anchored to the current cursor position when using scroll-to-zoom. The Ctrl+=/- shortcuts zoom to the canvas center.

### 8.2 Canvas Panning

| Action | Method |
|---|---|
| Pan with Hand tool | Activate Hand tool (`H`), then click and drag |
| Temporary Hand tool | Hold `Space` while any other tool is active |
| Pan with keyboard | Hold `Ctrl` and drag in the canvas area |
| Pan with scroll | When Mouse Wheel is set to Scroll in preferences |

### 8.3 Fit and Frame Controls

- **Fit Canvas to Window (`Ctrl+0`)** — adjusts zoom so the entire canvas is visible within the viewport, centered.
- **Fit to Selection (`Ctrl+Shift+F`)** — zooms and centers the viewport on the currently selected element(s).
- **Zoom to Layer** — right-click any layer in the Layer Panel and select "Zoom to Layer" to frame that element in the viewport.

---

## 9. Color System & Color Picker

FlashFX uses a unified color system across all contexts — shape fills, strokes, text, shadows, backgrounds, and guides all use the same color picker interface.

### 9.1 Color Models

The color picker supports four color input models, switchable via tabs within the picker:

**RGB (Red, Green, Blue)**
Three sliders (0–255) and a hex input field. The standard model for screen-destined content.

**HSL (Hue, Saturation, Lightness)**
A hue wheel with saturation/lightness mapped on a 2D gradient panel. Intuitive for making color relationships and adjustments.

**HSB (Hue, Saturation, Brightness)**
Similar to HSL but uses Brightness rather than Lightness. More commonly used in design applications; provides a different feel for color selection.

**Hex**
Six-character hexadecimal input. Supports both 6-digit (`#FF6B2B`) and 8-digit alpha-inclusive (`#FF6B2BFF`) hex values.

### 9.2 Alpha / Opacity

Every color in FlashFX has an independent alpha channel, settable via:
- An **opacity slider** directly below the color model inputs (range: 0%–100%)
- The **A channel** (0–255) in the hex or RGBA display

Note the distinction between **fill layer opacity** and **element opacity**:
- Fill layer opacity affects only that specific fill layer in the material stack
- Element opacity affects the entire element including all its fill layers, stroke, and shadow as a composited unit

### 9.3 Color Swatches

The lower portion of the color picker contains a swatch panel with three sections:

- **Recent Colors** — the last 16 colors used in the current session
- **Project Palette** — colors saved to the current project's local palette
- **Global Palette** — account-level saved colors, persistent across projects

**Saving to Project Palette:** Click the `+` button in the Project Palette section while a color is active in the picker.

**Saving to Global Palette:** Shift+click the `+` button, or right-click a swatch and select "Move to Global Palette."

### 9.4 Color Sampling (Eyedropper)

The eyedropper tool samples color from anywhere on the canvas, including from images, gradients, and composited layers.

- **Activate:** Click the eyedropper icon in the color picker, or press `Alt` while the picker is open
- **Sample area:** Default: 1×1 pixel (exact sample). Can be changed to 3×3, 5×5, or 11×11 average sampling via the eyedropper settings
- **Scope:** Samples from the rendered canvas including all visible layers — not from the raw pixel values of individual layers

---

## 10. Panels & Layout Customization

### 10.1 Panel Visibility

Individual panels can be shown or hidden via the **View menu** or by right-clicking the panel header. Hidden panels retain their state and content — hiding a panel does not delete its data.

**Hideable panels:**
- Layer Panel
- Properties Panel
- Timeline (in Design mode)
- Easing Graph
- Sequence Compositor
- Asset Library

### 10.2 Panel Docking

Panels can be undocked from their default position and moved to alternate positions:

- **Left dock** — Layer Panel (default), or any panel
- **Right dock** — Properties Panel (default), or any panel
- **Bottom dock** — Timeline (default), Sequence Compositor
- **Floating** — undocked from all dock positions; appears as a floating overlay window

To undock: click and drag the panel header away from the dock. To re-dock: drag the panel header over a dock zone until the dock indicator appears, then release.

### 10.3 Panel Resizing

All docked panels are resizable by dragging the divider between the panel and the canvas area.

- The **horizontal divider** between the canvas and the timeline is resizable
- The **vertical dividers** on left and right are resizable
- Double-clicking a divider resets it to the default panel width

---

## 11. Accounts, Storage & Sync

### 11.1 Guest Mode

Guest mode allows full use of FlashFX without creating an account.

- Projects are saved to **browser local storage**
- Storage is limited by the browser's local storage quota (typically 5–50 MB depending on the browser and device)
- Projects are **not synced** to other devices
- If browser data is cleared (cache wipe, privacy mode session end, browser reinstall), projects are permanently lost
- Guest mode projects can be **exported as .flashfx files** at any time to create portable backups

### 11.2 Authenticated Mode

Creating a free account enables cloud-based project management.

- Projects are stored in a **cloud database** with automatic sync
- Storage quota: **50 MB on the free tier** (additional storage available on paid plans)
- Projects are accessible from **any device and browser** — simply log in
- Account data is protected by **Row Level Security** — only the account that created a project can access it
- Authentication uses **email and password** with optional two-factor authentication

### 11.3 Sync Behavior

- **Auto-sync** runs at the interval configured in Application Settings (default: 1 minute)
- A **sync indicator** in the menu bar shows the current state: Saved, Saving..., Unsaved Changes, Sync Error
- Manual sync: `File → Save` or `Ctrl+S` triggers an immediate sync
- If the browser goes offline, changes are queued locally and sync automatically when connectivity is restored

### 11.4 Storage Management

**Storage Usage Display:** The account indicator in the menu bar shows current cloud storage usage as a percentage and in absolute MB.

**Project Size Factors:**
- Embedded images are the primary driver of .flashfx project file size
- Complex animations with hundreds of keyframes add negligible file size
- Text content and shape geometry are stored as vector data and are extremely compact

**Deleting Projects:**
- Projects can be deleted from the project dashboard
- Deletion is **permanent and immediate** — there is no trash or recovery mechanism for cloud-deleted projects
- Export a .flashfx backup before deleting any project intended for archival

---

## 12. Keyboard Shortcuts — Master Reference

### General

| Action | Shortcut |
|---|---|
| Undo | `Ctrl+Z` |
| Redo | `Ctrl+Y` |
| Cut | `Ctrl+X` |
| Copy | `Ctrl+C` |
| Paste | `Ctrl+V` |
| Paste in Place | `Ctrl+Shift+V` |
| Duplicate | `Ctrl+D` |
| Select All | `Ctrl+A` |
| Deselect All | `Escape` |
| Delete | `Delete` or `Backspace` |
| Group | `Ctrl+G` |
| Ungroup | `Ctrl+Shift+G` |
| Open Preferences | `Ctrl+,` |

### Tools

| Tool | Shortcut |
|---|---|
| Selection | `V` |
| Rectangle | `R` |
| Circle | `C` |
| Polygon / Star | `P` |
| Pen (Path) | `B` |
| Line | `L` |
| Text | `T` |
| Image Import | `I` |
| Hand (Pan) | `H` |
| Zoom | `Z` |
| Eyedropper | `Alt` (while picker open) |

### View & Navigation

| Action | Shortcut |
|---|---|
| Zoom In | `Ctrl+=` |
| Zoom Out | `Ctrl+-` |
| Fit Canvas | `Ctrl+0` |
| Actual Size (100%) | `Ctrl+1` |
| Zoom to Selection | `Ctrl+Shift+F` |
| Toggle Grid | `Ctrl+;` |
| Toggle Rulers | `Ctrl+R` |
| Toggle Snap | `Ctrl+'` |
| Toggle Guides | `Ctrl+Shift+;` |
| Temporary Pan | `Space` (hold) |

### Element Manipulation

| Action | Shortcut |
|---|---|
| Nudge 1px | Arrow Keys |
| Nudge 10px | `Shift` + Arrow Keys |
| Constrain proportions during resize | `Shift` + drag handle |
| Resize from center | `Alt` + drag handle |
| Constrain rotation to 45° | `Shift` + rotate |
| Flip Horizontal | `Ctrl+Shift+H` |
| Flip Vertical | `Ctrl+Shift+V` |
| Bring to Front | `Ctrl+Shift+]` |
| Send to Back | `Ctrl+Shift+[` |
| Bring Forward One | `Ctrl+]` |
| Send Backward One | `Ctrl+[` |

### Layer Panel

| Action | Shortcut |
|---|---|
| Rename Layer | Double-click layer name |
| Toggle Visibility | Click eye icon |
| Toggle Lock | Click padlock icon |
| Select Multiple Layers | `Shift`+click |
| Expand Group | Click expand arrow |

### Timeline

| Action | Shortcut |
|---|---|
| Play / Pause | `Space` |
| Step Back One Frame | `Left Arrow` |
| Step Forward One Frame | `Right Arrow` |
| Go to Start | `Home` |
| Go to End | `End` |
| Pan Timeline | `Ctrl` + drag |
| Zoom Timeline | Scroll Wheel (in timeline area) |
| Add Keyframe | `K` |
| Delete Selected Keyframe(s) | `Delete` |

---

## 13. Accessibility Settings

**Reduced Motion Mode:** When enabled, all animated previews in the UI itself (panel transitions, loading indicators) are suppressed. Canvas animation playback is unaffected — this setting controls only the application interface animations, not project content.

**High Contrast Mode:** Increases the contrast of UI elements — borders, icons, and text labels — relative to the dark default theme. Useful for users with low vision or in environments with high ambient light.

**Focus Indicators:** Increases the visibility of keyboard focus indicators throughout the interface. Relevant for users who navigate the application primarily via keyboard.

**Screen Reader Compatibility:** FlashFX annotates key interface elements with ARIA labels for screen reader compatibility. Canvas content (shapes, animations) is not screen reader accessible by its nature, but all panel controls, menus, and settings are labeled.

**Text Size in UI:** Increases the font size of labels and values in all panels independent of the global UI Scale setting. Useful when UI Scale is set to Compact for layout density but readable text labels are still required.

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
