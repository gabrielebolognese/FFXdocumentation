import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'why-isolation', label: 'Why Isolation' },
  { id: 'rejected-alternatives', label: 'Rejected Alternatives' },
  { id: 'tradeoffs', label: 'Tradeoffs' },
  { id: 'the-bridge', label: 'The 2D/3D Bridge' },
];

export default function PerShapeRenderer() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Per-Shape Renderer Model | FlashFX Documentation"
        description="Why every FlashFX 3D shape owns an isolated Three.js world, what that buys, and the WebGL context limit it costs."
        keywords="FlashFX, 3D, architecture, WebGL, renderer, isolation"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Per-Shape Renderer Model</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Each ThreeDShapeElement instance owns exactly one isolated Three.js world: one WebGLRenderer, one Scene, one PerspectiveCamera and one set of OrbitControls. Shapes do not share any Three.js resources.
          </p>

          <Section id="why-isolation" title="Why Isolation">
            <p>The design is documented directly in the source header of ThreeDShapeElement.ts, and it exists to guarantee three properties:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Clean disposal</strong> — when a shape is deleted, its entire GL context, all geometries, materials and textures are released in a single deterministic dispose() call.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Independent animation</strong> — each shape renders only when its own dirty flag is set, keeping GPU work minimal when shapes are idle.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">No cross-contamination</strong> — selecting, transforming or changing the material of one shape has zero effect on the rendering of any other shape.</span></li>
            </ul>
          </Section>

          <Section id="rejected-alternatives" title="Rejected Alternatives">
            <p>Two other approaches were considered and rejected:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Single shared Three.js scene</strong> — rejected because it creates stacking and z-order conflicts between shapes, and because deleting one shape would require surgical extraction from a shared scene graph. A bug where shapes disappeared when another was deselected drove the switch to isolation.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Offline render-to-texture</strong> — rejected because it cannot provide real-time orbit interaction. The user needs to orbit, zoom and pan inside each shape independently while editing.</span></li>
            </ul>
          </Section>

          <Section id="tradeoffs" title="Tradeoffs">
            <Table
              headers={['', 'Consequence']}
              rows={[
                ['Pro', 'Complete isolation. Deleting a shape is a single dispose() call with no entanglement.'],
                ['Pro', 'Independent dirty flags mean idle shapes consume zero GPU time.'],
                ['Pro', 'No z-order or stacking conflicts between shapes.'],
                ['Con', 'Each shape creates its own WebGL context. Browsers enforce a hard limit, typically 8-16 active contexts. Exceeding it causes the oldest context to be silently lost.'],
              ]}
            />
            <Callout>The context limit is the practical ceiling on how many 3D shapes can be live at once. Under 8 simultaneous shapes is safe across all browsers.</Callout>
          </Section>

          <Section id="the-bridge" title="The 2D/3D Bridge">
            <p>The bridge between the 2D world and the 3D world is the DesignElement type. Every 2D element with type === "threed-shape" stores three optional 3D fields:</p>
            <Table
              headers={['Field', 'Type', 'Purpose']}
              rows={[
                ['threeDMetadata', 'ThreeDMetadata', 'Serialized scene snapshot metadata for project save/load'],
                ['threeDGeometryType', 'GeometryType', 'The primitive type the shape was created with'],
                ['threeDSceneState', 'SceneStateSnapshot', 'Live scene state used for persistence and restoration'],
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
