import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-parent-child-system', label: 'The Parent-Child System' },
  { id: 'null-objects', label: 'Null Objects' },
  { id: 'animation-inheritance', label: 'Animation Inheritance' },
  { id: 'freeze-transform', label: 'Freeze Transform' },
];

export default function ParentingHierarchy() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Parenting and Hierarchy Animation | FlashFX Documentation"
        description="Reference for parent-child animation, null objects, animation inheritance, and freeze transform in FlashFX."
        keywords="FlashFX, parenting, null object, hierarchy animation, freeze transform, animation rig"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Parenting and Hierarchy Animation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-parent-child-system" title="The Parent-Child System">
            <p>Any element can be assigned a <strong className="text-white">parent</strong> element. Once parented, the child's transforms are computed relative to the parent's transforms. When the parent moves, rotates, or scales, the child moves with it automatically.</p>
            <p><strong className="text-white">Setting a parent:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>In the Properties Panel, the "Parent" dropdown lists all elements in the current sequence</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Or: In the Layer Panel, drag the child element onto the parent element (a nesting indicator appears)</li>
            </ul>
            <p><strong className="text-white">Removing a parent:</strong> Set the Parent to "None" in the dropdown.</p>
          </Section>

          <Section id="null-objects" title="Null Objects">
            <p>A <strong className="text-white">Null Object</strong> is an invisible, non-rendering element that exists solely as an animation target for parenting.</p>
            <p>
              {'Creating a Null: Insert -\u003e Null Object or '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+N</code>
            </p>
            <p>Null objects are displayed as a small crosshair on the canvas in design mode but are invisible in export.</p>
            <p><strong className="text-white">Use cases for nulls:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Shared pivot</strong> — parent multiple elements to a null and rotate/scale the null to affect all children from a single control point</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Camera simulation</strong> — parent all scene elements to a null and animate the null's position/scale to simulate a virtual camera moving through the scene</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Rigging anchor</strong> — create complex multi-joint animation rigs without exposing visible pivot geometry</li>
            </ul>
          </Section>

          <Section id="animation-inheritance" title="Animation Inheritance">
            <p>When a parent is animated:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The child's position is interpreted as an offset from the parent's current position at every frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>If the child also has its own position animation, the child moves relative to the parent's moving origin</li>
            </ul>
            <p><strong className="text-white">Example:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Parent null moves from X=0 to X=500 over 60 frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Child circle has its own animation from X=0 to X=100 over 30 frames</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The child's rendered position at frame 60 is (500+100, 0) = (600, 0)</li>
            </ul>
          </Section>

          <Section id="freeze-transform" title="Freeze Transform">
            <p>Freeze Transform bakes the current effect of a parent's transform into the child as local values, then removes the parent relationship.</p>
            <p>Animation -&gt; Freeze Transform</p>
            <p>Use when you want to "lock in" a hierarchical result and then work independently from the parent.</p>
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
