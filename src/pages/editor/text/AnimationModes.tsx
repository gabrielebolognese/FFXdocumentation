import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function AnimationModes() {
  return (
    <Layout>
      <SEO
        title="Text Animation Modes | FlashFX Documentation"
        description="Reference for Block, Line, Word, and Character animation modes in FlashFX."
        keywords="FlashFX, text animation modes, block mode, line mode, word mode, character mode"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Animation Modes</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text animation modes determine the granularity at which the animation system interacts with text content. This is one of FlashFX's most powerful and distinctive features.
          </p>
          <Section title="Block Mode">
            <p>The entire text element is treated as a single unit for animation purposes.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>One set of transform and property tracks in the timeline</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Position, rotation, scale, opacity, and all fill properties can be keyframed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Any animation applied affects the entire text block simultaneously</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Most basic text animations,fades, slides, scale entries and exits.</p>
          </Section>
          <Section title="Line Mode">
            <p>The text is divided into individual lines (determined by line breaks,both hard returns and soft wraps). Each line is an independently animatable unit.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The timeline shows a track for each line</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Properties animatable per line: position, rotation, scale, opacity, fill color, blur</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Lines animate independently but remain part of the text element</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Staggered line reveals, one-line-at-a-time subtitle animations, cascading title entries.</p>
          </Section>
          <Section title="Word Mode">
            <p>The text is divided into individual words. Each word is independently animatable.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The timeline shows a track per word (or the stagger system controls timing automatically)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All per-character properties are available per word</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Word boundaries are defined by spaces; punctuation is attached to the preceding word</li>
            </ul>
            <p><strong className="text-white">Use for:</strong> Typewriter-style effects, highlighted word animations, flowing conversational caption reveals.</p>
          </Section>
          <Section title="Character Mode">
            <p>The text is divided into individual glyphs. Each character is independently animatable.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The timeline can show a track per character (or the stagger system automates timing)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>All transform properties (position, rotation, scale, skew, opacity, color, blur) are available per character</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>This mode enables scramble/shuffle text effects, wave-like motion, 3D flip-in effects, and other expressive typographic animations</li>
            </ul>
            <p><strong className="text-white">Performance note:</strong> Character mode on long strings generates many active animation tracks. See Best Practices for Character mode performance guidance.</p>
          </Section>
          <Section title="Switching Between Modes">
            <p>Changing the animation mode on a text element that already has animation data will prompt a conversion dialog:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Convert:</strong> Existing animation data is redistributed to the new granularity as best as possible</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Reset:</strong> Animation data is cleared and the text element starts fresh in the new mode</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Cancel:</strong> No change is made</li>
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
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
