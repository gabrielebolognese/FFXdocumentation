import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextModifiers() {
  return (
    <Layout>
      <SEO
        title="Text Transform, Animation Modes & Stagger | FlashFX Documentation"
        description="Complete reference for text transform properties, animation modes (block, line, word, character), and stagger animation in FlashFX."
        keywords="FlashFX, text animation, character mode, word mode, stagger, text transform, per-unit animation"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Text
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Transform, Animation Modes & Stagger</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section title="10. Text Transform Properties">
            <p>Text elements participate fully in the transform system (position, rotation, scale, skew, opacity, anchor point — all as described in Document 02, Section 3).</p>
            <p>Additionally, text has several transform properties that are exclusive to it:</p>

            <p><strong className="text-white">10.1 Character Rotation</strong></p>
            <p>In Character or Word animation mode, individual characters can have independent rotation values applied. This produces rotated letter effects without converting to outlines.</p>

            <p><strong className="text-white">10.2 Character Position Offset</strong></p>
            <p>In Character or Word mode, each character unit can have an X and Y position offset relative to its natural position in the text flow. This enables scatter, fan, and 3D-arc text arrangements.</p>

            <p><strong className="text-white">10.3 Perspective Warp on Text</strong></p>
            <p>A perspective warp envelope can be applied to the entire text element, distorting the text as if it is receding into the distance or viewed at an angle. Four corner handles control the warp. Perspective warp is animatable.</p>

            <p><strong className="text-white">10.4 Text Path Alignment</strong></p>
            <p>When text is placed on a path (see Section 13), the following alignment properties become available:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Path Offset</strong> — how far along the path the text starts (0 = path start)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Character Spacing on Path</strong> — adjusts letter spacing specifically for curved path placement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Flip on Path</strong> — mirrors the text to the opposite side of the path</li>
            </ul>
          </Section>

          <Section title="11. Text Animation Modes">
            <p>Text animation modes determine the granularity at which the animation system interacts with text content. This is one of FlashFX's most powerful and distinctive features.</p>

            <p><strong className="text-white">11.1 Block Mode</strong></p>
            <p>The entire text element is treated as a single unit for animation purposes.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>One set of transform and property tracks in the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Position, rotation, scale, opacity, and all fill properties can be keyframed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Any animation applied affects the entire text block simultaneously</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Most basic text animations — fades, slides, scale entries and exits.</p>

            <p><strong className="text-white">11.2 Line Mode</strong></p>
            <p>The text is divided into individual lines (determined by line breaks — both hard returns and soft wraps). Each line is an independently animatable unit.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The timeline shows a track for each line</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Properties animatable per line: position, rotation, scale, opacity, fill color, blur</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Lines animate independently but remain part of the text element (font and paragraph settings still apply globally)</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Staggered line reveals, one-line-at-a-time subtitle animations, cascading title entries.</p>

            <p><strong className="text-white">11.3 Word Mode</strong></p>
            <p>The text is divided into individual words. Each word is independently animatable.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The timeline shows a track per word (or the stagger system controls timing automatically)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All per-character properties are available per word</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Word boundaries are defined by spaces; punctuation is attached to the preceding word</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Typewriter-style effects, highlighted word animations, flowing conversational caption reveals.</p>

            <p><strong className="text-white">11.4 Character Mode</strong></p>
            <p>The text is divided into individual glyphs. Each character is independently animatable.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The timeline can show a track per character (or the stagger system automates timing)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>All transform properties (position, rotation, scale, skew, opacity, color, blur) are available per character</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>This mode enables scramble/shuffle text effects, wave-like motion, 3D flip-in effects, and other expressive typographic animations</li>
            </ul>
            <p><strong className="text-white">Performance note:</strong> Character mode on long strings generates many active animation tracks. See Best Practices (Document 00) for Character mode performance guidance.</p>

            <p><strong className="text-white">11.5 Switching Between Modes</strong></p>
            <p>Changing the animation mode on a text element that already has animation data will prompt a conversion dialog:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Convert:</strong> Existing animation data is redistributed to the new granularity as best as possible (block animation becomes applied to all units)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Reset:</strong> Animation data is cleared and the text element starts fresh in the new mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Cancel:</strong> No change is made</li>
            </ul>
          </Section>

          <Section title="12. Stagger & Per-Unit Animation">
            <p><strong className="text-white">12.1 Stagger System</strong></p>
            <p>Rather than manually keyframing each character, word, or line individually, the stagger system applies a time offset to each successive unit, creating a sequential animation cascade automatically.</p>
            <p><strong className="text-white">Stagger Settings:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Delay per Unit</strong> — time in milliseconds between the start of each successive unit's animation. Default: 50ms.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Stagger Direction</strong> — Forward (first character first), Backward (last character first), From Center (outward from center), From Edges (inward toward center), Random (each unit starts at a random delay within a configurable range)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Easing Override:</strong> An easing curve applied to the stagger timing envelope itself (controls the acceleration of the stagger sequence), separate from the easing applied to each unit's individual animation</li>
            </ul>

            <p><strong className="text-white">12.2 Per-Unit Properties</strong></p>
            <p>When stagger is active, the following properties can be defined as the animated state that each unit transitions from:</p>
            <Table
              headers={['Property', 'Description']}
              rows={[
                ['Opacity', 'Fade in from 0% opacity'],
                ['Position X / Y', 'Slide in from an offset position'],
                ['Scale X / Y', 'Scale in from a smaller or larger size'],
                ['Rotation', 'Rotate in from a defined angle'],
                ['Blur', 'Defocus in from a blurred state'],
                ['Color', 'Transition from an alternate color to the primary color'],
                ['Skew X / Y', 'Straighten in from a skewed state'],
                ['Baseline Shift', 'Rise up from below the baseline'],
              ]}
            />
            <p>Multiple properties can be combined. Example: entering from opacity 0, position Y +30px, blur radius 8px simultaneously creates a "lift in from below while fading and sharpening" effect.</p>

            <p><strong className="text-white">12.3 Stagger With Manual Overrides</strong></p>
            <p>The stagger system provides automated timing, but individual units can receive manual overrides on top of the stagger:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Select a specific unit's keyframe in the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Adjust the keyframe position to deviate from the stagger timing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Add additional keyframes for properties not covered by the stagger definition</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
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
