import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'path-motion-vs-keyframed-position', label: 'Path Motion vs. Keyframed Position' },
  { id: 'creating-a-motion-path', label: 'Creating a Motion Path' },
  { id: 'path-animation-properties', label: 'Path Animation Properties' },
  { id: 'motion-path-editing', label: 'Motion Path Editing' },
];

export default function PathAnimation() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Animating Along a Path | FlashFX Documentation"
        description="How to create motion path animations and control path progress, auto-orient, and offsets in FlashFX."
        keywords="FlashFX, path animation, motion path, auto-orient, follow path, progress animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Animating Along a Path</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="path-motion-vs-keyframed-position" title="Path Motion vs. Keyframed Position">
            <p>Standard position animation moves elements in straight lines between position keyframes. The path between keyframes is controlled by spatial bezier handles.</p>
            <p>For more complex curved motion, an element can be assigned to <strong className="text-white">follow a path</strong>,a vector path that defines its trajectory.</p>
          </Section>

          <Section id="creating-a-motion-path" title="Creating a Motion Path">
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Draw the path the element should follow using the Pen tool (or any vector shape)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select the element to animate</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Animation -&gt; Attach to Path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Select the target path from the picker</li>
            </ol>
            <p>The element is linked to the path. Its position is now driven by a single progress value (0 = path start, 1 = path end) rather than X/Y coordinates.</p>
          </Section>

          <Section id="path-animation-properties" title="Path Animation Properties">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Progress</strong>,the primary animatable value. Keyframe it from 0 to 1 (or any range) to drive the element from start to end along the path.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Offset</strong>,shifts the starting position along the path without affecting progress values.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Auto-Orient</strong>,when enabled, the element's rotation is automatically set to match the direction it is moving along the path. Turn off for elements that should maintain a fixed orientation while following a curved route.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Orient Offset</strong>,adds a fixed rotation to the auto-orient direction. Useful when the "front\" of an element is not aligned with the default orientation.</li>
            </ul>
          </Section>

          <Section id="motion-path-editing" title="Motion Path Editing">
            <p>The path used as a motion path is a live vector path. Editing it (moving anchor points, adjusting curves) updates the motion trajectory in real time while animation is playing.</p>
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
