import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'constructor', label: 'Constructor' },
  { id: 'public-methods', label: 'Public Methods' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'programmatic-creation', label: 'Programmatic Creation' },
];

export default function ThreeDShapeElement() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="ThreeDShapeElement | FlashFX Documentation"
        description="API reference for ThreeDShapeElement, the facade class that encapsulates one complete Three.js environment in FlashFX."
        keywords="FlashFX, 3D, API, ThreeDShapeElement, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">ThreeDShapeElement</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            ThreeDShapeElement is the primary facade for the 3D system. Each instance encapsulates a full Three.js environment and exposes the small surface the React layer needs.
          </p>

          <Section id="constructor" title="Constructor">
            <CodeBlock>{`constructor(mountContainer: HTMLElement, options: ThreeDShapeElementOptions = {})`}</CodeBlock>
            <Table
              headers={['Parameter', 'Type', 'Description']}
              rows={[
                ['mountContainer', 'HTMLElement', 'The DOM element that will receive the WebGLRenderer canvas'],
                ['options.geometryType', 'GeometryType (optional)', 'Primitive type to create initially. Defaults to \'box\''],
                ['options.sceneState', 'SceneStateSnapshot (optional)', 'If provided, the scene is restored from this snapshot instead of creating a new primitive'],
              ]}
            />
            <p>If sceneState is provided the constructor calls restoreScene(); otherwise it calls engine.addPrimitive() with the given geometry type.</p>
          </Section>

          <Section id="public-methods" title="Public Methods">
            <Table
              headers={['Method', 'Signature', 'Description']}
              rows={[
                ['getEngine()', '(): ThreeDEngine', 'Returns the underlying engine for direct API access'],
                ['resize()', '(width, height): void', 'Resizes the renderer and updates the camera aspect ratio'],
                ['setInteracting()', '(active: boolean): void', 'Enables or disables orbit controls and marks dirty. When false, the shape acts as a static viewport'],
                ['isInteracting()', '(): boolean', 'Returns the current interaction state'],
                ['getSceneSnapshot()', '(): SceneStateSnapshot', 'Serializes the current scene for persistence'],
                ['pause()', '(): void', 'Stops the render loop, for off-screen optimization'],
                ['resume()', '(): void', 'Restarts the render loop'],
                ['dispose()', '(): void', 'Destroys the engine, releases all GPU resources and removes the canvas from the DOM. Must be called when the shape is deleted'],
              ]}
            />
          </Section>

          <Section id="lifecycle" title="Lifecycle">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Construction</strong> — ThreeDShapeRenderer creates the element in a useEffect and passes the container div.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Active use</strong> — the user interacts via the properties panel or by entering 3D edit mode. Orbit, gizmo, material and geometry changes flow through getEngine().</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Visibility toggling</strong> — when element.visible becomes false, pause() is called; when it becomes true, resume() is called.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Destruction</strong> — the useEffect cleanup calls dispose(), which cascades through ThreeDEngine.dispose() to release every resource.</span></li>
            </ul>
          </Section>

          <Section id="programmatic-creation" title="Programmatic Creation">
            <CodeBlock>{`const container = document.getElementById('my-3d-host')!;
const shape = new ThreeDShapeElement(container, { geometryType: 'sphere' });

// Access the engine for advanced operations
const engine = shape.getEngine();
engine.updateMaterial('some-id', { ...DEFAULT_MATERIAL_CONFIG, color: '#ff0000' });

// When done
shape.dispose();`}</CodeBlock>
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

