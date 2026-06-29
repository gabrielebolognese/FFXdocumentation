import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-is-time-remapping', label: 'What is Time Remapping' },
  { id: 'enabling-time-remap', label: 'Enabling Time Remap' },
  { id: 'freeze-frame', label: 'Freeze Frame' },
  { id: 'speed-ramping', label: 'Speed Ramping' },
];

export default function TimeRemapping() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Time Remapping | FlashFX Documentation"
        description="How to use time remapping to control playback speed dynamically, freeze frames, and create speed ramps in FlashFX."
        keywords="FlashFX, time remap, speed ramp, freeze frame, slow motion, time remapping"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Time Remapping</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="what-is-time-remapping" title="What is Time Remapping">
            <p>Time remapping allows the playback speed of an entire sequence,or of a nested sequence,to be dynamically changed over time via keyframes. It decouples the "real" time from the sequence's internal time.</p>
            <p>A time remap keyframe says: "At real time T, show the sequence at internal time V."</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Two keyframes at (0 to 0) and (60f to 30f) play the sequence at half speed for the first 60 frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Two keyframes at (0 to 60f) and (60f to 0) play the sequence backward</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Keyframes with Hold interpolation freeze a frame indefinitely</li>
            </ul>
          </Section>

          <Section id="enabling-time-remap" title="Enabling Time Remap">
            <p>Select any sequence layer in the Compositor, then choose Animation -&gt; Enable Time Remap.</p>
            <p>A "Time Remap" track appears for the sequence layer. By default, two keyframes are created: one at frame 0 mapping to 0, and one at the end of the sequence mapping to the sequence's total duration (normal-speed playback).</p>
          </Section>

          <Section id="freeze-frame" title="Freeze Frame">
            <p>To freeze a frame indefinitely:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Enable Time Remap</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Add a keyframe at the desired freeze point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Change it to a Hold keyframe type (right-click -&gt; Toggle Hold Keyframe)</li>
            </ol>
            <p>The sequence will play normally up to the freeze keyframe, then hold that frame for the duration following it.</p>
          </Section>

          <Section id="speed-ramping" title="Speed Ramping">
            <p>Create acceleration and deceleration effects by adjusting the slope between time remap keyframes:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Steeper slope</strong> = faster playback (real time passes faster relative to sequence time)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shallower slope</strong> = slower playback (slow motion)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Slope = 45 degrees</strong> = normal speed</li>
            </ul>
            <p>Use the Graph Editor on the Time Remap property to apply easing to the speed change itself,eased transitions between normal speed and slow motion feel much more natural than linear speed changes.</p>
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
