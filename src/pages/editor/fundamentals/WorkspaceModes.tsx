import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'design-mode', label: 'Design Mode' },
  { id: 'animate-mode', label: 'Animate Mode' },
  { id: 'advanced-mode', label: 'Advanced Mode' },
  { id: 'switching-modes', label: 'Switching Modes' },
  { id: 'mode-specific-features', label: 'Mode-Specific Features' },
  { id: 'recommended-workflow', label: 'Recommended Workflow' },
];

export default function WorkspaceModes() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Workspace Modes | FlashFX Documentation"
        description="Understanding Design, Animate, and Advanced workspace modes in FlashFX."
        keywords="FlashFX, workspace modes, design mode, animate mode"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Workspace Modes</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX provides three distinct workspace modes, each optimized for a specific stage of the creative process. Switching between modes reconfigures the interface to surface only the tools and panels relevant to your current task.
          </p>

          <Section id="design-mode" title="Design Mode">
            <p>
              <strong className="text-white">The default workspace for creating and arranging visual elements.</strong> Design mode gives maximum screen real estate to the canvas and layer panel, with the properties panel always visible on the right.
            </p>
            <p className="mt-4">Layout:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Toolbar on the left edge</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Layer panel below toolbar (fixed)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Canvas in the center (largest viewport)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Properties panel on the right (always visible)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Timeline hidden</li>
            </ul>
            <p className="mt-4">Best for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drawing shapes and paths</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Importing and positioning images</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Setting up the composition structure</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Applying materials, fills, and strokes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Arranging layers and groups</li>
            </ul>
          </Section>

          <Section id="animate-mode" title="Animate Mode">
            <p>
              <strong className="text-white">The workspace for keyframe animation and motion design.</strong> Animate mode splits the screen vertically, dedicating the lower half to the timeline while compressing the properties panel to a narrower column.
            </p>
            <p className="mt-4">Layout:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Toolbar on the left edge</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Layer panel as a collapsible drawer (can be toggled)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Canvas in the upper center (reduced height)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Properties panel on the right (narrower form)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Timeline occupies the full bottom section</li>
            </ul>
            <p className="mt-4">Best for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Creating keyframes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Adjusting easing curves</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Previewing animation playback</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Timing and synchronization</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Editing motion paths</li>
            </ul>
          </Section>

          <Section id="advanced-mode" title="Advanced Mode">
            <p>
              <strong className="text-white">A hybrid workspace combining full access to all panels simultaneously.</strong> Advanced mode is for power users who need to see the timeline and layer panel alongside the canvas without toggling views.
            </p>
            <p className="mt-4">Layout:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Toolbar on the left edge</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Layer panel below toolbar (fixed, scrollable)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Canvas in the upper center</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Properties panel on the right (full width)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Timeline at the bottom</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All panels resizable via drag handles</li>
            </ul>
            <p className="mt-4">Best for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Complex multi-layer compositions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Workflows requiring frequent mode switches</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Large displays with ample screen space</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Experienced users who want maximum control</li>
            </ul>
          </Section>

          <Section id="switching-modes" title="Switching Modes">
            <p>
              Access the mode switcher from the menu bar at the top of the interface. The active mode is highlighted with a cyan indicator.
            </p>
            <p className="mt-4">Keyboard shortcuts:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ctrl/Cmd + 1</strong> — Design mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ctrl/Cmd + 2</strong> — Animate mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ctrl/Cmd + 3</strong> — Advanced mode</li>
            </ul>
            <p className="mt-4">
              Switching modes does not affect your project data. All elements, keyframes, and settings are preserved. Only the interface layout changes.
            </p>
          </Section>

          <Section id="mode-specific-features" title="Mode-Specific Features">
            <p>Certain features are only accessible in specific modes:</p>
            <Table
              headers={['Feature', 'Design', 'Animate', 'Advanced']}
              rows={[
                ['Shape drawing tools', 'Yes', 'Limited', 'Yes'],
                ['Timeline editing', 'No', 'Yes', 'Yes'],
                ['Keyframe creation', 'No', 'Yes', 'Yes'],
                ['Graph editor', 'No', 'Yes', 'Yes'],
                ['Layer panel (fixed)', 'Yes', 'No', 'Yes'],
                ['Full properties panel', 'Yes', 'No', 'Yes'],
                ['Resizable panels', 'No', 'No', 'Yes'],
              ]}
            />
          </Section>

          <Section id="recommended-workflow" title="Recommended Workflow">
            <p>Most users follow this workflow pattern:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Start in Design mode</strong> — Create all visual elements, set up the composition</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Switch to Animate mode</strong> — Add keyframes, adjust timing, preview motion</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Use Advanced mode</strong> — For final polish and complex multi-layer edits</li>
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
