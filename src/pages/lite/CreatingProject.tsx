import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { label: 'Steps', id: 'steps' },
  { label: 'Canvas Size Options', id: 'canvas-sizes' },
];

export default function LiteCreatingProject() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Creating a Project"
        description="How to create a new project in FlashFX Lite: open the app, set canvas size, and start adding elements."
        keywords="FlashFX Lite, create project, canvas size, new project"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Creating a Project</h1>
          <p className="text-sm text-blue-muted mt-2">From launch to first element in four steps</p>
        </div>

        <div id="steps" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Steps</h2>

          <div className="space-y-3">
            {[
              { step: '1', title: 'Open the app', desc: 'Launch FlashFX Lite. You land on the Projects screen.' },
              { step: '2', title: 'Tap "New Project"', desc: 'Tap the + button in the top-right corner. A canvas size picker appears.' },
              { step: '3', title: 'Set canvas size', desc: 'Choose a preset or enter a custom width and height. Tap Create.' },
              { step: '4', title: 'Add elements', desc: 'Use the toolbar to add shapes or text. The canvas is ready to edit.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-navy-border/20 border border-navy-border rounded-lg">
                <div className="flex-shrink-0 w-7 h-7 bg-yellow-accent text-black text-xs font-bold rounded-full flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{title}</p>
                  <p className="text-sm text-white/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="canvas-sizes" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Canvas Size Options</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Preset</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Resolution</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Use For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Square', '1080 × 1080', 'Instagram post, TikTok'],
                  ['Story / Reel', '1080 × 1920', 'Instagram Story, YouTube Shorts'],
                  ['Landscape', '1920 × 1080', 'YouTube, general video'],
                  ['Twitter / X Post', '1200 × 675', 'Social post thumbnail'],
                  ['Custom', 'User-defined', 'Any other use case'],
                ].map(([preset, res, use]) => (
                  <tr key={preset}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{preset}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{res}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white/60">
            Canvas size cannot be changed after a project is created. Start a new project if you need a different size.
          </p>
        </div>
      </div>
    </Layout>
  );
}
