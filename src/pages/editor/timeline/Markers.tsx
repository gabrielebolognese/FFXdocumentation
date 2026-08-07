import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'global-markers', label: 'Global Markers' },
  { id: 'layer-markers', label: 'Layer Markers' },
  { id: 'navigating-between-markers', label: 'Navigating Between Markers' },
  { id: 'using-markers-for-beat-syncing', label: 'Using Markers for Beat Syncing' },
];

export default function Markers() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Markers and Annotations | FlashFX Documentation"
        description="How to add global markers, layer markers, navigate between markers, and use markers for beat syncing in FlashFX."
        keywords="FlashFX, markers, annotations, global marker, layer marker, beat sync"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Markers and Annotations</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="global-markers" title="Global Markers">
            <p>Global markers are time annotations on the main sequence timeline ruler. They appear as colored vertical lines with labels and are visible to all team members who share the project.</p>
            <p>
              <strong className="text-white">Adding a marker:</strong>
              {' Press '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">M</code>
              {' while the playhead is at the desired time, or right-click the ruler -\u003e "Add Marker."'}
            </p>
            <p>A dialog prompts for:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Label</strong> — short name for the marker (shown in the ruler)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color</strong> — the color of the marker line</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Comment</strong> — longer note text (visible when hovering over the marker or in the Markers panel)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Duration</strong> — optionally assign a time range to the marker (creates a marker region rather than a single-point marker)</li>
            </ul>
          </Section>

          <Section id="layer-markers" title="Layer Markers">
            <p>Individual layers can have their own markers, independent of the global timeline markers. Layer markers are visible only when the layer is expanded in the timeline.</p>
            <p>Adding a layer marker: right-click any keyframe area on the specific layer's row -&gt; "Add Layer Marker."</p>
          </Section>

          <Section id="navigating-between-markers" title="Navigating Between Markers">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+Right Arrow</code>
                  {' — jump to next marker'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+Left Arrow</code>
                  {' — jump to previous marker'}
                </span>
              </li>
            </ul>
            <p><strong className="text-white">Markers panel:</strong> View -&gt; Markers Panel opens a list of all global markers in the project with their times, labels, and comments. Click any marker row to jump the playhead to that time.</p>
          </Section>

          <Section id="using-markers-for-beat-syncing" title="Using Markers for Beat Syncing">
            <p>When producing music-driven content, markers can be placed at each beat or phrase boundary (using audio analysis as reference, or by manually tapping to a metronome). Animation keyframes can then be snapped to marker positions, ensuring motion aligns to musical beats.</p>
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
