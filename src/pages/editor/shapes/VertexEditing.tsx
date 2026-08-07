import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'accessing-vertex-edit', label: 'Accessing Vertex Edit Mode' },
  { id: 'selecting-vertices', label: 'Selecting Vertices' },
  { id: 'moving-vertices', label: 'Moving Vertices' },
  { id: 'adding-removing', label: 'Adding & Removing Vertices' },
  { id: 'handle-editing', label: 'Handle Editing' },
  { id: 'path-operations', label: 'Path Operations on Vertices' },
];

export default function VertexEditing() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Vertex & Path Editing | FlashFX Documentation"
        description="Learn how to edit vertices and paths in FlashFX — selecting, moving, adding and removing vertices, and editing bezier handles."
        keywords="FlashFX, vertex editing, path editing, bezier handles, anchor points"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Vertex & Path Editing</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="accessing-vertex-edit" title="Accessing Vertex Edit Mode">
            <p>Double-click any vector shape (rectangle, ellipse, star, or custom path) to enter Vertex Edit mode. The selection changes from a bounding box to a point-level view showing all vertices.</p>

            <div className="bg-yellow-accent/10 border border-yellow-accent/20 rounded-lg p-4 mt-4">
              <p className="text-sm text-yellow-accent/90"><strong className="text-yellow-accent">Warning:</strong> For primitives (rectangle, ellipse, star), entering Vertex Edit mode converts the parametric shape into a raw path. This is a <strong className="text-yellow-accent">destructive operation</strong> — corner radius, arc angles, and star parameters are lost and replaced by explicit anchor points. A confirmation dialog warns before the conversion.</p>
            </div>
          </Section>

          <Section id="selecting-vertices" title="Selecting Vertices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click a single vertex to select it</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click and drag in empty space to marquee-select multiple vertices</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><Kbd>Shift</Kbd>+click to add or remove individual vertices from the selection</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><Kbd>Ctrl+A</Kbd> in Vertex Edit mode to select all vertices</li>
            </ul>
          </Section>

          <Section id="moving-vertices" title="Moving Vertices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag selected vertices to move them freely</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use arrow keys for 1px precision nudging</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><Kbd>Shift</Kbd>+arrow for 10px nudging</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <Kbd>Shift</Kbd> while dragging to constrain movement to the horizontal or vertical axis</li>
            </ul>
          </Section>

          <Section id="adding-removing" title="Adding & Removing Vertices">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h4 className="text-base font-semibold text-white mb-3">Adding Vertices</h4>
              <p>Click anywhere on a path segment (between two existing vertices) to insert a new vertex at that point. The new vertex is a smooth point that does not alter the shape — it preserves the existing curve.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Removing Vertices</h4>
              <p>Select a vertex and press <Kbd>Delete</Kbd>. The path segment between the deleted vertex's neighbors is smoothly reconnected.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Simplify Path</h4>
              <p>A path simplification function reduces the total vertex count while preserving the visual appearance as closely as possible. Accessed via <strong className="text-white">Path → Simplify</strong>. A tolerance slider controls how aggressively vertices are removed.</p>
            </div>
          </Section>

          <Section id="handle-editing" title="Handle Editing">
            <p>With a smooth vertex selected, its bezier handles appear. Drag either handle to modify the curve.</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Mirror Handles:</strong> Hold <Kbd>Alt</Kbd> while dragging a handle to break the mirror relationship, converting to an Asymmetric point.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Retract Handle:</strong> Double-click a handle to retract it (set length to zero), effectively converting the smooth vertex to a corner vertex.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Extend Handle:</strong> <Kbd>Alt</Kbd>+drag from an anchor point that has no handle to extend a handle and convert from corner to smooth.</li>
            </ul>
          </Section>

          <Section id="path-operations" title="Path Operations on Vertices">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <h4 className="text-base font-semibold text-white mb-3">Break Path at Point</h4>
              <p>Select a vertex on a closed path and use <strong className="text-white">Path → Break at Point</strong> to open the path at that vertex. The path remains otherwise intact but is no longer closed.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Join Open Endpoints</h4>
              <p>Select the two endpoints of an open path and use <strong className="text-white">Path → Join Points</strong> to connect them with a straight segment, closing the path.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Align Handles</h4>
              <p>With multiple smooth vertices selected, <strong className="text-white">Path → Align Handles → Horizontal / Vertical</strong> rotates all selected handles to align with a common axis.</p>
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
