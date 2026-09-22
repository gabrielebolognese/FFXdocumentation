/**
 * "From Beginner to Hero" — the ordered, 45-step course through FlashFX.
 *
 * Distinct from `/tutorials/*`, which is a flat reference library you dip into
 * for one answer. This is a single path with an order that matters: each step
 * assumes the ones before it, which is why the page is a stepper with previous
 * and next rather than a grid of cards.
 *
 * One route per step (`/beginner-to-hero/<slug>`), not a client-side carousel.
 * A carousel would leave 44 of the 45 steps with no URL — unlinkable,
 * unbookmarkable and invisible to search, which would undo the work in
 * SEO-documentation.md M1–M5 for the whole section.
 *
 * The curriculum is sequenced from the reference material at the repo root
 * (01_Fundamentals_and_Settings.md … 07_Timeline_Features_for_Composition.md),
 * so the order follows the product's actual dependencies — the material stack
 * before gradients, Record Mode before keyframes, the anchor point before
 * rotation.
 *
 * ---------------------------------------------------------------------------
 * VIDEOS ARE PLACEHOLDERS
 * ---------------------------------------------------------------------------
 * No step has a real video yet. Rather than embed arbitrary third-party
 * content, the stand-ins rotate the three videos already published on
 * `/tutorials/*` — known-good, already vetted, already on the site.
 *
 * To publish a real video for a step, add `videoId` to that step. That single
 * edit does three things:
 *   - the step renders the real video instead of a stand-in
 *   - `scripts/lib/routes.mjs` sees it and lets the URL into the sitemap
 *   - the page starts emitting VideoObject structured data
 *
 * Steps without `videoId` are still prerendered — a URL a user can reach must
 * return real HTML — but stay out of the sitemap, matching how the 57 empty
 * `/tutorials/*` pages are handled. No JSON-LD is emitted for a stand-in,
 * because describing someone else's video as a FlashFX tutorial is fabricated
 * structured data and a manual-action risk.
 */

export interface BeginnerToHeroStep {
  /** URL segment. Number-prefixed so the order is visible in the address bar. */
  slug: string;
  title: string;
  /** One sentence. Drives the meta description and the card copy. */
  summary: string;
  /**
   * A real FlashFX video. Omit while the step is a placeholder — see the note
   * above. Parsed by scripts/lib/routes.mjs, so keep it on one line.
   */
  videoId?: string;
}

export interface BeginnerToHeroStage {
  label: string;
  blurb: string;
  steps: BeginnerToHeroStep[];
}

export const BASE_PATH = '/beginner-to-hero';

/**
 * Stand-ins, rotated by step index. These are the three videos already live on
 * `/tutorials/*`. Replace a step's stand-in by giving that step its own
 * `videoId` — do not edit this list.
 */
const PLACEHOLDER_VIDEO_IDS = ['7zYDaMDK_Fg', 'H2KzO52VAsc', 'Q0ykLG3Z4gM'];

export const stages: BeginnerToHeroStage[] = [
  {
    label: 'Getting oriented',
    blurb: 'What the editor is, how it is laid out, and how to move around it.',
    steps: [
      {
        slug: '01-what-is-flashfx',
        title: 'What FlashFX is',
        summary:
          'What the editor is for, what it produces, and how a browser-based workflow differs from installing desktop software.',
      },
      {
        slug: '02-the-interface',
        title: 'The interface',
        summary:
          'The menu bar, toolbar, Properties Panel, canvas, Layer Panel and timeline, and what each one is responsible for.',
      },
      {
        slug: '03-workspace-modes',
        title: 'Design, Animate and Advanced modes',
        summary:
          'Why the interface rearranges between modes, and which mode to be in for the task in front of you.',
      },
      {
        slug: '04-canvas-and-project-setup',
        title: 'Setting up a project',
        summary:
          'Canvas dimensions, frame rate, duration and background — and which of them you can safely change later.',
      },
      {
        slug: '05-zoom-and-navigation',
        title: 'Moving around the canvas',
        summary:
          'The zoom range and where it anchors, the four ways to pan, and the fit shortcuts that get you unlost.',
      },
      {
        slug: '06-grid-guides-and-snapping',
        title: 'Grid, guides and snapping',
        summary:
          'Rulers, guides and the grid, plus the snapping system that makes precise placement fast instead of fiddly.',
      },
    ],
  },
  {
    label: 'Drawing shapes',
    blurb: 'Every primitive, the Pen tool, and how to reshape what you have drawn.',
    steps: [
      {
        slug: '07-your-first-rectangle',
        title: 'Your first shape',
        summary:
          'Drawing a rectangle, constraining it to a square, and the corner radius and corner style controls.',
      },
      {
        slug: '08-circles-arcs-and-rings',
        title: 'Circles, arcs and rings',
        summary:
          'Ellipses, the arc angles that make animated progress rings, and the inner radius that turns a disc into a donut.',
      },
      {
        slug: '09-stars-and-polygons',
        title: 'Stars and polygons',
        summary:
          'Side and point counts, the inner-to-outer radius ratio that controls sharpness, and corner smoothing.',
      },
      {
        slug: '10-lines-and-arrowheads',
        title: 'Lines and arrowheads',
        summary:
          'Why a line renders entirely from its stroke, the three cap styles, arrowheads, and dashed-line settings.',
      },
      {
        slug: '11-the-pen-tool',
        title: 'The Pen tool',
        summary:
          'Placing anchor points, pulling bezier handles, and closing a path into a fillable shape.',
      },
      {
        slug: '12-vertex-editing',
        title: 'Editing vertices',
        summary:
          'Entering Vertex Edit mode to select, move, add and remove points, and to reshape handles on an existing path.',
      },
      {
        slug: '13-boolean-operations',
        title: 'Boolean operations',
        summary:
          'Combining shapes by union, subtraction, intersection and difference to build outlines you cannot draw directly.',
      },
    ],
  },
  {
    label: 'Surfaces and styling',
    blurb: 'The material stack — fills, strokes, shadows, glow and blending.',
    steps: [
      {
        slug: '14-the-material-stack',
        title: 'The material stack',
        summary:
          'Why a shape carries an ordered list of fill layers rather than one fill color, and how those layers composite.',
      },
      {
        slug: '15-color-and-the-picker',
        title: 'Color and the picker',
        summary:
          'RGB, HSL, HSB and hex, the independent alpha channel, and the difference between fill layer and element opacity.',
      },
      {
        slug: '16-gradients',
        title: 'Gradients',
        summary:
          'Linear, radial, angular and diamond gradients — color stops, angle, explicit start and end points, and repeat modes.',
      },
      {
        slug: '17-textures-and-patterns',
        title: 'Textures and patterns',
        summary:
          'The procedural texture types, geometric pattern fills, and the scale and seed parameters that vary them.',
      },
      {
        slug: '18-strokes',
        title: 'Strokes',
        summary:
          'Weight and alignment, caps and joins, multi-pair dash patterns, and gradient strokes along or across the path.',
      },
      {
        slug: '19-shadows',
        title: 'Drop and inner shadows',
        summary:
          'Offset, blur and spread, stacking several shadows on one shape, and when an inner shadow is the right choice.',
      },
      {
        slug: '20-glow',
        title: 'Outer and inner glow',
        summary:
          'Spread and falloff, and the blend mode that turns a flat colored halo into something that reads as light.',
      },
      {
        slug: '21-blend-modes',
        title: 'Blend modes',
        summary:
          'The darken, lighten, contrast, inversion and component groups, and what each one is actually good for.',
      },
    ],
  },
  {
    label: 'Structure and composition',
    blurb: 'Organising a document so it stays workable as it grows.',
    steps: [
      {
        slug: '22-groups-and-nesting',
        title: 'Groups and nesting',
        summary:
          'Creating groups, how group and member transforms compose, and pass-through versus isolated blending.',
      },
      {
        slug: '23-alignment-and-distribution',
        title: 'Alignment and distribution',
        summary:
          'Aligning to the selection, the canvas or a key object, and the two different meanings of even spacing.',
      },
      {
        slug: '24-z-order-and-layers',
        title: 'Z-order and the Layer Panel',
        summary:
          'Reordering the stack, naming layers so search works, and the lock, visibility and solo toggles.',
      },
      {
        slug: '25-masks-and-clipping',
        title: 'Masks and clipping',
        summary:
          'Clip paths for hard edges, alpha and luminance masks for soft ones, and nesting groups to stack them.',
      },
    ],
  },
  {
    label: 'Type',
    blurb: 'Placing, formatting and styling text as a first-class element.',
    steps: [
      {
        slug: '26-placing-text',
        title: 'Placing text',
        summary:
          'The Text tool, the three text box modes, and what changes when you convert between them.',
      },
      {
        slug: '27-formatting-text',
        title: 'Formatting text',
        summary:
          'Character-level controls from tracking to baseline shift, paragraph controls, and the OpenType features available.',
      },
      {
        slug: '28-styling-text',
        title: 'Styling text',
        summary:
          'Gradient and texture text fills, strokes, shadows, and per-character versus full-block backgrounds.',
      },
      {
        slug: '29-text-on-a-path',
        title: 'Text on a path',
        summary:
          'Attaching text to a vector path, the alignment and spacing controls, and detaching it cleanly afterwards.',
      },
    ],
  },
  {
    label: 'Images',
    blurb: 'Bringing raster content in, and the filter stack that treats it.',
    steps: [
      {
        slug: '30-importing-images',
        title: 'Importing images',
        summary:
          'Supported formats, the import methods, and why source resolution costs you more than display size does.',
      },
      {
        slug: '31-cropping-and-image-fills',
        title: 'Cropping and image fills',
        summary:
          'Non-destructive crop, vector and alpha masks on images, and using an image as the fill of a shape.',
      },
      {
        slug: '32-color-adjustment',
        title: 'Color adjustment',
        summary:
          'Brightness and contrast, curves, levels, saturation, temperature and the rest of the grading stack.',
      },
      {
        slug: '33-filters',
        title: 'Blur, stylization and distortion',
        summary:
          'The filter families, why stack order changes the result rather than just the cost, and per-filter opacity.',
      },
    ],
  },
  {
    label: 'Animation fundamentals',
    blurb: 'The keyframe engine, and the settings that decide whether it records.',
    steps: [
      {
        slug: '34-entering-animate-mode',
        title: 'Entering Animate mode',
        summary:
          'The mode switch, the playhead, and Record Mode — the setting that decides whether a property change becomes a keyframe.',
      },
      {
        slug: '35-your-first-keyframes',
        title: 'Your first keyframes',
        summary:
          'Creating, selecting, moving, copying and deleting keyframes, and what standard, hold and roving types do.',
      },
      {
        slug: '36-property-tracks',
        title: 'Property tracks',
        summary:
          'How the timeline organises one track per animated property, and the visibility and solo toggles on each.',
      },
      {
        slug: '37-easing',
        title: 'Easing',
        summary:
          'Why easing governs the transition leaving a keyframe, and how to choose a preset that reads the way you intend.',
      },
      {
        slug: '38-the-easing-graph',
        title: 'The easing graph editor',
        summary:
          'Reading the curve, dragging its handles, and comparing several property curves in one view.',
      },
      {
        slug: '39-animating-transforms',
        title: 'Animating transforms',
        summary:
          'Position, scale, rotation and opacity — and why the anchor point must be set before you keyframe any of them.',
      },
      {
        slug: '40-animating-color',
        title: 'Animating color',
        summary:
          'LAB versus RGB interpolation, keyframing gradient stops, and hold keyframes for hard flashes.',
      },
    ],
  },
  {
    label: 'Going further',
    blurb: 'The techniques that separate a moving document from a finished piece.',
    steps: [
      {
        slug: '41-motion-paths',
        title: 'Motion paths',
        summary:
          'Attaching an element to a path, keyframing progress from 0 to 1, and auto-orient with its offset.',
      },
      {
        slug: '42-text-animation',
        title: 'Text animation and stagger',
        summary:
          'Block, line, word and character modes, and the stagger system that cascades them without keyframing each unit.',
      },
      {
        slug: '43-parenting-and-nulls',
        title: 'Parenting and nulls',
        summary:
          'The parent-child system, null objects as reusable controls, and how animation inheritance composes.',
      },
      {
        slug: '44-looping-and-time',
        title: 'Looping and time',
        summary:
          'The work area, loop expressions, time remapping, freeze frames and speed ramping.',
      },
      {
        slug: '45-preview-and-export',
        title: 'Preview and export',
        summary:
          'Preview quality and the render cache, export ranges and formats, and what to check before you ship.',
      },
    ],
  },
];

/** Every step in course order. This is what the stepper walks. */
export const steps: BeginnerToHeroStep[] = stages.flatMap((stage) => stage.steps);

export const stageOfSlug: Record<string, string> = Object.fromEntries(
  stages.flatMap((stage) => stage.steps.map((step) => [step.slug, stage.label]))
);

export function pathForStep(step: BeginnerToHeroStep): string {
  return `${BASE_PATH}/${step.slug}`;
}

export interface ResolvedVideo {
  id: string;
  url: string;
  /** True while this is a stand-in rather than a real FlashFX tutorial. */
  isPlaceholder: boolean;
}

/** The video to show for a step, falling back to a rotating stand-in. */
export function videoForStep(step: BeginnerToHeroStep, index: number): ResolvedVideo {
  const id = step.videoId ?? PLACEHOLDER_VIDEO_IDS[index % PLACEHOLDER_VIDEO_IDS.length];
  return {
    id,
    url: `https://www.youtube.com/watch?v=${id}`,
    isPlaceholder: step.videoId === undefined,
  };
}

/** Index in course order, or -1. */
export function indexOfSlug(slug: string): number {
  return steps.findIndex((step) => step.slug === slug);
}
