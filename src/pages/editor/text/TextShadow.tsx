import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextShadow() {
  return (
    <Layout>
      <SEO
        title="Text Shadow and Glow | FlashFX Documentation"
        description="Reference for drop shadow, inner shadow, and glow effects on text in FlashFX."
        keywords="FlashFX, text shadow, drop shadow, inner shadow, glow, neon text"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Shadow and Glow</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text shadow and glow work identically to shape shadow and glow.
          </p>
          <Section title="Usage Guidelines">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drop shadows on small text at large blur radii can reduce legibility,keep blur under 50% of the font size for readable text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Inner shadows on display typography create an engraved or debossed effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Outer glow at low opacity is commonly used for subtle text lift from the background,a glow matching the background color creates a text halo that optically separates text from complex backgrounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Multiple shadows are supported; a common technique is combining a tight dark drop shadow with a larger diffuse colored glow to produce neon or luminous text effects</li>
            </ul>
          </Section>
          <Section title="Shadow Controls">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Offset X / Y</strong>,horizontal and vertical distance of the shadow from the text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Blur Radius</strong>,softness of the shadow edge</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color</strong>,shadow color and opacity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Spread</strong>,expands or contracts the shadow before blurring</li>
            </ul>
          </Section>
          <Section title="Glow Controls">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Outer Glow</strong>,a soft halo radiating outward from the character edges</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Inner Glow</strong>,a soft highlight radiating inward from the character edges</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Glow color, opacity, blur radius, and spread are all configurable</li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
