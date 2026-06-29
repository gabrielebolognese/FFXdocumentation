import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'keyframe-alignment', label: 'Keyframe Alignment' },
  { id: 'time-stretching-selected-keyframes', label: 'Time Stretching Selected Keyframes' },
  { id: 'reversing-keyframes', label: 'Reversing Keyframes' },
  { id: 'keyframe-interpolation-bulk-edit', label: 'Keyframe Interpolation Bulk Edit' },
  { id: 'hold-keyframes', label: 'Hold Keyframes' },
];

export default function KeyframeOperations() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Keyframe Operations,Advanced | FlashFX Documentation"
        description="Advanced keyframe alignment, time stretching, reversing, bulk interpolation editing, and hold keyframes in FlashFX."
        keywords="FlashFX, keyframe alignment, time stretch, reverse keyframes, hold keyframe, bulk easing"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Keyframe Operations,Advanced</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="keyframe-alignment" title="Keyframe Alignment">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Align to Playhead:</strong>
                  {' Select keyframes and press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+K</code>
                  {' to snap all selected keyframes to the current playhead position. Useful for synchronizing animation events across multiple layers to a specific moment.'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Distribute Keyframes:</strong> Select three or more keyframes on a single track and use Timeline -&gt; Distribute Keyframes -&gt; Evenly in Time to space them at equal intervals between the first and last selected keyframe.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Align to First/Last in Selection:</strong> Select multiple keyframes and use Timeline -&gt; Align Keyframes -&gt; To First Selected or To Last Selected to collapse all keyframes to the same time position.</li>
            </ul>
          </Section>

          <Section id="time-stretching-selected-keyframes" title="Time Stretching Selected Keyframes">
            <p>Select a range of keyframes and use Timeline -&gt; Scale Time of Selected Keyframes:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Enter a scale percentage (e.g., 200% makes the animation take twice as long)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Or enter absolute start and end frame numbers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Or enter a duration in frames or seconds</li>
            </ul>
            <p>The keyframe positions are redistributed proportionally within the specified time range. Values are not changed,only timing is affected.</p>
          </Section>

          <Section id="reversing-keyframes" title="Reversing Keyframes">
            <p>Select a range of keyframes on one or more tracks and use Timeline -&gt; Reverse Selected Keyframes.</p>
            <p>The keyframes are reordered so that the animation plays backward,what was the end state becomes the start state, and vice versa. Timing is mirrored around the center of the selection.</p>
          </Section>

          <Section id="keyframe-interpolation-bulk-edit" title="Keyframe Interpolation Bulk Edit">
            <p>With multiple keyframes selected (across multiple tracks):</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+F9</code>
                  {',set all to Linear interpolation'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+F9</code>
                  {',set all to Ease In'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+F9</code>
                  {',set all to Ease Out'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">F9</code>
                  {',set all to Ease In-Out'}
                </span>
              </li>
            </ul>
            <p>These shortcuts are the fastest way to change easing across a large selection simultaneously.</p>
          </Section>

          <Section id="hold-keyframes" title="Hold Keyframes">
            <p>Hold keyframes maintain the value at the keyframe until the next keyframe, with no interpolation. Uses:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Discrete state changes</strong>,a shape is in state A, then at frame 30 it instantly becomes state B</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Blink effects</strong>,alternating between opacity 0 and 100 with hold keyframes creates a hard blink</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Step animations</strong>,property value counts up or down in whole steps</li>
            </ul>
            <p>Converting to hold: Right-click any keyframe -&gt; "Toggle Hold Keyframe."</p>
            <p>To convert a range: Select all keyframes in a range across one or more tracks -&gt; Right-click -&gt; "Convert to Hold."</p>
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
