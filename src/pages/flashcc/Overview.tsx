import { Link } from 'react-router-dom';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { groups, sections, pathForSection } from '../../data/flashcc';

/**
 * Landing page for the FlashCC tab, and the section's link hub — the one page
 * that links every section, so a crawler arriving here does not have to walk
 * the previous/next chain 29 times.
 *
 * Content is transcribed from `reference.md`, which supersedes the four design
 * documents beside it at the repo root. See the warning in CLAUDE.md before
 * taking anything from those.
 */

const tableOfContents = groups.map((group) => ({
  id: group.label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  label: group.label,
}));

export default function FlashCCOverview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashCC"
        description={`Reference documentation for FlashCC, the companion app to FlashFX for creating social carousels — ${sections.length} sections covering the canvas, generation, the pipeline and the infrastructure.`}
      />

      <div className="space-y-10">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-yellow-accent">
            <LayoutGrid className="w-4 h-4" />
            {sections.length} sections · {groups.length} groups
          </div>

          <h1 className="text-4xl font-semibold text-white leading-tight">FlashCC</h1>

          <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
            FlashCC turns a written post into a social carousel, and then keeps the record of how
            that carousel did. Two halves, and the split matters: the <strong className="text-white font-medium">editor</strong> is
            a Photoshop-style canvas that makes the artwork, and the{' '}
            <strong className="text-white font-medium">pipeline</strong> is what happens after —
            schedule it, mark it posted, type the numbers in, and find out which structural choices
            actually worked.
          </p>

          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            What follows is the full reference: what the app is, how each part works, and where the
            bodies are buried. It is written from the source rather than from memory, and where the
            code and its own comments disagree that is noted rather than smoothed over —{' '}
            <Link
              to="/flashcc/known-defects"
              className="text-yellow-accent hover:text-yellow-400 transition-colors"
            >
              section 29
            </Link>{' '}
            collects the lot.
          </p>

          <Link
            to={pathForSection(sections[0])}
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-400 text-black text-xs font-semibold px-4 py-2.5 rounded-md transition-colors"
          >
            Start with section 1 — {sections[0].title}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </header>

        {groups.map((group, groupIndex) => (
          <section
            key={group.label}
            id={tableOfContents[groupIndex].id}
            className="scroll-mt-32 space-y-4"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">{group.label}</h2>
              <p className="text-xs text-blue-muted leading-relaxed">{group.blurb}</p>
            </div>

            <ol className="space-y-2">
              {group.sections.map((section) => (
                <li key={section.slug}>
                  <Link
                    to={pathForSection(section)}
                    className="group flex items-start gap-4 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors"
                  >
                    <span className="text-xs font-semibold text-yellow-accent tabular-nums mt-0.5 shrink-0 w-6">
                      {String(section.number).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white/85 group-hover:text-white transition-colors">
                        {section.title}
                      </span>
                      <span className="block text-xs text-blue-muted leading-relaxed mt-0.5">
                        {section.summary}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors shrink-0 mt-0.5 ml-auto" />
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}

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
