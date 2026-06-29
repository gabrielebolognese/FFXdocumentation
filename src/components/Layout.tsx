import { ReactNode, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import TableOfContents from './TableOfContents';
import Footer from './Footer';
import { TableOfContentsItem } from '../data/navigation';
import { useSidebarState } from '../contexts/SidebarStateContext';

interface LayoutProps {
  children: ReactNode;
  tableOfContents?: TableOfContentsItem[];
  wide?: boolean;
  extraWide?: boolean;
}

export default function Layout({ children, tableOfContents = [], wide = false, extraWide = false }: LayoutProps) {
  const location = useLocation();
  const sidebarScrollRef = useRef<HTMLDivElement>(null);
  const { getScrollPosition, setScrollPosition } = useSidebarState();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine active tab based on current path
  const getActiveTab = () => {
    const path = location.pathname;

    if (path === '/') return '/';
    if (path.startsWith('/editor')) return '/editor';
    if (path.startsWith('/features')) return '/features';
    if (path.startsWith('/runtimes')) return '/runtimes';
    if (path.startsWith('/feature-support')) return '/feature-support';
    if (path.startsWith('/tutorials')) return '/tutorials';
    if (path.startsWith('/lite')) return '/lite';

    return '/';
  };

  const hasBrowserBar = location.pathname === '/runtimes' || location.pathname.startsWith('/troubleshooting');

  const activeTab = getActiveTab();

  // Restore scroll position when tab changes or component mounts
  useEffect(() => {
    if (sidebarScrollRef.current) {
      const savedPosition = getScrollPosition(activeTab);
      sidebarScrollRef.current.scrollTop = savedPosition;
    }
  }, [activeTab, getScrollPosition]);

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Save scroll position on scroll (debounced)
  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (sidebarScrollRef.current) {
        setScrollPosition(activeTab, sidebarScrollRef.current.scrollTop);
      }
    }, 150);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      <div className={`${hasBrowserBar ? 'pt-[183px]' : 'pt-[111px]'} min-h-screen`}>
        <div className="grid grid-cols-6 gap-0 max-w-[1800px] mx-auto relative">
          <div className="col-span-1"></div>

          <div className="col-span-1">
            <div
              ref={sidebarScrollRef}
              onScroll={handleScroll}
              className={`sticky ${hasBrowserBar ? 'top-[183px] h-[calc(100vh-183px)]' : 'top-[111px] h-[calc(100vh-111px)]'} w-[300px] overflow-y-auto`}
            >
              <Sidebar />
            </div>
          </div>

          <div className={`${extraWide ? 'col-span-4' : wide ? 'col-span-3' : 'col-span-2'} px-12 py-12`}>
            {children}
          </div>

          {!extraWide && (
            <div className="col-span-1">
              {tableOfContents.length > 0 && (
                <div className={`sticky ${hasBrowserBar ? 'top-[183px] h-[calc(100vh-183px)]' : 'top-[111px] h-[calc(100vh-111px)]'} w-[300px] overflow-y-auto z-10`}>
                  <TableOfContents items={tableOfContents} />
                </div>
              )}
            </div>
          )}

          {!extraWide && <div className="col-span-1"></div>}
        </div>
      </div>

      <Footer />
    </div>
  );
}
