import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-motion-path-display', label: 'The Motion Path Display' },
  { id: 'spatial-bezier-handles', label: 'Spatial Bezier Handles' },
  { id: 'auto-bezier-vs-continuous-bezier', label: 'Auto-Bezier vs. Continuous Bezier' },
  { id: 'constant-velocity', label: 'Constant Velocity (Roving Keyframes)' },
];

export default function MotionPaths() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Motion Paths and Spatial Interpolation | FlashFX Documentation"
        description="Reference for the motion path display, spatial bezier handles, and roving keyframes in FlashFX."
        keywords="FlashFX, motion path, spatial bezier, roving keyframes, constant velocity, trajectory"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Motion Paths and Spatial Interpolation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-motion-path-display" title="The Motion Path Display">
            <p>When a position-animated element is selected in Animate mode, its motion path appears overlaid on the canvas,a dotted curve showing the trajectory the element travels.</p>
            <p>Each keyframe appears as a dot on the path. The dots between keyframes show the interpolated positions at regular time intervals. Widely spaced dots indicate fast movement; closely spaced dots indicate slow movement.</p>
          </Section>

          <Section id="spatial-bezier-handles" title="Spatial Bezier Handles">
            <p>Each keyframe position on the motion path has <strong className="text-white">spatial bezier handles</strong> that control the curvature of the path at that point. These are distinct from the temporal easing handles in the graph editor:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Spatial handles</strong>,control the shape of the trajectory (the curve of the path)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Temporal handles</strong>,control how fast the element travels along the trajectory</li>
            </ul>
            <p><strong className="text-white">Editing spatial handles:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Click a keyframe dot on the motion path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag the handles (small circles connected by lines) to change the curve into and out of that point</li>
            </ul>
          </Section>

          <Section id="auto-bezier-vs-continuous-bezier" title="Auto-Bezier vs. Continuous Bezier">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Auto-Bezier:</strong> FlashFX automatically sets handle directions and lengths to produce smooth, continuous curves through keyframe positions. Handles adjust automatically as keyframe positions are moved.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Continuous Bezier:</strong> Handles are aligned (colinear) but their lengths are set manually. The path remains smooth but the curve shapes are manually controlled.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Broken Bezier (Corner):</strong> The two handles at a keyframe point are independent. Allows sharp direction changes in the motion path.</li>
            </ul>
          </Section>

          <Section id="constant-velocity" title="Constant Velocity (Roving Keyframes)">
            <p>By default, keyframes are "pinned" at specific time positions. The motion path may pass through them at varying speeds.</p>
            <p>Converting keyframes to <strong className="text-white">Roving</strong> type removes their time-pinning. The animation engine redistributes the timing automatically so the element travels at constant speed along the path.</p>
            <p>This is particularly useful for path animation where the curve has varying tightness,without roving, tight curves are traversed quickly and loose curves slowly (because the path distance per frame differs between curve shapes).</p>
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
