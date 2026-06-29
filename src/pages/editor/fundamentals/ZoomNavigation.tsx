import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'zoom-methods', label: 'Zoom Methods' },
  { id: 'zoom-shortcuts', label: 'Zoom Shortcuts' },
  { id: 'pan-methods', label: 'Pan Methods' },
  { id: 'zoom-levels', label: 'Zoom Levels' },
  { id: 'zoom-behavior', label: 'Zoom Behavior' },
  { id: 'navigator-panel', label: 'Navigator Panel' },
  { id: 'performance-optimization', label: 'Performance Optimization' },
  { id: 'multi-monitor-workflows', label: 'Multi-Monitor Workflows' },
  { id: 'best-practices', label: 'Best Practices' },
];

export default function ZoomNavigation() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Zoom & Navigation | FlashFX Documentation"
        description="Master canvas navigation, zooming, and panning in FlashFX."
        keywords="FlashFX, zoom, pan, navigation, viewport"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Zoom & Navigation</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Efficient viewport navigation is essential for working with both detailed work and overall composition. FlashFX provides multiple methods for zooming and panning across the canvas.
          </p>

          <Section id="zoom-methods" title="Zoom Methods">
            <Table
              headers={['Method', 'Action', 'Notes']}
              rows={[
                ['Scroll wheel', 'Scroll up/down over canvas', 'Zooms to cursor position'],
                ['Zoom tool (Z)', 'Click to zoom in, Alt+Click to zoom out', 'Centers on click point'],
                ['Keyboard', 'Ctrl/Cmd + Plus/Minus', 'Zooms to canvas center'],
                ['Trackpad pinch', 'Two-finger pinch gesture', 'Zooms to gesture center'],
                ['Zoom dropdown', 'Select percentage from menu bar', 'Predefined zoom levels'],
              ]}
            />
          </Section>

          <Section id="zoom-shortcuts" title="Zoom Shortcuts">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + 0', 'Zoom to fit (entire canvas visible)'],
                ['Ctrl/Cmd + 1', 'Zoom to 100% (actual pixels)'],
                ['Ctrl/Cmd + 2', 'Zoom to 200%'],
                ['Ctrl/Cmd + +', 'Zoom in one step'],
                ['Ctrl/Cmd + -', 'Zoom out one step'],
                ['Z then click', 'Zoom in at point'],
                ['Z then Alt+click', 'Zoom out at point'],
              ]}
            />
          </Section>

          <Section id="pan-methods" title="Pan Methods">
            <Table
              headers={['Method', 'Action', 'Notes']}
              rows={[
                ['Hand tool (H)', 'Click and drag canvas', 'Temporary: Hold Space while dragging'],
                ['Scroll wheel + Shift', 'Shift + Scroll to pan horizontally', 'No modifier pans vertically'],
                ['Trackpad', 'Two-finger drag', 'Natural scrolling direction'],
                ['Middle mouse', 'Click and drag with middle button', 'Must be enabled in preferences'],
                ['Arrow keys', 'Press arrow keys', 'Small incremental pans'],
              ]}
            />
          </Section>

          <Section id="zoom-levels" title="Zoom Levels">
            <p>Available zoom range: 1% to 6400%</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">1-10%</strong>,Extreme wide view, useful for large compositions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">25-50%</strong>,Comfortable overview for general work</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">100%</strong>,Actual pixels, true output preview</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">200-400%</strong>,Detail work, path editing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">800%+</strong>,Pixel-level precision</li>
            </ul>
          </Section>

          <Section id="zoom-behavior" title="Zoom Behavior">
            <p><strong className="text-white">Zoom to cursor</strong></p>
            <p className="mt-2">
              When zooming with the scroll wheel or trackpad pinch, the zoom centers on the cursor position. This allows you to quickly zoom into a specific detail without manually panning.
            </p>
            <p className="mt-4"><strong className="text-white">Zoom to selection</strong></p>
            <p className="mt-2">
              Select one or more elements, then press Ctrl/Cmd + 3 to zoom and center the view on the selection's bounding box.
            </p>
            <p className="mt-4"><strong className="text-white">Animated zoom</strong></p>
            <p className="mt-2">
              Keyboard zoom commands (Ctrl/Cmd + 0, Ctrl/Cmd + 1) animate smoothly to the target zoom level. This can be disabled in Edit → Preferences → Interface → "Animate zoom transitions."
            </p>
          </Section>

          <Section id="navigator-panel" title="Navigator Panel">
            <p>
              The Navigator panel shows a thumbnail of the entire canvas with a viewport rectangle indicating the current view. Access via Window → Navigator.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Red rectangle</strong>,Shows the visible area at current zoom</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Drag rectangle</strong>,Instantly pan to a different area</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Click thumbnail</strong>,Center view on that location</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Thumbnail zoom</strong>,Adjust navigator thumbnail size with slider</li>
            </ul>
          </Section>

          <Section id="performance-optimization" title="Performance Optimization">
            <p>
              At high zoom levels (400%+), FlashFX renders a high-resolution preview. On slower devices, this can cause lag. To improve performance:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Enable "Reduce quality while zooming" in preferences</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Temporarily hide complex layers (eye icon in layer panel)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Disable GPU effects preview in View → Preview Quality → Low</li>
            </ul>
          </Section>

          <Section id="multi-monitor-workflows" title="Multi-Monitor Workflows">
            <p>
              When using multiple monitors, you can detach the canvas to a separate window for full-screen preview:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>View → Detach Canvas</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Drag the canvas window to your secondary monitor</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>The main window retains all panels and controls</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Zoom and pan sync across both windows</li>
            </ul>
          </Section>

          <Section id="best-practices" title="Best Practices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Learn the Hand tool (H) temporary shortcut: Hold Space and drag</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use Ctrl/Cmd + 0 frequently to see the full composition</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Zoom to 100% before exporting to verify actual output quality</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use Zoom to Selection (Ctrl/Cmd + 3) when editing details on large canvases</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Keep the Navigator panel open for large projects to maintain spatial awareness</li>
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
