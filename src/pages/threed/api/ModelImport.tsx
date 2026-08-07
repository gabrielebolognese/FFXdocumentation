import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'supported-formats', label: 'Supported Formats' },
  { id: 'pipeline', label: 'Import Pipeline' },
  { id: 'draco', label: 'Draco Decoder Setup' },
  { id: 'safety', label: 'Engine Safety' },
  { id: 'serialization-limit', label: 'Serialization Limitation' },
];

export default function ModelImport() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Model Import System | FlashFX Documentation"
        description="Supported 3D model formats in FlashFX, the import and normalization pipeline, Draco decoder setup, and the serialization limitation."
        keywords="FlashFX, 3D, model import, GLB, GLTF, OBJ, FBX, STL"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Model Import System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            ModelLoader handles external 3D model files: format detection, loader instantiation, normalization and object-URL lifecycle. Five formats are supported.
          </p>

          <Section id="supported-formats" title="Supported Formats">
            <Table
              headers={['Format', 'Extension', 'Data Supported', 'Notes']}
              rows={[
                ['GLTF Binary', '.glb', 'Geometry, materials, textures, animations, scene hierarchy', 'Recommended. Self-contained binary file.'],
                ['GLTF', '.gltf', 'Same as GLB', 'JSON file that may reference external .bin and texture files, which will not resolve through object URLs'],
                ['Wavefront OBJ', '.obj', 'Geometry only', 'No materials or textures. All meshes get a default material'],
                ['FBX', '.fbx', 'Geometry, basic materials, animations', 'Material fidelity varies'],
                ['STL', '.stl', 'Geometry only (triangulated mesh)', 'Gets a default blue material (#3B82F6, roughness 0.5, metalness 0.1)'],
              ]}
            />
          </Section>

          <Section id="pipeline" title="Import Pipeline">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">File picker</strong> — a hidden file input accepting the five supported extensions.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Extension detection</strong> — taken from the filename.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Object URL creation</strong> — a temporary URL the loader can fetch.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Loader selection</strong> — a switch picks GLTFLoader, OBJLoader, FBXLoader or STLLoader.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Normalization</strong> — the bounding box is computed, a scale factor of 2 / maxDim is applied so the largest dimension becomes 2 units, then the object is translated so its center sits at the origin.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Shadow setup</strong> — every mesh gets castShadow and receiveShadow.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">URL revocation</strong> — the temporary URL is released.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Scene registration</strong> — the engine clears existing primitives, then registers the imported object.</span></li>
            </ul>
          </Section>

          <Section id="draco" title="Draco Decoder Setup">
            <p>Draco is a compression format for GLTF meshes. Its decoder files must be served from public/draco/gltf/:</p>
            <CodeBlock>{`public/draco/gltf/
  draco_decoder.js
  draco_decoder.wasm
  draco_wasm_wrapper.js`}</CodeBlock>
            <p>The path is configured via dracoLoader.setDecoderPath("/draco/gltf/"). If these files are missing, Draco-compressed GLTF files fail silently or throw a network error.</p>
          </Section>

          <Section id="safety" title="Engine Safety">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>If the engine is disposed before loading starts, an error is thrown.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>If the engine is disposed during the async load, the loaded object&apos;s geometries and materials are disposed immediately to prevent a leak.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>On success, the existing scene is cleared before the model is added.</span></li>
            </ul>
            <p>Loaders are lazily instantiated as module-level singletons, so the first call creates the loader and later calls reuse it.</p>
          </Section>

          <Section id="serialization-limit" title="Serialization Limitation">
            <Callout>Imported models carry geometryType: "imported", and restoreScene() skips them because their binary mesh data is not stored in the JSON snapshot. If a project is saved and reloaded, imported models must be re-imported. Only primitive shapes survive serialization.</Callout>
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
