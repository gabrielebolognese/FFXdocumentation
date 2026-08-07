import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-z-ordering-problem', label: 'The Z-Ordering Problem' },
  { id: 'z-sort-modes', label: 'Z-Sort Modes' },
  { id: 'managing-z-ordering-manually', label: 'Managing Z-Ordering Manually' },
];

export default function ZDepthOrdering() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Z-Depth and Layer Ordering in 3D | FlashFX Documentation"
        description="How FlashFX handles Z-ordering conflicts between 2D layer stacks and 3D depth in compositions."
        keywords="FlashFX, Z-depth, layer ordering, depth sort, painters algorithm, 3D compositing"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">GPU Constraints and 3D</span>
          <h1 className="text-4xl font-bold text-white mb-6">Z-Depth and Layer Ordering in 3D</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-z-ordering-problem" title="The Z-Ordering Problem">
            <p>In a standard 2D composition, Z-order (draw order) is explicit — elements are drawn in the order they appear in the layer stack, with higher layers appearing in front.</p>
            <p>In a 3D composition, elements at different Z-depth positions may need to be drawn in a different order than the layer stack to appear correctly. An element at Z = -100 (far from viewer) should appear behind an element at Z = +100 (close to viewer), regardless of their layer stack position.</p>
          </Section>

          <Section id="z-sort-modes" title="Z-Sort Modes">
            <p><strong className="text-white">Painter's Algorithm (Default):</strong> Elements are drawn in layer stack order regardless of Z-depth. This is compatible with blend modes and is predictable, but can produce incorrect visual ordering when elements at different Z-depths cross the same screen area.</p>
            <p><strong className="text-white">Depth Sort:</strong> FlashFX sorts elements by their camera-space Z depth before drawing. This produces correct visual depth ordering for non-overlapping, non-transparent elements.</p>
            <p><strong className="text-white">Depth Sort Limitations:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Incompatible with most blend modes (breaks batching)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Cannot correctly handle two transparent, overlapping elements at different depths simultaneously (classic painters algorithm problem — there is no mathematically correct solution for overlapping translucent geometry without hardware depth buffering)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>FlashFX does not use WebGL's depth buffer for compositing because it cannot accommodate transparency</li>
            </ul>
          </Section>

          <Section id="managing-z-ordering-manually" title="Managing Z-Ordering Manually">
            <p>For most motion graphics work, manual Z-ordering (using the layer stack) is more reliable than automatic depth sorting:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Design the composition so that elements at greater depth (further away) are lower in the layer stack</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Avoid having transparent elements at different depths overlap the same canvas region simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Use a Null Object hierarchy to group elements by depth tier, then arrange the null groups in the stack</li>
            </ol>
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
