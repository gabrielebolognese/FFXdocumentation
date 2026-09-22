import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ExternalLink, ArrowUpRightFromSquare } from 'lucide-react';
import { mainTabs } from '../data/navigation';
import Search from './Search';

const browsers = [
  { name: 'Chrome', src: '/Google_Chrome_icon_(2011).png' },
  { name: 'Edge', src: '/Microsoft_Edge_logo_(2019).png' },
  { name: 'Opera / Opera GX', src: '/Opera_2015_icon.svg.png' },
  { name: 'Safari', src: '/Safari-Logo.png' },
  { name: 'Brave', src: '/brave-browser-icon.webp' },
  { name: 'Firefox', src: '/firefox-logo.webp' },
  { name: 'Perplexity', src: '/perplexity-ai-icon.webp' },
  { name: 'DuckDuckGo', src: '/The_DuckDuckGo_Duck.png' },
  { name: 'Tor', src: '/Tor_Browser_icon.svg.png' },
];

export default function Header() {
  const location = useLocation();

  const isActiveTab = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    // Treat /troubleshooting paths as part of /runtimes tab
    if (path === '/runtimes' && location.pathname.startsWith('/troubleshooting')) {
      return true;
    }
    // ...and the Beginner to Hero course as part of /tutorials
    if (path === '/tutorials' && location.pathname.startsWith('/beginner-to-hero')) {
      return true;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-panel border-b border-navy-border">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/android-chrome-512x512.png" alt="FlashFX" className="w-7 h-7 rounded-lg" />
            <span className="text-white font-medium text-base">Documentation</span>
          </Link>

          <Search />

          <a
            href="https://flashfx.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-blue-muted hover:text-white transition-colors"
          >
            Landing Page
            <ArrowUpRightFromSquare className="w-3 h-3" />
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-orange-500 text-[10px] font-medium uppercase tracking-wide">
            Documentation is work in progress and not complete
          </span>
          <a href="https://editor.flashfx.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-yellow-accent text-navy-deepest px-4 py-1.5 rounded-md text-xs font-medium hover:text-white hover:shadow-[0_0_18px_rgba(250,204,21,0.75)] transition-all">
            Editor
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-6 px-5 border-t border-navy-border">
        {mainTabs.map((tab) =>
          tab.external ? (
            <a
              key={tab.path}
              href={tab.path}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-xs font-medium transition-colors text-blue-muted hover:text-white flex items-center gap-1"
            >
              {tab.label}
              {tab.icon === 'square' ? <ArrowUpRightFromSquare className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
            </a>
          ) : (
            <Link
              key={tab.path}
              to={tab.path}
              className={`py-3 text-xs font-medium transition-colors ${
                isActiveTab(tab.path)
                  ? 'text-yellow-accent'
                  : 'text-blue-muted hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          )
        )}
      </nav>

      {(location.pathname === '/runtimes' || location.pathname.startsWith('/troubleshooting')) && (
        <div className="border-t border-navy-border flex items-center justify-center gap-6 h-[72px] px-5">
          <span className="text-sm font-medium text-white/70">
            Make sure you are in a supported browser
          </span>
          <div className="flex items-center gap-3">
            {browsers.map((b) => (
              <div key={b.name} className="relative group">
                <img
                  src={b.src}
                  alt={b.name}
                  className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] bg-navy-panel border border-navy-border text-white text-[11px] font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
