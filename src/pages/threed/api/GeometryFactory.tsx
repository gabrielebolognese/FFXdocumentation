import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'box', label: 'Box' },
  { id: 'sphere', label: 'Sphere' },
  { id: 'cylinder', label: 'Cylinder' },
  { id: 'cone', label: 'Cone' },
  { id: 'torus', label: 'Torus' },
  { id: 'capsule', label: 'Capsule' },
  { id: 'extrude', label: 'Extrusion from SVG Shapes' },
];

export default function GeometryFactory() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="GeometryFactory | FlashFX Documentation"
        description="Full parameter reference for every FlashFX 3D primitive — box, sphere, cylinder, cone, torus and capsule — plus SVG extrusion."
        keywords="FlashFX, 3D, geometry, primitives, extrude, reference"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">GeometryFactory</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            GeometryFactory is a set of pure functions that create BufferGeometry instances from a GeometryConfig. It supports six primitives plus extrusion from SVG paths. Every mesh it creates has castShadow and receiveShadow set to true.
          </p>

          <Section id="box" title="Box">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['width', '1', '> 0', 'Width along X'],
                ['height', '1', '> 0', 'Height along Y'],
                ['depth', '1', '> 0', 'Depth along Z'],
                ['widthSegments', '1', '1-10', 'Subdivisions along width'],
                ['heightSegments', '1', '1-10', 'Subdivisions along height'],
                ['depthSegments', '1', '1-10', 'Subdivisions along depth'],
              ]}
            />
          </Section>

          <Section id="sphere" title="Sphere">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['radius', '0.5', '> 0', 'Sphere radius'],
                ['widthSegments / segments', '32', '3-64', 'Horizontal segments. Higher is smoother'],
                ['heightSegments', 'half of widthSegments', '2-32', 'Vertical segments'],
              ]}
            />
            <p>Height segments default to Math.max(2, Math.round(widthSegments / 2)) when not specified.</p>
          </Section>

          <Section id="cylinder" title="Cylinder">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['radiusTop', '0.5', '>= 0', 'Top circle radius. Set to 0 for a cone shape'],
                ['radiusBottom', '0.5', '>= 0', 'Bottom circle radius'],
                ['height', '1', '> 0', 'Height along Y'],
                ['radialSegments / segments', '16', '3-64', 'Faces around the circumference'],
              ]}
            />
          </Section>

          <Section id="cone" title="Cone">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['radius', '0.5', '> 0', 'Base circle radius'],
                ['height', '1', '> 0', 'Height from base to apex'],
                ['radialSegments / segments', '16', '3-64', 'Faces around the circumference'],
              ]}
            />
          </Section>

          <Section id="torus" title="Torus">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['radius', '0.5', '> 0', 'Distance from torus center to tube center'],
                ['tubeRadius', '0.2', '> 0', 'Radius of the tube cross-section'],
                ['radialSegments', '16', '3-32', 'Segments around the tube cross-section'],
                ['tubularSegments / segments', '100', '3-200', 'Segments around the ring'],
              ]}
            />
          </Section>

          <Section id="capsule" title="Capsule">
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['radius', '0.5', '> 0', 'Radius of the capsule'],
                ['height', '1', '> 0', 'Length of the middle cylindrical section'],
                ['radialSegments / segments', '16', '3-64', 'Segments around the circumference'],
              ]}
            />
            <p>Cap segments are hardcoded to 8.</p>
          </Section>

          <Section id="extrude" title="Extrusion from SVG Shapes">
            <p>extrudeFromShapes() takes an array of THREE.Shape objects parsed from SVG paths and creates an ExtrudeGeometry, centered after creation.</p>
            <Table
              headers={['Parameter', 'Default', 'Range', 'Description']}
              rows={[
                ['extrudeDepth', '0.5', '0.01-5', 'How far the shape is extruded along Z'],
                ['bevelEnabled', 'true', '—', 'Whether to add beveled edges'],
                ['bevelThickness', '0.05', '0-0.5', 'How deep the bevel cuts into the shape'],
                ['bevelSize', '0.03', '0-0.5', 'How far the bevel extends outward'],
                ['bevelSegments', '3', '1-8', 'Smoothness of the bevel curve'],
              ]}
            />
            <p>At bevelSegments: 1 the bevel is a simple chamfer; at higher values it becomes a smooth curve.</p>
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


