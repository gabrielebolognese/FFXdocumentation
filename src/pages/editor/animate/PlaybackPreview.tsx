import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'transport-controls', label: 'Transport Controls' },
  { id: 'preview-quality', label: 'Preview Quality' },
  { id: 'frame-rate-indicator', label: 'Frame Rate Indicator' },
  { id: 'preview-cache', label: 'Preview Cache' },
];

export default function PlaybackPreview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Playback and Preview | FlashFX Documentation"
        description="Reference for transport controls, preview quality, frame rate indicators, and preview caching in FlashFX."
        keywords="FlashFX, playback, preview, transport controls, frame rate, preview cache, pre-render"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Playback and Preview</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="transport-controls" title="Transport Controls">
            <Table
              headers={['Control', 'Shortcut', 'Function']}
              rows={[
                ['Play / Pause', 'Space', 'Toggle playback'],
                ['Stop', 'Shift+Space', 'Stop and return to In Point'],
                ['Previous Frame', 'Left Arrow', 'Step back 1 frame'],
                ['Next Frame', 'Right Arrow', 'Step forward 1 frame'],
                ['Previous Keyframe', 'J', 'Jump to previous keyframe on selected element'],
                ['Next Keyframe', ';', 'Jump to next keyframe on selected element'],
                ['Go to Start', 'Home', 'Jump to frame 0'],
                ['Go to End', 'End', 'Jump to last frame'],
                ['Toggle Loop', 'Ctrl+L', 'Enable/disable looping playback'],
              ]}
            />
          </Section>

          <Section id="preview-quality" title="Preview Quality">
            <p>Preview Quality affects only the real-time playback display — not the final export.</p>
            <Table
              headers={['Setting', 'Canvas Resolution', 'When to Use']}
              rows={[
                ['Full', '100% of canvas', 'Final review, simple compositions'],
                ['Half', '50% of canvas', 'Standard editing on complex scenes'],
                ['Quarter', '25% of canvas', 'Fast preview on very complex compositions'],
              ]}
            />
            <p>Change via the quality dropdown in the transport bar.</p>
          </Section>

          <Section id="frame-rate-indicator" title="Frame Rate Indicator">
            <p>The transport bar shows the current <strong className="text-white">live playback frame rate (FPS)</strong>. If this number is significantly below the project's target frame rate, the composition is too complex for real-time preview at the current quality setting. Reduce preview quality or simplify the composition.</p>
          </Section>

          <Section id="preview-cache" title="Preview Cache">
            <p>FlashFX renders and caches frames as playback occurs. A green bar in the timeline ruler shows which frames have been cached. Cached frames play back smoothly at the full project frame rate regardless of composition complexity.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Manual pre-render:</strong> Animation -&gt; Pre-render Preview caches all frames in the work area in the background before playback begins. On complex compositions, pre-rendering produces smooth full-speed playback at the cost of initial processing time.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Clear cache:</strong> Animation -&gt; Clear Preview Cache frees the memory used by cached frames.</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
