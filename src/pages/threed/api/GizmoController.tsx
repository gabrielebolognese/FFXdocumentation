import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'constructor', label: 'Constructor' },
  { id: 'orbit-conflict', label: 'The OrbitControls Conflict' },
  { id: 'gizmo-modes', label: 'Gizmo Modes' },
  { id: 'methods', label: 'Methods' },
];

export default function GizmoController() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="GizmoController | FlashFX Documentation"
        description="API reference for GizmoController — the translate, rotate and scale gizmo, and how it resolves the OrbitControls conflict."
        keywords="FlashFX, 3D, API, gizmo, TransformControls, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">GizmoController</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            GizmoController wraps Three.js TransformControls to provide translate, rotate and scale gizmos for the selected 3D object.
          </p>

          <Section id="constructor" title="Constructor">
            <CodeBlock>{`constructor(
  camera: THREE.Camera,
  domElement: HTMLElement,
  scene: THREE.Scene,
  orbit: OrbitControls
)`}</CodeBlock>
            <p>The TransformControls helper is added to the scene, and the gizmo size is set to 0.75 — slightly smaller than the Three.js default.</p>
          </Section>

          <Section id="orbit-conflict" title="The OrbitControls Conflict">
            <p>When the user drags the gizmo, the same pointer events would also orbit the camera. The controller resolves this by listening for dragging-changed:</p>
            <CodeBlock>{`this.controls.addEventListener('dragging-changed', (event: { value: boolean }) => {
  this.orbit.enabled = !event.value;
});`}</CodeBlock>
            <p>Orbit is disabled when dragging starts and re-enabled when it ends.</p>
          </Section>

          <Section id="gizmo-modes" title="Gizmo Modes">
            <Table
              headers={['Mode', 'Shortcut', 'Mode String', 'Visual']}
              rows={[
                ['Translate', 'W', '\'translate\'', 'XYZ axis arrows'],
                ['Rotate', 'E', '\'rotate\'', 'XYZ rotation rings'],
                ['Scale', 'R', '\'scale\'', 'XYZ cube handles'],
              ]}
            />
            <Callout>The W/E/R shortcuts are not handled inside GizmoController. They are handled by the consuming UI component, which calls engine.setGizmoMode().</Callout>
          </Section>

          <Section id="methods" title="Methods">
            <Table
              headers={['Method', 'Description']}
              rows={[
                ['onDrag(changeCb, endCb)', 'Registers callbacks for continuous drag and drag-end'],
                ['attach(id, object)', 'Attaches the gizmo to a mesh and stores the ID'],
                ['detach()', 'Detaches the gizmo from any mesh'],
                ['getAttachedId()', 'Returns the ID of the currently attached object'],
                ['setMode(mode)', 'Switches between translate, rotate and scale'],
                ['getHelper()', 'Returns the gizmo\'s visual helper for scene management'],
                ['dispose()', 'Detaches and disposes the TransformControls'],
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
