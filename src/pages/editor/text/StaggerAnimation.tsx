import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function StaggerAnimation() {
  return (
    <Layout>
      <SEO
        title="Stagger and Per-Unit Animation | FlashFX Documentation"
        description="Reference for the stagger system and per-unit animation properties in FlashFX."
        keywords="FlashFX, stagger animation, per-unit animation, text stagger, cascade animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Stagger and Per-Unit Animation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <Section title="Stagger System">
            <p>Rather than manually keyframing each character, word, or line individually, the stagger system applies a time offset to each successive unit, creating a sequential animation cascade automatically.</p>
            <p><strong className="text-white">Stagger Settings:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Delay per Unit</strong> — time in milliseconds between the start of each successive unit's animation. Default: 50ms.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Stagger Direction</strong> — Forward (first character first), Backward (last character first), From Center (outward from center), From Edges (inward toward center), Random (each unit starts at a random delay within a configurable range)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Easing Override</strong> — an easing curve applied to the stagger timing envelope itself, separate from the easing applied to each unit's individual animation</li>
            </ul>
          </Section>
          <Section title="Per-Unit Properties">
            <p>When stagger is active, the following properties can be defined as the animated state that each unit transitions from:</p>
            <Table
              headers={['Property', 'Description']}
              rows={[
                ['Opacity', 'Fade in from 0% opacity'],
                ['Position X / Y', 'Slide in from an offset position'],
                ['Scale X / Y', 'Scale in from a smaller or larger size'],
                ['Rotation', 'Rotate in from a defined angle'],
                ['Blur', 'Defocus in from a blurred state'],
                ['Color', 'Transition from an alternate color to the primary color'],
                ['Skew X / Y', 'Straighten in from a skewed state'],
                ['Baseline Shift', 'Rise up from below the baseline'],
              ]}
            />
            <p>Multiple properties can be combined. Example: entering from opacity 0, position Y +30px, blur radius 8px simultaneously creates a "lift in from below while fading and sharpening" effect.</p>
          </Section>
          <Section title="Stagger with Manual Overrides">
            <p>The stagger system provides automated timing, but individual units can receive manual overrides on top of the stagger:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Select a specific unit's keyframe in the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Adjust the keyframe position to deviate from the stagger timing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Add additional keyframes for properties not covered by the stagger definition</li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
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
