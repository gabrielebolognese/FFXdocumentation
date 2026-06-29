import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'value-graph-vs-speed-graph', label: 'Value Graph vs. Speed Graph' },
  { id: 'multiple-track-graph-editing', label: 'Multiple Track Graph Editing' },
  { id: 'snapping-in-the-graph-editor', label: 'Snapping in the Graph Editor' },
  { id: 'graph-editor-overlay', label: 'Graph Editor Overlay' },
];

export default function GraphEditor() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Graph Editor,Advanced | FlashFX Documentation"
        description="Value graph vs. speed graph, multi-track editing, snapping, and graph overlay in FlashFX."
        keywords="FlashFX, graph editor, value graph, speed graph, velocity curve, graph overlay"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Graph Editor,Advanced</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="value-graph-vs-speed-graph" title="Value Graph vs. Speed Graph">
            <p>The graph editor has two modes, toggled with the buttons at the top of the panel:</p>
            <p><strong className="text-white">Value Graph:</strong> Shows the property value over time. The Y axis is the actual value (pixels, degrees, opacity percentage). The bezier curve handles control the shape of the value change. This is the standard mode.</p>
            <p><strong className="text-white">Speed Graph:</strong> Shows the rate of change (velocity) over time. The Y axis is how fast the value is changing at each moment. A peak in the speed graph means the animation is moving quickly; a valley means it is moving slowly or stopped.</p>
            <p>Use the Speed Graph when working on smooth, physically accurate motion,it is easier to ensure velocity starts at zero (smooth takeoff), peaks cleanly, and returns to zero (smooth landing) by looking directly at the velocity profile rather than inferring it from the value curve.</p>
          </Section>

          <Section id="multiple-track-graph-editing" title="Multiple Track Graph Editing">
            <p>When multiple property tracks are selected, all their curves appear in the graph editor simultaneously. Each track is drawn in its assigned color.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Editing all curves simultaneously:</strong> Select handles across all curves by marquee-selecting in the graph area.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Editing a single curve:</strong> Click the color swatch of the desired track in the track list to isolate it in the graph.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Normalize curves:</strong> When value ranges differ significantly (e.g., Position X has values 0 to 1920, Opacity has values 0 to 1), the normalize button scales all curves to the same 0 to 1 display range for visual comparison.</li>
            </ul>
          </Section>

          <Section id="snapping-in-the-graph-editor" title="Snapping in the Graph Editor">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Snap to whole values:</strong>
                  {' Hold '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl</code>
                  {' while dragging a graph handle to snap the value to whole numbers.'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Snap to other keyframe values:</strong> A yellow indicator line appears when a handle aligns with another keyframe's value, making it easy to create "match cut" animations where an element reaches the exact same state as another.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Snap to zero velocity:</strong> A specific snap target for the Speed Graph,handles snap to the horizontal axis, ensuring zero velocity at that moment. Critical for achieving convincingly smooth physics-based animation.</li>
            </ul>
          </Section>

          <Section id="graph-editor-overlay" title="Graph Editor Overlay">
            <p>Toggle View -&gt; Show Graph Overlay on Canvas to display a small, transparent version of the graph editor directly on the canvas while in Animate mode. The overlay follows the selected element and shows its motion graphs without needing to look away from the canvas. Useful for adjusting easing while observing the visual result simultaneously.</p>
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
