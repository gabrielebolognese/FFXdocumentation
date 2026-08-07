import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'enabling-stroke', label: 'Enabling Stroke' },
  { id: 'stroke-color', label: 'Stroke Color' },
  { id: 'stroke-weight', label: 'Stroke Weight' },
  { id: 'stroke-alignment', label: 'Stroke Alignment' },
  { id: 'cap-and-join', label: 'Stroke Cap and Join' },
  { id: 'dash-settings', label: 'Dash Settings' },
  { id: 'gradient-stroke', label: 'Gradient Stroke' },
];

export default function StrokeProperties() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Stroke Properties | FlashFX Documentation"
        description="Learn about stroke properties in FlashFX — color, weight, alignment, caps, joins, dashes, and gradient strokes."
        keywords="FlashFX, stroke, outline, dash, cap, join, gradient stroke"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Stroke Properties</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The stroke is an outline rendered along the path of a shape. Stroke settings are configured independently of the fill layers.
          </p>

          <Section id="enabling-stroke" title="Enabling Stroke">
            <p>Toggle the stroke on or off using the Stroke toggle in the Properties Panel. Each shape can have one stroke.</p>
          </Section>

          <Section id="stroke-color" title="Stroke Color">
            <p>The stroke color is configured via the same color picker as fills. It supports solid color only (not gradient) in the base configuration. For gradient strokes, see the Gradient Stroke section below.</p>
          </Section>

          <Section id="stroke-weight" title="Stroke Weight">
            <p>The width of the stroke in pixels. Range: 0.1px to 500px.</p>
          </Section>

          <Section id="stroke-alignment" title="Stroke Alignment">
            <p>Controls where the stroke is rendered relative to the path:</p>

            <Table
              headers={['Alignment', 'Description']}
              rows={[
                ['Center (default)', 'The stroke is centered on the path — half inside, half outside the shape boundary'],
                ['Inside', 'The entire stroke width is inside the shape boundary'],
                ['Outside', 'The entire stroke width is outside the shape boundary'],
              ]}
            />

            <p className="mt-3">Stroke alignment affects how the shape's apparent visual size compares to its defined geometry, which is important when precise positional accuracy matters.</p>
          </Section>

          <Section id="cap-and-join" title="Stroke Cap and Join">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h4 className="text-base font-semibold text-white mb-3">Cap Style (for open paths and line segments)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Butt</strong> — flat ends at the exact path endpoint</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Round</strong> — semicircular ends extending beyond the endpoint</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Square</strong> — flat square ends extending beyond the endpoint by half the stroke width</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Join Style (at corners where two segments meet)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Miter</strong> — sharp pointed corner; a Miter Limit controls how far the point can extend before it is auto-converted to a Bevel</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Round</strong> — rounded corner at the junction</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Bevel</strong> — a flat cut across the outer corner</li>
              </ul>
            </div>
          </Section>

          <Section id="dash-settings" title="Dash Settings">
            <p>Converts the stroke to a dashed line:</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dash Length</strong> — length of dash segments in pixels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Gap Length</strong> — length of gaps between dashes in pixels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Additional Dash/Gap pairs</strong> — up to three dash/gap pairs can be defined for complex dash patterns (e.g., long-dash short-dash)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dash Offset</strong> — shifts the pattern along the stroke. Animating this value creates a "marching ants\" animation effect.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dash Cap</strong> — independently sets the cap style for the ends of each dash segment</li>
            </ul>
          </Section>

          <Section id="gradient-stroke" title="Gradient Stroke">
            <p>A stroke can be filled with a gradient rather than a solid color. When enabled:</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Along Stroke</strong> — the gradient runs from the start of the path to the end (start point = first color stop, end point = last color stop)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Across Stroke</strong> — the gradient runs perpendicular to the stroke direction (inner edge = first color stop, outer edge = last color stop)</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
              <p className="text-sm">The stroke system applies identically to text elements. See the Text documentation for typography-specific stroke behavior.</p>
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
