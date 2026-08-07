import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function TextTransform() {
  return (
    <Layout>
      <SEO
        title="Text Transform Properties | FlashFX Documentation"
        description="Reference for text transform properties including character rotation, position offset, and perspective warp in FlashFX."
        keywords="FlashFX, text transform, character rotation, perspective warp, text path alignment"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Text</span>
          <h1 className="text-4xl font-bold text-white mb-6">Text Transform Properties</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Text elements participate fully in the transform system (position, rotation, scale, skew, opacity, anchor point). Additionally, text has several transform properties that are exclusive to it.
          </p>
          <Section title="Character Rotation">
            <p>In Character or Word animation mode, individual characters can have independent rotation values applied. This produces rotated letter effects without converting to outlines.</p>
          </Section>
          <Section title="Character Position Offset">
            <p>In Character or Word mode, each character unit can have an X and Y position offset relative to its natural position in the text flow. This enables scatter, fan, and 3D-arc text arrangements.</p>
          </Section>
          <Section title="Perspective Warp on Text">
            <p>A perspective warp envelope can be applied to the entire text element, distorting the text as if it is receding into the distance or viewed at an angle. Four corner handles control the warp. Perspective warp is animatable.</p>
          </Section>
          <Section title="Text Path Alignment">
            <p>When text is placed on a path, the following alignment properties become available:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Path Offset</strong> — how far along the path the text starts (0 = path start)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Character Spacing on Path</strong> — adjusts letter spacing specifically for curved path placement</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Flip on Path</strong> — mirrors the text to the opposite side of the path</li>
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
