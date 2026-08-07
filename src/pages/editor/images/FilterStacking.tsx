import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'filter-order', label: 'Filter Order' },
  { id: 'filter-visibility-toggle', label: 'Filter Visibility Toggle' },
  { id: 'filter-opacity', label: 'Filter Opacity' },
  { id: 'animating-filter-intensity', label: 'Animating Filter Intensity' },
];

export default function FilterStacking() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Filter Stacking and Ordering | FlashFX Documentation"
        description="Reference for stacking multiple filters, controlling order, opacity, and animating filter intensity in FlashFX."
        keywords="FlashFX, filter stacking, filter order, filter opacity, animate filter"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Filter Stacking and Ordering</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Multiple filters from any category can be stacked on a single image. The filter stack appears in the Properties Panel beneath the image settings.
          </p>

          <Section id="filter-order" title="Filter Order">
            <p>Filters are applied from top to bottom in the stack. Order matters significantly:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Blur then Sharpen:</strong> The sharpen will partially recover detail from the blur</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Sharpen then Blur:</strong> The blur obscures the sharpening effect entirely</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Color Grade then Halftone:</strong> Color grading applies first, then halftone renders with those colors</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Halftone then Color Grade:</strong> Color grading adjusts the already-halftoned result</li>
            </ul>
            <p>Reorder filters by dragging the grab handle on any filter row in the stack.</p>
          </Section>

          <Section id="filter-visibility-toggle" title="Filter Visibility Toggle">
            <p>Each filter has a toggle eye icon to temporarily disable it without deleting it. Useful for comparing the effect of individual filters within a complex stack.</p>
          </Section>

          <Section id="filter-opacity" title="Filter Opacity">
            <p>Each filter has its own opacity control (0% to 100%). At less than 100%, the filter effect blends with the unfiltered result beneath it. This provides a "softened" version of any filter effect — equivalent to reducing a layer's opacity in a compositing application.</p>
            <p>Example uses:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Film grain at 40% opacity for a subtle, tasteful grain</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Duotone at 60% opacity to preserve some of the original color underneath</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Vignette at 30% for a barely-there darkening at edges</li>
            </ul>
          </Section>

          <Section id="animating-filter-intensity" title="Animating Filter Intensity">
            <p>Nearly all filter parameters are animatable. To animate a filter:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Switch to Animate mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Navigate to a keyframe position on the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Adjust the filter parameter value</li>
            </ol>
            <p>A keyframe is created on the filter property track in the timeline. The parameter interpolates between keyframe values over time using the same easing controls available for all other animated properties.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
