import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { label: 'Overview', id: 'overview' },
  { label: 'Snapshot-Bridge Architecture', id: 'snapshot-bridge' },
];

export default function ThreeDOverview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Overview"
        description="FlashFX 3D Feature System Overview"
        keywords="FlashFX, 3D, Three.js, overview"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white mb-4">Overview</h1>
        </div>

        <div id="overview" className="scroll-mt-32 space-y-4">
          <p className="text-sm text-white leading-relaxed">
            The 3D feature system enables users to embed live, interactive Three.js viewports directly into the 2D design canvas. Each 3D shape behaves like any other canvas element — it can be repositioned, resized, layered, have its opacity adjusted, and participate in the animation timeline — but internally it contains a fully independent Three.js scene where users can place, transform, and material-paint 3D primitives or imported models.
          </p>
        </div>

        <div id="snapshot-bridge" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white mb-4">Snapshot-Bridge Architecture</h2>

          <p className="text-sm text-white leading-relaxed">
            The core architectural idea is called the <strong>snapshot-bridge</strong>. Every 3D shape on the 2D canvas is a live Three.js renderer embedded as an HTML <code className="text-yellow-accent">{'<canvas>'}</code> element inside a <code className="text-yellow-accent">{'<div>'}</code> that is absolutely positioned within the 2D canvas artboard. The 2D canvas system controls <em>where</em> the 3D viewport sits (position, size, rotation, opacity), while the Three.js renderer controls <em>what</em> is drawn inside it.
          </p>

          <p className="text-sm text-white leading-relaxed">
            This approach was chosen over two alternatives:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span><strong>Single shared Three.js scene</strong> — rejected because it creates stacking and z-order conflicts between shapes, and because deletion of one shape would require surgical extraction from a shared scene graph. A bug where shapes would disappear when another was deselected drove the switch to isolation.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span><strong>Offline render-to-texture</strong> — rejected because it cannot provide real-time orbit interaction. The user needs to orbit, zoom, and pan inside each shape independently while editing.</span>
            </li>
          </ul>

          <pre className="bg-navy-elevated border border-navy-border rounded-lg p-4 overflow-x-auto">
            <code className="text-xs text-white font-mono">{`┌─────────────────────────────────────────────────┐
│              2D Canvas (Artboard)                │
│                                                  │
│   ┌──────────────────┐  ┌──────────────────┐     │
│   │ <div> host        │  │ <div> host        │    │
│   │  ┌──────────────┐ │  │  ┌──────────────┐ │   │
│   │  │ WebGLRenderer │ │  │  │ WebGLRenderer │ │   │
│   │  │   <canvas>    │ │  │  │   <canvas>    │ │   │
│   │  │              │ │  │  │              │ │   │
│   │  │  Scene       │ │  │  │  Scene       │ │   │
│   │  │  Camera      │ │  │  │  Camera      │ │   │
│   │  │  OrbitCtrl   │ │  │  │  OrbitCtrl   │ │   │
│   │  └──────────────┘ │  │  └──────────────┘ │   │
│   │  ThreeDShapeElem  │  │  ThreeDShapeElem  │   │
│   └──────────────────┘  └──────────────────┘     │
│                                                  │
│   CSS transform on artboard handles zoom/pan     │
└─────────────────────────────────────────────────┘`}</code>
          </pre>

          <p className="text-sm text-white leading-relaxed">
            The bridge between the 2D world and the 3D world is the <code className="text-yellow-accent">DesignElement</code> type. Every 2D element with <code className="text-yellow-accent">type === 'threed-shape'</code> stores three optional 3D fields:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-navy-border">
                  <th className="text-left py-3 px-4 text-white font-semibold">Field</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-border">
                  <td className="py-3 px-4 text-white font-mono text-xs">threeDMetadata</td>
                  <td className="py-3 px-4 text-white font-mono text-xs">ThreeDMetadata</td>
                  <td className="py-3 px-4 text-white">Serialized scene snapshot metadata for project save/load</td>
                </tr>
                <tr className="border-b border-navy-border">
                  <td className="py-3 px-4 text-white font-mono text-xs">threeDGeometryType</td>
                  <td className="py-3 px-4 text-white font-mono text-xs">GeometryType</td>
                  <td className="py-3 px-4 text-white">The primitive type the shape was created with (e.g. <code className="text-yellow-accent">'box'</code>)</td>
                </tr>
                <tr className="border-b border-navy-border">
                  <td className="py-3 px-4 text-white font-mono text-xs">threeDSceneState</td>
                  <td className="py-3 px-4 text-white font-mono text-xs">SceneStateSnapshot</td>
                  <td className="py-3 px-4 text-white">Live scene state used for persistence and restoration</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white leading-relaxed">
            These fields are defined in <code className="text-yellow-accent">src/types/design.ts</code> (lines 200-205).
          </p>
        </div>
      </div>
    </Layout>
  );
}
