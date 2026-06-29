import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'animating-along-a-path', label: 'Animating Along a Path' },
  { id: 'creating-a-motion-path', label: 'Creating a Motion Path' },
  { id: 'animating-along-the-path', label: 'Animating Along the Path' },
  { id: 'orient-to-path', label: 'Orient to Path' },
  { id: 'motion-path-editing', label: 'Motion Path Editing' },
  { id: 'animating-shapes-morph-deform', label: 'Animating Shapes,Morph & Deform' },
  { id: 'vertex-level-animation', label: 'Vertex-Level Animation' },
  { id: 'shape-morph-between-keyframes', label: 'Shape Morph Between Keyframes' },
  { id: 'deformation-tools', label: 'Deformation Tools' },
  { id: 'motion-paths-spatial-interpolation', label: 'Motion Paths & Spatial Interpolation' },
  { id: 'spatial-path-display', label: 'Spatial Path Display' },
  { id: 'spatial-interpolation', label: 'Spatial Interpolation' },
  { id: 'editing-spatial-handles', label: 'Editing Spatial Handles' },
  { id: 'roving-keyframes', label: 'Roving Keyframes on Motion Paths' },
];

export default function Interpolation() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Path Animation, Shape Morph & Motion Paths | FlashFX Documentation"
        description="Complete reference for animating along a path, shape morphing and deformation, and motion paths and spatial interpolation in FlashFX."
        keywords="FlashFX, path animation, shape morph, motion paths, spatial interpolation, deformation, vertex animation"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Animate Mode
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Path Animation & Shape Morphing</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="animating-along-a-path" title="Animating Along a Path">
            <p>Instead of animating Position X and Position Y independently, an element can be constrained to follow a drawn path. This allows complex, curved trajectories to be defined visually rather than through numeric keyframes.</p>
          </Section>

          <Section id="creating-a-motion-path" title="Creating a Motion Path">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select the element to animate</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>In the Properties Panel, under Motion, click <strong className="text-white">Attach to Path</strong></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Either draw a new path directly on the canvas or select an existing path shape to use as the motion path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>The element's position is now driven by its progress along the path (a single value from 0% to 100%)</li>
            </ul>
            <p>The motion path shape is drawn using the Pen tool. Bezier handles on the path control the smoothness and curvature of the trajectory.</p>
          </Section>

          <Section id="animating-along-the-path" title="Animating Along the Path">
            <p>With a motion path attached, the element's position is controlled by a single <strong className="text-white">Path Progress</strong> track in the timeline:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>0% = the start of the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>100% = the end of the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Values below 0% or above 100% extend the element beyond the path ends (extrapolation)</li>
            </ul>
            <p>Keyframe the Path Progress value at the desired times to control the speed and direction of the element along the path. Easing on the Path Progress track controls how the element accelerates and decelerates as it travels.</p>
          </Section>

          <Section id="orient-to-path" title="Orient to Path">
            <p><strong className="text-white">Orient to Path:</strong> When enabled, the element automatically rotates to face the direction the path is heading at its current position. The element's forward axis is aligned to the path tangent.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Rotation Offset:</strong> A fixed rotation value added on top of the path tangent direction,used to compensate when the element's natural "forward" direction doesn\'t match the path direction</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Smoothing:</strong> The orient-to-path rotation can be smoothed over a number of frames to avoid abrupt orientation changes on sharp corners</li>
            </ul>
          </Section>

          <Section id="motion-path-editing" title="Motion Path Editing">
            <p>The motion path can be edited at any time using the Pen tool or node editing tools:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Add or remove path points to refine the trajectory</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Adjust bezier handles to control the curvature of path segments</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The element follows the updated path immediately,no keyframe changes required</li>
            </ul>
            <p><strong className="text-white">Detaching from path:</strong> Click Detach from Path to convert the motion path animation back to independent Position X and Position Y keyframes. The keyframes are calculated by sampling the element's world position at each existing Path Progress keyframe and writing them as explicit position values.</p>
          </Section>

          <Section id="animating-shapes-morph-deform" title="Animating Shapes,Morph & Deform">
            <p>Shape morphing allows the vertex positions of a path to be animated over time, transforming one shape into another. This is one of the most expressive animation capabilities in FlashFX.</p>
          </Section>

          <Section id="vertex-level-animation" title="Vertex-Level Animation">
            <p>When a shape is in <strong className="text-white">Edit Vertices</strong> mode (double-click the shape or press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">V</code>), individual path nodes become selectable and animatable:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>In Record Mode, moving a vertex creates a keyframe for that vertex's position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Each vertex has its own X and Y tracks in the timeline (shown in the shape's expanded track group)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Bezier handles (tangent directions) for each vertex are also individually animatable</li>
            </ul>
          </Section>

          <Section id="shape-morph-between-keyframes" title="Shape Morph Between Keyframes">
            <p>To morph between two distinct shapes:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>At keyframe A, define the shape in its starting state</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Move the playhead to keyframe B</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Enter vertex edit mode and move vertices to their target positions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>FlashFX interpolates all vertex positions between the two keyframes</li>
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-2">Morph Requires Matching Vertex Count</h4>
              <p>Morphing only works cleanly between shapes with the same number of vertices. If the vertex count changes between keyframes, FlashFX will attempt to match vertices by index,which may produce unexpected results. For best results, plan morph animations with a fixed vertex count from the start.</p>
            </div>
          </Section>

          <Section id="deformation-tools" title="Deformation Tools">
            <p>In addition to per-vertex animation, FlashFX provides higher-level deformation tools that modify multiple vertices simultaneously based on a control structure:</p>
            <Table
              headers={['Deformer Type', 'Description']}
              rows={[
                ['Envelope Deformer', 'A bounding box with corner and midpoint handles. Dragging handles proportionally pushes nearby vertices, creating a warp-envelope effect.'],
                ['Lattice Deformer', 'A grid placed over the shape. Grid points are dragged to deform the shape beneath using bilinear interpolation.'],
                ['Bend Deformer', 'A virtual spine runs through the shape. Bending the spine curves the shape along it, like bending a strip of paper.'],
                ['Warp Deformer', 'Freeform push/pull deformation with a circular brush. Pushes nearby vertices in the brush direction.'],
              ]}
            />
            <p>All deformer positions and parameters are animatable.</p>
          </Section>

          <Section id="motion-paths-spatial-interpolation" title="Motion Paths & Spatial Interpolation">
            <p>When an element has Position X and Position Y keyframes, FlashFX visualizes the element's trajectory as a <strong className="text-white">spatial path</strong> on the canvas. This path shows the actual route the element takes through space as it moves between keyframes.</p>
          </Section>

          <Section id="spatial-path-display" title="Spatial Path Display">
            <p>The spatial path appears as a dotted or dashed line connecting the positions at each keyframe. Dots along the path indicate where the element is at each frame,denser dots indicate slower movement; sparser dots indicate faster movement.</p>
            <p>Toggle spatial path display: <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+M</code> or via View {'>'} Show Motion Paths.</p>
          </Section>

          <Section id="spatial-interpolation" title="Spatial Interpolation">
            <p>Spatial interpolation controls the shape of the path in 2D space between keyframes:</p>
            <Table
              headers={['Spatial Mode', 'Description']}
              rows={[
                ['Linear', 'Straight line between keyframe positions. The element travels in a straight trajectory.'],
                ['Auto Bezier', 'FlashFX automatically calculates smooth bezier handles to create a flowing curved path through all position keyframes.'],
                ['Continuous Bezier', 'Handles are auto-calculated but can be manually adjusted. The incoming and outgoing handles remain linked (smooth).'],
                ['Manual Bezier', 'Fully manual bezier handles. Drag the spatial path handles directly on the canvas to adjust the curve shape.'],
                ['Hold', 'No interpolation,the element jumps instantly to each position at each keyframe.'],
              ]}
            />
          </Section>

          <Section id="editing-spatial-handles" title="Editing Spatial Handles">
            <p>When a position keyframe is selected in the timeline and spatial interpolation is set to Manual Bezier:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Bezier handles appear on the canvas at the keyframe position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag the handles to adjust the entry and exit curve of the trajectory at that point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt</code> while dragging a handle to break the link between the incoming and outgoing handles,allowing sharp corners in the trajectory</li>
            </ul>
          </Section>

          <Section id="roving-keyframes" title="Roving Keyframes on Motion Paths">
            <p>Roving keyframes (◇ open diamond type) are specifically designed for motion path animation. A roving keyframe's time position is automatically adjusted by FlashFX to maintain a constant velocity along the path, regardless of how the path curves. This removes the need to manually tune keyframe timing to eliminate speed bumps at corners.</p>
            <p>To use roving keyframes: right-click any intermediate position keyframe on a motion path and select <strong className="text-white">Rove Across Time</strong>. The first and last keyframes of a sequence cannot be set to roving,they anchor the start and end of the motion.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
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
            <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/70 border-b border-white/5">
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
