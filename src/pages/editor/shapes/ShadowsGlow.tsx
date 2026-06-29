import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'drop-shadow', label: 'Drop Shadow' },
  { id: 'inner-shadow', label: 'Inner Shadow' },
  { id: 'outer-glow', label: 'Outer Glow' },
  { id: 'inner-glow', label: 'Inner Glow' },
];

export default function ShadowsGlow() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Shadows & Glow | FlashFX Documentation"
        description="Learn how to add drop shadows, inner shadows, outer glow, and inner glow effects to shapes in FlashFX."
        keywords="FlashFX, shadow, drop shadow, inner shadow, glow, outer glow"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Shadows & Glow</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="drop-shadow" title="Drop Shadow">
            <p>A shadow cast behind the element. Simulates a light source above-left by default.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Properties</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color</strong>,shadow color. Does not need to be black; colored shadows are fully supported.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Opacity</strong>,shadow transparency (0%–100%)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offset X</strong>,horizontal distance from the element to the shadow (positive = right)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offset Y</strong>,vertical distance from the element to the shadow (positive = down)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Blur Radius</strong>,the softness of the shadow edge. 0 = hard edge. Larger values = softer, more diffused shadow.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Spread</strong>,expands or contracts the shadow before the blur is applied. Positive spread makes the shadow larger than the element.</li>
              </ul>
              <p className="mt-3 text-xs text-white/60">All shadow properties are animatable.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Multiple Shadows</h4>
              <p>A shape can have multiple drop shadows simultaneously, each with independent settings. Click the <code className="text-yellow-accent bg-white/5 px-1 rounded">+</code> button in the Shadow section to add additional shadows.</p>
            </div>
          </Section>

          <Section id="inner-shadow" title="Inner Shadow">
            <p>Identical properties to Drop Shadow, but the shadow is cast <strong className="text-white">inside the shape</strong> rather than behind it. Creates a concave, pressed-in appearance.</p>

            <p className="mt-3">Inner shadows interact with the element's fill layers,the shadow is composited on top of the fills but inside the shape boundary.</p>
          </Section>

          <Section id="outer-glow" title="Outer Glow">
            <p>A soft halo of light radiating outward from the element.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Properties</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color</strong>,glow color. Bright colors against dark backgrounds produce the strongest glow effect.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Opacity</strong>,glow transparency</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Spread</strong>,how far the glow extends before the blur begins</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Blur Radius</strong>,softness of the glow falloff</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Blend Mode</strong>,how the glow composites with the layers beneath the element. Screen or Add produce luminous light effects; Normal produces a colored halo.</li>
              </ul>
            </div>
          </Section>

          <Section id="inner-glow" title="Inner Glow">
            <p>A soft glow emanating from the inner edge of the shape boundary inward.</p>

            <p className="mt-3">Properties identical to Outer Glow. Inner glow can simulate edge lighting or subsurface light in stylized compositions.</p>
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
