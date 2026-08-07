import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TypographyControls() {
  return (
    <Layout>
      <SEO
        title="Typography Controls | FlashFX Documentation"
        description="Reference for OpenType features and text rendering settings in FlashFX."
        keywords="FlashFX, typography, OpenType, ligatures, fractions, tabular figures, antialiasing"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Typography Controls</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <Section title="OpenType Features">
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
                ['Oldstyle Figures', 'Uses figures that descend below the baseline (0-9 with varying heights)'],
                ['Lining Figures', 'Uses figures that sit on the baseline at cap height'],
                ['Proportional Figures', 'Figures with widths based on their natural shape (default in most body text fonts)'],
              ]}
            />
          </Section>
          <Section title="Text Rendering">
            <p><strong className="text-white">Antialiasing Mode:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Default</strong> — browser-managed antialiasing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Crisp</strong> — optimized for screen legibility at small sizes; reduces blurring at pixel boundaries</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Smooth</strong> — maximum smoothness, best for large display type</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Geometric Precision</strong> — disables browser kerning hinting for consistent cross-browser rendering</li>
            </ul>
            <p><strong className="text-white">Subpixel Rendering:</strong> On high-DPI displays, enables subpixel color channel antialiasing for sharper text at small sizes (browser-dependent support).</p>
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
