import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

/**
 * Landing page for the FlashCC tab.
 *
 * Deliberately short and deliberately not a placeholder: this page is linked
 * from the global header on every page of the site, so it cannot be one of the
 * scaffolded stubs. It says what FlashCC is, says plainly that the rest is
 * still being written, and links onward.
 *
 * Do not write the placeholder marker string into this file, not even in a
 * comment — `isPlaceholder()` in scripts/lib/routes.mjs matches it anywhere in
 * the source, so merely mentioning it in prose is enough to drop the page out
 * of the sitemap.
 *
 * The six sections below are scaffolding to be renamed and reshaped once the
 * real structure is known — nothing here asserts a FlashCC feature.
 */

const sections = [
  {
    label: 'Getting started',
    path: '/flashcc/getting-started',
    blurb: 'Opening FlashCC for the first time and making something.',
  },
  {
    label: 'The interface',
    path: '/flashcc/interface',
    blurb: 'The panels, the canvas, and where each control lives.',
  },
  {
    label: 'Creating a carousel',
    path: '/flashcc/creating-a-carousel',
    blurb: 'The core workflow, start to finish.',
  },
  {
    label: 'Slides and layout',
    path: '/flashcc/slides-and-layout',
    blurb: 'Working with individual slides and arranging their content.',
  },
  {
    label: 'Exporting',
    path: '/flashcc/exporting',
    blurb: 'Getting a finished carousel out of the app.',
  },
  {
    label: 'Troubleshooting',
    path: '/flashcc/troubleshooting',
    blurb: 'What to check when something does not behave as expected.',
  },
];

export default function FlashCCOverview() {
  return (
    <Layout>
      <SEO
        title="FlashCC"
        description="Documentation for FlashCC, the companion app to FlashFX for creating carousels."
      />

      <div className="space-y-8">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-yellow-accent">
            <LayoutGrid className="w-4 h-4" />
            FlashCC
          </div>

          <h1 className="text-4xl font-semibold text-white leading-tight">FlashCC</h1>

          <p className="text-sm font-bold text-red-500">
            FlashCC documentation is just getting started — most of these pages are still empty.
          </p>

          <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
            FlashCC is the companion app to FlashFX, built for creating carousels. This tab is where
            its documentation will live.
          </p>

          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            The sections below are the starting frame. They will be renamed, split and added to as
            the documentation is written.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-widest">
            Sections
          </h2>

          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="group flex items-center gap-4 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white/85 group-hover:text-white transition-colors">
                    {section.label}
                  </span>
                  <span className="block text-xs text-blue-muted leading-relaxed mt-0.5">
                    {section.blurb}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-navy-panel border border-navy-border rounded-lg p-6">
          <h2 className="text-sm font-semibold text-white mb-2">Looking for FlashFX?</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            FlashCC is a separate app. The motion and animation editor is documented under the
            Editor tab.
          </p>
          <Link
            to="/editor"
            className="inline-flex items-center gap-2 border border-navy-border hover:border-yellow-accent/40 text-white/80 hover:text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
          >
            FlashFX editor documentation
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}
