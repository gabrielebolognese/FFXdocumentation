import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { label: 'Supported Formats', id: 'formats' },
  { label: 'Resolution Limits', id: 'resolution' },
  { label: 'Frame Rate Options', id: 'frame-rate' },
  { label: 'Export Steps', id: 'export-steps' },
];

export default function LiteExport() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Export"
        description="Export options in FlashFX Lite: supported formats, resolution limits, frame rate, and step-by-step export."
        keywords="FlashFX Lite, export, MP4, GIF, PNG, resolution, frame rate"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Export</h1>
          <p className="text-sm text-blue-muted mt-2">Formats, limits, and how to export</p>
        </div>

        <div id="formats" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Supported Formats</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Format</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Extension</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['MP4 (H.264)', '.mp4', 'Social media video, widest compatibility'],
                  ['GIF', '.gif', 'Looping graphics, emails, messaging apps'],
                  ['PNG Sequence', '.png (folder)', 'Frame-by-frame use in desktop editors'],
                  ['Still PNG', '.png', 'Static thumbnail or poster frame'],
                ].map(([format, ext, best]) => (
                  <tr key={format}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{format}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{ext}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="resolution" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Resolution Limits</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Format</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Max Resolution</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['MP4', '1920 × 1920', 'Capped to protect device performance'],
                  ['GIF', '800 × 800', 'Larger sizes produce very large files'],
                  ['PNG Sequence', '1920 × 1920', 'Each frame exported as a separate file'],
                  ['Still PNG', '4096 × 4096', 'No video encoding involved'],
                ].map(([format, max, notes]) => (
                  <tr key={format}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{format}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{max}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="frame-rate" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Frame Rate Options</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">FPS</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Available For</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['24 fps', 'MP4, PNG Sequence', 'Cinema standard, slightly smoother on 60Hz screens'],
                  ['30 fps', 'MP4, GIF, PNG Sequence', 'Standard social media rate'],
                  ['15 fps', 'GIF only', 'Smaller file size for GIFs'],
                ].map(([fps, available, notes]) => (
                  <tr key={fps}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{fps}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{available}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="export-steps" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Export Steps</h2>

          <div className="space-y-3">
            {[
              { step: '1', title: 'Tap the Export button', desc: 'Located in the bottom-right corner of the screen. Always visible.' },
              { step: '2', title: 'Choose format', desc: 'Select MP4, GIF, PNG Sequence, or Still PNG.' },
              { step: '3', title: 'Set frame rate', desc: 'Choose 24, 30, or 15 fps (GIF only). The project duration is shown.' },
              { step: '4', title: 'Tap Export', desc: 'The app renders the animation. A progress bar appears.' },
              { step: '5', title: 'Save or share', desc: 'When done, choose Save to Camera Roll, Share via, or AirDrop.' },
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
      </div>
    </Layout>
  );
}
