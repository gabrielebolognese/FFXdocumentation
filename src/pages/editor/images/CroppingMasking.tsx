import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'cropping-masking', label: 'Cropping & Masking' },
  { id: 'image-fill-mode', label: 'Image Fill Mode' },
];

export default function CroppingMasking() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Cropping, Masking & Image Fill Mode | FlashFX Documentation"
        description="Learn how to crop, mask, and use images as shape fills in FlashFX."
        keywords="FlashFX, crop image, vector mask, alpha mask, image fill, image fill mode"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Images
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Cropping, Masking & Image Fill</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="cropping-masking" title="3. Cropping & Masking">
            <p><strong className="text-white">3.1 Non-Destructive Crop</strong></p>
            <p>The crop tool in FlashFX is non-destructive. The original image data is not modified,cropping only adjusts which portion of the image is displayed within the element's visible bounds.</p>
            <p><strong className="text-white">Entering Crop Mode:</strong> Double-click an image element while the Selection tool is active, or click the "Crop" button in the Properties Panel.</p>
            <p>In Crop mode:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>A crop frame appears overlaid on the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag the crop frame handles to resize the visible region</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag inside the crop frame to pan the image within the frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The dimmed areas outside the crop frame are hidden in the final output</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Enter</code> or click outside to confirm the crop</li>
            </ul>
            <p><strong className="text-white">Resetting Crop:</strong> Click "Reset Crop" in the Properties Panel to restore the full image.</p>

            <p><strong className="text-white">3.2 Image Position Within Frame</strong></p>
            <p>After cropping, the image position within its frame can be adjusted at any time:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>In selection mode, hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl</code> and drag inside the image to pan the content within the cropped frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The image can be panned freely,content can be repositioned without changing the crop frame dimensions</li>
            </ul>

            <p><strong className="text-white">3.3 Vector Mask (Clip Path)</strong></p>
            <p>Apply any vector shape as a mask that clips the image to that shape's outline.</p>
            <p><strong className="text-white">Applying:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Place a vector shape on top of the image in the layer stack</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select both the image and the shape</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Layer → Create Clip Path</li>
            </ol>
            <p>The image is now clipped to the shape's outline. The clipping shape can still be edited (moved, scaled, vertex-edited) while the clip is active,double-click the clip group to enter it.</p>
            <p><strong className="text-white">Common uses:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Circle/oval image crops (profile photo style)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Custom-shaped image frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Text shape cutouts (text converted to outlines used as clip paths)</li>
            </ul>

            <p><strong className="text-white">3.4 Alpha Mask (Luminance Mask)</strong></p>
            <p>A gradient or painted mask shape controls the transparency of the image based on luminosity. See Document 02, Section 11.3 for the full alpha mask workflow.</p>
            <p>For images, common uses include:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Gradient fade-out</strong>,a black-to-white gradient mask fades the image to transparency along one edge, blending it with the background</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Soft vignette</strong>,a radial gradient mask (white at center, black at edges) creates a soft vignette effect by fading the image edges to transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Shape reveal</strong>,a solid white shape in a black field shows the image only within the shape, with sharp or softly blurred edges depending on whether the mask shape has blur applied</li>
            </ul>
          </Section>

          <Section id="image-fill-mode" title="4. Image Fill Mode">
            <p>Images can be used as fill content for vector shapes,instead of displaying as their own rectangular frame, the image data fills the interior of any shape.</p>

            <p><strong className="text-white">4.1 Setting an Image as Shape Fill</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select a vector shape</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>In the Fill section of the Properties Panel, add a new fill layer</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Change the fill type to "Image Fill"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Choose an imported image from the project's asset library</li>
            </ol>
            <p>The image fills the interior of the shape, clipped to the shape's path.</p>

            <p><strong className="text-white">4.2 Image Fill Sizing Modes</strong></p>
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Fill', 'Scales the image uniformly until it covers the full shape bounds, cropping the excess'],
                ['Fit', 'Scales the image uniformly to fit entirely within the shape bounds; may show the shape fill beneath for uncovered areas'],
                ['Stretch', 'Stretches the image to exactly match the shape dimensions (may distort)'],
                ['Tile', 'Repeats the image in a grid to fill the shape'],
                ['Original', 'Displays the image at its natural size within the shape'],
              ]}
            />

            <p><strong className="text-white">4.3 Image Fill Position</strong></p>
            <p>When the sizing mode leaves control over position (Fill, Fit, Original, Tile), the image can be positioned within the shape:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Alignment grid</strong>,nine-position grid (like a 3x3 tic-tac-toe of anchor positions)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Custom offset</strong>,manual X/Y offset from the shape center</li>
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
