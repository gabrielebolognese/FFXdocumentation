import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'non-destructive-crop', label: 'Non-Destructive Crop' },
  { id: 'image-position-within-frame', label: 'Image Position Within Frame' },
  { id: 'vector-mask-clip-path', label: 'Vector Mask (Clip Path)' },
  { id: 'alpha-mask-luminance-mask', label: 'Alpha Mask (Luminance Mask)' },
];

export default function CroppingMaskingPage() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Cropping and Masking | FlashFX Documentation"
        description="Reference for non-destructive crop, vector masks, and alpha masks on images in FlashFX."
        keywords="FlashFX, image crop, vector mask, clip path, alpha mask, luminance mask"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Cropping and Masking</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="non-destructive-crop" title="Non-Destructive Crop">
            <p>The crop tool in FlashFX is non-destructive. The original image data is not modified,cropping only adjusts which portion of the image is visible within the element bounds.</p>
            <p><strong className="text-white">Entering Crop Mode:</strong> Double-click an image element while the Selection tool is active, or click the "Crop" button in the Properties Panel.</p>
            <p>In Crop mode:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A crop frame appears overlaid on the image</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag the crop frame handles to resize the visible region</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag inside the crop frame to pan the image within the frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Dimmed areas outside the crop frame are hidden in the final output</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'Press '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Enter</code>
                  {' or click outside to confirm the crop'}
                </span>
              </li>
            </ul>
            <p><strong className="text-white">Resetting Crop:</strong> Click "Reset Crop" in the Properties Panel to restore the full image.</p>
          </Section>

          <Section id="image-position-within-frame" title="Image Position Within Frame">
            <p>After cropping, the image position within its frame can be adjusted at any time:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  {'In selection mode, hold '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl</code>
                  {' and drag inside the image to pan the content within the cropped frame'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The image can be panned freely,content can be repositioned without changing the crop frame dimensions</li>
            </ul>
          </Section>

          <Section id="vector-mask-clip-path" title="Vector Mask (Clip Path)">
            <p>Apply any vector shape as a mask that clips the image to that shape's outline.</p>
            <p><strong className="text-white">Applying:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Place a vector shape on top of the image in the layer stack</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select both the image and the shape</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Layer -&gt; Create Clip Path</li>
            </ol>
            <p>The image is now clipped to the shape's outline. The clipping shape can still be edited (moved, scaled, vertex-edited) while the clip is active,double-click the clip group to enter it.</p>
            <p><strong className="text-white">Common uses:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Circle/oval image crops (profile photo style)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Custom-shaped image frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Text shape cutouts (text converted to outlines used as clip paths)</li>
            </ul>
          </Section>

          <Section id="alpha-mask-luminance-mask" title="Alpha Mask (Luminance Mask)">
            <p>A gradient or painted mask shape controls the transparency of the image based on luminosity. For images, common uses include:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Gradient fade-out</strong>,a black-to-white gradient mask fades the image to transparency along one edge, blending it with the background</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Soft vignette</strong>,a radial gradient mask (white at center, black at edges) creates a soft vignette effect by fading the image edges to transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shape reveal</strong>,a solid white shape in a black field shows the image only within the shape, with sharp or softly blurred edges depending on whether the mask shape has blur applied</li>
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
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
