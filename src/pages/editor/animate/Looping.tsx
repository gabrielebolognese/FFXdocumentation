import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'playback-loop-toggle', label: 'Playback Loop Toggle' },
  { id: 'in-and-out-points', label: 'In and Out Points' },
  { id: 'loop-expressions', label: 'Loop Expressions' },
  { id: 'manual-loop-setup', label: 'Manual Loop Setup' },
];

export default function Looping() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Looping and Cycle Animations | FlashFX Documentation"
        description="Reference for loop toggle, in/out points, loop expressions, and manual loop setup in FlashFX."
        keywords="FlashFX, loop animation, loopOut, cycle, pingpong, in point, out point, work area"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Looping and Cycle Animations</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="playback-loop-toggle" title="Playback Loop Toggle">
            <p>The timeline transport includes a Loop toggle that plays the animation in a continuous loop during preview. This is a preview-only feature and does not affect export.</p>
          </Section>

          <Section id="in-and-out-points" title="In and Out Points">
            <p>The timeline supports setting an In Point and Out Point that define the active preview range (Work Area).</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">I</code>
                  {' — set the In Point at the current playhead position'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">O</code>
                  {' — set the Out Point at the current playhead position'}
                </span>
              </li>
            </ul>
            <p>With a work area defined, loop playback plays only within the In to Out range. Export also uses the work area boundaries as the default export range (can be overridden in the export dialog).</p>
          </Section>

          <Section id="loop-expressions" title="Loop Expressions">
            <p>To make a property animate in an infinite loop using expressions:</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              loopOut("cycle")
            </div>
            <p>Applied to a property, this makes the animation between the last keyframe and the first keyframe cycle infinitely after the last keyframe.</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              loopOut("pingpong")
            </div>
            <p>Plays the animation forward then backward, then forward again — bouncing back and forth.</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              loopIn("cycle")
            </div>
            <p>The cycle plays before the first keyframe as well.</p>
          </Section>

          <Section id="manual-loop-setup" title="Manual Loop Setup">
            <p>Without expressions, a loop can be set up manually by:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Animating from frame 0 to frame N</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Creating identical keyframes at frame N as at frame 0 (same values)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>The animation naturally cycles if the export includes the exact frame count</li>
            </ol>
            <p><strong className="text-white">Critical detail:</strong> The last frame must not equal the first frame in the export output (there would be a duplicate frame at the loop point). Set the export to end one frame before the repeated keyframe.</p>
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
