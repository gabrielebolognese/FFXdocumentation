import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'gaussian-blur', label: 'Gaussian Blur' },
  { id: 'directional-motion-blur', label: 'Directional (Motion) Blur' },
  { id: 'radial-blur', label: 'Radial Blur' },
  { id: 'zoom-blur', label: 'Zoom Blur' },
  { id: 'lens-blur-tilt-shift', label: 'Lens Blur (Tilt-Shift)' },
];

export default function BlurFilters() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Blur Filters | FlashFX Documentation"
        description="Reference for all blur filter types available on images in FlashFX."
        keywords="FlashFX, blur filter, gaussian blur, motion blur, radial blur, zoom blur, tilt-shift"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Blur Filters</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="gaussian-blur" title="Gaussian Blur">
            <p>Applies a uniform soft defocus to the entire image.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radius</strong> — the blur strength in pixels. Higher = more blur. Practical range: 0 to 200px.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Quality</strong> — Low, Medium, or High. Higher quality reduces banding artifacts in the blur but increases computation time.</li>
            </ul>
          </Section>

          <Section id="directional-motion-blur" title="Directional (Motion) Blur">
            <p>Applies blur in a single linear direction, simulating motion along that axis.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Angle</strong> — the direction of blur (0 degrees = horizontal)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Distance</strong> — how far the blur extends along the angle direction (in pixels)</li>
            </ul>
          </Section>

          <Section id="radial-blur" title="Radial Blur">
            <p>Applies blur rotating around a center point. Simulates a spinning or rotating subject.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center X / Y</strong> — the pivot point of the rotation blur</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Strength</strong> — how much the blur rotates (expressed in degrees)</li>
            </ul>
          </Section>

          <Section id="zoom-blur" title="Zoom Blur">
            <p>Applies blur radiating outward from a center point, simulating a fast zoom movement.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Center X / Y</strong> — the origin point of the zoom</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Strength</strong> — how far the blur extends radially (as a percentage of image size)</li>
            </ul>
          </Section>

          <Section id="lens-blur-tilt-shift" title="Lens Blur (Tilt-Shift)">
            <p>Simulates shallow depth of field — sharp in one region, blurred toward the edges. Two modes:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Linear</strong> — a horizontal band is sharp; blur increases above and below (classic tilt-shift miniature effect)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Radial</strong> — a circular region is sharp; blur increases toward the edges (simulating a large-aperture lens)</li>
            </ul>
            <p><strong className="text-white">Parameters:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Focus Position</strong> — where the sharp zone is centered</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Focus Width</strong> — how wide the sharp zone is</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Max Blur</strong> — the maximum blur applied at the fully blurred regions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Falloff</strong> — how gradually the blur transitions between sharp and blurred (linear, quadratic, or smooth)</li>
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
