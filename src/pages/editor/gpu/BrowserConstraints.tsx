import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'chrome-recommended', label: 'Chrome (Recommended)' },
  { id: 'firefox', label: 'Firefox' },
  { id: 'safari', label: 'Safari' },
  { id: 'edge', label: 'Edge' },
  { id: 'webgl-context-loss', label: 'WebGL Context Loss' },
];

export default function BrowserConstraints() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Known Constraints by Browser | FlashFX Documentation"
        description="Browser-specific WebGL constraints, known issues, and WebGL context loss handling in FlashFX."
        keywords="FlashFX, Chrome, Firefox, Safari, WebGL, browser constraints, context loss"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Known Constraints by Browser</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="chrome-recommended" title="Chrome (Recommended)">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Best WebGL 2.0 support</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Hardware acceleration defaults on</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Best export performance (uses Chrome's built-in video encoding APIs)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Known issue:</strong> Very large single textures (greater than 8192x8192) may cause silent failures on some GPU drivers. Use the 8K maximum instead of larger.</li>
            </ul>
          </Section>

          <Section id="firefox" title="Firefox">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Full WebGL 2.0 support</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Slightly different default memory limits for offscreen buffers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The webgl.max-warnings-per-context setting must remain at default to avoid performance warnings during heavy rendering</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Known difference:</strong> Antialiasing on canvas edges may differ slightly from Chrome; visually negligible for export</li>
            </ul>
          </Section>

          <Section id="safari" title="Safari">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>WebGL 2.0 support from Safari 15 and later</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Metal GPU backend (not OpenGL) — generally excellent GPU performance on Apple hardware</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Canvas drawImage performance (used in certain compositing paths) is slower than Chrome in some versions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Advanced video export (VideoEncoder API) available from Safari 16.4 and later; older versions fall back to a slower export method</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Known limitation:</strong> EXT_disjoint_timer_query (used by the performance profiler) is disabled in Safari for security reasons — GPU timing data may be unavailable</li>
            </ul>
          </Section>

          <Section id="edge" title="Edge">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Chromium-based — essentially identical behavior to Chrome</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Some enterprise security policies may restrict WebGL; check with IT if FlashFX fails to initialize the GPU context</li>
            </ul>
          </Section>

          <Section id="webgl-context-loss" title="WebGL Context Loss">
            <p>In all browsers, the WebGL context can be <strong className="text-white">lost</strong> due to GPU driver crashes, system sleep, or GPU reset. FlashFX handles this by:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Detecting the context loss event</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Automatically attempting to restore the context</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Re-uploading all textures from CPU memory</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Resuming rendering without requiring a page reload</li>
            </ol>
            <p>If context restoration fails, FlashFX prompts to reload the page. Current unsaved work in the cloud-synced session is preserved.</p>
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
