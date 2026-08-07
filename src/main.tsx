import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
);

/**
 * `npm run build` prerenders every route to static HTML, so in production the
 * container already holds server-rendered markup and must be hydrated — calling
 * createRoot would throw it away and re-render from scratch, wasting the
 * prerender and causing a visible flash.
 *
 * In `npm run dev` the container is empty and we mount normally.
 */
if (container.firstChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
