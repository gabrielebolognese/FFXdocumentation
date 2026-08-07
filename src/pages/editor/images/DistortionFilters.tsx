import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'distortion-filters', label: 'Distortion Filters' },
  { id: 'light-atmosphere-filters', label: 'Light & Atmosphere Filters' },
  { id: 'filter-stacking-ordering', label: 'Filter Stacking & Ordering' },
];

export default function DistortionFilters() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Distortion, Light & Filter Stacking | FlashFX Documentation"
        description="Complete reference for distortion filters, light and atmosphere filters, and filter stacking in FlashFX."
        keywords="FlashFX, distortion filters, warp, ripple, twirl, vignette, lens flare, bloom, filter stacking"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Images
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Distortion, Light & Filter Stacking</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="distortion-filters" title="8. Distortion Filters">
            <p><strong className="text-white">8.1 Warp (Mesh Warp)</strong></p>
            <p>Applies a free-form warp by deforming a mesh grid overlaid on the image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>A grid of control points appears over the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag any control point to pull the image in that direction</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The warp is smooth and continuous between control points</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid Density</strong> — number of rows and columns in the warp mesh (more points = finer control)</li>
            </ul>
            <p>All warp control point positions are animatable, enabling fluid morphing and organic wave distortions.</p>

            <p><strong className="text-white">8.2 Ripple</strong></p>
            <p>Applies a sinusoidal wave distortion.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Amplitude</strong> — height of the wave (how much pixels are displaced)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Frequency</strong> — how many waves appear across the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Direction</strong> — Horizontal, Vertical, or Radial</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Phase</strong> — shifts the wave position. Animating phase creates a water ripple animation.</li>
            </ul>

            <p><strong className="text-white">8.3 Twirl</strong></p>
            <p>Rotates the image around a center point, with stronger rotation near the center and weaker rotation at the edges.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center X / Y</strong> — pivot of the twirl</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Angle</strong> — total rotation at the center point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius</strong> — distance from the center over which the effect extends</li>
            </ul>

            <p><strong className="text-white">8.4 Bulge / Pinch</strong></p>
            <p><strong className="text-white">Bulge:</strong> Pushes pixels outward from a center point, creating a convex fish-eye lens effect.</p>
            <p><strong className="text-white">Pinch:</strong> Pulls pixels inward toward a center point, creating a concave pinch effect.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center X / Y</strong></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Strength</strong> — magnitude of the displacement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius</strong> — area of influence</li>
            </ul>

            <p><strong className="text-white">8.5 Perspective Warp</strong></p>
            <p>Distorts the image as if viewed from a different camera angle. Four corner handles reposition independently (Top-Left, Top-Right, Bottom-Left, Bottom-Right). Used for simulating perspective, correcting keystoning, or placing images onto angled surfaces. All four corners are individually animatable for fly-on perspective animation.</p>

            <p><strong className="text-white">8.6 Displacement Map</strong></p>
            <p>Uses the luminosity of a second image to drive the distortion of the target image. Pixels in the target image are displaced in proportion to the brightness of the corresponding pixel in the displacement map.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Map Source</strong> — the image used as the displacement reference (can be any image in the project asset library)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Scale X / Y</strong> — the strength of displacement along each axis</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Map Channel</strong> — which channel of the map image drives the displacement: Luminance, Red, Green, or Blue</li>
            </ul>
          </Section>

          <Section id="light-atmosphere-filters" title="9. Light & Atmosphere Filters">
            <p><strong className="text-white">9.1 Vignette</strong></p>
            <p>Darkens the edges of the image, drawing attention to the center. A classic photographic effect.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Strength</strong> — darkness of the vignette at maximum (0% = none)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Radius</strong> — how far the vignette extends toward the center</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Shape</strong> — Circular, Oval, or Rectangular</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Feather</strong> — softness of the vignette edge</li>
            </ul>

            <p><strong className="text-white">9.2 Lens Flare</strong></p>
            <p>Adds a synthetic lens flare artifact, simulating bright light hitting a camera lens.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Source X / Y</strong> — position of the virtual light source</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Brightness</strong> — intensity of the flare</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Lens Type</strong> — simulates different lens characteristics (anamorphic, spherical, vintage)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Halo Color</strong> — the color tint of the main flare element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Streak Length</strong> — length of light streak artifacts</li>
            </ul>
            <p>All parameters are animatable. Animating the source position creates a moving flare effect.</p>

            <p><strong className="text-white">9.3 God Rays (Volumetric Light)</strong></p>
            <p>Simulates atmospheric light scattering, creating visible ray-like beams.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Source X / Y</strong> — origin of the light</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Exposure</strong> — overall brightness of the rays</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Decay</strong> — how quickly the rays fade as they extend from the source</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Weight</strong> — density/intensity of the rays</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Samples</strong> — quality of the ray calculation (higher = smoother, more expensive)</li>
            </ul>

            <p><strong className="text-white">9.4 Bloom</strong></p>
            <p>Creates a soft halo glow around the brightest regions of the image, simulating lens overexposure.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Threshold</strong> — the minimum brightness level above which bloom is applied</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Spread</strong> — how far the bloom halo extends</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Intensity</strong> — brightness multiplier for the bloom</li>
            </ul>

            <p><strong className="text-white">9.5 Fog / Haze</strong></p>
            <p>Adds an atmospheric depth haze overlay.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Density</strong> — thickness of the haze</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color</strong> — haze color (white for natural fog, warm for desert heat, cool for winter)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Near / Far</strong> — controls where the haze starts and how strong it becomes at distance (uses approximate linear depth from element Z-position when 3D features are active)</li>
            </ul>
          </Section>

          <Section id="filter-stacking-ordering" title="10. Filter Stacking & Ordering">
            <p>Multiple filters from any category can be stacked on a single image. The filter stack appears in the Properties Panel beneath the image settings.</p>

            <p><strong className="text-white">10.1 Filter Order</strong></p>
            <p>Filters are applied from top to bottom. Order matters:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Blur → Sharpen:</strong> The sharpen will recover detail from the blur (partial effect)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Sharpen → Blur:</strong> The blur will obscure the sharpening effect (sharpen has no perceptible effect)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color Grade → Halftone:</strong> Color grading applies first, then halftone renders with those colors</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Halftone → Color Grade:</strong> Color grading adjusts the already-halftoned result</li>
            </ul>
            <p>Reorder filters by dragging the grab handle on any filter row.</p>

            <p><strong className="text-white">10.2 Filter Visibility Toggle</strong></p>
            <p>Each filter has a toggle eye icon to temporarily disable it without deleting it. Useful for comparing the effect of individual filters.</p>

            <p><strong className="text-white">10.3 Filter Opacity</strong></p>
            <p>Each filter has its own opacity control (0%–100%). At less than 100%, the filter effect blends with the unfiltered result beneath it. This is the equivalent of reducing a layer's opacity in a compositing application — it provides a "softened" version of any filter effect.</p>

            <p><strong className="text-white">10.4 Animating Filter Intensity</strong></p>
            <p>Nearly all filter parameters are animatable. To animate a filter: switch to Animate mode, navigate to a keyframe position, then adjust the filter parameter. A keyframe is created on the filter property track in the timeline. The parameter interpolates between keyframe values over time.</p>
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
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
