import { Link, useLocation } from 'react-router-dom';
import { SearchX, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

/**
 * Catch-all route. Previously `<Route path="*" element={<Home />} />`, which
 * served homepage content at HTTP 200 for every mistyped or stale URL — the
 * soft-404 pattern Google penalises.
 *
 * A static host still returns 200 here (there is no server to set a status
 * code), so `noindex` on the SEO component is what actually keeps these URLs
 * out of the index. Restoring a true 404 status requires either prerendering
 * (M5) or a host-level rewrite rule.
 */

const destinations = [
  { label: 'Editor documentation', path: '/editor', description: 'Shapes, animation, timeline, text, images and export' },
  { label: 'Tutorials', path: '/tutorials', description: 'Step-by-step walkthroughs of common workflows' },
  { label: 'Troubleshooting', path: '/runtimes', description: 'Fixes for rendering, export and performance problems' },
  { label: 'FlashFX Lite', path: '/lite', description: 'Documentation for the lightweight editor' },
];

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <SEO
        title="Page not found"
        description="This FlashFX documentation page could not be found. Browse the editor guides, tutorials and troubleshooting sections instead."
        noindex
      />

      <div className="max-w-3xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            404
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">Page not found</h1>
          <p className="text-sm text-white/70 leading-relaxed">
            There is no documentation page at{' '}
            <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded text-xs">{pathname}</code>. It may have
            been moved or renamed, or the link that brought you here may be out of date.
          </p>
        </div>

        <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-5">
          <SearchX className="w-5 h-5 text-yellow-accent shrink-0 mt-0.5" />
          <p className="text-xs text-white/60 leading-relaxed">
            Press <kbd className="bg-navy-elevated border border-white/10 px-1.5 py-0.5 rounded text-[11px]">Ctrl</kbd>{' '}
            <kbd className="bg-navy-elevated border border-white/10 px-1.5 py-0.5 rounded text-[11px]">K</kbd> to search
            the documentation, or start from one of the sections below.
          </p>
        </div>

        <div className="space-y-3">
          {destinations.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-lg px-5 py-4 hover:border-yellow-accent/40 transition-colors"
            >
              <div className="space-y-1">
                <span className="block text-sm font-medium text-white group-hover:text-yellow-accent transition-colors">
                  {item.label}
                </span>
                <span className="block text-xs text-blue-muted">{item.description}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-yellow-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
