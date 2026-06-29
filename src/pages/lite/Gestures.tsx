import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const tableOfContents = [
  { label: 'Canvas Gestures', id: 'canvas-gestures' },
  { label: 'Object Gestures', id: 'object-gestures' },
];

export default function LiteGestures() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Gestures and Shortcuts"
        description="All touch gestures supported in FlashFX Lite: drag, pinch, rotate, tap, and hold."
        keywords="FlashFX Lite, gestures, touch, mobile, shortcuts"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Gestures and Shortcuts</h1>
          <p className="text-sm text-blue-muted mt-2">All touch interactions supported in Lite</p>
        </div>

        <div id="canvas-gestures" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Canvas Gestures</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Gesture</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Where</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pinch (two fingers)', 'Canvas', 'Zoom in or out'],
                  ['Two-finger drag', 'Canvas', 'Pan the canvas view'],
                  ['Tap empty area', 'Canvas', 'Deselect all objects'],
                  ['Double-tap empty area', 'Canvas', 'Zoom to fit artboard'],
                ].map(([gesture, where, result]) => (
                  <tr key={gesture}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{gesture}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white/60">{where}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="object-gestures" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Object Gestures</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Gesture</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Result</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tap', 'Select the object', 'Opens the Object Panel'],
                  ['Drag', 'Move the object', 'Only works on selected object'],
                  ['Two-finger rotate', 'Rotate the object', 'Supported on most devices'],
                  ['Hold (long press ~0.5s)', 'Open context menu', 'Options: Delete, Duplicate, Bring Forward, Send Back'],
                  ['Drag corner handle', 'Resize the object', 'Hold corner, drag to resize proportionally'],
                ].map(([gesture, result, notes]) => (
                  <tr key={gesture}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{gesture}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{result}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white/60">{notes}</td>
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
