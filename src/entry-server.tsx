import { renderToString } from 'react-dom/server';
// react-router v7 dropped the `react-router-dom/server` subpath export;
// StaticRouter is re-exported from the package root now.
import { StaticRouter } from 'react-router-dom';
// v3 exports HelmetServerState but not the FilledContext wrapper type, so the
// context shape is declared locally rather than imported.
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { AppRoutes } from './App';
import { SidebarStateProvider } from './contexts/SidebarStateContext';

export interface RenderResult {
  /** Markup for #root. */
  html: string;
  /** Serialised <head> tags collected by react-helmet-async during the render. */
  head: string;
}

/**
 * Renders one route to static HTML at build time. Consumed by
 * scripts/prerender.mjs.
 *
 * `renderToString` rather than `renderToPipeableStream`: every page component
 * is a static import, so nothing suspends and there is no async boundary to
 * wait on. If route-level React.lazy is introduced later this must move to
 * `renderToPipeableStream` with `onAllReady`, because renderToString throws on
 * a suspended lazy component instead of waiting for it.
 */
export function render(url: string): RenderResult {
  const helmetContext = {} as { helmet: HelmetServerState };

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <SidebarStateProvider>
          <AppRoutes />
        </SidebarStateProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, head };
}
