import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { AlertTriangle } from 'lucide-react';

const tableOfContents = [
  { label: 'Feature Limitations', id: 'feature-limits' },
  { label: 'Technical Limits', id: 'technical-limits' },
];

export default function LiteLimitations() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Limitations"
        description="FlashFX Lite on mobile: available shapes, layer limits, animation support, and what requires the desktop editor."
        keywords="FlashFX Lite, mobile, limitations, shapes, layers, animation"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Limitations</h1>
          <p className="text-sm text-blue-muted mt-2">Know what's available on mobile before you start</p>
        </div>

        <div className="flex items-start gap-3 p-4 bg-yellow-accent/5 border border-yellow-accent/20 rounded-lg">
          <AlertTriangle className="w-4 h-4 text-yellow-accent mt-0.5 flex-shrink-0" />
          <p className="text-sm text-white/70 leading-relaxed">
            Some features from the desktop editor are not available on mobile. Lite is optimized for touch performance and on-the-go editing. For the full toolset, use <a href="https://flashfx.app/" target="_blank" rel="noopener noreferrer" className="text-yellow-accent hover:underline">FlashFX Desktop</a>.
          </p>
        </div>

        <div id="feature-limits" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Feature Limitations</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Not Supported</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Shape tools', 'Only circle, square, and text are available (3 of 12 shape tools from desktop).'],
                  ['Advanced effects', 'No blur, glow, shadow, distortion, or any filter effects.'],
                  ['Compound animations', 'Only two keyframes per property (start + end). No multi-stop sequences.'],
                  ['Easing / interpolation control', 'All animations are linear. No custom easing or graph editor.'],
                  ['Gradient fills', 'Only solid color fills are supported.'],
                  ['Blend modes', 'All objects use normal blend mode.'],
                  ['State machines', 'Not available. Lite has no interactivity layer.'],
                  ['Scripting / expressions', 'Not available.'],
                  ['Plugins', 'Not available.'],
                  ['Bones / rigging', 'Not available.'],
                  ['Nested groups or sequences', 'Objects cannot be grouped or nested.'],
                  ['Importing images', 'Images cannot be imported in this version.'],
                  ['Custom fonts', 'Only system fonts are available.'],
                ].map(([feature, detail]) => (
                  <tr key={feature}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">{feature}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white/70">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="technical-limits" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Technical Limits</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Limit</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Value</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Max layers per project', '38'],
                  ['Max objects per layer', '3'],
                  ['Max background color layers', '1'],
                  ['Max animation duration', '10 seconds'],
                  ['Max canvas resolution', '1920 × 1920 px'],
                  ['Max GIF export size', '800 × 800 px'],
                  ['Max projects stored locally', '20 (older projects archived)'],
                  ['Undo history depth', '30 steps'],
                ].map(([limit, value]) => (
                  <tr key={limit}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{limit}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{value}</td>
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
