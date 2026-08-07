import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'model-shows-as-cube', label: 'Imported model shows as a cube' },
  { id: 'missing-textures', label: 'Textures missing on imported GLB' },
  { id: 'shape-disappears', label: 'Shape disappears when deselected' },
  { id: 'gizmo-not-appearing', label: 'Gizmo not appearing on selection' },
  { id: 'canvas-bleeding', label: '3D canvas bleeding outside the canvas boundary' },
  { id: 'escape-not-working', label: 'Escape not closing the shape picker' },
  { id: 'no-3d-tab', label: 'Properties panel not showing the 3D tab' },
  { id: 'performance-drop', label: 'Performance drops with multiple 3D shapes' },
];

export default function Troubleshooting() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="3D Troubleshooting | FlashFX Documentation"
        description="Causes and fixes for the most common FlashFX 3D problems — missing models, absent textures, gizmo issues and performance drops."
        keywords="FlashFX, 3D, troubleshooting, problems, fixes"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">3D Troubleshooting</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Each entry below gives the underlying cause first, because most of these symptoms have a single specific explanation rooted in how the 3D system is built.
          </p>

          <Section id="model-shows-as-cube" title="Imported model shows as a cube">
            <p>**Cause:** The project was saved and reloaded. Imported models carry geometryType: "imported", and restoreScene() skips them because their binary mesh data is not in the snapshot. The fallback in restoreFromConfig() creates a box when it meets an unreconstructable type.</p>
            <p>**Solution:** Re-import the model file after loading the project. The binary data must be present at load time.</p>
          </Section>

          <Section id="missing-textures" title="Textures missing on imported GLB">
            <p>**Cause:** GLB files are self-contained and should include textures. If they appear missing, the model may use features the import pipeline does not support, such as certain KHR extensions. The system does not modify imported materials — it uses whatever the loader produces.</p>
            <p>**Solution:** Verify the textures are actually embedded using a GLTF inspection tool, and re-export from Blender with Pack Resources enabled.</p>
          </Section>

          <Section id="shape-disappears" title="Shape disappears when deselected">
            <p>**Cause:** This was the original bug that motivated the per-shape renderer architecture. With isolated renderers it should no longer occur.</p>
            <p>**Solution:** Verify that setInteracting(false) only disables orbit and marks dirty — it should never call pause() or dispose(). Check that element.visible is not being set to false on deselect.</p>
          </Section>

          <Section id="gizmo-not-appearing" title="Gizmo not appearing on selection">
            <p>**Cause:** The gizmo attaches only when selectObject(id) is called with a valid ID and the mesh exists in the scene manager.</p>
            <p>**Solution:** Ensure the shape is in 3D editing mode, and that the click successfully raycasts to a mesh. The mesh needs geometry with triangles the raycaster can intersect.</p>
          </Section>

          <Section id="canvas-bleeding" title="3D canvas bleeding outside the canvas boundary">
            <p>**Cause:** The host div is missing overflow: hidden.</p>
            <p>**Solution:** ThreeDShapeRenderer sets overflow: hidden on the container, and Canvas.tsx sets it on the outer positioning div. Verify both are present.</p>
          </Section>

          <Section id="escape-not-working" title="Escape not closing the shape picker">
            <p>**Cause:** Another component is capturing the keydown before it reaches the picker listener.</p>
            <p>**Solution:** The picker registers its handler on window with no capture option. Look for stopPropagation() calls in parent components.</p>
          </Section>

          <Section id="no-3d-tab" title="Properties panel not showing the 3D tab">
            <p>**Cause:** The element&apos;s type is not &apos;threed-shape&apos;, or the getThreeDInstance callback is not returning the instance for the selected element.</p>
            <p>**Solution:** Verify the element was created with type: "threed-shape", and that the instance registry maps element IDs to ThreeDShapeElement instances correctly.</p>
          </Section>

          <Section id="performance-drop" title="Performance drops with multiple 3D shapes">
            <p>**Cause:** Each shape runs its own render loop. Even with the dirty flag, several shapes with active orbit damping consume real GPU time.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Minimize the number of simultaneous 3D shapes.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Use pause() for shapes not visible or being edited.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Reduce renderer size for shapes that are small on the canvas.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Lower texture resolution and reduce polygon counts on imported models.</span></li>
            </ul>
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



