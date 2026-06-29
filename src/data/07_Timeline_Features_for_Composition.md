# FlashFX,07 · Timeline Features for Composition
### Complete Reference · Alpha Release

---

## Table of Contents

1. [Timeline Architecture](#1-timeline-architecture)
2. [The Timeline Ruler & Time Display](#2-the-timeline-ruler--time-display)
3. [Track Types & Track Organization](#3-track-types--track-organization)
4. [Keyframe Operations,Advanced](#4-keyframe-operations--advanced)
5. [The Graph Editor,Advanced](#5-the-graph-editor--advanced)
6. [The Work Area & Export Range](#6-the-work-area--export-range)
7. [Time Remapping](#7-time-remapping)
8. [Layer Duration & Trim](#8-layer-duration--trim)
9. [The Sequence Compositor](#9-the-sequence-compositor)
10. [Nested Sequences](#10-nested-sequences)
11. [Markers & Annotations](#11-markers--annotations)
12. [Timeline Search & Filtering](#12-timeline-search--filtering)
13. [Rendering Cue System](#13-rendering-cue-system)
14. [Advanced Workflow Patterns](#14-advanced-workflow-patterns)

---

## 1. Timeline Architecture

### 1.1 Overview

The timeline is the command center of the FlashFX animation workflow. It provides a temporal view of the entire composition,every element, every animated property, every keyframe,organized across a horizontal time axis.

The timeline is divided into two vertical sections:

**Track List (left):** Lists all elements in the current sequence. Each element has a row. Rows can be expanded to show individual property tracks. The track list mirrors and stays synchronized with the Layer Panel.

**Keyframe Area (right):** The horizontal field where keyframe diamonds appear at their time positions. The playhead runs vertically through this area.

### 1.2 Timeline vs. Sequence Compositor

FlashFX has two temporal editing environments:

**The Timeline** operates within a single sequence. It shows and controls the keyframe animation of elements within that sequence,the micro-level, per-property, per-frame control layer.

**The Sequence Compositor** operates at the sequence-assembly level. It arranges multiple named sequences in order to form a longer production,the macro-level, scene-by-scene assembly layer.

The two environments are accessed in the same panel. Toggle between them via the tabs at the top of the panel: "Timeline" and "Compositor."

### 1.3 Primary vs. Secondary Timeline Views

The timeline supports two display modes:

**Summary View:** Shows one row per element. Keyframe ranges are shown as color bars (indicating that some animation exists in that time range) rather than individual keyframe diamonds. Useful for seeing the high-level timing structure of many elements simultaneously.

**Detailed View:** Shows individual property tracks when an element is expanded. Shows each keyframe as a diamond. The default view for precision animation work.

Toggle with the collapse/expand all button (⊞ / ⊟) in the timeline header.

---

## 2. The Timeline Ruler & Time Display

### 2.1 Ruler Format

The ruler at the top of the keyframe area shows time markers. The format adapts to the zoom level:

- **Wide zoom (full project visible):** Shows time in seconds with major marks every 5s, minor every 1s
- **Medium zoom:** Shows seconds with major marks every 1s, minor every half-second
- **Close zoom:** Shows individual frames

**Ruler format selector:** Click the ruler area header to cycle between:
- `HH:MM:SS:FF`,standard broadcast timecode
- `Frames`,raw frame number from 0
- `Seconds`,decimal seconds

### 2.2 Timecode Display

The large timecode display in the transport controls always shows:
```
00:00:05:12
```
= 0 hours, 0 minutes, 5 seconds, 12 frames

**Clicking the timecode display** allows typing a new time position directly. Supported input formats:
- `5.12` → 5 seconds, 12 frames
- `312` → frame 312 (when the display is in Frames mode)
- `0:05:12` → 0 minutes, 5 seconds, 12 frames
- `+15` → 15 frames forward from current position
- `-30` → 30 frames backward from current position

### 2.3 Zoom Controls

**Scroll wheel in the keyframe area:** Zooms the timeline in and out, centered on the cursor position.

**Zoom slider:** A dedicated slider in the timeline header bar. Drag left to zoom out (see more time), drag right to zoom in (see finer frame detail).

**Fit to Work Area:** `Ctrl+Shift+F` in the timeline,adjusts zoom to show the full work area.

**Fit All:** `Ctrl+Alt+F`,adjusts zoom to show the full project duration.

**Zoom to Selection:** Select keyframes, then press `F` to zoom the timeline view to fit the selected keyframe range.

### 2.4 Timeline Scrolling

**Horizontal scroll:** Scroll wheel + `Shift` in the keyframe area. Or click-drag on the scroll bar at the bottom of the keyframe area.

**Vertical scroll:** Scroll wheel in the track list area when there are more tracks than the panel height can show.

**Follow playhead:** A toggle (headphone icon in the transport bar) that automatically scrolls the timeline horizontally to keep the playhead in view during playback.

---

## 3. Track Types & Track Organization

### 3.1 Track Hierarchy

The track list follows this hierarchy:

```
Sequence
  ├─ Group Layer
  │    ├─ Element Layer (animated)
  │    │    ├─ Transform Group Track
  │    │    │    ├─ Position X
  │    │    │    └─ Position Y
  │    │    ├─ Fill Layer 1
  │    │    │    └─ Color
  │    │    └─ Effects
  │    │         └─ Blur Radius
  │    └─ Element Layer (no animation)
  └─ Null Layer
```

Layers with no animated properties show no expand arrow. Once any property is keyframed, the expand arrow appears.

### 3.2 Track Colors

Each property track in the timeline is color-coded by property type:

| Color | Property Type |
|---|---|
| **Blue** | Position (X, Y) |
| **Green** | Scale (X, Y) |
| **Orange** | Rotation |
| **Purple** | Opacity |
| **Red** | Color |
| **Cyan** | Effects / Filters |
| **Yellow** | Special / Custom |
| **Gray** | All other properties |

Colors help quickly identify which properties are animated when scanning the timeline.

### 3.3 Layer Bars

Each layer in the timeline shows a **layer bar**,a horizontal colored rectangle spanning the layer's active duration. The layer bar visually summarizes where in time the layer is active.

**Layer bar anatomy:**
- Bar color corresponds to element type (shapes = blue-gray, text = orange-gray, images = purple-gray, groups = neutral)
- Small diamond icons on the bar indicate keyframe positions in summary view
- A gradient-shaded bar indicates there is animation within that time range
- A flat-colored bar indicates no keyframes (the element is static throughout)

### 3.4 Layer Duration

By default, a layer's bar spans from frame 0 to the project end. Layers can have their **in point** and **out point** set to restrict when they are active. See Section 8 (Layer Duration & Trim).

---

## 4. Keyframe Operations,Advanced

### 4.1 Keyframe Alignment

**Align to Playhead:** Select keyframes and press `Ctrl+Shift+K` to snap all selected keyframes to the current playhead position. Useful for synchronizing animation events across multiple layers to a specific moment.

**Distribute Keyframes:** Select three or more keyframes on a single track and use `Timeline → Distribute Keyframes → Evenly in Time` to space them at equal intervals between the first and last selected keyframe.

**Align to First/Last in Selection:** Select multiple keyframes and use `Timeline → Align Keyframes → To First Selected` or `To Last Selected` to collapse all keyframes to the same time position (useful before copying a group of simultaneous states).

### 4.2 Time Stretching Selected Keyframes

Select a range of keyframes and use `Timeline → Scale Time of Selected Keyframes`:

- Enter a scale percentage (e.g., 200% makes the animation take twice as long)
- Or enter absolute start and end frame numbers
- Or enter a duration in frames or seconds

The keyframe positions are redistributed proportionally within the specified time range. Values are not changed,only timing is affected.

### 4.3 Reversing Keyframes

Select a range of keyframes on one or more tracks and use `Timeline → Reverse Selected Keyframes`.

The keyframes are reordered so that the animation plays backward,what was the end state becomes the start state, and vice versa. Timing is mirrored around the center of the selection.

### 4.4 Keyframe Interpolation Bulk Edit

With multiple keyframes selected (across multiple tracks):

- `Ctrl+Shift+F9`,set all to Linear interpolation
- `Ctrl+F9`,set all to Ease In
- `Shift+F9`,set all to Ease Out
- `F9`,set all to Ease In-Out

These shortcuts are the fastest way to change easing across a large selection simultaneously.

### 4.5 Hold Keyframes

Hold keyframes (`■` type) maintain the value at the keyframe until the next keyframe, with no interpolation. Uses:

- **Discrete state changes**,a shape is in state A, then at frame 30 it instantly becomes state B
- **Blink effects**,alternating between opacity 0 and 100 with hold keyframes creates a hard blink
- **Step animations**,property value counts up or down in whole steps

Converting to hold: Right-click any keyframe → "Toggle Hold Keyframe."

To convert a range: Select all keyframes in a range across one or more tracks → Right-click → "Convert to Hold."

---

## 5. The Graph Editor,Advanced

### 5.1 Value Graph vs. Speed Graph

The graph editor has two modes, toggled with the buttons at the top of the panel:

**Value Graph:** Shows the property value over time. The Y axis is the actual value (pixels, degrees, opacity percentage). The bezier curve handles control the shape of the value change. This is the standard mode.

**Speed Graph:** Shows the rate of change (velocity) over time. The Y axis is how fast the value is changing at each moment. A peak in the speed graph means the animation is moving quickly; a valley means it is moving slowly or stopped.

Use the Speed Graph when working on smooth, physically accurate motion,it is easier to ensure velocity starts at zero (smooth takeoff), peaks cleanly, and returns to zero (smooth landing) by looking directly at the velocity profile rather than inferring it from the value curve.

### 5.2 Multiple Track Graph Editing

When multiple property tracks are selected, all their curves appear in the graph editor simultaneously. Each track is drawn in its assigned color.

**Editing all curves simultaneously:** Select handles across all curves by marquee-selecting in the graph area.

**Editing a single curve:** Click the color swatch of the desired track in the track list to isolate it in the graph.

**Normalize curves:** When value ranges differ significantly (e.g., Position X has values 0–1920, Opacity has values 0–1), the normalize button scales all curves to the same 0–1 display range for visual comparison.

### 5.3 Snapping in the Graph Editor

**Snap to whole values:** Hold `Ctrl` while dragging a graph handle to snap the value to whole numbers.

**Snap to other keyframe values:** A yellow indicator line appears when a handle aligns with another keyframe's value, making it easy to create "match cut" animations where an element reaches the exact same state as another.

**Snap to zero velocity:** A specific snap target for the Speed Graph,handles snap to the horizontal axis, ensuring zero velocity at that moment. Critical for achieving convincingly smooth physics-based animation.

### 5.4 Graph Editor Overlay

Toggle `View → Show Graph Overlay on Canvas` to display a small, transparent version of the graph editor directly on the canvas while in Animate mode. The overlay follows the selected element and shows its motion graphs without needing to look away from the canvas. Useful for adjusting easing while observing the visual result simultaneously.

---

## 6. The Work Area & Export Range

### 6.1 Setting the Work Area

The Work Area is a time range defined by an **In Point** (start) and **Out Point** (end). It serves two purposes:
1. **Preview looping**,Loop playback plays only within the work area
2. **Export scope**,The default export range

**Setting the In Point:** Move playhead to the desired start time, press `I`.
**Setting the Out Point:** Move playhead to the desired end time, press `O`.

**Visual indicator:** The work area is shown as a light-colored highlight in the timeline ruler between the In and Out markers. Areas outside the work area are dimmed.

### 6.2 Work Area Manipulation

**Drag In/Out markers:** The In and Out markers (bracket symbols in the ruler) can be dragged directly to reposition them.

**Move work area:** Hold `Shift` and drag inside the work area band to slide the entire In–Out range without changing its duration.

**Expand/contract:** Drag the In or Out marker independently to change the range while keeping the other fixed.

**Set work area to current frame:** `Ctrl+I` for In, `Ctrl+O` for Out.

### 6.3 Export Range Override

In the export dialog, the "Export Range" selector offers:
- **Work Area** (default),exports only within the In–Out range
- **Full Project**,ignores work area; exports from frame 0 to project end
- **Custom**,type specific start and end values

---

## 7. Time Remapping

### 7.1 What is Time Remapping

Time remapping allows the playback speed of an entire sequence,or of a nested sequence,to be dynamically changed over time via keyframes. It decouples the "real" time from the sequence's internal time.

A time remap keyframe says: "At real time T, show the sequence at internal time V."

- Two keyframes at (0 → 0) and (60f → 30f) play the sequence at half speed for the first 60 frames
- Two keyframes at (0 → 60f) and (60f → 0) play the sequence backward
- Keyframes with Hold interpolation freeze a frame indefinitely

### 7.2 Enabling Time Remap

Select any sequence layer in the Compositor, then:
`Animation → Enable Time Remap`

A "Time Remap" track appears for the sequence layer. By default, two keyframes are created: one at frame 0 mapping to 0, and one at the end of the sequence mapping to the sequence's total duration (normal-speed playback).

### 7.3 Freeze Frame

To freeze a frame indefinitely:
1. Enable Time Remap
2. Add a keyframe at the desired freeze point
3. Change it to a Hold keyframe type (right-click → Toggle Hold Keyframe)

The sequence will play normally up to the freeze keyframe, then hold that frame for the duration following it.

### 7.4 Speed Ramping

Create acceleration and deceleration effects by adjusting the slope between time remap keyframes:

**Steeper slope** = faster playback (real time passes faster relative to sequence time)
**Shallower slope** = slower playback (slow motion)
**Slope = 45°** = normal speed

Use the Graph Editor on the Time Remap property to apply easing to the speed change itself,eased transitions between normal speed and slow motion feel much more natural than linear speed changes.

---

## 8. Layer Duration & Trim

### 8.1 In and Out Points for Layers

Each layer in the timeline has its own In Point and Out Point that define when it appears and disappears in the composition. Outside its In–Out range, the layer is invisible and does not render.

**Setting a layer's In Point:** With the layer selected, move the playhead to the desired start time, then press `Ctrl+[` (or right-click the layer bar → "Trim In to Playhead").

**Setting a layer's Out Point:** With the layer selected, move the playhead to the desired end time, then press `Ctrl+]` (or right-click → "Trim Out to Playhead").

### 8.2 Trimming Visually

Click and drag the **left edge** of a layer bar to trim the In Point. Drag the **right edge** to trim the Out Point.

**Snap while trimming:** Edges snap to the playhead position, to other layer edges, and to keyframe positions when dragging.

### 8.3 Moving a Layer in Time

Drag the center of the layer bar (not the edges) to reposition the layer's entire time range without changing its duration. Keyframes inside the layer move with it.

### 8.4 Slip and Slide

**Slip:** Moves the layer's content (and therefore its keyframes) within its fixed In–Out window. The In and Out points don't change, but the layer's animation data shifts in time relative to them.
`Alt+drag` on a layer bar to slip.

**Slide:** Moves the layer and all its content in time, but adjusts the neighboring layers to fill the gap/overlap.
`Ctrl+Alt+drag` on a layer bar to slide.

### 8.5 Split Layer

Splits the selected layer into two layers at the current playhead position.

`Edit → Split Layer` or `Ctrl+Shift+D`

The layer is divided at the playhead. Keyframes before the split point belong to the first piece; keyframes after belong to the second piece. Both pieces share the same element properties, with each independently trimmable.

Uses:
- Applying different effects to the same element in different time segments
- Creating a "stutter" effect by duplicating and splitting
- Breaking a long layer into manageable pieces for complex transitions

### 8.6 Sequence Snapping

When repositioning layers in the timeline, layers snap to:
- The current playhead position
- The In and Out points of other layers
- Keyframe positions on other layers
- Explicit markers and cues

Disable snapping in the timeline: click the Snap icon (🧲) in the timeline header.

---

## 9. The Sequence Compositor

### 9.1 Overview

The Sequence Compositor is accessed via the "Compositor" tab at the top of the timeline panel.

It provides a linear, track-based view of all sequences in the project, arranged along a shared time axis. Each sequence is represented as a block in the compositor that can be repositioned, trimmed, and re-ordered.

This is conceptually similar to a video editor's timeline,sequences are "clips" that are assembled into a final output.

### 9.2 Sequences vs. Clips

A **Sequence** is a complete FlashFX project context,its own canvas contents, layer stack, keyframe animation, and duration.

A **Compositor Clip** is an instance of a sequence placed in the compositor timeline. The same sequence can be placed multiple times as different clips,useful for creating a sequence once and using it in multiple positions in the final output (e.g., a recurring intro sting used between sections).

### 9.3 Compositor Timeline Layout

The Compositor timeline shows:

- **Sequence tracks**,horizontal rows, each potentially holding one or more sequence clips
- **Clip blocks**,colored rectangles representing sequence instances
- **Global timeline ruler**,the time axis for the overall output, independent of any individual sequence's internal timeline
- **Global playhead**,controls the composite output preview

### 9.4 Placing Sequences

Drag a sequence name from the Sequence List panel onto a compositor track. The clip is placed starting at the dragged position.

Alternatively: `Compositor → Insert Sequence` prompts to choose a sequence and places it at the current global playhead position.

### 9.5 Clip Operations

**Move:** Drag the clip block to a different time position or a different track.

**Trim In/Out:** Drag the clip edges to trim. Trimming does not change the sequence's internal animation,it controls which portion of the sequence is shown in the output.

**Time Remap on Clip:** Each compositor clip can have time remapping applied independently. Right-click the clip → "Enable Time Remap."

**Clip Speed:** Right-click any clip → "Set Speed" to enter a playback speed multiplier (0.5 = half speed, 2.0 = double speed). FlashFX automatically adjusts the clip's duration and updates the time remap accordingly.

**Duplicate Clip:** Right-click → "Duplicate." Creates a new independent clip instance of the same sequence.

**Unlink from Sequence:** Right-click → "Unlink Sequence." The clip becomes an independent, non-synced copy of the sequence's state at the time of unlinking. Changes to the original sequence no longer affect this clip.

### 9.6 Clip Transitions

Between two adjacent clips on the same track, a transition can be applied.

**Adding a transition:** Right-click the boundary between two clips → "Add Transition."

**Built-in transition types:**

| Transition | Description |
|---|---|
| **Cut** | Instantaneous switch (default, no actual transition) |
| **Dissolve / Cross Fade** | Opacity cross-fade between the outgoing and incoming clip |
| **Wipe (Horizontal)** | A line sweeps from left to right, revealing the incoming clip |
| **Wipe (Vertical)** | A line sweeps from top to bottom |
| **Radial Wipe** | A line rotates clockwise around a center point |
| **Zoom Cross** | The outgoing clip zooms in while the incoming clips zooms in from 0% |
| **Slide** | Outgoing slides out in one direction; incoming slides in from the opposite direction |
| **Dip to Black / White** | Fades to black/white then fades in to the next clip |

**Transition duration:** Set in the transition properties (double-click the transition region between clips). Range: 1 frame to the full duration of the shorter clip.

**Transition easing:** Transitions have their own easing profile, independent of element-level easing in the constituent sequences.

### 9.7 Multi-Track Compositing

The Compositor supports multiple tracks stacked vertically. Clips on higher tracks render on top of clips on lower tracks at the same time position.

**Use cases for multi-track:**
- A persistent watermark or logo clip across the full output
- A lower-third overlay sequence that appears over several main scenes
- Background music visualization that runs under all scenes (when audio is available)
- A frame/border overlay that applies to the full output

**Track blend modes:** Each compositor track has a blend mode property that controls how clips on that track composite with the tracks below it. This allows, for example, a watermark track in Multiply mode to dim the content below it.

---

## 10. Nested Sequences

### 10.1 What is Nesting

Nesting means placing one sequence inside another as a single element. The inner sequence (the **pre-composition**) renders as a flat image frame-by-frame, and that rendered output is treated as a single element in the outer composition,transformable, maskable, filterable, and animatable like any other element.

### 10.2 Creating a Nested Sequence (Pre-compose)

**Method 1:** Right-click one or more elements in the layer stack → "Pre-compose." The selected elements are moved into a new, automatically created sequence, and a reference to that sequence is placed at the same position in the original layer stack.

**Method 2:** In the Compositor, drag a sequence onto the canvas of another sequence. A nested sequence element appears.

### 10.3 Why Nest?

- **Simplify complex layer stacks**,group a multi-element sub-composition into one manageable nested entity
- **Apply effects to multiple elements as a unit**,add a blur or blend mode to the pre-comp and it affects all its contents as a composited whole
- **Reuse sub-compositions**,the same pre-comp can be placed multiple times in different contexts
- **Apply time remap to a group**,time remapping can be applied to the nested sequence as a whole

### 10.4 Entering a Nested Sequence

Double-click the nested sequence element on the canvas or in the layer stack. The editor switches context to the inner sequence's timeline and canvas.

The breadcrumb navigation bar at the top of the canvas area shows the nesting path:
```
Main Sequence > Background Elements > Background Gradient
```

Click any breadcrumb to navigate back up the nesting hierarchy.

### 10.5 Live Updates

Changes made inside a nested sequence are reflected immediately in all compositions that reference it. The rendered pre-comp is regenerated whenever the inner sequence's content changes.

---

## 11. Markers & Annotations

### 11.1 Global Markers

Global markers are time annotations on the main sequence timeline ruler. They appear as colored vertical lines with labels and are visible to all team members who share the project.

**Adding a marker:** Press `M` while the playhead is at the desired time. Or right-click the ruler → "Add Marker."

A dialog prompts for:
- **Label**,short name for the marker (shown in the ruler)
- **Color**,the color of the marker line
- **Comment**,longer note text (visible when hovering over the marker or in the Markers panel)
- **Duration**,optionally assign a time range to the marker (creates a marker region rather than a single-point marker). Useful for marking a specific scene section.

### 11.2 Layer Markers

Individual layers can have their own markers, independent of the global timeline markers. Layer markers are visible only when the layer is expanded in the timeline.

Adding a layer marker: right-click any keyframe area on the specific layer's row → "Add Layer Marker."

### 11.3 Navigating Between Markers

- `Ctrl+Shift+Right Arrow`,jump to next marker
- `Ctrl+Shift+Left Arrow`,jump to previous marker

**Markers panel:** `View → Markers Panel` opens a list of all global markers in the project with their times, labels, and comments. Click any marker row to jump the playhead to that time.

### 11.4 Using Markers for Beat Syncing

When producing music-driven content, markers can be placed at each beat or phrase boundary (using audio analysis as reference, or by manually tapping to a metronome). Animation keyframes can then be snapped to marker positions, ensuring motion aligns to musical beats.

---

## 12. Timeline Search & Filtering

### 12.1 Layer Search

The timeline track list has a search box at the top. Typing in the search box filters the visible layers to only those whose names contain the search string. All other layers are temporarily hidden from the timeline view (not hidden from the canvas,only from the timeline UI).

**Search is case-insensitive** and matches any substring of the layer name.

**Clear search:** Press `Escape` or click the `×` in the search box to restore all layers.

### 12.2 Track Type Filters

Filter buttons at the top of the timeline let you show only specific types of property tracks across all layers:

| Button | Shows Only |
|---|---|
| **P** | Position tracks |
| **R** | Rotation tracks |
| **S** | Scale tracks |
| **O** | Opacity tracks |
| **C** | Color / Material tracks |
| **F** | Filter / Effect tracks |
| **All** | All track types (default) |

This is useful when reviewing a specific type of animation across many layers,for example, checking all opacity keyframes simultaneously to ensure fade timing is consistent.

### 12.3 Keyframe-Only Filter

Toggle "Show Only Animated Layers" in the timeline header. When active, layers with no keyframes are hidden from the timeline track list. Simplifies the view on complex compositions with many static elements.

---

## 13. Rendering Cue System

### 13.1 Render Cues

Render cues are time-based triggers that instruct FlashFX to take a specific action at a specific frame during export rendering.

**Types of render cues:**

| Cue Type | Description |
|---|---|
| **Snapshot** | Exports a PNG still of the canvas at this frame number |
| **Marker Export** | Exports a labeled section when the playhead reaches this cue |
| **Sequence Split** | Splits the output video file at this cue, generating multiple output files |
| **Metadata Stamp** | Embeds a custom metadata tag at this timecode in the video file |

### 13.2 Adding Render Cues

Right-click the timeline ruler at any time position → "Add Render Cue." Choose the cue type and configure its properties.

Render cues appear as small icon markers in the ruler, distinct from regular annotation markers.

### 13.3 Batch Snapshots

Multiple Snapshot cues can be placed at different time positions. When the export renders, a PNG is automatically saved for each snapshot cue without interrupting the video export.

Useful for:
- Automatically generating thumbnail images for each scene
- Creating a series of product mockup frames from a single animation
- Producing slide content from an animated presentation

---

## 14. Advanced Workflow Patterns

### 14.1 The Adjustment Layer Pattern

An Adjustment Layer applies its effects to all layers below it in the stack, without containing any element of its own.

**Creating an Adjustment Layer:** `Insert → Adjustment Layer`

The adjustment layer appears in the layer stack as a special layer type. Any filter or effect added to the adjustment layer applies to the composite of everything below it in real time.

**Uses:**
- Global color grade over the entire composition without modifying individual elements
- Animated blur that defocuses all elements simultaneously (e.g., a "DOF rack focus" effect across the scene)
- A global vignette applied to the full composite
- A blend mode adjustment that colorizes the entire scene beneath it

### 14.2 The Pre-Comp + Adjustment Layer Pattern

A common professional technique:

1. Pre-compose all scene elements into a nested sequence
2. Place the nested sequence in the parent composition
3. Add an Adjustment Layer above the nested sequence with the desired color grade

Result: The full scene is graded uniformly. The grade can be easily replaced or toggled by modifying only the adjustment layer.

### 14.3 The Master Control Null Pattern

For managing a composition with many related animation properties:

1. Create a Null Object (the "Master Control null")
2. Parent all relevant elements to this null
3. Link each element's properties to the null's custom properties using Value Linking
4. Animate only the null

This creates a single-point control for complex multi-element effects (e.g., controlling the position of an entire scene with one control, or driving the opacity of 20 elements from a single slider).

### 14.4 Expression Controller Nulls

For creating user-friendly "control sliders":

1. Create a null with custom properties named descriptively (e.g., "Animation Progress")
2. Write expressions on all target elements that reference the null's custom property value
3. Keyframe only the null's custom property

Result: Animating one value drives a complex coordinated multi-element animation. Useful for creating reusable animation rigs that can be reused across projects by copying the null and its linked elements.

### 14.5 Timeline-Driven State Machines

For UI or interactive mockup animations, the timeline can simulate state machine behavior:

1. Define each visual state on a separate keyframe cluster (group of keyframes at the same time)
2. Use Hold keyframes to prevent interpolation between states
3. Time remap or expressions control which keyframe cluster is "active" at any given time

This pattern produces a pseudo-state-machine within the timeline, useful for demonstrating interaction designs where the "active" state changes based on a logical condition.

### 14.6 Sequence Looping with Time Remap

To create a looping animation within the Compositor:

1. Create the loop animation in its own sequence (keyframes must be identical at frame 0 and frame N)
2. Place the sequence in the Compositor
3. Enable Time Remap on the Compositor clip
4. Apply `loopOut("cycle")` expression to the Time Remap property
5. Trim the clip end to any desired total duration

The sequence will loop indefinitely for the duration of the clip, regardless of the clip's length relative to the underlying sequence length.

---

*FlashFX,Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese,FlashFX*
