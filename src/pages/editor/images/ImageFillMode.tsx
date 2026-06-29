import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'setting-an-image-as-shape-fill', label: 'Setting an Image as Shape Fill' },
  { id: 'image-fill-sizing-modes', label: 'Image Fill Sizing Modes' },
  { id: 'image-fill-position', label: 'Image Fill Position' },
];

export default function ImageFillMode() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Image Fill Mode | FlashFX Documentation"
        description="Reference for using images as fill content for vector shapes in FlashFX."
        keywords="FlashFX, image fill, shape fill, fill mode, tile, stretch, fit"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Image Fill Mode</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Images can be used as fill content for vector shapes,instead of displaying as their own rectangular frame, the image data fills the interior of any shape.
          </p>

          <Section id="setting-an-image-as-shape-fill" title="Setting an Image as Shape Fill">
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select a vector shape</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>In the Fill section of the Properties Panel, add a new fill layer</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Change the fill type to "Image Fill"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Choose an imported image from the project's asset library</li>
            </ol>
            <p>The image fills the interior of the shape, clipped to the shape's path.</p>
          </Section>

          <Section id="image-fill-sizing-modes" title="Image Fill Sizing Modes">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Fill', 'Scales the image uniformly until it covers the full shape bounds, cropping the excess'],
                ['Fit', 'Scales the image uniformly to fit entirely within the shape bounds; may show the shape fill beneath for uncovered areas'],
                ['Stretch', 'Stretches the image to exactly match the shape dimensions (may distort)'],
                ['Tile', 'Repeats the image in a grid to fill the shape'],
                ['Original', 'Displays the image at its natural size within the shape'],
              ]}
            />
          </Section>

          <Section id="image-fill-position" title="Image Fill Position">
            <p>When the sizing mode leaves control over position (Fill, Fit, Original, Tile), the image can be positioned within the shape:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Alignment grid</strong>,nine-position grid (3x3 anchor positions: top-left, top-center, top-right, middle-left, center, middle-right, bottom-left, bottom-center, bottom-right)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Custom offset</strong>,manual X/Y offset from the shape center</li>
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
                <td key={j} className="px-4 py-3 text-xs text-white/70">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
