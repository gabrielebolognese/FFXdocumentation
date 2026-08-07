import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'general', label: 'General' },
  { id: 'tools', label: 'Tools' },
  { id: 'selection', label: 'Selection' },
  { id: 'transform', label: 'Transform' },
  { id: 'edit', label: 'Edit' },
  { id: 'view-and-navigation', label: 'View & Navigation' },
  { id: 'layers', label: 'Layers' },
  { id: 'animation-and-timeline', label: 'Animation & Timeline' },
  { id: 'workspace-modes', label: 'Workspace Modes' },
  { id: 'text', label: 'Text' },
  { id: 'color', label: 'Color' },
  { id: 'precision', label: 'Precision' },
  { id: 'customizing-shortcuts', label: 'Customizing Shortcuts' },
  { id: 'shortcut-sets', label: 'Shortcut Sets' },
  { id: 'printing-this-reference', label: 'Printing This Reference' },
];

export default function KeyboardShortcuts() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Keyboard Shortcuts | FlashFX Documentation"
        description="Complete keyboard shortcut reference for FlashFX editor."
        keywords="FlashFX, keyboard shortcuts, hotkeys, shortcuts"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Keyboard Shortcuts — Master Reference</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Complete reference of all keyboard shortcuts in FlashFX. Shortcuts use Ctrl on Windows/Linux and Cmd on macOS. Hold Shift or Alt for modifiers.
          </p>

          <Section id="general" title="General">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + S', 'Save project'],
                ['Ctrl/Cmd + O', 'Open project'],
                ['Ctrl/Cmd + N', 'New project'],
                ['Ctrl/Cmd + Z', 'Undo'],
                ['Ctrl/Cmd + Shift + Z', 'Redo'],
                ['Ctrl/Cmd + ,', 'Open preferences'],
                ['Ctrl/Cmd + Q', 'Quit application'],
              ]}
            />
          </Section>

          <Section id="tools" title="Tools">
            <Table
              headers={['Shortcut', 'Tool']}
              rows={[
                ['V', 'Selection (Pointer)'],
                ['H', 'Hand (Pan)'],
                ['Z', 'Zoom'],
                ['R', 'Rectangle'],
                ['C', 'Circle / Ellipse'],
                ['P', 'Star & Polygon'],
                ['L', 'Line'],
                ['B', 'Pen (Path)'],
                ['T', 'Text'],
                ['I', 'Image Import'],
              ]}
            />
          </Section>

          <Section id="selection" title="Selection">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + A', 'Select all elements'],
                ['Ctrl/Cmd + Shift + A', 'Deselect all'],
                ['Escape', 'Deselect current selection'],
                ['Tab', 'Select next element in layer order'],
                ['Shift + Tab', 'Select previous element'],
                ['Ctrl/Cmd + Click', 'Add to selection'],
                ['Alt + Click', 'Select through (ignore top element)'],
              ]}
            />
          </Section>

          <Section id="transform" title="Transform">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + D', 'Duplicate selection'],
                ['Ctrl/Cmd + G', 'Group selection'],
                ['Ctrl/Cmd + Shift + G', 'Ungroup'],
                ['Ctrl/Cmd + ]', 'Bring forward (z-order)'],
                ['Ctrl/Cmd + [', 'Send backward'],
                ['Ctrl/Cmd + Shift + ]', 'Bring to front'],
                ['Ctrl/Cmd + Shift + [', 'Send to back'],
                ['Ctrl/Cmd + T', 'Free transform mode'],
              ]}
            />
          </Section>

          <Section id="edit" title="Edit">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + X', 'Cut'],
                ['Ctrl/Cmd + C', 'Copy'],
                ['Ctrl/Cmd + V', 'Paste'],
                ['Ctrl/Cmd + Shift + V', 'Paste in place'],
                ['Delete / Backspace', 'Delete selection'],
                ['Ctrl/Cmd + J', 'Duplicate and offset'],
              ]}
            />
          </Section>

          <Section id="view-and-navigation" title="View & Navigation">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + 0', 'Zoom to fit'],
                ['Ctrl/Cmd + 1', 'Zoom to 100%'],
                ['Ctrl/Cmd + 2', 'Zoom to 200%'],
                ['Ctrl/Cmd + 3', 'Zoom to selection'],
                ['Ctrl/Cmd + +', 'Zoom in'],
                ['Ctrl/Cmd + -', 'Zoom out'],
                ["Ctrl/Cmd + '", 'Toggle grid'],
                ['Ctrl/Cmd + R', 'Toggle rulers'],
                ['Ctrl/Cmd + ;', 'Toggle guides'],
                ['Ctrl/Cmd + Alt + ;', 'Lock/unlock guides'],
                ['F11', 'Full screen'],
                ['Shift + F11', 'Distraction-free mode'],
              ]}
            />
          </Section>

          <Section id="layers" title="Layers">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + Alt + L', 'Toggle layer panel'],
                ['Ctrl/Cmd + Shift + N', 'New layer'],
                ['Ctrl/Cmd + E', 'Merge selected layers'],
                ['Ctrl/Cmd + Shift + E', 'Flatten all layers'],
              ]}
            />
          </Section>

          <Section id="animation-and-timeline" title="Animation & Timeline">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Space', 'Play/pause timeline'],
                ['Home', 'Jump to start'],
                ['End', 'Jump to end'],
                ['Left Arrow', 'Step backward 1 frame'],
                ['Right Arrow', 'Step forward 1 frame'],
                ['Shift + Left Arrow', 'Step backward 10 frames'],
                ['Shift + Right Arrow', 'Step forward 10 frames'],
                ['K', 'Add keyframe at current time'],
                ['Shift + K', 'Remove keyframe at current time'],
                ['Ctrl/Cmd + K', 'Toggle keyframe (add if none, remove if exists)'],
              ]}
            />
          </Section>

          <Section id="workspace-modes" title="Workspace Modes">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + 1 (menu)', 'Switch to Design mode'],
                ['Ctrl/Cmd + 2 (menu)', 'Switch to Animate mode'],
                ['Ctrl/Cmd + 3 (menu)', 'Switch to Advanced mode'],
              ]}
            />
          </Section>

          <Section id="text" title="Text">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + B', 'Bold'],
                ['Ctrl/Cmd + I', 'Italic'],
                ['Ctrl/Cmd + U', 'Underline'],
                ['Ctrl/Cmd + Shift + >', 'Increase font size'],
                ['Ctrl/Cmd + Shift + <', 'Decrease font size'],
                ['Ctrl/Cmd + Shift + L', 'Align left'],
                ['Ctrl/Cmd + Shift + C', 'Align center'],
                ['Ctrl/Cmd + Shift + R', 'Align right'],
              ]}
            />
          </Section>

          <Section id="color" title="Color">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['X', 'Swap fill and stroke colors'],
                ['D', 'Reset to default colors (black fill, no stroke)'],
                ['/', 'Toggle fill/stroke active selector'],
                ['I', 'Activate eyedropper (when color picker is open)'],
              ]}
            />
          </Section>

          <Section id="precision" title="Precision">
            <Table
              headers={['Modifier', 'Effect']}
              rows={[
                ['Shift (while dragging)', 'Constrain movement to 45° angles'],
                ['Shift (while rotating)', 'Snap rotation to 15° increments'],
                ['Shift (while resizing)', 'Maintain aspect ratio'],
                ['Alt (while resizing)', 'Resize from center'],
                ['Ctrl/Cmd (while dragging)', 'Disable snapping temporarily'],
                ['Arrow keys', 'Nudge selection 1 pixel'],
                ['Shift + Arrow keys', 'Nudge selection 10 pixels'],
              ]}
            />
          </Section>

          <Section id="customizing-shortcuts" title="Customizing Shortcuts">
            <p>Create custom keyboard shortcuts in Edit → Preferences → Keyboard:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Search for the action you want to customize</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Click the shortcut field</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Press your desired key combination</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Click "Save" to apply</li>
            </ul>
            <p className="mt-4">
              Conflicts are highlighted in red. You must resolve conflicts before saving.
            </p>
          </Section>

          <Section id="shortcut-sets" title="Shortcut Sets">
            <p>FlashFX provides predefined shortcut sets matching popular applications:</p>
            <Table
              headers={['Set', 'Matches']}
              rows={[
                ['FlashFX Default', 'Native FlashFX shortcuts'],
                ['After Effects', 'Adobe After Effects shortcuts'],
                ['Photoshop', 'Adobe Photoshop shortcuts'],
                ['Figma', 'Figma shortcuts'],
              ]}
            />
            <p className="mt-4">
              Switch sets in Edit → Preferences → Keyboard → Shortcut Set. Changes apply immediately.
            </p>
          </Section>

          <Section id="printing-this-reference" title="Printing This Reference">
            <p>
              To print this shortcut reference:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Help → Keyboard Shortcut Reference → Print</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Or Ctrl/Cmd + P on this page</li>
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
