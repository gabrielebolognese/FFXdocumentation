import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function Fonts() {
  return (
    <Layout>
      <SEO
        title="Text on a Path & Converting to Outlines | FlashFX Documentation"
        description="Learn how to place text on a path and convert text to vector outlines in FlashFX."
        keywords="FlashFX, text on path, path text, convert text to outlines, create outlines"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Text
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Text on a Path & Convert to Outlines</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section title="13. Text on a Path">
            <p>Text can be placed along the edge of any vector path, following the curve of the path.</p>

            <p><strong className="text-white">13.1 Creating Text on a Path</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Draw any vector path (open or closed)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select both the text element and the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Text → Place on Path</li>
            </ol>
            <p>The text flows along the path starting from the path's first anchor point.</p>
            <p><strong className="text-white">Alternatively:</strong> With the Text tool active, hover over an existing path until the cursor shows a path indicator, then click to begin typing directly on the path.</p>

            <p><strong className="text-white">13.2 Path Text Controls</strong></p>
            <p><strong className="text-white">Path Offset:</strong> Moves the text's start point along the path. Dragging the offset control slides the text forward or backward along the path. Animating the offset creates a text-crawling-along-a-path effect.</p>
            <p><strong className="text-white">Side of Path:</strong> Text can be placed on the top (outside) or bottom (inside) of the path curve. For a circular path:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Top side = text reads along the top arc (like the top of a badge or seal)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Bottom side = text reads along the bottom arc (like the bottom of a badge, inverted)</li>
            </ul>
            <p><strong className="text-white">Flip:</strong> Mirrors the text to the opposite side of the path and reverses the reading direction.</p>
            <p><strong className="text-white">Path Spacing:</strong> Adjusts the letter spacing specifically for path-bound text. On tight curves, increasing path spacing prevents characters from overlapping.</p>
            <p><strong className="text-white">Path Alignment:</strong> Controls the character baseline relationship to the path:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Baseline on path</strong>,the text baseline sits directly on the path</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Centered on path</strong>,characters are centered on the path (baseline sits slightly above/below depending on character height)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Ascent on path</strong>,the top of characters sits on the path</li>
            </ul>

            <p><strong className="text-white">13.3 Path Text Animation</strong></p>
            <p>All text animation modes (Block, Line, Word, Character) work for path text. In Character mode, individual characters slide along the path as their position offset is animated,each character orbits along the curve rather than moving in a straight line.</p>

            <p><strong className="text-white">13.4 Detaching from Path</strong></p>
            <p>Text → Detach from Path,converts path text back to standard text at its current visual position. The path is no longer linked to the text.</p>
          </Section>

          <Section title="14. Converting Text to Outlines">
            <p>Converting text to outlines transforms the text element into vector shapes. The glyphs become editable paths, losing all text-specific properties (font, kerning, text animation modes, etc.) in exchange for full vector editability.</p>

            <p><strong className="text-white">14.1 When to Convert</strong></p>
            <p><strong className="text-white">Convert when:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Exporting a .flashfx file for use on another device that may not have the same fonts installed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Editing individual letterform shapes (cutting notches, extending serifs, creating custom lettermarks)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Applying boolean operations to text shapes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Applying per-vertex animation to glyph paths</li>
            </ul>
            <p><strong className="text-white">Do not convert when:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The text content may need to be edited again</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Text animation modes (character, word) are being used (they do not work on outline shapes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The font renders correctly on all target systems</li>
            </ul>

            <p><strong className="text-white">14.2 How to Convert</strong></p>
            <p>Select the text element, then:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Text → Create Outlines (or <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+O</code>)</li>
            </ul>
            <p>The text element is replaced by a group of vector paths, one per character (or one compound path per word, depending on the setting). Each path is fully editable in Vertex Edit mode.</p>

            <p><strong className="text-white">14.3 Preserving Original Text</strong></p>
            <p>Before converting, duplicate the text element (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+D</code>) and hide the duplicate. This preserves the editable original as a hidden backup while the outlined version is used for design work.</p>
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
