import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextRuns() {
  return (
    <Layout>
      <SEO
        title="Character & Paragraph Formatting | FlashFX Documentation"
        description="Complete reference for character-level and paragraph-level text formatting in FlashFX."
        keywords="FlashFX, character formatting, paragraph formatting, font weight, kerning, tracking, leading"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Text
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Character & Paragraph Formatting</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <p className="text-base leading-relaxed">
            All character-level formatting is accessible in the Character section of the Properties Panel while text is selected (in both selection mode and text-edit mode).
          </p>

          <Section title="3.1 Font Family">
            <p>The typeface applied to selected characters. FlashFX provides access to:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">System fonts</strong> — fonts installed on the local operating system and accessible to the browser</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Google Fonts</strong> — the full Google Fonts library, loaded on demand (requires internet connection on first use)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Uploaded fonts</strong> — custom font files (OTF, TTF, WOFF, WOFF2) uploaded by the user to their account</li>
            </ul>
            <p><strong className="text-white">Font Search:</strong> The font family dropdown includes a search field. Type any portion of a font name to filter results.</p>
            <p><strong className="text-white">Font Preview:</strong> Each font in the dropdown previews with a short text sample in that typeface.</p>
          </Section>

          <Section title="3.2 Font Weight">
            <p>The weight variant of the selected font family. Available weights depend on the font. Common weights:</p>
            <Table
              headers={['Value', 'Name']}
              rows={[
                ['100', 'Thin'],
                ['200', 'ExtraLight'],
                ['300', 'Light'],
                ['400', 'Regular'],
                ['500', 'Medium'],
                ['600', 'SemiBold'],
                ['700', 'Bold'],
                ['800', 'ExtraBold'],
                ['900', 'Black'],
              ]}
            />
          </Section>

          <Section title="3.3 Font Style">
            <p>Italic or Oblique, when available in the font family. Italic is a designed alternate style; Oblique is a mechanical slant applied to the regular style when a true italic is not available.</p>
            <p><strong className="text-white">Faux Italic:</strong> When a true italic is not available, FlashFX can apply a synthetic oblique slant. This is a visual approximation and is generally less refined than a true italic. Indicated by an asterisk in the style selector.</p>
          </Section>

          <Section title="3.4 Font Size">
            <p>The size of the text in pixels. Range: 1px to 2000px. Fractional values are supported (e.g., 14.5px).</p>
            <p><strong className="text-white">Relative Sizing:</strong> While multiple characters are selected with different sizes, changing the font size applies relative scaling: typing +4 increases all selected characters by 4px regardless of their individual starting sizes.</p>
          </Section>

          <Section title="3.5 Underline & Strikethrough">
            <p><strong className="text-white">Underline:</strong> A line drawn beneath the text baseline.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Style:</strong> Solid, Dashed, Dotted, Double</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color:</strong> Independent of the text fill color</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Thickness:</strong> Weight of the underline in pixels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offset:</strong> Vertical distance from the baseline in pixels</li>
            </ul>
            <p><strong className="text-white">Strikethrough:</strong> A line drawn through the middle of the text. Style, Color, and Thickness controls are identical to Underline.</p>
          </Section>

          <Section title="3.6 Superscript & Subscript">
            <p><strong className="text-white">Superscript:</strong> Reduces character size and raises it above the baseline. Used for footnote markers, exponents.</p>
            <p><strong className="text-white">Subscript:</strong> Reduces character size and lowers it below the baseline. Used for chemical formulas.</p>
            <p>Size reduction factor and vertical offset are configurable in Typography Settings.</p>
          </Section>

          <Section title="3.7 All Caps & Small Caps">
            <p><strong className="text-white">All Caps:</strong> Converts all selected characters to uppercase in the rendered output. The underlying text data is not modified.</p>
            <p><strong className="text-white">Small Caps:</strong> Renders lowercase letters as uppercase letters at a reduced size (typically 70-80% of the regular cap height). When the font includes OpenType small caps glyphs, those are used; otherwise, FlashFX synthesizes them.</p>
          </Section>

          <Section title="3.8 Character Spacing (Tracking)">
            <p>Adjusts the uniform spacing between all characters in a selection. Measured in em units (1000 = 1em) or pixels, depending on the unit setting.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Positive values spread characters apart</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Negative values bring characters closer together</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>0 = font's default spacing</li>
            </ul>
          </Section>

          <Section title="3.9 Kerning">
            <p>Adjusts the spacing between two specific adjacent characters. Distinct from tracking, which applies uniformly to all characters in a selection.</p>
            <p><strong className="text-white">Auto Kerning:</strong> FlashFX applies the font's built-in kerning pairs automatically. Most professional fonts contain kerning tables that correct optically awkward pairings like "AV" or "To."</p>
            <p><strong className="text-white">Optical Kerning:</strong> An algorithmic kerning mode that analyzes the actual shapes of adjacent characters and applies spacing corrections even when the font's kerning table does not include that pair.</p>
            <p><strong className="text-white">Manual Kerning:</strong> Place the cursor between two characters and adjust the kerning value in the Properties Panel to apply a custom correction on top of auto or optical kerning.</p>
          </Section>

          <Section title="3.10 Baseline Shift">
            <p>Moves selected characters vertically relative to the text baseline without changing font size or line height. Positive values move characters up; negative values move them down.</p>
            <p>Useful for: custom superscript/subscript refinement, mixed-size type alignment, and creative typographic treatments.</p>
          </Section>

          <Section title="3.11 Horizontal Scale & Vertical Scale">
            <p><strong className="text-white">Horizontal Scale:</strong> Widens (above 100%) or narrows (below 100%) the character horizontally.</p>
            <p><strong className="text-white">Vertical Scale:</strong> Stretches (above 100%) or squashes (below 100%) the character vertically.</p>
            <p>These are non-typographic transforms applied after rendering the glyph. They do not change the font's optical proportions the way a condensed or extended font variant would.</p>
          </Section>

          <Section title="4.1 Horizontal Alignment">
            <Table
              headers={['Alignment', 'Description']}
              rows={[
                ['Left', 'Text aligns to the left edge of the text box'],
                ['Center', 'Each line is centered within the text box width'],
                ['Right', 'Text aligns to the right edge of the text box'],
                ['Justify', 'Text is spaced to fill the full width of each line except the last'],
                ['Justify All', 'Justification is applied even to the last line of the paragraph'],
              ]}
            />
          </Section>

          <Section title="4.2 Vertical Alignment">
            <p>For area text with a fixed frame:</p>
            <Table
              headers={['Alignment', 'Description']}
              rows={[
                ['Top', 'Text starts at the top of the frame'],
                ['Middle', 'Text is centered vertically within the frame'],
                ['Bottom', 'Text is pushed to the bottom of the frame'],
              ]}
            />
          </Section>

          <Section title="4.3 Line Spacing (Leading)">
            <p>The vertical distance between lines, measured from baseline to baseline.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Auto:</strong> Leading is set to a percentage of the font size (typically 120%). Adjusts automatically when font size changes.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Fixed:</strong> A specific pixel value. Does not change when font size changes.</li>
            </ul>
          </Section>

          <Section title="4.4 Paragraph Spacing">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Space Before:</strong> Extra vertical space added above the paragraph</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Space After:</strong> Extra vertical space added below the paragraph</li>
            </ul>
            <p>Allows differentiation between line spacing within a paragraph and spacing between separate paragraphs.</p>
          </Section>

          <Section title="4.5 Indentation">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">First Line Indent:</strong> Indents only the first line of the paragraph</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Left Indent:</strong> Indents all lines from the left margin</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Right Indent:</strong> Indents all lines from the right margin</li>
            </ul>
          </Section>

          <Section title="4.6 Tab Stops">
            <p>Custom tab stop positions within a paragraph. Each tab stop has a Position (distance from the left margin in pixels) and an Alignment: Left, Center, Right, or Decimal (text aligns by its decimal point, useful for numeric columns).</p>
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
