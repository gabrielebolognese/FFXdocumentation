import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { ArrowRight } from 'lucide-react';

const tableOfContents = [
  { label: 'Position Animation', id: 'position' },
  { label: 'Scale Animation', id: 'scale' },
  { label: 'Rotation Animation', id: 'rotation' },
  { label: 'Duration Control', id: 'duration' },
  { label: 'Example Workflow', id: 'workflow' },
];

export default function LiteAnimation() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Basic Animation"
        description="How to animate objects in FlashFX Lite: position, scale, rotation, and duration."
        keywords="FlashFX Lite, animation, keyframes, position, scale, rotation"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Basic Animation</h1>
          <p className="text-sm text-blue-muted mt-2">Lite supports four animatable properties per object</p>
        </div>

        <div className="p-4 bg-yellow-accent/5 border border-yellow-accent/20 rounded-lg">
          <p className="text-sm text-white/70 leading-relaxed">
            Animation in Lite works with two keyframes per property: a start state and an end state. The app interpolates linearly between them. There is no graph editor or easing control.
          </p>
        </div>

        <div id="position" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Position Animation</h2>
          <p className="text-sm text-white leading-relaxed">
            Move an object from one position to another across the animation duration.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Step</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Drag the playhead to 0s. Position your object where it should start.'],
                  ['2', 'Open the Object Panel. Tap "Add Keyframe" for X and Y.'],
                  ['3', 'Drag the playhead to the end time (e.g. 1s).'],
                  ['4', 'Drag the object to its end position. Keyframes are set automatically.'],
                ].map(([step, action]) => (
                  <tr key={step}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium w-12">{step}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="scale" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Scale Animation</h2>
          <p className="text-sm text-white leading-relaxed">
            Change the size of an object over time.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Step</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Drag the playhead to 0s. Set width and height to the start size.'],
                  ['2', 'Tap "Add Keyframe" for Width and Height.'],
                  ['3', 'Move the playhead to the end time.'],
                  ['4', 'Set width and height to the end size. Keyframes set automatically.'],
                ].map(([step, action]) => (
                  <tr key={step}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium w-12">{step}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="rotation" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Rotation Animation</h2>
          <p className="text-sm text-white leading-relaxed">
            Spin an object from one angle to another.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Step</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Drag the playhead to 0s. Set rotation to the start angle (e.g. 0°).'],
                  ['2', 'Tap "Add Keyframe" for Rotation.'],
                  ['3', 'Move the playhead to the end time.'],
                  ['4', 'Set rotation to the end angle (e.g. 360°). Keyframe set automatically.'],
                ].map(([step, action]) => (
                  <tr key={step}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium w-12">{step}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="duration" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Duration Control</h2>
          <p className="text-sm text-white leading-relaxed">
            The total animation length is set in Project Settings. Tap the gear icon in the toolbar to open settings. You can set duration from 0.5s to 10s in 0.5s increments.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Setting</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '0.5s – 10s'],
                  ['Frame rate', '24 fps or 30 fps'],
                  ['Loop', 'On / Off toggle'],
                ].map(([setting, range]) => (
                  <tr key={setting}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{setting}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="workflow" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Example Workflow</h2>
          <p className="text-sm text-white/60 mb-2">A square that slides in and grows to full size.</p>

          <div className="space-y-2">
            {[
              'Add a square to the canvas.',
              'Drag playhead to 0s. Set X = -200, Width = 50. Add keyframes for X and Width.',
              'Drag playhead to 1s. Set X = 100, Width = 150. Keyframes set automatically.',
              'Tap Play to preview.',
              'Tap Export to save as MP4.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <ArrowRight className="w-3.5 h-3.5 text-yellow-accent mt-1 flex-shrink-0" />
                <p className="text-sm text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
