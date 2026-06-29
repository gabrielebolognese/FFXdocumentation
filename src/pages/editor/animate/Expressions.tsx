import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'value-linking', label: 'Value Linking (Basic)' },
  { id: 'expression-overrides', label: 'Expression Overrides' },
  { id: 'expression-examples', label: 'Expression Examples' },
];

export default function Expressions() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Expressions and Value Linking | FlashFX Documentation"
        description="Reference for linking properties and writing expressions to drive animation dynamically in FlashFX."
        keywords="FlashFX, expressions, value linking, wiggle, loopOut, dynamic animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Expressions and Value Linking</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="value-linking" title="Value Linking (Basic)">
            <p>Any numeric property can be <strong className="text-white">linked</strong> to another numeric property so that when one changes, the other follows.</p>
            <p><strong className="text-white">Linking:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Right-click the property to be driven</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select "Link to Property"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>In the picker, select the source property</li>
            </ol>
            <p>The driven property now mirrors the source property's value. The link is live and animatable,if the source is keyframed, the driven property follows.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Offset:</strong> A constant offset value can be added to the link. Useful for keeping elements at a fixed offset from each other.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Scale Factor:</strong> A multiplier can be applied. Useful for parallax relationships between layers.</li>
            </ul>
          </Section>

          <Section id="expression-overrides" title="Expression Overrides">
            <p>For cases where simple linking is not sufficient, an expression can be written to compute a property value dynamically.</p>
            <p><strong className="text-white">Expression language:</strong> A simple JavaScript-like syntax evaluated per frame.</p>
            <p><strong className="text-white">Available variables in expressions:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">time</code>,current time in seconds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">frame</code>,current frame number</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">width</code>
                  {', '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">height</code>
                  {',canvas dimensions'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">value</code>,the property's current keyframed value (expressions can modify keyframed values rather than replace them)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">thisElement</code>,reference to the current element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">thisProperty</code>,reference to the current property</li>
            </ul>
          </Section>

          <Section id="expression-examples" title="Expression Examples">
            <p><strong className="text-white">Oscillate position:</strong></p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              value + Math.sin(time * 2) * 20
            </div>
            <p>This adds a sine wave oscillation on top of the existing keyframed position value.</p>

            <p><strong className="text-white">Rotate continuously:</strong></p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              time * 120
            </div>
            <p>The element rotates 120 degrees per second, indefinitely.</p>

            <p><strong className="text-white">Wiggle (random oscillation):</strong></p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              wiggle(3, 15)
            </div>
            <p><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">wiggle(frequency, amplitude)</code>,the element randomly oscillates 15px at 3 oscillations per second.</p>
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
