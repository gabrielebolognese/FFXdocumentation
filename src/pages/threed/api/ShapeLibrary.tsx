import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'catalog', label: 'Shape Catalog' },
  { id: 'layout', label: 'Layout' },
  { id: 'preview', label: 'Live Preview' },
  { id: 'import-flow', label: 'Model Import Flow' },
];

export default function ShapeLibrary() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Shape Library | FlashFX Documentation"
        description="The FlashFX 3D shape picker — its catalog of six primitives, layout, live preview renderer and model import entry point."
        keywords="FlashFX, 3D, shape picker, primitives, library"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Shape Library</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The shape picker is the modal for choosing a primitive or importing a model. It renders through a portal into document.body with a full-screen backdrop.
          </p>

          <Section id="catalog" title="Shape Catalog">
            <Table
              headers={['Type', 'Label', 'Description']}
              rows={[
                ['box', 'Box', 'A solid rectangular cuboid with flat faces'],
                ['sphere', 'Sphere', 'A perfect round ball with smooth surface'],
                ['cylinder', 'Cylinder', 'A tube shape with circular top and bottom'],
                ['torus', 'Torus', 'A donut shape with a hole through the center'],
                ['cone', 'Cone', 'A pointed shape tapering from a circular base'],
                ['capsule', 'Capsule', 'A cylinder capped with hemispheres at both ends'],
              ]}
            />
            <p>Each entry has a custom inline SVG icon on a 44x44 viewBox, defined in the same file.</p>
          </Section>

          <Section id="layout" title="Layout">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Left column</strong> — a 3x2 grid of shape cards. Clicking one selects it, highlighted with a cyan border. Below the grid sits the "Import 3D Model from PC" button.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Right column</strong> — 192px wide, holding a live 3D preview, the shape name and description, and an "Add to Canvas" button.</span></li>
            </ul>
            <p>Pressing Escape closes the picker. The handler is registered on window with no capture option, so a parent calling stopPropagation() would prevent it from firing.</p>
          </Section>

          <Section id="preview" title="Live Preview">
            <p>ThreeDShapePreview creates a temporary ThreeDEngine in a small container, adds the selected primitive, disables orbit controls and runs a continuous camera orbit:</p>
            <CodeBlock>{`const animate = () => {
  angleRef.current += 0.012;
  const r = 4;
  engine.setCameraPosition(
    { x: Math.sin(angleRef.current) * r, y: 1.5, z: Math.cos(angleRef.current) * r },
    { x: 0, y: 0, z: 0 }
  );
  engine.markDirty();
  rafRef.current = requestAnimationFrame(animate);
};`}</CodeBlock>
            <p>The camera orbits at a radius of 4 units and a fixed height of 1.5, at 0.012 radians per frame. When the geometryType prop changes, the engine is disposed and recreated with the new primitive.</p>
            <Callout>The preview creates a full engine — and therefore a WebGL context — for a small viewport. The useEffect cleanup disposes it when the modal closes. In any scrollable list context, engines should be created only for visible items.</Callout>
          </Section>

          <Section id="import-flow" title="Model Import Flow">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>A hidden file input is triggered.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>The selected file is passed to onImportModel(file) and the picker closes.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>The parent component performs the import via engine.importModelFromFile(file).</span></li>
            </ul>
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
