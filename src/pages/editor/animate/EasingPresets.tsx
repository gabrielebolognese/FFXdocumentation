import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'standard-presets', label: 'Standard Presets' },
  { id: 'dramatic-presets', label: 'Dramatic Presets' },
  { id: 'physical-presets', label: 'Physical Presets' },
  { id: 'stepped-presets', label: 'Stepped Presets' },
];

export default function EasingPresets() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Easing Presets,Full Reference | FlashFX Documentation"
        description="Complete reference for all easing presets including standard, dramatic, physical, and stepped presets in FlashFX."
        keywords="FlashFX, easing presets, ease in, ease out, bounce, elastic, stepped, animation presets"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Easing Presets,Full Reference</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="standard-presets" title="Standard Presets">
            <Table
              headers={['Preset', 'Description', 'Velocity Profile']}
              rows={[
                ['Linear', 'Constant speed from start to finish', 'Flat horizontal line'],
                ['Ease', 'Gentle acceleration at start, gentle deceleration at end', 'Soft S-curve'],
                ['Ease In', 'Slow start, full speed at end', 'Curves upward steeply at right'],
                ['Ease Out', 'Full speed at start, slow at end', 'Curves upward steeply at left'],
                ['Ease In-Out', 'Slow at both ends, fast in the middle', 'Moderate S-curve'],
              ]}
            />
          </Section>

          <Section id="dramatic-presets" title="Dramatic Presets">
            <Table
              headers={['Preset', 'Description']}
              rows={[
                ['Ease In Strong', 'Slow start with aggressive acceleration; arrives at full speed'],
                ['Ease Out Strong', 'Full speed at start; heavy deceleration to a deliberate stop'],
                ['Ease In-Out Strong', 'Pronounced slow at both ends with fast middle section'],
                ['Exponential In', 'Very slow start that accelerates dramatically'],
                ['Exponential Out', 'Very fast start that decelerates dramatically'],
              ]}
            />
          </Section>

          <Section id="physical-presets" title="Physical Presets">
            <Table
              headers={['Preset', 'Description']}
              rows={[
                ['Bounce', 'Overshoots the end value and bounces back, settling at the target'],
                ['Bounce Strong', 'More pronounced bounce with additional oscillation'],
                ['Elastic', 'Overshoots and oscillates like a spring before settling'],
                ['Elastic In', 'Elastic movement into the end value'],
                ['Anticipate', 'Briefly moves backward (opposite direction) before moving forward,common in cartoon animation'],
                ['Anticipate + Overshoot', 'Both anticipation at start and overshoot at end'],
                ['Back In', 'Pulls back slightly before launching forward'],
                ['Back Out', 'Overshoots and pulls back to settle'],
              ]}
            />
          </Section>

          <Section id="stepped-presets" title="Stepped Presets">
            <Table
              headers={['Preset', 'Description']}
              rows={[
                ['Step Start', 'Value jumps immediately to end value at the first frame; holds there'],
                ['Step End', 'Value holds at start value until the final frame, then jumps to end value'],
                ['Steps (n)', 'Divides the transition into n discrete equal jumps; configurable step count'],
              ]}
            />
            <p>Stepped easing is used for stop-motion effects, mechanical counters, and 2D character animation on limited frames.</p>
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
