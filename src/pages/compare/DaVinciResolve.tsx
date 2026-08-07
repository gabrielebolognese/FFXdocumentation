import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'scope', label: 'Scope' },
  { id: 'when-flashfx-fits', label: 'When FlashFX Fits Better' },
  { id: 'when-resolve-fits', label: 'When Resolve Fits Better' },
  { id: 'using-both', label: 'Using Both' },
];

export default function DaVinciResolve() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX vs DaVinci Resolve | FlashFX Documentation"
        description="How FlashFX compares with DaVinci Resolve — a focused browser motion editor against a full desktop post-production suite."
        keywords="FlashFX, DaVinci Resolve, alternative, motion graphics, Fusion, comparison"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Compare
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">FlashFX vs DaVinci Resolve</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            DaVinci Resolve is a full post-production suite — editing, colour grading, audio and the Fusion compositing environment — in one desktop application. FlashFX does one part of that job, motion graphics authoring, in a browser tab. The comparison is really about scope.
          </p>

          <Section id="scope" title="Scope">
            <Table
              headers={['', 'FlashFX', 'DaVinci Resolve']}
              rows={[
                ['Category', 'Motion graphics editor', 'Full post-production suite'],
                ['Covers', 'Vector animation, text, images, 3D elements', 'Editing, colour grading, audio, VFX and compositing'],
                ['Runs in', 'A web browser', 'Installed desktop application'],
                ['Hardware', 'Runs on whatever runs the browser', 'Benefits substantially from a strong GPU'],
                ['Learning curve', 'Focused on one job', 'Broad, with a distinct interface per page of the suite'],
              ]}
            />
            <p>Resolve includes Fusion, a node-based compositing and motion graphics environment. Node graphs are powerful and precise, but they are a different mental model from a layer-and-timeline editor, and the ramp is steeper.</p>
          </Section>

          <Section id="when-flashfx-fits" title="When FlashFX Fits Better">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You want to produce a piece of motion graphics without installing and learning a full suite.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You are working on the web — UI motion, site animation, social graphics — and want SVG or WebM output directly.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You are on a machine that will not comfortably run a heavy desktop application.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You need several people editing in a shared workspace (Teams plan).</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You want a layer-and-timeline model rather than a node graph.</span></li>
            </ul>
          </Section>

          <Section id="when-resolve-fits" title="When Resolve Fits Better">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You need colour grading. This is what Resolve is most known for and FlashFX does not attempt it.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You are editing long-form video with audio post.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You need node-based compositing with tracking and keying.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>You want a single application covering the whole post pipeline.</span></li>
            </ul>
          </Section>

          <Section id="using-both" title="Using Both">
            <p>A practical split is to author graphics in FlashFX and export them for use in Resolve. FlashFX exports MP4, GIF, WebM and SVG on every plan, so graphics can move into a Resolve timeline without a paid upgrade.</p>
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


