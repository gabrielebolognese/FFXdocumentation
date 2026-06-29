import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'z-order-commands', label: 'Z-Order Commands' },
  { id: 'layer-panel-reordering', label: 'Layer Panel Reordering' },
  { id: 'z-order-animation', label: 'Z-Order and Animation' },
];

export default function ZOrderManagement() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Z-Order Management | FlashFX Documentation"
        description="Learn how to manage Z-order (stacking order) in FlashFX to control which elements appear on top."
        keywords="FlashFX, z-order, stacking order, layer order, bring to front, send to back"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Z-Order Management</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Z-order (stacking order) determines which elements appear on top of which others. Higher Z = closer to the viewer = rendered on top.
          </p>

          <Section id="z-order-commands" title="Z-Order Commands">
            <Table
              headers={['Action', 'Shortcut', 'Description']}
              rows={[
                ['Bring to Front', 'Ctrl+Shift+]', 'Moves the element above all others'],
                ['Bring Forward', 'Ctrl+]', 'Moves the element one step up in the stack'],
                ['Send Backward', 'Ctrl+[', 'Moves the element one step down in the stack'],
                ['Send to Back', 'Ctrl+Shift+[', 'Moves the element below all others'],
              ]}
            />
          </Section>

          <Section id="layer-panel-reordering" title="Layer Panel Reordering">
            <p>Drag any layer row in the Layer Panel to reposition it in the stack.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag into a group to move the element inside the group</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag out of a group to move it to the parent level</li>
            </ul>
          </Section>

          <Section id="z-order-animation" title="Z-Order and Animation">
            <p>Z-order can be animated. Discrete keyframes on the Z-order property cause an element to jump instantly between stack positions at specific points in time, enabling effects like elements passing behind or in front of each other at controlled moments.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Use Cases for Animated Z-Order</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Character animation where a limb passes in front of then behind the body</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Card flip effects where the card visually passes through other elements at the mid-point of the flip</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Complex multi-element compositions where overlapping order changes during the animation</li>
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
