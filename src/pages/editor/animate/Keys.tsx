import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'easing-interpolation', label: 'Easing & Interpolation' },
  { id: 'interpolation-types', label: 'Interpolation Types' },
  { id: 'applying-easing', label: 'Applying Easing' },
  { id: 'easing-graph-editor', label: 'Easing Graph Editor' },
  { id: 'opening-the-graph-editor', label: 'Opening the Graph Editor' },
  { id: 'graph-editor-anatomy', label: 'Graph Editor Anatomy' },
  { id: 'manipulating-bezier-handles', label: 'Manipulating Bezier Handles' },
  { id: 'moving-keyframe-values', label: 'Moving Keyframe Values in the Graph Editor' },
  { id: 'viewing-multiple-tracks', label: 'Viewing Multiple Tracks' },
  { id: 'easing-presets-reference', label: 'Easing Presets — Full Reference' },
  { id: 'standard-presets', label: 'Standard Presets' },
  { id: 'motion-presets', label: 'Motion Presets' },
  { id: 'cinematic-presets', label: 'Cinematic Presets' },
  { id: 'custom-presets', label: 'Custom Presets' },
];

export default function Keys() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Easing, Graph Editor & Presets | FlashFX Documentation"
        description="Complete reference for easing and interpolation, the graph editor, and easing presets in FlashFX."
        keywords="FlashFX, easing, interpolation, graph editor, bezier, easing presets, cubic bezier"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Animate Mode
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Easing & Interpolation</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="easing-interpolation" title="Easing & Interpolation">
            <p>Easing controls the rate of change between two keyframes. Without easing, all animation would be mechanical and linear — values would change at a perfectly constant rate, which reads as robotic. Easing introduces acceleration and deceleration, making motion feel natural and physically grounded.</p>
            <p>In FlashFX, easing is defined per-keyframe on the <strong className="text-white">outgoing</strong> side — the curve applied as the value leaves this keyframe toward the next. The incoming side of the destination keyframe can also have its own curve applied, and the two curves are composed.</p>
          </Section>

          <Section id="interpolation-types" title="Interpolation Types">
            <Table
              headers={['Type', 'Description', 'When to Use']}
              rows={[
                ['Linear', 'Constant rate of change from keyframe to keyframe', 'Mechanical motion, counters, technical indicators'],
                ['Ease In', 'Starts slow, accelerates toward the next keyframe', 'Elements gaining speed, objects falling'],
                ['Ease Out', 'Starts fast, decelerates into the next keyframe', 'Elements coming to rest, landing, settling'],
                ['Ease In-Out', 'Slow start, fast middle, slow end (S-curve)', 'Natural motion for most UI and character animation'],
                ['Hold', 'Value does not interpolate; jumps instantly at the next keyframe', 'Frame-by-frame animation, step changes, visibility switches'],
                ['Custom Bezier', 'A user-defined cubic bezier curve (four control points)', 'Precise control over velocity profile for any timing requirement'],
              ]}
            />
          </Section>

          <Section id="applying-easing" title="Applying Easing">
            <p><strong className="text-white">From the timeline:</strong> Right-click any keyframe or selection of keyframes and choose an interpolation type from the context menu.</p>
            <p><strong className="text-white">From the Properties Panel:</strong> When a keyframe is selected, the easing type and curve are shown in the Keyframe section of the panel. Click the type dropdown to change it, or click the curve thumbnail to open the graph editor.</p>
            <p><strong className="text-white">Keyboard shortcut (with keyframe(s) selected):</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">F9</code>,Ease In-Out (most commonly used)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+F9</code>,Ease In</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+F9</code>,Ease Out</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+Ctrl+F9</code>,Linear</li>
            </ul>
          </Section>

          <Section id="easing-graph-editor" title="Easing Graph Editor">
            <p>The graph editor is the primary tool for precise control over easing curves. It visualizes animation values over time and allows direct manipulation of the interpolation bezier handles.</p>
          </Section>

          <Section id="opening-the-graph-editor" title="Opening the Graph Editor">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click the graph icon in the timeline toolbar</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift+G</code></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The graph editor replaces the keyframe track view in the lower timeline panel. Toggle back to track view with the same shortcut or button.</li>
            </ul>
          </Section>

          <Section id="graph-editor-anatomy" title="Graph Editor Anatomy">
            <p>The graph editor displays selected property tracks as curves plotted on a value-over-time grid:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Horizontal axis:</strong> Time (frame number or timecode)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Vertical axis:</strong> Property value (pixels, degrees, percentage, etc., depending on the property)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Curve:</strong> The interpolated path between keyframe values</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keyframe dots:</strong> Square or round points on the curve at keyframe positions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Bezier handles:</strong> Two tangent handles extending from each keyframe dot — the left handle controls the incoming curve shape, the right handle controls the outgoing curve shape</li>
            </ul>
          </Section>

          <Section id="manipulating-bezier-handles" title="Manipulating Bezier Handles">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Drag a handle:</strong> Changes the slope and magnitude of the curve segment adjacent to the keyframe</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Linked handles (default):</strong> Dragging one handle moves the other symmetrically, keeping the curve smooth through the keyframe</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Breaking handles:</strong> Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt</code> and drag a handle to break the link — the two handles become independent, creating a sharp corner at the keyframe</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Re-linking handles:</strong> Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt</code> and click on a broken handle to relink it to the other side</li>
            </ul>
          </Section>

          <Section id="moving-keyframe-values" title="Moving Keyframe Values in the Graph Editor">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Select a keyframe dot in the graph editor and drag vertically to change its value</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag horizontally to move the keyframe in time (same as in the track view)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code> while dragging to constrain movement to a single axis</li>
            </ul>
          </Section>

          <Section id="viewing-multiple-tracks" title="Viewing Multiple Tracks">
            <p>Multiple property tracks can be displayed simultaneously in the graph editor. Each track is rendered in a unique color for identification. The tracks shown are determined by the properties selected in the track panel on the left side of the timeline.</p>
            <p><strong className="text-white">Normalize view:</strong> When property tracks have very different value ranges (e.g., Position X in hundreds of pixels vs. Opacity in 0–1), use the Normalize button to scale all curves to a uniform 0–1 display range for easier comparison of curve shapes.</p>
          </Section>

          <Section id="easing-presets-reference" title="Easing Presets — Full Reference">
            <p>FlashFX ships with a library of named easing presets. Presets can be applied to selected keyframes from the right-click context menu, the Properties Panel, or the Easing Preset panel (accessible from the timeline toolbar).</p>
            <p>All presets are defined as cubic bezier curves with four control point values: <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">P1x, P1y, P2x, P2y</code>,compatible with CSS <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">cubic-bezier()</code> notation.</p>
          </Section>

          <Section id="standard-presets" title="Standard Presets">
            <Table
              headers={['Preset Name', 'Cubic Bezier Values', 'Character']}
              rows={[
                ['Linear', '0, 0, 1, 1', 'Constant velocity'],
                ['Ease', '0.25, 0.1, 0.25, 1', "Browser default ease — slight ease-in, moderate ease-out"],
                ['Ease In', '0.42, 0, 1, 1', 'Slow start, fast end'],
                ['Ease Out', '0, 0, 0.58, 1', 'Fast start, slow end'],
                ['Ease In-Out', '0.42, 0, 0.58, 1', 'Symmetric S-curve'],
              ]}
            />
          </Section>

          <Section id="motion-presets" title="Motion Presets">
            <Table
              headers={['Preset Name', 'Cubic Bezier Values', 'Character']}
              rows={[
                ['Smooth', '0.4, 0, 0.2, 1', 'Material Design standard ease — clean and minimal'],
                ['Snappy', '0.2, 0, 0, 1', 'Fast initial burst, sharp deceleration'],
                ['Overshoot', '0.34, 1.56, 0.64, 1', 'Overshoots the target slightly, then settles back'],
                ['Anticipate', '0.36, 0, 0.66, -0.56', 'Pulls back before moving forward (cartoon-style anticipation)'],
                ['Spring', '0.5, 1.5, 0.75, 1', 'Bounces past the target and returns'],
                ['Decelerate', '0, 0, 0.2, 1', 'Maximum initial velocity, strong deceleration'],
                ['Accelerate', '0.4, 0, 1, 1', 'Strong initial acceleration'],
              ]}
            />
          </Section>

          <Section id="cinematic-presets" title="Cinematic Presets">
            <Table
              headers={['Preset Name', 'Cubic Bezier Values', 'Character']}
              rows={[
                ['Film Ease', '0.25, 0.46, 0.45, 0.94', 'Film-style ease — slightly weighted toward the end'],
                ['Heavy In', '0.895, 0.03, 0.685, 0.22', 'Very slow start, like a heavy object beginning to move'],
                ['Heavy Out', '0.165, 0.84, 0.44, 1', 'Fast deceleration, like a heavy object coming to rest'],
                ['Expo In', '0.95, 0.05, 0.795, 0.035', 'Exponential acceleration — near-still start'],
                ['Expo Out', '0.19, 1, 0.22, 1', 'Exponential deceleration — near-still end'],
                ['Expo In-Out', '1, 0, 0, 1', 'Sharp S-curve with near-still start and end'],
                ['Circ In', '0.6, 0.04, 0.98, 0.335', 'Circular arc easing in'],
                ['Circ Out', '0.075, 0.82, 0.165, 1', 'Circular arc easing out'],
              ]}
            />
          </Section>

          <Section id="custom-presets" title="Custom Presets">
            <p>Any custom bezier curve can be saved as a named preset:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Define a custom curve in the graph editor or via the four bezier value inputs</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Click <strong className="text-white">Save as Preset</strong> in the easing panel</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Give it a name — it appears in the Custom section of the preset library</li>
            </ul>
            <p>Custom presets are stored per-account and available across all projects.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
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
            <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/70 border-b border-white/5">
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
