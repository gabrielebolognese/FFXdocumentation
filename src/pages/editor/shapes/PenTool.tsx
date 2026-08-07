import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'anchor-points', label: 'Anchor Points' },
  { id: 'bezier-handles', label: 'Bezier Handles' },
  { id: 'closing-paths', label: 'Closing Paths' },
  { id: 'editing-paths', label: 'Editing Existing Paths' },
];

export default function PenTool() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Pen Tool & Custom Paths | FlashFX Documentation"
        description="Learn how to use the Pen tool in FlashFX to create custom bezier paths with anchor points and control handles."
        keywords="FlashFX, pen tool, bezier, paths, anchor points, custom shapes"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">The Pen Tool & Custom Paths</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The Pen tool (<Kbd>B</Kbd>) creates custom bezier paths — arbitrary closed or open shapes defined by user-placed anchor points and their associated control handles.
          </p>

          <Section id="anchor-points" title="Anchor Points">
            <p>Anchor points are the nodes that define the path. The path passes through every anchor point. Between anchor points, the path is shaped by the bezier control handles attached to each anchor.</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Creating Anchor Points:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click on the canvas to place a <strong className="text-white">corner point</strong> (no curve at this anchor)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click and drag to place a <strong className="text-white">smooth point</strong> (curved path at this anchor — the drag direction sets the initial handle direction)</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Anchor Point Types:</h3>
            <Table
              headers={['Type', 'Description']}
              rows={[
                ['Corner', 'No curve; the path changes direction abruptly at this point'],
                ['Smooth', 'The two handles are colinear (opposite each other); the path flows smoothly through the point'],
                ['Asymmetric', 'The two handles point in opposite directions but can have independent lengths'],
                ['Disconnected', 'Each handle moves independently, creating a cusp (sharp direction change with a curve)'],
              ]}
            />

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Converting Point Types</h4>
              <p><Kbd>Alt</Kbd>+click an anchor point to toggle between Corner and Smooth. <Kbd>Alt</Kbd>+drag a handle to convert to an Asymmetric or Disconnected point.</p>
            </div>
          </Section>

          <Section id="bezier-handles" title="Bezier Handles">
            <p>Each smooth anchor point has two control handles: an <strong className="text-white">in-handle</strong> (controlling the curve arriving at the point) and an <strong className="text-white">out-handle</strong> (controlling the curve leaving the point).</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Handles appear as small circular grips connected to the anchor point by a thin line</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Dragging a handle changes the curve on the corresponding side of the anchor</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>For smooth points, moving one handle automatically mirrors the opposite handle's angle (but not length)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>For asymmetric points, moving one handle does not affect the other</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Handle Length</h4>
              <p>Longer handles produce more gradual curves. Shorter handles produce tighter curves that change direction more quickly.</p>
            </div>
          </Section>

          <Section id="closing-paths" title="Closing Paths">
            <p>A path can be <strong className="text-white">open</strong> (the first and last anchor points are not connected) or <strong className="text-white">closed</strong> (the first and last points connect, forming an enclosed shape).</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click on the first anchor point while drawing to close the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <Kbd>Escape</Kbd> to finish the path without closing it (leaving it open)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Open paths can be given a fill — the fill is applied as if a straight line connected the two open endpoints</li>
            </ul>
          </Section>

          <Section id="editing-paths" title="Editing Existing Paths">
            <p>Once a path is created, it can be edited at any time using <strong className="text-white">Path Edit mode</strong>, activated by:</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Double-clicking a path with the Selection tool</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Pressing <Kbd>Enter</Kbd> while a path is selected</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">In Path Edit mode:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All anchor points become visible and selectable</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Anchor points can be moved by dragging</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>New anchor points can be added by clicking on any segment of the path</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Existing anchor points can be deleted by selecting them and pressing <Kbd>Delete</Kbd></li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Handles are visible and adjustable</li>
              </ul>
            </div>

            <p className="mt-4">Press <Kbd>Escape</Kbd> or <Kbd>V</Kbd> to exit Path Edit mode and return to the Selection tool.</p>
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

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">{children}</code>
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
