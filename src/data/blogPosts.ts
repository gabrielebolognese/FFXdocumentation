export interface BlogPost {
  id: string;
  slug: string;
  category: 'RELEASES' | 'UPDATES' | 'TUTORIALS';
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '301',
    slug: 'first-tutorials-now-live',
    category: 'TUTORIALS',
    title: 'Our First Tutorials Are Live: Learn FlashFX From the Ground Up',
    excerpt: 'We\'ve just published the first set of step-by-step tutorials for FlashFX. From creating your first project to animating shapes and managing layers, these guides walk you through every foundational workflow in the editor — with screenshots and clear instructions at every step. Head to the Tutorials page to get started.',
    author: 'FlashFX Team',
    date: 'Mar 20, 2026',
    image: '/Screenshot_2026-01-23_164632.png',
  },
  {
    id: '101',
    slug: 'full-3d-shape-support',
    category: 'UPDATES',
    title: 'Full 3D Shape Support: Import, Place, and Animate GLB Models Directly on the Canvas',
    excerpt: 'FlashFX now supports 3D mesh elements as first-class canvas objects. Drop any GLB file onto the timeline, control its position and rotation with standard keyframes, and composite it seamlessly alongside your 2D layers.',
    author: 'FlashFX Team',
    date: 'Mar 17, 2026',
    image: '/Screenshot_2026-03-01_180920_-_Copy.png',
  },
  {
    id: '102',
    slug: 'redesigned-image-filter-panel',
    category: 'UPDATES',
    title: 'Redesigned Image Filter Panel: 60+ Non-Destructive Effects With Per-Filter Keyframing',
    excerpt: 'The image filter system has been completely rebuilt. Every filter, from brightness and contrast to hue rotation and channel curves, now lives in a dedicated panel with a live preview and full keyframe support on every individual parameter.',
    author: 'FlashFX Team',
    date: 'Mar 12, 2026',
    image: '/Screenshot_2026-03-01_200913.png',
  },
  {
    id: '103',
    slug: 'new-keyframe-features',
    category: 'UPDATES',
    title: 'New Keyframe Features: Clipping Mask Keyframing, Bulk Edit Mode, and Graph Editor Overhaul',
    excerpt: 'Three major keyframe improvements land in this release. Clipping masks are now fully animatable with their own property tracks, multiple keyframes across different layers can be edited simultaneously in bulk mode, and the graph editor has been rewritten for precision handle control.',
    author: 'FlashFX Team',
    date: 'Mar 8, 2026',
    image: '/Screenshot_2026-03-01_201051.png',
  },
  {
    id: '104',
    slug: 'pattern-fill-properties',
    category: 'UPDATES',
    title: 'Pattern Fill Properties Expanded: Dots, Lines, Grids, Diagonals, and Custom SVG With Full Animation Support',
    excerpt: 'The pattern fill system now ships with five built-in tile types, each with independent size, spacing, angle, and opacity controls. Every parameter is keyframeable, and a new custom SVG slot lets you use any vector motif as a repeating fill across shapes and text.',
    author: 'FlashFX Team',
    date: 'Mar 4, 2026',
    image: '/Screenshot_2026-03-01_202425_-_Copy.png',
  },
  {
    id: '105',
    slug: 'faster-gpu-acceleration',
    category: 'UPDATES',
    title: 'Faster GPU Acceleration: New Rendering Engine Delivers Up to 3x Performance on Complex Scenes',
    excerpt: 'A complete rewrite of the WebGL render pipeline brings dramatic performance gains for projects with dense layer stacks, stacked text elements, and high-resolution image composites. Most mid-complexity scenes now hit a consistent 60fps in the editor preview.',
    author: 'FlashFX Team',
    date: 'Feb 28, 2026',
    image: '/Screenshot_2026-03-03_204557_-_Copy.png',
  },
  {
    id: '201',
    slug: 'alpha-release-3-0',
    category: 'RELEASES',
    title: 'FlashFX Alpha 3.0: Rebuilt Animation Engine, Chat Frame Components, and a Redesigned Timeline',
    excerpt: 'Alpha 3.0 marks the most significant internal overhaul since the project started. The animation engine has been rewritten from scratch, a new Chat Frame component library ships out of the box, and the timeline panel has been completely redesigned for clarity and speed.',
    author: 'FlashFX Team',
    date: 'Jun 12, 2025',
    image: '/8jyjs3vfo1ff1.png',
  },
  {
    id: '202',
    slug: 'beta-release-1',
    category: 'RELEASES',
    title: 'FlashFX Beta 1: Public Testing Begins With Multi-Device Preview and Component State Support',
    excerpt: 'Beta 1 opens FlashFX to our first wave of external testers. This release introduces side-by-side multi-device preview directly on the canvas, initial component state support, and a first pass at the public runtime API.',
    author: 'FlashFX Team',
    date: 'Aug 5, 2025',
    image: '/back_on_track.png',
  },
  {
    id: '203',
    slug: 'beta-release-2',
    category: 'RELEASES',
    title: 'FlashFX Beta 2: Script Runner, CMD Layer Type, and Improved Font Rendering Pipeline',
    excerpt: 'Beta 2 ships the CMD layer type for terminal-style text animations, an in-editor script runner for testing expressions live, and a reworked font rendering pipeline that eliminates subpixel inconsistencies across zoom levels.',
    author: 'FlashFX Team',
    date: 'Oct 18, 2025',
    image: '/edit.png',
  },
  {
    id: '204',
    slug: 'beta-release-4',
    category: 'RELEASES',
    title: 'FlashFX Beta 4: Interactive Flowchart Mode, Motion Path Enhancements, and Export Stability Fixes',
    excerpt: 'Beta 4 introduces a dedicated flowchart canvas mode with connectable node shapes, motion path editing directly on the stage, and over 40 export stability fixes identified during the Beta 3 feedback period.',
    author: 'FlashFX Team',
    date: 'Dec 9, 2025',
    image: '/VISUALS.png',
  },
];
