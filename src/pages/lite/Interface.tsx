import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Layers, Square, Settings, Download, Hand } from 'lucide-react';

const tableOfContents = [
  { label: 'Canvas', id: 'canvas' },
  { label: 'Toolbar', id: 'toolbar' },
  { label: 'Object Panel', id: 'object-panel' },
  { label: 'Export Button', id: 'export-button' },
  { label: 'Gesture Controls', id: 'gesture-controls' },
];

export default function LiteInterface() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Interface"
        description="Mobile UI breakdown for FlashFX Lite: canvas, toolbar, object panel, export, and gesture controls."
        keywords="FlashFX Lite, mobile UI, interface, canvas, toolbar, gestures"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Interface</h1>
          <p className="text-sm text-blue-muted mt-2">The mobile UI broken down into its five zones</p>
        </div>

        <div className="border border-navy-border rounded-lg overflow-hidden">
          <div className="bg-navy-border/40 px-4 py-2.5 border-b border-navy-border">
            <span className="text-xs text-white/50 font-medium uppercase tracking-widest">UI Layout, Portrait Mode</span>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-1.5 max-w-xs mx-auto">
              <div className="bg-blue-muted/10 border border-navy-border rounded px-3 py-1.5 text-center text-xs text-white/50">Toolbar (top)</div>
              <div className="bg-yellow-accent/5 border border-yellow-accent/20 rounded px-3 py-8 text-center text-xs text-yellow-accent/60 font-medium">Canvas (center)</div>
              <div className="bg-blue-muted/10 border border-navy-border rounded px-3 py-1.5 text-center text-xs text-white/50">Object Panel (bottom)</div>
              <div className="bg-green-500/10 border border-green-500/20 rounded px-3 py-1.5 text-center text-xs text-green-400">Export Button (bottom right)</div>
            </div>
          </div>
        </div>

        <div id="canvas" className="scroll-mt-32 space-y-3">
          <div className="flex items-center gap-2">
            <Square className="w-4 h-4 text-yellow-accent" />
            <h2 className="text-3xl font-semibold text-white">Canvas</h2>
          </div>
          <p className="text-sm text-white leading-relaxed">
            The canvas occupies the center of the screen. It displays your artboard at the selected resolution. Tap an object to select it. Drag to move. Use two fingers to pan the canvas when zoomed in.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Interaction</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tap object', 'Select it'],
                  ['Tap empty area', 'Deselect'],
                  ['Drag selected object', 'Move object'],
                  ['Two-finger pinch', 'Zoom canvas in / out'],
                  ['Two-finger drag', 'Pan canvas'],
                ].map(([action, result]) => (
                  <tr key={action}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{action}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="toolbar" className="scroll-mt-32 space-y-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-yellow-accent" />
            <h2 className="text-3xl font-semibold text-white">Toolbar</h2>
          </div>
          <p className="text-sm text-white leading-relaxed">
            The toolbar sits at the top of the screen. It provides quick access to the main object types and core actions.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Button</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Square', 'Add a rectangle to the canvas'],
                  ['Circle', 'Add a circle to the canvas'],
                  ['Line', 'Add a line to the canvas'],
                  ['Text', 'Add a text object to the canvas'],
                  ['Undo', 'Undo last action'],
                  ['Redo', 'Redo last undone action'],
                  ['Play', 'Preview animation from start'],
                ].map(([btn, action]) => (
                  <tr key={btn}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{btn}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="object-panel" className="scroll-mt-32 space-y-3">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-yellow-accent" />
            <h2 className="text-3xl font-semibold text-white">Object Panel</h2>
          </div>
          <p className="text-sm text-white leading-relaxed">
            When an object is selected, the Object Panel slides up from the bottom. It exposes the properties of the selected object.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Property</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['X / Y', 'Position on the canvas'],
                  ['Width / Height', 'Size of the object'],
                  ['Rotation', 'Angle in degrees (0–360)'],
                  ['Opacity', 'Transparency (0–100%)'],
                  ['Fill Color', 'Solid color via color picker'],
                  ['Add Keyframe', 'Lock current state as a keyframe at the playhead'],
                ].map(([prop, desc]) => (
                  <tr key={prop}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{prop}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div id="export-button" className="scroll-mt-32 space-y-3">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-yellow-accent" />
            <h2 className="text-3xl font-semibold text-white">Export Button</h2>
          </div>
          <p className="text-sm text-white leading-relaxed">
            The Export button is always visible in the bottom-right corner. Tap it to open the export sheet. See <a href="#" className="text-yellow-accent hover:underline">Export</a> for format and resolution details.
          </p>
        </div>

        <div id="gesture-controls" className="scroll-mt-32 space-y-3">
          <div className="flex items-center gap-2">
            <Hand className="w-4 h-4 text-yellow-accent" />
            <h2 className="text-3xl font-semibold text-white">Gesture Controls</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Gesture</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tap', 'Select object'],
                  ['Drag', 'Move selected object'],
                  ['Pinch (two fingers)', 'Zoom canvas in / out'],
                  ['Two-finger drag', 'Pan canvas'],
                  ['Two-finger rotate', 'Rotate selected object (if supported by device)'],
                  ['Hold (long press)', 'Open context menu, delete, duplicate, bring forward'],
                ].map(([gesture, action]) => (
                  <tr key={gesture}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">{gesture}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{action}</td>
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
