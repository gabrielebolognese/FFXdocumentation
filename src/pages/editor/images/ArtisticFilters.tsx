import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'sharpen', label: 'Sharpen' },
  { id: 'edge-detection', label: 'Edge Detection' },
  { id: 'emboss', label: 'Emboss' },
  { id: 'posterize', label: 'Posterize' },
  { id: 'pixelate-mosaic', label: 'Pixelate / Mosaic' },
  { id: 'halftone', label: 'Halftone' },
  { id: 'pencil-sketch', label: 'Pencil Sketch' },
  { id: 'oil-paint', label: 'Oil Paint' },
  { id: 'watercolor', label: 'Watercolor' },
  { id: 'glitch-chromatic-aberration', label: 'Glitch / Chromatic Aberration' },
  { id: 'noise-film-grain', label: 'Noise / Film Grain' },
];

export default function ArtisticFilters() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Stylization and Artistic Filters | FlashFX Documentation"
        description="Reference for all stylization and artistic filters available on images in FlashFX."
        keywords="FlashFX, artistic filters, sharpen, halftone, pencil sketch, oil paint, glitch, film grain"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Stylization and Artistic Filters</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="sharpen" title="Sharpen">
            <p>Increases edge contrast to give an apparent sharpness boost.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Amount</strong>,strength of sharpening</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radius</strong>,how wide the sharpening halo is around detected edges</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Threshold</strong>,minimum edge contrast required to trigger sharpening (prevents sharpening noise)</li>
            </ul>
          </Section>

          <Section id="edge-detection" title="Edge Detection">
            <p>Finds and highlights edges in the image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Sobel</strong>,classic edge detection; produces a high-contrast outline of shape boundaries</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Canny</strong>,fine, single-pixel-wide edges; more detailed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Laplacian</strong>,detects edges in all directions simultaneously; produces a dotted/blob pattern on some images</li>
            </ul>
          </Section>

          <Section id="emboss" title="Emboss">
            <p>Produces a raised bas-relief appearance.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Direction</strong>,the direction of the virtual light source (determines which side of edges is highlighted)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Strength</strong>,height of the emboss effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Blend Mode</strong>,usually set to Overlay or Hard Light to combine with the original image beneath</li>
            </ul>
          </Section>

          <Section id="posterize" title="Posterize">
            <p>Reduces the number of tonal levels in the image, creating a flat, graphic, poster-art appearance.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Levels</strong>,the number of distinct tonal values per channel (2 to 8 range is most dramatic; higher values are subtler)</li>
            </ul>
          </Section>

          <Section id="pixelate-mosaic" title="Pixelate / Mosaic">
            <p>Divides the image into a grid of large pixel blocks.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Block Size</strong>,the size of each block in pixels</li>
            </ul>
          </Section>

          <Section id="halftone" title="Halftone">
            <p>Converts the image to a simulated halftone dot pattern.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Dot Size</strong>,radius of each dot</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Angle</strong>,rotation of the dot grid (traditional printing uses approximately 45 degrees to reduce moire)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Mode</strong>,Round Dots, Lines, Crosses, Diamonds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color Mode</strong>,Monochrome or CMYK (separate screens for each channel)</li>
            </ul>
          </Section>

          <Section id="pencil-sketch" title="Pencil Sketch">
            <p>Converts the image to a pencil drawing simulation.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Line Density</strong>,number of sketch lines</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Line Weight</strong>,thickness of lines</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shading</strong>,amount of cross-hatching and tonal shading in the result</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color Mode</strong>,Grayscale Sketch or Colored Sketch</li>
            </ul>
          </Section>

          <Section id="oil-paint" title="Oil Paint">
            <p>Simulates an oil painting surface.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Stylization</strong>,the degree of paint stroke abstraction</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Brush Scale</strong>,size of simulated brush strokes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Direction</strong>,flow direction for brush stroke orientation</li>
            </ul>
          </Section>

          <Section id="watercolor" title="Watercolor">
            <p>Soft, organic watercolor simulation.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Flow</strong>,wetness of simulated paint; higher values create more blending and blooming</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Edge Darkening</strong>,intensity of edge outlines (common in real watercolor work)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Granulation</strong>,roughness of paper texture in the simulation</li>
            </ul>
          </Section>

          <Section id="glitch-chromatic-aberration" title="Glitch / Chromatic Aberration">
            <p>Separates RGB channels and offsets them to simulate lens chromatic aberration or digital glitch artifacts.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Offset X / Y</strong>,horizontal and vertical separation of channels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Intensity</strong>,how dramatically each channel is displaced</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Mode:</strong> Chromatic Aberration (smooth lens distortion), RGB Shift (angular separation), Scan Lines (horizontal line displacement artifacts)</li>
            </ul>
          </Section>

          <Section id="noise-film-grain" title="Noise / Film Grain">
            <p>Adds random pixel variation to simulate film grain or digital sensor noise.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Amount</strong>,intensity of the noise</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Grain Size</strong>,size of individual noise particles</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color Mode</strong>,Monochrome Grain (brightness variation only), Color Grain (independent RGB channel variation)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Luminance Weighting</strong>,concentration of grain in shadows, midtones, or highlights</li>
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
