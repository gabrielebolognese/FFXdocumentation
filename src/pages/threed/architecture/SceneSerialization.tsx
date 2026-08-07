import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-is-captured', label: 'What Is Captured' },
  { id: 'restoration', label: 'Restoration' },
  { id: 'imported-model-limitation', label: 'The Imported Model Limitation' },
];

export default function SceneSerialization() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Scene Serialization | FlashFX Documentation"
        description="How FlashFX 3D scene state is serialized for project save and restored on load, and why imported models do not survive the round trip."
        keywords="FlashFX, 3D, serialization, save, load, persistence"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Scene Serialization</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Scene state is serialized to a JSON-safe object by SceneSerializer.ts so it can travel with the saved project. Primitives round-trip completely; imported models do not.
          </p>

          <Section id="what-is-captured" title="What Is Captured">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>All objects in the scene — id, name, geometry type, geometry config, material config, position, rotation, scale and imported model name.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Camera position and orbit target.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Environment configuration — light intensities, colors and background color.</span></li>
            </ul>
            <CodeBlock>{`export function serializeScene(engine: ThreeDEngine, environment: EnvironmentConfig): SceneStateSnapshot {
  const objects: SerializedObject[] = engine.getAllObjects().map((obj) => ({
    id: obj.id,
    name: obj.name,
    geometryType: obj.geometryType,
    geometry: { ...obj.geometry },
    material: { ...obj.material },
    position: { ...obj.position },
    rotation: { ...obj.rotation },
    scale: { ...obj.scale },
    importedModelName: obj.importedModelName,
  }));

  return {
    objects,
    cameraPosition: engine.getCameraPosition(),
    cameraTarget: engine.getCameraTarget(),
    environment: { ...environment },
  };
}`}</CodeBlock>
          </Section>

          <Section id="restoration" title="Restoration">
            <p>restoreScene() clears the engine scene, iterates the serialized objects and calls sceneManager.restoreFromConfig() for each. Once objects are restored, the camera position and environment are applied and markDirty() is called.</p>
          </Section>

          <Section id="imported-model-limitation" title="The Imported Model Limitation">
            <Callout>Imported models are skipped during restoration. Their binary mesh data is not stored in the snapshot, so only primitive shapes can be fully reconstructed. If a project containing an imported model is saved and reloaded, the model must be re-imported.</Callout>
            <p>This is a deliberate consequence of keeping the snapshot JSON-safe. Embedding mesh binaries would make project files large and slow to parse.</p>
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
