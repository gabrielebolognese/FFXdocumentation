import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'creating-groups', label: 'Creating Groups' },
  { id: 'group-properties', label: 'Group Properties' },
  { id: 'group-blend-mode', label: 'Group Blend Mode' },
  { id: 'entering-exiting', label: 'Entering and Exiting Groups' },
  { id: 'nested-groups', label: 'Nested Groups' },
  { id: 'ungrouping', label: 'Ungrouping' },
];

export default function GroupsComposition() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Groups & Nested Composition | FlashFX Documentation"
        description="Learn how to use groups and nested composition in FlashFX for hierarchical animations and complex compositions."
        keywords="FlashFX, groups, nested groups, composition, hierarchy, blend mode"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Groups & Nested Composition</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="creating-groups" title="Creating Groups">
            <p>Select two or more elements and press <Kbd>Ctrl+G</Kbd> (or <strong className="text-white">Layer → Group</strong>). The selected elements are enclosed in a Group container. The group appears as a single layer in the Layer Panel with an expand arrow to reveal its members.</p>
          </Section>

          <Section id="group-properties" title="Group Properties">
            <p>Groups have their own transform properties (position, rotation, scale, opacity) that operate on all members as a unit. Individual member properties are preserved and operate independently of the group transform,they compose.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Transform Composition Example</h4>
              <p className="text-sm">A group containing a circle at position (100, 50) is moved to position (200, 0) at the group level. The circle's actual rendered position is (300, 50),the sum of group and member transforms.</p>
            </div>
          </Section>

          <Section id="group-blend-mode" title="Group Blend Mode">
            <p>A group can have its own blend mode and opacity. When a group has a blend mode other than Normal, the group is composited as a single unit first, then blended with the layers below the group.</p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Pass-through vs. Isolated</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-yellow-accent mt-1">•</span>
                  <div>
                    <strong className="text-white">Pass-through mode:</strong> When a group's blend mode is set to "Pass-through," the group does not composite internally,each member blends directly with the layers below the group as if the group didn't exist. This is the <strong className="text-white">default for groups</strong>.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-accent mt-1">•</span>
                  <div>
                    <strong className="text-white">Isolated mode:</strong> When a group has any blend mode other than Pass-through (including Normal), it is <strong className="text-white">isolated</strong>,members blend only with each other inside the group, not with layers below. The flattened result of the group then blends with lower layers.
                  </div>
                </li>
              </ul>
            </div>
          </Section>

          <Section id="entering-exiting" title="Entering and Exiting Groups">
            <p>To edit elements inside a group without ungrouping:</p>

            <ul className="space-y-2 text-sm mt-4">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Double-click</strong> the group to enter it. The rest of the canvas dims. The Properties Panel and Layer Panel now show only the group's members.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <Kbd>Escape</Kbd> or click outside the group to exit back to the top level.</li>
            </ul>
          </Section>

          <Section id="nested-groups" title="Nested Groups">
            <p>Groups can be nested inside other groups to any depth. This is useful for hierarchical animations,animating a "shoulder" group that contains an "upper arm" group that contains a "forearm" group, each with its own rotation pivot.</p>
          </Section>

          <Section id="ungrouping" title="Ungrouping">
            <p><Kbd>Ctrl+Shift+G</Kbd> dissolves the group. All members return to the parent level (or the parent group if ungrouping a nested group). All individual properties and keyframes are preserved.</p>
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
