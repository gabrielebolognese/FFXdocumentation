import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'what-easing-does', label: 'What Easing Does' },
  { id: 'applying-easing', label: 'Applying Easing' },
  { id: 'easing-direction', label: 'Easing Direction' },
];

export default function EasingInterpolation() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Easing and Interpolation | FlashFX Documentation"
        description="How easing controls velocity profiles between keyframes in FlashFX."
        keywords="FlashFX, easing, interpolation, keyframe velocity, animation timing"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Animate Mode</span>
          <h1 className="text-4xl font-bold text-white mb-6">Easing and Interpolation</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="what-easing-does" title="What Easing Does">
            <p>Easing controls the velocity profile of the animation between two keyframes. Without easing, motion has constant speed (Linear interpolation). With easing, motion accelerates and decelerates in ways that feel natural, physical, or expressive.</p>
            <p>The easing is applied per keyframe transition — the transition from Keyframe A to Keyframe B can have different easing than the transition from B to C.</p>
          </Section>

          <Section id="applying-easing" title="Applying Easing">
            <p><strong className="text-white">Via Properties Panel:</strong> Select one or more keyframes. In the Properties Panel (or the Easing panel), choose from the easing presets or edit the custom bezier.</p>
            <p><strong className="text-white">Via Right-click:</strong> Right-click any selected keyframe(s) and choose from the easing preset submenu.</p>
            <p><strong className="text-white">Via the Easing dropdown in the timeline:</strong> Each keyframe shows a small easing indicator. Click it to open a quick-select dropdown.</p>
          </Section>

          <Section id="easing-direction" title="Easing Direction">
            <p>Easing on a keyframe applies to the outgoing transition — from this keyframe to the next one. The easing of the incoming transition is controlled by the previous keyframe.</p>
            <p>For natural motion:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The keyframe where motion <strong className="text-white">starts</strong> controls the "ease out" (acceleration away)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>The keyframe where motion <strong className="text-white">ends</strong> controls the "ease in" (deceleration arriving)</li>
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
