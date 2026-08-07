import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-grid', label: 'The Grid' },
  { id: 'grid-behavior', label: 'Grid Behavior' },
  { id: 'rulers', label: 'Rulers' },
  { id: 'guides', label: 'Guides' },
  { id: 'guide-operations', label: 'Guide Operations' },
  { id: 'smart-guides', label: 'Smart Guides' },
  { id: 'guide-color-and-visibility', label: 'Guide Color and Visibility' },
  { id: 'keyboard-shortcuts', label: 'Keyboard Shortcuts' },
  { id: 'best-practices', label: 'Best Practices' },
];

export default function GridRulersGuides() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Grid, Rulers & Guides | FlashFX Documentation"
        description="Learn how to use the grid system, rulers, and guides for precise alignment in FlashFX."
        keywords="FlashFX, grid, rulers, guides, alignment"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Grid, Rulers & Guides</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The grid, rulers, and guides provide a framework for precise positioning and alignment. These tools are visible only in the editor and never appear in exported output.
          </p>

          <Section id="the-grid" title="The Grid">
            <p>
              The grid is a system of evenly-spaced horizontal and vertical lines overlaid on the canvas. It serves as a visual reference for alignment and spacing.
            </p>
            <p className="mt-4">Grid controls:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Toggle visibility</strong> — View → Show Grid (Ctrl/Cmd + ')</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid size</strong> — Adjust spacing in Edit → Preferences → Canvas</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid color</strong> — Customize in preferences (default: semi-transparent white)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Subdivisions</strong> — Minor grid lines at fractional intervals</li>
            </ul>
          </Section>

          <Section id="grid-behavior" title="Grid Behavior">
            <p>The grid adapts to zoom level for optimal visibility:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>At low zoom (zoomed out), major grid lines are shown</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>At high zoom (zoomed in), subdivisions appear for finer control</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Grid opacity fades when elements are selected to reduce visual clutter</li>
            </ul>
          </Section>

          <Section id="rulers" title="Rulers">
            <p>
              Rulers appear along the top and left edges of the canvas, providing a pixel measurement reference. The zero point is at the top-left corner of the canvas by default.
            </p>
            <p className="mt-4">Ruler controls:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Toggle visibility</strong> — View → Show Rulers (Ctrl/Cmd + R)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Unit</strong> — Pixels (default), Percentage, or Inches</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reset origin</strong> — Right-click ruler intersection, choose "Reset Origin"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Set custom origin</strong> — Drag from ruler intersection to reposition zero point</li>
            </ul>
          </Section>

          <Section id="guides" title="Guides">
            <p>
              Guides are user-created alignment lines that snap to elements. Unlike the grid, guides can be positioned anywhere and are specific to each project.
            </p>
            <p className="mt-4">Creating guides:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">From rulers</strong> — Click and drag from the horizontal or vertical ruler onto the canvas</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Manual placement</strong> — View → New Guide, enter pixel position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">From selection</strong> — Select an element, then View → Add Guides at Edges</li>
            </ul>
          </Section>

          <Section id="guide-operations" title="Guide Operations">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Move guide</strong> — Click and drag the guide line</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Delete guide</strong> — Drag guide off the canvas, or right-click → Delete</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Clear all guides</strong> — View → Clear Guides</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Lock guides</strong> — View → Lock Guides (prevents accidental movement)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Show/hide guides</strong> — View → Show Guides (Ctrl/Cmd + ;)</li>
            </ul>
          </Section>

          <Section id="smart-guides" title="Smart Guides">
            <p>
              Smart guides are temporary alignment lines that appear automatically when dragging elements. They highlight alignment with other elements, canvas edges, and the canvas center.
            </p>
            <p className="mt-4">Smart guide behavior:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Appear in magenta when element edges align</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Show spacing measurements between nearby elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Highlight center alignment with the canvas</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Disappear when drag ends</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Can be disabled in View → Smart Guides</li>
            </ul>
          </Section>

          <Section id="guide-color-and-visibility" title="Guide Color and Visibility">
            <p>Customize guide appearance in Edit → Preferences → Canvas:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Guide color</strong> — Default: cyan</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Smart guide color</strong> — Default: magenta</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Guide opacity</strong> — 10-100%</li>
            </ul>
          </Section>

          <Section id="keyboard-shortcuts" title="Keyboard Shortcuts">
            <Table
              headers={['Action', 'Shortcut']}
              rows={[
                ['Toggle Grid', "Ctrl/Cmd + '"],
                ['Toggle Rulers', 'Ctrl/Cmd + R'],
                ['Toggle Guides', 'Ctrl/Cmd + ;'],
                ['Lock/Unlock Guides', 'Ctrl/Cmd + Alt + ;'],
                ['Clear All Guides', 'No default shortcut'],
              ]}
            />
          </Section>

          <Section id="best-practices" title="Best Practices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use the grid for general layout and spacing consistency</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Create guides for precise alignment of specific elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Enable smart guides when manually positioning multiple elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Lock guides after placement to prevent accidental movement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Clear guides before exporting to reduce visual clutter during final review</li>
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
