import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'standard', label: 'Standard' },
  { id: 'physical', label: 'Physical (Glass)' },
  { id: 'lambert-phong', label: 'Lambert and Phong' },
  { id: 'toon-wireframe', label: 'Toon and Wireframe' },
  { id: 'common-properties', label: 'Common Properties' },
  { id: 'material-switching', label: 'Material Switching' },
  { id: 'texture-cache', label: 'Texture Cache' },
];

export default function MaterialSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="MaterialSystem | FlashFX Documentation"
        description="Reference for all six FlashFX 3D material types — standard, physical, lambert, phong, toon and wireframe — with every property and default."
        keywords="FlashFX, 3D, materials, PBR, physical, toon, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">MaterialSystem</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            MaterialSystem creates and updates Three.js materials from a MaterialConfig, and handles texture loading, caching and disposal. Six material types are available.
          </p>

          <Section id="standard" title="Standard">
            <p>The default PBR material (MeshStandardMaterial). Supports the roughness/metalness workflow, emission and all standard texture maps.</p>
            <Table
              headers={['Property', 'Range', 'Default']}
              rows={[
                ['color', 'hex', '\'#3B82F6\''],
                ['roughness', '0-1', '0.5'],
                ['metalness', '0-1', '0.1'],
                ['emissive', 'hex', '\'#000000\''],
                ['emissiveIntensity', '0-3', '0'],
                ['opacity', '0-1', '1'],
                ['flatShading', '—', 'false'],
                ['envMapIntensity', '0-3', '1'],
              ]}
            />
          </Section>

          <Section id="physical" title="Physical (Glass)">
            <p>MeshPhysicalMaterial extends Standard with transmission, clearcoat, sheen and iridescence.</p>
            <Table
              headers={['Property', 'Range', 'Default']}
              rows={[
                ['transmission', '0-1', '0'],
                ['ior', '1-2.5', '1.5'],
                ['thickness', '0-10', '0.5'],
                ['clearcoat', '0-1', '0'],
                ['clearcoatRoughness', '0-1', '0'],
                ['sheen', '0-1', '0'],
                ['sheenColor', 'hex', '\'#ffffff\''],
                ['sheenRoughness', '0-1', '0.5'],
                ['iridescence', '0-1', '0'],
                ['iridescenceIOR', '1-2.5', '1.5'],
                ['iridescenceThicknessMin / Max', '—', '100 / 400'],
                ['specularIntensity', '0-1', '1'],
                ['specularColor', 'hex', '\'#ffffff\''],
              ]}
            />
            <Callout>When transmission is greater than 0, transparent is set to true automatically.</Callout>
          </Section>

          <Section id="lambert-phong" title="Lambert and Phong">
            <p>Lambert (MeshLambertMaterial) is a non-physically-based material using Lambertian reflectance. It is cheaper to render and supports color, emissive, opacity and the color and alpha maps only.</p>
            <p>Phong (MeshPhongMaterial) uses the classic Blinn-Phong shading model with specular highlights, and also supports normal and bump maps.</p>
            <Table
              headers={['Phong Property', 'Range', 'Default']}
              rows={[
                ['phongSpecular', 'hex', '\'#ffffff\''],
                ['shininess', '0-1000', '30'],
              ]}
            />
          </Section>

          <Section id="toon-wireframe" title="Toon and Wireframe">
            <p>Toon (MeshToonMaterial) is a cel-shading material with discrete shading steps. toonSteps accepts 2, 3 or 5, defaulting to 3. A DataTexture gradient map is built by buildToonGradient() using NearestFilter, which is what produces hard transitions between bands rather than a smooth ramp.</p>
            <p>Wireframe uses MeshStandardMaterial with wireframe: true, and supports roughness and metalness for specular response on the wire lines.</p>
          </Section>

          <Section id="common-properties" title="Common Properties">
            <Table
              headers={['Property', 'Default', 'Description']}
              rows={[
                ['transparent', 'false', 'Enables alpha blending'],
                ['depthWrite', 'true', 'Whether to write to the depth buffer. Disable for transparent objects to prevent z-fighting'],
                ['side', '\'double\'', 'Which face sides to render — front, back or double'],
                ['wireframe', 'false', 'Overlay wireframe on any material type'],
              ]}
            />
          </Section>

          <Section id="material-switching" title="Material Switching">
            <p>When the user switches material type, only color, opacity and transparent are preserved. Everything else resets to DEFAULT_MATERIAL_CONFIG:</p>
            <CodeBlock>{`handleMaterial({
  ...DEFAULT_MATERIAL_CONFIG,
  type,
  color: prev.color,
  opacity: prev.opacity,
  transparent: prev.transparent
});`}</CodeBlock>
            <Callout>All PBR-specific, Phong-specific and Toon-specific properties are lost when switching away from those types. Switching to compare looks is therefore destructive.</Callout>
          </Section>

          <Section id="texture-cache" title="Texture Cache">
            <p>MaterialSystem keeps a module-level Map&lt;string, THREE.Texture&gt; keyed by URL, so the same texture is not loaded twice across objects. The cache must be cleared manually via disposeTextureByUrl() when a texture is removed.</p>
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
