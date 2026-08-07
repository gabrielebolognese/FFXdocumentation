import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'animating-multiple-properties', label: 'Animating Multiple Properties Simultaneously' },
  { id: 'offsetting-property-timing', label: 'Offsetting Property Timing' },
  { id: 'group-animation-vs-individual', label: 'Group Animation vs. Individual Animation' },
];

export default function MultiProperty() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Multi-Property Animation | FlashFX Documentation"
        description="How to animate multiple properties simultaneously and offset property timing for layered motion in FlashFX."
        keywords="FlashFX, multi-property animation, layered animation, property timing, group animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Multi-Property Animation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="animating-multiple-properties" title="Animating Multiple Properties Simultaneously">
            <p>Any number of properties can be keyframed at any point in time. When Record Mode is active, any property change creates a keyframe on that property at the current time — multiple properties can be changed before the playhead moves, and all changes are captured.</p>
            <p><strong className="text-white">Example workflow:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Set playhead to frame 0</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Set Position X = 0, Position Y = 200, Opacity = 0%, Scale = 80%</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Move playhead to frame 30</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Set Position X = 960, Position Y = 540, Opacity = 100%, Scale = 100%</li>
            </ol>
            <p>Result: The element moves from the lower-left to the center, fades in, and scales up over 30 frames.</p>
          </Section>

          <Section id="offsetting-property-timing" title="Offsetting Property Timing">
            <p>Properties do not all have to start and end at the same keyframes. Each property track is independent.</p>
            <p>Example: An element could:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Scale from 80% to 100% over frames 0 to 15 (fast scale-up)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Continue moving in position from frames 0 to 45 (slower, continuing movement)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Fade in opacity over frames 5 to 20 (slightly delayed fade-in)</li>
            </ul>
            <p>This asynchrony of properties is what creates nuanced, layered motion rather than a single robotic simultaneous transition.</p>
          </Section>

          <Section id="group-animation-vs-individual" title="Group Animation vs. Individual Animation">
            <p>When a group is animated, the group-level transform applies on top of all member transforms. This means:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Animating the group's position moves all members together as a unit</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Animating individual member positions within the group moves them relative to the group</li>
            </ul>
            <p>This is intentional and powerful — use group-level animation for "macro" moves (e.g., the whole element flies in), and member-level animation for "micro" moves (e.g., individual parts animate internally while the group moves).</p>
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
