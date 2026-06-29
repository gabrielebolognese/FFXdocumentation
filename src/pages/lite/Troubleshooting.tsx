import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { label: 'Animation not playing', id: 'animation-not-playing' },
  { label: 'Export failed', id: 'export-failed' },
  { label: 'Object not selectable', id: 'object-not-selectable' },
  { label: 'Performance issues', id: 'performance-issues' },
];

function Issue({ id, title, causes, fixes }: { id: string; title: string; causes: string[]; fixes: string[] }) {
  return (
    <div id={id} className="scroll-mt-32 space-y-3">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
          <p className="text-[11px] uppercase tracking-widest text-red-400/70 font-semibold mb-2">Possible Causes</p>
          <ul className="space-y-1.5">
            {causes.map((c) => (
              <li key={c} className="text-sm text-white/70 flex items-start gap-2">
                <span className="text-red-400 mt-0.5 flex-shrink-0">–</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
          <p className="text-[11px] uppercase tracking-widest text-green-400/70 font-semibold mb-2">Fixes</p>
          <ul className="space-y-1.5">
            {fixes.map((f) => (
              <li key={f} className="text-sm text-white/70 flex items-start gap-2">
                <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function LiteTroubleshooting() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Troubleshooting"
        description="Common problems in FlashFX Lite and how to fix them: animation not playing, export failed, object not selectable, and performance."
        keywords="FlashFX Lite, troubleshooting, bugs, issues, export failed, animation"
      />

      <div className="space-y-10">
        <div>
          <h1 className="text-4xl font-semibold text-white">Troubleshooting</h1>
          <p className="text-sm text-blue-muted mt-2">Common problems and their fixes</p>
        </div>

        <Issue
          id="animation-not-playing"
          title="Animation not playing"
          causes={[
            'No keyframes have been set on any object.',
            'The playhead is already at the end of the timeline.',
            'Duration is set to 0s in Project Settings.',
          ]}
          fixes={[
            'Confirm at least two keyframes exist, one at 0s and one at the end.',
            'Drag the playhead back to 0s before tapping Play.',
            'Open Project Settings (gear icon) and set a duration greater than 0.',
          ]}
        />

        <Issue
          id="export-failed"
          title="Export failed"
          causes={[
            'Not enough free storage on the device.',
            'GIF export at a resolution larger than 800×800.',
            'App was moved to the background during export.',
          ]}
          fixes={[
            'Free up device storage (at least 200 MB recommended before export).',
            'Reduce canvas size or use MP4 for large exports.',
            'Keep the app in the foreground during export.',
          ]}
        />

        <Issue
          id="object-not-selectable"
          title="Object not selectable"
          causes={[
            'The object is behind another object in the layer stack.',
            'The object is at 0% opacity.',
            'The object is outside the visible canvas bounds.',
          ]}
          fixes={[
            'Use the Object Panel layer list to select the target layer directly.',
            'Check opacity in the Object Panel, raise it above 0.',
            'Double-tap the canvas to zoom to fit and locate the object.',
          ]}
        />

        <Issue
          id="performance-issues"
          title="Performance issues (lag, dropped frames)"
          causes={[
            'Too many objects at maximum canvas resolution.',
            'GIF export of a long or large animation.',
            'Device is in Low Power Mode.',
          ]}
          fixes={[
            'Reduce the number of objects (Lite supports up to 8 layers).',
            'Use a smaller canvas size (e.g. 1080×1080 instead of 1920×1920).',
            'Disable Low Power Mode before exporting (Settings > Battery).',
          ]}
        />
      </div>
    </Layout>
  );
}
