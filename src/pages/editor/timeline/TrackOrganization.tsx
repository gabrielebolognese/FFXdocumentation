import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'track-hierarchy', label: 'Track Hierarchy' },
  { id: 'track-colors', label: 'Track Colors' },
  { id: 'layer-bars', label: 'Layer Bars' },
  { id: 'layer-duration', label: 'Layer Duration' },
];

export default function TrackOrganization() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Track Types and Track Organization | FlashFX Documentation"
        description="Track hierarchy, track color coding, layer bars, and layer duration in the FlashFX timeline."
        keywords="FlashFX, track types, track colors, layer bar, track hierarchy, timeline organization"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Track Types and Track Organization</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="track-hierarchy" title="Track Hierarchy">
            <p>The track list follows a nested hierarchy:</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-white/70 leading-relaxed">
              <p>Sequence</p>
              <p className="pl-4">Group Layer</p>
              <p className="pl-8">Element Layer (animated)</p>
              <p className="pl-12">Transform Group Track</p>
              <p className="pl-16">Position X / Position Y</p>
              <p className="pl-12">Fill Layer 1</p>
              <p className="pl-16">Color</p>
              <p className="pl-12">Effects</p>
              <p className="pl-16">Blur Radius</p>
              <p className="pl-8">Element Layer (no animation)</p>
              <p className="pl-4">Null Layer</p>
            </div>
            <p>Layers with no animated properties show no expand arrow. Once any property is keyframed, the expand arrow appears.</p>
          </Section>

          <Section id="track-colors" title="Track Colors">
            <p>Each property track in the timeline is color-coded by property type to help quickly identify which properties are animated when scanning the timeline.</p>
            <Table
              headers={['Color', 'Property Type']}
              rows={[
                ['Blue', 'Position (X, Y)'],
                ['Green', 'Scale (X, Y)'],
                ['Orange', 'Rotation'],
                ['Purple', 'Opacity'],
                ['Red', 'Color'],
                ['Cyan', 'Effects / Filters'],
                ['Yellow', 'Special / Custom'],
                ['Gray', 'All other properties'],
              ]}
            />
          </Section>

          <Section id="layer-bars" title="Layer Bars">
            <p>Each layer in the timeline shows a <strong className="text-white">layer bar</strong> — a horizontal colored rectangle spanning the layer's active duration.</p>
            <p><strong className="text-white">Layer bar anatomy:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Bar color corresponds to element type (shapes = blue-gray, text = orange-gray, images = purple-gray, groups = neutral)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Small diamond icons on the bar indicate keyframe positions in summary view</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A gradient-shaded bar indicates there is animation within that time range</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A flat-colored bar indicates no keyframes (the element is static throughout)</li>
            </ul>
          </Section>

          <Section id="layer-duration" title="Layer Duration">
            <p>By default, a layer's bar spans from frame 0 to the project end. Layers can have their <strong className="text-white">in point</strong> and <strong className="text-white">out point</strong> set to restrict when they are active. See the Layer Duration and Trim section for full details.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
