import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'render-pipeline-overview', label: 'Render Pipeline Overview' },
  { id: 'draw-calls', label: 'Draw Calls' },
  { id: 'texture-upload', label: 'Texture Upload' },
  { id: 'offscreen-buffers', label: 'Offscreen Buffers' },
];

export default function WebGLArchitecture() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="WebGL Architecture in FlashFX | FlashFX Documentation"
        description="How FlashFX uses WebGL draw calls, batching, texture upload, and offscreen buffers."
        keywords="FlashFX, WebGL, draw calls, batching, texture upload, offscreen buffer"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">WebGL Architecture in FlashFX</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="render-pipeline-overview" title="Render Pipeline Overview">
            <p>FlashFX's rendering pipeline operates in the following stages:</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-white/70 leading-relaxed space-y-1">
              <p>Scene Graph (JavaScript)</p>
              <p className="pl-4">Compositing Plan (determine draw order, blend modes, effects)</p>
              <p className="pl-4">GPU Batching (group elements that share shader programs)</p>
              <p className="pl-4">WebGL Draw Calls (submit geometry and textures to GPU)</p>
              <p className="pl-4">Framebuffer Compositing (blend layers together)</p>
              <p className="pl-4">Canvas Output (display or capture for export)</p>
            </div>
          </Section>

          <Section id="draw-calls" title="Draw Calls">
            <p>Each operation that submits geometry to the GPU is a <strong className="text-white">draw call</strong>. Fewer draw calls means less CPU-GPU communication overhead and faster rendering.</p>
            <p>FlashFX batches elements that share:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The same blend mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>No intervening alpha compositing requirements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Compatible shader programs</li>
            </ul>
            <p><strong className="text-white">Elements that break batching:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Any element with a non-Normal blend mode (requires isolation)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Groups set to Isolated compositing mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Elements with certain filter types (require intermediate offscreen render passes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Transparent elements composited over other transparent elements (order-dependent)</li>
            </ul>
          </Section>

          <Section id="texture-upload" title="Texture Upload">
            <p>When an image is imported or a rasterized text/shape is generated, it is uploaded to GPU memory as a texture. This upload happens:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Once per unique image asset</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>When an asset's content changes (e.g., after a filter parameter changes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>On session start when loading a project with embedded assets</li>
            </ul>
            <p><strong className="text-white">Texture upload is expensive.</strong> Avoid situations where the GPU texture must be invalidated and re-uploaded on every frame (e.g., animating a filter that requires a full re-rasterize of vector content).</p>
          </Section>

          <Section id="offscreen-buffers" title="Offscreen Buffers">
            <p>Certain operations require rendering to an intermediate <strong className="text-white">offscreen framebuffer</strong> before compositing into the final output. Each offscreen buffer consumes GPU memory equal to its dimensions x 4 bytes per pixel.</p>
            <p><strong className="text-white">Operations requiring offscreen buffers:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Non-Normal blend modes (the layer must be isolated before blending)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Blur effects (blur requires a copy of the pre-blur pixels)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Some distortion effects (displacement needs both the target and the map simultaneously)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Groups with isolated compositing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Alpha masks</li>
            </ul>
            <p>A complex composition with many elements using non-Normal blend modes or blur effects may require many simultaneous offscreen buffers. On devices with limited VRAM, this can cause rendering slowdowns, quality reduction, or in extreme cases, a tab crash.</p>
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
