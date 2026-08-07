import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'brightness-and-contrast', label: 'Brightness and Contrast' },
  { id: 'exposure', label: 'Exposure' },
  { id: 'highlights-shadows-and-midtones', label: 'Highlights, Shadows, and Midtones' },
  { id: 'color-curves', label: 'Color Curves' },
  { id: 'saturation-and-vibrance', label: 'Saturation and Vibrance' },
  { id: 'hue-rotation', label: 'Hue Rotation' },
  { id: 'color-temperature', label: 'Color Temperature' },
  { id: 'color-balance', label: 'Color Balance' },
  { id: 'selective-color', label: 'Selective Color' },
  { id: 'levels', label: 'Levels' },
  { id: 'channel-mixer', label: 'Channel Mixer' },
  { id: 'grayscale-conversion', label: 'Grayscale Conversion' },
  { id: 'invert', label: 'Invert' },
  { id: 'duotone', label: 'Duotone' },
  { id: 'color-lookup-lut', label: 'Color Lookup (LUT)' },
];

export default function ColorAdjustment() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Color Adjustment Filters | FlashFX Documentation"
        description="Complete reference for all color adjustment filters available on images in FlashFX."
        keywords="FlashFX, color filters, brightness, contrast, curves, saturation, hue, duotone, LUT"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Color Adjustment Filters</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Color adjustment filters are applied non-destructively to images. They appear in a filter stack in the Properties Panel and can be reordered or toggled without affecting the original image data.
          </p>

          <Section id="brightness-and-contrast" title="Brightness and Contrast">
            <p><strong className="text-white">Brightness:</strong> Adds or subtracts a uniform value from all pixel luminosity values.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Range: -100 to +100</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>0 = no change</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values lighten; negative values darken</li>
            </ul>
            <p><strong className="text-white">Contrast:</strong> Increases or decreases the difference between light and dark pixels relative to a midpoint.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Range: -100 to +100</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values increase contrast (darks get darker, lights get lighter)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Negative values reduce contrast, making the image appear flat and washed out</li>
            </ul>
          </Section>

          <Section id="exposure" title="Exposure">
            <p>Simulates adjusting the camera exposure.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Exposure</strong> — increases or decreases overall brightness with a more photographic response curve than Brightness (uses a multiplicative model rather than additive)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Gamma Correction</strong> — adjusts midtone brightness while leaving pure blacks and whites unchanged</li>
            </ul>
          </Section>

          <Section id="highlights-shadows-and-midtones" title="Highlights, Shadows, and Midtones">
            <p>Three-band tonal correction:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Highlights</strong> — adjusts only the bright areas of the image (above approximately 75% luminosity)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shadows</strong> — adjusts only the dark areas of the image (below approximately 25% luminosity)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Midtones</strong> — adjusts the middle tonal range (approximately 25% to 75% luminosity)</li>
            </ul>
            <p>Positive values brighten, negative values darken each respective range.</p>
          </Section>

          <Section id="color-curves" title="Color Curves">
            <p>Full tonal and color correction via adjustable bezier curves, comparable to Curves in Photoshop or DaVinci Resolve.</p>
            <p><strong className="text-white">Channels:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Composite (RGB)</strong> — adjusts all three color channels simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Red, Green, Blue</strong> — adjusts only the selected channel independently</li>
            </ul>
            <p>The curve is a graph with input values on the X axis (0 = black, 1 = white) and output values on the Y axis. A point on the curve can be clicked and dragged to reshape the tonal response.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Adding points:</strong> Click anywhere on the curve to add a control point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Removing points:</strong> Click and drag a control point off the graph edge to delete it</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Resetting:</strong> Double-click the curve to reset it to a neutral diagonal (no correction)</li>
            </ul>
          </Section>

          <Section id="saturation-and-vibrance" title="Saturation and Vibrance">
            <p><strong className="text-white">Saturation:</strong> Adjusts the intensity of all colors uniformly. Range: -100 (fully desaturated/grayscale) to +100 (maximum color intensity). 0 = no change.</p>
            <p><strong className="text-white">Vibrance:</strong> A smart saturation adjustment that preferentially increases the saturation of already-muted colors while leaving already-saturated colors largely unchanged. Produces a more natural-looking saturation boost than a straight Saturation increase.</p>
          </Section>

          <Section id="hue-rotation" title="Hue Rotation">
            <p>Rotates all colors around the color wheel.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Range: -180 degrees to +180 degrees</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>0 degrees = no change</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values rotate clockwise (red to orange to yellow to green...)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>180 degrees = full complementary inversion of all hues</li>
            </ul>
          </Section>

          <Section id="color-temperature" title="Color Temperature">
            <p>Adjusts the warm/cool balance of the image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Temperature:</strong> Positive values add warmth (orange/amber cast); negative values add coolness (blue cast). Simulates a change in photographic white balance.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Tint:</strong> Shifts toward magenta (positive) or green (negative) on the axis perpendicular to temperature.</li>
            </ul>
          </Section>

          <Section id="color-balance" title="Color Balance">
            <p>Three-zone color adjustment (shadows, midtones, highlights), each with independent RGB offset sliders:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Cyan to Red</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Magenta to Green</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Yellow to Blue</li>
            </ul>
            <p>Modeled on the classic three-way color corrector used in professional video grading.</p>
          </Section>

          <Section id="selective-color" title="Selective Color">
            <p>Adjusts the CMYK component distribution within specific color ranges in the image. Allows targeting and modifying only the reds, yellows, greens, cyans, blues, magentas, whites, neutrals, or blacks independently.</p>
            <p>For each selected range, Cyan, Magenta, Yellow, and Black sliders shift the distribution of CMYK components within that tonal range. This is an advanced color grading tool typically used for matching footage colors or creating stylized color treatments.</p>
          </Section>

          <Section id="levels" title="Levels">
            <p>Input/Output level control — a simplified version of Curves for straightforward tonal range adjustment:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Input Black Point</strong> — sets the darkest input level that maps to black in the output</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Input White Point</strong> — sets the brightest input level that maps to white</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Input Midpoint (Gamma)</strong> — shifts the midtone bias</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Output Black Point</strong> — determines how dark the darkest output value will be</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Output White Point</strong> — determines how bright the brightest output value will be</li>
            </ul>
            <p>An eyedropper can be used to sample the darkest and brightest points from the image and auto-set the black and white input levels accordingly.</p>
          </Section>

          <Section id="channel-mixer" title="Channel Mixer">
            <p>Allows each output color channel (R, G, B) to be built from a weighted mix of all three input channels. Used for creative color grading and for creating specific grayscale conversions.</p>
            <p>Example: Setting the Red output to 100% Green input converts all green content to appear red in the output.</p>
          </Section>

          <Section id="grayscale-conversion" title="Grayscale Conversion">
            <p>Converts the image to grayscale with control over how each color channel contributes to the output luminosity:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Red contribution</strong> — how much red channel detail maps to the grayscale output</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Green contribution</strong> — same for green</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Blue contribution</strong> — same for blue</li>
            </ul>
            <p>Standard luminosity-weighted conversion: R 21%, G 72%, B 7%. Custom values allow creative grayscale treatments that emphasize different tonal ranges.</p>
          </Section>

          <Section id="invert" title="Invert">
            <p>Inverts all pixel values (negative effect). Each channel value becomes 255 minus its original value. Can be animated for a flash/strobe effect.</p>
          </Section>

          <Section id="duotone" title="Duotone">
            <p>Maps the image to a two-color gradient:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color 1</strong> — assigned to the darkest values (shadows)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color 2</strong> — assigned to the brightest values (highlights)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All tones are mapped to the gradient between these two colors</li>
            </ul>
            <p>Produces the classic editorial duotone appearance. The two colors are freely configurable — not limited to the traditional black plus one color.</p>
          </Section>

          <Section id="color-lookup-lut" title="Color Lookup (LUT)">
            <p>Applies a color lookup table for cinematic color grading.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Built-in LUTs:</strong> A library of named looks including Kodak Emulation, Fuji Emulation, Cinematic Cool, Teal and Orange, Matte, Faded Film, and others</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Intensity:</strong> A blend slider (0% to 100%) controls how strongly the LUT is applied</li>
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
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
