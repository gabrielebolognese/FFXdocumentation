import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'render-cues', label: 'Render Cues' },
  { id: 'adding-render-cues', label: 'Adding Render Cues' },
  { id: 'batch-snapshots', label: 'Batch Snapshots' },
];

export default function RenderingCues() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Rendering Cue System | FlashFX Documentation"
        description="How to use render cues, snapshot exports, sequence splits, and batch snapshots in FlashFX."
        keywords="FlashFX, render cue, snapshot, sequence split, batch export, metadata stamp"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Rendering Cue System</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="render-cues" title="Render Cues">
            <p>Render cues are time-based triggers that instruct FlashFX to take a specific action at a specific frame during export rendering.</p>
            <Table
              headers={['Cue Type', 'Description']}
              rows={[
                ['Snapshot', 'Exports a PNG still of the canvas at this frame number'],
                ['Marker Export', 'Exports a labeled section when the playhead reaches this cue'],
                ['Sequence Split', 'Splits the output video file at this cue, generating multiple output files'],
                ['Metadata Stamp', 'Embeds a custom metadata tag at this timecode in the video file'],
              ]}
            />
          </Section>

          <Section id="adding-render-cues" title="Adding Render Cues">
            <p>Right-click the timeline ruler at any time position -&gt; "Add Render Cue." Choose the cue type and configure its properties.</p>
            <p>Render cues appear as small icon markers in the ruler, distinct from regular annotation markers.</p>
          </Section>

          <Section id="batch-snapshots" title="Batch Snapshots">
            <p>Multiple Snapshot cues can be placed at different time positions. When the export renders, a PNG is automatically saved for each snapshot cue without interrupting the video export.</p>
            <p><strong className="text-white">Useful for:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Automatically generating thumbnail images for each scene</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Creating a series of product mockup frames from a single animation</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Producing slide content from an animated presentation</li>
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
