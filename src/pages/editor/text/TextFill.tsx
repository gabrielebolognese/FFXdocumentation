import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextFill() {
  return (
    <Layout>
      <SEO
        title="Text Fill and Material System | FlashFX Documentation"
        description="Reference for text fill types including solid color, gradient, texture, and multi-layer fills in FlashFX."
        keywords="FlashFX, text fill, gradient text, texture fill, material system"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Fill and Material System</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text in FlashFX uses the same material stack as vector shapes. Every typographic fill feature available for shapes is also available for text.
          </p>
          <Section title="Solid Color Fill">
            <p>The most common text fill. Set via the color picker in the Fill section of the Properties Panel. Supports full opacity control and any color from the color system.</p>
          </Section>
          <Section title="Gradient Text">
            <p>A gradient fill mapped across the text string.</p>
            <p><strong className="text-white">Gradient Mapping Mode:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Per Character</strong> — the gradient is applied independently to each character. Each character shows the full gradient range.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Per Word</strong> — the gradient is applied independently to each word.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Across Text</strong> — the gradient spans the full width or height of the entire text element. Individual characters show only the portion of the gradient at their position.</li>
            </ul>
            <p>Across Text mode is the most visually impactful for display text — long gradients sweep across headings smoothly, with each character showing a slightly different point in the gradient.</p>
          </Section>
          <Section title="Texture and Pattern Fills">
            <p>All texture and pattern fill types available for shapes are equally available for text fills. A noise texture applied as a text fill creates a grungy, printed-on appearance. A halftone pattern fill creates a graphic arts dot-matrix effect.</p>
          </Section>
          <Section title="Multi-Layer Text Fills">
            <p>The full material stack is supported for text. Multiple fill layers can be combined — for example: a solid white fill as the base layer, a gradient overlay layer in Screen blend mode for a shimmering color effect, and a noise texture in Multiply blend mode for a grungy print texture.</p>
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
