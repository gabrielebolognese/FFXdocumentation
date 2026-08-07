import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'shape-registry', label: 'Shape Registry' },
  { id: 'methods', label: 'Methods' },
];

export default function SceneManager() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="SceneManager | FlashFX Documentation"
        description="API reference for SceneManager, the registry that pairs serializable object configs with live Three.js meshes in FlashFX."
        keywords="FlashFX, 3D, API, SceneManager, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">SceneManager</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            SceneManager maintains the registry of 3D objects in a scene. Each entry pairs an immutable config — the serializable state — with a live Three.js mesh or group.
          </p>

          <Section id="shape-registry" title="Shape Registry">
            <p>The registry is a Map&lt;string, &#123; config: Object3DConfig; mesh: THREE.Object3D &#125;&gt;. IDs are generated per instance:</p>
            <CodeBlock>{`let nextId = 1;
function generateId(): string {
  return \`3d-\${Date.now()}-\${nextId++}\`;
}`}</CodeBlock>
          </Section>

          <Section id="methods" title="Methods">
            <Table
              headers={['Method', 'Description']}
              rows={[
                ['addPrimitive(type, materialConfig, geometryConfig)', 'Creates a mesh via createPrimitiveMesh(), positions it at (0, 0.5, 0), registers it and returns the config'],
                ['extrudeFromSvgShapes(shapes, name, geometryConfig, materialConfig)', 'Creates an extruded mesh from THREE.Shape arrays, for SVG icon shapes'],
                ['importModel(object, name)', 'Registers an externally loaded Object3D from ModelLoader. The config captures its current transform'],
                ['selectObject(id)', 'Sets selectedId. Does not attach any gizmo — that is the engine’s responsibility'],
                ['getSelectedId()', 'Returns the currently selected ID or null'],
                ['getMesh(id) / getConfig(id)', 'Returns the live mesh, or the config, for an ID'],
                ['getAllConfigs()', 'Returns all configs as an array'],
                ['removeObject(id)', 'Removes the mesh, traverses it to dispose all geometries and materials, deletes it from the map and clears selection if it was selected'],
                ['removeAll()', 'Removes every object in the map'],
                ['raycast(raycaster)', 'Collects all mesh children, runs intersectObjects() and walks up the parent chain to find userData.configId. Returns null if nothing was hit'],
                ['updateTransform(id, pos?, rot?, scale?)', 'Updates both the live mesh and the stored config. Only applies axes that are provided'],
                ['syncTransformFromMesh(id)', 'Reads the mesh\'s current transform back into the config. Called after gizmo drag-end'],
                ['updateGeometry(id, config)', 'Disposes the old geometry and creates a new one. Only works for non-imported, non-extruded types'],
                ['updateMaterial(id, config)', 'Traverses children and calls updateMeshMaterial() on each mesh'],
                ['restoreFromConfig(config)', 'Reconstructs a mesh from a saved config. Returns null for imported models'],
                ['dispose()', 'Calls removeAll()'],
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

