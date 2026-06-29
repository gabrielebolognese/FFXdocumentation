import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'multi-property-animation', label: 'Multi-Property Animation' },
  { id: 'animating-multiple-properties', label: 'Animating Multiple Properties Simultaneously' },
  { id: 'per-property-easing', label: 'Per-Property Easing' },
  { id: 'property-offset-timing', label: 'Property Offset Timing' },
  { id: 'animating-colors', label: 'Animating Colors' },
  { id: 'color-interpolation-modes', label: 'Color Interpolation Modes' },
  { id: 'animating-gradient-colors', label: 'Animating Gradient Colors' },
  { id: 'animating-opacity-vs-fill-alpha', label: 'Animating Opacity vs. Fill Alpha' },
  { id: 'looping-cycle-animations', label: 'Looping & Cycle Animations' },
  { id: 'loop-types', label: 'Loop Types' },
  { id: 'setting-up-a-loop', label: 'Setting Up a Loop' },
  { id: 'loop-delay', label: 'Loop Delay' },
  { id: 'loop-start-offset', label: 'Loop Start Offset' },
  { id: 'cycle-animations', label: 'Cycle Animations with Expression-Style Looping' },
];

export default function AnimationMixing() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Multi-Property Animation, Colors & Looping | FlashFX Documentation"
        description="Complete reference for multi-property animation, animating colors, and looping and cycle animations in FlashFX."
        keywords="FlashFX, multi-property animation, animating colors, looping, cycle animation, ping pong, stagger"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Animate Mode
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Multi-Property Animation</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="multi-property-animation" title="Multi-Property Animation">
            <p>A single element can have any number of properties animated simultaneously. Each property has its own independent track in the timeline with its own keyframes and easing curves. There is no inherent conflict between tracks,Position X, Rotation, Opacity, and Fill Color can all be animated at the same time, each with completely different keyframe counts and timing.</p>
          </Section>

          <Section id="animating-multiple-properties" title="Animating Multiple Properties Simultaneously">
            <p>When Record Mode is active, any property changed during the same frame creates a keyframe on that property's track at the current playhead position. You can adjust as many properties as needed before advancing the playhead,all changes at the same frame are recorded simultaneously.</p>
            <p><strong className="text-white">Example workflow for a combined entry animation:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Position the playhead at frame 0. Set the element to its starting state: position off-screen, opacity 0, scale 0.8.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Move the playhead to frame 24. Set the element to its resting state: position on-screen, opacity 100, scale 1.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>FlashFX creates three separate tracks (Position, Opacity, Scale) each with two keyframes. The tracks can now be edited independently.</li>
            </ul>
          </Section>

          <Section id="per-property-easing" title="Per-Property Easing">
            <p>Each property track has its own easing, completely independent of other tracks. This is one of the most important aspects of professional animation:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Position might use a strong Ease Out to simulate deceleration</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Opacity might use a Linear fade</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Scale might use an Overshoot preset to add bounce on landing</li>
            </ul>
            <p>These three curves produce together a single fluid motion that feels physically coherent even though each property follows a different timing profile.</p>
          </Section>

          <Section id="property-offset-timing" title="Property Offset Timing">
            <p>Properties do not need to begin and end at the same keyframe. An element can:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Begin moving at frame 0 and finish at frame 30</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Begin fading in at frame 10 (10 frames after the motion starts)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Begin scaling at frame 5 and finish at frame 20</li>
            </ul>
            <p>This staggered timing produces layered, nuanced motion rather than flat simultaneous transitions.</p>
          </Section>

          <Section id="animating-colors" title="Animating Colors">
            <p>Color properties,fill color, stroke color, shadow color, glow color,are fully animatable. FlashFX interpolates between color values across keyframes, producing smooth color transitions.</p>
          </Section>

          <Section id="color-interpolation-modes" title="Color Interpolation Modes">
            <p>FlashFX supports two color interpolation modes:</p>
            <Table
              headers={['Mode', 'Description', 'When to Use']}
              rows={[
                ['RGB', 'Interpolates each R, G, and B channel independently. Fast and predictable.', 'Most use cases. May produce desaturated intermediate colors for complementary color pairs.'],
                ['HSL', 'Interpolates through the Hue, Saturation, and Lightness color space. Travels the hue wheel between the two colors.', 'Color wheel transitions, rainbow effects, hue animations. Produces more vibrant intermediates.'],
              ]}
            />
            <p>Set the interpolation mode per-keyframe via the right-click context menu on a color keyframe, or globally in Animation Settings.</p>
          </Section>

          <Section id="animating-gradient-colors" title="Animating Gradient Colors">
            <p>When a fill uses a gradient, each gradient stop is individually animatable:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Each stop has its own color track in the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Stop positions (0–100% across the gradient) are also animatable</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The number of stops is fixed for animation,you cannot add or remove stops between keyframes</li>
            </ul>
          </Section>

          <Section id="animating-opacity-vs-fill-alpha" title="Animating Opacity vs. Fill Alpha">
            <p>There are two separate ways to control transparency in FlashFX, and understanding the difference matters for animation:</p>
            <Table
              headers={['Property', 'Description', 'Animatable']}
              rows={[
                ['Element Opacity', 'Applies to the entire element, including all fills, strokes, and effects. Affects children of a group.', 'Yes,on the Opacity track under Transform'],
                ['Fill Color Alpha', 'The A channel of the fill color. Affects only that fill layer. Does not affect strokes or effects.', 'Yes,on the Fill Color track (RGBA)'],
                ['Stroke Color Alpha', 'The A channel of the stroke color. Affects only that stroke layer.', 'Yes,on the Stroke Color track'],
              ]}
            />
          </Section>

          <Section id="looping-cycle-animations" title="Looping & Cycle Animations">
            <p>Looping allows a section of keyframed animation to repeat automatically without duplicating keyframes. This is essential for ambient animations, loading indicators, and any motion that needs to cycle continuously.</p>
          </Section>

          <Section id="loop-types" title="Loop Types">
            <Table
              headers={['Type', 'Description']}
              rows={[
                ['Repeat', 'The animated sequence plays forward, then restarts from the beginning. N repetitions or infinite.'],
                ['Ping Pong', 'The sequence plays forward, then plays backward, then forward again. Creates a seamless back-and-forth oscillation.'],
                ['Offset Repeat', 'Like Repeat, but each cycle starts where the previous cycle ended. The element drifts progressively over time. Useful for continuous movement (scrolling, spinning).'],
              ]}
            />
          </Section>

          <Section id="setting-up-a-loop" title="Setting Up a Loop">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Select the element to loop</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>In the Properties Panel (in Animate mode), locate the <strong className="text-white">Loop</strong> section</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Set the <strong className="text-white">Loop Type</strong> (Repeat, Ping Pong, or Offset Repeat)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Set the <strong className="text-white">Loop Count</strong>,number of repetitions, or ∞ for infinite looping</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">5.</span>Set the <strong className="text-white">Loop Range</strong>: either the full document duration or a custom frame range (In and Out)</li>
            </ul>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-4">
              <h4 className="text-base font-semibold text-white mb-2">Loop Range and Keyframes</h4>
              <p>The loop range should match the span of keyframes you want to cycle. If the first and last keyframes within the loop range are at different values, there will be a visible jump at the loop boundary. For seamless looping, ensure the last keyframe value matches the first keyframe value,or use Ping Pong mode which automatically reverses back to the start.</p>
            </div>
          </Section>

          <Section id="loop-delay" title="Loop Delay">
            <p><strong className="text-white">Loop Delay:</strong> Time in milliseconds inserted between each cycle. A delay of 0 produces immediate continuous looping. Adding delay creates a pause at the end of each cycle before the next begins.</p>
          </Section>

          <Section id="loop-start-offset" title="Loop Start Offset">
            <p><strong className="text-white">Start Offset:</strong> When the loop begins relative to the document timeline. Setting a start offset allows multiple copies of the same looping element to be staggered,each instance starts its loop at a different point in the cycle, creating variation without additional keyframes.</p>
          </Section>

          <Section id="cycle-animations" title="Cycle Animations with Expression-Style Looping">
            <p>For continuous, value-drifting animations (such as a constantly rotating indicator or an infinitely scrolling element), use <strong className="text-white">Offset Repeat</strong> looping:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create one cycle of the animation (e.g., 0° to 360° rotation over 60 frames)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Set Loop Type to <strong className="text-white">Offset Repeat</strong></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Set Loop Count to ∞</li>
            </ul>
            <p>The rotation continues to accumulate,frame 61 is at 360°, frame 121 is at 720°, and so on,with no jump discontinuity at the loop boundary.</p>
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
