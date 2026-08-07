# FlashFX — 02 · Manipulating Shapes
### Complete Reference · Alpha Release

---

## Table of Contents

1. [Shape Primitives](#1-shape-primitives)
2. [The Pen Tool & Custom Paths](#2-the-pen-tool--custom-paths)
3. [Transform Operations](#3-transform-operations)
4. [Vertex & Path Editing](#4-vertex--path-editing)
5. [Boolean Operations](#5-boolean-operations)
6. [The Material System](#6-the-material-system)
7. [Fill Types](#7-fill-types)
8. [Stroke Properties](#8-stroke-properties)
9. [Shadows & Glow](#9-shadows--glow)
10. [Blend Modes](#10-blend-modes)
11. [Shape-Level Effects](#11-shape-level-effects)
12. [Groups & Nested Composition](#12-groups--nested-composition)
13. [Alignment & Distribution](#13-alignment--distribution)
14. [Z-Order Management](#14-z-order-management)

---

## 1. Shape Primitives

FlashFX provides a complete set of vector primitive tools. Every shape drawn with these tools is fully editable — vertices, curves, and all properties remain accessible after creation.

### 1.1 Rectangle Tool (`R`)

Draws rectangular shapes, including perfect squares.

**Drawing:**
- Click and drag to draw a rectangle
- Hold `Shift` while dragging to constrain to a perfect square
- Hold `Alt` while dragging to draw from the center point outward

**Properties unique to rectangles:**

**Corner Radius**
Each corner of a rectangle can have an independent radius applied, creating rounded corners. Values are set in pixels.

- **Uniform radius** — a single value applies equally to all four corners
- **Independent corners** — click the chain-link icon to unlink corners and set each individually: top-left, top-right, bottom-right, bottom-left
- Radius range: 0px (sharp corner) to half the shortest side (maximum circle, produces a "stadium" or "pill" shape)
- Corner radius is animatable — it can be keyframed to change over time (e.g., morphing from sharp to rounded)

**Corner Style**
Three styles are available for rounded corners:

| Style | Description |
|---|---|
| **Round** | Standard circular arc (default) |
| **Smooth** | iOS-style continuous curvature — a "squircle" curve that flows more naturally from the straight edge into the curve |
| **Bevel** | A straight angled cut rather than a curve |

**Dimensions**
Width and height are editable numerically in the Properties Panel at any time. Changing dimensions by typing values does not require the Rectangle tool to be active — use the Selection tool and edit in the Properties Panel.

### 1.2 Circle / Ellipse Tool (`C`)

Draws ellipses, including perfect circles.

**Drawing:**
- Click and drag to draw an ellipse
- Hold `Shift` to constrain to a perfect circle
- Hold `Alt` to draw from the center outward

**Arc and Sweep Properties**
A circle/ellipse can be configured as a partial arc rather than a complete ring:

- **Start Angle** — the angle at which the arc begins (0° = 3 o'clock, clockwise)
- **End Angle** — the angle at which the arc ends
- **Arc Mode:**
  - **Open** — an open arc (like a Pac-Man mouth shape at certain angles)
  - **Chord** — the two ends of the arc are connected by a straight line
  - **Pie** — the two ends connect back to the center, like a pie slice

Arc start and end angles are both animatable, enabling animated progress indicators, countdown rings, and loading spinners without any external configuration.

**Inner Radius (Donut Mode)**
Setting an inner radius creates a donut/ring shape. The inner radius defines the hollow center as a proportion of the outer radius (0 = solid, 1 = no shape).

### 1.3 Star & Polygon Tool (`P`)

Generates regular polygons and multi-pointed star shapes.

**Polygon Mode:**
- **Sides** — the number of sides (3 = triangle, 4 = square, 6 = hexagon, etc.)
- Minimum: 3 sides. No enforced maximum.
- The polygon is always regular (all sides equal, all angles equal)

**Star Mode:**
- **Points** — the number of star points (minimum: 3)
- **Outer Radius** — the distance from the center to the outer points
- **Inner Radius** — the distance from the center to the inner indentations between points. This controls the "sharpness" of the star:
  - Inner radius close to outer radius = shallow, fat star
  - Inner radius very small relative to outer radius = sharp, spike-like star

**Smoothing**
A smoothing parameter rounds the corners at both the inner and outer vertices of the star. At maximum smoothing, a star becomes a lobed organic shape rather than a geometric star.

Both inner radius and smoothing values are animatable, enabling fluid morphing effects.

### 1.4 Line Tool (`L`)

Draws straight line segments.

**Properties:**
- **Start and End points** — absolute X/Y coordinates
- **Stroke Weight** — the visual width of the line in pixels (lines have no fill by default)
- **Cap Style:**
  - **Butt** — the line ends exactly at the endpoint coordinate, with no extension
  - **Round** — the line ends with a semicircular cap extending beyond the endpoint
  - **Square** — the line ends with a flat square cap extending beyond the endpoint by half the stroke width

Lines can have the same material properties (including gradient strokes) as any other shape. They can also be given arrowheads via the stroke settings.

**Arrow Heads:**
- **Start Cap** — adds an arrowhead or decorative cap to the start point
- **End Cap** — adds an arrowhead or decorative cap to the end point
- Cap styles: Arrow, Filled Arrow, Circle, Square, Diamond

**Dashed Lines:**
Lines can be converted to dashed strokes:
- **Dash Length** — the length of each dash segment in pixels
- **Gap Length** — the space between dashes in pixels
- **Dash Offset** — shifts the dash pattern along the stroke, useful for animated "marching ants" effects when keyframed

---

## 2. The Pen Tool & Custom Paths

The Pen tool (`B`) creates custom bezier paths — arbitrary closed or open shapes defined by user-placed anchor points and their associated control handles.

### 2.1 Anchor Points

Anchor points are the nodes that define the path. The path passes through every anchor point. Between anchor points, the path is shaped by the bezier control handles attached to each anchor.

**Creating Anchor Points:**
- Click on the canvas to place a **corner point** (no curve at this anchor)
- Click and drag to place a **smooth point** (curved path at this anchor — the drag direction sets the initial handle direction)

**Anchor Point Types:**

| Type | Description |
|---|---|
| **Corner** | No curve; the path changes direction abruptly at this point |
| **Smooth** | The two handles are colinear (opposite each other); the path flows smoothly through the point |
| **Asymmetric** | The two handles point in opposite directions but can have independent lengths |
| **Disconnected** | Each handle moves independently, creating a cusp (sharp direction change with a curve) |

**Converting Point Types:**
Alt+click an anchor point to toggle between Corner and Smooth. Alt+drag a handle to convert to an Asymmetric or Disconnected point.

### 2.2 Bezier Handles

Each smooth anchor point has two control handles: an **in-handle** (controlling the curve arriving at the point) and an **out-handle** (controlling the curve leaving the point).

- Handles appear as small circular grips connected to the anchor point by a thin line
- Dragging a handle changes the curve on the corresponding side of the anchor
- For smooth points, moving one handle automatically mirrors the opposite handle's angle (but not length)
- For asymmetric points, moving one handle does not affect the other

**Handle Length:**
Longer handles produce more gradual curves. Shorter handles produce tighter curves that change direction more quickly.

### 2.3 Closing Paths

A path can be **open** (the first and last anchor points are not connected) or **closed** (the first and last points connect, forming an enclosed shape).

- Click on the first anchor point while drawing to close the path
- Press `Escape` to finish the path without closing it (leaving it open)
- Open paths can be given a fill — the fill is applied as if a straight line connected the two open endpoints

### 2.4 Editing Existing Paths

Once a path is created, it can be edited at any time using the **Path Edit mode**, activated by:
- Double-clicking a path with the Selection tool
- Pressing `Enter` while a path is selected

In Path Edit mode:
- All anchor points become visible and selectable
- Anchor points can be moved by dragging
- New anchor points can be added by clicking on any segment of the path
- Existing anchor points can be deleted by selecting them and pressing `Delete`
- Handles are visible and adjustable

Press `Escape` or `V` to exit Path Edit mode and return to the Selection tool.

---

## 3. Transform Operations

Transforms change the position, size, rotation, or skew of an element. All transforms are applied relative to the element's **anchor point** (also called the transform origin).

### 3.1 The Transform Origin (Anchor Point)

The anchor point is the pivot for all rotation and scale operations. By default it is at the geometric center of the element.

**Moving the Anchor Point:**
- In the Properties Panel, the anchor point is represented by a 3×3 grid of nine possible positions (top-left, top-center, top-right, center-left, center, center-right, bottom-left, bottom-center, bottom-right). Click any of the nine positions to snap the anchor to that location.
- For custom anchor point positions: enable "Custom Anchor" in the Properties Panel and enter X/Y offsets from the element's center
- In Path Edit mode, the anchor point appears as a crosshair and can be dragged to any position, including outside the element's bounds

**Animation Implications:**
Changing the anchor point after animation has been set will affect how rotation and scale animations behave. Always set the anchor point before keyframing rotational or scale animation.

### 3.2 Position

Position is the X/Y coordinate of the element's anchor point relative to the canvas origin (top-left = 0,0).

- **X** — horizontal position (positive = right)
- **Y** — vertical position (positive = down, following screen coordinate convention)

**Numeric Input:** Click either the X or Y field in the Properties Panel and type a value. Press `Tab` to move to the next field; press `Enter` to confirm.

**Relative Input:** Prefix a value with `+` or `-` to enter a relative change. Example: typing `+50` in the X field moves the element 50px to the right of its current position.

**Nudging:** Arrow keys move the selected element(s) by 1px per keypress. `Shift+Arrow` moves by 10px per keypress.

### 3.3 Dimensions (Width & Height)

**Free Resize:** Drag any of the eight resize handles at the corners and edges of the selection bounding box.

**Proportional Resize:** Hold `Shift` while dragging a corner handle to maintain the aspect ratio.

**Resize from Center:** Hold `Alt` while dragging a handle to resize symmetrically from the anchor point.

**Numeric Input:** Enter exact values in the W (width) and H (height) fields in the Properties Panel.

**Maintain Aspect Ratio Lock:** The chain-link icon between W and H locks proportional scaling when numeric values are entered. When locked, changing one dimension automatically updates the other.

### 3.4 Rotation

Rotation is applied around the element's anchor point in degrees.

**Free Rotation:** Hover outside the selection bounding box until the rotation cursor appears (two arrows forming a circle), then click and drag.

**Constrained Rotation:** Hold `Shift` while rotating to snap to 15° increments.

**Numeric Input:** Enter a value in the Rotation field. Positive values rotate clockwise; negative values rotate counter-clockwise. Values above 360° or below -360° are accepted (they represent multiple full rotations, relevant for animation).

### 3.5 Scale

Scale transforms the element proportionally or non-proportionally.

**Scale X / Scale Y:** Independent horizontal and vertical scale values, expressed as percentages (100% = original size).

**Non-Uniform Scale:** Changing X and Y scale independently stretches or compresses the element along one axis — useful for squash-and-stretch animation effects.

**Negative Scale (Flip):**
- Scale X = -100% mirrors the element horizontally
- Scale Y = -100% mirrors the element vertically

This is equivalent to the Flip Horizontal / Flip Vertical commands.

### 3.6 Skew

Skew applies a shear transformation along the X or Y axis, creating a parallelogram-like distortion.

**Skew X** — shears horizontally. Positive values lean the element to the right at the top.
**Skew Y** — shears vertically. Positive values lean the element downward on the left side.

Skew is expressed in degrees. Range: -85° to 85°.

### 3.7 Opacity

The element-level opacity setting controls the overall transparency of the entire element — all fill layers, stroke, and shadow composited together — before the element is blended with the layers below.

Range: 0% (completely transparent) to 100% (fully opaque).

Element opacity is distinct from fill layer opacity (which controls only that fill layer) and from blend mode (which controls how the element interacts with what is beneath it).

---

## 4. Vertex & Path Editing

### 4.1 Accessing Vertex Edit Mode

Double-click any vector shape (rectangle, ellipse, star, or custom path) to enter Vertex Edit mode. The selection changes from a bounding box to a point-level view showing all vertices.

For primitives (rectangle, ellipse, star), entering Vertex Edit mode converts the parametric shape into a raw path. This is a **destructive operation for parametric properties** — corner radius, arc angles, and star parameters are lost and replaced by explicit anchor points. A confirmation dialog warns before the conversion.

### 4.2 Selecting Vertices

- Click a single vertex to select it
- Click and drag in empty space to marquee-select multiple vertices
- `Shift+click` to add or remove individual vertices from the selection
- `Ctrl+A` in Vertex Edit mode to select all vertices

### 4.3 Moving Vertices

- Drag selected vertices to move them freely
- Use arrow keys for 1px precision nudging
- `Shift+arrow` for 10px nudging
- Hold `Shift` while dragging to constrain movement to the horizontal or vertical axis

### 4.4 Adding & Removing Vertices

**Adding:** Click anywhere on a path segment (between two existing vertices) to insert a new vertex at that point. The new vertex is a smooth point that does not alter the shape — it preserves the existing curve.

**Removing:** Select a vertex and press `Delete`. The path segment between the deleted vertex's neighbors is smoothly reconnected.

**Simplify Path:** A path simplification function reduces the total vertex count while preserving the visual appearance of the path as closely as possible. Accessed via `Path → Simplify`. A tolerance slider controls how aggressively vertices are removed.

### 4.5 Handle Editing

With a smooth vertex selected, its bezier handles appear. Drag either handle to modify the curve.

**Mirror Handles:** Hold `Alt` while dragging a handle to break the mirror relationship, converting to an Asymmetric point.

**Retract Handle:** Double-click a handle to retract it (set length to zero), effectively converting the smooth vertex to a corner vertex.

**Extend Handle:** Alt+drag from an anchor point that has no handle to extend a handle and convert from corner to smooth.

### 4.6 Path Operations on Vertices

**Break Path at Point:** Select a vertex on a closed path and use `Path → Break at Point` to open the path at that vertex. The path remains otherwise intact but is no longer closed.

**Join Open Endpoints:** Select the two endpoints of an open path and use `Path → Join Points` to connect them with a straight segment, closing the path.

**Align Handles:** With multiple smooth vertices selected, `Path → Align Handles → Horizontal / Vertical` rotates all selected handles to align with a common axis.

---

## 5. Boolean Operations

Boolean operations combine two or more shapes into a single path using set theory logic. They are applied to the selected shapes in Z-order (the top shape operates on those below it).

To apply a boolean operation, select two or more shapes and choose from `Path → Boolean Operations`:

| Operation | Icon | Result |
|---|---|---|
| **Unite** | ∪ | Merges all selected shapes into a single outline, removing internal overlapping edges |
| **Subtract** | − | The top shape cuts its silhouette out of the shape below it |
| **Intersect** | ∩ | Keeps only the area where the shapes overlap; all non-overlapping area is removed |
| **Exclude** | ⊕ | Keeps only the non-overlapping areas; the intersection is removed (inverse of Intersect) |
| **Divide** | ÷ | Splits all shapes at their intersection boundaries, producing multiple separate shapes |

**Non-Destructive Boolean Groups:**
Boolean operations in FlashFX are applied as **live operations** rather than permanently destructive merges. The original component shapes are retained inside a Boolean Group and can be re-edited at any time. Double-click the Boolean Group to enter the group and edit the component shapes; the boolean result updates in real time as you edit.

To permanently flatten a Boolean Group into a simple path: `Path → Flatten Boolean Group`.

---

## 6. The Material System

The material system is the fill and appearance engine for all vector shapes. Rather than a single flat fill color, each shape can have a **material stack** — an ordered list of fill layers that are composited together to produce the final surface appearance.

### 6.1 The Material Stack

The material stack appears in the Properties Panel under the "Fill" section. It lists all fill layers from top to bottom. The top layer renders on top of layers below it.

**Adding a Fill Layer:** Click the `+` button in the Fill section.

**Removing a Fill Layer:** Click the `×` button on any fill layer row.

**Reordering Fill Layers:** Drag the grab handle (⠿) on any fill layer row to change its position in the stack.

**Layer Visibility:** Each fill layer has an eye icon that toggles its visibility independently of the others.

**Layer Opacity:** Each fill layer has its own opacity slider (0%–100%), controlling how much that layer contributes to the final composited result.

**Layer Blend Mode:** Each fill layer has its own blend mode, controlling how it interacts with the layers below it in the stack. (See Section 10 for blend mode details.)

---

## 7. Fill Types

Each fill layer in the material stack is assigned one fill type. The type can be changed at any time.

### 7.1 Solid Color Fill

A flat uniform color across the entire element. The simplest and most performant fill type.

Properties:
- Color (via the color picker)
- Opacity

### 7.2 Linear Gradient Fill

A smooth color transition along a straight axis.

**Gradient Bar:** Displays the current gradient. Click anywhere on the bar to add a new color stop. Click an existing stop to select it and edit its color. Drag stops to reposition them.

**Color Stops:** Each stop has:
- **Color** — the color at this point in the gradient
- **Position** — expressed as a percentage (0% = start, 100% = end)
- **Opacity** — the alpha at this stop, independent of the color's alpha

**Gradient Angle:** The direction of the gradient in degrees. 0° = left to right. 90° = top to bottom. Animatable.

**Gradient Start and End Points:** Alternatively, the gradient can be positioned by setting explicit X/Y start and end coordinates relative to the shape's bounding box. This allows gradients that don't span the full element width/height.

**Gradient Repeat Mode:**
- **None** — gradient transitions once from start to end
- **Repeat** — the gradient tiles beyond its start/end points
- **Reflect** — the gradient tiles alternately mirrored

### 7.3 Radial Gradient Fill

A smooth color transition radiating outward from a center point.

**Center Point:** X/Y position of the gradient origin within the element's bounding box (expressed as percentages: 50%/50% = center). Animatable.

**Radius X / Radius Y:** The horizontal and vertical extent of the gradient. When equal, the gradient is circular; when different, it is elliptical. Animatable.

**Color Stops:** Same as linear gradient — any number of stops with independent colors and positions.

### 7.4 Angular (Conic) Gradient Fill

A gradient that sweeps around a center point like a color wheel.

**Center Point:** The pivot of the sweep.

**Start Angle:** The angle at which the first color stop begins.

**Color Stops:** Distributed around 360°.

Conic gradients are useful for creating color wheel graphics, pie chart appearances, and radially swept color effects.

### 7.5 Diamond Gradient Fill

An extension of the radial gradient that produces a diamond/square radial pattern rather than a circular one. Useful for geometric, architectural, or stylized graphic treatments.

### 7.6 Texture Fill

Applies a procedurally generated texture as a fill layer.

**Available Texture Types:**

| Texture | Description |
|---|---|
| Noise | Grayscale or color noise at configurable frequency and scale |
| Grain | Fine photographic film grain |
| Concrete | Rough concrete-like surface |
| Sand | Granular sandy texture |
| Woven | Fabric weave pattern |
| Brushed Metal | Linear metallic texture with directionality |
| Watercolor | Soft organic wash texture |
| Halftone | Regular dot halftone pattern |

**Texture Parameters (common across types):**
- **Scale** — size of the texture pattern (smaller values = finer texture)
- **Opacity** — overall transparency
- **Color Mode** — Monochrome, Color-Tinted, or Full Color (texture-dependent)
- **Seed** — randomization seed. Changing the seed produces a different random variation of the same texture type
- **Blend Mode** — how the texture layer composites with layers beneath it in the material stack

Texture fills are procedural and do not add to the project's file size like imported image textures would.

### 7.7 Pattern Fill

Applies a repeating geometric pattern.

**Pattern Types:**
- Dots (circular dots in a grid)
- Horizontal Lines
- Vertical Lines
- Diagonal Lines (45°, -45°)
- Grid (crossing lines)
- Checker
- Triangle Grid
- Hexagonal Grid

**Pattern Parameters:**
- **Size** — spacing between pattern elements
- **Stroke Weight** (for line patterns) — thickness of lines
- **Dot Radius** (for dot patterns) — radius of each dot
- **Foreground Color** — color of the pattern elements
- **Background Color** — color of the space between elements (can be fully transparent)
- **Rotation** — rotates the entire pattern, independent of shape rotation
- **Offset X / Offset Y** — shifts the pattern within the shape bounds

---

## 8. Stroke Properties

The stroke is an outline rendered along the path of a shape. Stroke settings are configured independently of the fill layers.

### 8.1 Enabling Stroke

Toggle the stroke on or off using the Stroke toggle in the Properties Panel. Each shape can have one stroke.

### 8.2 Stroke Color

The stroke color is configured via the same color picker as fills. It supports solid color only (not gradient) in the base configuration. For gradient strokes, see Section 8.6.

### 8.3 Stroke Weight

The width of the stroke in pixels. Range: 0.1px to 500px.

### 8.4 Stroke Alignment

Controls where the stroke is rendered relative to the path:

| Alignment | Description |
|---|---|
| **Center** (default) | The stroke is centered on the path — half inside, half outside the shape boundary |
| **Inside** | The entire stroke width is inside the shape boundary |
| **Outside** | The entire stroke width is outside the shape boundary |

Stroke alignment affects how the shape's apparent visual size compares to its defined geometry, which is important when precise positional accuracy matters.

### 8.5 Stroke Cap and Join

**Cap Style** (for open paths and line segments):
- **Butt** — flat ends at the exact path endpoint
- **Round** — semicircular ends extending beyond the endpoint
- **Square** — flat square ends extending beyond the endpoint by half the stroke width

**Join Style** (at corners where two segments meet):
- **Miter** — sharp pointed corner; a Miter Limit controls how far the point can extend before it is auto-converted to a Bevel
- **Round** — rounded corner at the junction
- **Bevel** — a flat cut across the outer corner

### 8.6 Dash Settings

Converts the stroke to a dashed line:

- **Dash Length** — length of dash segments in pixels
- **Gap Length** — length of gaps between dashes in pixels
- **Additional Dash/Gap pairs** — up to three dash/gap pairs can be defined for complex dash patterns (e.g., long-dash short-dash patterns)
- **Dash Offset** — shifts the pattern along the stroke. Animating this value creates a "marching ants" animation effect.
- **Dash Cap** — independently sets the cap style for the ends of each dash segment

### 8.7 Gradient Stroke

A stroke can be filled with a gradient rather than a solid color. When enabled:

- **Along Stroke** — the gradient runs from the start of the path to the end (start point = first color stop, end point = last color stop)
- **Across Stroke** — the gradient runs perpendicular to the stroke direction (inner edge = first color stop, outer edge = last color stop)

### 8.8 Stroke on Text

The stroke system applies identically to text elements. See the Text documentation (Document 03) for typography-specific stroke behavior.

---

## 9. Shadows & Glow

### 9.1 Drop Shadow

A shadow cast behind the element. Simulates a light source above-left by default.

**Properties:**
- **Color** — shadow color. Does not need to be black; colored shadows are fully supported.
- **Opacity** — shadow transparency (0%–100%)
- **Offset X** — horizontal distance from the element to the shadow (positive = right)
- **Offset Y** — vertical distance from the element to the shadow (positive = down)
- **Blur Radius** — the softness of the shadow edge. 0 = hard edge. Larger values = softer, more diffused shadow.
- **Spread** — expands or contracts the shadow before the blur is applied. Positive spread makes the shadow larger than the element.

All shadow properties are animatable.

**Multiple Shadows:** A shape can have multiple drop shadows simultaneously, each with independent settings. Click the `+` button in the Shadow section to add additional shadows.

### 9.2 Inner Shadow

Identical properties to Drop Shadow, but the shadow is cast inside the shape rather than behind it. Creates a concave, pressed-in appearance.

Inner shadows interact with the element's fill layers — the shadow is composited on top of the fills but inside the shape boundary.

### 9.3 Outer Glow

A soft halo of light radiating outward from the element.

**Properties:**
- **Color** — glow color. Bright colors against dark backgrounds produce the strongest glow effect.
- **Opacity** — glow transparency
- **Spread** — how far the glow extends before the blur begins
- **Blur Radius** — softness of the glow falloff
- **Blend Mode** — how the glow composites with the layers beneath the element. Screen or Add produce luminous light effects; Normal produces a colored halo.

### 9.4 Inner Glow

A soft glow emanating from the inner edge of the shape boundary inward.

Properties identical to Outer Glow. Inner glow can simulate edge lighting or subsurface light in stylized compositions.

---

## 10. Blend Modes

Blend modes control how a shape composites with the content below it in the layer stack. They are set in the Properties Panel under "Compositing."

### 10.1 Normal Group (Default)

| Mode | Description |
|---|---|
| **Normal** | Standard alpha compositing. The element overlays content below according to its opacity. |
| **Dissolve** | At less than 100% opacity, pixels alternate randomly between fully opaque and fully transparent, creating a dithered transparency effect. |

### 10.2 Darken Group

| Mode | Description |
|---|---|
| **Darken** | Keeps only the darker pixels between the element and what is beneath it. |
| **Multiply** | Multiplies color values. Always produces a darker result. White is neutral (no effect); black produces black. |
| **Color Burn** | Increases contrast and darkens the base by reflecting the blend color. Stronger effect than Multiply. |
| **Linear Burn** | Darkens by decreasing brightness. Darker than Multiply in most cases. |
| **Darker Color** | Compares the full pixel values and keeps whichever is darker. |

### 10.3 Lighten Group

| Mode | Description |
|---|---|
| **Lighten** | Keeps only the lighter pixels between the element and what is beneath it. |
| **Screen** | Inverts, multiplies, then re-inverts. Always produces a lighter result. Black is neutral; white produces white. |
| **Color Dodge** | Brightens the base by reflecting the blend color. Strong highlight effect. |
| **Linear Dodge (Add)** | Adds color values together. Strongly brightening; can quickly saturate to white. |
| **Lighter Color** | Compares full pixel values and keeps whichever is lighter. |

### 10.4 Contrast Group

| Mode | Description |
|---|---|
| **Overlay** | Multiplies dark areas and Screens light areas. Increases contrast. 50% gray is neutral. |
| **Soft Light** | Similar to Overlay but gentler and less contrasty. |
| **Hard Light** | Similar to Overlay but the blend color controls the effect rather than the base. |
| **Vivid Light** | Burns or dodges by adjusting contrast depending on tone. Very high contrast. |
| **Linear Light** | Burns or dodges by adjusting brightness. Even more extreme than Vivid Light. |
| **Pin Light** | Replaces colors depending on the blend color's tone. Produces posterized-looking results. |
| **Hard Mix** | Reduces all colors to pure primaries (red, green, blue, cyan, magenta, yellow, white, or black). |

### 10.5 Inversion Group

| Mode | Description |
|---|---|
| **Difference** | Subtracts one color from the other. White inverts the base; black has no effect. |
| **Exclusion** | Similar to Difference but lower contrast. 50% gray produces no change. |
| **Subtract** | Subtracts blend color from base. Can produce strongly darkened results. |
| **Divide** | Divides base color by blend color. Produces very bright, often over-exposed results. |

### 10.6 Component Group

| Mode | Description |
|---|---|
| **Hue** | Applies the hue of the blend to the luminosity and saturation of the base. |
| **Saturation** | Applies the saturation of the blend to the hue and luminosity of the base. |
| **Color** | Applies both hue and saturation of the blend to the base. Useful for colorization effects. |
| **Luminosity** | Applies the luminosity of the blend to the hue and saturation of the base. Inverse of Color. |

---

## 11. Shape-Level Effects

Beyond fills and strokes, additional effects can be applied to the shape as a whole.

### 11.1 Blur

A blur applied to the entire element as a post-compositing effect.

**Gaussian Blur**
The standard diffuse blur. The **Radius** parameter controls spread (0 = no blur, larger = more blur).

**Directional / Motion Blur**
Blur along a specific axis.
- **Angle** — the direction of the blur (0° = horizontal)
- **Distance** — how far the blur extends along the angle direction

**Radial Blur**
Blur that radiates outward from a center point, simulating zoom or radial spin.
- **Center X / Y** — the origin of the radial effect
- **Strength** — how far the blur extends

**Zoom Blur**
Similar to Radial but creates a perspective-zoom effect (stronger near edges, converging to center).

### 11.2 Clip Path (Mask)

A clip path restricts the visible area of a shape to the outline of another shape or group.

**Setting a Clip Path:**
1. Place the clip shape on top of the shape to be clipped in the layer stack
2. Select both (or the clip shape and the target group)
3. `Layer → Create Clip Path`

The clip shape defines the visible region; the target is visible only within that region.

Clip paths can be animated. Animating the clip shape's position, scale, or form produces reveal and wipe animation effects.

### 11.3 Alpha Mask

Distinct from a clip path — an alpha mask uses the luminosity or alpha of one layer to control the transparency of another, enabling feathered edges, soft transitions, and gradient-driven reveals.

Setting up an alpha mask:
1. Create the mask layer (a gradient or texture shape acts as a soft mask; a solid shape acts like a clip path)
2. Position the mask layer directly above the target layer in the stack
3. Select the target layer and set its **Mask Mode** to "Alpha" or "Luminance"

**Alpha mode** — the mask layer's alpha channel directly controls the target's transparency.
**Luminance mode** — the mask layer's brightness controls the target's transparency. White = fully visible, black = fully transparent, grays = proportional transparency.

---

## 12. Groups & Nested Composition

### 12.1 Creating Groups

Select two or more elements and press `Ctrl+G` (or `Layer → Group`). The selected elements are enclosed in a Group container. The group appears as a single layer in the Layer Panel with an expand arrow to reveal its members.

### 12.2 Group Properties

Groups have their own transform properties (position, rotation, scale, opacity) that operate on all members as a unit. Individual member properties are preserved and operate independently of the group transform — they compose.

**Example:** A group containing a circle at position (100, 50) is moved to position (200, 0) at the group level. The circle's actual rendered position is (300, 50) — the sum of group and member transforms.

### 12.3 Group Blend Mode

A group can have its own blend mode and opacity. When a group has a blend mode other than Normal, the group is composited as a single unit first, then blended with the layers below the group. This is distinct from each member having its own blend mode.

**Pass-through mode:** When a group's blend mode is set to "Pass-through," the group does not composite internally — each member blends directly with the layers below the group as if the group didn't exist. This is the default for groups.

**Isolated mode:** When a group has any blend mode other than Pass-through (including Normal), it is **isolated** — members blend only with each other inside the group, not with layers below. The flattened result of the group then blends with lower layers.

### 12.4 Entering and Exiting Groups

To edit elements inside a group without ungrouping:
- **Double-click** the group to enter it. The rest of the canvas dims. The Properties Panel and Layer Panel now show only the group's members.
- Press **Escape** or click outside the group to exit back to the top level.

### 12.5 Nested Groups

Groups can be nested inside other groups to any depth. This is useful for hierarchical animations — animating a "shoulder" group that contains an "upper arm" group that contains a "forearm" group, each with its own rotation pivot.

### 12.6 Ungrouping

`Ctrl+Shift+G` dissolves the group. All members return to the parent level (or the parent group if ungrouping a nested group). All individual properties and keyframes are preserved.

---

## 13. Alignment & Distribution

### 13.1 Alignment

Select two or more elements, then use the Alignment controls in the Properties Panel (visible when multiple elements are selected) to align them relative to each other or to the canvas.

**Align to Selection (default):** The alignment boundary is the bounding box of all selected elements combined.

**Align to Canvas:** The alignment boundary is the canvas itself. Useful for centering an element on the canvas.

**Align to Key Object:** One element in the selection is designated the key object; all others align to it without it moving. Click an element while it is already selected to make it the key object (it will show a thicker highlight border).

| Alignment Action | Description |
|---|---|
| Align Left Edges | Moves all elements so their left edges align with the leftmost element (or left edge of canvas) |
| Align Horizontal Centers | Aligns all elements to the same horizontal center |
| Align Right Edges | Aligns all elements to the same right edge |
| Align Top Edges | Aligns all elements to the same top edge |
| Align Vertical Centers | Aligns all elements to the same vertical center |
| Align Bottom Edges | Aligns all elements to the same bottom edge |

### 13.2 Distribution

Distribution spaces elements evenly. Select three or more elements.

| Distribution Action | Description |
|---|---|
| Distribute Horizontally | Equal horizontal spacing between elements |
| Distribute Vertically | Equal vertical spacing between elements |
| Distribute Horizontal Spacing | Equal gap between element edges (as opposed to equal center-to-center distance) |
| Distribute Vertical Spacing | Equal gap between top/bottom edges |

---

## 14. Z-Order Management

Z-order (stacking order) determines which elements appear on top of which others. Higher Z = closer to the viewer = rendered on top.

### 14.1 Z-Order Commands

| Action | Shortcut | Description |
|---|---|---|
| Bring to Front | `Ctrl+Shift+]` | Moves the element above all others |
| Bring Forward | `Ctrl+]` | Moves the element one step up in the stack |
| Send Backward | `Ctrl+[` | Moves the element one step down in the stack |
| Send to Back | `Ctrl+Shift+[` | Moves the element below all others |

### 14.2 Layer Panel Reordering

Drag any layer row in the Layer Panel to reposition it in the stack. Drag into a group to move the element inside the group. Drag out of a group to move it to the parent level.

### 14.3 Z-Order and Animation

Z-order can be animated. Discrete keyframes on the Z-order property cause an element to jump instantly between stack positions at specific points in time, enabling effects like elements passing behind or in front of each other at controlled moments.

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
