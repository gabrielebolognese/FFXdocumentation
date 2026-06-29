import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-framebuffer-access-problem', label: 'The Framebuffer Access Problem' },
  { id: 'how-flashfx-handles-blend-modes', label: 'How FlashFX Handles Blend Modes' },
  { id: 'blend-mode-performance-tiers', label: 'Blend Mode Performance Tiers' },
  { id: 'blend-mode-limits', label: 'Blend Mode Limits' },
];

export default function BlendModeConstraints() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Blend Mode Constraints | FlashFX Documentation"
        description="How WebGL framebuffer limitations affect blend mode performance and implementation in FlashFX."
        keywords="FlashFX, blend mode, WebGL, framebuffer, GPU cost, blend mode performance"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Blend Mode Constraints</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-framebuffer-access-problem" title="The Framebuffer Access Problem">
            <p>In native applications, implementing blend modes is straightforward,the GPU can read any previously rendered pixel directly to compute the blend result.</p>
            <p>In WebGL, the framebuffer (the current rendering target) is <strong className="text-white">write-only by default</strong>. Reading from it requires copying it to a readable texture, which is slow.</p>
          </Section>

          <Section id="how-flashfx-handles-blend-modes" title="How FlashFX Handles Blend Modes">
            <p>For elements using non-Normal blend modes, FlashFX uses one of two strategies:</p>
            <p><strong className="text-white">Strategy A,Shader Compositing (preferred):</strong> The already-rendered background is copied to an offscreen texture before drawing the blend mode element. The element's shader reads from this texture and computes the blend in the same draw call.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Adds one texture copy per blend mode layer</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The copy is performed at canvas resolution (large canvases = expensive copy)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Multiple consecutive non-Normal blend layers each add a separate copy</li>
            </ul>
            <p><strong className="text-white">Strategy B,Isolated Pass:</strong> The element is rendered to an offscreen buffer, then composited onto the background using a blend mode shader. Used for complex blend modes or groups with blend modes.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Requires a full offscreen buffer at the element's bounding box dimensions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>More memory-intensive but avoids the full-canvas texture copy</li>
            </ul>
          </Section>

          <Section id="blend-mode-performance-tiers" title="Blend Mode Performance Tiers">
            <Table
              headers={['Blend Mode', 'Implementation', 'Relative Cost']}
              rows={[
                ['Normal', 'Native compositing', 'Baseline (1x)'],
                ['Multiply, Screen, Overlay', 'Shader compositing', '~1.5x'],
                ['Soft Light, Hard Light', 'Shader compositing', '~2x'],
                ['Color Dodge, Burn', 'Shader compositing (requires per-channel computation)', '~2.5x'],
                ['Difference, Exclusion', 'Shader compositing', '~2x'],
                ['Hue, Saturation, Color, Luminosity', 'Shader compositing (requires HSL conversion)', '~3x'],
                ['Any mode on group', 'Isolated pass', '~4x+ depending on group complexity'],
              ]}
            />
            <p>These costs multiply with canvas resolution. A blend mode on a 4K canvas costs 4x more than the same blend mode on a 1080p canvas.</p>
          </Section>

          <Section id="blend-mode-limits" title="Blend Mode Limits">
            <p>FlashFX warns when:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>More than 6 non-Normal blend mode elements are active simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>More than 3 blend mode groups overlap at any point in the canvas</li>
            </ul>
            <p>Beyond these thresholds, rendering performance degrades significantly on mid-range hardware.</p>
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
