import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-this-means', label: 'What This Means' },
  { id: 'why-this-matters', label: 'Why This Matters' },
];

export default function RenderingEnvironment() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Browser Rendering Environment | FlashFX Documentation"
        description="How FlashFX renders within the browser using WebGL, Canvas 2D, and what constraints this creates."
        keywords="FlashFX, WebGL, browser rendering, GPU constraints, canvas"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">The Browser Rendering Environment</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX renders entirely within a web browser. This means the rendering pipeline operates within the constraints of web graphics APIs rather than direct GPU access.
          </p>

          <Section id="what-this-means" title="What This Means">
            <p>Unlike desktop applications (After Effects, Cinema 4D, DaVinci Resolve) that communicate directly with the GPU via operating system drivers, FlashFX works through:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span><strong className="text-white">WebGL 2.0</strong> — the primary GPU API for compositing, shader effects, and 3D transforms</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span><strong className="text-white">Canvas 2D API</strong> — used for certain 2D compositing operations not exposed efficiently in WebGL</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span><strong className="text-white">CSS Compositing</strong> — used for UI-level effects but not for canvas content rendering</li>
            </ul>
            <p>This creates a set of fundamental constraints that do not exist in desktop applications:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No direct framebuffer access</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No shared memory between CPU and GPU</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Texture size limits enforced by the browser</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No multi-GPU support</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Shader compilation must occur at runtime within the browser sandbox</li>
            </ul>
          </Section>

          <Section id="why-this-matters" title="Why This Matters">
            <p><strong className="text-white">Memory:</strong> GPU memory (VRAM) allocated to the browser tab is shared with all other browser graphics operations. The browser does not expose a way to query total available VRAM precisely — FlashFX uses heuristics to estimate available memory.</p>
            <p><strong className="text-white">Framebuffer access:</strong> Operations that require reading back pixels from the GPU (certain blend modes, displacement maps, some filter compositing) are significantly more expensive in WebGL than in native applications because the GPU must pause, copy data, and transfer it to accessible memory.</p>
            <p><strong className="text-white">Shader limits:</strong> WebGL imposes maximum sizes on shader programs (the GPU instructions used to compute effects). Very complex filter stacks may exceed these limits and must be broken into multiple rendering passes.</p>
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
