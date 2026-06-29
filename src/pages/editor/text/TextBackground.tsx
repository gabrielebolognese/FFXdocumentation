import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextBackground() {
  return (
    <Layout>
      <SEO
        title="Text Background and Highlight | FlashFX Documentation"
        description="Reference for per-character backgrounds and full text block backgrounds in FlashFX."
        keywords="FlashFX, text background, text highlight, per-character background, caption styling"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Background and Highlight</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <Section title="Per-Character Background">
            <p>A text background applies a filled rectangle behind the text content. When the animation granularity is set to Character or Word mode, backgrounds can be applied per unit:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Each character or word can have its own background rectangle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The background rectangle can have padding (horizontal and vertical expansion beyond the character bounds)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Background corner radius can be set to round the per-character backgrounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Background color, opacity, and blend mode are configurable</li>
            </ul>
            <p>This feature enables highlight text effects,colored boxes behind individual words or characters,which are common in social media caption animations and subtitle styling.</p>
          </Section>
          <Section title="Full Text Block Background">
            <p>An alternative mode applies a single background rectangle behind the entire text block (the combined bounding box of all text). Configured via the Text Background toggle in the Properties Panel.</p>
          </Section>
          <Section title="Background Padding and Rounding">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Horizontal Padding</strong>,expands the background left and right beyond character bounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Vertical Padding</strong>,expands the background above and below character bounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Corner Radius</strong>,rounds the corners of the background rectangle</li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
