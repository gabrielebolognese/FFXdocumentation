import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'accessing-the-generator', label: 'Accessing the Generator' },
  { id: 'writing-effective-prompts', label: 'Writing Effective Prompts' },
  { id: 'generation-settings', label: 'Generation Settings' },
  { id: 'after-generation', label: 'After Generation' },
  { id: 'google-image-search-integration', label: 'Google Image Search Integration' },
];

export default function AIGeneratedImages() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="AI-Generated Images (DALL-E) | FlashFX Documentation"
        description="Reference for the DALL-E image generation integration and Google Image Search in FlashFX."
        keywords="FlashFX, AI images, DALL-E, image generation, prompt writing, Google image search"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">AI-Generated Images (DALL-E)</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="accessing-the-generator" title="Accessing the Generator">
            <p>The DALL-E image generation panel is accessible from:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The AI Features panel (View -&gt; AI Features)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The right-click menu on an empty canvas area: "Generate Image Here"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The Image Import toolbar button's dropdown menu: "Generate with AI"</li>
            </ul>
          </Section>

          <Section id="writing-effective-prompts" title="Writing Effective Prompts">
            <p>The quality of generated images is directly determined by the prompt. Key principles:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Include visual style:</strong> "flat vector illustration," "photorealistic render," "watercolor painting," "3D isometric," "dark cinematic"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Describe lighting:</strong> "dramatic side lighting," "soft diffuse light," "golden hour," "studio white background," "neon lit"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Describe composition:</strong> "centered subject," "wide angle," "close-up portrait," "full frame texture," "overhead view"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Match your canvas context:</strong> Including style descriptors that match your composition (e.g., "dark background, orange and white color palette, motion graphics style") produces images that integrate more naturally</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Be specific, not abstract:</strong> "A geometric abstract shape made of glowing orange triangles on a dark background\" produces a more usable result than \"something interesting"</li>
            </ul>
          </Section>

          <Section id="generation-settings" title="Generation Settings">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Size:</strong> Square (1:1), Landscape (16:9), Portrait (9:16). Choose based on canvas orientation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Quality:</strong> Standard or HD. HD uses more DALL-E tokens per generation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Style:</strong> Natural (photographic) or Vivid (more saturated, dramatic, stylized).</li>
            </ul>
          </Section>

          <Section id="after-generation" title="After Generation">
            <p>The generated image is placed on the canvas as a standard image element. It behaves identically to an imported image in every way — all filters, blend modes, animations, and mask operations apply.</p>
            <p><strong className="text-white">Editing the prompt and regenerating:</strong> The generation prompt is stored with the image element. Right-click the element and select "Regenerate" to open the generator with the previous prompt pre-loaded for refinement.</p>
          </Section>

          <Section id="google-image-search-integration" title="Google Image Search Integration">
            <p>Access via Insert -&gt; Search Images or the Image Import dropdown. A search panel appears:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Enter a search query</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Results are displayed as thumbnails</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Click any result to import it directly onto the canvas</li>
            </ol>
            <p>Imported search images are embedded in the project like any other imported image. Verify the licensing of any search-sourced image before use in published work.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
