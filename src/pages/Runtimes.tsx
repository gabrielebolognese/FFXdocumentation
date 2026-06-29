import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';

const tableOfContents = [
  { label: 'Most Common Issues', id: 'common-issues' },
  { label: 'Full Index', id: 'full-index' },
];

const categories = [
  {
    label: 'Critical Issues',
    items: [
      { label: 'Editor is slow', path: '/troubleshooting/editor-is-slow' },
      { label: 'Canvas is not rendering', path: '/troubleshooting/canvas-is-not-rendering' },
      { label: 'Animation export fails', path: '/troubleshooting/animation-export-fails' },
      { label: 'File cannot be opened', path: '/troubleshooting/file-cannot-be-opened' },
      { label: 'Changes are not saving', path: '/troubleshooting/changes-are-not-saving' },
    ],
    featured: { label: 'Editor is slow', path: '/troubleshooting/editor-is-slow' },
    featuredDesc: 'The most disruptive performance issue. Covers GPU limits, layer count, and real-time rendering bottlenecks.',
  },
  {
    label: 'Basics / Interface',
    items: [
      { label: 'Project cannot be created', path: '/troubleshooting/project-cannot-be-created' },
      { label: 'Project does not save or export', path: '/troubleshooting/project-does-not-save-or-export' },
      { label: 'Cannot navigate the canvas', path: '/troubleshooting/cannot-navigate-the-canvas' },
      { label: 'Zoom or pan is not working correctly', path: '/troubleshooting/zoom-or-pan-is-not-working-correctly' },
      { label: 'Canvas background color does not change', path: '/troubleshooting/canvas-background-color-does-not-change' },
      { label: 'Light mode or dark mode does not switch', path: '/troubleshooting/light-mode-or-dark-mode-does-not-switch' },
      { label: 'Layers are disorganized or hard to manage', path: '/troubleshooting/layers-are-disorganized-or-hard-to-manage' },
      { label: 'Layer cannot be locked or unlocked', path: '/troubleshooting/layer-cannot-be-locked-or-unlocked' },
      { label: 'Layer will not hide or unhide', path: '/troubleshooting/layer-will-not-hide-or-unhide' },
      { label: 'Undo or redo history is not working', path: '/troubleshooting/undo-or-redo-history-is-not-working' },
    ],
    featured: { label: 'Project does not save or export', path: '/troubleshooting/project-does-not-save-or-export' },
    featuredDesc: 'Saving and export failures affect every user. Covers storage permissions, format conflicts, and sync issues.',
  },
  {
    label: 'Shapes & Objects',
    items: [
      { label: 'Rectangle cannot be created', path: '/troubleshooting/rectangle-cannot-be-created' },
      { label: 'Circle cannot be created', path: '/troubleshooting/circle-cannot-be-created' },
      { label: 'Line tool is not drawing lines', path: '/troubleshooting/line-tool-is-not-drawing-lines' },
      { label: 'Custom polygon shapes cannot be created', path: '/troubleshooting/custom-polygon-shapes-cannot-be-created' },
      { label: 'Shape size, position, or rotation cannot be edited', path: '/troubleshooting/shape-size-position-or-rotation-cannot-be-edited' },
      { label: 'Copy and paste of shapes does not work', path: '/troubleshooting/copy-and-paste-of-shapes-does-not-work' },
      { label: 'Objects are not duplicating', path: '/troubleshooting/objects-are-not-duplicating' },
      { label: 'Objects will not align correctly', path: '/troubleshooting/objects-will-not-align-correctly' },
      { label: 'Objects cannot be distributed evenly', path: '/troubleshooting/objects-cannot-be-distributed-evenly' },
      { label: 'Objects cannot be grouped or ungrouped', path: '/troubleshooting/objects-cannot-be-grouped-or-ungrouped' },
    ],
    featured: { label: 'Shape size, position, or rotation cannot be edited', path: '/troubleshooting/shape-size-position-or-rotation-cannot-be-edited' },
    featuredDesc: 'Covers locked layers, transform mode conflicts, and inspector panel input issues that block basic editing.',
  },
  {
    label: 'Colors & Styles',
    items: [
      { label: 'Shape color fill does not apply', path: '/troubleshooting/shape-color-fill-does-not-apply' },
      { label: 'Gradient fill is not working', path: '/troubleshooting/gradient-fill-is-not-working' },
      { label: 'Stroke or border settings are not visible or applied', path: '/troubleshooting/stroke-or-border-settings-are-not-visible-or-applied' },
      { label: 'Opacity changes are not applied', path: '/troubleshooting/opacity-changes-are-not-applied' },
      { label: 'Color presets are missing or not applying', path: '/troubleshooting/color-presets-are-missing-or-not-applying' },
      { label: 'Eyedropper tool does not pick colors', path: '/troubleshooting/eyedropper-tool-does-not-pick-colors' },
      { label: 'Custom color palette cannot be saved', path: '/troubleshooting/custom-color-palette-cannot-be-saved' },
      { label: 'Shadow or glow effects are not visible', path: '/troubleshooting/shadow-or-glow-effects-are-not-visible' },
      { label: 'Inner shadows are not appearing', path: '/troubleshooting/inner-shadows-are-not-appearing' },
      { label: 'Texture overlays are not applying', path: '/troubleshooting/texture-overlays-are-not-applying' },
    ],
    featured: { label: 'Gradient fill is not working', path: '/troubleshooting/gradient-fill-is-not-working' },
    featuredDesc: 'Gradient issues are frequently caused by fill type conflicts, opacity being set to zero, or blend mode overrides.',
  },
  {
    label: 'Animation Basics',
    items: [
      { label: 'Position animation does not work', path: '/troubleshooting/position-animation-does-not-work' },
      { label: 'Scale animation does not change the object size', path: '/troubleshooting/scale-animation-does-not-change-the-object-size' },
      { label: 'Rotation animation does not rotate objects', path: '/troubleshooting/rotation-animation-does-not-rotate-objects' },
      { label: 'Opacity animation does not fade objects', path: '/troubleshooting/opacity-animation-does-not-fade-objects' },
      { label: 'Easing presets are not affecting animation', path: '/troubleshooting/easing-presets-are-not-affecting-animation' },
      { label: 'Keyframes cannot be created', path: '/troubleshooting/keyframes-cannot-be-created' },
      { label: 'Keyframes cannot be copied or pasted', path: '/troubleshooting/keyframes-cannot-be-copied-or-pasted' },
      { label: 'Animation timing cannot be adjusted', path: '/troubleshooting/animation-timing-cannot-be-adjusted' },
      { label: 'Timeline is difficult to control or not responding', path: '/troubleshooting/timeline-is-difficult-to-control-or-not-responding' },
      { label: 'Animation preview does not play', path: '/troubleshooting/animation-preview-does-not-play' },
    ],
    featured: { label: 'Keyframes cannot be created', path: '/troubleshooting/keyframes-cannot-be-created' },
    featuredDesc: 'Keyframe creation failures are the most common blocker when starting animation work. Covers mode, selection, and timeline state issues.',
  },
  {
    label: 'Advanced Animation',
    items: [
      { label: 'Compound animations are not working', path: '/troubleshooting/compound-animations-are-not-working' },
      { label: 'Motion paths are not applied to objects', path: '/troubleshooting/motion-paths-are-not-applied-to-objects' },
      { label: 'Animation will not loop', path: '/troubleshooting/animation-will-not-loop' },
      { label: 'Animation will not reverse', path: '/troubleshooting/animation-will-not-reverse' },
      { label: 'Multiple objects do not animate with offset timing', path: '/troubleshooting/multiple-objects-do-not-animate-with-offset-timing' },
      { label: 'Auto align animation is not working', path: '/troubleshooting/auto-align-animation-is-not-working' },
      { label: 'Animation presets are not applying', path: '/troubleshooting/animation-presets-are-not-applying' },
      { label: 'Masks cannot be animated', path: '/troubleshooting/masks-cannot-be-animated' },
      { label: 'Gradient or color animation is not working', path: '/troubleshooting/gradient-or-color-animation-is-not-working' },
      { label: 'Text properties cannot be animated', path: '/troubleshooting/text-properties-cannot-be-animated' },
    ],
    featured: { label: 'Motion paths are not applied to objects', path: '/troubleshooting/motion-paths-are-not-applied-to-objects' },
    featuredDesc: 'Motion path issues are hard to diagnose. Covers path assignment, object parenting conflicts, and transform origin problems.',
  },
  {
    label: 'Masks & Effects',
    items: [
      { label: 'Mask cannot be created', path: '/troubleshooting/mask-cannot-be-created' },
      { label: 'Mask animation does not work', path: '/troubleshooting/mask-animation-does-not-work' },
      { label: 'Mask inversion does not apply', path: '/troubleshooting/mask-inversion-does-not-apply' },
      { label: 'Multiple masks do not work on the same layer', path: '/troubleshooting/multiple-masks-do-not-work-on-the-same-layer' },
      { label: 'Blur effect is not visible', path: '/troubleshooting/blur-effect-is-not-visible' },
      { label: 'Glow effect is not visible', path: '/troubleshooting/glow-effect-is-not-visible' },
      { label: 'Shadow effect does not appear', path: '/troubleshooting/shadow-effect-does-not-appear' },
      { label: 'Distortion effects are not applied', path: '/troubleshooting/distortion-effects-are-not-applied' },
      { label: 'Multiple effects conflict or do not combine correctly', path: '/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly' },
      { label: 'Effect presets cannot be saved or reused', path: '/troubleshooting/effect-presets-cannot-be-saved-or-reused' },
    ],
    featured: { label: 'Multiple effects conflict or do not combine correctly', path: '/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly' },
    featuredDesc: 'Effect stacking is one of the trickiest areas. Covers render order, blend mode interactions, and GPU-related compositing limits.',
  },
];

export default function Runtimes() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Troubleshooting"
        description="Find solutions to common issues in FlashFX"
        keywords="FlashFX, troubleshooting, help, issues, problems"
      />

      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">Troubleshooting</h1>
          <div className="space-y-3 text-sm text-white/60 leading-relaxed max-w-2xl">
            <p>
              This section covers every known issue in FlashFX, organized by area. Each article explains what causes the problem and walks through a set of targeted solutions in order of likelihood. Start with the most common issue in each category before diving deeper.
            </p>
            <p>
              If none of the solutions resolve your issue, use the support link at the bottom of any article to submit a report. Include your OS version, project size, and a description of the steps that triggered the problem.
            </p>
          </div>
        </div>

        <div id="common-issues" className="scroll-mt-32 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Most Common Issues</h2>
            <p className="text-sm text-white/40 mt-1">One high-impact issue per category, selected by frequency and severity.</p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {categories.map(({ label, featured, featuredDesc }) => (
              <Link
                key={featured.path}
                to={featured.path}
                className="flex items-start gap-4 p-4 bg-navy-border/20 border border-navy-border rounded-xl hover:border-red-500/30 hover:bg-red-500/5 transition-colors group no-underline"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-widest text-white/25 font-semibold mb-1">{label}</p>
                  <p className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors">{featured.label}</p>
                  <p className="text-sm text-white/45 mt-1 leading-relaxed">{featuredDesc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-red-400 transition-colors flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>

        <div id="full-index" className="scroll-mt-32 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Full Index</h2>
            <p className="text-sm text-white/40 mt-1">All {categories.reduce((acc, c) => acc + c.items.length, 0)} troubleshooting articles across {categories.length} categories.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-navy-border">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-navy-border bg-white/[0.03]">
                  <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest text-white/30 font-semibold w-48">Category</th>
                  <th className="px-4 py-3 text-left text-[11px] uppercase tracking-widest text-white/30 font-semibold">Issue</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ label, items }) =>
                  items.map((item, i) => (
                    <tr
                      key={item.path}
                      className="border-b border-navy-border/50 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-4 py-2.5 align-top">
                        {i === 0 && (
                          <span className="text-xs font-semibold text-white/40">{label}</span>
                        )}
                      </td>
                      <td className="px-4 py-2.5">
                        <Link
                          to={item.path}
                          className="text-sm text-white/70 hover:text-white transition-colors no-underline"
                        >
                          {item.label}
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
