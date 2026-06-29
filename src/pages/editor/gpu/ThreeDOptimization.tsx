import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'use-3d-only-where-necessary', label: 'Use 3D Only Where Necessary' },
  { id: 'minimize-non-normal-blend-modes-on-3d-elements', label: 'Minimize Non-Normal Blend Modes on 3D Elements' },
  { id: 'cull-invisible-elements', label: 'Cull Invisible Elements' },
  { id: 'reduce-3d-shadow-and-lighting-on-complex-scenes', label: 'Reduce 3D Shadow and Lighting on Complex Scenes' },
  { id: 'pre-render-background-layers', label: 'Pre-render Background Layers' },
  { id: '4k-and-3d', label: '4K and 3D' },
];

export default function ThreeDOptimization() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Optimization Strategies for 3D Compositions | FlashFX Documentation"
        description="Best practices for optimizing 3D compositions, reducing GPU load, and working at 4K in FlashFX."
        keywords="FlashFX, 3D optimization, GPU performance, pre-render, culling, 4K 3D"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Optimization Strategies for 3D Compositions</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="use-3d-only-where-necessary" title="Use 3D Only Where Necessary">
            <p>Not all elements in a composition need 3D enabled. Elements that remain flat (no X/Y rotation, no Z-depth) should have 3D turned off. 3D-enabled elements participate in the depth sort calculation even when stationary.</p>
          </Section>

          <Section id="minimize-non-normal-blend-modes-on-3d-elements" title="Minimize Non-Normal Blend Modes on 3D Elements">
            <p>The combination of 3D transforms and non-Normal blend modes is the highest cost combination in FlashFX:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Each non-Normal blend mode 3D element requires: depth sorting + blend mode isolation + 3D transform computation</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>On Tier 2 hardware, more than 3 such elements active simultaneously will likely produce frame drops</li>
            </ul>
          </Section>

          <Section id="cull-invisible-elements" title="Cull Invisible Elements">
            <p>Elements that are rotated edge-on to the camera (90 degree X or Y rotation) are effectively invisible. Disable them via the layer visibility toggle or keyframe their opacity to 0 while edge-on to avoid unnecessary computation.</p>
          </Section>

          <Section id="reduce-3d-shadow-and-lighting-on-complex-scenes" title="Reduce 3D Shadow and Lighting on Complex Scenes">
            <p>The 3D lighting model adds a per-element shader computation. Disable lighting on background and non-hero elements:</p>
            <p>In the Properties Panel for each 3D element, the "Receive Light" toggle controls whether that element participates in the lighting computation.</p>
          </Section>

          <Section id="pre-render-background-layers" title="Pre-render Background Layers">
            <p>Complex static background elements can be pre-rendered as images:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create the background composition in a separate sequence</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Export a single frame at full resolution as PNG</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Import that PNG as a background layer in the main composition</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Delete the original complex background elements</li>
            </ol>
            <p>The pre-rendered flat image has near-zero GPU cost compared to the original vector/filter composition.</p>
          </Section>

          <Section id="4k-and-3d" title="4K and 3D">
            <p>Running 3D compositions at 4K canvas resolution quadruples every GPU operation compared to 1080p.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Tier 3 recommendation:</strong> Author 3D compositions at 1080p; export at 1080p. Scale to 4K as a simple resize if needed.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Tier 4 capability:</strong> Real-time 3D preview at 1080p; export at 4K with rendering time approximately 2 to 5x realtime depending on complexity.</li>
            </ul>
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
