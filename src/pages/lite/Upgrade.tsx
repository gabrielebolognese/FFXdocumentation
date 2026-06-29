import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { ArrowRight, Check } from 'lucide-react';

const tableOfContents = [
  { label: 'What Desktop Adds', id: 'desktop-adds' },
  { label: 'Side-by-Side Comparison', id: 'comparison' },
];

export default function LiteUpgrade() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Upgrade to FlashFX Desktop"
        description="See what FlashFX Desktop adds over Lite: advanced animation, effects, full timeline, state machines, and professional workflow."
        keywords="FlashFX, upgrade, desktop, advanced animation, effects, timeline"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Upgrade to FlashFX</h1>
          <p className="text-sm text-blue-muted mt-2">When Lite is no longer enough</p>
        </div>

        <div id="desktop-adds" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">What Desktop Adds</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Advanced Animation System',
                points: [
                  'Multi-stop keyframes, not just start and end',
                  'Full graph editor with custom easing curves',
                  'Easing presets library (40+ presets)',
                  'Expressions and value linking between properties',
                  'Looping, ping-pong, and offset animations',
                ],
              },
              {
                title: 'Effects and Filters',
                points: [
                  'Blur, glow, shadow, and inner shadow',
                  'Distortion and artistic filters',
                  'Filter stacking and ordering',
                  'Blend modes (multiply, screen, overlay, etc.)',
                  'Animatable filter properties',
                ],
              },
              {
                title: 'Full Timeline',
                points: [
                  'Unlimited layers',
                  'Layer trim and time remapping',
                  'Nested sequences and sequence compositor',
                  'Markers and annotations',
                  'Timeline search and filtering',
                ],
              },
              {
                title: 'Professional Tools',
                points: [
                  'State machines for interactive animations',
                  'Scripting and expressions via JavaScript',
                  'Bones and mesh rigging',
                  'Boolean shape operations',
                  'Data binding and dynamic content',
                ],
              },
            ].map(({ title, points }) => (
              <div key={title} className="p-4 bg-navy-border/20 border border-navy-border rounded-lg">
                <p className="text-sm font-semibold text-white mb-3">{title}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-yellow-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="https://flashfx.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-yellow-accent text-black text-sm font-semibold rounded-md hover:bg-yellow-accent/90 transition-colors no-underline"
          >
            Try FlashFX Desktop Free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div id="comparison" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Side-by-Side Comparison</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Capability</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white text-center">Lite</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white text-center">Desktop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Basic shapes + text', true, true],
                  ['Position / scale / rotation animation', true, true],
                  ['Color fills', true, true],
                  ['MP4 / GIF export', true, true],
                  ['Multi-stop keyframes', false, true],
                  ['Graph editor + custom easing', false, true],
                  ['Blend modes', false, true],
                  ['Filters and effects', false, true],
                  ['Unlimited layers', false, true],
                  ['Nested sequences', false, true],
                  ['State machines', false, true],
                  ['Scripting + expressions', false, true],
                  ['Bones and rigging', false, true],
                  ['Image import', false, true],
                  ['Plugins', false, true],
                ].map(([capability, lite, desktop]) => (
                  <tr key={String(capability)}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{capability}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-center">
                      {lite ? (
                        <span className="text-green-400 font-medium">Yes</span>
                      ) : (
                        <span className="text-white/30">, </span>
                      )}
                    </td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-center">
                      <span className="text-green-400 font-medium">Yes</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
