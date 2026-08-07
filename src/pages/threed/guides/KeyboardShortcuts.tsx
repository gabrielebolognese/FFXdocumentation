import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'shortcuts', label: 'Shortcuts' },
  { id: 'implementation-note', label: 'Implementation Note' },
];

export default function KeyboardShortcuts() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Keyboard Shortcuts | FlashFX Documentation"
        description="Keyboard shortcuts available in FlashFX 3D editing mode and the shape picker."
        keywords="FlashFX, 3D, keyboard shortcuts, gizmo"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Keyboard Shortcuts</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The 3D system has a small shortcut set covering gizmo mode switching and dismissing the shape picker.
          </p>

          <Section id="shortcuts" title="Shortcuts">
            <Table
              headers={['Key', 'Mode', 'Action']}
              rows={[
                ['W', '3D Edit', 'Switch gizmo to Translate mode'],
                ['E', '3D Edit', 'Switch gizmo to Rotate mode'],
                ['R', '3D Edit', 'Switch gizmo to Scale mode'],
                ['Escape', 'Shape Picker', 'Close the 3D shape picker modal'],
              ]}
            />
          </Section>

          <Section id="implementation-note" title="Implementation Note">
            <Callout>The W/E/R shortcuts are not implemented in the core 3D files. They are handled by the UI layer wrapping ThreeDPropertiesPanel, which calls engine.setGizmoMode(). The gizmo buttons in the properties panel provide the same functionality by click.</Callout>
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


function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
