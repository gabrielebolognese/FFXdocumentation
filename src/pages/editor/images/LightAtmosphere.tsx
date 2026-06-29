import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'vignette', label: 'Vignette' },
  { id: 'lens-flare', label: 'Lens Flare' },
  { id: 'god-rays-volumetric-light', label: 'God Rays (Volumetric Light)' },
  { id: 'bloom', label: 'Bloom' },
  { id: 'fog-haze', label: 'Fog / Haze' },
];

export default function LightAtmosphere() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Light and Atmosphere Filters | FlashFX Documentation"
        description="Reference for vignette, lens flare, god rays, bloom, and fog filters in FlashFX."
        keywords="FlashFX, vignette, lens flare, god rays, bloom, fog, volumetric light"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Light and Atmosphere Filters</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="vignette" title="Vignette">
            <p>Darkens the edges of the image, drawing attention to the center. A classic photographic effect.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Strength</strong>,darkness of the vignette at maximum (0% = none)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radius</strong>,how far the vignette extends toward the center</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shape</strong>,Circular, Oval, or Rectangular</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Feather</strong>,softness of the vignette edge</li>
            </ul>
          </Section>

          <Section id="lens-flare" title="Lens Flare">
            <p>Adds a synthetic lens flare artifact, simulating bright light hitting a camera lens.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Source X / Y</strong>,position of the virtual light source</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Brightness</strong>,intensity of the flare</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Lens Type</strong>,simulates different lens characteristics (anamorphic, spherical, vintage)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Halo Color</strong>,the color tint of the main flare element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Streak Length</strong>,length of light streak artifacts</li>
            </ul>
            <p>All parameters are animatable. Animating the source position creates a moving flare effect.</p>
          </Section>

          <Section id="god-rays-volumetric-light" title="God Rays (Volumetric Light)">
            <p>Simulates atmospheric light scattering, creating visible ray-like beams.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Source X / Y</strong>,origin of the light</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Exposure</strong>,overall brightness of the rays</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Decay</strong>,how quickly the rays fade as they extend from the source</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Weight</strong>,density/intensity of the rays</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Samples</strong>,quality of the ray calculation (higher = smoother, more expensive)</li>
            </ul>
          </Section>

          <Section id="bloom" title="Bloom">
            <p>Creates a soft halo glow around the brightest regions of the image, simulating lens overexposure.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Threshold</strong>,the minimum brightness level above which bloom is applied</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Spread</strong>,how far the bloom halo extends</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Intensity</strong>,brightness multiplier for the bloom</li>
            </ul>
          </Section>

          <Section id="fog-haze" title="Fog / Haze">
            <p>Adds an atmospheric depth haze overlay.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Density</strong>,thickness of the haze</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color</strong>,haze color (white for natural fog, warm for desert heat, cool for winter)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Near / Far</strong>,controls where the haze starts and how strong it becomes at distance (uses approximate linear depth from element Z-position when 3D features are active)</li>
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
