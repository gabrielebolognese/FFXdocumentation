# FlashFX — 05 · Animate Mode
### Complete Reference · Alpha Release

---

## Table of Contents

1. [Entering Animate Mode](#1-entering-animate-mode)
2. [The Keyframe System](#2-the-keyframe-system)
3. [Property Tracks](#3-property-tracks)
4. [Easing & Interpolation](#4-easing--interpolation)
5. [The Easing Graph Editor](#5-the-easing-graph-editor)
6. [Easing Presets — Full Reference](#6-easing-presets--full-reference)
7. [Multi-Property Animation](#7-multi-property-animation)
8. [Animating Colors](#8-animating-colors)
9. [Animating Along a Path](#9-animating-along-a-path)
10. [Animating Shapes — Morph & Deform](#10-animating-shapes--morph--deform)
11. [Parenting & Hierarchy Animation](#11-parenting--hierarchy-animation)
12. [Expressions & Value Linking](#12-expressions--value-linking)
13. [Motion Paths & Spatial Interpolation](#13-motion-paths--spatial-interpolation)
14. [Looping & Cycle Animations](#14-looping--cycle-animations)
15. [Playback & Preview](#15-playback--preview)

---

## 1. Entering Animate Mode

### 1.1 Switching to Animate Mode

Click the **Animate** button in the mode switcher at the top of the interface, or press `Ctrl+2`.

The interface rearranges:
- The timeline expands to occupy the lower half of the screen
- Property tracks become visible for all animated elements
- The playhead becomes the primary focus of interaction
- The Properties Panel collapses to show only animation-relevant properties

### 1.2 Record Mode Toggle

Record Mode is what makes property changes create keyframes automatically.

- **Record Active (red dot):** Every property change made to any selected element is captured as a keyframe at the current playhead position.
- **Record Inactive:** Property changes update the element globally, without creating keyframes. Use this to make baseline adjustments that affect the element across the entire timeline.

Toggle Record Mode:
- Click the Record button (red circle) in the timeline transport controls
- Press `Ctrl+Alt+R`

**Default behavior:** Record Mode is automatically activated when Animate mode is opened (configurable in Application Settings).

### 1.3 The Playhead

The playhead is the thin vertical line running the full height of the timeline. It represents the current time position.

- **Position:** Shown in the timecode display as `HH:MM:SS:FF` (hours, minutes, seconds, frames)
- **Moving the playhead:** Click anywhere in the timeline ruler to jump to that time. Drag the playhead handle for precise scrubbing.
- **Keyboard navigation:** `Left Arrow` / `Right Arrow` for frame-by-frame stepping. `Home` / `End` for start/end of the sequence.

---

## 2. The Keyframe System

### 2.1 What is a Keyframe

A keyframe records the value of a specific property at a specific point in time. The animation engine interpolates between keyframes to produce smooth motion between recorded states.

A keyframe is defined by:
- **Time** — which frame it is on
- **Property** — which property it controls (X position, opacity, blur radius, etc.)
- **Value** — the property value at this moment
- **Easing** — the interpolation curve on the way out of this keyframe toward the next

### 2.2 Creating Keyframes

**Automatic (Record Mode on):** Change any property while Record Mode is active. A keyframe is created immediately at the current playhead position.

**Manual:** Press `K` with an element selected to create a keyframe on all currently animated properties at the current playhead time. This inserts a "hold" keyframe at the current value without changing the property.

**Via the property field:** Click the diamond icon (◇) in the Properties Panel next to any animatable property to create a single keyframe at the current time on that specific property.

### 2.3 Keyframe Types

| Type | Indicator | Description |
|---|---|---|
| **Standard** | ◆ filled diamond | Smooth interpolation to the next keyframe using the defined easing |
| **Hold** | ■ filled square | Value holds constant until the next keyframe; no interpolation |
| **Roving** | ◇ open diamond | Used on motion paths; its timing is automatically adjusted to produce constant velocity |

**Changing keyframe type:** Right-click any keyframe and select the desired type from the context menu.

### 2.4 Selecting Keyframes

- Click a keyframe diamond to select it
- `Shift+click` to add to selection
- Click and drag in empty timeline space to marquee-select a range of keyframes
- `Ctrl+A` in the timeline to select all keyframes on all tracks for all elements

### 2.5 Moving Keyframes

Drag selected keyframes left or right to change their time position. Multiple selected keyframes move together, preserving their relative timing.

**Precision move:** With a keyframe selected, hold `Ctrl` and press `Left Arrow` / `Right Arrow` to move by one frame at a time.

**Numeric position:** Right-click a keyframe and select "Set Time" to enter an exact frame number.

### 2.6 Copying and Pasting Keyframes

- Copy: `Ctrl+C` on selected keyframes
- Paste: `Ctrl+V` — pastes at the current playhead position
- Paste in Place: `Ctrl+Shift+V` — pastes at the same time positions as the source

Keyframes can be copied between elements of the same type. Pasting onto an incompatible element (e.g., pasting image filter keyframes onto a shape) is ignored for the incompatible properties.

### 2.7 Deleting Keyframes

- Select and press `Delete`
- Right-click and select "Delete Keyframe"

When all keyframes on a property track are deleted, the track is removed from the timeline for that element.

### 2.8 Keyframe Shortcuts Summary

| Action | Shortcut |
|---|---|
| Create keyframe on all active properties | `K` |
| Step to previous keyframe | `J` |
| Step to next keyframe | `;` (semicolon) |
| Select all keyframes for element | `Ctrl+A` (in timeline) |
| Move keyframe 1 frame earlier | `Ctrl+Left Arrow` |
| Move keyframe 1 frame later | `Ctrl+Right Arrow` |

---

## 3. Property Tracks

### 3.1 Track Organization

Each animated element in the timeline has a row with an expand button (▶). Expanding the row reveals individual property tracks — one track per animated property.

**Track hierarchy:**
```
Element Name
  ├─ Transform
  │    ├─ Position X
  │    ├─ Position Y
  │    ├─ Scale X
  │    ├─ Scale Y
  │    ├─ Rotation
  │    ├─ Skew X
  │    ├─ Skew Y
  │    └─ Opacity
  ├─ Fill (Layer 1)
  │    ├─ Color
  │    ├─ Opacity
  │    └─ (gradient-specific properties)
  ├─ Stroke
  │    ├─ Color
  │    ├─ Width
  │    └─ Dash Offset
  ├─ Shadow
  │    ├─ Offset X / Y
  │    ├─ Blur Radius
  │    └─ Opacity
  └─ Filters
       └─ (one sub-track per filter parameter)
```

### 3.2 Animatable Properties — Complete List

**Transform:**
- Position X, Position Y
- Scale X, Scale Y
- Rotation
- Skew X, Skew Y
- Opacity
- Anchor Point X, Anchor Point Y

**Shape-Specific:**
- Corner Radius (all corners, or per-corner)
- Arc Start Angle, Arc End Angle
- Inner Radius (circles)
- Star Points, Inner Radius, Outer Radius
- Path vertex positions (per vertex, in Vertex Edit mode)

**Material & Fill:**
- Fill Color (solid fill)
- Fill Opacity (per layer)
- Gradient Stop Colors (per stop)
- Gradient Stop Positions (per stop)
- Gradient Angle
- Gradient Center X / Y
- Pattern Scale, Pattern Rotation, Pattern Offset X / Y

**Stroke:**
- Stroke Color
- Stroke Width
- Stroke Opacity
- Dash Offset (for moving dash animations)

**Shadow / Glow:**
- Drop Shadow Offset X / Y
- Drop Shadow Blur Radius
- Drop Shadow Color
- Drop Shadow Opacity
- Inner Shadow properties (same)
- Outer/Inner Glow Blur Radius, Color, Opacity

**Text:**
- All transform properties (as shapes)
- Font Size (per character in character mode)
- Character Spacing
- Baseline Shift (per character in character mode)
- Fill Color (per character)

**Image:**
- All transform properties
- Crop Frame (X, Y, Width, Height)
- All filter parameters (per filter)

### 3.3 Track Visibility & Solo

Each property track has:
- **Eye toggle** — hides the track without deleting keyframes. The property returns to its default state visually, but keyframes are preserved.
- **Solo** (S) — when any track is soloed, only that track's animation is active; all others are suspended. Useful for isolating a specific property's animation for review.

---

## 4. Easing & Interpolation

### 4.1 What Easing Does

Easing controls the **velocity profile** of the animation between two keyframes. Without easing, motion has constant speed (Linear interpolation). With easing, motion accelerates and decelerates in ways that feel natural, physical, or expressive.

The easing is applied **per keyframe transition** — the transition from Keyframe A to Keyframe B can have different easing than the transition from B to C.

### 4.2 Applying Easing

**Via Properties Panel:** Select one or more keyframes. In the Properties Panel (or the Easing panel), choose from the easing presets or edit the custom bezier.

**Via Right-click:** Right-click any selected keyframe(s) and choose from the easing preset submenu.

**Via the Easing dropdown in the timeline:** Each keyframe shows a small easing indicator. Click it to open a quick-select dropdown.

### 4.3 Easing Direction

Easing on a keyframe applies to the **outgoing** transition — from this keyframe to the next one. The easing of the incoming transition is controlled by the previous keyframe.

For natural motion:
- The keyframe where motion **starts** controls the "ease out" (acceleration away)
- The keyframe where motion **ends** controls the "ease in" (deceleration arriving)

---

## 5. The Easing Graph Editor

### 5.1 Opening the Graph Editor

- Click the **Graph** button in the timeline panel
- `Ctrl+Shift+E`

The graph editor opens as a panel below the timeline tracks.

### 5.2 Reading the Graph

The graph displays a bezier curve where:
- **X axis** = time (from the current keyframe to the next)
- **Y axis** = property value (0 = the current keyframe's value, 1 = the next keyframe's value)

The curve describes how the property value changes over the time between the two keyframes.

**Steep slope** = fast change (rapid acceleration)
**Flat slope** = slow change (deceleration or pause)
**Diagonal straight line** = Linear interpolation (constant speed)

### 5.3 Editing the Curve

The bezier curve has two control handles (one near the start, one near the end). Drag these handles to reshape the curve:

- **Pulling the start handle upward** — the property value changes quickly at the start (ease out)
- **Pulling the end handle downward** — the property value changes quickly near the end and slows for arrival (ease in)
- **Both handles pulled toward center** — slow start and slow end (classic ease in-out)
- **S-curve** — anticipation effect: the value briefly overshoots in the reverse direction before proceeding forward

### 5.4 Multiple Property Tracks in the Graph

When multiple property tracks are selected, all their curves appear in the graph simultaneously in different colors. This allows comparing and coordinating the timing of position X vs. position Y, or scale vs. opacity.

**Normalize view:** A button at the top of the graph scales all curves to the same 0–1 range for visual comparison, even if the absolute values differ.

### 5.5 Graph Editor Display Options

- **Show velocity curve** — switches the display from value-over-time to velocity-over-time (the derivative of the value curve). Useful for understanding how fast the property is changing at any moment, without the visual ambiguity of the bezier path.
- **Show reference frame** — overlays a small canvas preview at the current time position for spatial context.

---

## 6. Easing Presets — Full Reference

### 6.1 Standard Presets

| Preset | Description | Velocity Profile |
|---|---|---|
| **Linear** | Constant speed from start to finish | Flat horizontal line |
| **Ease** | Gentle acceleration at start, gentle deceleration at end | Soft S-curve |
| **Ease In** | Slow start, full speed at end | Curves upward steeply at right |
| **Ease Out** | Full speed at start, slow at end | Curves upward steeply at left |
| **Ease In-Out** | Slow at both ends, fast in the middle | Moderate S-curve |

### 6.2 Dramatic Presets

| Preset | Description |
|---|---|
| **Ease In Strong** | Slow start with aggressive acceleration; arrives at full speed |
| **Ease Out Strong** | Full speed at start; heavy deceleration to a deliberate stop |
| **Ease In-Out Strong** | Pronounced slow at both ends with fast middle section |
| **Exponential In** | Very slow start that accelerates dramatically |
| **Exponential Out** | Very fast start that decelerates dramatically |

### 6.3 Physical Presets

| Preset | Description |
|---|---|
| **Bounce** | Overshoots the end value and bounces back, settling at the target |
| **Bounce Strong** | More pronounced bounce with additional oscillation |
| **Elastic** | Overshoots and oscillates like a spring before settling |
| **Elastic In** | Elastic movement into the end value |
| **Anticipate** | Briefly moves backward (opposite direction) before moving forward (anticipation, common in cartoon animation) |
| **Anticipate + Overshoot** | Both anticipation at start and overshoot at end |
| **Back In** | Pulls back slightly before launching forward |
| **Back Out** | Overshoots and pulls back to settle |

### 6.4 Stepped Presets

| Preset | Description |
|---|---|
| **Step Start** | Value jumps immediately to end value at the first frame; holds there |
| **Step End** | Value holds at start value until the final frame, then jumps to end value |
| **Steps (n)** | Divides the transition into n discrete equal jumps; configurable step count |

Stepped easing is used for stop-motion effects, mechanical counters, and 2D character animation on limited frames.

---

## 7. Multi-Property Animation

### 7.1 Animating Multiple Properties Simultaneously

Any number of properties can be keyframed at any point in time. When Record Mode is active, any property change creates a keyframe on that property at the current time — multiple properties can be changed before the playhead moves, and all changes are captured.

**Example workflow:**
1. Set playhead to frame 0
2. Set Position X = 0, Position Y = 200, Opacity = 0%, Scale = 80%
3. Move playhead to frame 30
4. Set Position X = 960, Position Y = 540, Opacity = 100%, Scale = 100%

Result: The element moves from the lower-left to the center, fades in, and scales up over 30 frames.

### 7.2 Offsetting Property Timing

Properties do not all have to start and end at the same keyframes. Each property track is independent.

Example: An element could:
- Scale from 80% to 100% over frames 0–15 (fast scale-up)
- Continue moving in position from frames 0–45 (slower, continuing movement)
- Fade in opacity over frames 5–20 (slightly delayed fade-in)

This asynchrony of properties is what creates nuanced, layered motion rather than a single robotic simultaneous transition.

### 7.3 Group Animation vs. Individual Animation

When a group is animated, the group-level transform applies on top of all member transforms. This means:

- Animating the group's position moves all members together as a unit
- Animating individual member positions within the group moves them relative to the group

This is intentional and powerful — use group-level animation for "macro" moves (e.g., the whole element flies in), and member-level animation for "micro" moves (e.g., individual parts animate internally while the group moves).

---

## 8. Animating Colors

### 8.1 Solid Color Interpolation

When a solid fill color is keyframed at two different values, FlashFX interpolates between them through **LAB color space** by default. LAB interpolation produces perceptually uniform transitions — the brightness appears consistent throughout the transition, which avoids the muddy midpoints that can occur with RGB-space interpolation.

**Alternative: RGB interpolation** — selectable via the color track context menu. RGB interpolation passes through the RGB midpoint, which can produce unintended hue shifts in the middle of the transition.

### 8.2 Gradient Keyframes

Gradients can be keyframed:

- **Stop Color** — the color of a specific gradient stop changes over time
- **Stop Position** — a stop moves along the gradient ramp over time
- **Gradient Angle** — the direction of the gradient rotates over time
- **Center Position** (radial) — the gradient's center point moves over time

Animating gradient stop positions creates color band animation effects — color zones sweep across the element.

### 8.3 Color Flicker / Flash Effects

A fast two-keyframe color animation (Hold type keyframes) over 1–2 frames creates a hard color flash or strobe effect. This is commonly used for:
- Impact flashes on beat hits
- Glitch color effects
- Notification pulse effects

---

## 9. Animating Along a Path

### 9.1 Path Motion vs. Keyframed Position

Standard position animation moves elements in straight lines between position keyframes. The path between keyframes is controlled by the spatial bezier handles.

For more complex curved motion, an element can be assigned to **follow a path** — a vector path that defines its trajectory.

### 9.2 Creating a Motion Path

1. Draw the path the element should follow using the Pen tool (or any vector shape)
2. Select the element to animate
3. `Animation → Attach to Path`
4. Select the target path from the picker

The element is linked to the path. Its position is now driven by a single progress value (0 = path start, 1 = path end) rather than X/Y coordinates.

### 9.3 Path Animation Properties

**Progress** — the primary animatable value. Keyframe it from 0 to 1 (or any range) to drive the element from start to end along the path.

**Offset** — shifts the starting position along the path without affecting progress values.

**Auto-Orient** — when enabled, the element's rotation is automatically set to match the direction it is moving along the path. Turn off for elements that should maintain a fixed orientation while following a curved route.

**Orient Offset** — adds a fixed rotation to the auto-orient direction. Useful when the "front" of an element is not aligned with the default orientation.

### 9.4 Motion Path Editing

The path used as a motion path is a live vector path. Editing it (moving anchor points, adjusting curves) updates the motion trajectory in real time while animation is playing.

---

## 10. Animating Shapes — Morph & Deform

### 10.1 Vertex Animation

In Vertex Edit mode, individual path vertices can be keyframed. This enables:

- **Shape morphing** — a circle's vertices can be animated to positions that form a square, a star, an irregular blob
- **Organic deformation** — soft, living, breathing shape effects
- **Character animation** — animating limb and body shapes for simple 2D character rigs

**How to keyframe vertices:**
1. Switch to Animate mode with Record active
2. Double-click the shape to enter Vertex Edit mode
3. Select a vertex
4. Move it to the desired position at the current time
5. A keyframe is created on that vertex's position track

Each vertex has its own X and Y track. A 20-vertex path generates up to 40 property tracks for a full shape morph.

### 10.2 Corner Radius Animation

The corner radius of a rectangle is a single numeric value and is easily animated. Create a keyframe at 0px and another at 100px (or half the short side) to produce a smooth rectangle-to-circle morph.

### 10.3 Arc Angle Animation

Circle elements with Start Angle and End Angle properties can animate these values:

- Start and end angle both sweeping produces a rotating arc
- End angle animating from 0° to 360° with end staying at the leading edge produces a progress ring draw-on effect

### 10.4 Star Property Animation

Animating a star's inner radius from 0 to 0.8 of the outer radius produces a morphing from spike to fat star. Animating the point count is a discrete change (jumps between integer values) but can create a rhythmic pulsing effect when combined with easing.

---

## 11. Parenting & Hierarchy Animation

### 11.1 The Parent-Child System

Any element can be assigned a **parent** element. Once parented, the child's transforms are computed relative to the parent's transforms. When the parent moves, rotates, or scales, the child moves with it automatically.

**Setting a parent:**
- In the Properties Panel, the "Parent" dropdown lists all elements in the current sequence
- Or: In the Layer Panel, drag the child element onto the parent element (a nesting indicator appears)

**Removing a parent:** Set the Parent to "None" in the dropdown.

### 11.2 Null Objects

A **Null Object** is an invisible, non-rendering element that exists solely as an animation target for parenting.

**Creating a Null:** `Insert → Null Object` or `Ctrl+Shift+N`

Null objects are displayed as a small crosshair on the canvas in design mode but are invisible in export.

**Use cases for nulls:**
- **Shared pivot** — parent multiple elements to a null and rotate/scale the null to affect all children from a single control point
- **Camera simulation** — parent all scene elements to a null and animate the null's position/scale to simulate a virtual camera moving through the scene
- **Rigging anchor** — create complex multi-joint animation rigs without exposing visible pivot geometry

### 11.3 Animation Inheritance

When a parent is animated:
- The child's position is interpreted as an **offset from the parent's current position** at every frame
- If the child also has its own position animation, the child moves relative to the parent's moving origin

**Example:**
- Parent null moves from X=0 to X=500 over 60 frames
- Child circle has its own animation from X=0 to X=100 over 30 frames
- The child's rendered position travels from (0+0) to (500+100) = (500,0) at frame 60 while also having its own relative offset

### 11.4 Freeze Transform

**Freeze Transform** bakes the current effect of a parent's transform into the child as local values, then removes the parent relationship.

`Animation → Freeze Transform`

Use when you want to "lock in" a hierarchical result and then work independently.

---

## 12. Expressions & Value Linking

### 12.1 Value Linking (Basic)

Any numeric property can be **linked** to another numeric property so that when one changes, the other follows.

**Linking:**
1. Right-click the property to be driven
2. Select "Link to Property"
3. In the picker, select the source property

The driven property now mirrors the source property's value. The link is live and animatable — if the source is keyframed, the driven property follows.

**Offset:** A constant offset value can be added to the link. Example: "Property B = Property A + 50px." Useful for keeping elements at a fixed offset from each other.

**Scale Factor:** A multiplier can be applied: "Property B = Property A × 0.5." Useful for parallax relationships between layers.

### 12.2 Expression Overrides

For cases where simple linking is not sufficient, an expression can be written to compute a property value dynamically.

**Expression language:** A simple JavaScript-like syntax evaluated per frame.

**Available variables in expressions:**
- `time` — current time in seconds
- `frame` — current frame number
- `width`, `height` — canvas dimensions
- `value` — the property's current keyframed value (expressions can modify keyframed values rather than replace them)
- `thisElement` — reference to the current element
- `thisProperty` — reference to the current property

**Expression examples:**

Oscillate position:
```
value + Math.sin(time * 2) * 20
```
This adds a sine wave oscillation on top of the existing keyframed position value.

Rotate continuously:
```
time * 120
```
The element rotates 120 degrees per second, indefinitely.

Wiggle (random oscillation):
```
wiggle(3, 15)
```
`wiggle(frequency, amplitude)` — the element randomly oscillates 15px at 3 oscillations per second.

---

## 13. Motion Paths & Spatial Interpolation

### 13.1 The Motion Path Display

When a position-animated element is selected in Animate mode, its motion path appears overlaid on the canvas — a dotted curve showing the trajectory the element travels.

Each keyframe appears as a dot on the path. The dots between keyframes show the interpolated positions at regular time intervals. Widely spaced dots indicate fast movement; closely spaced dots indicate slow movement.

### 13.2 Spatial Bezier Handles

Each keyframe position on the motion path has **spatial bezier handles** that control the curvature of the path at that point. These are distinct from the temporal easing handles in the graph editor — spatial handles control the shape of the trajectory; temporal handles control how fast the element travels along it.

**Editing spatial handles:**
- Click a keyframe dot on the motion path
- Drag the handles (small circles connected by lines) to change the curve into and out of that point

### 13.3 Auto-Bezier vs. Continuous Bezier

**Auto-Bezier:** FlashFX automatically sets handle directions and lengths to produce smooth, continuous curves through keyframe positions. Handles adjust automatically as keyframe positions are moved.

**Continuous Bezier:** Handles are aligned (colinear) but their lengths are set manually. The path remains smooth but the curve shapes are manually controlled.

**Broken Bezier (Corner):** The two handles at a keyframe point are independent. Allows sharp direction changes in the motion path.

### 13.4 Constant Velocity (Roving Keyframes)

By default, keyframes are "pinned" at specific time positions. The motion path may pass through them at varying speeds.

Converting keyframes to **Roving** type removes their time-pinning. The animation engine redistributes the timing automatically so the element travels at constant speed along the path.

This is particularly useful for path animation where the curve has varying tightness — without roving, tight curves are traversed quickly and loose curves slowly (because the path distance is the same but the shape is different).

---

## 14. Looping & Cycle Animations

### 14.1 Playback Loop Toggle

The timeline transport includes a Loop toggle that plays the animation in a continuous loop during preview. This is a preview-only feature and does not affect export.

### 14.2 In and Out Points

**Work Area:** The timeline supports setting an In Point and Out Point that define the active preview range.

- `I` — set the In Point at the current playhead position
- `O` — set the Out Point at the current playhead position

With a work area defined, loop playback plays only within the In–Out range. Export also uses the work area boundaries as the default export range (can be overridden in the export dialog).

### 14.3 Loop Expressions

To make a property animate in an infinite loop using expressions:

```
loopOut("cycle")
```

Applied to a property, this makes the animation between the last keyframe and the first keyframe cycle infinitely after the last keyframe.

```
loopOut("pingpong")
```

Plays the animation forward then backward, then forward again — bouncing back and forth.

```
loopIn("cycle")
```

The cycle plays before the first keyframe as well.

### 14.4 Manual Loop Setup

Without expressions, a loop can be set up manually by:
1. Animating from frame 0 to frame N
2. Creating identical keyframes at frame N as at frame 0 (same values)
3. The animation naturally cycles if the export includes the exact frame count

The critical detail: the last frame must not equal the first frame in the export output (there would be a duplicate frame at the loop point). Set the export to end one frame before the repeated keyframe.

---

## 15. Playback & Preview

### 15.1 Transport Controls

| Control | Shortcut | Function |
|---|---|---|
| Play / Pause | `Space` | Toggle playback |
| Stop | `Shift+Space` | Stop and return to In Point |
| Previous Frame | `Left Arrow` | Step back 1 frame |
| Next Frame | `Right Arrow` | Step forward 1 frame |
| Previous Keyframe | `J` | Jump to previous keyframe on selected element |
| Next Keyframe | `;` | Jump to next keyframe on selected element |
| Go to Start | `Home` | Jump to frame 0 |
| Go to End | `End` | Jump to last frame |
| Toggle Loop | `Ctrl+L` | Enable/disable looping playback |

### 15.2 Preview Quality

Preview Quality affects only the real-time playback display — not the final export.

| Setting | Canvas Resolution | When to Use |
|---|---|---|
| Full | 100% of canvas | Final review, simple compositions |
| Half | 50% of canvas | Standard editing on complex scenes |
| Quarter | 25% of canvas | Fast preview on very complex compositions |

Change via the quality dropdown in the transport bar.

### 15.3 Frame Rate Indicator

The transport bar shows the current **live playback frame rate** (FPS). If this number is significantly below the project's target frame rate, the composition is too complex for real-time preview at the current quality setting. Reduce preview quality or simplify the composition.

### 15.4 Preview Cache

FlashFX renders and caches frames as playback occurs. A green bar in the timeline ruler shows which frames have been cached. Cached frames play back smoothly at the full project frame rate regardless of composition complexity.

**Manual pre-render:** `Animation → Pre-render Preview` caches all frames in the work area in the background before playback begins. On complex compositions, pre-rendering produces smooth full-speed playback at the cost of initial processing time.

**Clear cache:** `Animation → Clear Preview Cache` — frees the memory used by cached frames.

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
