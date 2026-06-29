import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'in-and-out-points-for-layers', label: 'In and Out Points for Layers' },
  { id: 'trimming-visually', label: 'Trimming Visually' },
  { id: 'moving-a-layer-in-time', label: 'Moving a Layer in Time' },
  { id: 'slip-and-slide', label: 'Slip and Slide' },
  { id: 'split-layer', label: 'Split Layer' },
  { id: 'sequence-snapping', label: 'Sequence Snapping' },
];

export default function LayerDuration() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Layer Duration and Trim | FlashFX Documentation"
        description="Setting layer in/out points, trimming visually, slip, slide, split layer, and sequence snapping in FlashFX."
        keywords="FlashFX, layer duration, trim, slip, slide, split layer, in point, out point"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Layer Duration and Trim</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="in-and-out-points-for-layers" title="In and Out Points for Layers">
            <p>Each layer in the timeline has its own In Point and Out Point that define when it appears and disappears in the composition. Outside its In-Out range, the layer is invisible and does not render.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Setting a layer's In Point:</strong>
                  {' With the layer selected, move the playhead to the desired start time, then press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+[</code>
                  {' (or right-click the layer bar -\u003e "Trim In to Playhead").'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Setting a layer's Out Point:</strong>
                  {' With the layer selected, move the playhead to the desired end time, then press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+]</code>
                  {' (or right-click -\u003e "Trim Out to Playhead").'}
                </span>
              </li>
            </ul>
          </Section>

          <Section id="trimming-visually" title="Trimming Visually">
            <p>Click and drag the <strong className="text-white">left edge</strong> of a layer bar to trim the In Point. Drag the <strong className="text-white">right edge</strong> to trim the Out Point.</p>
            <p><strong className="text-white">Snap while trimming:</strong> Edges snap to the playhead position, to other layer edges, and to keyframe positions when dragging.</p>
          </Section>

          <Section id="moving-a-layer-in-time" title="Moving a Layer in Time">
            <p>Drag the center of the layer bar (not the edges) to reposition the layer's entire time range without changing its duration. Keyframes inside the layer move with it.</p>
          </Section>

          <Section id="slip-and-slide" title="Slip and Slide">
            <p>
              <strong className="text-white">Slip:</strong>
              {' Moves the layer\'s content (and therefore its keyframes) within its fixed In-Out window. The In and Out points don\'t change, but the layer\'s animation data shifts in time relative to them. Use '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt+drag</code>
              {' on a layer bar to slip.'}
            </p>
            <p>
              <strong className="text-white">Slide:</strong>
              {' Moves the layer and all its content in time, but adjusts the neighboring layers to fill the gap/overlap. Use '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Alt+drag</code>
              {' on a layer bar to slide.'}
            </p>
          </Section>

          <Section id="split-layer" title="Split Layer">
            <p>Splits the selected layer into two layers at the current playhead position.</p>
            <p>
              {'Edit -\u003e Split Layer or '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+D</code>
            </p>
            <p>The layer is divided at the playhead. Keyframes before the split point belong to the first piece; keyframes after belong to the second piece. Both pieces share the same element properties, with each independently trimmable.</p>
            <p><strong className="text-white">Uses:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Applying different effects to the same element in different time segments</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Creating a "stutter" effect by duplicating and splitting</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Breaking a long layer into manageable pieces for complex transitions</li>
            </ul>
          </Section>

          <Section id="sequence-snapping" title="Sequence Snapping">
            <p>When repositioning layers in the timeline, layers snap to:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The current playhead position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The In and Out points of other layers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Keyframe positions on other layers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Explicit markers and cues</li>
            </ul>
            <p>Disable snapping in the timeline: click the Snap icon in the timeline header.</p>
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
