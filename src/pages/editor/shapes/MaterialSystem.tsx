import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'material-stack', label: 'The Material Stack' },
];

export default function MaterialSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="The Material System | FlashFX Documentation"
        description="Learn about the FlashFX material system — the fill and appearance engine for all vector shapes."
        keywords="FlashFX, material system, fill layers, opacity, blend mode"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">The Material System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The material system is the fill and appearance engine for all vector shapes. Rather than a single flat fill color, each shape can have a <strong className="text-white">material stack</strong> — an ordered list of fill layers that are composited together to produce the final surface appearance.
          </p>

          <Section id="material-stack" title="The Material Stack">
            <p>The material stack appears in the Properties Panel under the "Fill" section. It lists all fill layers from top to bottom. The top layer renders on top of layers below it.</p>

            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h4 className="text-base font-semibold text-white mb-3">Managing Fill Layers</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Adding a Fill Layer:</strong> Click the <code className="text-yellow-accent bg-white/5 px-1 rounded">+</code> button in the Fill section.</li>
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Removing a Fill Layer:</strong> Click the <code className="text-yellow-accent bg-white/5 px-1 rounded">×</code> button on any fill layer row.</li>
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reordering Fill Layers:</strong> Drag the grab handle (⠿) on any fill layer row to change its position in the stack.</li>
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Layer Visibility:</strong> Each fill layer has an eye icon that toggles its visibility independently of the others.</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h4 className="text-base font-semibold text-white mb-3">Per-Layer Settings</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Layer Opacity:</strong> Each fill layer has its own opacity slider (0%–100%), controlling how much that layer contributes to the final composited result.</li>
                  <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Layer Blend Mode:</strong> Each fill layer has its own blend mode, controlling how it interacts with the layers below it in the stack.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-3">Compositing Order</h4>
              <p className="text-sm">Layers are composited from bottom to top. The first layer at the bottom of the stack is rendered first, and each subsequent layer composites on top of the previous result using its specified blend mode and opacity. The final composited result represents the shape's entire surface appearance.</p>
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
