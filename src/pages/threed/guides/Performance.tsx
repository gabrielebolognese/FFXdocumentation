import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'context-limit', label: 'WebGL Context Limit' },
  { id: 'texture-memory', label: 'Texture Memory' },
  { id: 'polygon-budget', label: 'Polygon Budget' },
  { id: 'pixel-ratio', label: 'Pixel Ratio Cap' },
  { id: 'disposal-checklist', label: 'Disposal Checklist' },
];

export default function Performance() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Performance Guide | FlashFX Documentation"
        description="WebGL context limits, texture memory, polygon budgets and the disposal checklist for keeping FlashFX 3D scenes fast."
        keywords="FlashFX, 3D, performance, WebGL, memory, optimization"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Performance Guide</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The dominant performance constraints in the 3D system are the browser WebGL context limit and texture memory — not polygon count. This guide covers both, plus the disposal discipline that keeps them under control.
          </p>

          <Section id="context-limit" title="WebGL Context Limit">
            <p>Browsers enforce a hard limit on simultaneous WebGL contexts, typically 8 to 16. Because each ThreeDShapeElement creates its own renderer and therefore its own context, exceeding the limit causes the oldest context to be silently lost, leaving blank or corrupted viewports.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Always call dispose() when deleting a 3D shape. This is what actually releases the context.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Use pause() and resume() for shapes that go off-screen. Note that pauseLoop() stops rendering but does not release the context — only dispose() does that.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Keep simultaneous 3D shapes under 8 to stay safe across all browsers.</span></li>
            </ul>
          </Section>

          <Section id="texture-memory" title="Texture Memory">
            <p>Texture memory is usually the larger bottleneck compared with polygon count.</p>
            <Table
              headers={['Texture Size', 'Approximate GPU Memory']}
              rows={[
                ['2048 x 2048 RGBA', '~16 MB'],
                ['4096 x 4096 RGBA', '~64 MB'],
              ]}
            />
            <p>Multiple maps on a single material multiply this cost. The texture cache in MaterialSystem avoids loading duplicates across objects.</p>
          </Section>

          <Section id="polygon-budget" title="Polygon Budget">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Simple primitives — a box, or a sphere at 32 segments — are roughly 1K to 2K triangles. No concern.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Imported models above 100K triangles will degrade performance, especially with several shapes on the canvas.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>ThreeDShapePreview creates temporary engines; ensure they are disposed when the picker closes.</span></li>
            </ul>
          </Section>

          <Section id="pixel-ratio" title="Pixel Ratio Cap">
            <CodeBlock>{`this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));`}</CodeBlock>
            <p>On a 3x display, rendering at 3x means nine times the pixels of 1x. The visual difference between 2x and 3x is negligible while the GPU cost is not, so the ratio is capped at 2 for consistent performance across devices.</p>
          </Section>

          <Section id="disposal-checklist" title="Disposal Checklist">
            <Table
              headers={['Resource', 'Call', 'Releases']}
              rows={[
                ['Geometries', 'geometry.dispose()', 'Vertex buffer GPU memory'],
                ['Materials', 'material.dispose()', 'Shader programs'],
                ['Textures', 'texture.dispose()', 'Texture GPU memory'],
                ['Renderer', 'renderer.dispose()', 'The WebGL context'],
              ]}
            />
            <Callout>SceneManager.removeObject() handles geometries and materials automatically by traversing the mesh. Textures must be released separately via disposeTextureByUrl(). The renderer is disposed by ThreeDEngine.dispose().</Callout>
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

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-white/80">
      <code>{children}</code>
    </pre>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-yellow-accent/50 bg-white/[0.03] rounded-r-lg px-4 py-3 text-sm text-white/70">
      {children}
    </div>
  );
}
