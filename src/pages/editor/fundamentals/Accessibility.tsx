import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'visual-accessibility', label: 'Visual Accessibility' },
  { id: 'motor-accessibility', label: 'Motor Accessibility' },
  { id: 'screen-reader-support', label: 'Screen Reader Support' },
  { id: 'cognitive-accessibility', label: 'Cognitive Accessibility' },
  { id: 'system-preferences-sync', label: 'System Preferences Sync' },
  { id: 'accessibility-keyboard-shortcuts', label: 'Accessibility Keyboard Shortcuts' },
  { id: 'reporting-accessibility-issues', label: 'Reporting Accessibility Issues' },
  { id: 'conformance-statement', label: 'Conformance Statement' },
];

export default function Accessibility() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Accessibility Settings | FlashFX Documentation"
        description="Learn about accessibility features in FlashFX for users with visual, motor, or cognitive impairments."
        keywords="FlashFX, accessibility, screen reader, keyboard navigation, high contrast"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Accessibility Settings</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX is committed to providing an accessible editing experience for users with visual, motor, or cognitive impairments. The following features and settings can be customized to meet individual needs.
          </p>

          <Section id="visual-accessibility" title="Visual Accessibility">
            <p><strong className="text-white">High Contrast Mode</strong></p>
            <p className="mt-2">
              Increases contrast ratios across the interface to improve visibility for users with low vision.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Enable:</strong> Edit → Preferences → Accessibility → High Contrast Mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Panel backgrounds become darker</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Text contrast increased to WCAG AAA standards (7:1)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Selection and focus indicators are thicker and brighter</li>
            </ul>

            <p className="mt-6"><strong className="text-white">UI Scale</strong></p>
            <p className="mt-2">
              Enlarge interface elements for better readability:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Interface → UI Scale</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Options: 75%, 100%, 125%, 150%</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Affects all text, icons, and controls</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Canvas zoom is independent of UI scale</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Cursor Size</strong></p>
            <p className="mt-2">
              Increase cursor visibility:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Large Cursor</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Cursor size doubles for easier tracking</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Color Blindness Support</strong></p>
            <p className="mt-2">
              Simulates different types of color blindness and provides alternative color schemes:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>View → Color Blind Simulation → Protanopia / Deuteranopia / Tritanopia</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Displays how your design appears to users with color vision deficiencies</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Does not affect exported output, only editor preview</li>
            </ul>
          </Section>

          <Section id="motor-accessibility" title="Motor Accessibility">
            <p><strong className="text-white">Keyboard-Only Navigation</strong></p>
            <p className="mt-2">
              FlashFX can be fully operated without a mouse:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Tab</strong>,Move focus to next interactive element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Shift + Tab</strong>,Move focus to previous element</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Enter</strong>,Activate focused button or control</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Arrow keys</strong>,Navigate within panels, adjust sliders, nudge elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Escape</strong>,Cancel operation or close dialog</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Focus Indicators</strong></p>
            <p className="mt-2">
              Visual ring around focused elements:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Always visible (cannot be disabled)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>High-contrast cyan color for visibility</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Animated pulse in High Contrast Mode</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Sticky Keys</strong></p>
            <p className="mt-2">
              Enable single-key presses for modifier combinations:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Sticky Keys</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press Shift, Ctrl, or Alt once to "lock" until next key press</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Useful for users who cannot hold multiple keys simultaneously</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Click Assist</strong></p>
            <p className="mt-2">
              Slows down double-click timing and increases click targets:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Click Assist</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Double-click window extended to 1 second (default: 300ms)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All interactive elements have minimum 44×44px hit area (WCAG AAA)</li>
            </ul>
          </Section>

          <Section id="screen-reader-support" title="Screen Reader Support">
            <p>
              FlashFX provides ARIA labels and live region announcements for screen readers:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Compatible with:</strong> NVDA, JAWS, VoiceOver, TalkBack</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Announcements:</strong> Layer selection, property changes, timeline playback, error messages</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Element descriptions:</strong> All elements have semantic labels (e.g., "Rectangle, 200×100px, layer 3")</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Enable:</strong> Edit → Preferences → Accessibility → Screen Reader Mode</li>
            </ul>
          </Section>

          <Section id="cognitive-accessibility" title="Cognitive Accessibility">
            <p><strong className="text-white">Reduce Motion</strong></p>
            <p className="mt-2">
              Disables animations and transitions for users sensitive to motion:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Reduce Motion</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All panel transitions become instant</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Zoom animations disabled</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Timeline playback still works (affects UI only)</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Extended Tooltips</strong></p>
            <p className="mt-2">
              Show detailed descriptions instead of brief labels:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Extended Tooltips</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Tooltips include keyboard shortcuts and usage hints</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Tooltip delay reduced to 500ms (default: 1000ms)</li>
            </ul>

            <p className="mt-6"><strong className="text-white">Simplified Interface</strong></p>
            <p className="mt-2">
              Hides advanced features for a cleaner experience:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit → Preferences → Accessibility → Simplified Mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Advanced properties hidden by default</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Fewer tool options shown</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Recommended for beginners or users with cognitive load concerns</li>
            </ul>
          </Section>

          <Section id="system-preferences-sync" title="System Preferences Sync">
            <p>
              FlashFX respects operating system accessibility settings:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Prefers reduced motion</strong>,Automatically enabled if OS setting is on</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">High contrast</strong>,Syncs with Windows High Contrast themes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">System theme</strong>,Respects dark/light mode preference</li>
            </ul>
          </Section>

          <Section id="accessibility-keyboard-shortcuts" title="Accessibility Keyboard Shortcuts">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['Ctrl/Cmd + Alt + H', 'Toggle high contrast mode'],
                ['Ctrl/Cmd + Alt + M', 'Toggle reduce motion'],
                ['Ctrl/Cmd + Alt + S', 'Toggle screen reader mode'],
                ['Ctrl/Cmd + /', 'Open accessibility menu'],
              ]}
            />
          </Section>

          <Section id="reporting-accessibility-issues" title="Reporting Accessibility Issues">
            <p>
              If you encounter accessibility barriers, please report them:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Help → Report Accessibility Issue</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Email: accessibility@flashfx.com</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Include browser, assistive technology, and steps to reproduce</li>
            </ul>
          </Section>

          <Section id="conformance-statement" title="Conformance Statement">
            <p>
              FlashFX aims to conform to WCAG 2.1 Level AA standards. Current conformance status:
            </p>
            <Table
              headers={['Criteria', 'Status']}
              rows={[
                ['Perceivable', 'Partially Conformant'],
                ['Operable', 'Conformant'],
                ['Understandable', 'Conformant'],
                ['Robust', 'Conformant'],
              ]}
            />
            <p className="mt-4">
              Known issues and roadmap available at: flashfx.com/accessibility
            </p>
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
