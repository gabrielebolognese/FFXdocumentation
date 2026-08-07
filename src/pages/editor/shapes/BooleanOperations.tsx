import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'boolean-ops', label: 'Boolean Operations' },
  { id: 'live-boolean-groups', label: 'Non-Destructive Boolean Groups' },
];

export default function BooleanOperations() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Boolean Operations | FlashFX Documentation"
        description="Learn how to use boolean operations in FlashFX — unite, subtract, intersect, exclude, and divide shapes."
        keywords="FlashFX, boolean operations, unite, subtract, intersect, paths"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Boolean Operations</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Boolean operations combine two or more shapes into a single path using set theory logic. They are applied to the selected shapes in Z-order (the top shape operates on those below it).
          </p>

          <Section id="boolean-ops" title="Boolean Operations">
            <p>To apply a boolean operation, select two or more shapes and choose from <strong className="text-white">Path → Boolean Operations</strong>:</p>

            <Table
              headers={['Operation', 'Icon', 'Result']}
              rows={[
                ['Unite', '∪', 'Merges all selected shapes into a single outline, removing internal overlapping edges'],
                ['Subtract', '−', 'The top shape cuts its silhouette out of the shape below it'],
                ['Intersect', '∩', 'Keeps only the area where the shapes overlap; all non-overlapping area is removed'],
                ['Exclude', '⊕', 'Keeps only the non-overlapping areas; the intersection is removed (inverse of Intersect)'],
                ['Divide', '÷', 'Splits all shapes at their intersection boundaries, producing multiple separate shapes'],
              ]}
            />
          </Section>

          <Section id="live-boolean-groups" title="Non-Destructive Boolean Groups">
            <p>Boolean operations in FlashFX are applied as <strong className="text-white">live operations</strong> rather than permanently destructive merges. The original component shapes are retained inside a Boolean Group and can be re-edited at any time.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Double-click the Boolean Group to enter the group and edit the component shapes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The boolean result updates in real time as you edit</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>To permanently flatten a Boolean Group into a simple path: <strong className="text-white">Path → Flatten Boolean Group</strong></li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Practical Workflow</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select the shapes you want to combine</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Apply the desired boolean operation from the Path menu</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>A Boolean Group is created in the layer stack</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Double-click to re-enter and modify the original component shapes at any time</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">5.</span>Flatten only when you are certain the result needs to be a final, non-editable path</li>
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
