import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { buildSearchIndex, searchEntries, highlightMatch, SearchEntry } from '../utils/searchIndex';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const searchIndex = useRef(buildSearchIndex());

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape') {
        setQuery('');
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchEntries(query, searchIndex.current);
      setResults(searchResults);
      setSelectedIndex(0);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    setQuery('');
    setIsOpen(false);
  }, [location.pathname]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        navigateToResult(results[selectedIndex]);
      }
    }
  };

  const navigateToResult = (result: SearchEntry) => {
    navigate(result.route);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative flex-1 max-w-md">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-blue-muted pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full bg-navy-elevated text-white text-xs pl-9 pr-16 py-1.5 rounded-full border border-navy-border focus:border-blue-primary focus:outline-none transition-colors"
      />
      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] text-blue-muted bg-navy-deepest border border-navy-border rounded pointer-events-none">
        {isMac ? '⌘K' : 'Ctrl+K'}
      </kbd>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy-panel border border-navy-border rounded-lg shadow-2xl z-[100] max-h-[400px] overflow-y-auto">
          {results.map((result, index) => {
            const highlight = highlightMatch(result.label, query);
            const breadcrumb = result.category
              ? `${result.tab} › ${result.category}`
              : result.tab;

            return (
              <button
                key={result.route}
                onClick={() => navigateToResult(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-3 transition-colors border-b border-navy-border last:border-b-0 ${
                  index === selectedIndex
                    ? 'bg-navy-elevated'
                    : 'hover:bg-navy-elevated'
                }`}
              >
                <div className="text-xs text-white">
                  {highlight ? (
                    <>
                      {highlight.before}
                      <span className="text-yellow-accent">{highlight.match}</span>
                      {highlight.after}
                    </>
                  ) : (
                    result.label
                  )}
                </div>
                <div className="text-[10px] text-white/40 mt-0.5">{breadcrumb}</div>
              </button>
            );
          })}
        </div>
      )}

      {isOpen && results.length === 0 && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-navy-panel border border-navy-border rounded-lg shadow-2xl z-[100] px-4 py-3">
          <div className="text-xs text-white/40">No results</div>
        </div>
      )}
    </div>
  );
}
