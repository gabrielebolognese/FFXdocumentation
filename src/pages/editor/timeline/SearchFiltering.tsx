import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'layer-search', label: 'Layer Search' },
  { id: 'track-type-filters', label: 'Track Type Filters' },
  { id: 'keyframe-only-filter', label: 'Keyframe-Only Filter' },
];

export default function SearchFiltering() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Timeline Search and Filtering | FlashFX Documentation"
        description="Layer search, track type filters, and keyframe-only filter in the FlashFX timeline."
        keywords="FlashFX, timeline search, track filter, animated layers, layer filter"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Timeline Search and Filtering</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="layer-search" title="Layer Search">
            <p>The timeline track list has a search box at the top. Typing in the search box filters the visible layers to only those whose names contain the search string. All other layers are temporarily hidden from the timeline view (not hidden from the canvas,only from the timeline UI).</p>
            <p><strong className="text-white">Search is case-insensitive</strong> and matches any substring of the layer name.</p>
            <p>
              <strong className="text-white">Clear search:</strong>
              {' Press '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Escape</code>
              {' or click the x in the search box to restore all layers.'}
            </p>
          </Section>

          <Section id="track-type-filters" title="Track Type Filters">
            <p>Filter buttons at the top of the timeline let you show only specific types of property tracks across all layers. This is useful when reviewing a specific type of animation across many layers,for example, checking all opacity keyframes simultaneously to ensure fade timing is consistent.</p>
            <Table
              headers={['Button', 'Shows Only']}
              rows={[
                ['P', 'Position tracks'],
                ['R', 'Rotation tracks'],
                ['S', 'Scale tracks'],
                ['O', 'Opacity tracks'],
                ['C', 'Color / Material tracks'],
                ['F', 'Filter / Effect tracks'],
                ['All', 'All track types (default)'],
              ]}
            />
          </Section>

          <Section id="keyframe-only-filter" title="Keyframe-Only Filter">
            <p>Toggle "Show Only Animated Layers" in the timeline header. When active, layers with no keyframes are hidden from the timeline track list. Simplifies the view on complex compositions with many static elements.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
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
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">{h}</th>
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
