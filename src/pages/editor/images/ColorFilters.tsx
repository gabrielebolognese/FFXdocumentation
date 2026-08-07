import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'color-adjustment-filters', label: 'Color Adjustment Filters' },
  { id: 'blur-filters', label: 'Blur Filters' },
  { id: 'stylization-artistic-filters', label: 'Stylization & Artistic Filters' },
];

export default function ColorFilters() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Color Adjustment, Blur & Artistic Filters | FlashFX Documentation"
        description="Complete reference for color adjustment filters, blur filters, and stylization/artistic filters in FlashFX."
        keywords="FlashFX, color adjustment, curves, blur filter, gaussian blur, halftone, artistic filters, noise, film grain"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Images
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Color, Blur & Artistic Filters</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="color-adjustment-filters" title="5. Color Adjustment Filters">
            <p>Color adjustment filters are applied non-destructively to images. They appear in a filter stack in the Properties Panel and can be reordered or toggled without affecting the original image data.</p>

            <p><strong className="text-white">5.1 Brightness & Contrast</strong></p>
            <p><strong className="text-white">Brightness:</strong> Adds or subtracts a uniform value from all pixel luminosity values. Range: -100 to +100. 0 = no change. Positive values lighten; negative values darken.</p>
            <p><strong className="text-white">Contrast:</strong> Increases or decreases the difference between light and dark pixels relative to a midpoint. Range: -100 to +100. Positive values increase contrast (darks get darker, lights get lighter). Negative values reduce contrast, making the image appear flat and washed out.</p>

            <p><strong className="text-white">5.2 Exposure</strong></p>
            <p>Simulates adjusting the camera exposure.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Exposure</strong> — increases or decreases overall brightness with a more photographic response curve than Brightness (uses a multiplicative model rather than additive)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Gamma Correction</strong> — adjusts midtone brightness while leaving pure blacks and whites unchanged</li>
            </ul>

            <p><strong className="text-white">5.3 Highlights, Shadows & Midtones</strong></p>
            <p>Three-band tonal correction. Positive values brighten, negative values darken each respective range.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Highlights</strong> — adjusts only the bright areas of the image (above ~75% luminosity)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Shadows</strong> — adjusts only the dark areas of the image (below ~25% luminosity)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Midtones</strong> — adjusts the middle tonal range (approximately 25%–75% luminosity)</li>
            </ul>

            <p><strong className="text-white">5.4 Color Curves</strong></p>
            <p>Full tonal and color correction via adjustable bezier curves, comparable to Curves in Photoshop or Resolve.</p>
            <p><strong className="text-white">Channels:</strong> Composite (RGB) adjusts all three channels simultaneously. Red / Green / Blue adjust individual channels.</p>
            <p>The curve is a graph with input values on the X axis (0 = black, 1 = white) and output values on the Y axis. Click anywhere to add a control point, drag it to reshape the tonal response. Double-click to reset to a neutral diagonal.</p>

            <p><strong className="text-white">5.5 Saturation & Vibrance</strong></p>
            <p><strong className="text-white">Saturation:</strong> Adjusts the intensity of all colors uniformly. Range: -100 (fully desaturated / grayscale) to +100 (maximum color intensity). 0 = no change.</p>
            <p><strong className="text-white">Vibrance:</strong> A smart saturation adjustment that preferentially increases the saturation of already-muted colors while leaving already-saturated colors largely unchanged. Produces a more natural-looking saturation boost than a straight Saturation increase.</p>

            <p><strong className="text-white">5.6 Hue Rotation</strong></p>
            <p>Rotates all colors around the color wheel. Range: -180° to +180°. 0° = no change. Positive values rotate clockwise (red → orange → yellow → green...). 180° = full complementary inversion of all hues.</p>

            <p><strong className="text-white">5.7 Color Temperature</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Temperature:</strong> Positive values add warmth (orange/amber cast); negative values add coolness (blue cast). Simulates a change in photographic white balance.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Tint:</strong> Shifts toward magenta (positive) or green (negative) on the axis perpendicular to temperature.</li>
            </ul>

            <p><strong className="text-white">5.8 Color Balance</strong></p>
            <p>Three-zone color adjustment (shadows, midtones, highlights), each with independent RGB offset sliders: Cyan ↔ Red, Magenta ↔ Green, Yellow ↔ Blue. Modeled on the classic three-way color corrector used in professional video grading.</p>

            <p><strong className="text-white">5.9 Selective Color</strong></p>
            <p>Adjusts the CMYK component distribution within specific color ranges in the image. Allows targeting and modifying only the reds, yellows, greens, cyans, blues, magenta, whites, neutrals, or blacks independently. For each selected range, Cyan / Magenta / Yellow / Black sliders shift the distribution of CMYK components within that tonal range. This is an advanced color grading tool typically used for matching footage colors or creating stylized color treatments.</p>

            <p><strong className="text-white">5.10 Levels</strong></p>
            <p>Input/Output level control — a simplified version of Curves for straightforward tonal range adjustment:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Input Black Point</strong> — sets the darkest input level that maps to black in the output</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Input White Point</strong> — sets the brightest input level that maps to white</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Input Midpoint (Gamma)</strong> — shifts the midtone bias</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Output Black Point</strong> — determines how dark the darkest output value will be</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Output White Point</strong> — determines how bright the brightest output value will be</li>
            </ul>
            <p>An eyedropper can be used to sample the darkest and brightest points from the image and auto-set the black and white input levels accordingly.</p>

            <p><strong className="text-white">5.11 Channel Mixer</strong></p>
            <p>Allows each output color channel (R, G, B) to be built from a weighted mix of all three input channels. Used for creative color grading and for creating specific grayscale conversions. Example: Setting the Red output to 100% Green input converts all green content to appear red in the output.</p>

            <p><strong className="text-white">5.12 Grayscale Conversion</strong></p>
            <p>Converts the image to grayscale with control over how each color channel contributes to the output luminosity. Standard luminosity-weighted conversion: R 21%, G 72%, B 7%. Custom values allow creative grayscale treatments that emphasize different tonal ranges.</p>

            <p><strong className="text-white">5.13 Invert</strong></p>
            <p>Inverts all pixel values (negative effect). Each channel value becomes 255 minus its original value. Can be animated for a flash/strobe effect.</p>

            <p><strong className="text-white">5.14 Duotone</strong></p>
            <p>Maps the image to a two-color gradient:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color 1</strong> — assigned to the darkest values (shadows)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color 2</strong> — assigned to the brightest values (highlights)</li>
            </ul>
            <p>Produces the classic editorial duotone appearance. The two colors are freely configurable — not limited to the traditional black + one color.</p>

            <p><strong className="text-white">5.15 Color Lookup (LUT)</strong></p>
            <p>Applies a color lookup table for cinematic color grading. Built-in LUTs include Kodak Emulation, Fuji Emulation, Cinematic Cool, Teal & Orange, Matte, Faded Film, and others. An Intensity slider (0%–100%) controls how strongly the LUT is applied.</p>
          </Section>

          <Section id="blur-filters" title="6. Blur Filters">
            <p><strong className="text-white">6.1 Gaussian Blur</strong></p>
            <p>Applies a uniform soft defocus to the entire image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius</strong> — the blur strength in pixels. Higher = more blur. Practical range: 0–200px.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Quality</strong> — Low / Medium / High. Higher quality reduces banding artifacts in the blur but increases computation time.</li>
            </ul>

            <p><strong className="text-white">6.2 Directional (Motion) Blur</strong></p>
            <p>Applies blur in a single linear direction, simulating motion along that axis.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Angle</strong> — the direction of blur (0° = horizontal)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Distance</strong> — how far the blur extends along the angle direction (in pixels)</li>
            </ul>

            <p><strong className="text-white">6.3 Radial Blur</strong></p>
            <p>Applies blur rotating around a center point. Simulates a spinning or rotating subject.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center X / Y</strong> — the pivot point of the rotation blur</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Strength</strong> — how much the blur rotates (expressed in degrees)</li>
            </ul>

            <p><strong className="text-white">6.4 Zoom Blur</strong></p>
            <p>Applies blur radiating outward from a center point, simulating a fast zoom movement.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center X / Y</strong> — the origin point of the zoom</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Strength</strong> — how far the blur extends radially (as a percentage of image size)</li>
            </ul>

            <p><strong className="text-white">6.5 Lens Blur (Tilt-Shift)</strong></p>
            <p>Simulates shallow depth of field — sharp in one region, blurred toward the edges.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Linear</strong> — a horizontal band is sharp; blur increases above and below (classic tilt-shift miniature effect)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radial</strong> — a circular region is sharp; blur increases toward the edges (simulating a large-aperture lens)</li>
            </ul>
            <p>Parameters: Focus Position, Focus Width, Max Blur, Falloff (linear, quadratic, or smooth).</p>
          </Section>

          <Section id="stylization-artistic-filters" title="7. Stylization & Artistic Filters">
            <p><strong className="text-white">7.1 Sharpen</strong></p>
            <p>Increases edge contrast to give an apparent sharpness boost.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Amount</strong> — strength of sharpening</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius</strong> — how wide the sharpening halo is around detected edges</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Threshold</strong> — minimum edge contrast required to trigger sharpening (prevents sharpening noise)</li>
            </ul>

            <p><strong className="text-white">7.2 Edge Detection</strong></p>
            <p>Finds and highlights edges in the image: Sobel (classic edge detection, high-contrast outline), Canny (fine single-pixel-wide edges), Laplacian (detects edges in all directions).</p>

            <p><strong className="text-white">7.3 Emboss</strong></p>
            <p>Produces a raised bas-relief appearance. Direction sets the virtual light source, Strength sets height, Blend Mode (usually Overlay or Hard Light) combines with original image beneath.</p>

            <p><strong className="text-white">7.4 Posterize</strong></p>
            <p>Reduces the number of tonal levels in the image, creating a flat, graphic, poster-art appearance. Levels parameter (2–8 range is most dramatic) sets the number of distinct tonal values per channel.</p>

            <p><strong className="text-white">7.5 Pixelate / Mosaic</strong></p>
            <p>Divides the image into a grid of large pixel blocks. Block Size parameter controls the size of each block in pixels.</p>

            <p><strong className="text-white">7.6 Halftone</strong></p>
            <p>Converts the image to a simulated halftone dot pattern.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dot Size</strong> — radius of each dot</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Angle</strong> — rotation of the dot grid (traditional printing uses ~45° to reduce moire)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Mode</strong> — Round Dots, Lines, Crosses, Diamonds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Mode</strong> — Monochrome, CMYK (separate screens for each channel)</li>
            </ul>

            <p><strong className="text-white">7.7 Pencil Sketch</strong></p>
            <p>Converts the image to a pencil drawing simulation. Controls: Line Density, Line Weight, Shading (amount of cross-hatching), Color Mode (Grayscale or Colored Sketch).</p>

            <p><strong className="text-white">7.8 Oil Paint</strong></p>
            <p>Simulates an oil painting surface. Controls: Stylization (degree of paint stroke abstraction), Brush Scale (size of simulated strokes), Direction (flow direction for brush stroke orientation).</p>

            <p><strong className="text-white">7.9 Watercolor</strong></p>
            <p>Soft, organic watercolor simulation. Controls: Flow (wetness of simulated paint), Edge Darkening (intensity of edge outlines), Granulation (roughness of paper texture).</p>

            <p><strong className="text-white">7.10 Glitch / Chromatic Aberration</strong></p>
            <p>Separates RGB channels and offsets them to simulate lens chromatic aberration or digital glitch artifacts.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offset X / Y</strong> — horizontal and vertical separation of channels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Mode</strong> — Chromatic Aberration (smooth lens distortion), RGB Shift (angular separation), Scan Lines (horizontal line displacement artifacts)</li>
            </ul>

            <p><strong className="text-white">7.11 Noise / Film Grain</strong></p>
            <p>Adds random pixel variation to simulate film grain or digital sensor noise.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Amount</strong> — intensity of the noise</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grain Size</strong> — size of individual noise particles</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Mode</strong> — Monochrome Grain (brightness variation only), Color Grain (independent RGB channel variation)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Luminance Weighting</strong> — concentration of grain in shadows, midtones, or highlights</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
