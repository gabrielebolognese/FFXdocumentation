import { useLocation, Link } from 'react-router-dom';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const troubleshootingContent: Record<string, { title: string; solutions: string[] }> = {
  '/troubleshooting/editor-is-slow': {
    title: 'Editor is slow',
    solutions: [
      'Close unnecessary browser tabs and applications to free up system resources',
      'Clear your browser cache and cookies',
      'Reduce the number of layers and objects in your current artboard',
      'Disable hardware acceleration in your browser settings and restart',
      'Try using a different browser (Chrome, Firefox, or Edge recommended)',
      'Check if your graphics drivers are up to date',
    ],
  },
  '/troubleshooting/canvas-is-not-rendering': {
    title: 'Canvas is not rendering',
    solutions: [
      'Refresh the page (Ctrl+R or Cmd+R)',
      'Clear browser cache and reload',
      'Enable hardware acceleration in browser settings',
      'Update your graphics drivers',
      'Try using a different browser',
      'Check browser console (F12) for error messages',
      'Disable browser extensions that might interfere with WebGL',
    ],
  },
  '/troubleshooting/animation-export-fails': {
    title: 'Animation export fails',
    solutions: [
      'Check that all animations have valid keyframes',
      'Ensure file name does not contain special characters',
      'Try exporting to a different format',
      'Reduce animation complexity or duration',
      'Check available disk space on your device',
      'Clear browser cache and try again',
      'Check browser console for specific error messages',
    ],
  },
  '/troubleshooting/file-cannot-be-opened': {
    title: 'File cannot be opened',
    solutions: [
      'Verify the file is not corrupted by checking its size',
      'Ensure the file has a .flash or .flashfx extension',
      'Try opening the file in a different browser',
      'Check if the file was created with a newer version of FlashFX',
      'Restore from an earlier version using revision history',
      'Contact support if the file is critical and cannot be recovered',
    ],
  },
  '/troubleshooting/changes-are-not-saving': {
    title: 'Changes are not saving',
    solutions: [
      'Check your internet connection',
      'Verify you have sufficient storage space in your account',
      'Try manually saving using Ctrl+S or Cmd+S',
      'Check if you have edit permissions for this project',
      'Clear browser cache and reload the page',
      'Export a backup copy of your work',
      'Check browser console for error messages',
    ],
  },
  '/troubleshooting/project-cannot-be-created': {
    title: 'Project cannot be created',
    solutions: [
      'Check your internet connection',
      'Verify you have available project slots in your account',
      'Clear browser cache and cookies',
      'Try using a different browser',
      'Sign out and sign back in',
      'Check if your account is active and not suspended',
    ],
  },
  '/troubleshooting/project-does-not-save-or-export': {
    title: 'Project does not save or export',
    solutions: [
      'Check your internet connection stability',
      'Verify you have sufficient storage space',
      'Try exporting to a different format or location',
      'Reduce project size by deleting unused assets',
      'Clear browser cache and try again',
      'Disable browser extensions temporarily',
      'Check console for specific error messages',
    ],
  },
  '/troubleshooting/cannot-navigate-the-canvas': {
    title: 'Cannot navigate the canvas',
    solutions: [
      'Try using the Hand tool (H key) to pan',
      'Use arrow keys for precise navigation',
      'Check if Scroll Lock is enabled on your keyboard',
      'Reset viewport by pressing Ctrl+0 or Cmd+0',
      'Try using a mouse instead of trackpad or vice versa',
      'Refresh the page if canvas appears frozen',
    ],
  },
  '/troubleshooting/zoom-or-pan-is-not-working-correctly': {
    title: 'Zoom or pan is not working correctly',
    solutions: [
      'Use Ctrl+Plus/Minus or Cmd+Plus/Minus for zoom',
      'Try using the zoom tool from the toolbar',
      'Reset zoom to 100% with Ctrl+1 or Cmd+1',
      'Check if your mouse scroll wheel is functioning properly',
      'Disable browser zoom and use only canvas zoom',
      'Try using keyboard shortcuts instead of mouse',
    ],
  },
  '/troubleshooting/canvas-background-color-does-not-change': {
    title: 'Canvas background color does not change',
    solutions: [
      'Ensure you are editing the artboard background, not a shape',
      'Select the artboard first before changing background color',
      'Check if a background layer is covering the canvas color',
      'Verify the color is not set to transparent',
      'Try setting the color using hex values instead of picker',
      'Refresh the page to reset the viewport',
    ],
  },
  '/troubleshooting/light-mode-or-dark-mode-does-not-switch': {
    title: 'Light mode or dark mode does not switch',
    solutions: [
      'Check the theme toggle in the top navigation bar',
      'Clear browser cache and cookies',
      'Refresh the page after changing the theme',
      'Check if browser is forcing a specific color scheme',
      'Try using a different browser',
      'Sign out and sign back in to reset preferences',
    ],
  },
  '/troubleshooting/layers-are-disorganized-or-hard-to-manage': {
    title: 'Layers are disorganized or hard to manage',
    solutions: [
      'Use the layer panel to reorganize by dragging',
      'Rename layers with descriptive names',
      'Group related layers together',
      'Use folders to organize complex projects',
      'Lock layers you do not want to accidentally move',
      'Hide layers temporarily to reduce clutter',
      'Use search/filter in the layers panel',
    ],
  },
  '/troubleshooting/layer-cannot-be-locked-or-unlocked': {
    title: 'Layer cannot be locked or unlocked',
    solutions: [
      'Click the lock icon in the layers panel',
      'Check if the layer is part of a locked group',
      'Ensure you have edit permissions for the project',
      'Try refreshing the page',
      'Check if the layer is protected by another user',
    ],
  },
  '/troubleshooting/layer-will-not-hide-or-unhide': {
    title: 'Layer will not hide or unhide',
    solutions: [
      'Click the eye icon in the layers panel',
      'Check if parent group is hidden',
      'Ensure layer is not isolated',
      'Use Alt+Click to toggle all layers',
      'Refresh the page if visibility controls are unresponsive',
    ],
  },
  '/troubleshooting/undo-or-redo-history-is-not-working': {
    title: 'Undo or redo history is not working',
    solutions: [
      'Use Ctrl+Z or Cmd+Z for undo',
      'Use Ctrl+Shift+Z or Cmd+Shift+Z for redo',
      'Check if you have reached the undo history limit',
      'Verify you are not in a mode that prevents undo',
      'Try clicking Edit > Undo from the menu',
      'Refresh the page if history appears stuck',
    ],
  },
  '/troubleshooting/rectangle-cannot-be-created': {
    title: 'Rectangle cannot be created',
    solutions: [
      'Select the Rectangle tool from the toolbar (R key)',
      'Click and drag on the canvas to create',
      'Ensure you are in Design mode, not Preview mode',
      'Check if a layer is locked or selected',
      'Try clicking once for a default size rectangle',
      'Refresh the page if tool is unresponsive',
    ],
  },
  '/troubleshooting/circle-cannot-be-created': {
    title: 'Circle cannot be created',
    solutions: [
      'Select the Ellipse tool from the toolbar (O key)',
      'Hold Shift while dragging to create a perfect circle',
      'Ensure you are in Design mode',
      'Check if the current layer allows new shapes',
      'Try clicking once for a default size circle',
      'Refresh the page if tool is not working',
    ],
  },
  '/troubleshooting/line-tool-is-not-drawing-lines': {
    title: 'Line tool is not drawing lines',
    solutions: [
      'Select the Line tool from the toolbar (L key)',
      'Click to set start point, click again for end point',
      'Ensure stroke color is not set to transparent',
      'Increase stroke width if line is too thin to see',
      'Check if you are on the correct layer',
      'Try using the Pen tool as an alternative',
    ],
  },
  '/troubleshooting/custom-polygon-shapes-cannot-be-created': {
    title: 'Custom polygon shapes cannot be created',
    solutions: [
      'Use the Polygon tool from the toolbar',
      'Use the Pen tool (P key) for complete custom shapes',
      'Click to add points, close the path by clicking the first point',
      'Ensure you are in Design mode',
      'Check that stroke or fill is visible',
      'Try reducing the number of points if shape is complex',
    ],
  },
  '/troubleshooting/shape-size-position-or-rotation-cannot-be-edited': {
    title: 'Shape size, position, or rotation cannot be edited',
    solutions: [
      'Select the shape with the Selection tool (V key)',
      'Use transform handles to resize or rotate',
      'Enter precise values in the properties panel',
      'Check if the layer or shape is locked',
      'Ensure you have the correct object selected',
      'Try using the Transform tool (E key)',
    ],
  },
  '/troubleshooting/copy-and-paste-of-shapes-does-not-work': {
    title: 'Copy and paste of shapes does not work',
    solutions: [
      'Use Ctrl+C or Cmd+C to copy',
      'Use Ctrl+V or Cmd+V to paste',
      'Ensure a shape is selected before copying',
      'Check if clipboard access is blocked by browser',
      'Try using Edit menu instead of keyboard shortcuts',
      'Refresh the page if clipboard is not responding',
    ],
  },
  '/troubleshooting/objects-are-not-duplicating': {
    title: 'Objects are not duplicating',
    solutions: [
      'Use Ctrl+D or Cmd+D to duplicate',
      'Select the object first before duplicating',
      'Check if the layer is locked',
      'Try copy and paste as an alternative',
      'Ensure you have edit permissions',
      'Refresh if duplicate function is not responding',
    ],
  },
  '/troubleshooting/objects-will-not-align-correctly': {
    title: 'Objects will not align correctly',
    solutions: [
      'Select multiple objects first',
      'Use align tools in the properties panel',
      'Check if objects are on different layers',
      'Use keyboard shortcuts for alignment',
      'Ensure "Snap to Grid" is enabled if needed',
      'Try grouping objects before aligning',
    ],
  },
  '/troubleshooting/objects-cannot-be-distributed-evenly': {
    title: 'Objects cannot be distributed evenly',
    solutions: [
      'Select at least 3 objects',
      'Use distribute tools in the properties panel',
      'Ensure objects are not grouped',
      'Check that objects are on the same layer',
      'Try ungrouping and distributing individually',
    ],
  },
  '/troubleshooting/objects-cannot-be-grouped-or-ungrouped': {
    title: 'Objects cannot be grouped or ungrouped',
    solutions: [
      'Select multiple objects before grouping (Ctrl+G or Cmd+G)',
      'Use Ctrl+Shift+G or Cmd+Shift+G to ungroup',
      'Ensure all selected objects are on the same artboard',
      'Check if objects are already grouped',
      'Try selecting objects in the layers panel',
    ],
  },
  '/troubleshooting/shape-color-fill-does-not-apply': {
    title: 'Shape color fill does not apply',
    solutions: [
      'Select the shape first',
      'Use the fill color picker in the properties panel',
      'Ensure fill is enabled (not set to none)',
      'Check if fill opacity is set to 0%',
      'Verify the shape has a closed path',
      'Try setting fill before stroke',
    ],
  },
  '/troubleshooting/gradient-fill-is-not-working': {
    title: 'Gradient fill is not working',
    solutions: [
      'Select gradient type from fill options',
      'Add at least two color stops to the gradient',
      'Adjust gradient angle or position',
      'Ensure fill is enabled on the shape',
      'Check if opacity is set correctly',
      'Try applying a solid fill first, then switch to gradient',
    ],
  },
  '/troubleshooting/stroke-or-border-settings-are-not-visible-or-applied': {
    title: 'Stroke or border settings are not visible or applied',
    solutions: [
      'Enable stroke in the properties panel',
      'Increase stroke width if too thin',
      'Set stroke color to a visible color (not transparent)',
      'Check if stroke opacity is 0%',
      'Ensure shape is selected',
      'Try toggling stroke off and on',
    ],
  },
  '/troubleshooting/opacity-changes-are-not-applied': {
    title: 'Opacity changes are not applied',
    solutions: [
      'Use the opacity slider in the properties panel',
      'Ensure you are changing the correct property (fill, stroke, or layer)',
      'Check if opacity is locked',
      'Verify the value is between 0% and 100%',
      'Try entering the value manually',
      'Refresh the page if slider is not responding',
    ],
  },
  '/troubleshooting/color-presets-are-missing-or-not-applying': {
    title: 'Color presets are missing or not applying',
    solutions: [
      'Check the color presets panel',
      'Create custom presets by saving current colors',
      'Ensure presets are not filtered or hidden',
      'Try reloading presets from the menu',
      'Click on a preset to apply it',
      'Check if color picker is in the correct mode (RGB, HSL, etc.)',
    ],
  },
  '/troubleshooting/eyedropper-tool-does-not-pick-colors': {
    title: 'Eyedropper tool does not pick colors',
    solutions: [
      'Select the eyedropper tool (I key)',
      'Click on a color in the canvas',
      'Ensure the shape has a fill or stroke color',
      'Try clicking directly on a colored pixel',
      'Check if the tool is in the correct mode',
      'Refresh the page if tool is not responding',
    ],
  },
  '/troubleshooting/custom-color-palette-cannot-be-saved': {
    title: 'Custom color palette cannot be saved',
    solutions: [
      'Create colors in the color picker',
      'Click "Add to palette" or save icon',
      'Name your palette appropriately',
      'Check if you have storage space available',
      'Try saving individual colors first',
      'Refresh the page and try again',
    ],
  },
  '/troubleshooting/shadow-or-glow-effects-are-not-visible': {
    title: 'Shadow or glow effects are not visible',
    solutions: [
      'Enable shadow/glow in the effects panel',
      'Increase blur radius and spread',
      'Adjust shadow/glow color and opacity',
      'Check if effect is behind the object',
      'Increase distance or offset',
      'Ensure effects are not clipped by artboard bounds',
    ],
  },
  '/troubleshooting/inner-shadows-are-not-appearing': {
    title: 'Inner shadows are not appearing',
    solutions: [
      'Select "Inner Shadow" instead of "Drop Shadow"',
      'Increase blur and spread values',
      'Adjust shadow color to contrast with fill',
      'Increase opacity of the shadow',
      'Check if the shape has a fill',
      'Try increasing the distance value',
    ],
  },
  '/troubleshooting/texture-overlays-are-not-applying': {
    title: 'Texture overlays are not applying',
    solutions: [
      'Select the texture from the fills panel',
      'Adjust blend mode and opacity',
      'Ensure texture file is loaded correctly',
      'Check if texture scale is too large or small',
      'Try applying texture to a simple shape first',
      'Verify the texture format is supported (PNG, JPG)',
    ],
  },
  '/troubleshooting/position-animation-does-not-work': {
    title: 'Position animation does not work',
    solutions: [
      'Switch to Animate mode',
      'Create keyframes at different positions',
      'Ensure at least two keyframes exist',
      'Check that timeline is playing',
      'Verify keyframe timing is correct',
      'Try recording mode to automatically create keyframes',
    ],
  },
  '/troubleshooting/scale-animation-does-not-change-the-object-size': {
    title: 'Scale animation does not change the object size',
    solutions: [
      'Create keyframes for scale property',
      'Ensure different scale values on keyframes',
      'Check that the correct object is selected',
      'Verify animation timeline is playing',
      'Try entering precise scale values',
      'Ensure keyframes are not overlapping',
    ],
  },
  '/troubleshooting/rotation-animation-does-not-rotate-objects': {
    title: 'Rotation animation does not rotate objects',
    solutions: [
      'Create rotation keyframes',
      'Set different rotation values (in degrees)',
      'Ensure rotation origin point is correct',
      'Check that timeline is playing',
      'Verify keyframes are on the correct layer',
      'Try using transform rotation instead of effect rotation',
    ],
  },
  '/troubleshooting/opacity-animation-does-not-fade-objects': {
    title: 'Opacity animation does not fade objects',
    solutions: [
      'Create keyframes for opacity property',
      'Set opacity to 0% on one keyframe, 100% on another',
      'Ensure timeline is playing',
      'Check that the correct property is animated',
      'Verify layer is visible and not hidden',
      'Try animating fill opacity instead of layer opacity',
    ],
  },
  '/troubleshooting/easing-presets-are-not-affecting-animation': {
    title: 'Easing presets are not affecting animation',
    solutions: [
      'Select a keyframe first',
      'Apply easing from the properties panel',
      'Ensure easing is applied to the correct keyframe',
      'Check that animation has sufficient duration',
      'Try different easing presets to see the effect',
      'Play the animation to see the easing in action',
    ],
  },
  '/troubleshooting/keyframes-cannot-be-created': {
    title: 'Keyframes cannot be created',
    solutions: [
      'Switch to Animate mode',
      'Select the property to animate',
      'Click the diamond icon to create a keyframe',
      'Move the playhead and change the property value',
      'Enable recording mode for automatic keyframe creation',
      'Check if layer is locked or protected',
    ],
  },
  '/troubleshooting/keyframes-cannot-be-copied-or-pasted': {
    title: 'Keyframes cannot be copied or pasted',
    solutions: [
      'Select keyframes in the timeline',
      'Use Ctrl+C or Cmd+C to copy',
      'Move playhead to new position',
      'Use Ctrl+V or Cmd+V to paste',
      'Ensure keyframes are properly selected (highlighted)',
      'Try copying one keyframe at a time first',
    ],
  },
  '/troubleshooting/animation-timing-cannot-be-adjusted': {
    title: 'Animation timing cannot be adjusted',
    solutions: [
      'Drag keyframes in the timeline',
      'Use properties panel to enter precise timing',
      'Ensure timeline is not locked',
      'Check that you have the correct keyframes selected',
      'Try zooming the timeline for finer control',
      'Use snap to grid for precise timing adjustments',
    ],
  },
  '/troubleshooting/timeline-is-difficult-to-control-or-not-responding': {
    title: 'Timeline is difficult to control or not responding',
    solutions: [
      'Zoom in/out on timeline with scroll wheel',
      'Use playhead to scrub through animation',
      'Check if timeline panel is properly visible',
      'Try collapsing and expanding layers',
      'Refresh the page if timeline is frozen',
      'Use keyboard shortcuts for timeline navigation',
    ],
  },
  '/troubleshooting/animation-preview-does-not-play': {
    title: 'Animation preview does not play',
    solutions: [
      'Press spacebar or click play button',
      'Check that playhead is not at the end',
      'Ensure animation has keyframes',
      'Verify timeline duration is sufficient',
      'Check if loop is enabled',
      'Try resetting the playhead to the start',
    ],
  },
  '/troubleshooting/compound-animations-are-not-working': {
    title: 'Compound animations are not working',
    solutions: [
      'Ensure all animated properties have keyframes',
      'Check that keyframe timing is coordinated',
      'Verify each property animates independently first',
      'Check for conflicting animations',
      'Try animating properties one at a time',
      'Ensure all layers are visible and not locked',
    ],
  },
  '/troubleshooting/motion-paths-are-not-applied-to-objects': {
    title: 'Motion paths are not applied to objects',
    solutions: [
      'Create or select a path first',
      'Select the object to animate',
      'Apply motion path from constraints or animation panel',
      'Ensure path is visible and has points',
      'Check that animation duration is sufficient',
      'Try creating a simple path first',
    ],
  },
  '/troubleshooting/animation-will-not-loop': {
    title: 'Animation will not loop',
    solutions: [
      'Enable loop option in the timeline',
      'Check animation settings panel',
      'Ensure loop count is not set to 1',
      'Verify timeline end matches animation end',
      'Try setting loop to infinite',
      'Check if playback mode is set correctly',
    ],
  },
  '/troubleshooting/animation-will-not-reverse': {
    title: 'Animation will not reverse',
    solutions: [
      'Enable ping-pong or reverse playback mode',
      'Check animation direction settings',
      'Create reverse keyframes manually if needed',
      'Ensure all properties support reverse animation',
      'Try duplicating and reversing keyframes',
      'Check if easing needs to be adjusted for reverse',
    ],
  },
  '/troubleshooting/multiple-objects-do-not-animate-with-offset-timing': {
    title: 'Multiple objects do not animate with offset timing',
    solutions: [
      'Select all objects to animate',
      'Apply stagger or offset timing in animation settings',
      'Manually adjust keyframe timing for each object',
      'Use delay property on each animation',
      'Check that all objects have the same animation',
      'Try animating objects one at a time first',
    ],
  },
  '/troubleshooting/auto-align-animation-is-not-working': {
    title: 'Auto align animation is not working',
    solutions: [
      'Enable auto-align in animation settings',
      'Select objects to align',
      'Ensure alignment target is set correctly',
      'Check that objects can move freely',
      'Verify animation constraints allow alignment',
      'Try manual alignment first to test',
    ],
  },
  '/troubleshooting/animation-presets-are-not-applying': {
    title: 'Animation presets are not applying',
    solutions: [
      'Select the object first',
      'Choose preset from the animation library',
      'Ensure object supports the preset animation',
      'Check that timeline has space for the preset',
      'Try applying to a simple shape first',
      'Verify preset is compatible with object type',
    ],
  },
  '/troubleshooting/masks-cannot-be-animated': {
    title: 'Masks cannot be animated',
    solutions: [
      'Create mask first',
      'Select mask layer in timeline',
      'Animate mask properties (position, scale, path)',
      'Ensure mask keyframes are on correct layer',
      'Check that masked layer is also visible',
      'Try animating mask shape separately',
    ],
  },
  '/troubleshooting/gradient-or-color-animation-is-not-working': {
    title: 'Gradient or color animation is not working',
    solutions: [
      'Create keyframes for fill color property',
      'Ensure different colors on each keyframe',
      'Check that gradient stops can be animated',
      'Try animating solid colors first',
      'Verify color format is consistent',
      'Use color transition effects if direct animation fails',
    ],
  },
  '/troubleshooting/text-properties-cannot-be-animated': {
    title: 'Text properties cannot be animated',
    solutions: [
      'Ensure text is not locked',
      'Check which text properties support animation',
      'Try animating character properties individually',
      'Convert text to outlines if needed',
      'Verify text layer is in correct mode',
      'Use text modifiers for advanced text animation',
    ],
  },
  '/troubleshooting/mask-cannot-be-created': {
    title: 'Mask cannot be created',
    solutions: [
      'Select the shape to use as mask',
      'Place mask layer above the layer to be masked',
      'Use "Create Mask" from the layer menu',
      'Ensure shapes are on separate layers',
      'Check that mask shape has a fill',
      'Try creating a simple rectangle mask first',
    ],
  },
  '/troubleshooting/mask-animation-does-not-work': {
    title: 'Mask animation does not work',
    solutions: [
      'Animate the mask layer, not the masked layer',
      'Create keyframes for mask properties',
      'Ensure mask is properly set up first',
      'Check that both layers are visible',
      'Try animating mask position or scale',
      'Verify masking mode is correct',
    ],
  },
  '/troubleshooting/mask-inversion-does-not-apply': {
    title: 'Mask inversion does not apply',
    solutions: [
      'Select the mask layer',
      'Toggle invert option in mask settings',
      'Check that mask type supports inversion',
      'Ensure mask is active and applied',
      'Try recreating the mask if inversion fails',
      'Verify masked content is visible',
    ],
  },
  '/troubleshooting/multiple-masks-do-not-work-on-the-same-layer': {
    title: 'Multiple masks do not work on the same layer',
    solutions: [
      'Check mask order in layers panel',
      'Ensure each mask is on a separate layer',
      'Set mask blend mode correctly',
      'Use mask groups to organize multiple masks',
      'Try combining masks into one shape',
      'Verify each mask is properly configured',
    ],
  },
  '/troubleshooting/blur-effect-is-not-visible': {
    title: 'Blur effect is not visible',
    solutions: [
      'Increase blur radius value',
      'Enable blur effect in effects panel',
      'Ensure effect is not clipped by artboard',
      'Check if blur amount is too subtle',
      'Try applying blur to a high-contrast object',
      'Verify hardware acceleration is enabled',
    ],
  },
  '/troubleshooting/glow-effect-is-not-visible': {
    title: 'Glow effect is not visible',
    solutions: [
      'Increase glow intensity and radius',
      'Adjust glow color to contrast with background',
      'Ensure glow opacity is not too low',
      'Check if glow is clipped by artboard bounds',
      'Try applying glow to a darker object',
      'Increase blur amount for softer glow',
    ],
  },
  '/troubleshooting/shadow-effect-does-not-appear': {
    title: 'Shadow effect does not appear',
    solutions: [
      'Increase shadow distance and blur',
      'Adjust shadow opacity',
      'Change shadow color to be more visible',
      'Check if shadow is behind the object',
      'Ensure shadow is not clipped',
      'Try inner shadow if outer shadow is not visible',
    ],
  },
  '/troubleshooting/distortion-effects-are-not-applied': {
    title: 'Distortion effects are not applied',
    solutions: [
      'Enable distortion effect in effects panel',
      'Adjust distortion intensity',
      'Ensure object has enough detail to show distortion',
      'Check if effect type is correct for your needs',
      'Try applying to rasterized objects',
      'Increase effect parameters for more visible results',
    ],
  },
  '/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly': {
    title: 'Multiple effects conflict or do not combine correctly',
    solutions: [
      'Check effect order in effects panel',
      'Rearrange effects by dragging',
      'Reduce intensity of conflicting effects',
      'Try applying effects to separate layers',
      'Use effect groups to organize',
      'Test effects individually first',
    ],
  },
  '/troubleshooting/effect-presets-cannot-be-saved-or-reused': {
    title: 'Effect presets cannot be saved or reused',
    solutions: [
      'Create effect combination first',
      'Click "Save as Preset" in effects panel',
      'Name your preset appropriately',
      'Check if you have storage space',
      'Try saving individual effects first',
      'Verify preset is saved before applying elsewhere',
    ],
  },
};

export default function TroubleshootingDetail() {
  const location = useLocation();
  const content = troubleshootingContent[location.pathname];

  if (!content) {
    return null;
  }

  return (
    <Layout>
      <SEO
        title={content.title}
        description={`Solutions for: ${content.title}`}
        keywords="FlashFX, troubleshooting, help, issues, solutions"
      />
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 text-red-400" />
            <h1 className="text-4xl font-semibold text-white">{content.title}</h1>
          </div>
        </div>

        <div className="bg-navy-darker rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Solutions
          </h2>
          <ul className="space-y-3">
            {content.solutions.map((solution, index) => (
              <li key={index} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                <span className="text-yellow-accent font-medium mt-0.5">{index + 1}.</span>
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-navy-darker/50 border border-white/10 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-white mb-2">Still having issues?</h3>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            If none of these solutions work, please contact our support team with details about your
            issue, including any error messages and steps to reproduce the problem. You can reach us
            at{' '}
            <a
              href="mailto:support@flashfx.app"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              support@flashfx.app
            </a>
            .
          </p>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-400 text-black text-xs font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Contact Support
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
