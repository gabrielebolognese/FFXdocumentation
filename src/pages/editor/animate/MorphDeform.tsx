import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'vertex-animation', label: 'Vertex Animation' },
  { id: 'corner-radius-animation', label: 'Corner Radius Animation' },
  { id: 'arc-angle-animation', label: 'Arc Angle Animation' },
  { id: 'star-property-animation', label: 'Star Property Animation' },
];

export default function MorphDeform() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Animating Shapes,Morph and Deform | FlashFX Documentation"
        description="Reference for vertex animation, shape morphing, corner radius animation, and arc animation in FlashFX."
        keywords="FlashFX, shape morphing, vertex animation, corner radius animation, arc animation, deformation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Animating Shapes,Morph and Deform</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="vertex-animation" title="Vertex Animation">
            <p>In Vertex Edit mode, individual path vertices can be keyframed. This enables:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shape morphing</strong>,a circle's vertices can be animated to positions that form a square, a star, an irregular blob</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Organic deformation</strong>,soft, living, breathing shape effects</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Character animation</strong>,animating limb and body shapes for simple 2D character rigs</li>
            </ul>
            <p><strong className="text-white">How to keyframe vertices:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Switch to Animate mode with Record active</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Double-click the shape to enter Vertex Edit mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Select a vertex</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Move it to the desired position at the current time</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">5.</span>A keyframe is created on that vertex's position track</li>
            </ol>
            <p>Each vertex has its own X and Y track. A 20-vertex path generates up to 40 property tracks for a full shape morph.</p>
          </Section>

          <Section id="corner-radius-animation" title="Corner Radius Animation">
            <p>The corner radius of a rectangle is a single numeric value and is easily animated. Create a keyframe at 0px and another at 100px (or half the short side) to produce a smooth rectangle-to-circle morph.</p>
          </Section>

          <Section id="arc-angle-animation" title="Arc Angle Animation">
            <p>Circle elements with Start Angle and End Angle properties can animate these values:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Start and end angle both sweeping produces a rotating arc</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>End angle animating from 0 degrees to 360 degrees with the end staying at the leading edge produces a progress ring draw-on effect</li>
            </ul>
          </Section>

          <Section id="star-property-animation" title="Star Property Animation">
            <p>Animating a star's inner radius from 0 to 0.8 of the outer radius produces a morphing from spike to fat star. Animating the point count is a discrete change (jumps between integer values) but can create a rhythmic pulsing effect when combined with easing.</p>
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
