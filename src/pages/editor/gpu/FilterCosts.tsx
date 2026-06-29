import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'per-filter-rendering-costs', label: 'Per-Filter Rendering Costs' },
  { id: 'filter-resolution-scaling', label: 'Filter Resolution Scaling' },
  { id: 'animated-filters', label: 'Animated Filters' },
];

export default function FilterCosts() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Filter and Effect GPU Costs | FlashFX Documentation"
        description="Per-filter GPU cost reference, resolution scaling, and animated filter performance in FlashFX."
        keywords="FlashFX, filter GPU cost, blur performance, animated filter, resolution scaling"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Filter and Effect GPU Costs</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="per-filter-rendering-costs" title="Per-Filter Rendering Costs">
            <Table
              headers={['Filter Type', 'GPU Cost', 'Notes']}
              rows={[
                ['Color adjustment (brightness, contrast, curves, etc.)', 'Very low', 'Single-pass fragment shader'],
                ['Hue rotation, saturation', 'Very low', 'Single-pass fragment shader'],
                ['Gaussian blur (small radius)', 'Low', 'Separable kernel,two passes'],
                ['Gaussian blur (large radius, >30px)', 'Medium', 'Multi-pass accumulation'],
                ['Motion blur', 'Medium', 'Multi-sample accumulation'],
                ['Radial / zoom blur', 'Medium-High', 'Many samples from center'],
                ['Distortion (warp, ripple)', 'Medium', 'Dependent texture reads'],
                ['Displacement map', 'Medium-High', 'Two simultaneous texture reads'],
                ['Lens flare / god rays', 'High', 'Ray-marching algorithm'],
                ['Mesh warp', 'High', 'Per-vertex interpolation across mesh'],
                ['Stacked filters (any 5+)', 'Very high', 'Additive cost; each adds a rendering pass'],
              ]}
            />
          </Section>

          <Section id="filter-resolution-scaling" title="Filter Resolution Scaling">
            <p>Some filters (particularly blur types) scale their cost with canvas resolution:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>At 1080p: Gaussian blur radius 50px costs approximately 1ms per frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>At 4K: The same blur costs approximately 4ms per frame (4x resolution = 4x area)</li>
            </ul>
            <p>For export at 4K, filter computation time is multiplied significantly. This is expected,export is slower than realtime, and the export renderer is not limited by realtime performance requirements.</p>
          </Section>

          <Section id="animated-filters" title="Animated Filters">
            <p>When a filter parameter is animated (keyframed to change over time), the GPU shader must be re-evaluated on every frame. Static filters are applied once and the result is cached as long as the underlying element does not change.</p>
            <p><strong className="text-white">Optimization:</strong> Even if a filter is conceptually "constant" for a visual look, avoid placing keyframes on filter parameters unless the value actually needs to change. Keyframed filters prevent caching.</p>
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
