import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function ParagraphFormatting() {
  return (
    <Layout>
      <SEO
        title="Paragraph-Level Formatting | FlashFX Documentation"
        description="Complete reference for paragraph-level text formatting in FlashFX."
        keywords="FlashFX, paragraph formatting, alignment, leading, indentation, tab stops"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Paragraph-Level Formatting</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <Section title="Horizontal Alignment">
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
          <Section title="Vertical Alignment">
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
          <Section title="Line Spacing (Leading)">
            <p>The vertical distance between lines, measured from baseline to baseline.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Auto:</strong> Leading is set to a percentage of the font size (typically 120%). Adjusts automatically when font size changes.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Fixed:</strong> A specific pixel value. Does not change when font size changes.</li>
            </ul>
          </Section>
          <Section title="Paragraph Spacing">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Space Before:</strong> Extra vertical space added above the paragraph</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Space After:</strong> Extra vertical space added below the paragraph</li>
            </ul>
            <p>Allows differentiation between line spacing within a paragraph and spacing between separate paragraphs.</p>
          </Section>
          <Section title="Indentation">
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">First Line Indent:</strong> Indents only the first line of the paragraph</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Left Indent:</strong> Indents all lines from the left margin</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Right Indent:</strong> Indents all lines from the right margin</li>
            </ul>
          </Section>
          <Section title="Tab Stops">
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
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
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
                <td key={j} className="px-4 py-3 text-xs text-white/70">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
