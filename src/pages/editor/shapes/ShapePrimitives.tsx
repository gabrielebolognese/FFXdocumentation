import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'rectangle-tool', label: 'Rectangle Tool (R)' },
  { id: 'circle-ellipse-tool', label: 'Circle / Ellipse Tool (C)' },
  { id: 'star-polygon-tool', label: 'Star & Polygon Tool (P)' },
  { id: 'line-tool', label: 'Line Tool (L)' },
];

export default function ShapePrimitives() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Shape Primitives | FlashFX Documentation"
        description="Learn about FlashFX shape primitives - rectangles, circles, stars, polygons, and lines."
        keywords="FlashFX, shapes, primitives, rectangles, circles, vectors"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Shape Primitives</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX provides a complete set of vector primitive tools. Every shape drawn with these tools is fully editable,vertices, curves, and all properties remain accessible after creation.
          </p>

          <Section id="rectangle-tool" title="Rectangle Tool (R)">
            <p>Draws rectangular shapes, including perfect squares.</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Drawing:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click and drag to draw a rectangle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code> while dragging to constrain to a perfect square</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt</code> while dragging to draw from the center point outward</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Properties unique to rectangles:</h3>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Corner Radius</h4>
              <p className="mb-3">Each corner of a rectangle can have an independent radius applied, creating rounded corners. Values are set in pixels.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Uniform radius</strong>,a single value applies equally to all four corners</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Independent corners</strong>,click the chain-link icon to unlink corners and set each individually: top-left, top-right, bottom-right, bottom-left</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Radius range: 0px (sharp corner) to half the shortest side (maximum circle, produces a "stadium" or "pill" shape)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Corner radius is animatable,it can be keyframed to change over time (e.g., morphing from sharp to rounded)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Corner Style</h4>
              <p className="mb-3">Three styles are available for rounded corners:</p>
              <Table
                headers={['Style', 'Description']}
                rows={[
                  ['Round', 'Standard circular arc (default)'],
                  ['Smooth', 'iOS-style continuous curvature,a "squircle" curve that flows more naturally from the straight edge into the curve'],
                  ['Bevel', 'A straight angled cut rather than a curve'],
                ]}
              />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Dimensions</h4>
              <p>Width and height are editable numerically in the Properties Panel at any time. Changing dimensions by typing values does not require the Rectangle tool to be active,use the Selection tool and edit in the Properties Panel.</p>
            </div>
          </Section>

          <Section id="circle-ellipse-tool" title="Circle / Ellipse Tool (C)">
            <p>Draws ellipses, including perfect circles.</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Drawing:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click and drag to draw an ellipse</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code> to constrain to a perfect circle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt</code> to draw from the center outward</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Arc and Sweep Properties</h4>
              <p className="mb-3">A circle/ellipse can be configured as a partial arc rather than a complete ring:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start Angle</strong>,the angle at which the arc begins (0° = 3 o'clock, clockwise)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">End Angle</strong>,the angle at which the arc ends</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Arc Mode:</strong>
                  <ul className="ml-6 mt-2 space-y-1.5">
                    <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Open</strong>,an open arc (like a Pac-Man mouth shape at certain angles)</li>
                    <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Chord</strong>,the two ends of the arc are connected by a straight line</li>
                    <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Pie</strong>,the two ends connect back to the center, like a pie slice</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-3">Arc start and end angles are both animatable, enabling animated progress indicators, countdown rings, and loading spinners without any external configuration.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Inner Radius (Donut Mode)</h4>
              <p>Setting an inner radius creates a donut/ring shape. The inner radius defines the hollow center as a proportion of the outer radius (0 = solid, 1 = no shape).</p>
            </div>
          </Section>

          <Section id="star-polygon-tool" title="Star & Polygon Tool (P)">
            <p>Generates regular polygons and multi-pointed star shapes.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Polygon Mode:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Sides</strong>,the number of sides (3 = triangle, 4 = square, 6 = hexagon, etc.)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Minimum: 3 sides. No enforced maximum.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The polygon is always regular (all sides equal, all angles equal)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Star Mode:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Points</strong>,the number of star points (minimum: 3)</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Outer Radius</strong>,the distance from the center to the outer points</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Inner Radius</strong>,the distance from the center to the inner indentations between points. This controls the "sharpness\" of the star:
                  <ul className="ml-6 mt-2 space-y-1.5">
                    <li className="flex gap-2"><span className="text-yellow-accent">–</span>Inner radius close to outer radius = shallow, fat star</li>
                    <li className="flex gap-2"><span className="text-yellow-accent">–</span>Inner radius very small relative to outer radius = sharp, spike-like star</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Smoothing</h4>
              <p>A smoothing parameter rounds the corners at both the inner and outer vertices of the star. At maximum smoothing, a star becomes a lobed organic shape rather than a geometric star.</p>
              <p className="mt-2">Both inner radius and smoothing values are animatable, enabling fluid morphing effects.</p>
            </div>
          </Section>

          <Section id="line-tool" title="Line Tool (L)">
            <p>Draws straight line segments.</p>

            <h3 className="text-lg font-semibold text-white mt-6 mb-3">Properties:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start and End points</strong>,absolute X/Y coordinates</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Stroke Weight</strong>,the visual width of the line in pixels (lines have no fill by default)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Cap Style:</strong>
                <ul className="ml-6 mt-2 space-y-1.5">
                  <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Butt</strong>,the line ends exactly at the endpoint coordinate, with no extension</li>
                  <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Round</strong>,the line ends with a semicircular cap extending beyond the endpoint</li>
                  <li className="flex gap-2"><span className="text-yellow-accent">–</span><strong className="text-white">Square</strong>,the line ends with a flat square cap extending beyond the endpoint by half the stroke width</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4">Lines can have the same material properties (including gradient strokes) as any other shape. They can also be given arrowheads via the stroke settings.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Arrow Heads:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start Cap</strong>,adds an arrowhead or decorative cap to the start point</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">End Cap</strong>,adds an arrowhead or decorative cap to the end point</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Cap styles: Arrow, Filled Arrow, Circle, Square, Diamond</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Dashed Lines:</h4>
              <p className="mb-3">Lines can be converted to dashed strokes:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dash Length</strong>,the length of each dash segment in pixels</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Gap Length</strong>,the space between dashes in pixels</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Dash Offset</strong>,shifts the dash pattern along the stroke, useful for animated "marching ants\" effects when keyframed</li>
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
