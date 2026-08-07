import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Config is a function so `manualChunks` can be applied to the client build
// only. The prerenderer runs a second, SSR build where react/react-router are
// external, and Rollup errors if manualChunks names an external module.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['cookie'],
  },
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
        /**
         * Split the dependencies out of the app bundle so they keep their
         * hashed filename across content edits. Documentation pages change
         * often; React and the router do not, and there is no reason for a
         * typo fix to invalidate ~140 KB of vendor code in every visitor's
         * cache.
         *
         * NOT route-level code splitting. That needs React.lazy, and
         * `renderToString` in src/entry-server.tsx throws on a suspended lazy
         * component rather than waiting for it — so introducing it would break
         * prerendering unless the prerenderer moves to renderToPipeableStream
         * with onAllReady first. Since every route is now prerendered to
         * complete HTML, the first paint no longer waits on JS at all, which
         * is where most of the win was. See SEO-documentation.md M5.
         */
            manualChunks: {
              react: ['react', 'react-dom'],
              router: ['react-router-dom'],
              helmet: ['react-helmet-async'],
            },
          },
    },
  },
}));
