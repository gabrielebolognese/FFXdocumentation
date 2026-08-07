import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-two-modes', label: 'The Two Modes' },
  { id: 'the-transition', label: 'The Transition' },
];

export default function ModeSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Mode System | FlashFX Documentation"
        description="The two interaction states of a FlashFX 3D shape — canvas mode and 3D editing mode — and how pointer events are routed between them."
        keywords="FlashFX, 3D, interaction, modes, pointer events"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Mode System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            A 3D shape has two interaction states. Which one is active decides whether a click manipulates the shape on the 2D canvas or orbits the camera inside it.
          </p>

          <Section id="the-two-modes" title="The Two Modes">
            <Table
              headers={['Mode', 'Pointer Events', 'What the User Can Do']}
              rows={[
                ['Canvas mode (default)', '\'none\' on the 3D host div', 'Move, resize and adjust 2D properties — position, opacity, border radius. Clicks pass through to the 2D canvas system.'],
                ['3D editing mode', '\'auto\'', 'Orbit, pan and zoom inside the Three.js scene, and select objects within it.'],
              ]}
            />
            <p>A shape enters 3D editing mode when the user double-clicks it, or when it is otherwise set as the active 3D element — that is, when activeThreeDElementId on Canvas matches the element ID.</p>
          </Section>

          <Section id="the-transition" title="The Transition">
            <p>The isInteracting prop on ThreeDShapeRenderer flows into ThreeDShapeElement.setInteracting():</p>
            <CodeBlock>{`setInteracting(active: boolean): void {
  if (this._isInteracting === active) return;
  this._isInteracting = active;
  this.engine.setOrbitEnabled(active);
  this.engine.markDirty();
}`}</CodeBlock>
            <p>When isInteracting is false, OrbitControls are disabled and the shape behaves as a static image on the canvas. Note what this method does not do: it never pauses the loop or disposes anything. A shape that vanishes on deselect is a sign something else is calling pause() or setting visible to false.</p>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
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

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-white/80">
      <code>{children}</code>
    </pre>
  );
}

