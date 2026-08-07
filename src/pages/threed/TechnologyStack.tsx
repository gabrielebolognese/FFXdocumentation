import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'packages', label: 'Packages' },
  { id: 'addon-modules', label: 'Three.js Addon Modules' },
];

export default function TechnologyStack() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Technology Stack | FlashFX Documentation"
        description="The libraries, versions and Three.js addon modules the FlashFX 3D system depends on, and what each is responsible for."
        keywords="FlashFX, 3D, Three.js, technology stack, dependencies"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Technology Stack</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The 3D system is built on Three.js. This page lists every package it depends on, the Three.js addon modules it pulls from, and which dependencies are hard requirements versus reserved for future use.
          </p>

          <Section id="packages" title="Packages">
            <Table
              headers={['Package', 'Version', 'Purpose', 'Required?']}
              rows={[
                ['three', '^0.183.1', 'Core rendering engine. Provides WebGLRenderer, Scene, Camera, Geometry, Material and all scene-graph primitives. Every file in src/3d/ depends on it.', 'Hard requirement'],
                ['@types/three', '^0.183.1', 'TypeScript type definitions for Three.js. Development dependency only.', 'Hard requirement (TypeScript)'],
                ['gsap', '^3.14.2', 'GreenSock animation platform, used by the broader app animation engine. Not imported directly by any src/3d/ file, but the timeline can animate canvas-level properties of a 3D element such as position and opacity.', 'Not used directly by 3D'],
                ['postprocessing', '^6.38.3', 'Post-processing effects for Three.js. Referenced by the PostProcessingConfig type, but no passes are currently instantiated. The type infrastructure is in place for future bloom and SSAO support.', 'Soft (future use)'],
              ]}
            />
            <Callout>postprocessing is declared and typed but inert. Nothing in the engine constructs a pass today, so adding bloom or SSAO is a matter of wiring up the existing config type rather than introducing a new dependency.</Callout>
          </Section>

          <Section id="addon-modules" title="Three.js Addon Modules">
            <p>These are imported from three/examples/jsm/ rather than the package root.</p>
            <Table
              headers={['Module', 'Imported By', 'Purpose']}
              rows={[
                ['OrbitControls', 'ThreeDEngine.ts, GizmoController.ts', 'Camera orbit, pan and zoom interaction'],
                ['TransformControls', 'GizmoController.ts', 'Translate / rotate / scale gizmo overlay'],
                ['GLTFLoader', 'ModelLoader.ts', 'Loading .glb and .gltf files'],
                ['DRACOLoader', 'ModelLoader.ts', 'Decompressing Draco-encoded GLTF meshes'],
                ['OBJLoader', 'ModelLoader.ts', 'Loading .obj files'],
                ['FBXLoader', 'ModelLoader.ts', 'Loading .fbx files'],
                ['STLLoader', 'ModelLoader.ts', 'Loading .stl files'],
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


function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
