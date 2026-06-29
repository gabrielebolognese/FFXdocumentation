import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'enabling-and-disabling-snapping', label: 'Enabling and Disabling Snapping' },
  { id: 'snap-targets', label: 'Snap Targets' },
  { id: 'snap-modes', label: 'Snap Modes' },
  { id: 'snap-tolerance', label: 'Snap Tolerance' },
  { id: 'pixel-snapping', label: 'Pixel Snapping' },
  { id: 'smart-guides', label: 'Smart Guides' },
  { id: 'snapping-during-transforms', label: 'Snapping During Transform Operations' },
  { id: 'snapping-with-multiple-elements', label: 'Snapping with Multiple Elements' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
];

export default function SnappingSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Snapping System | FlashFX Documentation"
        description="Learn how snapping works in FlashFX for precise element positioning and alignment."
        keywords="FlashFX, snapping, alignment, precision"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Snapping System</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Snapping automatically aligns elements to grid lines, guides, canvas edges, and other elements when moving or resizing. It ensures pixel-perfect positioning and consistent spacing.
          </p>

          <Section id="enabling-and-disabling-snapping" title="Enabling and Disabling Snapping">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Toggle snapping</strong>,View → Snap to Grid/Guides (or click the snap icon in the toolbar)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Temporary disable</strong>,Hold Ctrl/Cmd while dragging to bypass snapping</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyboard shortcut</strong>,Ctrl/Cmd + Shift + ; (toggles snap on/off)</li>
            </ul>
            <p className="mt-4">
              When snapping is enabled, a magnet icon appears highlighted in the toolbar. When disabled, the icon is gray.
            </p>
          </Section>

          <Section id="snap-targets" title="Snap Targets">
            <p>Elements can snap to multiple targets:</p>
            <Table
              headers={['Target', 'Description', 'Visual Indicator']}
              rows={[
                ['Grid lines', 'Major and minor grid intersections', 'Grid line highlights'],
                ['Guides', 'User-created alignment guides', 'Guide line highlights cyan'],
                ['Canvas edges', 'Top, bottom, left, right canvas boundaries', 'Edge line highlights'],
                ['Canvas center', 'Horizontal and vertical center of canvas', 'Crosshair appears'],
                ['Element edges', 'Bounding box edges of other elements', 'Smart guide appears (magenta)'],
                ['Element centers', 'Horizontal and vertical centers of other elements', 'Smart guide with center marker'],
              ]}
            />
          </Section>

          <Section id="snap-modes" title="Snap Modes">
            <p>Configure which snap targets are active in Edit → Preferences → Snapping:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap to Grid</strong>,Align to grid intersections</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap to Guides</strong>,Align to user-created guides</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap to Canvas</strong>,Align to canvas edges and center</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap to Objects</strong>,Align to other element edges and centers</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Snap to Pixels</strong>,Force whole-pixel positioning (prevents subpixel blur)</li>
            </ul>
          </Section>

          <Section id="snap-tolerance" title="Snap Tolerance">
            <p>
              Snap tolerance defines how close an element must be to a snap target before snapping occurs. Measured in pixels at 100% zoom.
            </p>
            <p className="mt-4">Adjustable in preferences:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Low tolerance</strong>,2-4 pixels (requires very close alignment)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Medium tolerance</strong>,6-8 pixels (default, balanced)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">High tolerance</strong>,10-16 pixels (snaps more aggressively)</li>
            </ul>
            <p className="mt-4">
              Higher tolerance values make snapping "stickier" but can interfere with fine positioning. Lower values require more precision but give greater control.
            </p>
          </Section>

          <Section id="pixel-snapping" title="Pixel Snapping">
            <p>
              Pixel snapping rounds element positions to whole pixels, preventing antialiasing blur caused by subpixel positioning. This is critical for sharp UI elements and icons.
            </p>
            <p className="mt-4">When to use pixel snapping:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Designing interface elements (buttons, icons, panels)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Creating pixel art or low-resolution graphics</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Ensuring crisp text rendering</li>
            </ul>
            <p className="mt-4">When to disable pixel snapping:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Smooth animations requiring subpixel movement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>High-resolution artwork where pixel alignment is irrelevant</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Curved paths and organic shapes</li>
            </ul>
          </Section>

          <Section id="smart-guides" title="Smart Guides">
            <p>
              Smart guides appear automatically when dragging elements and show alignment with nearby objects. They provide visual feedback for relative positioning.
            </p>
            <p className="mt-4">Smart guide indicators:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Edge alignment</strong>,Magenta line when edges align</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Center alignment</strong>,Magenta line with center marker</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Equal spacing</strong>,Dimension annotations showing distances</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Size matching</strong>,Dimension annotations when element sizes match</li>
            </ul>
          </Section>

          <Section id="snapping-during-transforms" title="Snapping During Transform Operations">
            <p>Snapping behavior varies by operation:</p>
            <Table
              headers={['Operation', 'Snap Behavior']}
              rows={[
                ['Move (drag)', 'Snaps element edges and center to all targets'],
                ['Resize (corner drag)', 'Snaps edges to grid, guides, and canvas edges'],
                ['Rotate', 'No snapping (rotation is continuous)'],
                ['Scale (with modifier)', 'Maintains snap to origin point'],
              ]}
            />
          </Section>

          <Section id="snapping-with-multiple-elements" title="Snapping with Multiple Elements">
            <p>
              When moving multiple selected elements, snapping uses the bounding box of the entire selection:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Selection bounding box snaps to targets</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Relative positions between selected elements are preserved</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Individual element snap points are ignored</li>
            </ul>
          </Section>

          <Section id="troubleshooting" title="Troubleshooting">
            <p><strong className="text-white">Elements won't snap:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Check that snapping is enabled (magnet icon highlighted in toolbar)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Verify the correct snap modes are enabled in preferences</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Increase snap tolerance if elements are close but not snapping</li>
            </ul>
            <p className="mt-4"><strong className="text-white">Snapping is too aggressive:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Reduce snap tolerance in preferences</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Disable specific snap modes (e.g., turn off "Snap to Objects")</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Temporarily disable snapping with Ctrl/Cmd while dragging</li>
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
