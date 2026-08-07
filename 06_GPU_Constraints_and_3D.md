# FlashFX — 06 · GPU Constraints & 3D Features
### Complete Reference · Alpha Release

---

## Table of Contents

1. [The Browser Rendering Environment](#1-the-browser-rendering-environment)
2. [WebGL Architecture in FlashFX](#2-webgl-architecture-in-flashfx)
3. [GPU Memory Management](#3-gpu-memory-management)
4. [Blend Mode Constraints](#4-blend-mode-constraints)
5. [Filter & Effect GPU Costs](#5-filter--effect-gpu-costs)
6. [3D Transform System](#6-3d-transform-system)
7. [Perspective & Camera Simulation](#7-perspective--camera-simulation)
8. [Z-Depth & Layer Ordering in 3D](#8-z-depth--layer-ordering-in-3d)
9. [3D Lighting Model](#9-3d-lighting-model)
10. [GPU Tier Detection & Adaptive Quality](#10-gpu-tier-detection--adaptive-quality)
11. [Performance Profiling Tools](#11-performance-profiling-tools)
12. [Known Constraints by Browser](#12-known-constraints-by-browser)
13. [Optimization Strategies for 3D Compositions](#13-optimization-strategies-for-3d-compositions)
14. [Exporting 3D Compositions](#14-exporting-3d-compositions)

---

## 1. The Browser Rendering Environment

FlashFX renders entirely within a web browser. This means the rendering pipeline operates within the constraints of web graphics APIs rather than direct GPU access.

### 1.1 What This Means

Unlike desktop applications (After Effects, Cinema 4D, DaVinci Resolve) that communicate directly with the GPU via operating system drivers, FlashFX works through:

1. **WebGL 2.0** — the primary GPU API for compositing, shader effects, and 3D transforms
2. **Canvas 2D API** — used for certain 2D compositing operations not exposed efficiently in WebGL
3. **CSS Compositing** — used for UI-level effects but not for canvas content rendering

This creates a set of fundamental constraints that do not exist in desktop applications:

- No direct framebuffer access
- No shared memory between CPU and GPU
- Texture size limits enforced by the browser
- No multi-GPU support
- Shader compilation must occur at runtime within the browser sandbox

### 1.2 Why This Matters

**Memory:** GPU memory (VRAM) allocated to the browser tab is shared with all other browser graphics operations. The browser does not expose a way to query total available VRAM precisely — FlashFX uses heuristics to estimate available memory.

**Framebuffer access:** Operations that require reading back pixels from the GPU (certain blend modes, displacement maps, some filter compositing) are significantly more expensive in WebGL than in native applications because the GPU must pause, copy data, and transfer it to accessible memory.

**Shader limits:** WebGL imposes maximum sizes on shader programs (the GPU instructions used to compute effects). Very complex filter stacks may exceed these limits and must be broken into multiple rendering passes.

---

## 2. WebGL Architecture in FlashFX

### 2.1 Render Pipeline Overview

FlashFX's rendering pipeline operates as follows:

```
Scene Graph (JavaScript)
        ↓
Compositing Plan (determine draw order, blend modes, effects)
        ↓
GPU Batching (group elements that share shader programs)
        ↓
WebGL Draw Calls (submit geometry and textures to GPU)
        ↓
Framebuffer Compositing (blend layers together)
        ↓
Canvas Output (display or capture for export)
```

### 2.2 Draw Calls

Each operation that submits geometry to the GPU is a **draw call**. Fewer draw calls means less CPU-GPU communication overhead and faster rendering.

FlashFX batches elements that share:
- The same blend mode
- No intervening alpha compositing requirements
- Compatible shader programs

**Elements that break batching:**
- Any element with a non-Normal blend mode (requires isolation)
- Groups set to Isolated compositing mode
- Elements with certain filter types (require intermediate offscreen render passes)
- Transparent elements composited over other transparent elements (order-dependent)

### 2.3 Texture Upload

When an image is imported or a rasterized text/shape is generated, it is uploaded to GPU memory as a texture. This upload happens:

- Once per unique image asset
- When an asset's content changes (e.g., after a filter parameter changes)
- On session start when loading a project with embedded assets

**Texture upload is expensive.** Avoid situations where the GPU texture must be invalidated and re-uploaded on every frame (e.g., animating a filter that requires a full re-rasterize of vector content).

### 2.4 Offscreen Buffers

Certain operations require rendering to an intermediate **offscreen framebuffer** before compositing into the final output. Each offscreen buffer consumes GPU memory equal to its dimensions × 4 bytes per pixel.

**Operations requiring offscreen buffers:**
- Non-Normal blend modes (the layer must be isolated before blending)
- Blur effects (blur requires a copy of the pre-blur pixels)
- Some distortion effects (displacement needs both the target and the map simultaneously)
- Groups with isolated compositing
- Alpha masks

**Implication:** A complex composition with many elements using non-Normal blend modes or blur effects may require many simultaneous offscreen buffers. On devices with limited VRAM, this can cause:
- Rendering slowdowns
- Quality reduction (browser may de-prioritize offscreen buffer resolution)
- In extreme cases, tab crash

---

## 3. GPU Memory Management

### 3.1 VRAM Budget

FlashFX estimates an available VRAM budget based on:
- GPU tier detection (see Section 10)
- Canvas dimensions
- Browser-reported device memory hints

The VRAM budget is shown in the Performance panel (`View → Performance`).

### 3.2 Texture Memory Usage

Every image and rasterized element occupies GPU texture memory:

| Image Size | Uncompressed GPU Texture Memory |
|---|---|
| 512 × 512 | ~1 MB |
| 1920 × 1080 | ~8 MB |
| 3840 × 2160 | ~32 MB |
| 8192 × 8192 | ~256 MB |

**Key principle:** Images are stored in GPU memory at their pixel dimensions regardless of how small they appear on canvas.

### 3.3 Texture Compression

FlashFX uses **compressed texture formats** where supported by the device's GPU:

- **BC (DXT) compression** — supported on all desktop GPUs; reduces texture size by ~75%
- **ETC2 compression** — supported on mobile GPUs and some desktop GPUs
- **ASTC compression** — supported on modern mobile and Apple Silicon GPUs; best quality/size ratio

When a compressed format is available, FlashFX uploads textures in compressed form, significantly reducing VRAM usage and texture transfer time. The compression happens during the import/upload process and may take a brief moment for large images.

### 3.4 Texture Eviction

When VRAM usage approaches the budget limit, FlashFX evicts the least recently used textures from GPU memory. Evicted textures must be re-uploaded from CPU memory when they are next needed, causing a brief rendering stutter.

**Signs of texture eviction:**
- Momentary white flashes on image elements during playback
- Stuttering during scrubbing through a composition with many images

**Solutions:**
- Reduce image source resolution before import
- Reduce the number of simultaneously active large images
- Upgrade to a device with more VRAM

---

## 4. Blend Mode Constraints

### 4.1 The Framebuffer Access Problem

In native applications, implementing blend modes is straightforward — the GPU can read any previously rendered pixel directly to compute the blend result.

In WebGL, the framebuffer (the current rendering target) is **write-only by default**. Reading from it requires copying it to a readable texture, which is slow.

### 4.2 How FlashFX Handles Blend Modes

For elements using non-Normal blend modes, FlashFX uses one of two strategies:

**Strategy A — Shader Compositing (preferred):**
The already-rendered background is copied to an offscreen texture before drawing the blend mode element. The element's shader reads from this texture and computes the blend in the same draw call.

- Adds one texture copy per blend mode layer
- The copy is performed at canvas resolution (large canvases = expensive copy)
- Multiple consecutive non-Normal blend layers on different elements each add a separate copy

**Strategy B — Isolated Pass:**
The element is rendered to an offscreen buffer, then composited onto the background using a blend mode shader. This is used for complex blend modes or groups with blend modes.

- Requires a full offscreen buffer at the element's bounding box dimensions
- More memory-intensive but avoids the full-canvas texture copy

### 4.3 Blend Mode Performance Tiers

| Blend Mode | Implementation | Relative Cost |
|---|---|---|
| Normal | Native compositing | Baseline (1×) |
| Multiply, Screen, Overlay | Shader compositing | ~1.5× |
| Soft Light, Hard Light | Shader compositing | ~2× |
| Color Dodge, Burn | Shader compositing (requires per-channel computation) | ~2.5× |
| Difference, Exclusion | Shader compositing | ~2× |
| Hue, Saturation, Color, Luminosity | Shader compositing (requires HSL conversion) | ~3× |
| Any mode on group | Isolated pass | ~4×+ depending on group complexity |

These costs multiply with canvas resolution. A blend mode on a 4K canvas costs 4× more than the same blend mode on a 1080p canvas.

### 4.4 Blend Mode Limits

FlashFX warns when:
- More than 6 non-Normal blend mode elements are active simultaneously
- More than 3 blend mode groups overlap at any point in the canvas

Beyond these thresholds, rendering performance degrades significantly on mid-range hardware.

---

## 5. Filter & Effect GPU Costs

### 5.1 Per-Filter Rendering Costs

| Filter Type | GPU Cost | Notes |
|---|---|---|
| Color adjustment (brightness, contrast, curves, etc.) | Very low | Single-pass fragment shader |
| Hue rotation, saturation | Very low | Single-pass fragment shader |
| Gaussian blur (small radius) | Low | Separable kernel — two passes |
| Gaussian blur (large radius, >30px) | Medium | Multi-pass accumulation |
| Motion blur | Medium | Multi-sample accumulation |
| Radial / zoom blur | Medium-High | Many samples from center |
| Distortion (warp, ripple) | Medium | Dependent texture reads |
| Displacement map | Medium-High | Two simultaneous texture reads |
| Lens flare / god rays | High | Ray-marching algorithm |
| Mesh warp | High | Per-vertex interpolation across mesh |
| Stacked filters (any 5+) | Very high | Additive cost; each adds a rendering pass |

### 5.2 Filter Resolution Scaling

Some filters (particularly blur types) scale their cost with canvas resolution:

- At 1080p: Gaussian blur radius 50px costs approximately 1ms per frame
- At 4K: The same blur costs approximately 4ms per frame (4× resolution = 4× area)

For export at 4K, filter computation time is multiplied significantly. This is expected — export is slower than realtime, and the export renderer is not limited by realtime performance requirements.

### 5.3 Animated Filters

When a filter parameter is animated (keyframed to change over time), the GPU shader must be re-evaluated on every frame. Static filters are applied once and the result is cached as long as the underlying element does not change.

**Optimization:** Even if a filter is conceptually "constant" for a visual look, avoid placing keyframes on filter parameters unless the value actually needs to change. Keyframed filters prevent caching.

---

## 6. 3D Transform System

### 6.1 Overview

FlashFX supports pseudo-3D transforms — extending the standard 2D transform system with rotation around the X and Y axes (3D rotation), perspective projection, and Z-depth positioning. This enables:

- 3D card flip effects
- Perspective receding planes
- Multi-layer parallax depth
- 3D text and shape arrangements

FlashFX is **not a 3D engine** — there is no true 3D scene graph, no polygon meshes, no surface normals for lighting, and no global illumination. All 3D in FlashFX is applied as **CSS-style 3D transforms** to flat 2D elements.

### 6.2 Enabling 3D on an Element

3D transform properties are activated per-element:

1. Select an element
2. In the Properties Panel, toggle the "3D" switch
3. Rotation X, Rotation Y, and Z-Position properties appear

### 6.3 3D Transform Properties

**Rotation X (Pitch)**
Rotation around the horizontal axis. Tilts the element toward or away from the viewer:
- Positive values tilt the top away (looking down at the top edge)
- Negative values tilt the bottom away (looking up at the bottom edge)

**Rotation Y (Yaw)**
Rotation around the vertical axis. Rotates the element like a revolving door:
- Positive values rotate the right side away
- Negative values rotate the left side away

**Rotation Z (Roll)**
Standard 2D rotation around the depth axis. Identical to the 2D rotation property.

**Z Position (Depth)**
Moves the element along the Z axis — toward or away from the viewer.
- Positive values move closer to the viewer (appears larger with perspective enabled)
- Negative values move further from the viewer (appears smaller with perspective)

Without perspective enabled, Z position has no visual effect.

### 6.4 Transform Order

3D transforms are applied in this order:
1. Scale X / Y
2. Rotation X
3. Rotation Y
4. Rotation Z
5. Z Position
6. X / Y Position

The order matters significantly for 3D rotation. A rotation of 90° around X followed by 90° around Y produces a different result than 90° around Y followed by 90° around X (Gimbal behavior). This is a fundamental property of 3D rotation math, not a FlashFX limitation.

**Avoiding gimbal lock:**
- For continuous multi-axis rotation animations, use short rotation angles per axis (< 90°) to avoid gimbal lock in most cases
- For full 360° rotations, animate only one axis at a time
- For complex multi-axis rotation, use expression-based quaternion rotation when available

---

## 7. Perspective & Camera Simulation

### 7.1 The Perspective Camera

FlashFX provides a virtual perspective camera that applies a perspective projection to all 3D-enabled elements in a composition.

**Perspective Focal Length:** Controls the intensity of the perspective effect.
- High focal length (e.g., 2000px) = narrow field of view, compressed perspective, telephoto appearance
- Low focal length (e.g., 200px) = wide field of view, exaggerated perspective, fisheye-like appearance
- Default: 800px — a natural-looking perspective comparable to a 50mm lens

**Focal length to Field of View conversion:**
`FOV = 2 × arctan(canvas_height / (2 × focal_length))`

**Camera Position:** The virtual camera is positioned at the center of the canvas by default (X = canvas width / 2, Y = canvas height / 2).

**Camera Offset:** The camera can be repositioned:
- **Camera X / Y** — horizontal and vertical position of the camera in the scene
- Moving the camera pans the perspective view without actually moving elements

### 7.2 Per-Element vs. Composition-Level Perspective

**Composition-level perspective (default):** All 3D elements share the same perspective camera. Elements appear to exist in the same 3D space, with consistent vanishing points.

**Per-element perspective:** Each 3D element has its own independent perspective. This prevents elements from sharing vanishing points, which is useful for certain graphic styles but looks incorrect for realistic 3D space simulations.

Toggle: Properties Panel → "3D" section → "Perspective Mode"

### 7.3 Simulating Camera Movement

To simulate a moving camera, parent all scene elements to a Null Object and animate the null:

- **Dolly (push/pull)** — animate null's Scale uniformly (scale up = moving toward scene, scale down = moving away)
- **Truck (strafe)** — animate null's X position
- **Pedestal (vertical)** — animate null's Y position
- **Pan** — animate null's Z rotation (2D)
- **Tilt** — animate null's X rotation (3D)
- **Roll** — animate null's Z rotation in 3D mode

This technique avoids actually moving individual scene elements and keeps the "camera" logic centralized in one control.

---

## 8. Z-Depth & Layer Ordering in 3D

### 8.1 The Z-Ordering Problem

In a standard 2D composition, Z-order (draw order) is explicit — elements are drawn in the order they appear in the layer stack, with higher layers appearing in front.

In a 3D composition, elements at different Z-depth positions may need to be drawn in a different order than the layer stack to appear correctly. An element at Z = -100 (far from viewer) should appear behind an element at Z = +100 (close to viewer), regardless of their layer stack position.

FlashFX handles this as follows:

**Per-element 3D sorting:** When 3D is enabled on elements, FlashFX can optionally sort them by their Z-depth before compositing.

### 8.2 Z-Sort Modes

**Painter's Algorithm (Default):** Elements are drawn in layer stack order regardless of Z-depth. This is compatible with blend modes and is predictable, but can produce incorrect visual ordering when elements at different Z-depths cross the same screen area.

**Depth Sort:** FlashFX sorts elements by their camera-space Z depth before drawing. This produces correct visual depth ordering for non-overlapping, non-transparent elements.

**Depth Sort Limitations:**
- Incompatible with most blend modes (breaks batching)
- Cannot correctly handle two transparent, overlapping elements at different depths simultaneously (classic painters algorithm problem — there is no mathematically correct solution for overlapping translucent geometry without hardware depth buffering)
- FlashFX does not use WebGL's depth buffer for compositing because it cannot accommodate transparency

### 8.3 Managing Z-Ordering Manually

For most motion graphics work, manual Z-ordering (using the layer stack) is more reliable than automatic depth sorting:

1. Design the composition so that elements at greater depth (further away) are lower in the layer stack
2. Avoid having transparent elements at different depths overlap the same canvas region simultaneously
3. Use a Null Object hierarchy to group elements by depth tier, then arrange the null groups in the stack

---

## 9. 3D Lighting Model

### 9.1 Ambient Light

FlashFX provides a simple ambient light system that shades 3D-enabled elements based on their surface normal direction relative to a virtual light source.

**This is a flat-face shading model:** Each element is treated as a single flat plane. The shading is uniform across the element based on the angle of the plane relative to the light — there is no sub-surface variation, no self-shadowing, and no cast shadows.

**Ambient Light Settings:**
- **Intensity** — overall brightness of the ambient fill (prevents elements facing away from the light from going completely black)
- **Color** — tint of the ambient light

### 9.2 Directional Light

A single directional light source is available per composition.

**Properties:**
- **Light Direction X / Y / Z** — the direction vector the light is pointing from
- **Intensity** — brightness of the directional light
- **Color** — tint of the directional light

**Shading calculation:**
The shading amount is the dot product of the element's surface normal and the light direction. Elements facing the light directly are at full brightness; elements at a glancing angle are shaded; elements facing away from the light show only ambient.

### 9.3 Specular Highlight

A specular highlight term adds a glossy bright spot on 3D-rotated elements that face both the light and the virtual camera.

- **Specular Power** — controls the tightness of the highlight (higher = smaller, sharper highlight)
- **Specular Intensity** — brightness of the highlight
- **Specular Color** — color of the highlight (usually white or slightly warm)

### 9.4 Lighting Limitations

- **No cast shadows** between elements
- **No ambient occlusion**
- **No area lights** — only a single directional light and ambient
- **No subsurface scattering**
- **No image-based lighting**
- Lighting applies only to elements with 3D enabled — 2D elements are unaffected by the scene light

---

## 10. GPU Tier Detection & Adaptive Quality

### 10.1 Tier Detection

On session start, FlashFX performs a brief GPU benchmark to classify the device into a performance tier. This is used to set initial defaults and to trigger warnings for heavy operations.

**Detection method:**
- Renders a test composition with known complexity
- Measures frame rate over approximately 500ms
- Classifies the result against threshold benchmarks

**Tiers:**

| Tier | Description | Typical Hardware |
|---|---|---|
| **Tier 0** | Minimal — software rendering only | No GPU, or GPU not accessible via WebGL |
| **Tier 1** | Low — basic GPU capability | Intel HD integrated graphics (older), mobile basic |
| **Tier 2** | Medium — capable for most FlashFX use | Intel Iris / AMD Radeon integrated, mid-range mobile |
| **Tier 3** | High — suitable for complex compositions | Dedicated GPU (GTX 1060+, RX 580+, M1 integrated) |
| **Tier 4** | Ultra — suitable for 4K complex compositions | High-end dedicated GPU (RTX 3070+, RX 6800+, M2 Pro+) |

### 10.2 Adaptive Behavior by Tier

| Feature | Tier 0 | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|---|
| Max texture resolution | 2048×2048 | 4096×4096 | 4096×4096 | 8192×8192 | 16384×16384 |
| Default preview quality | Quarter | Half | Half | Full | Full |
| Blend modes | Disabled | Limited | All | All | All |
| Blur filter quality | N/A | Low | Medium | High | Ultra |
| 3D features | Disabled | Disabled | Basic | Full | Full |
| Real-time filter preview | Off | Off | On (simple) | On (all) | On (all) |

### 10.3 Manual Tier Override

The detected tier can be overridden in Application Settings → Performance → Force GPU Tier. Use this if the detection benchmark produced an inaccurate result.

---

## 11. Performance Profiling Tools

### 11.1 The Performance Panel

`View → Performance` opens the Performance panel, which shows:

- **Current FPS** — frames per second of the live canvas render
- **Target FPS** — the project's frame rate setting
- **GPU memory used** — estimated current GPU texture memory usage
- **GPU memory budget** — estimated available budget
- **CPU usage** — estimated browser tab CPU load
- **Draw calls** — number of WebGL draw calls per frame
- **Batch count** — number of rendering batches (fewer = better)
- **Offscreen buffer count** — number of active intermediate render passes

### 11.2 Frame Time Breakdown

The performance panel can display a per-frame timing breakdown:

| Stage | What It Measures |
|---|---|
| **JavaScript** | Scene graph update, keyframe evaluation, expression computation |
| **Compositing Plan** | Determining draw order and blend mode isolation requirements |
| **Upload** | Time to upload changed/new textures to GPU |
| **Draw** | WebGL draw call execution time |
| **Composite** | Framebuffer compositing and blending |
| **Total** | Sum of all stages |

Click "Show Breakdown" in the Performance panel to enable this detail.

### 11.3 Element-Level Profiling

Right-click any element in the Layer Panel and select "Profile Element" to see:
- The isolated render cost of just that element
- Its VRAM usage
- Whether it is causing a batch break
- The number of offscreen buffers it requires

---

## 12. Known Constraints by Browser

### 12.1 Chrome (Recommended)

- Best WebGL 2.0 support
- Hardware acceleration defaults on
- Best export performance (uses Chrome's built-in video encoding APIs)
- Known issue: Very large single textures (> 8192×8192) may cause silent failures on some GPU drivers. Use the 8K maximum instead of larger.

### 12.2 Firefox

- Full WebGL 2.0 support
- Slightly different default memory limits for offscreen buffers
- `webgl.max-warnings-per-context` must remain at default to avoid performance warnings cluttering the console during heavy rendering
- Known difference: Antialiasing on canvas edges may differ slightly from Chrome; visually negligible for export

### 12.3 Safari

- WebGL 2.0 support from Safari 15+
- Metal GPU backend (not OpenGL) — generally excellent GPU performance on Apple hardware
- Canvas `drawImage` performance (used in certain compositing paths) is slower than Chrome in some versions
- Advanced video export (`VideoEncoder` API) available from Safari 16.4+; older versions fall back to a slower export method
- Known limitation: `EXT_disjoint_timer_query` (used by the performance profiler) is disabled in Safari for security reasons — GPU timing data may be unavailable

### 12.4 Edge

- Chromium-based — essentially identical behavior to Chrome
- Some enterprise security policies may restrict WebGL; check with IT if FlashFX fails to initialize the GPU context

### 12.5 WebGL Context Loss

In all browsers, the WebGL context can be **lost** due to GPU driver crashes, system sleep, or GPU reset. FlashFX handles this by:
1. Detecting the context loss event
2. Automatically attempting to restore the context
3. Re-uploading all textures from CPU memory
4. Resuming rendering without requiring a page reload

If context restoration fails, FlashFX prompts to reload the page. Current unsaved work in the cloud-synced session is preserved.

---

## 13. Optimization Strategies for 3D Compositions

### 13.1 Use 3D Only Where Necessary

Not all elements in a composition need 3D enabled. Elements that remain flat (no X/Y rotation, no Z-depth) should have 3D turned off. 3D-enabled elements participate in the depth sort calculation even when stationary.

### 13.2 Minimize Non-Normal Blend Modes on 3D Elements

The combination of 3D transforms and non-Normal blend modes is the highest cost combination in FlashFX:

- Each non-Normal blend mode 3D element requires: depth sorting + blend mode isolation + 3D transform computation
- On Tier 2 hardware, more than 3 such elements active simultaneously will likely produce frame drops

### 13.3 Cull Invisible Elements

Elements that are rotated edge-on to the camera (90° X or Y rotation) are effectively invisible. Disable them via the layer visibility toggle or keyframe their opacity to 0 while edge-on to avoid unnecessary computation.

### 13.4 Reduce 3D Shadow and Lighting on Complex Scenes

The 3D lighting model adds a per-element shader computation. Disable lighting on background and non-hero elements:

In the Properties Panel for each 3D element, the "Receive Light" toggle controls whether that element participates in the lighting computation.

### 13.5 Pre-render Background Layers

Complex static background elements can be pre-rendered as images:

1. Create the background composition in a separate sequence
2. Export a single frame at full resolution as PNG
3. Import that PNG as a background layer in the main composition
4. Delete the original complex background elements

The pre-rendered flat image has near-zero GPU cost compared to the original vector/filter composition.

### 13.6 4K and 3D

Running 3D compositions at 4K canvas resolution quadruples every GPU operation compared to 1080p. On Tier 3 hardware:

- **Tier 3 recommendation:** Author 3D compositions at 1080p; export at 1080p. Scale to 4K as a simple resize if needed.
- **Tier 4 capability:** Real-time 3D preview at 1080p; export at 4K with rendering time approximately 2–5× realtime depending on complexity.

---

## 14. Exporting 3D Compositions

### 14.1 Export Rendering

Export rendering is not subject to real-time constraints. The export renderer renders each frame sequentially, taking as long as needed per frame.

**Export speed factors for 3D:**
- Canvas resolution (4K = ~4× longer than 1080p)
- Number of 3D elements
- 3D lighting enabled/disabled
- Blend modes on 3D elements
- Filter stacks on 3D elements

### 14.2 Anti-Aliasing in Export

Exported frames receive **4× MSAA (Multi-Sample Anti-Aliasing)** applied to all 3D element edges. This eliminates aliasing (jagged edges) on tilted or rotating shapes that may appear during realtime preview.

MSAA is disabled during preview to preserve performance but always enabled for export. Final exports will appear smoother than the preview for 3D elements with hard edges at oblique angles.

### 14.3 Export Quality and 3D

- **Maximum Quality** export applies the highest anti-aliasing and renders each frame at full resolution with no resampling
- **High Quality** applies MSAA but uses slight texture filtering for performance
- **Medium / Low** reduce texture quality; noticeable on high-frequency texture fills on 3D elements

For 3D compositions, always export at **High** or **Maximum** quality. The visual difference is most apparent on angled edges and texture-filled 3D planes.

### 14.4 Known Export Limitation — Transparency + 3D

Exporting transparent backgrounds with 3D elements that use non-Normal blend modes may produce composite errors at element boundaries in some configurations. For transparent 3D exports:

- Set all non-Normal blend mode 3D elements to Normal mode during export
- Or, export on a solid black or white background and composite the transparency in a dedicated compositing application (After Effects, DaVinci Resolve, etc.)

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
