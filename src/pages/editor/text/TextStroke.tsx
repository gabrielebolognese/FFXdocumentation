import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextStroke() {
  return (
    <Layout>
      <SEO
        title="Text Stroke | FlashFX Documentation"
        description="Reference for text stroke settings including alignment, weight, and multiple strokes in FlashFX."
        keywords="FlashFX, text stroke, outline text, stroke alignment, stroke weight"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Stroke</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text stroke in FlashFX works identically to shape stroke, with one important additional consideration: large strokes on small text can quickly become illegible. Test stroke readability at the final export resolution.
          </p>
          <Section title="Stroke Behavior on Text">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Stroke on text is always rendered outside the character shape by default, preventing the stroke from eating into the fill. This can be changed to Inside or Center in the stroke alignment settings.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Heavy stroke weights on thin fonts produce a "fat face" typography effect. Use intentionally and test at export size.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Stroke color, gradient stroke, and dashed stroke are all available on text.</li>
            </ul>
          </Section>
          <Section title="Multiple Strokes">
            <p>Like shapes, text can have multiple stroke layers applied. A common technique is applying two strokes — a thin bright inner stroke and a thick dark outer stroke — to achieve a hand-lettered outlined effect.</p>
          </Section>
          <Section title="Stroke Alignment Options">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Outside</strong> — stroke extends outward from the character edge (default)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Inside</strong> — stroke extends inward, overlapping the fill</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center</strong> — stroke straddles the character edge equally</li>
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
