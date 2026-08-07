import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'opening-the-graph-editor', label: 'Opening the Graph Editor' },
  { id: 'reading-the-graph', label: 'Reading the Graph' },
  { id: 'editing-the-curve', label: 'Editing the Curve' },
  { id: 'multiple-property-tracks', label: 'Multiple Property Tracks in the Graph' },
  { id: 'graph-editor-display-options', label: 'Graph Editor Display Options' },
];

export default function EasingGraph() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Easing Graph Editor | FlashFX Documentation"
        description="How to use the bezier graph editor to fine-tune easing curves in FlashFX."
        keywords="FlashFX, easing graph, bezier curve editor, graph editor, animation curve"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Easing Graph Editor</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="opening-the-graph-editor" title="Opening the Graph Editor">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Click the Graph button in the timeline panel</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+E</code>
                </span>
              </li>
            </ul>
            <p>The graph editor opens as a panel below the timeline tracks.</p>
          </Section>

          <Section id="reading-the-graph" title="Reading the Graph">
            <p>The graph displays a bezier curve where:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">X axis</strong> = time (from the current keyframe to the next)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Y axis</strong> = property value (0 = the current keyframe's value, 1 = the next keyframe\'s value)</li>
            </ul>
            <p>The curve describes how the property value changes over the time between the two keyframes.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Steep slope</strong> = fast change (rapid acceleration)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Flat slope</strong> = slow change (deceleration or pause)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Diagonal straight line</strong> = Linear interpolation (constant speed)</li>
            </ul>
          </Section>

          <Section id="editing-the-curve" title="Editing the Curve">
            <p>The bezier curve has two control handles (one near the start, one near the end). Drag these handles to reshape the curve:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Pulling the start handle upward</strong> — the property value changes quickly at the start (ease out)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Pulling the end handle downward</strong> — the property value changes quickly near the end and slows for arrival (ease in)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Both handles pulled toward center</strong> — slow start and slow end (classic ease in-out)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">S-curve</strong> — anticipation effect: the value briefly overshoots in the reverse direction before proceeding forward</li>
            </ul>
          </Section>

          <Section id="multiple-property-tracks" title="Multiple Property Tracks in the Graph">
            <p>When multiple property tracks are selected, all their curves appear in the graph simultaneously in different colors. This allows comparing and coordinating the timing of Position X vs. Position Y, or Scale vs. Opacity.</p>
            <p><strong className="text-white">Normalize view:</strong> A button at the top of the graph scales all curves to the same 0 to 1 range for visual comparison, even if the absolute values differ.</p>
          </Section>

          <Section id="graph-editor-display-options" title="Graph Editor Display Options">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Show velocity curve</strong> — switches the display from value-over-time to velocity-over-time (the derivative of the value curve). Useful for understanding how fast the property is changing at any moment.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Show reference frame</strong> — overlays a small canvas preview at the current time position for spatial context.</li>
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
