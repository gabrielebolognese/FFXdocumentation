import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function ConvertToOutlines() {
  return (
    <Layout>
      <SEO
        title="Converting Text to Outlines | FlashFX Documentation"
        description="Learn when and how to convert text to vector outlines in FlashFX."
        keywords="FlashFX, convert text to outlines, create outlines, vector text, editable glyphs"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Converting Text to Outlines</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Converting text to outlines transforms the text element into vector shapes. The glyphs become editable paths, losing all text-specific properties (font, kerning, text animation modes, etc.) in exchange for full vector editability.
          </p>
          <Section title="When to Convert">
            <p><strong className="text-white">Convert when:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Exporting a .flashfx file for use on another device that may not have the same fonts installed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Editing individual letterform shapes (cutting notches, extending serifs, creating custom lettermarks)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Applying boolean operations to text shapes</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Applying per-vertex animation to glyph paths</li>
            </ul>
            <p><strong className="text-white">Do not convert when:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The text content may need to be edited again</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Text animation modes (character, word) are being used (they do not work on outline shapes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The font renders correctly on all target systems</li>
            </ul>
          </Section>
          <Section title="How to Convert">
            <p>Select the text element, then:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">-</span>
                <span>
                  Text -&gt; Create Outlines (or{' '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+O</code>
                  )
                </span>
              </li>
            </ul>
            <p>The text element is replaced by a group of vector paths, one per character (or one compound path per word, depending on the setting). Each path is fully editable in Vertex Edit mode.</p>
          </Section>
          <Section title="Preserving Original Text">
            <p>
              Before converting, duplicate the text element (
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+D</code>
              ) and hide the duplicate. This preserves the editable original as a hidden backup while the outlined version is used for design work.
            </p>
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
