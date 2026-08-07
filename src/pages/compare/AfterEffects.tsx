import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'the-short-answer', label: 'The Short Answer' },
  { id: 'how-they-differ', label: 'How They Differ Structurally' },
  { id: 'what-flashfx-does', label: 'What FlashFX Does' },
  { id: 'where-after-effects-leads', label: 'Where After Effects Leads' },
  { id: 'getting-started', label: 'Trying FlashFX' },
];

export default function AfterEffects() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX vs After Effects | FlashFX Documentation"
        description="How FlashFX, a browser-based motion editor, compares with Adobe After Effects — what each is built for, and which one fits your workflow."
        keywords="FlashFX, After Effects, alternative, motion graphics, comparison, browser animation"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Compare
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">FlashFX vs After Effects</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            These are different tools for overlapping jobs. After Effects is the desktop industry standard for motion graphics and visual effects; FlashFX is a browser-based motion editor built for getting animations made and exported quickly. Which one fits depends far more on your workflow than on a feature count.
          </p>

          <Section id="the-short-answer" title="The Short Answer">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Choose FlashFX if</strong> — you want to start animating in a browser tab with nothing to install, you are producing UI motion, social graphics, explainers or web animation, and you value fast iteration over deep compositing.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span><strong className="text-white">Choose After Effects if</strong> — you need heavy VFX compositing, an established plugin ecosystem, or you are working inside a broadcast or film pipeline that already runs on Adobe tooling.</span></li>
            </ul>
            <Callout>Plenty of teams use both: FlashFX for quick web-bound motion work, After Effects when a shot needs deep compositing.</Callout>
          </Section>

          <Section id="how-they-differ" title="How They Differ Structurally">
            <Table
              headers={['', 'FlashFX', 'After Effects']}
              rows={[
                ['Runs in', 'A web browser', 'Installed desktop application (Windows, macOS)'],
                ['Setup', 'Open a URL', 'Download, install, sign in'],
                ['Built primarily for', 'Motion graphics and vector animation', 'Motion graphics and visual effects compositing'],
                ['Licensing model', 'Free tier, paid upgrades', 'Subscription (Adobe Creative Cloud)'],
                ['Collaboration', 'Team workspaces and real-time collaboration on paid tiers', 'Primarily file-based, with Team Projects available'],
              ]}
            />
            <p>The browser-versus-desktop split drives most of the practical differences. FlashFX has no install step and no machine-specific setup, which makes it fast to pick up and easy to use across devices. After Effects, running natively, can lean on local GPU and disk in ways a browser tab does not.</p>
          </Section>

          <Section id="what-flashfx-does" title="What FlashFX Does">
            <p>Everything below is available in the FlashFX editor. Items marked as paid are on the Ultra or Teams plans.</p>
            <Table
              headers={['Capability', 'Availability']}
              rows={[
                ['Shape and vector tools, text, image import', 'All plans'],
                ['Animation timeline with keyframes and easing curves', 'All plans'],
                ['Groups, layers, masking, blend modes', 'All plans'],
                ['Export to MP4, GIF, WebM and SVG', 'All plans'],
                ['3D primitives', '2 shapes free, all shapes on Ultra'],
                ['3D model import (GLB, OBJ, FBX, STL)', 'Ultra'],
                ['PBR, toon and wireframe materials, texture maps, HDRI lighting', 'Ultra'],
                ['3D animation in the timeline', 'Ultra'],
                ['AI motion graphics, image generation, background remover', 'Ultra'],
                ['Team workspace, real-time collaboration, shared assets', 'Teams'],
              ]}
            />
            <p>The animation model will be familiar if you have used After Effects: a timeline, keyframes on individual property tracks, easing curves editable on a graph, and parenting between elements.</p>
          </Section>

          <Section id="where-after-effects-leads" title="Where After Effects Leads">
            <p>It would be dishonest to pretend the comparison is one-sided. After Effects has two decades of ecosystem behind it:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>A large third-party plugin market covering specialised effects and workflows.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Deep compositing tools, including rotoscoping and advanced tracking.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>A large body of tutorials, courses and templates.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Established integration with the rest of the Adobe pipeline.</span></li>
            </ul>
            <p>If your work depends on any of those, After Effects remains the better tool and FlashFX is not trying to replace it.</p>
          </Section>

          <Section id="getting-started" title="Trying FlashFX">
            <p>The free tier covers the full editor with unlimited projects, so evaluating it costs nothing beyond the time. The tutorials section walks through the first project, and the editor documentation covers the timeline, keyframes and export formats in depth.</p>
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
