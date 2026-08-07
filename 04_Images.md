# FlashFX — 04 · Images
### Complete Reference · Alpha Release

---

## Table of Contents

1. [Importing Images](#1-importing-images)
2. [Image Transform & Placement](#2-image-transform--placement)
3. [Cropping & Masking](#3-cropping--masking)
4. [Image Fill Mode](#4-image-fill-mode)
5. [Color Adjustment Filters](#5-color-adjustment-filters)
6. [Blur Filters](#6-blur-filters)
7. [Stylization & Artistic Filters](#7-stylization--artistic-filters)
8. [Distortion Filters](#8-distortion-filters)
9. [Light & Atmosphere Filters](#9-light--atmosphere-filters)
10. [Filter Stacking & Ordering](#10-filter-stacking--ordering)
11. [Animating Image Properties](#11-animating-image-properties)
12. [AI-Generated Images (DALL-E)](#12-ai-generated-images-dall-e)
13. [Image Asset Management](#13-image-asset-management)
14. [Performance Guidelines for Images](#14-performance-guidelines-for-images)

---

## 1. Importing Images

### 1.1 Supported Formats

FlashFX accepts the following raster image formats:

| Format | Extension | Notes |
|---|---|---|
| JPEG | .jpg, .jpeg | Lossy compression. No transparency. |
| PNG | .png | Lossless. Full alpha channel transparency support. |
| WebP | .webp | Lossy or lossless. Alpha channel support. Recommended for performance. |
| GIF | .gif | Static frame only. Animated GIFs are imported as a single still (first frame). |
| SVG | .svg | Vector format. Imported as a rasterized image (not as editable vector paths). To use SVG as editable paths, use File → Import SVG as Paths instead. |
| AVIF | .avif | Modern lossy/lossless format. Excellent compression. Browser-dependent support. |
| BMP | .bmp | Uncompressed. Very large files. Supported but not recommended. |

### 1.2 Import Methods

**Drag and Drop:** Drag any supported image file from the file system directly onto the canvas. The image is placed at the drop location at its natural pixel dimensions.

**Image Import Tool (`I`):** Activating the Image Import tool and clicking the canvas opens a file picker dialog. Select any supported image file.

**Copy and Paste:** Paste an image from the clipboard (`Ctrl+V`). Accepts images copied from other applications, web browsers, or the file system.

**AI Generation:** Images can be generated directly in FlashFX via the DALL-E integration without importing a file. See Section 12.

**Google Image Search:** Search and import images directly from within FlashFX. See Section 12.

### 1.3 Initial Placement

When imported, the image is placed:
- At the **cursor position** if imported via drag-and-drop
- **Centered on the canvas** if imported via the tool or file picker
- At its **natural pixel dimensions** as the initial size

If the image is larger than the canvas, a prompt offers to fit the image to the canvas dimensions while preserving aspect ratio.

---

## 2. Image Transform & Placement

Imported images are treated as rectangular elements in the layer stack. They participate fully in the transform system.

### 2.1 Position, Size, Rotation

All standard transform operations apply: position (X/Y), width, height, rotation, scale, skew, opacity, and anchor point. See Document 02, Section 3 for the complete transform reference.

### 2.2 Aspect Ratio Lock

Images have aspect ratio locking enabled by default. Disable it via the chain-link icon in the Properties Panel to apply non-uniform scaling (stretching or squashing the image).

### 2.3 Flip

- **Flip Horizontal** (`Ctrl+Shift+H`) — mirrors the image along the vertical axis
- **Flip Vertical** (`Ctrl+Shift+V`) — mirrors the image along the horizontal axis

Flipping is applied as a -100% scale on the corresponding axis and is animatable.

### 2.4 Blend Mode & Opacity

Images support the full blend mode library (all 27 modes — see Document 02, Section 10). Blend mode is set in the Properties Panel under "Compositing."

Blend modes on images are particularly useful for:
- **Multiply** on texture overlays — the texture darkens the content below it
- **Screen** on light-colored effects (sparkles, glows) — the dark background of the image disappears, leaving only the bright effect
- **Overlay** on grunge or texture maps — increases contrast and texture simultaneously
- **Luminosity** on color grading images — applies the brightness structure of an image without affecting the hue below

---

## 3. Cropping & Masking

### 3.1 Non-Destructive Crop

The crop tool in FlashFX is non-destructive. The original image data is not modified — cropping only adjusts which portion of the image is displayed within the element's visible bounds.

**Entering Crop Mode:** Double-click an image element while the Selection tool is active, or click the "Crop" button in the Properties Panel.

In Crop mode:
- A crop frame appears overlaid on the image
- Drag the crop frame handles to resize the visible region
- Drag inside the crop frame to pan the image within the frame
- The dimmed areas outside the crop frame are hidden in the final output
- Press `Enter` or click outside to confirm the crop

**Resetting Crop:** Click "Reset Crop" in the Properties Panel to restore the full image.

### 3.2 Image Position Within Frame

After cropping, the image position within its frame can be adjusted at any time:

- In selection mode, hold `Ctrl` and drag inside the image to pan the content within the cropped frame
- The image can be panned freely — content can be repositioned without changing the crop frame dimensions

### 3.3 Vector Mask (Clip Path)

Apply any vector shape as a mask that clips the image to that shape's outline.

**Applying:**
1. Place a vector shape on top of the image in the layer stack
2. Select both the image and the shape
3. `Layer → Create Clip Path`

The image is now clipped to the shape's outline. The clipping shape can still be edited (moved, scaled, vertex-edited) while the clip is active — double-click the clip group to enter it.

**Common uses:**
- Circle/oval image crops (profile photo style)
- Custom-shaped image frames
- Text shape cutouts (text converted to outlines used as clip paths)

### 3.4 Alpha Mask (Luminance Mask)

A gradient or painted mask shape controls the transparency of the image based on luminosity. See Document 02, Section 11.3 for the full alpha mask workflow.

For images, common uses include:
- **Gradient fade-out** — a black-to-white gradient mask fades the image to transparency along one edge, blending it with the background
- **Soft vignette** — a radial gradient mask (white at center, black at edges) creates a soft vignette effect by fading the image edges to transparent
- **Shape reveal** — a solid white shape in a black field shows the image only within the shape, with sharp or softly blurred edges depending on whether the mask shape has blur applied

---

## 4. Image Fill Mode

Images can be used as fill content for vector shapes — instead of displaying as their own rectangular frame, the image data fills the interior of any shape.

### 4.1 Setting an Image as Shape Fill

1. Select a vector shape
2. In the Fill section of the Properties Panel, add a new fill layer
3. Change the fill type to "Image Fill"
4. Choose an imported image from the project's asset library

The image fills the interior of the shape, clipped to the shape's path.

### 4.2 Image Fill Sizing Modes

| Mode | Description |
|---|---|
| **Fill** | Scales the image uniformly until it covers the full shape bounds, cropping the excess |
| **Fit** | Scales the image uniformly to fit entirely within the shape bounds; may show the shape fill beneath for uncovered areas |
| **Stretch** | Stretches the image to exactly match the shape dimensions (may distort) |
| **Tile** | Repeats the image in a grid to fill the shape |
| **Original** | Displays the image at its natural size within the shape |

### 4.3 Image Fill Position

When the sizing mode leaves control over position (Fill, Fit, Original, Tile), the image can be positioned within the shape:
- **Alignment grid** — nine-position grid (like a 3×3 tic-tac-toe of anchor positions)
- **Custom offset** — manual X/Y offset from the shape center

---

## 5. Color Adjustment Filters

Color adjustment filters are applied non-destructively to images. They appear in a filter stack in the Properties Panel and can be reordered or toggled without affecting the original image data.

### 5.1 Brightness & Contrast

**Brightness:** Adds or subtracts a uniform value from all pixel luminosity values.
- Range: -100 to +100
- 0 = no change
- Positive values lighten; negative values darken

**Contrast:** Increases or decreases the difference between light and dark pixels relative to a midpoint.
- Range: -100 to +100
- Positive values increase contrast (darks get darker, lights get lighter)
- Negative values reduce contrast, making the image appear flat and washed out

### 5.2 Exposure

Simulates adjusting the camera exposure.
- **Exposure** — increases or decreases overall brightness with a more photographic response curve than Brightness (uses a multiplicative model rather than additive)
- **Gamma Correction** — adjusts midtone brightness while leaving pure blacks and whites unchanged

### 5.3 Highlights, Shadows & Midtones

Three-band tonal correction:

- **Highlights** — adjusts only the bright areas of the image (above ~75% luminosity)
- **Shadows** — adjusts only the dark areas of the image (below ~25% luminosity)
- **Midtones** — adjusts the middle tonal range (approximately 25%–75% luminosity)

Positive values brighten, negative values darken each respective range.

### 5.4 Color Curves

Full tonal and color correction via adjustable bezier curves, comparable to Curves in Photoshop or Resolve.

**Channels:**
- **Composite (RGB)** — adjusts all three color channels simultaneously
- **Red** — adjusts only the red channel
- **Green** — adjusts only the green channel
- **Blue** — adjusts only the blue channel

The curve is a graph with input values on the X axis (0 = black, 1 = white) and output values on the Y axis. A point on the curve can be clicked and dragged to reshape the tonal response.

**Adding points:** Click anywhere on the curve to add a control point.
**Removing points:** Click and drag a control point off the graph edge to delete it.
**Resetting:** Double-click the curve to reset it to a neutral diagonal (no correction).

### 5.5 Saturation & Vibrance

**Saturation:** Adjusts the intensity of all colors uniformly.
- Range: -100 (fully desaturated / grayscale) to +100 (maximum color intensity)
- 0 = no change

**Vibrance:** A smart saturation adjustment that preferentially increases the saturation of already-muted colors while leaving already-saturated colors largely unchanged. Produces a more natural-looking saturation boost than a straight Saturation increase.

### 5.6 Hue Rotation

Rotates all colors around the color wheel.
- Range: -180° to +180°
- 0° = no change
- Positive values rotate clockwise (red → orange → yellow → green...)
- 180° = full complementary inversion of all hues

### 5.7 Color Temperature

Adjusts the warm/cool balance of the image.

- **Temperature:** Positive values add warmth (orange/amber cast); negative values add coolness (blue cast). Simulates a change in photographic white balance.
- **Tint:** Shifts toward magenta (positive) or green (negative) on the axis perpendicular to temperature.

### 5.8 Color Balance

Three-zone color adjustment (shadows, midtones, highlights), each with independent RGB offset sliders:

- **Cyan ↔ Red**
- **Magenta ↔ Green**
- **Yellow ↔ Blue**

Modeled on the classic three-way color corrector used in professional video grading.

### 5.9 Selective Color

Adjusts the CMYK component distribution within specific color ranges in the image. Allows targeting and modifying only the reds, yellows, greens, cyans, blues, magenta, whites, neutrals, or blacks independently.

For each selected range:
- **Cyan / Magenta / Yellow / Black** sliders shift the distribution of CMYK components within that tonal range

This is an advanced color grading tool typically used for matching footage colors or creating stylized color treatments.

### 5.10 Levels

Input/Output level control — a simplified version of Curves for straightforward tonal range adjustment:

- **Input Black Point** — sets the darkest input level that maps to black in the output
- **Input White Point** — sets the brightest input level that maps to white
- **Input Midpoint (Gamma)** — shifts the midtone bias
- **Output Black Point** — determines how dark the darkest output value will be
- **Output White Point** — determines how bright the brightest output value will be

An eyedropper can be used to sample the darkest and brightest points from the image and auto-set the black and white input levels accordingly.

### 5.11 Channel Mixer

Allows each output color channel (R, G, B) to be built from a weighted mix of all three input channels. Used for creative color grading and for creating specific grayscale conversions.

Example: Setting the Red output to 100% Green input converts all green content to appear red in the output.

### 5.12 Grayscale Conversion

Converts the image to grayscale with control over how each color channel contributes to the output luminosity:

- **Red contribution** — how much red channel detail maps to the grayscale output
- **Green contribution** — same for green
- **Blue contribution** — same for blue

Standard luminosity-weighted conversion: R 21%, G 72%, B 7%. Custom values allow creative grayscale treatments that emphasize different tonal ranges.

### 5.13 Invert

Inverts all pixel values (negative effect). Each channel value becomes 255 minus its original value. Can be animated for a flash/strobe effect.

### 5.14 Duotone

Maps the image to a two-color gradient:

- **Color 1** — assigned to the darkest values (shadows)
- **Color 2** — assigned to the brightest values (highlights)
- All tones are mapped to the gradient between these two colors

Produces the classic editorial duotone appearance. The two colors are freely configurable — not limited to the traditional black + one color.

### 5.15 Color Lookup (LUT)

Applies a color lookup table for cinematic color grading.

**Built-in LUTs:** A library of named looks including Kodak Emulation, Fuji Emulation, Cinematic Cool, Teal & Orange, Matte, Faded Film, and others.

**Intensity:** A blend slider (0%–100%) controls how strongly the LUT is applied.

---

## 6. Blur Filters

### 6.1 Gaussian Blur

Applies a uniform soft defocus to the entire image.

- **Radius** — the blur strength in pixels. Higher = more blur. Practical range: 0–200px.
- **Quality** — Low / Medium / High. Higher quality reduces banding artifacts in the blur but increases computation time.

### 6.2 Directional (Motion) Blur

Applies blur in a single linear direction, simulating motion along that axis.

- **Angle** — the direction of blur (0° = horizontal)
- **Distance** — how far the blur extends along the angle direction (in pixels)

### 6.3 Radial Blur

Applies blur rotating around a center point. Simulates a spinning or rotating subject.

- **Center X / Y** — the pivot point of the rotation blur
- **Strength** — how much the blur rotates (expressed in degrees)

### 6.4 Zoom Blur

Applies blur radiating outward from a center point, simulating a fast zoom movement.

- **Center X / Y** — the origin point of the zoom
- **Strength** — how far the blur extends radially (as a percentage of image size)

### 6.5 Lens Blur (Tilt-Shift)

Simulates shallow depth of field — sharp in one region, blurred toward the edges. Two modes:

- **Linear** — a horizontal band is sharp; blur increases above and below (classic tilt-shift miniature effect)
- **Radial** — a circular region is sharp; blur increases toward the edges (simulating a large-aperture lens)

Parameters:
- **Focus Position** — where the sharp zone is centered
- **Focus Width** — how wide the sharp zone is
- **Max Blur** — the maximum blur applied at the fully blurred regions
- **Falloff** — how gradually the blur transitions between sharp and blurred (linear, quadratic, or smooth)

---

## 7. Stylization & Artistic Filters

### 7.1 Sharpen

Increases edge contrast to give an apparent sharpness boost.

- **Amount** — strength of sharpening
- **Radius** — how wide the sharpening halo is around detected edges
- **Threshold** — minimum edge contrast required to trigger sharpening (prevents sharpening noise)

### 7.2 Edge Detection

Finds and highlights edges in the image.

- **Sobel** — classic edge detection; produces a high-contrast outline of shape boundaries
- **Canny** — fine, single-pixel-wide edges; more detailed
- **Laplacian** — detects edges in all directions simultaneously; produces a dotted/blob pattern on some images

### 7.3 Emboss

Produces a raised bas-relief appearance.

- **Direction** — the direction of the virtual light source (determines which side of edges is highlighted)
- **Strength** — height of the emboss effect
- **Blend Mode** — usually set to Overlay or Hard Light to combine with the original image beneath

### 7.4 Posterize

Reduces the number of tonal levels in the image, creating a flat, graphic, poster-art appearance.

- **Levels** — the number of distinct tonal values per channel (2–8 range is most dramatic; higher values are subtler)

### 7.5 Pixelate / Mosaic

Divides the image into a grid of large pixel blocks.

- **Block Size** — the size of each block in pixels

### 7.6 Halftone

Converts the image to a simulated halftone dot pattern.

- **Dot Size** — radius of each dot
- **Angle** — rotation of the dot grid (traditional printing uses ~45° to reduce moiré)
- **Mode** — Round Dots, Lines, Crosses, Diamonds
- **Color Mode** — Monochrome, CMYK (separate screens for each channel)

### 7.7 Pencil Sketch

Converts the image to a pencil drawing simulation.

- **Line Density** — number of sketch lines
- **Line Weight** — thickness of lines
- **Shading** — amount of cross-hatching and tonal shading in the result
- **Color Mode** — Grayscale Sketch or Colored Sketch

### 7.8 Oil Paint

Simulates an oil painting surface.

- **Stylization** — the degree of paint stroke abstraction
- **Brush Scale** — size of simulated brush strokes
- **Direction** — flow direction for brush stroke orientation

### 7.9 Watercolor

Soft, organic watercolor simulation.

- **Flow** — wetness of simulated paint; higher values create more blending and blooming
- **Edge Darkening** — intensity of edge outlines (common in real watercolor work)
- **Granulation** — roughness of paper texture in the simulation

### 7.10 Glitch / Chromatic Aberration

Separates RGB channels and offsets them to simulate lens chromatic aberration or digital glitch artifacts.

- **Offset X / Y** — horizontal and vertical separation of channels
- **Intensity** — how dramatically each channel is displaced
- **Mode:** Chromatic Abberation (smooth lens distortion), RGB Shift (angular separation), Scan Lines (horizontal line displacement artifacts)

### 7.11 Noise / Film Grain

Adds random pixel variation to simulate film grain or digital sensor noise.

- **Amount** — intensity of the noise
- **Grain Size** — size of individual noise particles
- **Color Mode** — Monochrome Grain (brightness variation only), Color Grain (independent RGB channel variation)
- **Luminance Weighting** — concentration of grain in shadows, midtones, or highlights

---

## 8. Distortion Filters

### 8.1 Warp (Mesh Warp)

Applies a free-form warp by deforming a mesh grid overlaid on the image.

- A grid of control points appears over the image
- Drag any control point to pull the image in that direction
- The warp is smooth and continuous between control points
- **Grid Density** — number of rows and columns in the warp mesh (more points = finer control)

All warp control point positions are animatable, enabling fluid morphing and organic wave distortions.

### 8.2 Ripple

Applies a sinusoidal wave distortion.

- **Amplitude** — height of the wave (how much pixels are displaced)
- **Frequency** — how many waves appear across the image
- **Direction** — Horizontal, Vertical, or Radial
- **Phase** — shifts the wave position. Animating phase creates a water ripple animation.

### 8.3 Twirl

Rotates the image around a center point, with stronger rotation near the center and weaker rotation at the edges.

- **Center X / Y** — pivot of the twirl
- **Angle** — total rotation at the center point
- **Radius** — distance from the center over which the effect extends

### 8.4 Bulge / Pinch

**Bulge:** Pushes pixels outward from a center point, creating a convex fish-eye lens effect.
**Pinch:** Pulls pixels inward toward a center point, creating a concave pinch effect.

- **Center X / Y**
- **Strength** — magnitude of the displacement
- **Radius** — area of influence

### 8.5 Perspective Warp

Distorts the image as if viewed from a different camera angle. Four corner handles reposition independently.

- **Top-Left, Top-Right, Bottom-Left, Bottom-Right** — corner pin positions
- Used for simulating perspective, correcting keystoning, or placing images onto angled surfaces

All four corners are individually animatable for fly-on perspective animation.

### 8.6 Displacement Map

Uses the luminosity of a second image to drive the distortion of the target image. Pixels in the target image are displaced in proportion to the brightness of the corresponding pixel in the displacement map.

- **Map Source** — the image used as the displacement reference (can be any image in the project asset library)
- **Scale X / Y** — the strength of displacement along each axis
- **Map Channel** — which channel of the map image drives the displacement: Luminance, Red, Green, or Blue

---

## 9. Light & Atmosphere Filters

### 9.1 Vignette

Darkens the edges of the image, drawing attention to the center. A classic photographic effect.

- **Strength** — darkness of the vignette at maximum (0% = none)
- **Radius** — how far the vignette extends toward the center
- **Shape** — Circular, Oval, or Rectangular
- **Feather** — softness of the vignette edge

### 9.2 Lens Flare

Adds a synthetic lens flare artifact, simulating bright light hitting a camera lens.

- **Source X / Y** — position of the virtual light source
- **Brightness** — intensity of the flare
- **Lens Type** — simulates different lens characteristics (anamorphic, spherical, vintage)
- **Halo Color** — the color tint of the main flare element
- **Streak Length** — length of light streak artifacts

All parameters are animatable. Animating the source position creates a moving flare effect.

### 9.3 God Rays (Volumetric Light)

Simulates atmospheric light scattering, creating visible ray-like beams.

- **Source X / Y** — origin of the light
- **Exposure** — overall brightness of the rays
- **Decay** — how quickly the rays fade as they extend from the source
- **Weight** — density/intensity of the rays
- **Samples** — quality of the ray calculation (higher = smoother, more expensive)

### 9.4 Bloom

Creates a soft halo glow around the brightest regions of the image, simulating lens overexposure.

- **Threshold** — the minimum brightness level above which bloom is applied
- **Spread** — how far the bloom halo extends
- **Intensity** — brightness multiplier for the bloom

### 9.5 Fog / Haze

Adds an atmospheric depth haze overlay.

- **Density** — thickness of the haze
- **Color** — haze color (white for natural fog, warm for desert heat, cool for winter)
- **Near / Far** — controls where the haze starts and how strong it becomes at distance (uses approximate linear depth from element Z-position when 3D features are active)

---

## 10. Filter Stacking & Ordering

Multiple filters from any category can be stacked on a single image. The filter stack appears in the Properties Panel beneath the image settings.

### 10.1 Filter Order

Filters are applied from top to bottom. Order matters:

- **Blur → Sharpen:** The sharpen will recover detail from the blur (partial effect)
- **Sharpen → Blur:** The blur will obscure the sharpening effect (sharpen has no perceptible effect)
- **Color Grade → Halftone:** Color grading applies first, then halftone renders with those colors
- **Halftone → Color Grade:** Color grading adjusts the already-halftoned result

Reorder filters by dragging the grab handle on any filter row.

### 10.2 Filter Visibility Toggle

Each filter has a toggle eye icon to temporarily disable it without deleting it. Useful for comparing the effect of individual filters.

### 10.3 Filter Opacity

Each filter has its own opacity control (0%–100%). At less than 100%, the filter effect blends with the unfiltered result beneath it. This is the equivalent of reducing a layer's opacity in a compositing application — it provides a "softened" version of any filter effect.

### 10.4 Animating Filter Intensity

Nearly all filter parameters are animatable. To animate a filter:
1. Switch to Animate mode
2. Navigate to a keyframe position
3. Adjust the filter parameter

A keyframe is created on the filter property track in the timeline. The parameter interpolates between keyframe values over time.

---

## 11. Animating Image Properties

Images are fully compatible with the animation engine.

### 11.1 Animatable Properties

| Property | Notes |
|---|---|
| Position X / Y | Standard position animation |
| Width / Height | Size over time; combine with position for scale effects |
| Scale X / Y | Uniform or non-uniform scale |
| Rotation | Spin, pivot, or subtle tilt animations |
| Opacity | Fade in/out |
| Crop Frame | Animate the crop position or size (reveal/conceal without moving the image) |
| Blend Mode | Switches are discrete (jump cuts); not smoothly interpolated |
| Filter Parameters | Any filter value — blur radius, color grade, distortion strength |
| Warp Control Points | Individual mesh points of the Warp filter |

### 11.2 Position and Scale Animation

Images are commonly animated with:

- **Ken Burns Effect** — slow pan and zoom, achieved by animating position and scale simultaneously with slow ease
- **Impact Zoom** — sudden scale increase on a beat, using a short strong Ease Out keyframe
- **Parallax** — layered images with different scale/position animation speeds create a depth illusion

### 11.3 Opacity and Blend Mode Transitions

Fading an image from transparent to opaque:
- Create a keyframe with Opacity = 0% at the start frame
- Create a keyframe with Opacity = 100% at the desired reveal frame
- Set easing to Ease In-Out

Blend mode transitions are not smoothly interpolated — the mode switches instantaneously at the keyframe. To simulate a blend mode fade, animate the image opacity from 0 to 100% while the blend mode is already set.

---

## 12. AI-Generated Images (DALL-E)

### 12.1 Accessing the Generator

The DALL-E image generation panel is accessible from:
- The AI Features panel (`View → AI Features`)
- The right-click menu on an empty canvas area: "Generate Image Here"
- The Image Import toolbar button's dropdown menu: "Generate with AI"

### 12.2 Writing Effective Prompts

The quality of generated images is directly determined by the prompt. Principles:

**Include visual style:** "flat vector illustration," "photorealistic render," "watercolor painting," "3D isometric," "dark cinematic."

**Describe lighting:** "dramatic side lighting," "soft diffuse light," "golden hour," "studio white background," "neon lit."

**Describe composition:** "centered subject," "wide angle," "close-up portrait," "full frame texture," "overhead view."

**Match your canvas context:** Including style descriptors that match your composition (e.g., "dark background, orange and white color palette, motion graphics style") produces images that integrate more naturally.

**Be specific, not abstract:** "A geometric abstract shape made of glowing orange triangles on a dark background" produces a more usable result than "something interesting."

### 12.3 Generation Settings

- **Size:** Square (1:1), Landscape (16:9), Portrait (9:16). Choose based on canvas orientation.
- **Quality:** Standard, HD. HD uses more DALL-E tokens per generation.
- **Style:** Natural (photographic) or Vivid (more saturated, dramatic, stylized).

### 12.4 After Generation

The generated image is placed on the canvas as a standard image element. It behaves identically to an imported image in every way — all filters, blend modes, animations, and mask operations apply.

**Editing the prompt and regenerating:** The generation prompt is stored with the image element. Right-click the element and select "Regenerate" to open the generator with the previous prompt pre-loaded for refinement.

### 12.5 Google Image Search Integration

Access via `Insert → Search Images` or the Image Import dropdown. A search panel appears:

1. Enter a search query
2. Results are displayed as thumbnails
3. Click any result to import it directly onto the canvas

Imported search images are embedded in the project like any other imported image. Verify the licensing of any search-sourced image before use in published work.

---

## 13. Image Asset Management

### 13.1 The Asset Library

All images currently used in the project are accessible in the Asset Library panel (`View → Asset Library` or `A`). The library displays:

- Thumbnail previews of all imported images
- File format and dimensions
- Number of canvas instances (how many times each image is used)

### 13.2 Replacing an Image

To replace an image asset while preserving all existing placement, crop, and animation settings on the canvas:

1. In the Asset Library, right-click the image thumbnail
2. Select "Replace Asset"
3. Choose a replacement image file

All canvas instances of the original image are updated simultaneously. Animation keyframes and filter settings are preserved.

### 13.3 Embedding vs. Linking

By default, all imported images are **embedded** in the .flashfx project file. The project is self-contained and portable.

**Linking** (planned feature): Link an image asset by file path rather than embedding it. Changes to the source file on disk are reflected in the project. Suitable for large assets in production workflows where file size management is critical.

### 13.4 Removing Unused Assets

`File → Remove Unused Assets` — scans the project and removes any images in the Asset Library that are not referenced on any canvas. Reduces .flashfx file size.

---

## 14. Performance Guidelines for Images

### 14.1 Image Resolution

Match source resolution to canvas usage:

| Canvas Usage Size | Recommended Source Resolution |
|---|---|
| Full 4K canvas background | Up to 3840 × 2160 |
| Full HD canvas background | Up to 1920 × 1080 |
| Half-canvas element | ~960 × 540 |
| Small icon or decoration | ~256 × 256 |
| Tiny element (<100px wide) | ~200 × 200 |

Images larger than necessary for their canvas role consume memory without contributing visible quality.

### 14.2 Format Choice

| Format | Best Use |
|---|---|
| **WebP** | Recommended for all images. Best size/quality ratio. |
| **PNG** | Required only when lossless quality or alpha transparency is critical |
| **JPEG** | Acceptable for photographic images without transparency requirements |

### 14.3 Images in Animation

- Animating position and rotation on images is low-cost.
- Animating blur radius, warp mesh points, or distortion effects is high-cost. Each animated frame requires a full filter recalculation.
- For animations with multiple simultaneous image elements, disable filter stacks on non-hero images during editing preview — use the filter visibility toggle, and re-enable before export.
- Consider working at 720p canvas resolution during animation authoring and scaling up to 1080p or 4K at export.

---

*FlashFX — Official Product Documentation · Alpha Release*
*Made with passion by Gabriele Bolognese*
*© Gabriele Bolognese — FlashFX*
