import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'solid-color-interpolation', label: 'Solid Color Interpolation' },
  { id: 'gradient-keyframes', label: 'Gradient Keyframes' },
  { id: 'color-flicker-flash-effects', label: 'Color Flicker / Flash Effects' },
];

export default function AnimatingColors() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Animating Colors | FlashFX Documentation"
        description="Reference for animating solid colors, gradients, and color flash effects in FlashFX."
        keywords="FlashFX, animating colors, color interpolation, LAB color, gradient keyframe, color flash"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Animating Colors</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="solid-color-interpolation" title="Solid Color Interpolation">
            <p>When a solid fill color is keyframed at two different values, FlashFX interpolates between them through <strong className="text-white">LAB color space</strong> by default. LAB interpolation produces perceptually uniform transitions,the brightness appears consistent throughout the transition, which avoids the muddy midpoints that can occur with RGB-space interpolation.</p>
            <p><strong className="text-white">Alternative: RGB interpolation</strong>,selectable via the color track context menu. RGB interpolation passes through the RGB midpoint, which can produce unintended hue shifts in the middle of the transition.</p>
          </Section>

          <Section id="gradient-keyframes" title="Gradient Keyframes">
            <p>Gradients can be keyframed in several ways:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Stop Color</strong>,the color of a specific gradient stop changes over time</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Stop Position</strong>,a stop moves along the gradient ramp over time</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Gradient Angle</strong>,the direction of the gradient rotates over time</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center Position (radial)</strong>,the gradient's center point moves over time</li>
            </ul>
            <p>Animating gradient stop positions creates color band animation effects,color zones sweep across the element.</p>
          </Section>

          <Section id="color-flicker-flash-effects" title="Color Flicker / Flash Effects">
            <p>A fast two-keyframe color animation (Hold type keyframes) over 1 to 2 frames creates a hard color flash or strobe effect. This is commonly used for:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Impact flashes on beat hits</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Glitch color effects</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Notification pulse effects</li>
            </ul>
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
