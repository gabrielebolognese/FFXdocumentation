import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'vram-budget', label: 'VRAM Budget' },
  { id: 'texture-memory-usage', label: 'Texture Memory Usage' },
  { id: 'texture-compression', label: 'Texture Compression' },
  { id: 'texture-eviction', label: 'Texture Eviction' },
];

export default function MemoryManagement() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="GPU Memory Management | FlashFX Documentation"
        description="VRAM budget, texture memory, compressed texture formats, and texture eviction in FlashFX."
        keywords="FlashFX, VRAM, GPU memory, texture compression, texture eviction"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">GPU Memory Management</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="vram-budget" title="VRAM Budget">
            <p>FlashFX estimates an available VRAM budget based on:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>GPU tier detection (see GPU Tier Detection section)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Canvas dimensions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Browser-reported device memory hints</li>
            </ul>
            <p>The VRAM budget is shown in the Performance panel (View -&gt; Performance).</p>
          </Section>

          <Section id="texture-memory-usage" title="Texture Memory Usage">
            <p>Every image and rasterized element occupies GPU texture memory. Images are stored in GPU memory at their pixel dimensions regardless of how small they appear on canvas.</p>
            <Table
              headers={['Image Size', 'Uncompressed GPU Texture Memory']}
              rows={[
                ['512 x 512', '~1 MB'],
                ['1920 x 1080', '~8 MB'],
                ['3840 x 2160', '~32 MB'],
                ['8192 x 8192', '~256 MB'],
              ]}
            />
          </Section>

          <Section id="texture-compression" title="Texture Compression">
            <p>FlashFX uses <strong className="text-white">compressed texture formats</strong> where supported by the device's GPU:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">BC (DXT) compression</strong>,supported on all desktop GPUs; reduces texture size by approximately 75%</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">ETC2 compression</strong>,supported on mobile GPUs and some desktop GPUs</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">ASTC compression</strong>,supported on modern mobile and Apple Silicon GPUs; best quality/size ratio</li>
            </ul>
            <p>When a compressed format is available, FlashFX uploads textures in compressed form, significantly reducing VRAM usage and texture transfer time. The compression happens during the import/upload process and may take a brief moment for large images.</p>
          </Section>

          <Section id="texture-eviction" title="Texture Eviction">
            <p>When VRAM usage approaches the budget limit, FlashFX evicts the least recently used textures from GPU memory. Evicted textures must be re-uploaded from CPU memory when they are next needed, causing a brief rendering stutter.</p>
            <p><strong className="text-white">Signs of texture eviction:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Momentary white flashes on image elements during playback</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Stuttering during scrubbing through a composition with many images</li>
            </ul>
            <p><strong className="text-white">Solutions:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Reduce image source resolution before import</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Reduce the number of simultaneously active large images</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Upgrade to a device with more VRAM</li>
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
