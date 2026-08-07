import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'track-organization', label: 'Track Organization' },
  { id: 'animatable-properties', label: 'Animatable Properties' },
  { id: 'track-visibility-and-solo', label: 'Track Visibility and Solo' },
];

export default function PropertyTracks() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Property Tracks | FlashFX Documentation"
        description="Reference for property track organization, animatable properties, and track visibility in FlashFX."
        keywords="FlashFX, property tracks, animatable properties, timeline tracks, solo track"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Property Tracks</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="track-organization" title="Track Organization">
            <p>Each animated element in the timeline has a row with an expand button. Expanding the row reveals individual property tracks — one track per animated property.</p>
            <p><strong className="text-white">Track hierarchy:</strong></p>
            <div className="bg-white/5 rounded-lg p-4 font-mono text-xs text-white/70 leading-relaxed">
              <p>Element Name</p>
              <p className="pl-4">Transform</p>
              <p className="pl-8">Position X / Position Y</p>
              <p className="pl-8">Scale X / Scale Y</p>
              <p className="pl-8">Rotation</p>
              <p className="pl-8">Skew X / Skew Y</p>
              <p className="pl-8">Opacity</p>
              <p className="pl-4">Fill (Layer 1)</p>
              <p className="pl-8">Color / Opacity</p>
              <p className="pl-8">(gradient-specific properties)</p>
              <p className="pl-4">Stroke</p>
              <p className="pl-8">Color / Width / Dash Offset</p>
              <p className="pl-4">Shadow</p>
              <p className="pl-8">Offset X / Y / Blur Radius / Opacity</p>
              <p className="pl-4">Filters</p>
              <p className="pl-8">(one sub-track per filter parameter)</p>
            </div>
          </Section>

          <Section id="animatable-properties" title="Animatable Properties — Complete List">
            <p><strong className="text-white">Transform:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Position X, Position Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Scale X, Scale Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Rotation, Skew X, Skew Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Opacity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Anchor Point X, Anchor Point Y</li>
            </ul>
            <p><strong className="text-white">Shape-Specific:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Corner Radius (all corners, or per-corner)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Arc Start Angle, Arc End Angle</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Inner Radius (circles)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Star Points, Inner Radius, Outer Radius</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Path vertex positions (per vertex, in Vertex Edit mode)</li>
            </ul>
            <p><strong className="text-white">Material and Fill:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Fill Color (solid fill), Fill Opacity (per layer)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Gradient Stop Colors (per stop), Gradient Stop Positions (per stop)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Gradient Angle, Gradient Center X / Y</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Pattern Scale, Pattern Rotation, Pattern Offset X / Y</li>
            </ul>
            <p><strong className="text-white">Stroke:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Stroke Color, Stroke Width, Stroke Opacity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Dash Offset (for moving dash animations)</li>
            </ul>
            <p><strong className="text-white">Shadow / Glow:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Drop Shadow Offset X / Y, Blur Radius, Color, Opacity</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Inner Shadow properties (same set)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Outer/Inner Glow Blur Radius, Color, Opacity</li>
            </ul>
            <p><strong className="text-white">Text:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All transform properties (as shapes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Font Size (per character in character mode)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Character Spacing, Baseline Shift (per character), Fill Color (per character)</li>
            </ul>
            <p><strong className="text-white">Image:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All transform properties</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Crop Frame (X, Y, Width, Height)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All filter parameters (per filter)</li>
            </ul>
          </Section>

          <Section id="track-visibility-and-solo" title="Track Visibility and Solo">
            <p>Each property track has:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Eye toggle</strong> — hides the track without deleting keyframes. The property returns to its default state visually, but keyframes are preserved.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>
                <span>
                  <strong className="text-white">Solo (</strong>
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">S</code>
                  <strong className="text-white">)</strong>
                  {' — when any track is soloed, only that track\'s animation is active; all others are suspended. Useful for isolating a specific property\'s animation for review.'}
                </span>
              </li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
