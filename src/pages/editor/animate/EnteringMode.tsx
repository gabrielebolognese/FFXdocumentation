import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'switching-to-animate-mode', label: 'Switching to Animate Mode' },
  { id: 'record-mode-toggle', label: 'Record Mode Toggle' },
  { id: 'the-playhead', label: 'The Playhead' },
];

export default function EnteringMode() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Entering Animate Mode | FlashFX Documentation"
        description="How to enter Animate Mode, use Record Mode, and navigate the playhead in FlashFX."
        keywords="FlashFX, animate mode, record mode, playhead, timeline"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Entering Animate Mode</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="switching-to-animate-mode" title="Switching to Animate Mode">
            <p>
              {'Click the Animate button in the mode switcher at the top of the interface, or press '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+2</code>
              {'.'}
            </p>
            <p>The interface rearranges when Animate Mode is entered:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The timeline expands to occupy the lower half of the screen</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Property tracks become visible for all animated elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The playhead becomes the primary focus of interaction</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The Properties Panel collapses to show only animation-relevant properties</li>
            </ul>
          </Section>

          <Section id="record-mode-toggle" title="Record Mode Toggle">
            <p>Record Mode is what makes property changes create keyframes automatically.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Record Active (red dot):</strong> Every property change made to any selected element is captured as a keyframe at the current playhead position.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Record Inactive:</strong> Property changes update the element globally, without creating keyframes. Use this to make baseline adjustments that affect the element across the entire timeline.</li>
            </ul>
            <p>Toggle Record Mode:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Click the Record button (red circle) in the timeline transport controls</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Alt+R</code>
                </span>
              </li>
            </ul>
            <p><strong className="text-white">Default behavior:</strong> Record Mode is automatically activated when Animate Mode is opened (configurable in Application Settings).</p>
          </Section>

          <Section id="the-playhead" title="The Playhead">
            <p>The playhead is the thin vertical line running the full height of the timeline. It represents the current time position.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Position:</strong> Shown in the timecode display as HH:MM:SS:FF (hours, minutes, seconds, frames)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Moving the playhead:</strong> Click anywhere in the timeline ruler to jump to that time. Drag the playhead handle for precise scrubbing.</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Keyboard navigation:</strong>
                  {' '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Left Arrow</code>
                  {' / '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Right Arrow</code>
                  {' for frame-by-frame stepping. '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Home</code>
                  {' / '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">End</code>
                  {' for start/end of the sequence.'}
                </span>
              </li>
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
