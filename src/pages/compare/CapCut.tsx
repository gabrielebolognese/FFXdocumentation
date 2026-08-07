import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'the-core-difference', label: 'The Core Difference' },
  { id: 'they-work-together', label: 'They Work Together' },
  { id: 'what-flashfx-adds', label: 'What FlashFX Adds for Graphics Work' },
  { id: 'which-to-use', label: 'Which To Use' },
];

export default function CapCut() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX vs CapCut | FlashFX Documentation"
        description="How FlashFX and CapCut differ — motion graphics authoring versus video editing — and which one suits the work you are doing."
        keywords="FlashFX, CapCut, alternative, motion graphics, video editing, comparison"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Compare
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">FlashFX vs CapCut</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            These tools are often compared, but they sit in different categories. CapCut is a video editor: you bring footage and cut, arrange and finish it. FlashFX is a motion graphics editor: you create animated vector and text content from scratch. The right choice usually follows from which of those describes your work.
          </p>

          <Section id="the-core-difference" title="The Core Difference">
            <Table
              headers={['', 'FlashFX', 'CapCut']}
              rows={[
                ['Primary job', 'Creating motion graphics and animation', 'Editing and finishing video footage'],
                ['You start with', 'A blank canvas', 'Clips you have shot or sourced'],
                ['Core objects', 'Vector shapes, text, images, 3D elements', 'Video and audio clips on a timeline'],
                ['Typical output', 'Animated graphics, titles, explainers, UI motion', 'Finished video edits, social cuts'],
                ['Runs in', 'A web browser', 'Mobile and desktop apps'],
              ]}
            />
            <Callout>If you need to cut together footage with music, a video editor is the right tool. If you need an animated logo, a title sequence, an explainer or UI motion, that is motion graphics work — which is what FlashFX is built for.</Callout>
          </Section>

          <Section id="they-work-together" title="They Work Together">
            <p>The two are complementary more often than competing. A common workflow is to build animated titles, lower thirds, logo stings or overlay graphics in FlashFX, export them, and bring them into a video editor alongside the footage.</p>
            <p>FlashFX exports MP4, GIF, WebM and SVG on every plan, including the free tier, so handing assets to a video editor does not require a paid upgrade.</p>
          </Section>

          <Section id="what-flashfx-adds" title="What FlashFX Adds for Graphics Work">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Vector-first authoring</strong> — shapes and text stay editable and scale without loss, rather than being baked into pixels.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Property-level keyframing</strong> — animate position, rotation, scale, opacity, colour and shape properties independently, each on its own track with its own easing.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">An easing graph editor</strong> — shape the acceleration of a move directly, rather than picking from a fixed list of presets.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Masking, blend modes and groups</strong> — compose layered graphics with proper nesting.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">3D elements in the same timeline</strong> — import GLB, OBJ, FBX or STL models and keyframe them alongside 2D content (Ultra).</span></li>
            </ul>
          </Section>

          <Section id="which-to-use" title="Which To Use">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Cutting footage, adding music, trimming for social</strong> — a video editor such as CapCut.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Animated titles, logos, explainers, UI motion, vector animation</strong> — FlashFX.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Both</strong> — build the graphics in FlashFX, export, and finish the edit in your video editor.</span></li>
            </ul>
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


function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
