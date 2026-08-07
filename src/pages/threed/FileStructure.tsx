import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'core-files', label: 'Core 3D Files' },
  { id: 'react-components', label: 'React UI Components' },
  { id: 'integration-points', label: 'Integration Points Outside src/3d/' },
  { id: 'dependency-graph', label: 'Dependency Graph' },
];

export default function FileStructure() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="File Structure | FlashFX Documentation"
        description="Every file in the FlashFX 3D system, what each is responsible for, what it exports, and how the modules depend on one another."
        keywords="FlashFX, 3D, file structure, architecture, modules"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">File Structure</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The 3D system lives in src/3d/. Core logic is plain TypeScript classes and pure functions; the React layer is a thin shell that mounts them. This page maps every file to its responsibility and exports.
          </p>

          <Section id="core-files" title="Core 3D Files">
            <Table
              headers={['File', 'Responsibility']}
              rows={[
                ['types.ts', 'Central type definitions and default constants for the entire 3D system. Defines every interface and enum, plus all DEFAULT_* config objects.'],
                ['ThreeDShapeElement.ts', 'Top-level facade. Each instance owns one ThreeDEngine and provides the public API consumed by ThreeDShapeRenderer.'],
                ['ThreeDEngine.ts', 'Creates and manages the WebGLRenderer, Scene, Camera, OrbitControls, lights and render loop. Delegates shape management to SceneManager and gizmo management to GizmoController.'],
                ['SceneManager.ts', 'Maintains the registry of 3D objects in a scene. Handles add, remove, select, raycast, transform, material and geometry updates.'],
                ['GizmoController.ts', 'Wraps Three.js TransformControls. Manages attach/detach, mode switching and the OrbitControls conflict.'],
                ['GeometryFactory.ts', 'Pure functions that create BufferGeometry instances from a GeometryConfig. Supports all six primitives plus SVG extrusion.'],
                ['MaterialSystem.ts', 'Creates and updates Three.js materials from a MaterialConfig. Handles texture loading, caching and disposal.'],
                ['ModelLoader.ts', 'Loads external 3D model files. Handles format detection, loader instantiation, normalization and object-URL lifecycle.'],
                ['SceneSerializer.ts', 'Serializes engine scene state to a JSON-safe snapshot and restores it on load.'],
              ]}
            />
          </Section>

          <Section id="react-components" title="React UI Components">
            <Table
              headers={['File', 'Responsibility']}
              rows={[
                ['ThreeDShapeRenderer.tsx', 'Mounts a ThreeDShapeElement into a DOM container. Manages element lifecycle, resize syncing, interaction mode and visibility-based pause/resume.'],
                ['ThreeDPropertiesPanel.tsx', 'The properties panel shown when a 3D shape is selected. Controls canvas position, gizmo mode, 3D transform, geometry, material type, material properties and texture maps.'],
                ['ThreeDShapePicker.tsx', 'Modal for choosing a primitive or importing a model. Shows a grid of six shape cards with a live 3D preview.'],
                ['ThreeDShapePreview.tsx', 'Self-contained auto-rotating preview renderer used inside the picker. Creates a temporary engine, adds the primitive and orbits the camera.'],
              ]}
            />
          </Section>

          <Section id="integration-points" title="Integration Points Outside src/3d/">
            <Table
              headers={['File', '3D Relevance']}
              rows={[
                ['src/types/design.ts', 'Defines the threeDMetadata, threeDGeometryType and threeDSceneState fields on DesignElement (lines 200-205).'],
                ['src/components/design-tool/Canvas.tsx', 'Renders ThreeDShapeRenderer for every threed-shape element. Controls pointer-event routing via activeThreeDElementId.'],
                ['public/draco/gltf/', 'Draco decoder WASM files required by DRACOLoader.'],
              ]}
            />
          </Section>

          <Section id="dependency-graph" title="Dependency Graph">
            <CodeBlock>{`types.ts  <-----------------------------------------------+
  ^                                                      |
  +-- GeometryFactory.ts <- MaterialSystem.ts            |
  |         ^                     ^                      |
  |         +------ SceneManager.ts ------------+        |
  |                       ^                     |        |
  |              ThreeDEngine.ts <- GizmoController.ts   |
  |                       ^                              |
  |              SceneSerializer.ts ---------------------+
  |                       ^
  |              ThreeDShapeElement.ts
  |                       ^
  |         +-------------+--------------+
  |         |             |              |
  |  ThreeDShapeRenderer  |  ThreeDPropertiesPanel
  |         |             |
  |         |    ThreeDShapePicker
  |         |             |
  |         |    ThreeDShapePreview
  |         |
  |    Canvas.tsx (design-tool)
  |
  +-- design.ts (types)`}</CodeBlock>
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

