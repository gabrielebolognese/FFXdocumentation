import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { id: 'no-install', label: 'Nothing To Install' },
  { id: 'flashfx-lite', label: 'FlashFX Lite' },
  { id: 'keeping-it-fast', label: 'Keeping Projects Fast' },
];

export default function LightweightEditor() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Lightweight Motion Editor | FlashFX Documentation"
        description="FlashFX runs in a browser tab with nothing to install — and FlashFX Lite goes lighter still for quick edits on modest hardware."
        keywords="lightweight animation software, browser motion editor, no install animation, FlashFX Lite"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Compare
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Lightweight Motion Editor</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Motion graphics tools have a reputation for heavy installs, long startup times and demanding hardware. FlashFX runs in a browser tab, and FlashFX Lite strips things back further for quick work on modest machines.
          </p>

          <Section id="no-install" title="Nothing To Install">
            <p>FlashFX runs entirely in the browser. There is no download, no installer, no licence manager and no per-machine setup. Opening the editor URL is the whole process, and the same projects are available from any machine you sign in on.</p>
            <p>It runs in Chrome, Edge, Firefox, Safari, Brave and Opera. Rendering uses WebGL, so a browser with hardware acceleration enabled will perform noticeably better than one without.</p>
          </Section>

          <Section id="flashfx-lite" title="FlashFX Lite">
            <p>FlashFX Lite is a further-reduced editor for quick edits and simple animations. It keeps the core object types and animation model while dropping the heavier parts of the full editor, which makes it faster to load and lighter to run.</p>
            <p>The Lite documentation covers its interface, the object types it supports, gestures, animation, export, and — importantly — its limitations, so you can tell in advance whether a piece of work fits inside it.</p>
          </Section>

          <Section id="keeping-it-fast" title="Keeping Projects Fast">
            <p>Browser-based rendering has real constraints, and a few habits keep projects responsive:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Keep the working canvas at the size you actually need. A 4K canvas quadruples per-frame rendering cost against 1080p.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Blur and glow effects are among the most expensive per pixel — stack them sparingly.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Large imported images cost memory whether or not they are scaled down on canvas.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Enable hardware acceleration in your browser settings.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Keep the number of simultaneous 3D elements low; each one runs its own renderer.</span></li>
            </ul>
            <p>The GPU constraints section of the editor documentation covers the rendering environment, memory management and profiling in detail.</p>
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



