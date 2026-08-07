import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextStyles() {
  return (
    <Layout>
      <SEO
        title="Typography, Fill, Stroke, Shadow & Background | FlashFX Documentation"
        description="Complete reference for typography controls, text fill, stroke, shadow, glow, and background in FlashFX."
        keywords="FlashFX, typography, OpenType, text fill, gradient text, text stroke, text shadow, text background"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Text
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Typography, Fill & Visual Styling</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section title="5.1 OpenType Features">
            <p>For fonts that include OpenType features, FlashFX exposes them in the Typography section:</p>
            <Table
              headers={['Feature', 'Description']}
              rows={[
                ['Ligatures', 'Combines specific letter pairs into single glyphs (fi, fl, ff, ffi, ffl)'],
                ['Contextual Alternates', 'Substitutes alternate glyphs based on surrounding characters'],
                ['Stylistic Alternates', 'Switches to an alternative glyph design for specific characters'],
                ['Swash', 'Decorative flourishes on selected characters (typically for display fonts)'],
                ['Ordinals', 'Automatically raises and sizes ordinal suffixes (1st, 2nd, 3rd)'],
                ['Fractions', 'Converts manually typed fractions (1/2, 3/4) to designed fraction glyphs'],
                ['Tabular Figures', 'Forces all digits to use equal width (important for aligning numbers in columns)'],
                ['Oldstyle Figures', 'Uses figures that descend below the baseline (0-9 with varying heights), for use in running text'],
                ['Lining Figures', 'Uses figures that sit on the baseline at cap height'],
                ['Proportional Figures', 'Figures with widths based on their natural shape (default in most body text fonts)'],
              ]}
            />
          </Section>

          <Section title="5.2 Text Rendering">
            <p><strong className="text-white">Antialiasing Mode:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Default</strong> — browser-managed antialiasing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Crisp</strong> — optimized for screen legibility at small sizes; reduces blurring at pixel boundaries</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Smooth</strong> — maximum smoothness, best for large display type</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Geometric Precision</strong> — disables browser kerning hinting for consistent cross-browser rendering</li>
            </ul>
            <p><strong className="text-white">Subpixel Rendering:</strong> On high-DPI displays, enables subpixel color channel antialiasing for sharper text at small sizes (browser-dependent support).</p>
          </Section>

          <Section title="6.1 Solid Color Fill">
            <p>Text in FlashFX uses the same material stack as vector shapes. Every typographic fill feature available for shapes is also available for text.</p>
            <p>The most common text fill. Set via the color picker in the Fill section.</p>
          </Section>

          <Section title="6.2 Gradient Text">
            <p>A gradient fill mapped across the text string.</p>
            <p><strong className="text-white">Gradient Mapping Mode:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Per Character</strong> — the gradient is applied independently to each character. Each character shows the full gradient range.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Per Word</strong> — the gradient is applied independently to each word.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Across Text</strong> — the gradient spans the full width or height of the entire text element. Individual characters show only the portion of the gradient at their position.</li>
            </ul>
            <p>Across Text mode is the most visually impactful for display text — long gradients sweep across headings smoothly, with each character showing a slightly different point in the gradient.</p>
          </Section>

          <Section title="6.3 Texture and Pattern Fills">
            <p>All texture and pattern fill types available for shapes are equally available for text fills. A noise texture applied as a text fill creates a grungy, printed-on appearance. A halftone pattern fill creates a graphic arts dot-matrix effect.</p>
          </Section>

          <Section title="6.4 Multi-Layer Text Fills">
            <p>The full material stack is supported for text. Multiple fill layers can be combined — for example: a solid white fill as the base layer, a gradient overlay layer in Screen blend mode for a shimmering color effect, and a noise texture in Multiply blend mode for a grungy print texture.</p>
          </Section>

          <Section title="7. Text Stroke">
            <p>Text stroke in FlashFX works identically to shape stroke, with one important additional consideration: large strokes on small text can quickly become illegible. Test stroke readability at the final export resolution.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Stroke on text is always rendered outside the character shape by default, preventing the stroke from eating into the fill. This can be changed to Inside or Center in the stroke alignment settings.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Heavy stroke weights on thin fonts produce a "fat face" typography effect. Use intentionally and test at export size.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Stroke color, gradient stroke, and dashed stroke are all available on text.</li>
            </ul>
            <p><strong className="text-white">Multiple Strokes:</strong> Like shapes, text can have multiple stroke layers applied. A common technique is applying two strokes — a thin bright inner stroke and a thick dark outer stroke — to achieve a hand-lettered outlined effect.</p>
          </Section>

          <Section title="8. Text Shadow & Glow">
            <p>Text shadow and glow work identically to shape shadow and glow (see Document 02, Section 9).</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drop shadows on small text at large blur radii can reduce legibility — keep blur under 50% of the font size for readable text</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Inner shadows on display typography create an engraved or debossed effect</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Outer glow at low opacity is commonly used for subtle text lift from the background — a glow matching the background color creates a text halo that optically separates text from complex backgrounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Multiple shadows are supported; a common technique is combining a tight dark drop shadow with a larger diffuse colored glow to produce neon or luminous text effects</li>
            </ul>
          </Section>

          <Section title="9.1 Per-Character Background">
            <p>A text background applies a filled rectangle behind the text content. When the animation granularity is set to Character or Word mode, backgrounds can be applied per unit:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Each character or word can have its own background rectangle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The background rectangle can have padding (horizontal and vertical expansion beyond the character bounds)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Background corner radius can be set to round the per-character backgrounds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Background color, opacity, and blend mode are configurable</li>
            </ul>
            <p>This feature enables highlight text effects — colored boxes behind individual words or characters — which are common in social media caption animations and subtitle styling.</p>
          </Section>

          <Section title="9.2 Full Text Block Background">
            <p>An alternative mode applies a single background rectangle behind the entire text block (the combined bounding box of all text). Configured via the Text Background toggle in the Properties Panel.</p>
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
