import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Smartphone, Zap, ArrowRight, AlertTriangle, CheckCircle, Download } from 'lucide-react';

const tableOfContents = [
  { label: 'What is FlashFX Lite', id: 'what-is-lite' },
  { label: 'Supported Features', id: 'supported-features' },
  { label: 'Typical Use Cases', id: 'use-cases' },
];

export default function LiteOverview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Overview"
        description="FlashFX Lite is the mobile version of FlashFX, create, animate, and export motion graphics directly from your phone."
        keywords="FlashFX Lite, mobile animation, quick animation, social media graphics"
      />

      <div className="space-y-8">
        <div className="flex items-center justify-between gap-4 p-4 bg-navy-border/30 border border-navy-border rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-accent/10 border border-yellow-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-4 h-4 text-yellow-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">FlashFX Lite</p>
              <p className="text-xs text-white/40">Available on iOS and Android</p>
            </div>
          </div>
          <button
            onClick={() => {}}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-accent text-black text-sm font-semibold rounded-lg hover:bg-yellow-accent/90 active:scale-95 transition-all flex-shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2 px-2.5 py-1 bg-yellow-accent/10 border border-yellow-accent/20 rounded-md">
              <Smartphone className="w-3.5 h-3.5 text-yellow-accent" />
              <span className="text-yellow-accent text-[11px] font-semibold uppercase tracking-wider">Mobile</span>
            </div>
          </div>
          <h1 className="text-4xl font-semibold text-white">FlashFX Lite</h1>
          <p className="text-sm text-blue-muted mt-2">Full motion editing, built for your phone</p>
        </div>

        <div id="what-is-lite" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">What is FlashFX Lite</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX Lite is the mobile version of FlashFX. It brings the core editing experience to iOS and Android so you can create, animate, and export motion graphics straight from your phone, no desktop required. The interface is built around touch gestures, keeping common actions within reach of your thumb.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-green-400">What it is</span>
              </div>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>A native mobile motion editor</li>
                <li>Touch and gesture-driven workflow</li>
                <li>Quick export to MP4, GIF, PNG</li>
                <li>Keyframe animation on the go</li>
                <li>Optimized for social media sizes</li>
              </ul>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-red-400">What it is not</span>
              </div>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>Not a replacement for desktop FlashFX</li>
                <li>No advanced effects or filters</li>
                <li>No timeline graph editor</li>
                <li>No plugin or scripting support</li>
                <li>No bones, rigging, or state machines</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="supported-features" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Supported Features</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">FlashFX Lite</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">FlashFX Desktop</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Basic shapes (circle, square, text)', 'Yes', 'Yes'],
                  ['Text objects', 'Yes', 'Yes'],
                  ['Position / scale / rotation animation', 'Yes', 'Yes'],
                  ['Color fills', 'Yes', 'Yes'],
                  ['Opacity control', 'Yes', 'Yes'],
                  ['Export (MP4, GIF, PNG)', 'Yes', 'Yes'],
                  ['Timeline graph editor', 'No', 'Yes'],
                  ['Advanced easing presets', 'No', 'Yes'],
                  ['Blend modes', 'No', 'Yes'],
                  ['Filters & effects', 'No', 'Yes'],
                  ['State machines', 'No', 'Yes'],
                  ['Expressions / scripting', 'No', 'Yes'],
                  ['Bones / rigging', 'No', 'Yes'],
                  ['Nested sequences', 'No', 'Yes'],
                  ['Unlimited layers', 'No (max 38)', 'Yes'],
                ].map(([feature, lite, desktop]) => (
                  <tr key={feature}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{feature}</td>
                    <td className={`border border-navy-border px-4 py-2 text-sm font-medium ${lite === 'Yes' ? 'text-green-400' : lite.startsWith('No (') ? 'text-yellow-400' : 'text-red-400'}`}>{lite}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-green-400 font-medium">{desktop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="use-cases" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Typical Use Cases</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: 'Quick Social Posts', desc: 'Animate a logo or text for Instagram, TikTok, or YouTube Shorts on the go.' },
              { icon: Smartphone, title: 'On-Device Editing', desc: 'Edit and export directly from your phone without transferring files to a desktop.' },
              { icon: ArrowRight, title: 'Rapid Prototyping', desc: 'Sketch a motion concept quickly, then refine it later in desktop FlashFX.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy-border/30 border border-navy-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-yellow-accent" />
                  <span className="text-sm font-semibold text-white">{title}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-yellow-accent/5 border border-yellow-accent/20 rounded-lg flex items-start gap-3">
            <ArrowRight className="w-4 h-4 text-yellow-accent mt-0.5 flex-shrink-0" />
            <p className="text-sm text-white/70 leading-relaxed">
              Need more power? <Link to="/lite/upgrade" className="text-yellow-accent hover:underline">See what FlashFX Desktop offers</Link>, advanced animation, effects, and the full timeline.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
