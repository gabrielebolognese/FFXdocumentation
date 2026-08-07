import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'position-size-and-rotation', label: 'Position, Size, and Rotation' },
  { id: 'aspect-ratio-lock', label: 'Aspect Ratio Lock' },
  { id: 'flip', label: 'Flip' },
  { id: 'blend-mode-and-opacity', label: 'Blend Mode and Opacity' },
];

export default function TransformPlacement() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Image Transform and Placement | FlashFX Documentation"
        description="Reference for image transform operations including position, scale, flip, blend modes and opacity in FlashFX."
        keywords="FlashFX, image transform, image placement, flip, blend mode, aspect ratio"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Image Transform and Placement</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Imported images are treated as rectangular elements in the layer stack. They participate fully in the transform system.
          </p>

          <Section id="position-size-and-rotation" title="Position, Size, and Rotation">
            <p>All standard transform operations apply: position (X/Y), width, height, rotation, scale, skew, opacity, and anchor point. These work identically to how they work on vector shapes and groups.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag to reposition on the canvas</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag corner or edge handles to resize</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drag the rotation handle (above the bounding box) to rotate</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All values are numerically editable in the Properties Panel</li>
            </ul>
          </Section>

          <Section id="aspect-ratio-lock" title="Aspect Ratio Lock">
            <p>Images have aspect ratio locking enabled by default. Resizing by dragging a corner handle preserves the width-to-height ratio automatically.</p>
            <p>To disable: click the chain-link icon between the Width and Height fields in the Properties Panel. With locking disabled, width and height can be set independently, stretching or squashing the image.</p>
          </Section>

          <Section id="flip" title="Flip">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Flip Horizontal</strong>
                  {' ('}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+H</code>
                  {') — mirrors the image along the vertical axis'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Flip Vertical</strong>
                  {' ('}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+V</code>
                  {') — mirrors the image along the horizontal axis'}
                </span>
              </li>
            </ul>
            <p>Flipping is implemented as a -100% scale on the corresponding axis and is fully animatable.</p>
          </Section>

          <Section id="blend-mode-and-opacity" title="Blend Mode and Opacity">
            <p>Images support the full blend mode library (all 27 modes). Blend mode is set in the Properties Panel under "Compositing."</p>
            <p>Blend modes on images are particularly useful for:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Multiply</strong> on texture overlays — the texture darkens the content below it</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Screen</strong> on light-colored effects (sparkles, glows) — the dark background of the image disappears, leaving only the bright effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Overlay</strong> on grunge or texture maps — increases contrast and texture simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Luminosity</strong> on color grading images — applies the brightness structure of an image without affecting the hue below</li>
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
