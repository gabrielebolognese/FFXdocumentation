import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'overview', label: 'Overview' },
  { id: 'sequences-vs-clips', label: 'Sequences vs. Clips' },
  { id: 'compositor-timeline-layout', label: 'Compositor Timeline Layout' },
  { id: 'placing-sequences', label: 'Placing Sequences' },
  { id: 'clip-operations', label: 'Clip Operations' },
  { id: 'clip-transitions', label: 'Clip Transitions' },
  { id: 'multi-track-compositing', label: 'Multi-Track Compositing' },
];

export default function SequenceCompositor() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Sequence Compositor | FlashFX Documentation"
        description="Reference for the sequence compositor, placing clips, transitions, multi-track compositing, and clip operations in FlashFX."
        keywords="FlashFX, sequence compositor, clip transitions, multi-track, dissolve, wipe, compositor"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Sequence Compositor</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="overview" title="Overview">
            <p>The Sequence Compositor is accessed via the "Compositor" tab at the top of the timeline panel. It provides a linear, track-based view of all sequences in the project, arranged along a shared time axis. Each sequence is represented as a block in the compositor that can be repositioned, trimmed, and re-ordered.</p>
            <p>This is conceptually similar to a video editor's timeline — sequences are "clips" that are assembled into a final output.</p>
          </Section>

          <Section id="sequences-vs-clips" title="Sequences vs. Clips">
            <p>A <strong className="text-white">Sequence</strong> is a complete FlashFX project context — its own canvas contents, layer stack, keyframe animation, and duration.</p>
            <p>A <strong className="text-white">Compositor Clip</strong> is an instance of a sequence placed in the compositor timeline. The same sequence can be placed multiple times as different clips — useful for creating a sequence once and using it in multiple positions in the final output (e.g., a recurring intro sting used between sections).</p>
          </Section>

          <Section id="compositor-timeline-layout" title="Compositor Timeline Layout">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Sequence tracks</strong> — horizontal rows, each potentially holding one or more sequence clips</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Clip blocks</strong> — colored rectangles representing sequence instances</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Global timeline ruler</strong> — the time axis for the overall output, independent of any individual sequence's internal timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Global playhead</strong> — controls the composite output preview</li>
            </ul>
          </Section>

          <Section id="placing-sequences" title="Placing Sequences">
            <p>Drag a sequence name from the Sequence List panel onto a compositor track. The clip is placed starting at the dragged position.</p>
            <p>Alternatively: Compositor -&gt; Insert Sequence prompts to choose a sequence and places it at the current global playhead position.</p>
          </Section>

          <Section id="clip-operations" title="Clip Operations">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Move:</strong> Drag the clip block to a different time position or a different track.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Trim In/Out:</strong> Drag the clip edges to trim. Trimming does not change the sequence's internal animation — it controls which portion of the sequence is shown in the output.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Time Remap on Clip:</strong> Each compositor clip can have time remapping applied independently. Right-click the clip -&gt; "Enable Time Remap."</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Clip Speed:</strong> Right-click any clip -&gt; "Set Speed\" to enter a playback speed multiplier (0.5 = half speed, 2.0 = double speed).</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Duplicate Clip:</strong> Right-click -&gt; "Duplicate.\" Creates a new independent clip instance of the same sequence.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Unlink from Sequence:</strong> Right-click -&gt; "Unlink Sequence.\" The clip becomes an independent, non-synced copy. Changes to the original sequence no longer affect this clip.</li>
            </ul>
          </Section>

          <Section id="clip-transitions" title="Clip Transitions">
            <p>Between two adjacent clips on the same track, a transition can be applied. Right-click the boundary between two clips -&gt; "Add Transition."</p>
            <Table
              headers={['Transition', 'Description']}
              rows={[
                ['Cut', 'Instantaneous switch (default, no actual transition)'],
                ['Dissolve / Cross Fade', 'Opacity cross-fade between the outgoing and incoming clip'],
                ['Wipe (Horizontal)', 'A line sweeps from left to right, revealing the incoming clip'],
                ['Wipe (Vertical)', 'A line sweeps from top to bottom'],
                ['Radial Wipe', 'A line rotates clockwise around a center point'],
                ['Zoom Cross', 'The outgoing clip zooms in while the incoming clip zooms in from 0%'],
                ['Slide', 'Outgoing slides out in one direction; incoming slides in from the opposite direction'],
                ['Dip to Black / White', 'Fades to black/white then fades in to the next clip'],
              ]}
            />
            <p><strong className="text-white">Transition duration:</strong> Set in the transition properties (double-click the transition region between clips). Range: 1 frame to the full duration of the shorter clip.</p>
            <p><strong className="text-white">Transition easing:</strong> Transitions have their own easing profile, independent of element-level easing in the constituent sequences.</p>
          </Section>

          <Section id="multi-track-compositing" title="Multi-Track Compositing">
            <p>The Compositor supports multiple tracks stacked vertically. Clips on higher tracks render on top of clips on lower tracks at the same time position.</p>
            <p><strong className="text-white">Use cases for multi-track:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A persistent watermark or logo clip across the full output</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A lower-third overlay sequence that appears over several main scenes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Background music visualization that runs under all scenes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A frame/border overlay that applies to the full output</li>
            </ul>
            <p><strong className="text-white">Track blend modes:</strong> Each compositor track has a blend mode property that controls how clips on that track composite with the tracks below it.</p>
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
