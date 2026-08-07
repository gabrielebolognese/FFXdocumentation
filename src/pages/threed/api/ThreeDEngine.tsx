import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'renderer', label: 'Renderer Creation' },
  { id: 'renderer-config', label: 'Renderer Configuration' },
  { id: 'camera-and-orbit', label: 'Camera and Orbit Controls' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'grid', label: 'Grid Helper' },
  { id: 'public-methods', label: 'Key Public Methods' },
  { id: 'dispose-sequence', label: 'Dispose Sequence' },
];

export default function ThreeDEngine() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="ThreeDEngine | FlashFX Documentation"
        description="API reference for ThreeDEngine — its initialization sequence, renderer configuration, lighting defaults, public methods and dispose order."
        keywords="FlashFX, 3D, API, ThreeDEngine, WebGLRenderer, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">ThreeDEngine</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The engine is the central coordinator. It creates all Three.js infrastructure and delegates domain-specific work to SceneManager and GizmoController.
          </p>

          <Section id="renderer" title="Renderer Creation">
            <CodeBlock>{`this.renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  preserveDrawingBuffer: true,
});`}</CodeBlock>
            <Table
              headers={['Option', 'Value', 'Reason']}
              rows={[
                ['antialias', 'true', 'Smooth edges on geometry'],
                ['alpha', 'true', 'Transparent background so the canvas artboard shows through'],
                ['preserveDrawingBuffer', 'true', 'Required for toDataURL() and screenshot capture'],
              ]}
            />
          </Section>

          <Section id="renderer-config" title="Renderer Configuration">
            <Table
              headers={['Setting', 'Value', 'Purpose']}
              rows={[
                ['setPixelRatio', 'Math.min(window.devicePixelRatio, 2)', 'Caps at 2x. Higher ratios quadruple pixel count with diminishing visual return.'],
                ['shadowMap.enabled', 'true', 'Enables shadow casting'],
                ['shadowMap.type', 'THREE.PCFSoftShadowMap', 'Percentage-Closer Filtering with bilinear filtering, producing smooth penumbras'],
                ['toneMapping', 'THREE.ACESFilmicToneMapping', 'ACES filmic curve maps HDR to LDR with natural highlight rolloff'],
                ['toneMappingExposure', '1.0', 'Neutral exposure'],
                ['setClearColor', '0x000000, 0', 'Fully transparent clear so the background shows through'],
              ]}
            />
          </Section>

          <Section id="camera-and-orbit" title="Camera and Orbit Controls">
            <Table
              headers={['Parameter', 'Value', 'Purpose']}
              rows={[
                ['FOV', '50', 'Moderate field of view. Avoids fisheye distortion while keeping natural perspective.'],
                ['Near plane', '0.1', 'Close enough that small objects aren\'t clipped'],
                ['Far plane', '1000', 'Far enough for large imported models'],
                ['Position', '(4, 3, 4)', 'A diagonal giving an isometric-like initial view'],
              ]}
            />
            <p>OrbitControls are created with damping enabled and a damping factor of 0.1, targeting the origin. Damping creates smooth deceleration when the user releases the mouse; the change event marks the scene dirty.</p>
          </Section>

          <Section id="lighting" title="Lighting">
            <p>Three lights are added to every scene:</p>
            <Table
              headers={['Light', 'Type', 'Intensity', 'Position', 'Shadow']}
              rows={[
                ['Ambient', 'AmbientLight', '0.4', 'N/A', 'No'],
                ['Directional', 'DirectionalLight', '1.0', '(5, 10, 5)', 'Yes (2048x2048 shadow map)'],
                ['Point', 'PointLight', '0.3', '(-3, 5, -3)', 'No'],
              ]}
            />
            <p>All three are white. The directional light is the primary source; its shadow camera uses orthographic bounds of -10 to 10 on all axes, with a near plane of 0.1 and a far plane of 50.</p>
          </Section>

          <Section id="grid" title="Grid Helper">
            <p>A 20-unit grid with 40 divisions is created at 0.4 opacity but is hidden by default and never added to the scene. It exists as a reference that can be retrieved via getGridHelper() and toggled externally if needed.</p>
          </Section>

          <Section id="public-methods" title="Key Public Methods">
            <Table
              headers={['Method', 'Description']}
              rows={[
                ['markDirty()', 'Forces a re-render on the next frame'],
                ['onSelect(cb)', 'Registers a callback for object selection events'],
                ['onTransformEnd(cb)', 'Registers a callback for when a gizmo drag ends'],
                ['selectObject(id)', 'Selects an object by ID and attaches the gizmo, or deselects if null'],
                ['addPrimitive(type, material?, geometry?)', 'Creates a new primitive mesh and adds it to the scene'],
                ['importModelFromFile(file)', 'Loads a 3D model file, normalizes it and adds it to the scene'],
                ['removeObject(id)', 'Removes an object and disposes its resources'],
                ['setGizmoMode(mode)', 'Switches the gizmo between translate, rotate and scale'],
                ['updateTransform(id, pos?, rot?, scale?)', 'Updates an object\'s position, rotation or scale'],
                ['updateMaterial(id, config)', 'Replaces an object\'s material'],
                ['updateGeometry(id, config)', 'Replaces an object\'s geometry (primitives only)'],
                ['updateEnvironment(config)', 'Updates lighting and background color'],
                ['getSelectedObject()', 'Returns the config of the selected object'],
                ['getAllObjects()', 'Returns configs for all objects in the scene'],
                ['getCameraPosition() / getCameraTarget()', 'Returns the current camera position or orbit target'],
                ['setCameraPosition(pos, target)', 'Sets camera position and orbit target'],
                ['resize(width, height)', 'Resizes the renderer and updates camera aspect'],
                ['setOrbitEnabled(enabled)', 'Enables or disables orbit controls'],
                ['pauseLoop() / resumeLoop()', 'Stops or restarts the render loop'],
                ['dispose()', 'Full teardown'],
              ]}
            />
          </Section>

          <Section id="dispose-sequence" title="Dispose Sequence">
            <CodeBlock>{`dispose(): void {
  this.disposed = true;
  cancelAnimationFrame(this.animFrameId);
  this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown);
  this.gizmo.dispose();
  this.sceneManager.dispose();
  this.orbit.dispose();
  this.renderer.dispose();
  if (this.renderer.domElement.parentElement) {
    this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
  }
}`}</CodeBlock>
            <Callout>The order matters. The gizmo is detached before the scene manager disposes all meshes, then orbit and renderer are disposed, and the canvas DOM element is removed last.</Callout>
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
