import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'upload-pipeline', label: 'Upload and Loading Pipeline' },
  { id: 'color-space', label: 'Color Space Rules' },
  { id: 'transform-controls', label: 'Transform Controls' },
  { id: 'ao-and-uv2', label: 'AO Maps and UV2' },
  { id: 'disposal', label: 'Disposal' },
];

export default function TextureSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Texture System | FlashFX Documentation"
        description="How FlashFX loads, color-manages, transforms and disposes 3D textures — including why color space matters for each map type."
        keywords="FlashFX, 3D, textures, color space, sRGB, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Texture System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Textures are uploaded per material slot, loaded through Three.js TextureLoader, cached by URL and color-managed according to the map type. Getting the color space wrong is the most common source of incorrect-looking materials.
          </p>

          <Section id="upload-pipeline" title="Upload and Loading Pipeline">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>The user clicks Upload on a texture slot in the properties panel.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>A file input accepts .png, .jpg, .jpeg and .webp.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>createTextureFromFile() creates an object URL, loads the texture through THREE.TextureLoader, sets the color space for the map type, caches the result, and revokes the object URL immediately after loading.</span></li>
            </ul>
          </Section>

          <Section id="color-space" title="Color Space Rules">
            <Table
              headers={['Map Type', 'Color Space', 'Why']}
              rows={[
                ['Color (Albedo)', 'sRGB', 'Color data is authored in sRGB. Three.js needs to know this to linearize it correctly before lighting calculations.'],
                ['Emissive Map', 'sRGB', 'Emissive colors are authored in sRGB for the same reason.'],
                ['All other maps', 'Linear', 'Roughness, metalness, normal, bump, AO and alpha maps store non-color data — physical parameters or vectors. Loaded as sRGB, the gamma curve would distort the values.'],
              ]}
            />
            <Callout>A roughness of 0.5 loaded as sRGB reads as roughly 0.73. A color map loaded as Linear appears washed out and desaturated; a normal map loaded as sRGB produces exaggerated, incorrect surface detail.</Callout>
          </Section>

          <Section id="transform-controls" title="Transform Controls">
            <Table
              headers={['Control', 'Three.js Property', 'Visual Effect']}
              rows={[
                ['Repeat X/Y', 'texture.repeat', 'Tiles the texture. Values above 1 repeat it, below 1 stretch it'],
                ['Offset X/Y', 'texture.offset', 'Slides the texture across the surface'],
                ['Rotation', 'texture.rotation', 'Rotates the texture around the UV origin'],
                ['Wrap Mode', 'texture.wrapS / wrapT', 'Clamp stretches edge pixels; Repeat tiles seamlessly; Mirror tiles with alternating flip'],
                ['Anisotropy', 'texture.anisotropy', 'Improves clarity at oblique angles. 1 is none, 16 is maximum, and higher costs more GPU'],
              ]}
            />
            <CodeBlock>{`const wrapMap = {
  clamp: THREE.ClampToEdgeWrapping,
  repeat: THREE.RepeatWrapping,
  mirror: THREE.MirroredRepeatWrapping,
};`}</CodeBlock>
          </Section>

          <Section id="ao-and-uv2" title="AO Maps and UV2">
            <p>Three.js MeshStandardMaterial reads AO maps from a second UV channel (uv2). The current code applies AO maps without explicitly creating a uv2 attribute. For primitives created by Three.js the default UV coordinates serve both channels, so this works — but imported models with a separate UV2 layout may show incorrect ambient occlusion.</p>
          </Section>

          <Section id="disposal" title="Disposal">
            <p>Removing a texture from a slot calls disposeTextureByUrl(), which disposes the GPU texture and deletes the cache entry. Textures are not released by SceneManager.removeObject() — that method handles geometries and materials only, so texture cleanup is a separate responsibility.</p>
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

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-white/80">
      <code>{children}</code>
    </pre>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
