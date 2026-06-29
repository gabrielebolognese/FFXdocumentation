import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextOverview() {
  return (
    <Layout>
      <SEO
        title="Placing Text & Text Box Modes | FlashFX Documentation"
        description="Learn how to place text, edit content, and configure text box modes in FlashFX."
        keywords="FlashFX, text tool, placing text, text box modes, area text, point text"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Text
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Placing Text</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section title="1.1 The Text Tool">
            <p>Activate the Text tool with <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">T</code> or click the Text tool in the toolbar.</p>
            <p><strong className="text-white">Point Text:</strong> Click once on the canvas to place a text element at a single point. The text box expands horizontally as you type. Point text never wraps automatically,it extends on one line unless you press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Enter</code> for a manual line break.</p>
            <p><strong className="text-white">Area Text:</strong> Click and drag to define a rectangular text frame before typing. Text inside this frame wraps automatically when it reaches the right edge. The frame dimensions are adjustable.</p>
          </Section>

          <Section title="1.2 Entering and Editing Text Content">
            <p>Once the text tool is active and a text element is placed, the cursor appears and you can type immediately. The standard editing controls apply:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Arrow keys move the cursor</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Home</code>
                  {' / '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">End</code>
                  {' jump to the line start/end'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Home</code>
                  {' / '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+End</code>
                  {' jump to the text start/end'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+Arrow</code> selects text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+A</code> selects all text within the element</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+C</code>
                  {' / '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+V</code>
                  {' copies and pastes text'}
                </span>
              </li>
            </ul>
            <p><strong className="text-white">Exiting text editing:</strong> Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Escape</code> or click outside the text element. The element returns to the selection state.</p>
            <p><strong className="text-white">Re-entering text editing:</strong> Double-click the text element to re-enter edit mode.</p>
          </Section>

          <Section title="2.1 Auto Width (Point Text)">
            <p>The text box width expands and contracts as text is added or removed. No wrapping occurs unless Enter is pressed. This mode is appropriate for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Single-word or short-phrase labels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Title text where line breaks are manually controlled</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Text elements that will be animated per-character or per-word</li>
            </ul>
          </Section>

          <Section title="2.2 Auto Height (Fixed Width)">
            <p>The width is fixed by the text box definition. The height expands automatically as content grows. Text wraps when it reaches the right edge. This mode is appropriate for:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Body copy that must fit a column width</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Subtitle and caption text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Multi-paragraph text blocks</li>
            </ul>
            <p>The width is adjustable by dragging the right edge of the bounding box in selection mode.</p>
          </Section>

          <Section title="2.3 Fixed Frame">
            <p>Both width and height are fixed. If text overflows the defined frame, it is clipped. An overflow indicator (a small + symbol at the bottom-right of the frame) appears when the text content is larger than the frame. Text is not automatically scaled down,content that overflows is hidden.</p>
          </Section>

          <Section title="2.4 Converting Between Modes">
            <p>Right-click a text element and select "Text Box Type" to switch between modes at any time. Content is preserved.</p>
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
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
