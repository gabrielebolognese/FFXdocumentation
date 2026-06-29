import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'tier-detection', label: 'Tier Detection' },
  { id: 'adaptive-behavior-by-tier', label: 'Adaptive Behavior by Tier' },
  { id: 'manual-tier-override', label: 'Manual Tier Override' },
];

export default function TierDetection() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="GPU Tier Detection and Adaptive Quality | FlashFX Documentation"
        description="How FlashFX benchmarks the GPU, assigns performance tiers, and adapts feature availability accordingly."
        keywords="FlashFX, GPU tier, adaptive quality, GPU benchmark, performance tier"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">GPU Tier Detection and Adaptive Quality</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="tier-detection" title="Tier Detection">
            <p>On session start, FlashFX performs a brief GPU benchmark to classify the device into a performance tier. This is used to set initial defaults and to trigger warnings for heavy operations.</p>
            <p><strong className="text-white">Detection method:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Renders a test composition with known complexity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Measures frame rate over approximately 500ms</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Classifies the result against threshold benchmarks</li>
            </ul>
            <Table
              headers={['Tier', 'Description', 'Typical Hardware']}
              rows={[
                ['Tier 0', 'Minimal,software rendering only', 'No GPU, or GPU not accessible via WebGL'],
                ['Tier 1', 'Low,basic GPU capability', 'Intel HD integrated graphics (older), mobile basic'],
                ['Tier 2', 'Medium,capable for most FlashFX use', 'Intel Iris / AMD Radeon integrated, mid-range mobile'],
                ['Tier 3', 'High,suitable for complex compositions', 'Dedicated GPU (GTX 1060+, RX 580+, M1 integrated)'],
                ['Tier 4', 'Ultra,suitable for 4K complex compositions', 'High-end dedicated GPU (RTX 3070+, RX 6800+, M2 Pro+)'],
              ]}
            />
          </Section>

          <Section id="adaptive-behavior-by-tier" title="Adaptive Behavior by Tier">
            <Table
              headers={['Feature', 'Tier 0', 'Tier 1', 'Tier 2', 'Tier 3', 'Tier 4']}
              rows={[
                ['Max texture resolution', '2048x2048', '4096x4096', '4096x4096', '8192x8192', '16384x16384'],
                ['Default preview quality', 'Quarter', 'Half', 'Half', 'Full', 'Full'],
                ['Blend modes', 'Disabled', 'Limited', 'All', 'All', 'All'],
                ['Blur filter quality', 'N/A', 'Low', 'Medium', 'High', 'Ultra'],
                ['3D features', 'Disabled', 'Disabled', 'Basic', 'Full', 'Full'],
                ['Real-time filter preview', 'Off', 'Off', 'On (simple)', 'On (all)', 'On (all)'],
              ]}
            />
          </Section>

          <Section id="manual-tier-override" title="Manual Tier Override">
            <p>The detected tier can be overridden in Application Settings -&gt; Performance -&gt; Force GPU Tier. Use this if the detection benchmark produced an inaccurate result.</p>
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
