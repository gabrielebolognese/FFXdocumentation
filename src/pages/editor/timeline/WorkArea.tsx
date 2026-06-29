import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'setting-the-work-area', label: 'Setting the Work Area' },
  { id: 'work-area-manipulation', label: 'Work Area Manipulation' },
  { id: 'export-range-override', label: 'Export Range Override' },
];

export default function WorkArea() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Work Area and Export Range | FlashFX Documentation"
        description="Setting and manipulating the work area in/out points and export range options in FlashFX."
        keywords="FlashFX, work area, in point, out point, export range, preview loop"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Work Area and Export Range</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="setting-the-work-area" title="Setting the Work Area">
            <p>The Work Area is a time range defined by an <strong className="text-white">In Point</strong> (start) and <strong className="text-white">Out Point</strong> (end). It serves two purposes:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Preview looping,Loop playback plays only within the work area</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Export scope,The default export range</li>
            </ul>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Setting the In Point:</strong>
                  {' Move playhead to the desired start time, press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">I</code>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Setting the Out Point:</strong>
                  {' Move playhead to the desired end time, press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">O</code>
                </span>
              </li>
            </ul>
            <p><strong className="text-white">Visual indicator:</strong> The work area is shown as a light-colored highlight in the timeline ruler between the In and Out markers. Areas outside the work area are dimmed.</p>
          </Section>

          <Section id="work-area-manipulation" title="Work Area Manipulation">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Drag In/Out markers:</strong> The In and Out markers (bracket symbols in the ruler) can be dragged directly to reposition them.</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Move work area:</strong>
                  {' Hold '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code>
                  {' and drag inside the work area band to slide the entire In-Out range without changing its duration.'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Expand/contract:</strong> Drag the In or Out marker independently to change the range while keeping the other fixed.</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Set work area to current frame:</strong>
                  {' '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+I</code>
                  {' for In, '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+O</code>
                  {' for Out.'}
                </span>
              </li>
            </ul>
          </Section>

          <Section id="export-range-override" title="Export Range Override">
            <p>In the export dialog, the "Export Range" selector offers:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Work Area (default)</strong>,exports only within the In-Out range</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Full Project</strong>,ignores work area; exports from frame 0 to project end</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Custom</strong>,type specific start and end values</li>
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
