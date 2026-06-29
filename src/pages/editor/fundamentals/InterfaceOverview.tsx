import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-menu-bar', label: 'The Menu Bar' },
  { id: 'the-toolbar', label: 'The Toolbar' },
  { id: 'the-properties-panel', label: 'The Properties Panel' },
  { id: 'the-canvas', label: 'The Canvas' },
  { id: 'the-layer-panel', label: 'The Layer Panel' },
  { id: 'the-timeline', label: 'The Timeline' },
];

export default function InterfaceOverview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Interface Overview | FlashFX Documentation"
        description="Understanding the FlashFX interface - menu bar, toolbar, properties panel, canvas, layers, and timeline."
        keywords="FlashFX, interface, UI, workspace, panels"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Interface Overview</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            When FlashFX opens, the interface is organized into five primary regions. Understanding the role of each region is the foundation for working efficiently.
          </p>

          <Section id="the-menu-bar" title="The Menu Bar">
            <p>The topmost strip of the application. Contains:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">FlashFX logo / Home</strong> returns to the project dashboard</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">File menu</strong> new project, open, save, export, import, and project settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Edit menu</strong> undo, redo, cut, copy, paste, duplicate, select all, preferences</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">View menu</strong> zoom controls, grid, rulers, guides, panel visibility</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Mode switcher</strong> toggles between Design, Animate, and Advanced workspace modes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Account indicator</strong> shows current account status (Guest or authenticated), storage usage, and sync state</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Help</strong> documentation, keyboard shortcut reference, release notes, support</li>
            </ul>
          </Section>

          <Section id="the-toolbar" title="The Toolbar">
            <p>The vertical strip on the left edge of the canvas. Contains all drawing and selection tools:</p>
            <Table
              headers={['Tool', 'Shortcut', 'Function']}
              rows={[
                ['Selection (Pointer)', 'V', 'Select, move, and transform elements'],
                ['Rectangle', 'R', 'Draw rectangles and squares'],
                ['Circle / Ellipse', 'C', 'Draw circles and ellipses'],
                ['Star & Polygon', 'P', 'Draw multi-point stars and polygons'],
                ['Line', 'L', 'Draw straight line segments'],
                ['Pen (Path)', 'B', 'Draw custom bezier paths'],
                ['Text', 'T', 'Place and edit text objects'],
                ['Image Import', 'I', 'Import raster images onto the canvas'],
                ['Hand (Pan)', 'H', 'Pan the canvas without affecting selection'],
                ['Zoom', 'Z', 'Click to zoom in; Alt+click to zoom out'],
              ]}
            />
            <p className="mt-4">The toolbar also contains quick-access buttons at the bottom:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid toggle</strong> shows or hides the canvas grid</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap toggle</strong> enables or disables the snapping system</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ruler toggle</strong> shows or hides horizontal and vertical rulers</li>
            </ul>
          </Section>

          <Section id="the-properties-panel" title="The Properties Panel">
            <p>
              The right-side panel. Context-sensitive; its contents change completely based on what is currently selected:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Nothing selected:</strong> Shows canvas/artboard settings (dimensions, background, frame rate)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Shape selected:</strong> Shows transform properties, material system, layer blend settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Text selected:</strong> Shows typography controls, text material, animation mode settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Image selected:</strong> Shows image properties, filter stack, blend mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Group selected:</strong> Shows group-level transform and composite settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyframe selected:</strong> Shows easing controls and interpolation settings</li>
            </ul>
            <p className="mt-4">
              The Properties Panel is always visible in Design and Advanced modes. In Animate mode it collapses to a narrower form to give the timeline more vertical space.
            </p>
          </Section>

          <Section id="the-canvas" title="The Canvas">
            <p>
              The central viewport. The canvas represents the output artboard. Everything within its bounds is included in export; everything outside is clipped. The canvas itself has a configurable background color or transparency.
            </p>
            <p>
              The area outside the canvas boundary (the <strong className="text-white">pasteboard</strong>) is a dark neutral surface. Elements can be placed on the pasteboard to keep them out of the export while remaining part of the project, useful for storing unused assets or off-screen animation start positions.
            </p>
          </Section>

          <Section id="the-layer-panel" title="The Layer Panel">
            <p>
              The panel on the left side of the interface (below the toolbar in Design mode, a collapsible drawer in Animate mode). Lists every element in the current sequence in Z-order, with:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Element name (double-click to rename)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Visibility toggle (eye icon)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Lock toggle (padlock icon)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Solo toggle (circle icon) hides all other layers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Element type icon (shape, text, image, group)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Expand arrow for groups</li>
            </ul>
          </Section>

          <Section id="the-timeline" title="The Timeline">
            <p>
              Visible in Animate and Advanced modes. Occupies the lower portion of the interface. Contains:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Playhead</strong> the current time position, draggable</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Timecode display</strong> shows current time in HH:MM:SS:FF format</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Frame counter</strong> shows current frame number</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Track list</strong> one row per animated element, expandable to show individual property tracks</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyframe area</strong> the horizontal space where keyframe diamonds appear</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Transport controls</strong> play, pause, stop, step back, step forward, loop toggle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Zoom slider</strong> adjusts visible time range</li>
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
