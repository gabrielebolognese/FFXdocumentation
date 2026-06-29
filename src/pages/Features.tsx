import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'Basic Concepts', id: 'basic-concepts' },
];

export default function Features() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Features"
        description="Learn FlashScript and how to add interactivity to your FlashFX animations."
        keywords="FlashFX, scripting, FlashScript, programming, interactivity, features"
      />

      <div className="space-y-6">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Features
          </span>
          <h1 className="text-4xl font-semibold text-white mb-4">FlashScript</h1>
        </div>

        <div id="introduction" className="scroll-mt-32">
          <p className="text-sm text-white leading-relaxed">
            FlashScript allows you to add custom logic and interactivity to your animations. Write code
            that responds to user input, controls animation playback, and creates dynamic experiences.
          </p>
        </div>

        <div id="basic-concepts" className="scroll-mt-32">
          <h2 className="text-3xl font-semibold text-white mb-4">Basic Concepts</h2>

          <div className="space-y-3">
            <p className="text-white text-sm">
              FlashScript is designed to be simple yet powerful. Here are the core concepts:
            </p>

            <div className="bg-navy-elevated border border-navy-border rounded-lg p-4">
              <pre className="text-xs text-white font-mono">
                <code>{`// Example: Simple button interaction
onPress() {
  this.playAnimation("click");
}

onHover() {
  this.playAnimation("hover");
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
