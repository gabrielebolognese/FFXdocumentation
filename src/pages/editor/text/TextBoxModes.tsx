import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextBoxModes() {
  return (
    <Layout>
      <SEO
        title="Text Box Modes | FlashFX Documentation"
        description="Learn about Auto Width, Auto Height, and Fixed Frame text box modes in FlashFX."
        keywords="FlashFX, text box modes, auto width, auto height, fixed frame, point text, area text"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Box Modes</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <Section title="Auto Width (Point Text)">
            <p>The text box width expands and contracts as text is added or removed. No wrapping occurs unless Enter is pressed. This mode is appropriate for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Single-word or short-phrase labels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Title text where line breaks are manually controlled</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Text elements that will be animated per-character or per-word</li>
            </ul>
          </Section>
          <Section title="Auto Height (Fixed Width)">
            <p>The width is fixed by the text box definition. The height expands automatically as content grows. Text wraps when it reaches the right edge. This mode is appropriate for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Body copy that must fit a column width</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Subtitle and caption text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Multi-paragraph text blocks</li>
            </ul>
            <p>The width is adjustable by dragging the right edge of the bounding box in selection mode.</p>
          </Section>
          <Section title="Fixed Frame">
            <p>Both width and height are fixed. If text overflows the defined frame, it is clipped. An overflow indicator (a small plus symbol at the bottom-right of the frame) appears when the text content is larger than the frame. Text is not automatically scaled down,content that overflows is hidden.</p>
          </Section>
          <Section title="Converting Between Modes">
            <p>Right-click a text element and select "Text Box Type" to switch between modes at any time. Content is preserved across conversions.</p>
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
