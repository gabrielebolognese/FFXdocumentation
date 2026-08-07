import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'image-resolution', label: 'Image Resolution' },
  { id: 'format-choice', label: 'Format Choice' },
  { id: 'images-in-animation', label: 'Images in Animation' },
];

export default function PerformanceGuidelines() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Performance Guidelines for Images | FlashFX Documentation"
        description="Best practices for image resolution, format choice, and animation performance in FlashFX."
        keywords="FlashFX, image performance, resolution, WebP, animation performance, file size"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Performance Guidelines for Images</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="image-resolution" title="Image Resolution">
            <p>Match source resolution to canvas usage. Images larger than necessary for their canvas role consume memory without contributing visible quality.</p>
            <Table
              headers={['Canvas Usage Size', 'Recommended Source Resolution']}
              rows={[
                ['Full 4K canvas background', 'Up to 3840 x 2160'],
                ['Full HD canvas background', 'Up to 1920 x 1080'],
                ['Half-canvas element', 'Approx. 960 x 540'],
                ['Small icon or decoration', 'Approx. 256 x 256'],
                ['Tiny element (under 100px wide)', 'Approx. 200 x 200'],
              ]}
            />
          </Section>

          <Section id="format-choice" title="Format Choice">
            <Table
              headers={['Format', 'Best Use']}
              rows={[
                ['WebP', 'Recommended for all images. Best size/quality ratio.'],
                ['PNG', 'Required only when lossless quality or alpha transparency is critical'],
                ['JPEG', 'Acceptable for photographic images without transparency requirements'],
              ]}
            />
          </Section>

          <Section id="images-in-animation" title="Images in Animation">
            <p>Performance characteristics vary significantly depending on what is animated:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Low cost:</strong> Animating position and rotation on images is low-cost. The renderer uses cached image data and only recalculates compositing.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">High cost:</strong> Animating blur radius, warp mesh points, or distortion effects is high-cost. Each animated frame requires a full filter recalculation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>For animations with multiple simultaneous image elements, disable filter stacks on non-hero images during editing preview — use the filter visibility toggle, then re-enable before export.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Consider working at 720p canvas resolution during animation authoring and scaling up to 1080p or 4K at export time.</li>
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
