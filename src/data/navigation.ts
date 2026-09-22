export interface NavigationItem {
  label: string;
  path: string;
  external?: boolean;
  icon?: string;
}

export interface NavigationSection {
  label?: string;
  items: NavigationItem[];
}

export const mainTabs: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Editor', path: '/editor' },
  { label: 'Troubleshooting', path: '/runtimes' },
  { label: 'Contact Us', path: '/support' },
  { label: 'Tutorials', path: '/tutorials' },
  { label: 'Marketplace', path: 'https://marketplace.flashfx.app', external: true },
  { label: 'Roadmap', path: 'https://roadmap.flashfx.app', external: true, icon: 'square' },
  { label: 'FlashFX Lite', path: '/lite' },
];

export const sidebarShortcuts: NavigationItem[] = [
  { label: 'Case Studies', path: '/case-studies', external: true },
  { label: 'Community', path: '/community', external: true },
  { label: 'Blog', path: '/blog', external: true },
  { label: 'Early Access', path: '/early-access', external: true },
];

export const sidebarSections: NavigationSection[] = [
  {
    label: 'GETTING STARTED',
    items: [
      { label: 'Introduction', path: '/' },
      { label: 'Best Practices', path: '/best-practices' },
      { label: 'Quick Links', path: '/quick-links' },
    ],
  },
  {
    label: 'COMMUNITY',
    items: [
      { label: 'Community Overview', path: '/community-overview', external: true },
      { label: 'Marketplace Overview', path: '/marketplace-overview' },
      { label: 'FlashFX Experts', path: '/experts', external: true },
    ],
  },
  {
    label: 'ACCOUNT ADMIN',
    items: [
      { label: 'Account Overview', path: '/account-overview', external: true },
      { label: 'Pricing', path: '/pricing' },
    ],
  },
  {
    label: 'LEGAL',
    items: [
      { label: 'Terms of Service', path: '/terms' },
    ],
  },
];

export interface TableOfContentsItem {
  label: string;
  id: string;
}

export interface SidebarItem {
  label: string;
  path?: string;
  children?: SidebarItem[];
  external?: boolean;
  icon?: string;
}

export interface SidebarConfig {
  iconItems?: SidebarItem[];
  sections?: Array<{
    label?: string;
    items: SidebarItem[];
    defaultExpanded?: boolean;
    collapsible?: boolean;
  }>;
  items?: SidebarItem[];
}

export const editorSidebar: SidebarConfig = {
  items: [
    {
      label: 'Fundamentals & Settings',
      children: [
        { label: 'What is FlashFX', path: '/editor/fundamentals/what-is-flashfx' },
        { label: 'Interface Overview', path: '/editor/fundamentals/interface-overview' },
        { label: 'Workspace Modes', path: '/editor/fundamentals/workspace-modes' },
        { label: 'Canvas & Project Setup', path: '/editor/fundamentals/canvas-project-setup' },
        { label: 'Application Settings', path: '/editor/fundamentals/application-settings' },
        { label: 'Grid, Rulers & Guides', path: '/editor/fundamentals/grid-rulers-guides' },
        { label: 'Snapping System', path: '/editor/fundamentals/snapping-system' },
        { label: 'Zoom & Navigation', path: '/editor/fundamentals/zoom-navigation' },
        { label: 'Color System & Color Picker', path: '/editor/fundamentals/color-system' },
        { label: 'Panels & Layout Customization', path: '/editor/fundamentals/panels-layout' },
        { label: 'Accounts, Storage & Sync', path: '/editor/fundamentals/accounts-storage' },
        { label: 'Keyboard Shortcuts — Master Reference', path: '/editor/fundamentals/keyboard-shortcuts' },
        { label: 'Accessibility Settings', path: '/editor/fundamentals/accessibility' },
      ],
    },
    {
      label: 'Manipulating Shapes',
      children: [
        { label: 'Shape Primitives', path: '/editor/shapes/primitives' },
        { label: 'The Pen Tool & Custom Paths', path: '/editor/shapes/pen-tool' },
        { label: 'Transform Operations', path: '/editor/shapes/transform-operations' },
        { label: 'Vertex & Path Editing', path: '/editor/shapes/vertex-editing' },
        { label: 'Boolean Operations', path: '/editor/shapes/boolean-operations' },
        { label: 'The Material System', path: '/editor/shapes/material-system' },
        { label: 'Fill Types', path: '/editor/shapes/fill-types' },
        { label: 'Stroke Properties', path: '/editor/shapes/stroke-properties' },
        { label: 'Shadows & Glow', path: '/editor/shapes/shadows-glow' },
        { label: 'Blend Modes', path: '/editor/shapes/blend-modes' },
        { label: 'Shape-Level Effects', path: '/editor/shapes/shape-effects' },
        { label: 'Groups & Nested Composition', path: '/editor/shapes/groups-composition' },
        { label: 'Alignment & Distribution', path: '/editor/shapes/alignment-distribution' },
        { label: 'Z-Order Management', path: '/editor/shapes/z-order' },
      ],
    },
    {
      label: 'Text',
      children: [
        { label: 'Placing Text', path: '/editor/text/placing-text' },
        { label: 'Text Box Modes', path: '/editor/text/text-box-modes' },
        { label: 'Character-Level Formatting', path: '/editor/text/character-formatting' },
        { label: 'Paragraph-Level Formatting', path: '/editor/text/paragraph-formatting' },
        { label: 'Typography Controls', path: '/editor/text/typography-controls' },
        { label: 'Text Fill & Material System', path: '/editor/text/text-fill' },
        { label: 'Text Stroke', path: '/editor/text/text-stroke' },
        { label: 'Text Shadow & Glow', path: '/editor/text/text-shadow' },
        { label: 'Text Background & Highlight', path: '/editor/text/text-background' },
        { label: 'Text Transform Properties', path: '/editor/text/text-transform' },
        { label: 'Text Animation Modes', path: '/editor/text/animation-modes' },
        { label: 'Stagger & Per-Unit Animation', path: '/editor/text/stagger-animation' },
        { label: 'Text on a Path', path: '/editor/text/text-on-path' },
        { label: 'Converting Text to Outlines', path: '/editor/text/convert-to-outlines' },
      ],
    },
    {
      label: 'Images',
      children: [
        { label: 'Importing Images', path: '/editor/images/importing' },
        { label: 'Image Transform & Placement', path: '/editor/images/transform-placement' },
        { label: 'Cropping & Masking', path: '/editor/images/cropping-masking' },
        { label: 'Image Fill Mode', path: '/editor/images/fill-mode' },
        { label: 'Color Adjustment Filters', path: '/editor/images/color-adjustment' },
        { label: 'Blur Filters', path: '/editor/images/blur-filters' },
        { label: 'Stylization & Artistic Filters', path: '/editor/images/artistic-filters' },
        { label: 'Distortion Filters', path: '/editor/images/distortion-filters' },
        { label: 'Light & Atmosphere Filters', path: '/editor/images/light-atmosphere' },
        { label: 'Filter Stacking & Ordering', path: '/editor/images/filter-stacking' },
        { label: 'Animating Image Properties', path: '/editor/images/animating-images' },
        { label: 'AI-Generated Images (DALL-E)', path: '/editor/images/ai-generated' },
        { label: 'Image Asset Management', path: '/editor/images/asset-management' },
        { label: 'Performance Guidelines for Images', path: '/editor/images/performance' },
      ],
    },
    {
      label: 'Animate Mode',
      children: [
        { label: 'Entering Animate Mode', path: '/editor/animate/entering-mode' },
        { label: 'The Keyframe System', path: '/editor/animate/keyframe-system' },
        { label: 'Property Tracks', path: '/editor/animate/property-tracks' },
        { label: 'Easing & Interpolation', path: '/editor/animate/easing-interpolation' },
        { label: 'The Easing Graph Editor', path: '/editor/animate/easing-graph' },
        { label: 'Easing Presets — Full Reference', path: '/editor/animate/easing-presets' },
        { label: 'Multi-Property Animation', path: '/editor/animate/multi-property' },
        { label: 'Animating Colors', path: '/editor/animate/animating-colors' },
        { label: 'Animating Along a Path', path: '/editor/animate/path-animation' },
        { label: 'Animating Shapes — Morph & Deform', path: '/editor/animate/morph-deform' },
        { label: 'Parenting & Hierarchy Animation', path: '/editor/animate/parenting-hierarchy' },
        { label: 'Expressions & Value Linking', path: '/editor/animate/expressions' },
        { label: 'Motion Paths & Spatial Interpolation', path: '/editor/animate/motion-paths' },
        { label: 'Looping & Cycle Animations', path: '/editor/animate/looping' },
        { label: 'Playback & Preview', path: '/editor/animate/playback-preview' },
      ],
    },
    {
      label: 'GPU Constraints & 3D',
      children: [
        { label: 'The Browser Rendering Environment', path: '/editor/gpu/rendering-environment' },
        { label: 'WebGL Architecture in FlashFX', path: '/editor/gpu/webgl-architecture' },
        { label: 'GPU Memory Management', path: '/editor/gpu/memory-management' },
        { label: 'Blend Mode Constraints', path: '/editor/gpu/blend-mode-constraints' },
        { label: 'Filter & Effect GPU Costs', path: '/editor/gpu/filter-costs' },
        { label: '3D Transform System', path: '/editor/gpu/3d-transform' },
        { label: 'Perspective & Camera Simulation', path: '/editor/gpu/perspective-camera' },
        { label: 'Z-Depth & Layer Ordering in 3D', path: '/editor/gpu/z-depth-ordering' },
        { label: '3D Lighting Model', path: '/editor/gpu/3d-lighting' },
        { label: 'GPU Tier Detection & Adaptive Quality', path: '/editor/gpu/tier-detection' },
        { label: 'Performance Profiling Tools', path: '/editor/gpu/profiling-tools' },
        { label: 'Known Constraints by Browser', path: '/editor/gpu/browser-constraints' },
        { label: 'Optimization Strategies for 3D', path: '/editor/gpu/3d-optimization' },
        { label: 'Exporting 3D Compositions', path: '/editor/gpu/3d-exporting' },
      ],
    },
    {
      label: '3D System',
      children: [
        { label: 'Overview', path: '/editor/3d/overview' },
        { label: 'Technology Stack', path: '/editor/3d/technology-stack' },
        { label: 'File Structure', path: '/editor/3d/file-structure' },
        { label: 'Per-Shape Renderer Model', path: '/editor/3d/architecture/per-shape-renderer' },
        { label: 'Canvas Integration', path: '/editor/3d/architecture/canvas-integration' },
        { label: 'Dirty Flag Render Loop', path: '/editor/3d/architecture/dirty-flag-render-loop' },
        { label: 'Mode System', path: '/editor/3d/architecture/mode-system' },
        { label: 'Scene Serialization', path: '/editor/3d/architecture/scene-serialization' },
      ],
    },
    {
      label: '3D API Reference',
      children: [
        { label: 'ThreeDShapeElement', path: '/editor/3d/api/threedshapeelement' },
        { label: 'ThreeDEngine', path: '/editor/3d/api/threedengine' },
        { label: 'SceneManager', path: '/editor/3d/api/scenemanager' },
        { label: 'GizmoController', path: '/editor/3d/api/gizmocontroller' },
        { label: 'GeometryFactory', path: '/editor/3d/api/geometryfactory' },
        { label: 'MaterialSystem', path: '/editor/3d/api/materialsystem' },
        { label: '3D Properties Panel', path: '/editor/3d/api/properties-panel' },
        { label: 'Texture System', path: '/editor/3d/api/texture-system' },
        { label: 'Model Import System', path: '/editor/3d/api/model-import' },
        { label: '3D Shape Library', path: '/editor/3d/api/shape-library' },
      ],
    },
    {
      label: '3D Guides',
      children: [
        { label: '3D Performance Guide', path: '/editor/3d/guides/performance' },
        { label: '3D Keyboard Shortcuts', path: '/editor/3d/guides/keyboard-shortcuts' },
        { label: '3D Troubleshooting', path: '/editor/3d/guides/troubleshooting' },
        { label: 'Extending the 3D System', path: '/editor/3d/guides/extending' },
      ],
    },
    {
      label: 'Timeline & Composition',
      children: [
        { label: 'Timeline Architecture', path: '/editor/timeline/architecture' },
        { label: 'The Timeline Ruler & Time Display', path: '/editor/timeline/ruler-time-display' },
        { label: 'Track Types & Track Organization', path: '/editor/timeline/track-organization' },
        { label: 'Keyframe Operations — Advanced', path: '/editor/timeline/keyframe-operations' },
        { label: 'The Graph Editor — Advanced', path: '/editor/timeline/graph-editor' },
        { label: 'The Work Area & Export Range', path: '/editor/timeline/work-area' },
        { label: 'Time Remapping', path: '/editor/timeline/time-remapping' },
        { label: 'Layer Duration & Trim', path: '/editor/timeline/layer-duration' },
        { label: 'The Sequence Compositor', path: '/editor/timeline/sequence-compositor' },
        { label: 'Nested Sequences', path: '/editor/timeline/nested-sequences' },
        { label: 'Markers & Annotations', path: '/editor/timeline/markers' },
        { label: 'Timeline Search & Filtering', path: '/editor/timeline/search-filtering' },
        { label: 'Rendering Cue System', path: '/editor/timeline/rendering-cues' },
        { label: 'Advanced Workflow Patterns', path: '/editor/timeline/advanced-workflows' },
      ],
    },
  ],
};

export const featuresSidebar: SidebarConfig = {
  items: [
    { label: 'Demos', path: '/features/demos' },
    { label: 'Creating Scripts', path: '/features/creating-scripts' },
    {
      label: 'Protocols (Script Types)',
      children: [
        { label: 'Protocol Overview', path: '/features/protocols/overview' },
      ],
    },
    { label: 'Data Binding', path: '/features/data-binding' },
    { label: 'Script Inputs', path: '/features/script-inputs' },
    { label: 'Pointer Events', path: '/features/pointer-events' },
    {
      label: 'Debugging',
      children: [
        { label: 'Debug Tools', path: '/features/debugging/tools' },
      ],
    },
    { label: 'Configuration', path: '/features/configuration' },
    { label: 'Keyboard Shortcuts', path: '/features/keyboard-shortcuts' },
  ],
  sections: [
    {
      label: 'Scripting API',
      collapsible: false,
      items: [
        {
          label: 'Artboards',
          children: [
            { label: 'Artboard API', path: '/features/api/artboards' },
          ],
        },
        {
          label: 'Color',
          children: [
            { label: 'Color API', path: '/features/api/color' },
          ],
        },
        {
          label: 'DataValue',
          children: [
            { label: 'DataValue API', path: '/features/api/datavalue' },
          ],
        },
        {
          label: 'Gradient',
          children: [
            { label: 'Gradient API', path: '/features/api/gradient' },
          ],
        },
        {
          label: 'Image',
          children: [
            { label: 'Image API', path: '/features/api/image' },
          ],
        },
        {
          label: 'Interfaces',
          children: [
            { label: 'Interfaces API', path: '/features/api/interfaces' },
          ],
        },
        {
          label: 'Mat2d',
          children: [
            { label: 'Mat2d API', path: '/features/api/mat2d' },
          ],
        },
        {
          label: 'Paint',
          children: [
            { label: 'Paint API', path: '/features/api/paint' },
          ],
        },
        {
          label: 'Path',
          children: [
            { label: 'Path API', path: '/features/api/path' },
          ],
        },
        {
          label: 'Renderer',
          children: [
            { label: 'Renderer API', path: '/features/api/renderer' },
          ],
        },
        {
          label: 'Vec2d',
          children: [
            { label: 'Vec2d API', path: '/features/api/vec2d' },
          ],
        },
      ],
    },
  ],
};

export const homeSidebar: SidebarConfig = {
  iconItems: [
    { label: 'Creators', path: '/creators', icon: 'DollarSign' },
    { label: 'Community', path: '/community', icon: 'Users' },
    { label: 'Blog', path: '/blog', icon: 'FileText' },
    { label: 'Early Access', path: '/early-access', icon: 'Zap' },
  ],
  sections: [
    {
      label: 'Getting Started',
      collapsible: false,
      items: [
        { label: 'Introduction', path: '/' },
        { label: 'Best Practices', path: '/best-practices' },
        { label: 'Quick Links', path: '/quick-links' },
      ],
    },
    {
      label: 'Community',
      collapsible: false,
      items: [
        { label: 'Discord', path: 'https://discord.gg/UQGEQ7PxGh', external: true },
        { label: 'Marketplace Overview', path: '/marketplace-overview' },
      ],
    },
    {
      label: 'Account Admin',
      collapsible: false,
      items: [
        {
          label: 'Account Overview',
          children: [
            { label: 'Overview', path: '/account-overview' },
            { label: 'Privacy Policy', path: '/privacy-policy' },
          ],
        },
        { label: 'Pricing', path: '/pricing' },
      ],
    },
    {
      label: 'Legal',
      collapsible: false,
      items: [
        { label: 'Terms of Service', path: '/terms' },
      ],
    },
  ],
};

export const runtimesSidebar: SidebarConfig = {
  sections: [
    {
      label: 'Critical Issues',
      defaultExpanded: true,
      collapsible: true,
      items: [
        { label: 'Editor is slow', path: '/troubleshooting/editor-is-slow' },
        { label: 'Canvas is not rendering', path: '/troubleshooting/canvas-is-not-rendering' },
        { label: 'Animation export fails', path: '/troubleshooting/animation-export-fails' },
        { label: 'File cannot be opened', path: '/troubleshooting/file-cannot-be-opened' },
        { label: 'Changes are not saving', path: '/troubleshooting/changes-are-not-saving' },
      ],
    },
    {
      label: 'Basics / Interface',
      defaultExpanded: false,
      collapsible: true,
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
    },
    {
      label: 'Shapes & Objects',
      defaultExpanded: false,
      collapsible: true,
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
    },
    {
      label: 'Colors & Styles',
      defaultExpanded: false,
      collapsible: true,
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
    },
    {
      label: 'Animation Basics',
      defaultExpanded: false,
      collapsible: true,
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
    },
    {
      label: 'Advanced Animation',
      defaultExpanded: false,
      collapsible: true,
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
    },
    {
      label: 'Masks & Effects',
      defaultExpanded: false,
      collapsible: true,
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
    },
  ],
};

export const featureSupportSidebar: SidebarConfig = {
  items: [
    { label: 'Support', path: '/feature-support' },
  ],
};

export const tutorialsSidebar: SidebarConfig = {
  sections: [
    {
      label: 'From Beginner to Hero',
      defaultExpanded: true,
      collapsible: true,
      items: [
        { label: 'Course overview', path: '/beginner-to-hero' },
        {
          label: '1. Getting oriented',
          children: [
            { label: '01. What FlashFX is', path: '/beginner-to-hero/01-what-is-flashfx' },
            { label: '02. The interface', path: '/beginner-to-hero/02-the-interface' },
            { label: '03. Design, Animate and Advanced modes', path: '/beginner-to-hero/03-workspace-modes' },
            { label: '04. Setting up a project', path: '/beginner-to-hero/04-canvas-and-project-setup' },
            { label: '05. Moving around the canvas', path: '/beginner-to-hero/05-zoom-and-navigation' },
            { label: '06. Grid, guides and snapping', path: '/beginner-to-hero/06-grid-guides-and-snapping' },
          ],
        },
        {
          label: '2. Drawing shapes',
          children: [
            { label: '07. Your first shape', path: '/beginner-to-hero/07-your-first-rectangle' },
            { label: '08. Circles, arcs and rings', path: '/beginner-to-hero/08-circles-arcs-and-rings' },
            { label: '09. Stars and polygons', path: '/beginner-to-hero/09-stars-and-polygons' },
            { label: '10. Lines and arrowheads', path: '/beginner-to-hero/10-lines-and-arrowheads' },
            { label: '11. The Pen tool', path: '/beginner-to-hero/11-the-pen-tool' },
            { label: '12. Editing vertices', path: '/beginner-to-hero/12-vertex-editing' },
            { label: '13. Boolean operations', path: '/beginner-to-hero/13-boolean-operations' },
          ],
        },
        {
          label: '3. Surfaces and styling',
          children: [
            { label: '14. The material stack', path: '/beginner-to-hero/14-the-material-stack' },
            { label: '15. Color and the picker', path: '/beginner-to-hero/15-color-and-the-picker' },
            { label: '16. Gradients', path: '/beginner-to-hero/16-gradients' },
            { label: '17. Textures and patterns', path: '/beginner-to-hero/17-textures-and-patterns' },
            { label: '18. Strokes', path: '/beginner-to-hero/18-strokes' },
            { label: '19. Drop and inner shadows', path: '/beginner-to-hero/19-shadows' },
            { label: '20. Outer and inner glow', path: '/beginner-to-hero/20-glow' },
            { label: '21. Blend modes', path: '/beginner-to-hero/21-blend-modes' },
          ],
        },
        {
          label: '4. Structure and composition',
          children: [
            { label: '22. Groups and nesting', path: '/beginner-to-hero/22-groups-and-nesting' },
            { label: '23. Alignment and distribution', path: '/beginner-to-hero/23-alignment-and-distribution' },
            { label: '24. Z-order and the Layer Panel', path: '/beginner-to-hero/24-z-order-and-layers' },
            { label: '25. Masks and clipping', path: '/beginner-to-hero/25-masks-and-clipping' },
          ],
        },
        {
          label: '5. Type',
          children: [
            { label: '26. Placing text', path: '/beginner-to-hero/26-placing-text' },
            { label: '27. Formatting text', path: '/beginner-to-hero/27-formatting-text' },
            { label: '28. Styling text', path: '/beginner-to-hero/28-styling-text' },
            { label: '29. Text on a path', path: '/beginner-to-hero/29-text-on-a-path' },
          ],
        },
        {
          label: '6. Images',
          children: [
            { label: '30. Importing images', path: '/beginner-to-hero/30-importing-images' },
            { label: '31. Cropping and image fills', path: '/beginner-to-hero/31-cropping-and-image-fills' },
            { label: '32. Color adjustment', path: '/beginner-to-hero/32-color-adjustment' },
            { label: '33. Blur, stylization and distortion', path: '/beginner-to-hero/33-filters' },
          ],
        },
        {
          label: '7. Animation fundamentals',
          children: [
            { label: '34. Entering Animate mode', path: '/beginner-to-hero/34-entering-animate-mode' },
            { label: '35. Your first keyframes', path: '/beginner-to-hero/35-your-first-keyframes' },
            { label: '36. Property tracks', path: '/beginner-to-hero/36-property-tracks' },
            { label: '37. Easing', path: '/beginner-to-hero/37-easing' },
            { label: '38. The easing graph editor', path: '/beginner-to-hero/38-the-easing-graph' },
            { label: '39. Animating transforms', path: '/beginner-to-hero/39-animating-transforms' },
            { label: '40. Animating color', path: '/beginner-to-hero/40-animating-color' },
          ],
        },
        {
          label: '8. Going further',
          children: [
            { label: '41. Motion paths', path: '/beginner-to-hero/41-motion-paths' },
            { label: '42. Text animation and stagger', path: '/beginner-to-hero/42-text-animation' },
            { label: '43. Parenting and nulls', path: '/beginner-to-hero/43-parenting-and-nulls' },
            { label: '44. Looping and time', path: '/beginner-to-hero/44-looping-and-time' },
            { label: '45. Preview and export', path: '/beginner-to-hero/45-preview-and-export' },
          ],
        },
      ],
    },
    {
      label: 'Basics / Interface',
      defaultExpanded: true,
      collapsible: true,
      items: [
        { label: 'How to create a new project', path: '/tutorials/how-to-create-a-new-project' },
        { label: 'How to save and export a project', path: '/tutorials/how-to-save-and-export-a-project' },
        { label: 'How to navigate the canvas', path: '/tutorials/how-to-navigate-the-canvas' },
        { label: 'How to zoom and pan efficiently', path: '/tutorials/how-to-zoom-and-pan-efficiently' },
        { label: 'How to change background color', path: '/tutorials/how-to-change-background-color' },
        { label: 'How to switch between light and dark mode', path: '/tutorials/how-to-switch-between-light-and-dark-mode' },
        { label: 'How to organize layers', path: '/tutorials/how-to-organize-layers' },
        { label: 'How to lock/unlock layers', path: '/tutorials/how-to-lock-unlock-layers' },
        { label: 'How to hide/unhide layers', path: '/tutorials/how-to-hide-unhide-layers' },
        { label: 'How to use the undo/redo history', path: '/tutorials/how-to-use-the-undo-redo-history' },
      ],
    },
    {
      label: 'Shapes & Objects',
      defaultExpanded: false,
      collapsible: true,
      items: [
        { label: 'How to create a rectangle', path: '/tutorials/how-to-create-a-rectangle' },
        { label: 'How to create a circle', path: '/tutorials/how-to-create-a-circle' },
        { label: 'How to create a line', path: '/tutorials/how-to-create-a-line' },
        { label: 'How to create custom polygon shapes', path: '/tutorials/how-to-create-custom-polygon-shapes' },
        { label: 'How to edit shape properties (size, position, rotation)', path: '/tutorials/how-to-edit-shape-properties' },
        { label: 'How to copy/paste shapes', path: '/tutorials/how-to-copy-paste-shapes' },
        { label: 'How to duplicate objects', path: '/tutorials/how-to-duplicate-objects' },
        { label: 'How to align objects perfectly', path: '/tutorials/how-to-align-objects-perfectly' },
        { label: 'How to distribute objects evenly', path: '/tutorials/how-to-distribute-objects-evenly' },
        { label: 'How to group and ungroup objects', path: '/tutorials/how-to-group-and-ungroup-objects' },
      ],
    },
    {
      label: 'Colors & Styles',
      defaultExpanded: false,
      collapsible: true,
      items: [
        { label: 'How to fill a shape with color', path: '/tutorials/how-to-fill-a-shape-with-color' },
        { label: 'How to apply gradient fills', path: '/tutorials/how-to-apply-gradient-fills' },
        { label: 'How to use stroke/border settings', path: '/tutorials/how-to-use-stroke-border-settings' },
        { label: 'How to adjust opacity', path: '/tutorials/how-to-adjust-opacity' },
        { label: 'How to use color presets', path: '/tutorials/how-to-use-color-presets' },
        { label: 'How to use eyedropper tool to pick colors', path: '/tutorials/how-to-use-eyedropper-tool-to-pick-colors' },
        { label: 'How to save custom color palettes', path: '/tutorials/how-to-save-custom-color-palettes' },
        { label: 'How to apply shadows and glows', path: '/tutorials/how-to-apply-shadows-and-glows' },
        { label: 'How to add inner shadows', path: '/tutorials/how-to-add-inner-shadows' },
        { label: 'How to apply texture overlays', path: '/tutorials/how-to-apply-texture-overlays' },
      ],
    },
    {
      label: 'Animation Basics',
      defaultExpanded: false,
      collapsible: true,
      items: [
        { label: 'How to animate position', path: '/tutorials/how-to-animate-position' },
        { label: 'How to animate scale', path: '/tutorials/how-to-animate-scale' },
        { label: 'How to animate rotation', path: '/tutorials/how-to-animate-rotation' },
        { label: 'How to animate opacity', path: '/tutorials/how-to-animate-opacity' },
        { label: 'How to use easing presets', path: '/tutorials/how-to-use-easing-presets' },
        { label: 'How to create keyframes', path: '/tutorials/how-to-create-keyframes' },
        { label: 'How to copy and paste keyframes', path: '/tutorials/how-to-copy-and-paste-keyframes' },
        { label: 'How to adjust timing of animations', path: '/tutorials/how-to-adjust-timing-of-animations' },
        { label: 'How to use the timeline efficiently', path: '/tutorials/how-to-use-the-timeline-efficiently' },
        { label: 'How to preview animations', path: '/tutorials/how-to-preview-animations' },
      ],
    },
    {
      label: 'Advanced Animation',
      defaultExpanded: false,
      collapsible: true,
      items: [
        { label: 'How to create compound animations', path: '/tutorials/how-to-create-compound-animations' },
        { label: 'How to use motion paths', path: '/tutorials/how-to-use-motion-paths' },
        { label: 'How to loop animations', path: '/tutorials/how-to-loop-animations' },
        { label: 'How to reverse animations', path: '/tutorials/how-to-reverse-animations' },
        { label: 'How to create offset animations for multiple objects', path: '/tutorials/how-to-create-offset-animations-for-multiple-objects' },
        { label: 'How to apply auto-align animation', path: '/tutorials/how-to-apply-auto-align-animation' },
        { label: 'How to use animation presets', path: '/tutorials/how-to-use-animation-presets' },
        { label: 'How to animate masks', path: '/tutorials/how-to-animate-masks' },
        { label: 'How to animate gradients or color changes', path: '/tutorials/how-to-animate-gradients-or-color-changes' },
        { label: 'How to animate text properties', path: '/tutorials/how-to-animate-text-properties' },
      ],
    },
    {
      label: 'Masks & Effects',
      defaultExpanded: false,
      collapsible: true,
      items: [
        { label: 'How to create a basic mask', path: '/tutorials/how-to-create-a-basic-mask' },
        { label: 'How to animate a mask', path: '/tutorials/how-to-animate-a-mask' },
        { label: 'How to invert masks', path: '/tutorials/how-to-invert-masks' },
        { label: 'How to use multiple masks on a single layer', path: '/tutorials/how-to-use-multiple-masks-on-a-single-layer' },
        { label: 'How to apply blur effects', path: '/tutorials/how-to-apply-blur-effects' },
        { label: 'How to apply glow effects', path: '/tutorials/how-to-apply-glow-effects' },
        { label: 'How to apply shadow effects', path: '/tutorials/how-to-apply-shadow-effects' },
        { label: 'How to apply distortion effects', path: '/tutorials/how-to-apply-distortion-effects' },
        { label: 'How to combine multiple effects', path: '/tutorials/how-to-combine-multiple-effects' },
        { label: 'How to save and reuse effect presets', path: '/tutorials/how-to-save-and-reuse-effect-presets' },
      ],
    },
  ],
};

export const liteSidebar: SidebarConfig = {
  items: [
    { label: 'Overview', path: '/lite' },
    { label: 'Interface', path: '/lite/interface' },
    { label: 'Creating a Project', path: '/lite/creating-project' },
    {
      label: 'Objects',
      path: '/lite/objects',
      children: [
        { label: 'Square', path: '/lite/objects/square' },
        { label: 'Circle', path: '/lite/objects/circle' },
        { label: 'Line', path: '/lite/objects/line' },
        { label: 'Text', path: '/lite/objects/text' },
      ],
    },
    { label: 'Basic Animation', path: '/lite/animation' },
    { label: 'Gestures and Shortcuts', path: '/lite/gestures' },
    { label: 'Export', path: '/lite/export' },
    { label: 'Limitations', path: '/lite/limitations' },
    { label: 'Troubleshooting', path: '/lite/troubleshooting' },
    { label: 'Upgrade to FlashFX', path: '/lite/upgrade' },
  ],
};

export const sidebarConfigs: Record<string, SidebarConfig> = {
  '/': homeSidebar,
  '/editor': editorSidebar,
  '/runtimes': runtimesSidebar,
  '/feature-support': featureSupportSidebar,
  '/tutorials': tutorialsSidebar,
  '/lite': liteSidebar,
};
