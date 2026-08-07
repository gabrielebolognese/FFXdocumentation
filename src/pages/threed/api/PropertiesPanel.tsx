import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'canvas-position', label: 'Canvas Position' },
  { id: 'gizmo-and-transform', label: 'Gizmo and Transform' },
  { id: 'base-properties', label: 'Base Material Properties' },
  { id: 'pbr-properties', label: 'PBR Properties (Standard and Physical)' },
  { id: 'physical-properties', label: 'Physical Properties' },
  { id: 'texture-maps', label: 'Texture Maps' },
  { id: 'texture-transform', label: 'Texture Transform Controls' },
];

export default function PropertiesPanel() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Properties Panel | FlashFX Documentation"
        description="Every control in the FlashFX 3D properties panel and the Three.js property each one maps to."
        keywords="FlashFX, 3D, properties panel, UI, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Properties Panel</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The properties panel appears when a threed-shape element is selected. This page maps every control to the underlying property it drives.
          </p>

          <Section id="canvas-position" title="Canvas Position">
            <Table
              headers={['Control', 'Type', 'Maps To']}
              rows={[
                ['X / Y', 'Numeric input', 'element.x, element.y'],
                ['W / H', 'Numeric input', 'element.width, element.height'],
                ['R', 'Numeric input (step 1)', 'element.rotation'],
                ['Op', 'Range slider (0-1, step 0.01)', 'element.opacity'],
              ]}
            />
          </Section>

          <Section id="gizmo-and-transform" title="Gizmo and Transform">
            <p>Three gizmo buttons — Translate, Rotate and Scale — with the active one highlighted in cyan. Below them, the 3D object transform appears only when an object inside the scene is selected.</p>
            <Table
              headers={['Sub-section', 'Controls', 'Maps To']}
              rows={[
                ['Position', 'X, Y, Z numeric inputs (step 0.1)', 'Object3DConfig.position'],
                ['Rotation', 'X, Y, Z numeric inputs (step 0.1)', 'Object3DConfig.rotation'],
                ['Scale', 'X, Y, Z numeric inputs (step 0.1)', 'Object3DConfig.scale'],
              ]}
            />
            <p>The Geometry section is shown only for non-imported primitives and extruded shapes, with controls that vary by geometry type.</p>
          </Section>

          <Section id="base-properties" title="Base Material Properties">
            <Table
              headers={['Label', 'Control', 'Range', 'Default']}
              rows={[
                ['Color', 'Color picker', '—', '#3B82F6'],
                ['Opacity', 'Slider', '0-1 (step 0.01)', '1'],
                ['Transparent', 'Toggle', '—', 'false'],
                ['Side', 'Segmented (Front/Back/Double)', '—', 'Double'],
                ['Wireframe', 'Toggle', '—', 'false'],
                ['Flat Shade', 'Toggle (hidden for Lambert/Toon/Wireframe)', '—', 'false'],
                ['Depth Write', 'Toggle', '—', 'true'],
              ]}
            />
            <p>Setting Opacity below 1 sets transparent automatically.</p>
          </Section>

          <Section id="pbr-properties" title="PBR Properties (Standard and Physical)">
            <Table
              headers={['Label', 'Range', 'Three.js Property']}
              rows={[
                ['Roughness', '0-1 (step 0.01)', 'material.roughness'],
                ['Metalness', '0-1 (step 0.01)', 'material.metalness'],
                ['Emissive', '—', 'material.emissive'],
                ['Emiss Int', '0-3 (step 0.01)', 'material.emissiveIntensity'],
                ['Env Map', '0-3 (step 0.01)', 'material.envMapIntensity'],
              ]}
            />
          </Section>

          <Section id="physical-properties" title="Physical Properties">
            <Table
              headers={['Label', 'Range', 'Three.js Property']}
              rows={[
                ['Transmission', '0-1 (step 0.01)', 'material.transmission'],
                ['Thickness', '0-10 (step 0.1)', 'material.thickness'],
                ['IOR', '1-2.5 (step 0.01)', 'material.ior'],
                ['Clearcoat', '0-1 (step 0.01)', 'material.clearcoat'],
                ['CC Rough', '0-1 (shown when clearcoat > 0)', 'material.clearcoatRoughness'],
                ['Sheen', '0-1 (step 0.01)', 'material.sheen'],
                ['Sheen Color / Rough', 'shown when sheen > 0', 'material.sheenColor, sheenRoughness'],
                ['Iridescence', '0-1 (step 0.01)', 'material.iridescence'],
                ['Irid IOR / Min / Max', 'shown when iridescence > 0', 'material.iridescenceIOR, iridescenceThicknessRange'],
                ['Specular Int / Col', '0-1', 'material.specularIntensity, specularColor'],
              ]}
            />
            <p>IOR preset buttons are provided for Water (1.33), Glass (1.5) and Diamond (2.4).</p>
          </Section>

          <Section id="texture-maps" title="Texture Maps">
            <Table
              headers={['Map', 'Color Space', 'Available For']}
              rows={[
                ['Color (Albedo)', 'sRGB', 'All types'],
                ['Roughness', 'Linear', 'Standard, Physical'],
                ['Metalness', 'Linear', 'Standard, Physical'],
                ['Normal', 'Linear', 'Standard, Physical, Phong'],
                ['Bump', 'Linear', 'Standard, Physical, Phong'],
                ['AO', 'Linear', 'Standard, Physical'],
                ['Emissive Map', 'sRGB', 'Standard, Physical'],
                ['Alpha', 'Linear', 'All types'],
              ]}
            />
            <p>Each slot shows an Upload button when empty, and the filename with expand and remove buttons when loaded. Loading an alpha map sets transparent automatically.</p>
          </Section>

          <Section id="texture-transform" title="Texture Transform Controls">
            <Table
              headers={['Label', 'Range', 'Three.js Property']}
              rows={[
                ['RepX / RepY', 'step 0.1', 'texture.repeat'],
                ['Offset X / Y', '-1 to 1 (step 0.01)', 'texture.offset'],
                ['Rotation', '0-360 degrees (step 1)', 'texture.rotation (converted to radians)'],
                ['Wrap', 'Clamp / Repeat / Mirrored', 'texture.wrapS, texture.wrapT'],
                ['Anisotropy', '1-16 (step 1)', 'texture.anisotropy'],
              ]}
            />
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


