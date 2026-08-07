import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'overview', label: 'Overview' },
  { id: 'timeline-vs-sequence-compositor', label: 'Timeline vs. Sequence Compositor' },
  { id: 'primary-vs-secondary-timeline-views', label: 'Primary vs. Secondary Timeline Views' },
];

export default function Architecture() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Timeline Architecture | FlashFX Documentation"
        description="Overview of the FlashFX timeline structure, the difference between the Timeline and Sequence Compositor, and display modes."
        keywords="FlashFX, timeline, sequence compositor, summary view, detailed view"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Timeline Architecture</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="overview" title="Overview">
            <p>The timeline is the command center of the FlashFX animation workflow. It provides a temporal view of the entire composition — every element, every animated property, every keyframe — organized across a horizontal time axis.</p>
            <p>The timeline is divided into two vertical sections:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Track List (left):</strong> Lists all elements in the current sequence. Each element has a row. Rows can be expanded to show individual property tracks. The track list mirrors and stays synchronized with the Layer Panel.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Keyframe Area (right):</strong> The horizontal field where keyframe diamonds appear at their time positions. The playhead runs vertically through this area.</li>
            </ul>
          </Section>

          <Section id="timeline-vs-sequence-compositor" title="Timeline vs. Sequence Compositor">
            <p>FlashFX has two temporal editing environments:</p>
            <p><strong className="text-white">The Timeline</strong> operates within a single sequence. It shows and controls the keyframe animation of elements within that sequence — the micro-level, per-property, per-frame control layer.</p>
            <p><strong className="text-white">The Sequence Compositor</strong> operates at the sequence-assembly level. It arranges multiple named sequences in order to form a longer production — the macro-level, scene-by-scene assembly layer.</p>
            <p>The two environments are accessed in the same panel. Toggle between them via the tabs at the top of the panel: "Timeline" and "Compositor."</p>
          </Section>

          <Section id="primary-vs-secondary-timeline-views" title="Primary vs. Secondary Timeline Views">
            <p>The timeline supports two display modes:</p>
            <p><strong className="text-white">Summary View:</strong> Shows one row per element. Keyframe ranges are shown as color bars (indicating that some animation exists in that time range) rather than individual keyframe diamonds. Useful for seeing the high-level timing structure of many elements simultaneously.</p>
            <p><strong className="text-white">Detailed View:</strong> Shows individual property tracks when an element is expanded. Shows each keyframe as a diamond. The default view for precision animation work.</p>
            <p>Toggle with the collapse/expand all button in the timeline header.</p>
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
