import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'new-geometry-type', label: 'Adding a New Geometry Type' },
  { id: 'new-material-property', label: 'Adding a New Material Property' },
  { id: 'new-file-format', label: 'Adding a New File Format' },
];

export default function Extending() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Extending the 3D System | FlashFX Documentation"
        description="Step-by-step guides for adding a new geometry type, a new material property, or a new model file format to FlashFX 3D."
        keywords="FlashFX, 3D, extending, development, geometry, material, formats"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Extending the 3D System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Three common extensions, each touching a predictable set of files. The pattern is always the same: widen the type, add the default, implement the behaviour, then surface it in the UI.
          </p>

          <Section id="new-geometry-type" title="Adding a New Geometry Type">
            <p>Step 1 — add the type to the GeometryType union in src/3d/types.ts:</p>
            <CodeBlock>{`// Before
export type GeometryType = 'box' | 'sphere' | 'cylinder' | 'torus' | 'cone' | 'capsule';

// After
export type GeometryType = 'box' | 'sphere' | 'cylinder' | 'torus' | 'cone' | 'capsule' | 'octahedron';`}</CodeBlock>
            <p>Step 2 — add any new geometry-specific parameters to GeometryConfig and update DEFAULT_GEOMETRY_CONFIG with defaults.</p>
            <p>Step 3 — add a case to createPrimitiveGeometry() in GeometryFactory.ts:</p>
            <CodeBlock>{`case 'octahedron':
  return new THREE.OctahedronGeometry(config.radius, config.segments);`}</CodeBlock>
            <p>Step 4 — add an entry to the SHAPES array in ThreeDShapePicker.tsx, with a matching SVG icon component in the same file.</p>
            <CodeBlock>{`{
  type: 'octahedron',
  label: 'Octahedron',
  description: 'An eight-faced polyhedron.',
  icon: <ShapeIconOctahedron />,
},`}</CodeBlock>
            <p>Step 5 — add geometry controls to ThreeDPropertiesPanel.tsx inside the geometry section conditional.</p>
            <p>Step 6 — SceneManager.updateGeometry() needs no change; it already routes through createPrimitiveGeometry().</p>
          </Section>

          <Section id="new-material-property" title="Adding a New Material Property">
            <p>Step 1 — add the property to the MaterialConfig interface in types.ts, and Step 2 — give it a default in DEFAULT_MATERIAL_CONFIG.</p>
            <p>Step 3 — apply it in createMaterial() in MaterialSystem.ts, inside the branch for the material types it applies to:</p>
            <CodeBlock>{`if (config.type === 'physical') {
  const physConfig = {
    // ... existing
    anisotropy: config.anisotropyStrength,
  };
}`}</CodeBlock>
            <p>Step 4 — add a UI control in ThreeDPropertiesPanel.tsx, inside the conditional block for that material type:</p>
            <CodeBlock>{`<SliderRow
  label="Anisotropy"
  value={mat.anisotropyStrength}
  min={0} max={1} step={0.01}
  onChange={v => handleMaterial({ anisotropyStrength: v })}
/>`}</CodeBlock>
          </Section>

          <Section id="new-file-format" title="Adding a New File Format">
            <p>Step 1 — import the loader from three/examples/jsm/loaders/, or install it if needed.</p>
            <p>Step 2 — add a lazy-initialized loader getter in ModelLoader.ts:</p>
            <CodeBlock>{`import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';

let threeMFLoader: ThreeMFLoader | null = null;

function getThreeMFLoader(): ThreeMFLoader {
  if (!threeMFLoader) threeMFLoader = new ThreeMFLoader();
  return threeMFLoader;
}`}</CodeBlock>
            <p>Step 3 — add a case to the switch in loadModel(), and Step 4 — add the extension to SUPPORTED_EXTENSIONS.</p>
            <CodeBlock>{`case '3mf': {
  object = await getThreeMFLoader().loadAsync(url);
  break;
}

const SUPPORTED_EXTENSIONS = ['glb', 'gltf', 'obj', 'fbx', 'stl', '3mf'];`}</CodeBlock>
            <p>Step 5 — update the file input accept attribute in ThreeDShapePicker.tsx and the label text below the import button.</p>
            <p>Step 6 — if the loader returns a geometry rather than a scene, as STL does, wrap it in a THREE.Mesh with a default material before returning.</p>
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


function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-white/80">
      <code>{children}</code>
    </pre>
  );
}

