import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'mounting', label: 'Mounting' },
  { id: 'positioning', label: 'Positioning' },
  { id: 'resize-sync', label: 'Resize Synchronization' },
  { id: 'overflow', label: 'Clipping' },
];

export default function CanvasIntegration() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Canvas Integration | FlashFX Documentation"
        description="How the Three.js renderer canvas is mounted inside the 2D artboard, positioned, and kept in sync on resize."
        keywords="FlashFX, 3D, canvas, integration, artboard, resize"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Canvas Integration</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The 2D canvas system controls where a 3D viewport sits — position, size, rotation, opacity — while the Three.js renderer controls what is drawn inside it. This split is what makes a 3D shape behave like any other canvas element.
          </p>

          <Section id="mounting" title="Mounting">
            <p>ThreeDShapeRenderer creates a div with position: relative and overflow: hidden, then passes it to ThreeDShapeElement as the mount container. Inside, ThreeDEngine creates a WebGLRenderer, sets its DOM element to display: block with 100% width and height, and appends it to that container.</p>
          </Section>

          <Section id="positioning" title="Positioning">
            <p>The host div is placed inside the 2D artboard by Canvas.tsx using absolute positioning:</p>
            <CodeBlock>{`<div
  style={{
    position: 'absolute',
    left: el.x,
    top: el.y,
    width: el.width,
    height: el.height,
    opacity: el.opacity ?? 1,
    overflow: 'hidden',
    pointerEvents: activeThreeDElementId === el.id ? 'auto' : 'none',
    zIndex: elements.indexOf(el) + 1,
    borderRadius: el.borderRadius ?? 0,
  }}
>
  <ThreeDShapeRenderer ... />
</div>`}</CodeBlock>
            <p>Zoom and pan need no special handling. The CSS transform on the artboard container applies to the 3D div automatically, because the div is a child of the artboard and inherits the transform.</p>
          </Section>

          <Section id="resize-sync" title="Resize Synchronization">
            <p>A useEffect in ThreeDShapeRenderer calls resize() whenever the element dimensions change, which updates both the renderer size and the camera aspect ratio:</p>
            <CodeBlock>{`useEffect(() => {
  if (instanceRef.current) {
    instanceRef.current.resize(element.width, element.height);
  }
}, [element.width, element.height]);`}</CodeBlock>
          </Section>

          <Section id="overflow" title="Clipping">
            <p>Both the outer positioning div in Canvas.tsx and the inner container in ThreeDShapeRenderer set overflow: hidden. If a 3D viewport ever bleeds outside the canvas boundary, one of those two is missing.</p>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}


function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-white/80">
      <code>{children}</code>
    </pre>
  );
}

