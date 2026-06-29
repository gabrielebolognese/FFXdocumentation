import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-is-a-keyframe', label: 'What is a Keyframe' },
  { id: 'creating-keyframes', label: 'Creating Keyframes' },
  { id: 'keyframe-types', label: 'Keyframe Types' },
  { id: 'selecting-keyframes', label: 'Selecting Keyframes' },
  { id: 'moving-keyframes', label: 'Moving Keyframes' },
  { id: 'copying-and-pasting-keyframes', label: 'Copying and Pasting Keyframes' },
  { id: 'deleting-keyframes', label: 'Deleting Keyframes' },
  { id: 'keyframe-shortcuts-summary', label: 'Keyframe Shortcuts Summary' },
];

export default function KeyframeSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Keyframe System | FlashFX Documentation"
        description="Complete reference for creating, selecting, moving, copying, and managing keyframes in FlashFX."
        keywords="FlashFX, keyframes, keyframe types, creating keyframes, animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Keyframe System</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="what-is-a-keyframe" title="What is a Keyframe">
            <p>A keyframe records the value of a specific property at a specific point in time. The animation engine interpolates between keyframes to produce smooth motion between recorded states.</p>
            <p>A keyframe is defined by:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Time</strong>,which frame it is on</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Property</strong>,which property it controls (X position, opacity, blur radius, etc.)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Value</strong>,the property value at this moment</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Easing</strong>,the interpolation curve on the way out of this keyframe toward the next</li>
            </ul>
          </Section>

          <Section id="creating-keyframes" title="Creating Keyframes">
            <p><strong className="text-white">Automatic (Record Mode on):</strong> Change any property while Record Mode is active. A keyframe is created immediately at the current playhead position.</p>
            <p>
              <strong className="text-white">Manual:</strong>
              {' Press '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">K</code>
              {' with an element selected to create a keyframe on all currently animated properties at the current playhead time. This inserts a "hold" keyframe at the current value without changing the property.'}
            </p>
            <p><strong className="text-white">Via the property field:</strong> Click the diamond icon in the Properties Panel next to any animatable property to create a single keyframe at the current time on that specific property.</p>
          </Section>

          <Section id="keyframe-types" title="Keyframe Types">
            <Table
              headers={['Type', 'Indicator', 'Description']}
              rows={[
                ['Standard', 'Filled diamond', 'Smooth interpolation to the next keyframe using the defined easing'],
                ['Hold', 'Filled square', 'Value holds constant until the next keyframe; no interpolation'],
                ['Roving', 'Open diamond', 'Used on motion paths; its timing is automatically adjusted to produce constant velocity'],
              ]}
            />
            <p><strong className="text-white">Changing keyframe type:</strong> Right-click any keyframe and select the desired type from the context menu.</p>
          </Section>

          <Section id="selecting-keyframes" title="Selecting Keyframes">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Click a keyframe diamond to select it</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+click</code>
                  {' to add to selection'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Click and drag in empty timeline space to marquee-select a range of keyframes</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+A</code>
                  {' in the timeline to select all keyframes on all tracks for all elements'}
                </span>
              </li>
            </ul>
          </Section>

          <Section id="moving-keyframes" title="Moving Keyframes">
            <p>Drag selected keyframes left or right to change their time position. Multiple selected keyframes move together, preserving their relative timing.</p>
            <p>
              <strong className="text-white">Precision move:</strong>
              {' With a keyframe selected, hold '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl</code>
              {' and press '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Left Arrow</code>
              {' / '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Right Arrow</code>
              {' to move by one frame at a time.'}
            </p>
            <p><strong className="text-white">Numeric position:</strong> Right-click a keyframe and select "Set Time" to enter an exact frame number.</p>
          </Section>

          <Section id="copying-and-pasting-keyframes" title="Copying and Pasting Keyframes">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Copy: '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+C</code>
                  {' on selected keyframes'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Paste: '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+V</code>
                  {',pastes at the current playhead position'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Paste in Place: '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+V</code>
                  {',pastes at the same time positions as the source'}
                </span>
              </li>
            </ul>
            <p>Keyframes can be copied between elements of the same type. Pasting onto an incompatible element is ignored for the incompatible properties.</p>
          </Section>

          <Section id="deleting-keyframes" title="Deleting Keyframes">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Select and press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Delete</code>
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Right-click and select "Delete Keyframe"</li>
            </ul>
            <p>When all keyframes on a property track are deleted, the track is removed from the timeline for that element.</p>
          </Section>

          <Section id="keyframe-shortcuts-summary" title="Keyframe Shortcuts Summary">
            <Table
              headers={['Action', 'Shortcut']}
              rows={[
                ['Create keyframe on all active properties', 'K'],
                ['Step to previous keyframe', 'J'],
                ['Step to next keyframe', '; (semicolon)'],
                ['Select all keyframes for element', 'Ctrl+A (in timeline)'],
                ['Move keyframe 1 frame earlier', 'Ctrl+Left Arrow'],
                ['Move keyframe 1 frame later', 'Ctrl+Right Arrow'],
              ]}
            />
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
