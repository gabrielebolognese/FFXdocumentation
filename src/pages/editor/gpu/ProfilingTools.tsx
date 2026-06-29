import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-performance-panel', label: 'The Performance Panel' },
  { id: 'frame-time-breakdown', label: 'Frame Time Breakdown' },
  { id: 'element-level-profiling', label: 'Element-Level Profiling' },
];

export default function ProfilingTools() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Performance Profiling Tools | FlashFX Documentation"
        description="Reference for the Performance panel, frame time breakdown, and element-level profiling in FlashFX."
        keywords="FlashFX, performance panel, profiling, draw calls, frame time, GPU usage"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Performance Profiling Tools</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-performance-panel" title="The Performance Panel">
            <p>View -&gt; Performance opens the Performance panel, which shows:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Current FPS</strong>,frames per second of the live canvas render</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Target FPS</strong>,the project's frame rate setting</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">GPU memory used</strong>,estimated current GPU texture memory usage</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">GPU memory budget</strong>,estimated available budget</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">CPU usage</strong>,estimated browser tab CPU load</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Draw calls</strong>,number of WebGL draw calls per frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Batch count</strong>,number of rendering batches (fewer = better)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Offscreen buffer count</strong>,number of active intermediate render passes</li>
            </ul>
          </Section>

          <Section id="frame-time-breakdown" title="Frame Time Breakdown">
            <p>The performance panel can display a per-frame timing breakdown. Click "Show Breakdown" in the Performance panel to enable this detail.</p>
            <Table
              headers={['Stage', 'What It Measures']}
              rows={[
                ['JavaScript', 'Scene graph update, keyframe evaluation, expression computation'],
                ['Compositing Plan', 'Determining draw order and blend mode isolation requirements'],
                ['Upload', 'Time to upload changed/new textures to GPU'],
                ['Draw', 'WebGL draw call execution time'],
                ['Composite', 'Framebuffer compositing and blending'],
                ['Total', 'Sum of all stages'],
              ]}
            />
          </Section>

          <Section id="element-level-profiling" title="Element-Level Profiling">
            <p>Right-click any element in the Layer Panel and select "Profile Element" to see:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The isolated render cost of just that element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Its VRAM usage</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Whether it is causing a batch break</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The number of offscreen buffers it requires</li>
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">{h}</th>
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
