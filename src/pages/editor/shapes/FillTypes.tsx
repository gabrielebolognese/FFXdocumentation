import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'solid-color', label: 'Solid Color Fill' },
  { id: 'linear-gradient', label: 'Linear Gradient Fill' },
  { id: 'radial-gradient', label: 'Radial Gradient Fill' },
  { id: 'angular-gradient', label: 'Angular (Conic) Gradient Fill' },
  { id: 'diamond-gradient', label: 'Diamond Gradient Fill' },
  { id: 'texture-fill', label: 'Texture Fill' },
  { id: 'pattern-fill', label: 'Pattern Fill' },
];

export default function FillTypes() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Fill Types | FlashFX Documentation"
        description="Learn about all fill types available in FlashFX — solid color, gradients, textures, and patterns."
        keywords="FlashFX, fill types, gradient, texture, pattern, solid color"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Fill Types</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Each fill layer in the material stack is assigned one fill type. The type can be changed at any time.
          </p>

          <Section id="solid-color" title="Solid Color Fill">
            <p>A flat uniform color across the entire element. The simplest and most performant fill type.</p>
            <ul className="space-y-2 text-sm mt-3">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Color (via the color picker)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Opacity</li>
            </ul>
          </Section>

          <Section id="linear-gradient" title="Linear Gradient Fill">
            <p>A smooth color transition along a straight axis.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Color Stops</h4>
              <p className="mb-3">The gradient bar displays the current gradient. Click anywhere on the bar to add a new color stop. Each stop has:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color</strong> — the color at this point in the gradient</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Position</strong> — expressed as a percentage (0% = start, 100% = end)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Opacity</strong> — the alpha at this stop, independent of the color's alpha</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Gradient Controls</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Gradient Angle:</strong> The direction of the gradient in degrees. 0° = left to right. 90° = top to bottom. Animatable.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start and End Points:</strong> Set explicit X/Y start and end coordinates relative to the shape's bounding box for gradients that don\'t span the full element.</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Gradient Repeat Mode</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">None</strong> — gradient transitions once from start to end</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Repeat</strong> — the gradient tiles beyond its start/end points</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reflect</strong> — the gradient tiles alternately mirrored</li>
              </ul>
            </div>
          </Section>

          <Section id="radial-gradient" title="Radial Gradient Fill">
            <p>A smooth color transition radiating outward from a center point.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center Point:</strong> X/Y position of the gradient origin within the element's bounding box (expressed as percentages: 50%/50% = center). Animatable.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius X / Radius Y:</strong> The horizontal and vertical extent of the gradient. When equal, the gradient is circular; when different, it is elliptical. Animatable.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Stops:</strong> Same as linear gradient — any number of stops with independent colors and positions.</li>
            </ul>
          </Section>

          <Section id="angular-gradient" title="Angular (Conic) Gradient Fill">
            <p>A gradient that sweeps around a center point like a color wheel.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center Point:</strong> The pivot of the sweep.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start Angle:</strong> The angle at which the first color stop begins.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Stops:</strong> Distributed around 360°.</li>
            </ul>

            <p className="mt-3">Conic gradients are useful for creating color wheel graphics, pie chart appearances, and radially swept color effects.</p>
          </Section>

          <Section id="diamond-gradient" title="Diamond Gradient Fill">
            <p>An extension of the radial gradient that produces a diamond/square radial pattern rather than a circular one. Useful for geometric, architectural, or stylized graphic treatments.</p>
          </Section>

          <Section id="texture-fill" title="Texture Fill">
            <p>Applies a procedurally generated texture as a fill layer.</p>

            <Table
              headers={['Texture', 'Description']}
              rows={[
                ['Noise', 'Grayscale or color noise at configurable frequency and scale'],
                ['Grain', 'Fine photographic film grain'],
                ['Concrete', 'Rough concrete-like surface'],
                ['Sand', 'Granular sandy texture'],
                ['Woven', 'Fabric weave pattern'],
                ['Brushed Metal', 'Linear metallic texture with directionality'],
                ['Watercolor', 'Soft organic wash texture'],
                ['Halftone', 'Regular dot halftone pattern'],
              ]}
            />

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Texture Parameters</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Scale</strong> — size of the texture pattern (smaller values = finer texture)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Opacity</strong> — overall transparency</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Mode</strong> — Monochrome, Color-Tinted, or Full Color</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Seed</strong> — randomization seed. Changing the seed produces a different random variation of the same texture type</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Blend Mode</strong> — how the texture layer composites with layers beneath it in the material stack</li>
              </ul>
              <p className="mt-3 text-xs text-white/50">Texture fills are procedural and do not add to the project's file size like imported image textures would.</p>
            </div>
          </Section>

          <Section id="pattern-fill" title="Pattern Fill">
            <p>Applies a repeating geometric pattern.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Pattern Types</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Dots (circular dots in a grid)', 'Horizontal Lines', 'Vertical Lines', 'Diagonal Lines (45°, -45°)', 'Grid (crossing lines)', 'Checker', 'Triangle Grid', 'Hexagonal Grid'].map((p, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-yellow-accent">•</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Pattern Parameters</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Size</strong> — spacing between pattern elements</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Stroke Weight</strong> (for line patterns) — thickness of lines</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dot Radius</strong> (for dot patterns) — radius of each dot</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Foreground Color</strong> — color of the pattern elements</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Background Color</strong> — color of the space between elements (can be fully transparent)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Rotation</strong> — rotates the entire pattern, independent of shape rotation</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offset X / Offset Y</strong> — shifts the pattern within the shape bounds</li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
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
