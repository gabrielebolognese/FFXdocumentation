import { useLocation, Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, HelpCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { troubleshootingContent } from '../data/troubleshooting';

/**
 * Renders every `/troubleshooting/*` route from the shared content map.
 *
 * Returns null for an unknown path — a `<Route>` pointing here with no matching
 * entry in `src/data/troubleshooting.ts` renders an empty page rather than an
 * error, so the two must be kept in step.
 */

const tableOfContents = [
  { id: 'overview', label: 'Overview' },
  { id: 'symptoms', label: 'Symptoms' },
  { id: 'causes', label: 'Causes and fixes' },
  { id: 'related', label: 'Related pages' },
  { id: 'still-stuck', label: 'Still stuck?' },
];

export default function TroubleshootingDetail() {
  const location = useLocation();
  const content = troubleshootingContent[location.pathname];

  if (!content) {
    return null;
  }

  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO title={content.title} description={content.description} />

      <div className="space-y-10">
        <header>
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="w-7 h-7 text-red-400 shrink-0 mt-1" />
            <h1 className="text-4xl font-semibold text-white leading-tight">{content.title}</h1>
          </div>
        </header>

        {/* The direct answer. First thing on the page, and the most likely
            featured-snippet extraction — keep it self-contained. */}
        <section id="overview" className="scroll-mt-32">
          <p className="text-sm text-white/80 leading-relaxed">{content.summary}</p>
        </section>

        <section id="symptoms" className="scroll-mt-32 space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-muted" />
            Symptoms
          </h2>
          <p className="text-xs text-blue-muted leading-relaxed">
            If one or more of these match what you are seeing, you are on the right page.
          </p>
          <ul className="space-y-2">
            {content.symptoms.map((symptom) => (
              <li key={symptom} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                <span className="text-blue-muted mt-0.5">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="causes" className="scroll-mt-32 space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Causes and fixes
          </h2>
          <p className="text-xs text-blue-muted leading-relaxed">
            Ordered from most to least likely. Work down the list — each cause is paired with what
            to do about it.
          </p>
          <ol className="space-y-4">
            {content.causes.map((item, index) => (
              <li
                key={item.cause}
                className="bg-navy-panel border border-navy-border rounded-lg p-5 space-y-2"
              >
                <div className="flex gap-3">
                  <span className="text-yellow-accent text-xs font-semibold mt-0.5 shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-medium text-white leading-relaxed">{item.cause}</h3>
                </div>
                <p className="text-sm text-white/70 leading-relaxed pl-6">{item.fix}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="related" className="scroll-mt-32 space-y-4">
          <h2 className="text-xl font-semibold text-white">Related pages</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.related.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group flex items-center justify-between gap-3 bg-navy-elevated border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors"
              >
                <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                <ArrowUpRight className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <section
          id="still-stuck"
          className="scroll-mt-32 bg-navy-panel border border-navy-border rounded-lg p-6"
        >
          <h2 className="text-sm font-semibold text-white mb-2">Still stuck?</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            If none of the causes above match, contact support with the steps to reproduce the
            problem, your browser and version, and any message from the browser console. You can
            reach us at{' '}
            <a
              href="mailto:support@flashfx.app"
              className="text-yellow-accent hover:text-yellow-400 transition-colors"
            >
              support@flashfx.app
            </a>
            .
          </p>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-400 text-black text-xs font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Contact Support
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}
