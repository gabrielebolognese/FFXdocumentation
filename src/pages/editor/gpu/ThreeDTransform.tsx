import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'overview', label: 'Overview' },
  { id: 'enabling-3d-on-an-element', label: 'Enabling 3D on an Element' },
  { id: '3d-transform-properties', label: '3D Transform Properties' },
  { id: 'transform-order', label: 'Transform Order' },
];

export default function ThreeDTransform() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Transform System | FlashFX Documentation"
        description="Reference for 3D rotation, Z-position, transform order, and gimbal lock in FlashFX."
        keywords="FlashFX, 3D transform, rotation X, rotation Y, Z position, gimbal lock, 3D"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Transform System</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="overview" title="Overview">
            <p>FlashFX supports pseudo-3D transforms — extending the standard 2D transform system with rotation around the X and Y axes (3D rotation), perspective projection, and Z-depth positioning. This enables:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>3D card flip effects</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Perspective receding planes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Multi-layer parallax depth</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>3D text and shape arrangements</li>
            </ul>
            <p>FlashFX is <strong className="text-white">not a 3D engine</strong> — there is no true 3D scene graph, no polygon meshes, no surface normals for lighting, and no global illumination. All 3D in FlashFX is applied as CSS-style 3D transforms to flat 2D elements.</p>
          </Section>

          <Section id="enabling-3d-on-an-element" title="Enabling 3D on an Element">
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select an element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>In the Properties Panel, toggle the "3D" switch</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Rotation X, Rotation Y, and Z-Position properties appear</li>
            </ol>
          </Section>

          <Section id="3d-transform-properties" title="3D Transform Properties">
            <p><strong className="text-white">Rotation X (Pitch)</strong> — Rotation around the horizontal axis. Tilts the element toward or away from the viewer:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values tilt the top away (looking down at the top edge)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Negative values tilt the bottom away (looking up at the bottom edge)</li>
            </ul>
            <p><strong className="text-white">Rotation Y (Yaw)</strong> — Rotation around the vertical axis. Rotates the element like a revolving door:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values rotate the right side away</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Negative values rotate the left side away</li>
            </ul>
            <p><strong className="text-white">Rotation Z (Roll)</strong> — Standard 2D rotation around the depth axis. Identical to the 2D rotation property.</p>
            <p><strong className="text-white">Z Position (Depth)</strong> — Moves the element along the Z axis — toward or away from the viewer:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Positive values move closer to the viewer (appears larger with perspective enabled)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Negative values move further from the viewer (appears smaller with perspective)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Without perspective enabled, Z position has no visual effect</li>
            </ul>
          </Section>

          <Section id="transform-order" title="Transform Order">
            <p>3D transforms are applied in this order:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Scale X / Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Rotation X</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Rotation Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Rotation Z</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">5.</span>Z Position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">6.</span>X / Y Position</li>
            </ol>
            <p>The order matters significantly for 3D rotation. A rotation of 90 degrees around X followed by 90 degrees around Y produces a different result than the reverse. This is a fundamental property of 3D rotation math, not a FlashFX limitation.</p>
            <p><strong className="text-white">Avoiding gimbal lock:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>For continuous multi-axis rotation animations, use short rotation angles per axis (under 90 degrees) to avoid gimbal lock in most cases</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>For full 360 degree rotations, animate only one axis at a time</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>For complex multi-axis rotation, use expression-based quaternion rotation when available</li>
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
