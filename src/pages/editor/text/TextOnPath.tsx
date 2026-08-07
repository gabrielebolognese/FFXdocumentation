import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextOnPath() {
  return (
    <Layout>
      <SEO
        title="Text on a Path | FlashFX Documentation"
        description="Learn how to place text along a vector path in FlashFX."
        keywords="FlashFX, text on path, path text, path offset, text curve"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text on a Path</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text can be placed along the edge of any vector path, following the curve of the path.
          </p>
          <Section title="Creating Text on a Path">
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Draw any vector path (open or closed)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select both the text element and the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Text -&gt; Place on Path</li>
            </ol>
            <p>The text flows along the path starting from the path's first anchor point.</p>
            <p><strong className="text-white">Alternatively:</strong> With the Text tool active, hover over an existing path until the cursor shows a path indicator, then click to begin typing directly on the path.</p>
          </Section>
          <Section title="Path Text Controls">
            <p><strong className="text-white">Path Offset:</strong> Moves the text's start point along the path. Dragging the offset control slides the text forward or backward along the path. Animating the offset creates a text-crawling-along-a-path effect.</p>
            <p><strong className="text-white">Side of Path:</strong> Text can be placed on the top (outside) or bottom (inside) of the path curve. For a circular path:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Top side = text reads along the top arc (like the top of a badge or seal)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Bottom side = text reads along the bottom arc (like the bottom of a badge, inverted)</li>
            </ul>
            <p><strong className="text-white">Flip:</strong> Mirrors the text to the opposite side of the path and reverses the reading direction.</p>
            <p><strong className="text-white">Path Spacing:</strong> Adjusts the letter spacing specifically for path-bound text. On tight curves, increasing path spacing prevents characters from overlapping.</p>
            <p><strong className="text-white">Path Alignment:</strong> Controls the character baseline relationship to the path:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Baseline on path</strong> — the text baseline sits directly on the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Centered on path</strong> — characters are centered on the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Ascent on path</strong> — the top of characters sits on the path</li>
            </ul>
          </Section>
          <Section title="Path Text Animation">
            <p>All text animation modes (Block, Line, Word, Character) work for path text. In Character mode, individual characters slide along the path as their position offset is animated — each character orbits along the curve rather than moving in a straight line.</p>
          </Section>
          <Section title="Detaching from Path">
            <p>Text -&gt; Detach from Path converts path text back to standard text at its current visual position. The path is no longer linked to the text.</p>
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
