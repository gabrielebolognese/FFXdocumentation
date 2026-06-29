import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: 'Overview', id: 'overview' },
  { label: 'Key Features', id: 'key-features' },
];

export default function Editor() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Editor"
        description="Learn about the FlashFX Editor and how to create stunning animations with our intuitive design tools."
        keywords="FlashFX, editor, animation tools, design"
      />

      <div className="space-y-6">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Editor
          </span>
          <h1 className="text-4xl font-semibold text-white mb-4">FlashFX Editor</h1>
        </div>

        <div id="overview" className="scroll-mt-32">
          <p className="text-sm text-white leading-relaxed">
            The FlashFX Editor is a powerful design tool that enables you to create interactive animations
            and experiences. With an intuitive interface and professional-grade features, you can bring your
            creative visions to life.
          </p>
        </div>

        <div id="key-features" className="scroll-mt-32">
          <h2 className="text-3xl font-semibold text-white mb-4">Key Features</h2>

          <div className="space-y-3 text-white text-sm">
            <p>The editor includes powerful tools for animation, design, and interactivity:</p>

            <ul className="space-y-2.5">
              <li className="flex gap-2.5">
                <span className="text-yellow-accent mt-0.5">•</span>
                <span>Vector-based drawing tools with precise control</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-yellow-accent mt-0.5">•</span>
                <span>Timeline animation with keyframes and curves</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-yellow-accent mt-0.5">•</span>
                <span>State machine for complex interactive behaviors</span>
              </li>
              <li className="flex gap-2.5">
                <span className="text-yellow-accent mt-0.5">•</span>
                <span>Real-time preview and testing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
