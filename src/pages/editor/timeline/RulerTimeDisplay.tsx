import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'ruler-format', label: 'Ruler Format' },
  { id: 'timecode-display', label: 'Timecode Display' },
  { id: 'zoom-controls', label: 'Zoom Controls' },
  { id: 'timeline-scrolling', label: 'Timeline Scrolling' },
];

export default function RulerTimeDisplay() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Timeline Ruler and Time Display | FlashFX Documentation"
        description="Ruler formats, timecode display, zoom controls, and scrolling in the FlashFX timeline."
        keywords="FlashFX, timeline ruler, timecode, zoom, timeline scroll"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Timeline Ruler and Time Display</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="ruler-format" title="Ruler Format">
            <p>The ruler at the top of the keyframe area shows time markers. The format adapts to the zoom level:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Wide zoom (full project visible):</strong> Shows time in seconds with major marks every 5s, minor every 1s</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Medium zoom:</strong> Shows seconds with major marks every 1s, minor every half-second</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Close zoom:</strong> Shows individual frames</li>
            </ul>
            <p><strong className="text-white">Ruler format selector:</strong> Click the ruler area header to cycle between HH:MM:SS:FF (standard broadcast timecode), Frames (raw frame number from 0), and Seconds (decimal seconds).</p>
          </Section>

          <Section id="timecode-display" title="Timecode Display">
            <p>The large timecode display in the transport controls always shows the current time position, e.g. <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">00:00:05:12</code> = 0 hours, 0 minutes, 5 seconds, 12 frames.</p>
            <p><strong className="text-white">Clicking the timecode display</strong> allows typing a new time position directly. Supported input formats:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">5.12</code>,5 seconds, 12 frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">312</code>,frame 312 (when the display is in Frames mode)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">0:05:12</code>,0 minutes, 5 seconds, 12 frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">+15</code>,15 frames forward from current position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">-30</code>,30 frames backward from current position</li>
            </ul>
          </Section>

          <Section id="zoom-controls" title="Zoom Controls">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Scroll wheel in the keyframe area:</strong> Zooms the timeline in and out, centered on the cursor position.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Zoom slider:</strong> A dedicated slider in the timeline header bar. Drag left to zoom out, drag right to zoom in.</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Fit to Work Area:</strong>
                  {' '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+F</code>
                  {',adjusts zoom to show the full work area.'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Fit All:</strong>
                  {' '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Alt+F</code>
                  {',adjusts zoom to show the full project duration.'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Zoom to Selection:</strong>
                  {' Select keyframes, then press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">F</code>
                  {' to zoom the timeline view to fit the selected keyframe range.'}
                </span>
              </li>
            </ul>
          </Section>

          <Section id="timeline-scrolling" title="Timeline Scrolling">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Horizontal scroll:</strong>
                  {' Scroll wheel + '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code>
                  {' in the keyframe area, or click-drag the scroll bar at the bottom.'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Vertical scroll:</strong> Scroll wheel in the track list area when there are more tracks than the panel height can show.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Follow playhead:</strong> A toggle (headphone icon in the transport bar) that automatically scrolls the timeline horizontally to keep the playhead in view during playback.</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
