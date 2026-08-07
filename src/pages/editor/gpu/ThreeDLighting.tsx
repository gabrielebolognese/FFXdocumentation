import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'ambient-light', label: 'Ambient Light' },
  { id: 'directional-light', label: 'Directional Light' },
  { id: 'specular-highlight', label: 'Specular Highlight' },
  { id: 'lighting-limitations', label: 'Lighting Limitations' },
];

export default function ThreeDLighting() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Lighting Model | FlashFX Documentation"
        description="Reference for ambient light, directional light, specular highlights, and lighting limitations in FlashFX."
        keywords="FlashFX, 3D lighting, ambient light, directional light, specular highlight, shading"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Lighting Model</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="ambient-light" title="Ambient Light">
            <p>FlashFX provides a simple ambient light system that shades 3D-enabled elements based on their surface normal direction relative to a virtual light source.</p>
            <p><strong className="text-white">This is a flat-face shading model:</strong> Each element is treated as a single flat plane. The shading is uniform across the element based on the angle of the plane relative to the light — there is no sub-surface variation, no self-shadowing, and no cast shadows.</p>
            <p><strong className="text-white">Ambient Light Settings:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Intensity</strong> — overall brightness of the ambient fill (prevents elements facing away from the light from going completely black)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color</strong> — tint of the ambient light</li>
            </ul>
          </Section>

          <Section id="directional-light" title="Directional Light">
            <p>A single directional light source is available per composition.</p>
            <p><strong className="text-white">Properties:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Light Direction X / Y / Z</strong> — the direction vector the light is pointing from</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Intensity</strong> — brightness of the directional light</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color</strong> — tint of the directional light</li>
            </ul>
            <p><strong className="text-white">Shading calculation:</strong> The shading amount is the dot product of the element's surface normal and the light direction. Elements facing the light directly are at full brightness; elements at a glancing angle are shaded; elements facing away from the light show only ambient.</p>
          </Section>

          <Section id="specular-highlight" title="Specular Highlight">
            <p>A specular highlight term adds a glossy bright spot on 3D-rotated elements that face both the light and the virtual camera.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Specular Power</strong> — controls the tightness of the highlight (higher = smaller, sharper highlight)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Specular Intensity</strong> — brightness of the highlight</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Specular Color</strong> — color of the highlight (usually white or slightly warm)</li>
            </ul>
          </Section>

          <Section id="lighting-limitations" title="Lighting Limitations">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No cast shadows between elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No ambient occlusion</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No area lights — only a single directional light and ambient</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No subsurface scattering</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No image-based lighting</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Lighting applies only to elements with 3D enabled,2D elements are unaffected by the scene light</li>
            </ul>
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
