import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'blur', label: 'Blur' },
  { id: 'clip-path', label: 'Clip Path (Mask)' },
  { id: 'alpha-mask', label: 'Alpha Mask' },
];

export default function ShapeEffects() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Shape-Level Effects | FlashFX Documentation"
        description="Learn about shape-level effects in FlashFX — blur, clip paths, and alpha masks."
        keywords="FlashFX, shape effects, blur, clip path, mask, alpha mask"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Shape-Level Effects</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Beyond fills and strokes, additional effects can be applied to the shape as a whole.
          </p>

          <Section id="blur" title="Blur">
            <p>A blur applied to the entire element as a post-compositing effect.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Gaussian Blur</h4>
              <p>The standard diffuse blur. The <strong className="text-white">Radius</strong> parameter controls spread (0 = no blur, larger = more blur).</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Directional / Motion Blur</h4>
              <p>Blur along a specific axis.</p>
              <ul className="space-y-2 text-sm mt-3">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Angle</strong> — the direction of the blur (0° = horizontal)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Distance</strong> — how far the blur extends along the angle direction</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Radial Blur</h4>
              <p>Blur that radiates outward from a center point, simulating zoom or radial spin.</p>
              <ul className="space-y-2 text-sm mt-3">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center X / Y</strong> — the origin of the radial effect</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Strength</strong> — how far the blur extends</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Zoom Blur</h4>
              <p>Similar to Radial but creates a perspective-zoom effect (stronger near edges, converging to center).</p>
            </div>
          </Section>

          <Section id="clip-path" title="Clip Path (Mask)">
            <p>A clip path restricts the visible area of a shape to the outline of another shape or group.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Setting a Clip Path</h4>
              <ol className="space-y-2 text-sm list-none">
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">1.</span>Place the clip shape on top of the shape to be clipped in the layer stack</li>
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">2.</span>Select both (or the clip shape and the target group)</li>
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">3.</span>Choose <strong className="text-white">Layer → Create Clip Path</strong></li>
              </ol>
            </div>

            <p className="mt-4">The clip shape defines the visible region; the target is visible only within that region.</p>
            <p className="mt-2">Clip paths can be animated. Animating the clip shape's position, scale, or form produces reveal and wipe animation effects.</p>
          </Section>

          <Section id="alpha-mask" title="Alpha Mask">
            <p>Distinct from a clip path — an alpha mask uses the luminosity or alpha of one layer to control the transparency of another, enabling feathered edges, soft transitions, and gradient-driven reveals.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Setting up an Alpha Mask</h4>
              <ol className="space-y-2 text-sm list-none">
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">1.</span>Create the mask layer (a gradient or texture shape acts as a soft mask; a solid shape acts like a clip path)</li>
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">2.</span>Position the mask layer directly above the target layer in the stack</li>
                <li className="flex gap-3"><span className="text-yellow-accent font-semibold">3.</span>Select the target layer and set its <strong className="text-white">Mask Mode</strong> to "Alpha\" or \"Luminance"</li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Mask Modes</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Alpha mode</strong> — the mask layer's alpha channel directly controls the target\'s transparency.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Luminance mode</strong> — the mask layer's brightness controls the target\'s transparency. White = fully visible, black = fully transparent, grays = proportional transparency.</li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
