import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-perspective-camera', label: 'The Perspective Camera' },
  { id: 'per-element-vs-composition-level-perspective', label: 'Per-Element vs. Composition-Level Perspective' },
  { id: 'simulating-camera-movement', label: 'Simulating Camera Movement' },
];

export default function PerspectiveCamera() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Perspective and Camera Simulation | FlashFX Documentation"
        description="Reference for focal length, field of view, camera position, and simulating camera movement in FlashFX."
        keywords="FlashFX, perspective camera, focal length, field of view, camera simulation, dolly"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Perspective and Camera Simulation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-perspective-camera" title="The Perspective Camera">
            <p>FlashFX provides a virtual perspective camera that applies a perspective projection to all 3D-enabled elements in a composition.</p>
            <p><strong className="text-white">Perspective Focal Length:</strong> Controls the intensity of the perspective effect.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>High focal length (e.g., 2000px) = narrow field of view, compressed perspective, telephoto appearance</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Low focal length (e.g., 200px) = wide field of view, exaggerated perspective, fisheye-like appearance</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Default: 800px — a natural-looking perspective comparable to a 50mm lens</li>
            </ul>
            <p>Focal length to Field of View conversion: FOV = 2 x arctan(canvas_height / (2 x focal_length))</p>
            <p><strong className="text-white">Camera Position:</strong> The virtual camera is positioned at the center of the canvas by default. Camera X / Y moves the camera horizontally and vertically, panning the perspective view without actually moving elements.</p>
          </Section>

          <Section id="per-element-vs-composition-level-perspective" title="Per-Element vs. Composition-Level Perspective">
            <p><strong className="text-white">Composition-level perspective (default):</strong> All 3D elements share the same perspective camera. Elements appear to exist in the same 3D space, with consistent vanishing points.</p>
            <p><strong className="text-white">Per-element perspective:</strong> Each 3D element has its own independent perspective. This prevents elements from sharing vanishing points, which is useful for certain graphic styles but looks incorrect for realistic 3D space simulations.</p>
            <p>Toggle: Properties Panel -&gt; "3D" section -&gt; "Perspective Mode"</p>
          </Section>

          <Section id="simulating-camera-movement" title="Simulating Camera Movement">
            <p>To simulate a moving camera, parent all scene elements to a Null Object and animate the null:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Dolly (push/pull)</strong> — animate null's Scale uniformly (scale up = moving toward scene, scale down = moving away)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Truck (strafe)</strong> — animate null's X position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Pedestal (vertical)</strong> — animate null's Y position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Pan</strong> — animate null's Z rotation (2D)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Tilt</strong> — animate null's X rotation (3D)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Roll</strong> — animate null's Z rotation in 3D mode</li>
            </ul>
            <p>This technique avoids actually moving individual scene elements and keeps the "camera" logic centralized in one control.</p>
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
