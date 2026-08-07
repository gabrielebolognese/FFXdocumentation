import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'animating-image-properties', label: 'Animating Image Properties' },
  { id: 'ai-generated-images-dall-e', label: 'AI-Generated Images (DALL-E)' },
  { id: 'image-asset-management', label: 'Image Asset Management' },
  { id: 'performance-guidelines-for-images', label: 'Performance Guidelines for Images' },
];

export default function AnimatingImages() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Animating Images, AI Generation & Asset Management | FlashFX Documentation"
        description="Learn how to animate image properties, use AI-generated images (DALL-E), manage image assets, and optimize performance in FlashFX."
        keywords="FlashFX, animate images, DALL-E, AI images, image asset management, performance guidelines"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Images
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Animation, AI & Asset Management</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="animating-image-properties" title="11. Animating Image Properties">
            <p>Images are fully compatible with the animation engine.</p>

            <p><strong className="text-white">11.1 Animatable Properties</strong></p>
            <Table
              headers={['Property', 'Notes']}
              rows={[
                ['Position X / Y', 'Standard position animation'],
                ['Width / Height', 'Size over time; combine with position for scale effects'],
                ['Scale X / Y', 'Uniform or non-uniform scale'],
                ['Rotation', 'Spin, pivot, or subtle tilt animations'],
                ['Opacity', 'Fade in/out'],
                ['Crop Frame', 'Animate the crop position or size (reveal/conceal without moving the image)'],
                ['Blend Mode', 'Switches are discrete (jump cuts); not smoothly interpolated'],
                ['Filter Parameters', 'Any filter value — blur radius, color grade, distortion strength'],
                ['Warp Control Points', 'Individual mesh points of the Warp filter'],
              ]}
            />

            <p><strong className="text-white">11.2 Position and Scale Animation</strong></p>
            <p>Images are commonly animated with:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ken Burns Effect</strong> — slow pan and zoom, achieved by animating position and scale simultaneously with slow ease</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Impact Zoom</strong> — sudden scale increase on a beat, using a short strong Ease Out keyframe</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Parallax</strong> — layered images with different scale/position animation speeds create a depth illusion</li>
            </ul>

            <p><strong className="text-white">11.3 Opacity and Blend Mode Transitions</strong></p>
            <p>Fading an image from transparent to opaque: create a keyframe with Opacity = 0% at the start frame, a keyframe with Opacity = 100% at the desired reveal frame, and set easing to Ease In-Out.</p>
            <p>Blend mode transitions are not smoothly interpolated — the mode switches instantaneously at the keyframe. To simulate a blend mode fade, animate the image opacity from 0 to 100% while the blend mode is already set.</p>
          </Section>

          <Section id="ai-generated-images-dall-e" title="12. AI-Generated Images (DALL-E)">
            <p><strong className="text-white">12.1 Accessing the Generator</strong></p>
            <p>The DALL-E image generation panel is accessible from:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The AI Features panel (View → AI Features)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The right-click menu on an empty canvas area: "Generate Image Here"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The Image Import toolbar button's dropdown menu: "Generate with AI"</li>
            </ul>

            <p><strong className="text-white">12.2 Writing Effective Prompts</strong></p>
            <p>The quality of generated images is directly determined by the prompt. Principles:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Include visual style:</strong> "flat vector illustration," "photorealistic render," "watercolor painting," "3D isometric," "dark cinematic."</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Describe lighting:</strong> "dramatic side lighting," "soft diffuse light," "golden hour," "studio white background," "neon lit."</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Describe composition:</strong> "centered subject," "wide angle," "close-up portrait," "full frame texture," "overhead view."</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Match your canvas context:</strong> Including style descriptors that match your composition produces images that integrate more naturally.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Be specific, not abstract:</strong> "A geometric abstract shape made of glowing orange triangles on a dark background\" produces a more usable result than \"something interesting."</li>
            </ul>

            <p><strong className="text-white">12.3 Generation Settings</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Size:</strong> Square (1:1), Landscape (16:9), Portrait (9:16). Choose based on canvas orientation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Quality:</strong> Standard, HD. HD uses more DALL-E tokens per generation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Style:</strong> Natural (photographic) or Vivid (more saturated, dramatic, stylized).</li>
            </ul>

            <p><strong className="text-white">12.4 After Generation</strong></p>
            <p>The generated image is placed on the canvas as a standard image element. It behaves identically to an imported image in every way — all filters, blend modes, animations, and mask operations apply.</p>
            <p><strong className="text-white">Editing the prompt and regenerating:</strong> The generation prompt is stored with the image element. Right-click the element and select "Regenerate" to open the generator with the previous prompt pre-loaded for refinement.</p>

            <p><strong className="text-white">12.5 Google Image Search Integration</strong></p>
            <p>Access via Insert → Search Images or the Image Import dropdown. Enter a search query, results display as thumbnails, click any result to import it directly onto the canvas. Imported search images are embedded in the project like any other imported image. Verify the licensing of any search-sourced image before use in published work.</p>
          </Section>

          <Section id="image-asset-management" title="13. Image Asset Management">
            <p><strong className="text-white">13.1 The Asset Library</strong></p>
            <p>All images currently used in the project are accessible in the Asset Library panel (View → Asset Library or <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">A</code>). The library displays thumbnail previews of all imported images, file format and dimensions, and the number of canvas instances (how many times each image is used).</p>

            <p><strong className="text-white">13.2 Replacing an Image</strong></p>
            <p>To replace an image asset while preserving all existing placement, crop, and animation settings on the canvas:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>In the Asset Library, right-click the image thumbnail</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select "Replace Asset"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Choose a replacement image file</li>
            </ol>
            <p>All canvas instances of the original image are updated simultaneously. Animation keyframes and filter settings are preserved.</p>

            <p><strong className="text-white">13.3 Embedding vs. Linking</strong></p>
            <p>By default, all imported images are <strong className="text-white">embedded</strong> in the .flashfx project file. The project is self-contained and portable.</p>
            <p><strong className="text-white">Linking</strong> (planned feature): Link an image asset by file path rather than embedding it. Changes to the source file on disk are reflected in the project. Suitable for large assets in production workflows where file size management is critical.</p>

            <p><strong className="text-white">13.4 Removing Unused Assets</strong></p>
            <p>File → Remove Unused Assets — scans the project and removes any images in the Asset Library that are not referenced on any canvas. Reduces .flashfx file size.</p>
          </Section>

          <Section id="performance-guidelines-for-images" title="14. Performance Guidelines for Images">
            <p><strong className="text-white">14.1 Image Resolution</strong></p>
            <p>Match source resolution to canvas usage:</p>
            <Table
              headers={['Canvas Usage Size', 'Recommended Source Resolution']}
              rows={[
                ['Full 4K canvas background', 'Up to 3840 x 2160'],
                ['Full HD canvas background', 'Up to 1920 x 1080'],
                ['Half-canvas element', '~960 x 540'],
                ['Small icon or decoration', '~256 x 256'],
                ['Tiny element (<100px wide)', '~200 x 200'],
              ]}
            />
            <p>Images larger than necessary for their canvas role consume memory without contributing visible quality.</p>

            <p><strong className="text-white">14.2 Format Choice</strong></p>
            <Table
              headers={['Format', 'Best Use']}
              rows={[
                ['WebP', 'Recommended for all images. Best size/quality ratio.'],
                ['PNG', 'Required only when lossless quality or alpha transparency is critical'],
                ['JPEG', 'Acceptable for photographic images without transparency requirements'],
              ]}
            />

            <p><strong className="text-white">14.3 Images in Animation</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Animating position and rotation on images is low-cost.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Animating blur radius, warp mesh points, or distortion effects is high-cost. Each animated frame requires a full filter recalculation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>For animations with multiple simultaneous image elements, disable filter stacks on non-hero images during editing preview — use the filter visibility toggle, and re-enable before export.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Consider working at 720p canvas resolution during animation authoring and scaling up to 1080p or 4K at export.</li>
            </ul>
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
