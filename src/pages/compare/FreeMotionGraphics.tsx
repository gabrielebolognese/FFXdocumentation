import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'whats-included', label: 'What the Free Plan Includes' },
  { id: 'the-real-limits', label: 'Where the Limits Actually Are' },
  { id: 'what-you-can-make', label: 'What You Can Make With It' },
  { id: 'getting-started', label: 'Getting Started' },
];

export default function FreeMotionGraphics() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Free Motion Graphics Software | FlashFX Documentation"
        description="What you can make with the free FlashFX plan — the full browser editor, unlimited projects and every export format, with no install and no trial period."
        keywords="free motion graphics software, free animation software, browser animation, FlashFX free"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Compare
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Free Motion Graphics Software</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The FlashFX free plan is not a time-limited trial or a feature-crippled demo. It is the full editor with unlimited projects and every export format, in a browser tab. This page sets out exactly what it includes and where the limits actually are.
          </p>

          <Section id="whats-included" title="What the Free Plan Includes">
            <Table
              headers={['Capability', 'Free plan']}
              rows={[
                ['Projects', 'Unlimited'],
                ['Export formats', 'MP4, GIF, WebM, SVG'],
                ['Shape & vector tools', 'Included'],
                ['Text & typography', 'Included'],
                ['Image import & editing', 'Included'],
                ['Animation timeline', 'Included'],
                ['Keyframe system & easing curves', 'Included'],
                ['Groups, layers & masking', 'Included'],
                ['Blend modes & opacity', 'Included'],
                ['Custom fonts', 'Included'],
                ['Cloud storage', '500 MB'],
                ['3D primitives', '2 shapes'],
                ['Version history', '30 days'],
              ]}
            />
            <p>There is no watermark on export and no trial countdown. Projects are unlimited.</p>
          </Section>

          <Section id="the-real-limits" title="Where the Limits Actually Are">
            <p>Three limits are worth knowing before you start, so you are not surprised later:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>**Cloud storage is 500 MB.** Enough for a substantial number of vector projects; image-heavy work will reach it sooner.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>**3D is limited to 2 primitive shapes.** Model import, advanced materials, texture maps, HDRI lighting and 3D timeline animation are Ultra features.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>**AI features are not included.** AI motion graphics, image generation, background removal and the AI assistant require Ultra.</span></li>
            </ul>
            <Callout>Everything in the core 2D animation workflow — shapes, text, images, the timeline, keyframes, easing curves, masking, blend modes, custom fonts and all four export formats — is available at no cost.</Callout>
          </Section>

          <Section id="what-you-can-make" title="What You Can Make With It">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Animated logos and logo stings.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Explainer animations and motion for presentations.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>UI motion and micro-interactions, exported as SVG or WebM for the web.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Social graphics, titles and lower thirds, exported as MP4 or GIF.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Looping animated illustrations.</span></li>
            </ul>
          </Section>

          <Section id="getting-started" title="Getting Started">
            <p>There is nothing to install. The tutorials section covers creating a first project, navigating the canvas, and saving and exporting; the editor documentation goes deeper on the timeline, the keyframe system and the easing graph editor.</p>
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
