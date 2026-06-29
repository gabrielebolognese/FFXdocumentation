import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'alignment', label: 'Alignment' },
  { id: 'distribution', label: 'Distribution' },
];

export default function AlignmentDistribution() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Alignment & Distribution | FlashFX Documentation"
        description="Learn how to align and distribute elements in FlashFX using alignment controls and distribution options."
        keywords="FlashFX, alignment, distribution, align, distribute, spacing"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Alignment & Distribution</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="alignment" title="Alignment">
            <p>Select two or more elements, then use the Alignment controls in the Properties Panel to align them relative to each other or to the canvas.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Alignment Reference Options</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Align to Selection (default):</strong> The alignment boundary is the bounding box of all selected elements combined.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Align to Canvas:</strong> The alignment boundary is the canvas itself. Useful for centering an element on the canvas.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Align to Key Object:</strong> One element in the selection is designated the key object; all others align to it without it moving. Click an element while it is already selected to make it the key object (it will show a thicker highlight border).</li>
              </ul>
            </div>

            <Table
              headers={['Alignment Action', 'Description']}
              rows={[
                ['Align Left Edges', 'Moves all elements so their left edges align with the leftmost element (or left edge of canvas)'],
                ['Align Horizontal Centers', 'Aligns all elements to the same horizontal center'],
                ['Align Right Edges', 'Aligns all elements to the same right edge'],
                ['Align Top Edges', 'Aligns all elements to the same top edge'],
                ['Align Vertical Centers', 'Aligns all elements to the same vertical center'],
                ['Align Bottom Edges', 'Aligns all elements to the same bottom edge'],
              ]}
            />
          </Section>

          <Section id="distribution" title="Distribution">
            <p>Distribution spaces elements evenly. Select three or more elements.</p>

            <Table
              headers={['Distribution Action', 'Description']}
              rows={[
                ['Distribute Horizontally', 'Equal horizontal spacing between elements'],
                ['Distribute Vertically', 'Equal vertical spacing between elements'],
                ['Distribute Horizontal Spacing', 'Equal gap between element edges (as opposed to equal center-to-center distance)'],
                ['Distribute Vertical Spacing', 'Equal gap between top/bottom edges'],
              ]}
            />
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
