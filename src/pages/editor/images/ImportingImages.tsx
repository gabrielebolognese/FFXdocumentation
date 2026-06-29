import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'importing-images', label: 'Importing Images' },
  { id: 'image-transform-placement', label: 'Image Transform & Placement' },
];

export default function ImportingImages() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Importing Images & Transform | FlashFX Documentation"
        description="Learn how to import images and apply transform operations in FlashFX."
        keywords="FlashFX, import images, image formats, image transform, aspect ratio, blend mode"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Images
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Importing Images & Transform</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="importing-images" title="1. Importing Images">
            <p><strong className="text-white">1.1 Supported Formats</strong></p>
            <p>FlashFX accepts the following raster image formats:</p>
            <Table
              headers={['Format', 'Extension', 'Notes']}
              rows={[
                ['JPEG', '.jpg, .jpeg', 'Lossy compression. No transparency.'],
                ['PNG', '.png', 'Lossless. Full alpha channel transparency support.'],
                ['WebP', '.webp', 'Lossy or lossless. Alpha channel support. Recommended for performance.'],
                ['GIF', '.gif', 'Static frame only. Animated GIFs are imported as a single still (first frame).'],
                ['SVG', '.svg', 'Vector format. Imported as a rasterized image (not as editable vector paths). To use SVG as editable paths, use File → Import SVG as Paths instead.'],
                ['AVIF', '.avif', 'Modern lossy/lossless format. Excellent compression. Browser-dependent support.'],
                ['BMP', '.bmp', 'Uncompressed. Very large files. Supported but not recommended.'],
              ]}
            />

            <p><strong className="text-white">1.2 Import Methods</strong></p>
            <p><strong className="text-white">Drag and Drop:</strong> Drag any supported image file from the file system directly onto the canvas. The image is placed at the drop location at its natural pixel dimensions.</p>
            <p><strong className="text-white">Image Import Tool (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">I</code>):</strong> Activating the Image Import tool and clicking the canvas opens a file picker dialog. Select any supported image file.</p>
            <p><strong className="text-white">Copy and Paste:</strong> Paste an image from the clipboard (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+V</code>). Accepts images copied from other applications, web browsers, or the file system.</p>
            <p><strong className="text-white">AI Generation:</strong> Images can be generated directly in FlashFX via the DALL-E integration without importing a file. See Section 12.</p>
            <p><strong className="text-white">Google Image Search:</strong> Search and import images directly from within FlashFX. See Section 12.</p>

            <p><strong className="text-white">1.3 Initial Placement</strong></p>
            <p>When imported, the image is placed:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>At the <strong className="text-white">cursor position</strong> if imported via drag-and-drop</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Centered on the canvas</strong> if imported via the tool or file picker</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>At its <strong className="text-white">natural pixel dimensions</strong> as the initial size</li>
            </ul>
            <p>If the image is larger than the canvas, a prompt offers to fit the image to the canvas dimensions while preserving aspect ratio.</p>
          </Section>

          <Section id="image-transform-placement" title="2. Image Transform & Placement">
            <p>Imported images are treated as rectangular elements in the layer stack. They participate fully in the transform system.</p>

            <p><strong className="text-white">2.1 Position, Size, Rotation</strong></p>
            <p>All standard transform operations apply: position (X/Y), width, height, rotation, scale, skew, opacity, and anchor point. See Document 02, Section 3 for the complete transform reference.</p>

            <p><strong className="text-white">2.2 Aspect Ratio Lock</strong></p>
            <p>Images have aspect ratio locking enabled by default. Disable it via the chain-link icon in the Properties Panel to apply non-uniform scaling (stretching or squashing the image).</p>

            <p><strong className="text-white">2.3 Flip</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Flip Horizontal</strong> (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+H</code>),mirrors the image along the vertical axis</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Flip Vertical</strong> (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+V</code>),mirrors the image along the horizontal axis</li>
            </ul>
            <p>Flipping is applied as a -100% scale on the corresponding axis and is animatable.</p>

            <p><strong className="text-white">2.4 Blend Mode & Opacity</strong></p>
            <p>Images support the full blend mode library (all 27 modes,see Document 02, Section 10). Blend mode is set in the Properties Panel under "Compositing."</p>
            <p>Blend modes on images are particularly useful for:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Multiply</strong> on texture overlays,the texture darkens the content below it</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Screen</strong> on light-colored effects (sparkles, glows),the dark background of the image disappears, leaving only the bright effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Overlay</strong> on grunge or texture maps,increases contrast and texture simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Luminosity</strong> on color grading images,applies the brightness structure of an image without affecting the hue below</li>
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
