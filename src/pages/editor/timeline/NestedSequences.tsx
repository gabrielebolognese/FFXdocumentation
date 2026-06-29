import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-is-nesting', label: 'What is Nesting' },
  { id: 'creating-a-nested-sequence-pre-compose', label: 'Creating a Nested Sequence (Pre-compose)' },
  { id: 'why-nest', label: 'Why Nest?' },
  { id: 'entering-a-nested-sequence', label: 'Entering a Nested Sequence' },
  { id: 'live-updates', label: 'Live Updates' },
];

export default function NestedSequences() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Nested Sequences | FlashFX Documentation"
        description="How to create nested sequences (pre-compositions), why to nest, and navigating nested hierarchies in FlashFX."
        keywords="FlashFX, nested sequences, pre-compose, pre-comp, nesting, composition hierarchy"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Nested Sequences</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="what-is-nesting" title="What is Nesting">
            <p>Nesting means placing one sequence inside another as a single element. The inner sequence (the <strong className="text-white">pre-composition</strong>) renders as a flat image frame-by-frame, and that rendered output is treated as a single element in the outer composition,transformable, maskable, filterable, and animatable like any other element.</p>
          </Section>

          <Section id="creating-a-nested-sequence-pre-compose" title="Creating a Nested Sequence (Pre-compose)">
            <p><strong className="text-white">Method 1:</strong> Right-click one or more elements in the layer stack -&gt; "Pre-compose." The selected elements are moved into a new, automatically created sequence, and a reference to that sequence is placed at the same position in the original layer stack.</p>
            <p><strong className="text-white">Method 2:</strong> In the Compositor, drag a sequence onto the canvas of another sequence. A nested sequence element appears.</p>
          </Section>

          <Section id="why-nest" title="Why Nest?">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Simplify complex layer stacks</strong>,group a multi-element sub-composition into one manageable nested entity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Apply effects to multiple elements as a unit</strong>,add a blur or blend mode to the pre-comp and it affects all its contents as a composited whole</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Reuse sub-compositions</strong>,the same pre-comp can be placed multiple times in different contexts</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Apply time remap to a group</strong>,time remapping can be applied to the nested sequence as a whole</li>
            </ul>
          </Section>

          <Section id="entering-a-nested-sequence" title="Entering a Nested Sequence">
            <p>Double-click the nested sequence element on the canvas or in the layer stack. The editor switches context to the inner sequence's timeline and canvas.</p>
            <p>The breadcrumb navigation bar at the top of the canvas area shows the nesting path, for example:</p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-white/70">
              Main Sequence &gt; Background Elements &gt; Background Gradient
            </div>
            <p>Click any breadcrumb to navigate back up the nesting hierarchy.</p>
          </Section>

          <Section id="live-updates" title="Live Updates">
            <p>Changes made inside a nested sequence are reflected immediately in all compositions that reference it. The rendered pre-comp is regenerated whenever the inner sequence's content changes.</p>
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
