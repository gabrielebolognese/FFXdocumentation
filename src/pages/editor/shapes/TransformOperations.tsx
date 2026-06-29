import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'transform-origin', label: 'The Transform Origin' },
  { id: 'position', label: 'Position' },
  { id: 'dimensions', label: 'Dimensions (Width & Height)' },
  { id: 'rotation', label: 'Rotation' },
  { id: 'scale', label: 'Scale' },
  { id: 'skew', label: 'Skew' },
  { id: 'opacity', label: 'Opacity' },
];

export default function TransformOperations() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Transform Operations | FlashFX Documentation"
        description="Learn how to use transform operations in FlashFX,position, rotation, scale, skew, and opacity."
        keywords="FlashFX, transform, position, rotation, scale, skew, opacity"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Transform Operations</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Transforms change the position, size, rotation, or skew of an element. All transforms are applied relative to the element's <strong className="text-white">anchor point</strong> (also called the transform origin).
          </p>

          <Section id="transform-origin" title="The Transform Origin (Anchor Point)">
            <p>The anchor point is the pivot for all rotation and scale operations. By default it is at the geometric center of the element.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Moving the Anchor Point</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>In the Properties Panel, the anchor point is represented by a 3×3 grid of nine possible positions. Click any position to snap the anchor there.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>For custom positions: enable "Custom Anchor" in the Properties Panel and enter X/Y offsets from the element's center</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>In Path Edit mode, the anchor point appears as a crosshair and can be dragged to any position, including outside the element's bounds</li>
              </ul>
            </div>

            <div className="bg-yellow-accent/10 border border-yellow-accent/20 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-accent/90"><strong className="text-yellow-accent">Animation Note:</strong> Changing the anchor point after animation has been set will affect how rotation and scale animations behave. Always set the anchor point before keyframing rotational or scale animation.</p>
            </div>
          </Section>

          <Section id="position" title="Position">
            <p>Position is the X/Y coordinate of the element's anchor point relative to the canvas origin (top-left = 0,0).</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">X</strong>,horizontal position (positive = right)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Y</strong>,vertical position (positive = down, following screen coordinate convention)</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Input Methods</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Numeric Input:</strong> Click the X or Y field in the Properties Panel and type a value. Press <Kbd>Tab</Kbd> to move to the next field; press <Kbd>Enter</Kbd> to confirm.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Relative Input:</strong> Prefix a value with <Kbd>+</Kbd> or <Kbd>-</Kbd> to enter a relative change. Example: typing <code className="text-yellow-accent bg-white/5 px-1 rounded">+50</code> in the X field moves the element 50px to the right.</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Nudging:</strong> Arrow keys move selected element(s) by 1px. <Kbd>Shift</Kbd>+Arrow moves by 10px.</li>
              </ul>
            </div>
          </Section>

          <Section id="dimensions" title="Dimensions (Width & Height)">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Free Resize:</strong> Drag any of the eight resize handles at the corners and edges of the selection bounding box.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Proportional Resize:</strong> Hold <Kbd>Shift</Kbd> while dragging a corner handle to maintain the aspect ratio.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Resize from Center:</strong> Hold <Kbd>Alt</Kbd> while dragging a handle to resize symmetrically from the anchor point.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Numeric Input:</strong> Enter exact values in the W (width) and H (height) fields in the Properties Panel.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Aspect Ratio Lock:</strong> The chain-link icon between W and H locks proportional scaling when numeric values are entered.</li>
            </ul>
          </Section>

          <Section id="rotation" title="Rotation">
            <p>Rotation is applied around the element's anchor point in degrees.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Free Rotation:</strong> Hover outside the selection bounding box until the rotation cursor appears, then click and drag.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Constrained Rotation:</strong> Hold <Kbd>Shift</Kbd> while rotating to snap to 15° increments.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Numeric Input:</strong> Positive values rotate clockwise; negative values rotate counter-clockwise. Values above 360° or below -360° are accepted (relevant for multi-rotation animations).</li>
            </ul>
          </Section>

          <Section id="scale" title="Scale">
            <p>Scale transforms the element proportionally or non-proportionally.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Scale X / Scale Y:</strong> Independent horizontal and vertical scale values, expressed as percentages (100% = original size).</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Non-Uniform Scale:</strong> Changing X and Y scale independently stretches or compresses the element along one axis,useful for squash-and-stretch animation effects.</li>
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Negative Scale (Flip)</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Scale X = -100% mirrors the element horizontally</li>
                <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Scale Y = -100% mirrors the element vertically</li>
              </ul>
              <p className="mt-2 text-xs">This is equivalent to the Flip Horizontal / Flip Vertical commands.</p>
            </div>
          </Section>

          <Section id="skew" title="Skew">
            <p>Skew applies a shear transformation along the X or Y axis, creating a parallelogram-like distortion.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Skew X</strong>,shears horizontally. Positive values lean the element to the right at the top.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Skew Y</strong>,shears vertically. Positive values lean the element downward on the left side.</li>
            </ul>

            <p className="mt-3 text-sm">Skew is expressed in degrees. Range: -85° to 85°.</p>
          </Section>

          <Section id="opacity" title="Opacity">
            <p>The element-level opacity setting controls the overall transparency of the entire element,all fill layers, stroke, and shadow composited together,before the element is blended with the layers below.</p>

            <p className="mt-3">Range: 0% (completely transparent) to 100% (fully opaque).</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-2">Important Distinction</h4>
              <p className="text-sm">Element opacity is distinct from fill layer opacity (which controls only that fill layer) and from blend mode (which controls how the element interacts with what is beneath it).</p>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">{children}</code>
  );
}
