import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'export-rendering', label: 'Export Rendering' },
  { id: 'anti-aliasing-in-export', label: 'Anti-Aliasing in Export' },
  { id: 'export-quality-and-3d', label: 'Export Quality and 3D' },
  { id: 'known-export-limitation-transparency-and-3d', label: 'Known Export Limitation,Transparency and 3D' },
];

export default function ThreeDExporting() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Exporting 3D Compositions | FlashFX Documentation"
        description="Reference for export rendering speed, anti-aliasing, quality settings, and transparency limitations for 3D in FlashFX."
        keywords="FlashFX, 3D export, anti-aliasing, MSAA, export quality, 3D transparency"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Exporting 3D Compositions</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="export-rendering" title="Export Rendering">
            <p>Export rendering is not subject to real-time constraints. The export renderer renders each frame sequentially, taking as long as needed per frame.</p>
            <p><strong className="text-white">Export speed factors for 3D:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Canvas resolution (4K = approximately 4x longer than 1080p)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Number of 3D elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>3D lighting enabled/disabled</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Blend modes on 3D elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Filter stacks on 3D elements</li>
            </ul>
          </Section>

          <Section id="anti-aliasing-in-export" title="Anti-Aliasing in Export">
            <p>Exported frames receive <strong className="text-white">4x MSAA (Multi-Sample Anti-Aliasing)</strong> applied to all 3D element edges. This eliminates aliasing (jagged edges) on tilted or rotating shapes that may appear during realtime preview.</p>
            <p>MSAA is disabled during preview to preserve performance but always enabled for export. Final exports will appear smoother than the preview for 3D elements with hard edges at oblique angles.</p>
          </Section>

          <Section id="export-quality-and-3d" title="Export Quality and 3D">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Maximum Quality</strong>,applies the highest anti-aliasing and renders each frame at full resolution with no resampling</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">High Quality</strong>,applies MSAA but uses slight texture filtering for performance</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Medium / Low</strong>,reduce texture quality; noticeable on high-frequency texture fills on 3D elements</li>
            </ul>
            <p>For 3D compositions, always export at <strong className="text-white">High</strong> or <strong className="text-white">Maximum</strong> quality. The visual difference is most apparent on angled edges and texture-filled 3D planes.</p>
          </Section>

          <Section id="known-export-limitation-transparency-and-3d" title="Known Export Limitation,Transparency and 3D">
            <p>Exporting transparent backgrounds with 3D elements that use non-Normal blend modes may produce composite errors at element boundaries in some configurations. For transparent 3D exports:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Set all non-Normal blend mode 3D elements to Normal mode during export</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Or, export on a solid black or white background and composite the transparency in a dedicated compositing application (After Effects, DaVinci Resolve, etc.)</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
