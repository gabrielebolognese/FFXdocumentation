import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'warp-mesh-warp', label: 'Warp (Mesh Warp)' },
  { id: 'ripple', label: 'Ripple' },
  { id: 'twirl', label: 'Twirl' },
  { id: 'bulge-pinch', label: 'Bulge / Pinch' },
  { id: 'perspective-warp', label: 'Perspective Warp' },
  { id: 'displacement-map', label: 'Displacement Map' },
];

export default function DistortionFiltersPage() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Distortion Filters | FlashFX Documentation"
        description="Reference for all distortion filters available on images in FlashFX."
        keywords="FlashFX, distortion filters, warp, ripple, twirl, bulge, perspective warp, displacement map"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Distortion Filters</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="warp-mesh-warp" title="Warp (Mesh Warp)">
            <p>Applies a free-form warp by deforming a mesh grid overlaid on the image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A grid of control points appears over the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag any control point to pull the image in that direction</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The warp is smooth and continuous between control points</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Grid Density</strong> — number of rows and columns in the warp mesh (more points = finer control)</li>
            </ul>
            <p>All warp control point positions are animatable, enabling fluid morphing and organic wave distortions.</p>
          </Section>

          <Section id="ripple" title="Ripple">
            <p>Applies a sinusoidal wave distortion.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Amplitude</strong> — height of the wave (how much pixels are displaced)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Frequency</strong> — how many waves appear across the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Direction</strong> — Horizontal, Vertical, or Radial</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Phase</strong> — shifts the wave position. Animating phase creates a water ripple animation.</li>
            </ul>
          </Section>

          <Section id="twirl" title="Twirl">
            <p>Rotates the image around a center point, with stronger rotation near the center and weaker rotation at the edges.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center X / Y</strong> — pivot of the twirl</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Angle</strong> — total rotation at the center point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radius</strong> — distance from the center over which the effect extends</li>
            </ul>
          </Section>

          <Section id="bulge-pinch" title="Bulge / Pinch">
            <p><strong className="text-white">Bulge:</strong> Pushes pixels outward from a center point, creating a convex fish-eye lens effect.</p>
            <p><strong className="text-white">Pinch:</strong> Pulls pixels inward toward a center point, creating a concave pinch effect.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center X / Y</strong> — origin of the effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Strength</strong> — magnitude of the displacement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radius</strong> — area of influence</li>
            </ul>
          </Section>

          <Section id="perspective-warp" title="Perspective Warp">
            <p>Distorts the image as if viewed from a different camera angle. Four corner handles reposition independently.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Top-Left, Top-Right, Bottom-Left, Bottom-Right corner pin positions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Used for simulating perspective, correcting keystoning, or placing images onto angled surfaces</li>
            </ul>
            <p>All four corners are individually animatable for fly-on perspective animation.</p>
          </Section>

          <Section id="displacement-map" title="Displacement Map">
            <p>Uses the luminosity of a second image to drive the distortion of the target image. Pixels in the target image are displaced in proportion to the brightness of the corresponding pixel in the displacement map.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Map Source</strong> — the image used as the displacement reference (can be any image in the project asset library)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Scale X / Y</strong> — the strength of displacement along each axis</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Map Channel</strong> — which channel of the map image drives the displacement: Luminance, Red, Green, or Blue</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
