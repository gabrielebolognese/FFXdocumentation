import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-loop', label: 'The Loop' },
  { id: 'dirty-events', label: 'Events That Mark the Scene Dirty' },
  { id: 'extending', label: 'Working With the Pattern' },
];

export default function DirtyFlagRenderLoop() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Dirty Flag Render Loop | FlashFX Documentation"
        description="The render-on-demand loop that keeps idle FlashFX 3D shapes at zero GPU cost, and the full list of events that mark a scene dirty."
        keywords="FlashFX, 3D, render loop, performance, dirty flag"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            3D System
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Dirty Flag Render Loop</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The render loop uses a render-on-demand pattern. requestAnimationFrame runs every frame, but renderer.render() only fires when the dirty flag is set — so an idle shape consumes no GPU time.
          </p>

          <Section id="the-loop" title="The Loop">
            <CodeBlock>{`private startLoop(): void {
  const loop = () => {
    if (this.disposed) return;
    this.animFrameId = requestAnimationFrame(loop);
    this.orbit.update();
    if (this.dirty) {
      this.renderer.render(this.scene, this.camera);
      this.dirty = false;
    }
  };
  loop();
}`}</CodeBlock>
            <p>orbit.update() still runs every frame because OrbitControls damping needs continuous updates when enabled. Only the render call is gated.</p>
          </Section>

          <Section id="dirty-events" title="Events That Mark the Scene Dirty">
            <Table
              headers={['Event', 'Location']}
              rows={[
                ['OrbitControls change event', 'ThreeDEngine.ts:71'],
                ['Gizmo drag (change event)', 'ThreeDEngine.ts:107'],
                ['selectObject()', 'ThreeDEngine.ts:173'],
                ['addPrimitive()', 'ThreeDEngine.ts:187'],
                ['removeObject()', 'ThreeDEngine.ts:233'],
                ['setGizmoMode()', 'ThreeDEngine.ts:238'],
                ['updateTransform()', 'ThreeDEngine.ts:243'],
                ['updateMaterial()', 'ThreeDEngine.ts:248'],
                ['updateGeometry()', 'ThreeDEngine.ts:253'],
                ['updateEnvironment()', 'ThreeDEngine.ts:263'],
                ['resize()', 'ThreeDEngine.ts:312'],
                ['setInteracting() on ThreeDShapeElement', 'ThreeDShapeElement.ts:55'],
                ['markDirty() called directly', 'ThreeDEngine.ts:153-154'],
              ]}
            />
          </Section>

          <Section id="extending" title="Working With the Pattern">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>After any operation that changes the visual state of the scene, call engine.markDirty().</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Never call renderer.render() directly — let the loop handle it.</span></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><span>Marking dirty is cheap. When in doubt, mark it.</span></li>
            </ul>
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

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

