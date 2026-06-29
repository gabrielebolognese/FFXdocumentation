import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'general-settings', label: 'General Settings' },
  { id: 'interface-preferences', label: 'Interface Preferences' },
  { id: 'canvas-and-grid', label: 'Canvas & Grid' },
  { id: 'performance', label: 'Performance' },
  { id: 'keyboard-and-input', label: 'Keyboard & Input' },
  { id: 'export-defaults', label: 'Export Defaults' },
  { id: 'storage-and-sync', label: 'Storage & Sync' },
  { id: 'accessibility', label: 'Accessibility' },
  { id: 'resetting-settings', label: 'Resetting Settings' },
];

export default function ApplicationSettings() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Application Settings | FlashFX Documentation"
        description="Configure global application preferences and editor behavior in FlashFX."
        keywords="FlashFX, settings, preferences, configuration"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Application Settings</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Application settings control global editor behavior, interface preferences, and performance options. Access settings via Edit → Preferences or by pressing Ctrl/Cmd + comma.
          </p>

          <Section id="general-settings" title="General Settings">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Auto-save interval</strong>,Frequency of automatic project saves (1-60 minutes, or disabled)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Undo history depth</strong>,Number of undo steps to preserve (10-500)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Recent projects count</strong>,Maximum projects shown in recent files list</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Default canvas preset</strong>,Template used for new projects</li>
            </ul>
          </Section>

          <Section id="interface-preferences" title="Interface Preferences">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Theme</strong>,Dark (default), Light, or System</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">UI scale</strong>,75%, 100%, 125%, 150% for high-DPI displays</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Accent color</strong>,Interface highlight color (default: yellow)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Panel animations</strong>,Enable/disable UI transitions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Tooltips</strong>,Show/hide help tooltips on hover</li>
            </ul>
          </Section>

          <Section id="canvas-and-grid" title="Canvas & Grid">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid size</strong>,Default spacing in pixels (1-100)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid color</strong>,Custom grid line color</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Grid opacity</strong>,10-100%</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Show grid by default</strong>,Grid visibility for new projects</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Pasteboard color</strong>,Color of the area outside the canvas</li>
            </ul>
          </Section>

          <Section id="performance" title="Performance">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">GPU acceleration</strong>,Enable/disable WebGL rendering (requires restart)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Preview quality</strong>,Low, Medium, High (affects real-time playback)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Maximum texture size</strong>,2048, 4096, or 8192 pixels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Cache size</strong>,Memory allocated for asset caching (256MB - 4GB)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Render threads</strong>,CPU cores used for export rendering</li>
            </ul>
          </Section>

          <Section id="keyboard-and-input" title="Keyboard & Input">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyboard shortcut set</strong>,Default, After Effects, or Custom</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Scroll wheel behavior</strong>,Zoom or Pan</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Scroll sensitivity</strong>,0.5x to 3x</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Middle-click action</strong>,Pan or Nothing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Double-click speed</strong>,Fast, Normal, Slow</li>
            </ul>
          </Section>

          <Section id="export-defaults" title="Export Defaults">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Default export format</strong>,MP4, WebM, GIF, or PNG Sequence</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Video codec</strong>,H.264, VP9, or AV1</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Video quality</strong>,Low, Medium, High, or Lossless</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Export directory</strong>,Default save location</li>
            </ul>
          </Section>

          <Section id="storage-and-sync" title="Storage & Sync">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Cloud sync</strong>,Enable/disable automatic cloud synchronization</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Local storage limit</strong>,Maximum browser storage usage</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Clear cache</strong>,Button to manually clear cached assets</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Download all projects</strong>,Export all cloud projects to local files</li>
            </ul>
          </Section>

          <Section id="accessibility" title="Accessibility">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">High contrast mode</strong>,Increase interface contrast for visibility</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reduce motion</strong>,Minimize UI animations</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyboard navigation</strong>,Enable full keyboard control</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Screen reader announcements</strong>,Verbal feedback for actions</li>
            </ul>
          </Section>

          <Section id="resetting-settings" title="Resetting Settings">
            <p>
              To restore all settings to factory defaults, click "Reset All Preferences" at the bottom of the Preferences dialog. This action requires confirmation and cannot be undone.
            </p>
            <p className="mt-4">
              Note: Resetting preferences does not affect project data, cloud storage, or account settings.
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
