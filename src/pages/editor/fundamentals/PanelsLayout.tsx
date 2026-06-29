import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'available-panels', label: 'Available Panels' },
  { id: 'showing-and-hiding-panels', label: 'Showing and Hiding Panels' },
  { id: 'resizing-panels', label: 'Resizing Panels' },
  { id: 'floating-panels', label: 'Floating Panels' },
  { id: 'docking-zones', label: 'Docking Zones' },
  { id: 'workspace-presets', label: 'Workspace Presets' },
  { id: 'full-screen-mode', label: 'Full-Screen Mode' },
  { id: 'distraction-free-mode', label: 'Distraction-Free Mode' },
  { id: 'panel-preferences', label: 'Panel Preferences' },
  { id: 'best-practices', label: 'Best Practices' },
];

export default function PanelsLayout() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Panels & Layout Customization | FlashFX Documentation"
        description="Customize the FlashFX interface with resizable panels and workspace layouts."
        keywords="FlashFX, panels, layout, workspace, customization"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Panels & Layout Customization</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX provides a flexible panel system that adapts to your workflow. You can show, hide, resize, and rearrange panels to create a custom layout optimized for your screen size and working style.
          </p>

          <Section id="available-panels" title="Available Panels">
            <Table
              headers={['Panel', 'Default Location', 'Purpose']}
              rows={[
                ['Toolbar', 'Left edge', 'Drawing and selection tools'],
                ['Layer Panel', 'Below toolbar / Collapsible drawer', 'Layer hierarchy and visibility'],
                ['Properties Panel', 'Right side', 'Element-specific settings'],
                ['Timeline', 'Bottom (Animate/Advanced mode)', 'Keyframes and animation tracks'],
                ['Swatches', 'Floating/docked', 'Color palette management'],
                ['Navigator', 'Floating/docked', 'Canvas overview and quick navigation'],
                ['Assets', 'Floating/docked', 'Imported images, fonts, and media'],
                ['History', 'Floating/docked', 'Undo/redo history list'],
              ]}
            />
          </Section>

          <Section id="showing-and-hiding-panels" title="Showing and Hiding Panels">
            <p>Access panel visibility controls via the Window menu:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Window → Layers</strong>,Toggle layer panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Window → Properties</strong>,Toggle properties panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Window → Timeline</strong>,Toggle timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Window → Swatches</strong>,Open swatches panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Window → Navigator</strong>,Open navigator panel</li>
            </ul>
            <p className="mt-4">
              Checked items in the Window menu indicate visible panels. Click to toggle.
            </p>
          </Section>

          <Section id="resizing-panels" title="Resizing Panels">
            <p>In Advanced mode, all panels have resize handles allowing custom sizing:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Move cursor to the border between two panels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Cursor changes to a resize icon (double-arrow)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Click and drag to resize</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Release to finalize size</li>
            </ul>
            <p className="mt-4">
              Note: In Design and Animate modes, panel sizes are fixed to predefined optimal dimensions.
            </p>
          </Section>

          <Section id="floating-panels" title="Floating Panels">
            <p>
              Secondary panels (Swatches, Navigator, Assets, History) can float as separate windows:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Detach</strong>,Click the panel's detach icon (top-right corner)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reattach</strong>,Drag panel back to a dock zone (edges or corners)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Move</strong>,Drag panel by its title bar</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Resize</strong>,Drag panel edges or corners</li>
            </ul>
            <p className="mt-4">
              Floating panels stay on top of the main window and can be positioned on secondary monitors.
            </p>
          </Section>

          <Section id="docking-zones" title="Docking Zones">
            <p>
              When dragging a floating panel, docking zones appear as highlighted areas:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Left dock</strong>,Attaches below the toolbar/layer panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Right dock</strong>,Attaches below the properties panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Bottom dock</strong>,Attaches next to the timeline (Advanced mode only)</li>
            </ul>
            <p className="mt-4">
              Drop the panel when the desired zone is highlighted to dock it there.
            </p>
          </Section>

          <Section id="workspace-presets" title="Workspace Presets">
            <p>
              Save and recall custom panel layouts:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Save workspace</strong>,Window → Workspace → New Workspace, enter a name</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Load workspace</strong>,Window → Workspace → [Workspace Name]</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reset workspace</strong>,Window → Workspace → Reset to Default</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Delete workspace</strong>,Window → Workspace → Manage → Delete</li>
            </ul>
            <p className="mt-4">
              Built-in workspaces:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Default</strong>,Standard layout for general work</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Animation Focus</strong>,Maximized timeline, minimal properties panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Design Focus</strong>,Maximized canvas, hidden timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Compact</strong>,Optimized for small screens (laptops)</li>
            </ul>
          </Section>

          <Section id="full-screen-mode" title="Full-Screen Mode">
            <p>
              Maximize canvas space by entering full-screen mode:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Toggle full-screen</strong>,View → Full Screen (F11)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Menu bar and browser chrome are hidden</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Panels remain visible but maximize available space</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press F11 or Escape to exit</li>
            </ul>
          </Section>

          <Section id="distraction-free-mode" title="Distraction-Free Mode">
            <p>
              Hide all panels except the canvas:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Toggle</strong>,View → Distraction-Free Mode (Shift + F11)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All panels collapse; only canvas and menu bar remain</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Ideal for presentations and final reviews</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press Shift + F11 to restore panels</li>
            </ul>
          </Section>

          <Section id="panel-preferences" title="Panel Preferences">
            <p>Customize panel behavior in Edit → Preferences → Interface:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Auto-collapse panels</strong>,Panels shrink when inactive (saves space)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Panel transition speed</strong>,Animation duration for show/hide</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Remember panel states</strong>,Restore visibility on next session</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Floating panel opacity</strong>,Transparency when not focused (20-100%)</li>
            </ul>
          </Section>

          <Section id="best-practices" title="Best Practices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Create workspace presets for different task types (design, animation, export)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use floating panels for secondary tools (Navigator, Swatches) on multi-monitor setups</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>In Animate mode, hide the layer panel (collapsible drawer) to maximize timeline height</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Reset to default workspace if panel layout becomes confusing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use distraction-free mode when presenting work to clients</li>
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
