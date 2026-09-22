/**
 * Troubleshooting content for every `/troubleshooting/*` route.
 *
 * Rendered by `src/pages/TroubleshootingDetail.tsx`, which looks the current
 * `location.pathname` up in this map. Adding an entry here is only one of the
 * three edits a new page needs — it also needs a `<Route>` in `src/App.tsx`
 * and a nav entry in `src/data/navigation.ts`, or it will be unreachable and
 * unsearchable.
 *
 * Why this shape (SEO-documentation.md M6): these pages were previously a flat
 * list of imperative bullets under one templated meta description
 * ("Solutions for: <title>") repeated 65 times. That is a thin-content and
 * duplicate-description pattern, and it answers "what do I click" without ever
 * answering "why is this happening" — which is the query people actually type.
 *
 * Each entry now carries:
 *   description — unique, written for the SERP snippet, not derived from title
 *   summary     — the direct answer, first thing on the page and the most
 *                 likely featured-snippet extraction
 *   symptoms    — lets a reader confirm they are on the right page
 *   causes      — cause paired with its resolution, ordered most likely first
 *   related     — internal links; these pages are leaves, and without them no
 *                 PageRank flows from the troubleshooting tree into the docs
 *
 * `related` paths must point at written pages only. Linking a placeholder
 * would advertise an empty page to crawlers, which is the exact failure mode
 * M3 was sequenced after M2 to avoid.
 *
 * Every cause below is sourced from the reference material at the repo root
 * (01_Fundamentals_and_Settings.md … 07_Timeline_Features_for_Composition.md).
 * Nothing here is inferred from how a motion editor "probably" behaves — a
 * plausible-but-wrong cause is worse than a bullet list, because it sends the
 * reader to a setting that will not fix their problem.
 */

export interface TroubleshootingCause {
  /** Why it happens. */
  cause: string;
  /** What to do about it. */
  fix: string;
}

export interface TroubleshootingRelated {
  label: string;
  path: string;
}

export interface TroubleshootingEntry {
  title: string;
  /** Unique meta description. Not templated from the title. */
  description: string;
  summary: string;
  symptoms: string[];
  causes: TroubleshootingCause[];
  related: TroubleshootingRelated[];
}

export const troubleshootingContent: Record<string, TroubleshootingEntry> = {
  // -------------------------------------------------------------------------
  // Application, storage and export
  // -------------------------------------------------------------------------

  '/troubleshooting/editor-is-slow': {
    title: 'Editor is slow',
    description:
      'FlashFX editor lagging or dropping frames? Diagnose offscreen buffer pressure, preview quality, oversized textures and undo history depth.',
    summary:
      'Editor slowness is almost always rendering cost rather than a fault. FlashFX composites the canvas on the GPU, and blur, non-Normal blend modes, alpha masks and isolated groups each force an additional offscreen framebuffer. Enough of them on a limited-VRAM device will slow the whole application.',
    symptoms: [
      'The canvas lags behind the cursor while dragging, but panels respond normally',
      'The frame rate indicator in the transport bar sits well below the project frame rate',
      'Playback stutters on first pass and is smooth on the second',
      'The browser tab reports high memory use, or the fans spin up on a laptop',
    ],
    causes: [
      {
        cause: 'Preview quality is set to Full on a composition too complex for realtime playback.',
        fix: 'Switch preview quality to Half or Quarter in the transport bar dropdown. This affects only the live canvas preview — export always renders at the full project resolution.',
      },
      {
        cause: 'Too many elements require offscreen buffers.',
        fix: 'Non-Normal blend modes, blur effects, alpha masks, some distortion effects and isolated groups each need an intermediate framebuffer sized to the canvas. Right-click an element in the Layer Panel and choose Profile Element to see how many buffers it requires, then simplify the worst offenders.',
      },
      {
        cause: 'Imported images are far larger than the size they render at.',
        fix: 'Every image occupies GPU texture memory at its source resolution regardless of display size — a 4096×4096 image costs roughly 64 MB whether it fills the canvas or a thumbnail. Resize images to their rendered dimensions before importing.',
      },
      {
        cause: 'The work area has never been cached.',
        fix: 'Run Animation → Pre-render Preview to cache the frames in the work area before playing. Cached frames — shown by the green bar in the timeline ruler — play back at the full project frame rate regardless of composition complexity.',
      },
      {
        cause: 'A long session has accumulated an unbounded undo history.',
        fix: 'Undo History Depth defaults to unlimited. On long sessions with complex projects, set a numeric cap in Edit → Preferences (Ctrl+,) to reduce memory pressure.',
      },
    ],
    related: [
      { label: 'GPU memory management', path: '/editor/gpu/memory-management' },
      { label: 'Playback and preview', path: '/editor/animate/playback-preview' },
      { label: 'Image performance guidelines', path: '/editor/images/performance' },
    ],
  },

  '/troubleshooting/canvas-is-not-rendering': {
    title: 'Canvas is not rendering',
    description:
      'A blank or frozen FlashFX canvas usually means the WebGL context was lost or never initialised. How to confirm it and what restores rendering.',
    summary:
      'A blank canvas is a GPU context problem, not a document problem — your project data is intact. FlashFX renders through WebGL 2.0, and the context can fail to initialise or be lost afterwards by a driver crash, a system sleep or a GPU reset.',
    symptoms: [
      'The canvas area is blank, black or shows the last frame frozen, while panels and menus still work',
      'The Layer Panel lists your elements correctly but nothing draws',
      'A prompt appears asking you to reload the page',
      'The problem started after the machine woke from sleep',
    ],
    causes: [
      {
        cause: 'The WebGL context was lost and could not be restored automatically.',
        fix: 'FlashFX detects context loss, re-uploads all textures from CPU memory and resumes without a reload. When restoration fails it prompts you to reload — do so. Work in a cloud-synced session is preserved across the reload.',
      },
      {
        cause: 'Hardware acceleration is disabled in the browser.',
        fix: 'FlashFX requires a WebGL-capable context. Re-enable hardware acceleration in your browser settings and restart the browser, then reload the editor.',
      },
      {
        cause: 'An enterprise security policy is blocking WebGL.',
        fix: 'This is most common on managed Edge and Chrome installations. If FlashFX cannot initialise the GPU context on a work machine and works on a personal one, the policy is the difference — check with your IT administrator.',
      },
      {
        cause: 'A single texture exceeds what the GPU driver will accept.',
        fix: 'In Chrome, textures larger than 8192×8192 can fail silently on some drivers. Keep imported assets at or below the 8K maximum rather than relying on larger source files.',
      },
      {
        cause: 'A browser extension is interfering with the canvas.',
        fix: 'Reload the editor in a private window, which runs without extensions. If the canvas renders there, re-enable your extensions one at a time to find the one responsible.',
      },
    ],
    related: [
      { label: 'WebGL architecture', path: '/editor/gpu/webgl-architecture' },
      { label: 'Browser constraints', path: '/editor/gpu/browser-constraints' },
      { label: 'Rendering environment', path: '/editor/gpu/rendering-environment' },
    ],
  },

  '/troubleshooting/animation-export-fails': {
    title: 'Animation export fails',
    description:
      'Export failing or producing an empty file in FlashFX? Check the work area range, browser encoder support and the composition cost that stalls a render.',
    summary:
      'Most failed exports are range or encoder problems rather than corrupt projects. The export range defaults to the work area, so an In/Out pair set during preview will silently constrain what is rendered — and advanced video export depends on browser APIs that older versions do not implement.',
    symptoms: [
      'The export completes but the file is far shorter than the project',
      'The export dialog stalls at a percentage and never finishes',
      'Export works in one browser and fails in another',
      'The exported file has no transparency despite a transparent canvas background',
    ],
    causes: [
      {
        cause: 'The work area is narrower than the animation.',
        fix: 'Export uses the work area In and Out points as its default range. Press Ctrl+Alt+F in the timeline to fit the view to the full project duration and confirm the range, or set the range explicitly with the export range override in the export dialog.',
      },
      {
        cause: 'The browser lacks the advanced video encoder.',
        fix: 'The VideoEncoder API is available in Safari from 16.4; earlier versions fall back to a slower export path that can appear stalled on long compositions. Export from Chrome or Edge for the fastest and most reliable encode.',
      },
      {
        cause: 'The composition is too expensive to render within available GPU memory.',
        fix: 'Export renders at full resolution regardless of preview quality, and at 4K the cost of filters multiplies. Reduce the number of simultaneous offscreen-buffer effects, or export at a smaller canvas size to confirm the composition is the cause.',
      },
      {
        cause: 'The chosen format does not carry an alpha channel.',
        fix: 'Transparent backgrounds export only to formats that support alpha — PNG, WebM with alpha, and single-frame PNG. Exporting a transparent canvas to MP4 produces an opaque result.',
      },
      {
        cause: 'Transparent export is combined with 3D elements on non-Normal blend modes.',
        fix: 'This combination can produce composite errors at element boundaries. Set 3D elements to Normal blending for transparent exports, or export over a solid background and key it later.',
      },
    ],
    related: [
      { label: 'Work area and export range', path: '/editor/timeline/work-area' },
      { label: 'Browser constraints', path: '/editor/gpu/browser-constraints' },
      { label: '3D exporting', path: '/editor/gpu/3d-exporting' },
    ],
  },

  '/troubleshooting/file-cannot-be-opened': {
    title: 'File cannot be opened',
    description:
      'A .flashfx file that will not open is usually a version or storage issue. How to check the file, recover a Guest mode project and avoid permanent loss.',
    summary:
      'A .flashfx file is a portable export of a project, not the live project itself. When one will not open, the question is almost always where it came from — a Guest mode browser store that was cleared, or a newer release of the editor than the one you are opening it in.',
    symptoms: [
      'The file picker accepts the file but the editor returns to the dashboard',
      'The project opens with missing images',
      'A project that existed yesterday is gone from the dashboard entirely',
      'The file is noticeably smaller than expected',
    ],
    causes: [
      {
        cause: 'The project lived in Guest mode and the browser store was cleared.',
        fix: 'Guest mode saves to browser local storage. A cache wipe, the end of a private-browsing session or a browser reinstall deletes it permanently with no recovery path. Create a free account so projects are stored in the cloud, and export .flashfx backups of anything important.',
      },
      {
        cause: 'The file was created by a newer release of FlashFX.',
        fix: 'Open it in the same environment that produced it. FlashFX is a browser application, so this usually means someone on a newer release exported it — ask them to re-export, or reload the editor to pick up the current version.',
      },
      {
        cause: 'Images were linked rather than embedded.',
        fix: 'Linked assets are referenced, not stored in the file, so they do not travel with it. Re-link the missing assets from the Asset Library, and embed images before exporting a project that will be opened elsewhere.',
      },
      {
        cause: 'The project was deleted from the dashboard.',
        fix: 'Cloud project deletion is permanent and immediate — there is no trash or recovery mechanism. Restore from a .flashfx backup if you have one.',
      },
    ],
    related: [
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
      { label: 'Image asset management', path: '/editor/images/asset-management' },
      { label: 'Backup and recovery', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/changes-are-not-saving': {
    title: 'Changes are not saving',
    description:
      'Work not persisting in FlashFX? Read the sync indicator, check the auto-save interval and understand the storage limits that silently stop a save.',
    summary:
      'FlashFX syncs on an interval rather than on every change, and the sync indicator in the menu bar is the authoritative signal. If it reads Saved, your work is stored; if it reads Sync Error or Unsaved Changes for more than one interval, something is blocking the write.',
    symptoms: [
      'The sync indicator stays on Unsaved Changes or shows Sync Error',
      'Reopening the project loses the last few minutes of work',
      'Changes persist in one browser but not another',
      'The account indicator shows storage at or near capacity',
    ],
    causes: [
      {
        cause: 'The auto-save interval has not elapsed yet.',
        fix: 'Auto-save defaults to one minute, and can be set to 30 seconds, 2 minutes, 5 minutes or Manual only in Edit → Preferences. Press Ctrl+S to force an immediate sync rather than waiting.',
      },
      {
        cause: 'Auto-save is set to Manual only.',
        fix: 'In this mode nothing is written until you trigger it. Either change the interval in Preferences or make Ctrl+S part of your routine.',
      },
      {
        cause: 'The cloud storage quota is full.',
        fix: 'The free tier provides 50 MB. Embedded images are the dominant driver of project size — shape geometry, text and keyframes are comparatively tiny. Check usage in the account indicator, then remove unused assets or reduce embedded image resolution.',
      },
      {
        cause: 'Guest mode has exhausted the browser local storage quota.',
        fix: 'Guest projects are limited to the browser quota, typically 5–50 MB depending on browser and device. Create a free account to move storage to the cloud.',
      },
      {
        cause: 'The browser is offline.',
        fix: 'Changes are queued locally and sync automatically when connectivity returns. Leave the tab open until the indicator returns to Saved — closing it while offline risks the queued changes.',
      },
    ],
    related: [
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
      { label: 'Image asset management', path: '/editor/images/asset-management' },
    ],
  },

  '/troubleshooting/project-cannot-be-created': {
    title: 'Project cannot be created',
    description:
      'New project creation failing in FlashFX? Storage quota, Guest mode limits and account state are the usual causes — how to identify which applies.',
    summary:
      'Project creation writes to storage before anything opens, so it fails for the same reasons a save fails: no room in the destination. Which destination depends on whether you are signed in.',
    symptoms: [
      'The new project dialog accepts settings and then returns to the dashboard',
      'An error appears immediately on clicking Create',
      'Creation works after deleting an old project',
      'The account indicator shows storage near its limit',
    ],
    causes: [
      {
        cause: 'The cloud storage quota is exhausted.',
        fix: 'The free tier provides 50 MB across all projects. Export a .flashfx backup of anything you want to keep, delete it from the dashboard, and try again — or move to a paid plan for additional storage.',
      },
      {
        cause: 'Guest mode has filled the browser local storage quota.',
        fix: 'Guest projects share the browser quota, typically 5–50 MB. Sign in to move storage to the cloud, which also makes projects available on other devices.',
      },
      {
        cause: 'The session has expired.',
        fix: 'Sign out and sign back in. Projects are protected by row-level security tied to the account, so a stale session cannot write.',
      },
      {
        cause: 'The canvas dimensions requested are not valid.',
        fix: 'Start from one of the built-in canvas presets to confirm creation works, then adjust dimensions on the created project in Canvas & Project Setup.',
      },
    ],
    related: [
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
      { label: 'Canvas and project setup', path: '/editor/fundamentals/canvas-project-setup' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/project-does-not-save-or-export': {
    title: 'Project does not save or export',
    description:
      'When both saving and exporting fail in FlashFX the cause is usually shared — storage, session state or GPU memory. How to isolate which one.',
    summary:
      'Saving and exporting fail together far more often than either fails alone, because both depend on the same three things: a valid session, somewhere to put the result, and enough GPU memory to finish the work. Isolating which one is at fault takes one test each.',
    symptoms: [
      'Both Ctrl+S and the export dialog fail in the same session',
      'The sync indicator shows Sync Error and export stalls',
      'Everything works again after reloading the page',
      'The problem only appears on large compositions',
    ],
    causes: [
      {
        cause: 'The session has expired, so no write of any kind is authorised.',
        fix: 'Sign out and back in. This is the fastest test: if Ctrl+S succeeds afterwards, the session was the cause and export will work too.',
      },
      {
        cause: 'Storage is full, which blocks the save and leaves the export with no room for its output.',
        fix: 'Check the storage percentage in the account indicator. Remove unused assets from the Asset Library first — embedded images dominate project size.',
      },
      {
        cause: 'GPU memory pressure is stalling the export renderer.',
        fix: 'Export renders at full resolution regardless of preview quality. Reduce simultaneous blur, alpha mask and non-Normal blend mode usage, or export a short range first to confirm the composition is the limit.',
      },
      {
        cause: 'The browser went offline mid-session.',
        fix: 'Saves queue locally and resume automatically; exports do not. Restore connectivity, wait for the indicator to read Saved, then export.',
      },
    ],
    related: [
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
      { label: 'Work area and export range', path: '/editor/timeline/work-area' },
      { label: 'GPU memory management', path: '/editor/gpu/memory-management' },
    ],
  },

  '/troubleshooting/undo-or-redo-history-is-not-working': {
    title: 'Undo or redo history is not working',
    description:
      'Undo stopping early or doing nothing in FlashFX? Check Undo History Depth, the active panel focus, and which actions enter the history at all.',
    summary:
      'Undo is Ctrl+Z and redo is Ctrl+Y. When undo stops short of where you expect, the usual reason is that Undo History Depth has been capped — it defaults to unlimited, but a numeric cap silently discards the oldest steps once it is reached.',
    symptoms: [
      'Undo works for recent actions then stops responding',
      'Redo is greyed out immediately after an undo',
      'Undo affects the canvas when you expected it to affect the timeline',
      'History was lost after reloading the page',
    ],
    causes: [
      {
        cause: 'Undo History Depth has been set to a numeric cap.',
        fix: 'Open Edit → Preferences (Ctrl+,) and check Undo History Depth under General. The default is unlimited; a cap trades history for lower memory use on long sessions.',
      },
      {
        cause: 'Redo was invalidated by a new action.',
        fix: 'Performing any new edit after an undo discards the redo branch. This is expected behaviour — there is one linear history, not a tree.',
      },
      {
        cause: 'The page was reloaded.',
        fix: 'Undo history is session state and does not survive a reload. The project itself is preserved by sync; the history is not.',
      },
      {
        cause: 'Keyboard focus is in a text field rather than the canvas.',
        fix: 'While editing a text element or a numeric field, Ctrl+Z applies to that field. Press Escape to deselect first, then undo.',
      },
    ],
    related: [
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
      { label: 'Interface overview', path: '/editor/fundamentals/interface-overview' },
    ],
  },

  // -------------------------------------------------------------------------
  // Canvas, navigation and appearance
  // -------------------------------------------------------------------------

  '/troubleshooting/cannot-navigate-the-canvas': {
    title: 'Cannot navigate the canvas',
    description:
      'Stuck on the FlashFX canvas? Every pan method, the Hand tool shortcut, and the preference that changes what the scroll wheel does.',
    summary:
      'FlashFX offers four ways to pan, and which ones are available depends on a preference. The most reliable is holding Space to get a temporary Hand tool no matter which tool is currently active.',
    symptoms: [
      'Dragging on the canvas creates or moves shapes instead of panning',
      'The scroll wheel zooms when you wanted to scroll, or the reverse',
      'The composition has scrolled somewhere off screen and cannot be found',
      'Trackpad gestures do nothing',
    ],
    causes: [
      {
        cause: 'A drawing or selection tool is active, so dragging performs that tool’s action.',
        fix: 'Hold Space while any tool is active for a temporary Hand tool, or press H to switch to the Hand tool outright. Holding Ctrl and dragging in the canvas area also pans.',
      },
      {
        cause: 'The mouse wheel behaviour preference does not match your expectation.',
        fix: 'In Edit → Preferences, Mouse Wheel Behavior on Canvas is either Zoom (the default, scroll to zoom) or Scroll (scroll to pan vertically, Shift+scroll to pan horizontally). Set whichever matches your habits.',
      },
      {
        cause: 'Trackpad gesture support is off.',
        fix: 'Two-finger pinch to zoom and two-finger pan require Trackpad Gesture Support, which is on by default in Preferences. Re-enable it if it has been turned off.',
      },
      {
        cause: 'The viewport has been panned away from the canvas.',
        fix: 'Press Ctrl+0 to fit the canvas to the window, or Ctrl+Shift+F to zoom to the current selection. Either will bring you back to your content.',
      },
    ],
    related: [
      { label: 'Zoom and navigation', path: '/editor/fundamentals/zoom-navigation' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
    ],
  },

  '/troubleshooting/zoom-or-pan-is-not-working-correctly': {
    title: 'Zoom or pan is not working correctly',
    description:
      'Zoom jumping to the wrong place or refusing to go further in FlashFX? The zoom range, the cursor anchor rule and the fit shortcuts explained.',
    summary:
      'Zoom runs from 5% to 3200% and is anchored differently depending on how you invoke it: scroll-to-zoom centres on the cursor, while the keyboard shortcuts centre on the canvas. That difference accounts for most "zoom went somewhere unexpected" reports.',
    symptoms: [
      'Zooming with the scroll wheel drifts away from the area you meant to inspect',
      'Zoom refuses to go further in or out',
      'Zoom steps feel too coarse',
      'The canvas is visible but tiny and will not centre',
    ],
    causes: [
      {
        cause: 'Scroll-to-zoom anchors on the cursor, not the canvas centre.',
        fix: 'Place the cursor over the detail you want to inspect before scrolling. Use Ctrl+= and Ctrl+- instead when you want zoom anchored to the canvas centre.',
      },
      {
        cause: 'The zoom limit has been reached.',
        fix: 'The range is 5% to 3200%. If you need finer detail than 3200% allows, the composition is likely scaled smaller than it needs to be — consider working at a larger canvas size.',
      },
      {
        cause: 'The viewport is framed on the wrong thing.',
        fix: 'Ctrl+0 fits the whole canvas, Ctrl+1 goes to 100%, Ctrl+2 to 200%, and Ctrl+Shift+F zooms to the current selection. Right-click any layer and choose Zoom to Layer to frame one element.',
      },
      {
        cause: 'The pixel grid is confused with a zoom problem.',
        fix: 'Beyond 400% zoom a 1px grid appears if Pixel Grid is enabled in Canvas Settings. It is a guide, not a rendering artefact — turn it off in Preferences if it is distracting.',
      },
    ],
    related: [
      { label: 'Zoom and navigation', path: '/editor/fundamentals/zoom-navigation' },
      { label: 'Grid, rulers and guides', path: '/editor/fundamentals/grid-rulers-guides' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/canvas-background-color-does-not-change': {
    title: 'Canvas background color does not change',
    description:
      'The FlashFX canvas background is a project property, not a layer — why it cannot be selected or animated, and how to get an animated background.',
    summary:
      'The canvas background is a project setting rather than an element. It is not selectable on the canvas, does not appear in the Layer Panel, and cannot be keyframed. If you are trying to click it, that is why nothing happens.',
    symptoms: [
      'Clicking the background selects nothing',
      'The background does not appear in the Layer Panel',
      'The background cannot be keyframed in Animate mode',
      'A checkerboard pattern appears instead of a color',
    ],
    causes: [
      {
        cause: 'You are trying to select the background on the canvas.',
        fix: 'Set it in Canvas & Project Setup instead, where the background can be a solid color, a gradient, or Transparent.',
      },
      {
        cause: 'The background is set to Transparent.',
        fix: 'The checkerboard indicates transparency and is a display aid only — it never appears in an export. Switch the background to Solid color if you want an opaque result, or keep Transparent and export to PNG or WebM with alpha.',
      },
      {
        cause: 'You need the background to animate.',
        fix: 'The background cannot be animated directly. Place a rectangle the size of the canvas on the bottom-most layer and animate its material properties — that gives you the full fill, gradient and blend mode system on a background.',
      },
      {
        cause: 'You are changing the default rather than this project.',
        fix: 'Default Canvas Color in Preferences applies to new projects only. Change the current project in Canvas & Project Setup.',
      },
    ],
    related: [
      { label: 'Canvas and project setup', path: '/editor/fundamentals/canvas-project-setup' },
      { label: 'Fill types', path: '/editor/shapes/fill-types' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/light-mode-or-dark-mode-does-not-switch': {
    title: 'Light mode or dark mode does not switch',
    description:
      'FlashFX follows your operating system theme preference rather than offering an in-app toggle. How to change it and what High Contrast Mode does instead.',
    summary:
      'There is no theme switch inside FlashFX to find. The editor respects your operating system dark or light mode preference, so the change is made at the OS level and picked up automatically.',
    symptoms: [
      'No theme toggle can be found in the menus or preferences',
      'The interface stays dark after changing a browser setting',
      'The theme differs between two machines using the same account',
      'Contrast is too low in bright ambient light',
    ],
    causes: [
      {
        cause: 'You are looking for an in-app toggle that does not exist.',
        fix: 'Change your operating system appearance setting instead. FlashFX syncs to it automatically, along with reduced motion and high contrast preferences.',
      },
      {
        cause: 'The browser is overriding the system preference.',
        fix: 'Some browsers let you force a page color scheme independently of the OS. Reset that override so the system preference reaches the editor.',
      },
      {
        cause: 'What you actually need is more contrast, not a lighter theme.',
        fix: 'Toggle High Contrast Mode with Ctrl+Alt+H. It increases the contrast of borders, icons and text labels against the dark theme, which is usually the better answer for bright environments.',
      },
      {
        cause: 'Interface text is too small to read comfortably.',
        fix: 'Text Size in UI raises label and value sizes independently of the global UI Scale setting, so you can keep a compact layout and still read it.',
      },
    ],
    related: [
      { label: 'Accessibility settings', path: '/editor/fundamentals/accessibility' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
      { label: 'Panels and layout', path: '/editor/fundamentals/panels-layout' },
    ],
  },

  // -------------------------------------------------------------------------
  // Creating shapes
  // -------------------------------------------------------------------------

  '/troubleshooting/rectangle-cannot-be-created': {
    title: 'Rectangle cannot be created',
    description:
      'Rectangle tool not drawing in FlashFX? The R shortcut, the Shift and Alt modifiers, and the locked-layer case that blocks creation.',
    summary:
      'The Rectangle tool is R, and it draws on click-and-drag. If a drag produces nothing, the usual causes are that a different tool is active, or that the drag is landing on a locked layer.',
    symptoms: [
      'Dragging on the canvas selects existing elements instead of drawing',
      'A rectangle appears but immediately disappears',
      'The shape draws as a square when you wanted a rectangle',
      'The shape draws from the centre rather than the corner',
    ],
    causes: [
      {
        cause: 'The Rectangle tool is not the active tool.',
        fix: 'Press R, or select the rectangle icon in the toolbar. The active tool is highlighted — the Selection tool will select rather than draw.',
      },
      {
        cause: 'Shift is being held during the drag.',
        fix: 'Shift constrains the rectangle to a perfect square. Release it for free proportions.',
      },
      {
        cause: 'Alt is being held during the drag.',
        fix: 'Alt draws outward from the centre point rather than from the corner where the drag started. Release it to draw corner-to-corner.',
      },
      {
        cause: 'The drag is too short to register as a shape.',
        fix: 'Drag a visible distance rather than clicking. To create a rectangle at exact dimensions, draw any size and then type the values into the W and H fields in the Properties Panel — the Rectangle tool does not need to be active to edit dimensions.',
      },
    ],
    related: [
      { label: 'Shape primitives', path: '/editor/shapes/primitives' },
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
    ],
  },

  '/troubleshooting/circle-cannot-be-created': {
    title: 'Circle cannot be created',
    description:
      'Circle tool drawing nothing or an unexpected shape in FlashFX? Inner radius, arc angles and the Shift and Alt modifiers all change the result.',
    summary:
      'The Circle/Ellipse tool is C. When it appears not to work, the shape is usually being created correctly but configured invisibly — an inner radius of 1 leaves no shape at all, and arc angles can reduce it to a sliver.',
    symptoms: [
      'Dragging produces nothing visible',
      'The shape appears as a ring, a pie slice or a partial arc',
      'The result is an ellipse when you wanted a circle',
      'The circle grows from the wrong point',
    ],
    causes: [
      {
        cause: 'Inner radius is set to its maximum.',
        fix: 'Inner radius creates a donut, expressed as a proportion of the outer radius. At 0 the shape is solid; at 1 there is no shape left to see. Reset it to 0.',
      },
      {
        cause: 'Start and end angles have been left from a previous arc.',
        fix: 'A circle can be configured as a partial arc with Start Angle and End Angle, in Open, Chord or Pie mode. Set the range back to a full sweep to restore a complete ellipse.',
      },
      {
        cause: 'Shift or Alt is being held.',
        fix: 'Shift constrains to a perfect circle; Alt draws outward from the centre. Release whichever modifier is producing the result you did not want.',
      },
      {
        cause: 'A different tool is active.',
        fix: 'Press C, or pick the circle icon in the toolbar, before dragging.',
      },
    ],
    related: [
      { label: 'Shape primitives', path: '/editor/shapes/primitives' },
      { label: 'Morph and deform animation', path: '/editor/animate/morph-deform' },
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
    ],
  },

  '/troubleshooting/custom-polygon-shapes-cannot-be-created': {
    title: 'Custom polygon shapes cannot be created',
    description:
      'Polygon and star settings in FlashFX, the three-side minimum, and when to reach for the Pen tool instead of the polygon generator.',
    summary:
      'The Star & Polygon tool is P and generates regular shapes only — every side equal, every angle equal. If you need an irregular polygon, the polygon tool is the wrong tool and the Pen tool is the right one.',
    symptoms: [
      'The side count will not go below three',
      'The polygon is always regular when you need an irregular outline',
      'The star looks like a blob rather than a star',
      'Changing points does nothing visible',
    ],
    causes: [
      {
        cause: 'A side or point count below three was requested.',
        fix: 'Three is the minimum for both polygons and stars — below that there is no closed shape. There is no enforced maximum.',
      },
      {
        cause: 'An irregular shape is needed.',
        fix: 'The polygon generator only produces regular shapes. Draw the outline with the Pen tool (B), or generate a polygon and then edit its vertices in Vertex Edit mode.',
      },
      {
        cause: 'Smoothing is turned up.',
        fix: 'Smoothing rounds both the inner and outer vertices of a star. At maximum it becomes a lobed organic form rather than a geometric star. Reduce it towards zero for sharp points.',
      },
      {
        cause: 'Inner radius is too close to outer radius.',
        fix: 'In Star mode the ratio between inner and outer radius controls point sharpness. Close together gives a shallow, fat star; a much smaller inner radius gives sharp spikes.',
      },
    ],
    related: [
      { label: 'Shape primitives', path: '/editor/shapes/primitives' },
      { label: 'The Pen tool', path: '/editor/shapes/pen-tool' },
      { label: 'Vertex editing', path: '/editor/shapes/vertex-editing' },
    ],
  },

  '/troubleshooting/line-tool-is-not-drawing-lines': {
    title: 'Line tool is not drawing lines',
    description:
      'Lines invisible after drawing in FlashFX? Lines carry no fill by default, so stroke weight and stroke color are what make them appear.',
    summary:
      'Lines have no fill by default — they are drawn entirely by their stroke. A line with stroke weight at zero, or with no stroke color set, exists in the Layer Panel but renders nothing on the canvas.',
    symptoms: [
      'A new layer appears in the Layer Panel but nothing shows on the canvas',
      'The line is selectable but invisible',
      'The line is far thinner than expected',
      'The line ends do not reach the points you clicked',
    ],
    causes: [
      {
        cause: 'Stroke weight is zero or near zero.',
        fix: 'Set a stroke weight in the Properties Panel. The valid range is 0.1px to 500px — at the bottom of that range a line is effectively invisible.',
      },
      {
        cause: 'No stroke color is set.',
        fix: 'Lines render from the stroke, not a fill. Assign a stroke color, and check its alpha is above zero in the color picker.',
      },
      {
        cause: 'The Line tool is not active.',
        fix: 'Press L before dragging. Line start and end points can also be typed as absolute X/Y coordinates in the Properties Panel afterwards.',
      },
      {
        cause: 'The cap style is changing where the line appears to end.',
        fix: 'Butt caps end exactly at the endpoint; Round and Square caps extend beyond it by half the stroke width. Set Butt when the endpoint must be exact.',
      },
    ],
    related: [
      { label: 'Shape primitives', path: '/editor/shapes/primitives' },
      { label: 'Stroke properties', path: '/editor/shapes/stroke-properties' },
      { label: 'The Pen tool', path: '/editor/shapes/pen-tool' },
    ],
  },

  // -------------------------------------------------------------------------
  // Editing and arranging objects
  // -------------------------------------------------------------------------

  '/troubleshooting/shape-size-position-or-rotation-cannot-be-edited': {
    title: 'Shape size, position or rotation cannot be edited',
    description:
      'Transform handles missing or values refusing to change in FlashFX? Layer locks, group scope and the aspect ratio lock are the usual causes.',
    summary:
      'Transforms apply relative to an element’s anchor point, and they are blocked entirely when the layer is locked. The padlock icon in the Layer Panel is the first thing to check.',
    symptoms: [
      'The element cannot be selected on the canvas at all',
      'Handles appear but dragging does nothing',
      'Changing width also changes height',
      'Rotation pivots around an unexpected point',
    ],
    causes: [
      {
        cause: 'The layer is locked.',
        fix: 'Click the padlock icon on the layer row in the Layer Panel to unlock it. Locked layers cannot be selected or transformed on the canvas.',
      },
      {
        cause: 'The element is inside a group.',
        fix: 'Double-click the group to enter it — the rest of the canvas dims and the panels scope to the group’s members. Press Escape to exit. Editing from outside the group transforms the whole group instead.',
      },
      {
        cause: 'The aspect ratio lock is engaged.',
        fix: 'The chain-link icon between the W and H fields locks proportional scaling for numeric entry. Click it to unlink so the dimensions can change independently.',
      },
      {
        cause: 'The anchor point is not where you expect.',
        fix: 'Rotation and scale pivot on the anchor point, which defaults to the geometric centre. Reposition it with the 3×3 grid in the Properties Panel, or enable Custom Anchor for an explicit offset.',
      },
      {
        cause: 'You are trying to drag a value that needs typing.',
        fix: 'Click the X, Y, W, H or Rotation field and type. Prefix with + or - for a relative change — typing +50 in X moves the element 50px right. Arrow keys nudge by 1px, Shift+Arrow by 10px.',
      },
    ],
    related: [
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Interface overview', path: '/editor/fundamentals/interface-overview' },
    ],
  },

  '/troubleshooting/objects-are-not-duplicating': {
    title: 'Objects are not duplicating',
    description:
      'Ctrl+D doing nothing in FlashFX? Check the selection, keyboard focus and whether the duplicate landed exactly on top of the original.',
    summary:
      'Duplicate is Ctrl+D. The most common report of "nothing happened" is actually a successful duplicate placed exactly on top of the original, where it is invisible until you move it or look at the Layer Panel.',
    symptoms: [
      'Nothing appears to change after pressing Ctrl+D',
      'The Layer Panel gains a row but the canvas looks identical',
      'The shortcut works sometimes and not others',
      'Duplicating a group produces an unexpected result',
    ],
    causes: [
      {
        cause: 'The duplicate is stacked exactly on the original.',
        fix: 'Check the Layer Panel — if a new row appeared, the duplicate exists. Drag it, or nudge with the arrow keys, to separate the two.',
      },
      {
        cause: 'Nothing is selected.',
        fix: 'Select the element on the canvas or its row in the Layer Panel first. Ctrl+D has no effect on an empty selection.',
      },
      {
        cause: 'Keyboard focus is in a text field.',
        fix: 'While a text element or numeric field has focus, shortcuts are consumed by that field. Press Escape to deselect, then duplicate.',
      },
      {
        cause: 'The layer is locked.',
        fix: 'Unlock it with the padlock icon in the Layer Panel. A locked layer cannot be selected, and an unselected element cannot be duplicated.',
      },
    ],
    related: [
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Z-order management', path: '/editor/shapes/z-order' },
    ],
  },

  '/troubleshooting/copy-and-paste-of-shapes-does-not-work': {
    title: 'Copy and paste of shapes does not work',
    description:
      'Paste landing in the wrong place or doing nothing in FlashFX? The difference between Paste and Paste in Place, and what blocks a copy.',
    summary:
      'Copy is Ctrl+C and paste is Ctrl+V, with Ctrl+Shift+V for Paste in Place. If paste appears to do nothing, check the Layer Panel first — the element is usually there, just not where you were looking.',
    symptoms: [
      'Paste produces no visible change on the canvas',
      'The pasted element lands offset from the original',
      'Copy works within a project but not between two tabs',
      'Pasting into a group puts the element at the top level instead',
    ],
    causes: [
      {
        cause: 'Paste placed the element at a different position than expected.',
        fix: 'Use Ctrl+Shift+V (Paste in Place) to paste at the source coordinates rather than the default paste position.',
      },
      {
        cause: 'Keyboard focus is in a text or numeric field.',
        fix: 'The field consumes the shortcut and copies its own contents. Press Escape to deselect before copying.',
      },
      {
        cause: 'The paste target scope is not what you expect.',
        fix: 'Double-click a group to enter it before pasting if the element should land inside it. Otherwise the paste goes to the current level.',
      },
      {
        cause: 'The source layer is locked.',
        fix: 'Unlock it in the Layer Panel. A locked layer cannot be selected, so there is nothing for Ctrl+C to copy.',
      },
    ],
    related: [
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
    ],
  },

  '/troubleshooting/objects-cannot-be-grouped-or-ungrouped': {
    title: 'Objects cannot be grouped or ungrouped',
    description:
      'Ctrl+G not grouping in FlashFX? Grouping needs two or more elements selected, and ungrouping behaves differently inside a nested group.',
    summary:
      'Grouping is Ctrl+G and requires at least two selected elements. Ungrouping is Ctrl+Shift+G. Both preserve every individual property and keyframe — ungrouping never discards animation.',
    symptoms: [
      'Ctrl+G does nothing with one element selected',
      'Ungrouping moves elements somewhere unexpected',
      'A group cannot be selected on the canvas',
      'Elements move when grouped',
    ],
    causes: [
      {
        cause: 'Fewer than two elements are selected.',
        fix: 'Select two or more, then press Ctrl+G. Shift+click in the Layer Panel or marquee-select on the canvas to build the selection.',
      },
      {
        cause: 'Ungrouping a nested group returns members to the parent group, not the top level.',
        fix: 'This is expected — members return one level up. Ungroup repeatedly to reach the top level.',
      },
      {
        cause: 'One of the elements is locked.',
        fix: 'Unlock it in the Layer Panel. A locked element cannot join the selection.',
      },
      {
        cause: 'The group transform is being confused with member movement.',
        fix: 'Group and member transforms compose — a member at (100, 50) inside a group moved to (200, 0) renders at (300, 50). Nothing moved on grouping; the coordinates are now relative.',
      },
    ],
    related: [
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
      { label: 'Parenting and hierarchy', path: '/editor/animate/parenting-hierarchy' },
    ],
  },

  '/troubleshooting/objects-will-not-align-correctly': {
    title: 'Objects will not align correctly',
    description:
      'Alignment moving the wrong element in FlashFX? Align to Selection, Align to Canvas and Align to Key Object produce three different results.',
    summary:
      'Alignment needs two or more elements selected, and the result depends entirely on which boundary is active. Align to Selection uses the combined bounding box, Align to Canvas uses the canvas, and Align to Key Object aligns everything to one element that does not move.',
    symptoms: [
      'The alignment controls are not visible in the Properties Panel',
      'Everything aligns to the wrong edge',
      'The element you wanted to stay put moved instead',
      'Aligning to centre does not centre on the canvas',
    ],
    causes: [
      {
        cause: 'Fewer than two elements are selected.',
        fix: 'The alignment controls only appear with a multiple selection. Select at least two elements.',
      },
      {
        cause: 'The alignment boundary is Selection when it should be Canvas.',
        fix: 'Switch to Align to Canvas to centre an element on the canvas. The default, Align to Selection, uses the combined bounding box of the selection instead.',
      },
      {
        cause: 'No key object is designated.',
        fix: 'Click an already-selected element to make it the key object — it shows a thicker highlight border. Everything else then aligns to it and it stays where it is.',
      },
      {
        cause: 'A group is being aligned as a unit.',
        fix: 'A group aligns by its combined bounding box. Enter the group by double-clicking it if you need to align its members relative to each other.',
      },
    ],
    related: [
      { label: 'Alignment and distribution', path: '/editor/shapes/alignment-distribution' },
      { label: 'Snapping system', path: '/editor/fundamentals/snapping-system' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
    ],
  },

  '/troubleshooting/objects-cannot-be-distributed-evenly': {
    title: 'Objects cannot be distributed evenly',
    description:
      'Distribution greyed out in FlashFX? It needs three or more elements, and equal spacing means two different things depending on the command.',
    summary:
      'Distribution requires three or more selected elements — with two there is nothing to distribute between them. There are also two kinds of even: equal centre-to-centre distance, and equal gaps between edges.',
    symptoms: [
      'The distribution controls do nothing',
      'Spacing still looks uneven after distributing',
      'Distribution works horizontally but not vertically',
      'Differently sized elements end up with unequal gaps',
    ],
    causes: [
      {
        cause: 'Fewer than three elements are selected.',
        fix: 'Select three or more. Distribution positions the elements between the outermost two, so with only two there is nothing in between to move.',
      },
      {
        cause: 'Centre-based distribution is being used on differently sized elements.',
        fix: 'Distribute Horizontally and Distribute Vertically equalise centre-to-centre distance, which leaves visually unequal gaps when elements differ in size. Use Distribute Horizontal Spacing or Distribute Vertical Spacing to equalise the gaps between edges instead.',
      },
      {
        cause: 'The elements are already at their outer bounds.',
        fix: 'The first and last elements define the range and do not move. Reposition them to change the overall span before distributing.',
      },
      {
        cause: 'One element is locked and excluded from the selection.',
        fix: 'Unlock it in the Layer Panel so it joins the selection and is included in the distribution.',
      },
    ],
    related: [
      { label: 'Alignment and distribution', path: '/editor/shapes/alignment-distribution' },
      { label: 'Snapping system', path: '/editor/fundamentals/snapping-system' },
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
    ],
  },

  '/troubleshooting/opacity-changes-are-not-applied': {
    title: 'Opacity changes are not applied',
    description:
      'Opacity doing nothing in FlashFX? There are three separate opacity controls — element, fill layer and color alpha — and they multiply together.',
    summary:
      'FlashFX has three independent opacity controls and they compound. Element opacity affects everything composited together; fill layer opacity affects one layer in the material stack; and every color carries its own alpha. Changing one while another is at zero produces no visible change.',
    symptoms: [
      'The opacity slider moves but nothing on the canvas changes',
      'The element is invisible at 100% opacity',
      'Only part of the element changes transparency',
      'Opacity behaves differently inside a group',
    ],
    causes: [
      {
        cause: 'A different opacity control is at zero.',
        fix: 'Check all three: element opacity in the Properties Panel, the per-layer opacity slider on each fill layer in the material stack, and the alpha of the color itself in the color picker.',
      },
      {
        cause: 'You are adjusting fill layer opacity when you want the whole element.',
        fix: 'Fill layer opacity affects only that layer of the material stack. Element opacity affects all fills, the stroke and the shadow as a single composited unit before blending.',
      },
      {
        cause: 'The fill layer is hidden.',
        fix: 'Each fill layer has its own eye icon in the material stack. A hidden layer contributes nothing regardless of its opacity value.',
      },
      {
        cause: 'A group blend mode is isolating the composite.',
        fix: 'A group with any blend mode other than Pass-through composites internally first, then blends as a unit. Set the group to Pass-through if members should blend directly with the layers below.',
      },
    ],
    related: [
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
      { label: 'Blend modes', path: '/editor/shapes/blend-modes' },
    ],
  },

  // -------------------------------------------------------------------------
  // Fill, color and stroke
  // -------------------------------------------------------------------------

  '/troubleshooting/shape-color-fill-does-not-apply': {
    title: 'Shape color fill does not apply',
    description:
      'Fill color not showing in FlashFX? Shapes use a stacked material system, so a hidden or overlapping fill layer can mask the one you are editing.',
    summary:
      'FlashFX shapes do not have a single fill color — they have a material stack of fill layers composited top to bottom. Editing a layer beneath an opaque one produces no visible change, which is the usual reason a color "does not apply".',
    symptoms: [
      'The color picker changes but the shape stays the same color',
      'The shape is transparent despite a color being set',
      'The color applies to part of the shape only',
      'The fill looks correct in the picker and wrong on the canvas',
    ],
    causes: [
      {
        cause: 'You are editing a fill layer that sits beneath an opaque one.',
        fix: 'The top layer of the material stack renders over those below. Check which layer is selected in the Fill section, and reorder layers by dragging the grab handle.',
      },
      {
        cause: 'The fill layer is hidden.',
        fix: 'Click the eye icon on that fill layer row to re-enable it.',
      },
      {
        cause: 'The color alpha is zero.',
        fix: 'Every color has an independent alpha channel. Raise the opacity slider under the color model inputs, or set the A value in the RGBA display.',
      },
      {
        cause: 'The fill type is not Solid Color.',
        fix: 'If the layer is set to a gradient, texture or pattern fill, the color picker edits a stop or a component of that fill rather than a flat color. Change the fill type to Solid Color for a uniform result.',
      },
      {
        cause: 'A fill layer blend mode is cancelling the color.',
        fix: 'Each fill layer has its own blend mode. Set it back to Normal to see the color as picked.',
      },
    ],
    related: [
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Fill types', path: '/editor/shapes/fill-types' },
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
    ],
  },

  '/troubleshooting/gradient-fill-is-not-working': {
    title: 'Gradient fill is not working',
    description:
      'Gradient rendering flat or in the wrong direction in FlashFX? Stop positions, gradient angle and repeat mode each produce a distinct failure.',
    summary:
      'A gradient that renders as a flat color almost always has its stops bunched together or set to the same color. The gradient bar in the Properties Panel is the authoritative view — click it to add stops, drag them to reposition.',
    symptoms: [
      'The gradient renders as a single flat color',
      'The gradient runs in the wrong direction',
      'The gradient does not span the whole shape',
      'Hard bands appear instead of a smooth transition',
    ],
    causes: [
      {
        cause: 'The color stops are at the same position or the same color.',
        fix: 'Drag the stops apart on the gradient bar and give them distinct colors. Each stop has a color, a position as a percentage, and its own opacity independent of the color alpha.',
      },
      {
        cause: 'The gradient angle is not what you want.',
        fix: 'Angle is in degrees: 0° runs left to right, 90° top to bottom. It is animatable, so check it has no keyframes holding it at an old value.',
      },
      {
        cause: 'Explicit start and end points are constraining the gradient.',
        fix: 'A gradient can be positioned by X/Y start and end coordinates relative to the bounding box instead of by angle. Those coordinates can leave it spanning only part of the shape — reset them or switch back to angle control.',
      },
      {
        cause: 'Repeat mode is producing bands.',
        fix: 'Repeat tiles the gradient beyond its start and end points, and Reflect tiles it mirrored. Set repeat mode to None for a single smooth transition.',
      },
      {
        cause: 'The wrong gradient type is selected for the effect you want.',
        fix: 'Linear runs along an axis, Radial from a centre point, Angular sweeps around a centre like a color wheel, and Diamond produces a square radial pattern.',
      },
    ],
    related: [
      { label: 'Fill types', path: '/editor/shapes/fill-types' },
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Animating colors', path: '/editor/animate/animating-colors' },
    ],
  },

  '/troubleshooting/stroke-or-border-settings-are-not-visible-or-applied': {
    title: 'Stroke or border settings are not visible or applied',
    description:
      'Stroke controls missing or having no effect in FlashFX? The stroke toggle, weight range and alignment setting explain most cases.',
    summary:
      'Stroke is a separate system from the fill layers and has to be switched on. Each shape supports one stroke, toggled in the Properties Panel — with it off, none of the stroke settings do anything.',
    symptoms: [
      'No stroke appears however the color is set',
      'The stroke is visible but far thinner than expected',
      'The shape appears larger or smaller than its stated dimensions',
      'Corners are cut off instead of pointed',
    ],
    causes: [
      {
        cause: 'The stroke is switched off.',
        fix: 'Turn on the Stroke toggle in the Properties Panel. Each shape can have one stroke.',
      },
      {
        cause: 'Stroke weight is at the bottom of its range.',
        fix: 'Valid weights run from 0.1px to 500px. At 0.1px a stroke is effectively invisible at normal zoom — raise it.',
      },
      {
        cause: 'Stroke alignment is changing the apparent size.',
        fix: 'Center alignment straddles the path, half inside and half outside. Inside keeps the stroke within the shape boundary and Outside puts it entirely beyond it. This matters whenever positional accuracy does.',
      },
      {
        cause: 'The miter limit is converting sharp corners to bevels.',
        fix: 'Miter joins produce pointed corners but auto-convert to Bevel once the point extends past the miter limit. Raise the limit, or choose Round joins for consistency.',
      },
      {
        cause: 'A gradient stroke is expected but solid color is configured.',
        fix: 'Stroke color is solid by default. Enable gradient stroke, then choose Along Stroke (start to end of path) or Across Stroke (inner to outer edge).',
      },
    ],
    related: [
      { label: 'Stroke properties', path: '/editor/shapes/stroke-properties' },
      { label: 'Shape primitives', path: '/editor/shapes/primitives' },
      { label: 'Text stroke', path: '/editor/text/text-stroke' },
    ],
  },

  '/troubleshooting/eyedropper-tool-does-not-pick-colors': {
    title: 'Eyedropper tool does not pick colors',
    description:
      'Eyedropper not sampling in FlashFX? It only works with the color picker open, and it samples the composited canvas rather than individual layers.',
    summary:
      'The eyedropper lives inside the color picker — it is not a toolbar tool. Open the picker, then click the eyedropper icon or hold Alt. It samples the rendered canvas, which means it reads the composited result of all visible layers, not the raw value of any one layer.',
    symptoms: [
      'Alt does nothing on the canvas',
      'The sampled color does not match the layer you clicked',
      'Sampling a gradient gives an unexpected single color',
      'The sample varies slightly each time on textured areas',
    ],
    causes: [
      {
        cause: 'The color picker is not open.',
        fix: 'The eyedropper is only available while the picker is open. Open it first, then click the eyedropper icon or press Alt.',
      },
      {
        cause: 'The sample is of the composite, not the layer.',
        fix: 'The eyedropper reads the rendered canvas including every visible layer, blend mode and effect. Hide the layers above the one you want to read in order to sample it directly.',
      },
      {
        cause: 'The sample area is a single pixel.',
        fix: 'The default is an exact 1×1 sample, which picks up noise on textured or grainy areas. Change it to 3×3, 5×5 or 11×11 averaging in the eyedropper settings for a more representative result.',
      },
      {
        cause: 'You are trying to sample outside the canvas.',
        fix: 'Sampling is scoped to the rendered canvas. Import the reference image into the project if you need to pick colors from it.',
      },
    ],
    related: [
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Color adjustment filters', path: '/editor/images/color-adjustment' },
    ],
  },

  '/troubleshooting/custom-color-palette-cannot-be-saved': {
    title: 'Custom color palette cannot be saved',
    description:
      'Saved colors disappearing in FlashFX? The difference between Recent, Project and Global palettes, and why Guest mode loses them.',
    summary:
      'There are three swatch sections and they have different lifetimes. Recent Colors holds the last 16 of the current session only. Project Palette is saved with the project. Global Palette is saved to the account and persists across projects.',
    symptoms: [
      'Saved colors are gone after reopening the project',
      'A palette built in one project is missing in another',
      'Colors disappeared after clearing browser data',
      'The + button appears to do nothing',
    ],
    causes: [
      {
        cause: 'The colors went into Recent Colors rather than a palette.',
        fix: 'Recent Colors is a rolling list of the last 16 used in the session and is not saved. Click the + button in the Project Palette section to store a color deliberately.',
      },
      {
        cause: 'The color was saved to the project when you wanted it account-wide.',
        fix: 'Shift+click the + button to save to the Global Palette, or right-click an existing swatch and choose Move to Global Palette. Global swatches persist across every project on the account.',
      },
      {
        cause: 'You are working in Guest mode.',
        fix: 'Guest mode stores everything in browser local storage, so palettes are lost when browser data is cleared. Create a free account to store palettes server-side.',
      },
      {
        cause: 'The project has not synced since the palette changed.',
        fix: 'Project Palette entries are saved with the project. Press Ctrl+S and wait for the sync indicator to read Saved before closing the tab.',
      },
    ],
    related: [
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/color-presets-are-missing-or-not-applying': {
    title: 'Color presets are missing or not applying',
    description:
      'Color swatches missing or applying to the wrong thing in FlashFX? Which palette you saved to, and which control has focus when you click a swatch.',
    summary:
      'Saved colors live in the swatch panel at the bottom of the color picker, split into Recent, Project and Global sections. A swatch applies to whichever color control opened the picker — fill layer, stroke, shadow or background — so clicking one with the wrong control active applies it somewhere you did not intend.',
    symptoms: [
      'The palette is empty in a new project',
      'Clicking a swatch changes the wrong property',
      'Swatches saved on another machine are missing',
      'The palette is present but colors look different than expected',
    ],
    causes: [
      {
        cause: 'The colors were saved to the Project Palette of a different project.',
        fix: 'Project palettes do not travel between projects. Save colors you reuse to the Global Palette instead — Shift+click the + button, or right-click a swatch and choose Move to Global Palette.',
      },
      {
        cause: 'The picker was opened from a different control than you intended.',
        fix: 'The picker is shared across fills, strokes, text, shadows, backgrounds and guides. Confirm which control is active before clicking a swatch.',
      },
      {
        cause: 'You are signed in on a different account, or not signed in.',
        fix: 'Global palettes are account-level. In Guest mode they live only in that browser’s local storage and do not follow you to another device.',
      },
      {
        cause: 'The swatch carries an alpha value.',
        fix: 'Swatches store the full color including alpha. A swatch saved at partial opacity applies at that opacity — check the alpha slider after applying.',
      },
    ],
    related: [
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Accounts, storage and sync', path: '/editor/fundamentals/accounts-storage' },
    ],
  },

  // -------------------------------------------------------------------------
  // Effects
  // -------------------------------------------------------------------------

  '/troubleshooting/shadow-effect-does-not-appear': {
    title: 'Shadow effect does not appear',
    description:
      'Drop shadow invisible in FlashFX? Zero offset, zero opacity and a shadow hidden behind the element itself are the usual explanations.',
    summary:
      'A drop shadow with no offset, no spread and no blur sits exactly behind the element and is completely hidden by it. Offset X and Offset Y are what move it into view.',
    symptoms: [
      'The shadow section is configured but nothing renders',
      'The shadow appears only on one side',
      'The shadow is visible on the canvas but not in the export',
      'The shadow renders inside the shape instead of behind it',
    ],
    causes: [
      {
        cause: 'Offset, spread and blur are all zero.',
        fix: 'Set Offset X and Offset Y to move the shadow out from behind the element, or raise Spread to make it larger than the element before the blur is applied.',
      },
      {
        cause: 'Shadow opacity is at zero.',
        fix: 'Raise the shadow opacity. Shadow color is independent of opacity — the color does not have to be black, but a fully transparent shadow of any color renders nothing.',
      },
      {
        cause: 'The shadow is falling behind an opaque element below.',
        fix: 'Shadows render behind the element they belong to, so a lower layer can cover them. Raise the element in the stack with Ctrl+] or reorder in the Layer Panel.',
      },
      {
        cause: 'An inner shadow is configured instead of a drop shadow.',
        fix: 'Inner shadow casts inside the shape boundary for a pressed-in look. Add a drop shadow if you want the shadow behind the element.',
      },
      {
        cause: 'Element opacity is suppressing it.',
        fix: 'Element opacity composites the fills, stroke and shadow as one unit. At low element opacity the shadow fades with everything else.',
      },
    ],
    related: [
      { label: 'Shadows and glow', path: '/editor/shapes/shadows-glow' },
      { label: 'Z-order management', path: '/editor/shapes/z-order' },
      { label: 'Text shadow', path: '/editor/text/text-shadow' },
    ],
  },

  '/troubleshooting/inner-shadows-are-not-appearing': {
    title: 'Inner shadows are not appearing',
    description:
      'Inner shadow not rendering in FlashFX? It composites on top of the fills but inside the shape, so fill and offset settings determine visibility.',
    summary:
      'An inner shadow has the same properties as a drop shadow but casts inside the shape boundary. It composites on top of the fill layers, so it is visible only where the shape actually has fill — and only when it has offset, spread or blur to give it somewhere to fall.',
    symptoms: [
      'The inner shadow section is configured but the shape is unchanged',
      'The shadow appears outside the shape instead of inside',
      'Only one edge shows the shadow',
      'The effect disappears on a shape with no fill',
    ],
    causes: [
      {
        cause: 'Offset, spread and blur are all zero.',
        fix: 'An inner shadow with no offset and no blur has no area to occupy. Set Offset X/Y, or raise Blur Radius for a soft inset edge all round.',
      },
      {
        cause: 'The shape has no fill for the shadow to composite onto.',
        fix: 'Inner shadows composite on top of the fill layers inside the shape boundary. Add a fill layer — on a stroke-only shape there is nothing to darken.',
      },
      {
        cause: 'Shadow opacity is zero.',
        fix: 'Raise the opacity. As with drop shadows, the color is independent and does not need to be black.',
      },
      {
        cause: 'A drop shadow was added rather than an inner shadow.',
        fix: 'They are separate controls with identical properties. Add the shadow from the Inner Shadow section for an inset result.',
      },
    ],
    related: [
      { label: 'Shadows and glow', path: '/editor/shapes/shadows-glow' },
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
    ],
  },

  '/troubleshooting/glow-effect-is-not-visible': {
    title: 'Glow effect is not visible',
    description:
      'Glow washing out or not showing in FlashFX? Glow depends on its blend mode and on the contrast between glow color and background.',
    summary:
      'Outer glow is a halo of light radiating from the element, and how strongly it reads depends almost entirely on two settings: its blend mode, and the contrast between the glow color and what is behind it. Bright colors on dark backgrounds produce the strongest effect.',
    symptoms: [
      'The glow settings are configured but nothing changes',
      'The glow is visible on a dark background and invisible on a light one',
      'The glow reads as a flat colored border rather than light',
      'The glow appears inside the shape instead of around it',
    ],
    causes: [
      {
        cause: 'The glow color has too little contrast with the background.',
        fix: 'Glow is additive light in effect. A bright glow color against a dark background gives the strongest result; a pale glow on a pale background will not read.',
      },
      {
        cause: 'The blend mode is Normal.',
        fix: 'Normal produces a flat colored halo. Set the glow blend mode to Screen or Add for a luminous light effect.',
      },
      {
        cause: 'Spread and blur radius are both at zero.',
        fix: 'Spread controls how far the glow extends before the blur begins, and blur radius controls the softness of the falloff. Both at zero leaves nothing to see.',
      },
      {
        cause: 'An inner glow is configured instead of an outer glow.',
        fix: 'Inner glow emanates from the shape boundary inwards, simulating edge lighting. Use Outer Glow for a halo outside the shape.',
      },
    ],
    related: [
      { label: 'Shadows and glow', path: '/editor/shapes/shadows-glow' },
      { label: 'Blend modes', path: '/editor/shapes/blend-modes' },
      { label: 'Light and atmosphere filters', path: '/editor/images/light-atmosphere' },
    ],
  },

  '/troubleshooting/shadow-or-glow-effects-are-not-visible': {
    title: 'Shadow or glow effects are not visible',
    description:
      'Neither shadows nor glow rendering in FlashFX? The settings they share, and the element-level controls that suppress both at once.',
    summary:
      'Shadows and glow are separate effects but they fail for overlapping reasons — both need a non-zero opacity and a non-zero radius, and both are composited into the element before element opacity and blend mode are applied. When neither renders, look at the element-level controls first.',
    symptoms: [
      'Both shadow and glow sections are configured but the element is unchanged',
      'The effects work on one element and not another',
      'The effects disappeared after changing a blend mode',
      'The effects show on the canvas but not in the export',
    ],
    causes: [
      {
        cause: 'Element opacity is low or zero.',
        fix: 'Element opacity composites all fills, the stroke, shadows and glow as a single unit. Raise it, then adjust the individual effect opacities.',
      },
      {
        cause: 'Both effects have zero radius and zero offset.',
        fix: 'Each needs somewhere to fall. Set a blur radius and, for shadows, an offset — a zero-radius shadow with no offset is hidden behind the element.',
      },
      {
        cause: 'A group blend mode is isolating the element.',
        fix: 'A group with any blend mode other than Pass-through composites its members internally before blending. Set the group to Pass-through so effects interact with layers below as expected.',
      },
      {
        cause: 'GPU memory pressure has reduced effect quality.',
        fix: 'Effects that need offscreen buffers can be de-prioritised when VRAM is constrained. Check the Performance panel under View → Performance, and reduce simultaneous buffer-requiring effects.',
      },
    ],
    related: [
      { label: 'Shadows and glow', path: '/editor/shapes/shadows-glow' },
      { label: 'Blend mode constraints', path: '/editor/gpu/blend-mode-constraints' },
      { label: 'GPU memory management', path: '/editor/gpu/memory-management' },
    ],
  },

  '/troubleshooting/blur-effect-is-not-visible': {
    title: 'Blur effect is not visible',
    description:
      'Blur having no effect in FlashFX? Radius, blur type and the quality setting each change what you see — and blur is expensive on the GPU.',
    summary:
      'Blur is a post-compositing effect applied to the whole element, driven by its radius. At radius zero there is no blur. Which blur type you choose also matters: directional, radial and zoom blur look like nothing at all if their angle, centre or strength is left at defaults.',
    symptoms: [
      'The blur control moves but the element stays sharp',
      'The blur appears banded rather than smooth',
      'Blur works on images but not on shapes',
      'Performance drops sharply once blur is added',
    ],
    causes: [
      {
        cause: 'The radius is zero.',
        fix: 'Raise the radius. For image Gaussian blur the practical range is 0–200px; at 0 nothing is applied.',
      },
      {
        cause: 'A directional, radial or zoom blur is configured without its driving parameter.',
        fix: 'Directional blur needs a distance along its angle, radial blur needs a strength around its centre point, and zoom blur needs a strength radiating from its centre. Set the parameter, not just the type.',
      },
      {
        cause: 'Blur quality is set low.',
        fix: 'On image blur filters, Quality of Low or Medium produces visible banding. Raise it to High at the cost of extra computation.',
      },
      {
        cause: 'The blur is on the wrong object in the stack.',
        fix: 'Shape-level blur applies to the whole element after its fills and stroke are composited. For image filters, order matters — a sharpen after a blur partially recovers detail, while a blur after a sharpen obscures it.',
      },
      {
        cause: 'GPU memory pressure is limiting the effect.',
        fix: 'Blur requires an offscreen buffer holding a copy of the pre-blur pixels. Under VRAM pressure quality can be reduced. Profile the element to see how many buffers it needs.',
      },
    ],
    related: [
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
      { label: 'Blur filters', path: '/editor/images/blur-filters' },
      { label: 'Filter costs', path: '/editor/gpu/filter-costs' },
    ],
  },

  '/troubleshooting/distortion-effects-are-not-applied': {
    title: 'Distortion effects are not applied',
    description:
      'Distortion filters missing in FlashFX? They belong to the image filter stack — what is available on shapes and text instead.',
    summary:
      'Warp, Ripple, Twirl, Bulge/Pinch, Perspective Warp and Displacement Map are image filters and live in the image filter stack. Vector shapes carry a different set of effects, so a distortion filter you cannot find on a shape is usually on the wrong kind of element.',
    symptoms: [
      'The distortion controls cannot be found on a selected shape',
      'The filter is listed but produces no visible change',
      'The distortion applies to the wrong region of the image',
      'A displacement map does nothing',
    ],
    causes: [
      {
        cause: 'The selected element is a shape, not an image.',
        fix: 'Distortion filters apply to images. For a vector shape, edit vertices directly in Vertex Edit mode, use skew in the transform controls, or rasterize by using the artwork as an image.',
      },
      {
        cause: 'The filter intensity is at zero.',
        fix: 'Every distortion filter has a driving parameter — warp mesh offsets, ripple amplitude, twirl angle, bulge amount. Raise it from its neutral value.',
      },
      {
        cause: 'The filter is disabled in the stack.',
        fix: 'Each filter row has an eye toggle that disables it without deleting it, and its own opacity control. Check both before assuming the filter is broken.',
      },
      {
        cause: 'Filter order is cancelling the effect.',
        fix: 'Filters apply top to bottom. A distortion followed by a heavy blur or a pixelate will have its detail obscured. Drag the grab handle to reorder.',
      },
      {
        cause: 'A displacement map has no map assigned, or the map has no contrast.',
        fix: 'Displacement needs both the target and a map image simultaneously. A flat grey map displaces nothing — use one with real luminance variation.',
      },
    ],
    related: [
      { label: 'Distortion filters', path: '/editor/images/distortion-filters' },
      { label: 'Filter stacking and ordering', path: '/editor/images/filter-stacking' },
      { label: 'Vertex editing', path: '/editor/shapes/vertex-editing' },
    ],
  },

  '/troubleshooting/texture-overlays-are-not-applying': {
    title: 'Texture overlays are not applying',
    description:
      'Texture fill not showing in FlashFX? Texture is a fill layer in the material stack, so scale, opacity and stack position all control visibility.',
    summary:
      'Textures in FlashFX are a fill type, not an overlay effect — a texture is one layer of the material stack. It renders only if it sits above the layers it should cover, is visible, and has an opacity above zero.',
    symptoms: [
      'The texture is selected but the shape looks unchanged',
      'The texture is present but invisibly fine or impossibly coarse',
      'The texture covers the whole shape when a subtle overlay was wanted',
      'Two shapes with the same texture look identical when variation was wanted',
    ],
    causes: [
      {
        cause: 'The texture layer sits below an opaque fill layer.',
        fix: 'The material stack renders top to bottom. Drag the texture layer above the solid or gradient fill it should overlay.',
      },
      {
        cause: 'Scale is at an extreme.',
        fix: 'Scale sets the size of the texture pattern — smaller values give finer texture. At very small scales the texture reads as flat noise, and at very large scales a single feature can fill the shape.',
      },
      {
        cause: 'The layer opacity or blend mode is wrong for an overlay.',
        fix: 'Lower the texture layer opacity and set its blend mode to Overlay or Multiply for a subtle surface treatment rather than a flat replacement of the fill beneath.',
      },
      {
        cause: 'The same seed is producing identical texture on every shape.',
        fix: 'Change the Seed value to get a different random variation of the same texture type.',
      },
      {
        cause: 'The color mode does not suit the texture type.',
        fix: 'Textures support Monochrome, Color-Tinted or Full Color depending on type. A monochrome mode on a colored design can look like nothing was applied.',
      },
    ],
    related: [
      { label: 'Fill types', path: '/editor/shapes/fill-types' },
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Blend modes', path: '/editor/shapes/blend-modes' },
    ],
  },

  '/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly': {
    title: 'Multiple effects conflict or do not combine correctly',
    description:
      'Stacked effects cancelling each other in FlashFX? Filter order decides the result — the same two filters in reverse order look completely different.',
    summary:
      'Filters apply from the top of the stack downwards, and order changes the result rather than just the performance. Blur then Sharpen partially recovers detail; Sharpen then Blur obscures the sharpening entirely. Most "effects conflict" reports are an ordering problem.',
    symptoms: [
      'Adding a second effect appears to remove the first',
      'The same two effects look different in another project',
      'Effects look correct individually and wrong together',
      'Performance collapses once several effects are stacked',
    ],
    causes: [
      {
        cause: 'The filters are in the wrong order.',
        fix: 'Drag the grab handle on a filter row to reorder. Color grading before halftone renders the halftone in the graded colors; after it, the grade adjusts the already-halftoned result.',
      },
      {
        cause: 'A later filter is obscuring an earlier one.',
        fix: 'Blur, pixelate and posterize destroy fine detail that earlier filters created. Move detail-creating filters after the destructive ones, or reduce the destructive filter’s opacity.',
      },
      {
        cause: 'Filter opacity is being treated as on/off.',
        fix: 'Each filter has its own opacity from 0 to 100%. Below 100% the effect blends with the unfiltered result beneath it, which is how you get a softened version of any filter rather than an all-or-nothing application.',
      },
      {
        cause: 'Too many effects require offscreen buffers at once.',
        fix: 'Non-Normal blend modes, blur, some distortions, isolated groups and alpha masks each need an intermediate buffer. Enough of them together cause slowdowns and, in extreme cases, quality reduction. Use Profile Element to see the count.',
      },
      {
        cause: 'A filter is disabled rather than absent.',
        fix: 'The eye toggle on a filter row disables it without removing it. Check for a disabled filter before adding a duplicate.',
      },
    ],
    related: [
      { label: 'Filter stacking and ordering', path: '/editor/images/filter-stacking' },
      { label: 'Filter costs', path: '/editor/gpu/filter-costs' },
      { label: 'Blend mode constraints', path: '/editor/gpu/blend-mode-constraints' },
    ],
  },

  '/troubleshooting/effect-presets-cannot-be-saved-or-reused': {
    title: 'Effect presets cannot be saved or reused',
    description:
      'Reusing an effect configuration across elements in FlashFX — duplication, keyframe copying and palettes are the documented reuse paths.',
    summary:
      'The documented ways to reuse an effect configuration are duplication and keyframe copying rather than a named preset library. Duplicating an element carries its entire material stack and filter stack with it, which is the fastest way to apply the same treatment twice.',
    symptoms: [
      'No save option can be found on an effect or filter panel',
      'An effect stack has to be rebuilt by hand on each element',
      'Copied keyframes do not carry the effect settings',
      'Settings transfer between two shapes but not from a shape to an image',
    ],
    causes: [
      {
        cause: 'The whole configuration needs to travel, not just one value.',
        fix: 'Duplicate the configured element with Ctrl+D and replace its content. The duplicate carries the complete material stack, filter stack and effect settings.',
      },
      {
        cause: 'Keyframes were copied between incompatible element types.',
        fix: 'Keyframes copy between elements of the same type. Pasting image filter keyframes onto a shape is ignored for the incompatible properties — copy between like elements.',
      },
      {
        cause: 'Only the colors need to be shared.',
        fix: 'Save them to the Global Palette, which persists across every project on the account. Shift+click the + button in the color picker’s palette section.',
      },
      {
        cause: 'The same treatment is needed across many layers at once.',
        fix: 'Group the layers and apply the effect at the group level. A group with a blend mode composites as a single unit, so one effect covers every member.',
      },
    ],
    related: [
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Filter stacking and ordering', path: '/editor/images/filter-stacking' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
    ],
  },

  // -------------------------------------------------------------------------
  // Masks and clipping
  // -------------------------------------------------------------------------

  '/troubleshooting/mask-cannot-be-created': {
    title: 'Mask cannot be created',
    description:
      'Clip path not applying in FlashFX? The mask shape must sit above the target in the layer stack before the command will work.',
    summary:
      'A clip path restricts a shape to the outline of another shape, and stacking order is part of the setup — the clip shape has to be above the target. Getting that wrong is the most common reason the command appears to do nothing.',
    symptoms: [
      'Create Clip Path is greyed out',
      'Both shapes disappear after creating the clip',
      'The wrong shape ends up being clipped',
      'The clip has hard edges when soft ones were wanted',
    ],
    causes: [
      {
        cause: 'The clip shape is below the target in the layer stack.',
        fix: 'Place the clip shape on top of the shape to be clipped, select both, then choose Layer → Create Clip Path. The top shape defines the visible region.',
      },
      {
        cause: 'Only one element is selected.',
        fix: 'Select both the clip shape and the target — or the clip shape and the target group — before running the command.',
      },
      {
        cause: 'The two shapes do not overlap.',
        fix: 'The target is visible only inside the clip shape. With no overlap the result is correctly empty. Move one over the other.',
      },
      {
        cause: 'A soft-edged mask is needed rather than a hard clip.',
        fix: 'Use an alpha mask instead. Position a gradient or texture shape directly above the target and set the target’s Mask Mode to Alpha or Luminance for feathered edges and gradient-driven reveals.',
      },
    ],
    related: [
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
      { label: 'Cropping and masking images', path: '/editor/images/cropping-masking' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
    ],
  },

  '/troubleshooting/mask-animation-does-not-work': {
    title: 'Mask animation does not work',
    description:
      'Animating a clip path in FlashFX? You keyframe the mask shape itself, not the masked element — which is why the timeline can look empty.',
    summary:
      'Clip paths animate by animating the clip shape. Select the mask shape and keyframe its position, scale or form; the masked element then reveals and wipes accordingly. Keyframing the masked element instead moves the content through a stationary window.',
    symptoms: [
      'The masked element has no mask-related property tracks',
      'Animating the target moves the content but not the reveal',
      'The mask jumps rather than sweeping',
      'The animation works in preview and not after a reload',
    ],
    causes: [
      {
        cause: 'The masked element is being keyframed instead of the mask shape.',
        fix: 'Select the clip shape itself and keyframe its position, scale or vertices. Animating the clip shape is what produces reveal and wipe effects.',
      },
      {
        cause: 'Record Mode is off, so property changes are not creating keyframes.',
        fix: 'Toggle Record Mode with Ctrl+Alt+R, or click the red record button in the transport controls, before changing properties.',
      },
      {
        cause: 'The mask shape is inside a group and out of scope.',
        fix: 'Double-click into the group to select the clip shape directly, or animate the group if the whole mask should move as a unit.',
      },
      {
        cause: 'Hold keyframes are producing a jump rather than a sweep.',
        fix: 'Hold keyframes maintain a value with no interpolation. Right-click and toggle them back to standard keyframes for a smooth reveal.',
      },
    ],
    related: [
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
      { label: 'The keyframe system', path: '/editor/animate/keyframe-system' },
      { label: 'Entering Animate mode', path: '/editor/animate/entering-mode' },
    ],
  },

  '/troubleshooting/masks-cannot-be-animated': {
    title: 'Masks cannot be animated',
    description:
      'No animatable properties on a FlashFX mask? Which element carries the keyframes, and how alpha masks animate differently from clip paths.',
    summary:
      'Both clip paths and alpha masks animate, but through different elements. A clip path animates via the clip shape’s own transform and vertices; an alpha mask animates via the mask layer’s appearance, because its luminance or alpha is what drives the target’s transparency.',
    symptoms: [
      'The Properties Panel shows no mask property to keyframe',
      'The mask is static while everything else animates',
      'An alpha mask animates its position but not its softness',
      'Vertex animation on the mask shape is unavailable',
    ],
    causes: [
      {
        cause: 'You are looking for a mask property on the masked element.',
        fix: 'There is not one. Select the mask or clip shape and animate its transform properties, or its vertex positions in Vertex Edit mode.',
      },
      {
        cause: 'An alpha mask needs its appearance animated, not its position.',
        fix: 'In Alpha mode the mask layer’s alpha drives the target’s transparency; in Luminance mode its brightness does, with white fully visible and black fully transparent. Animate the mask layer’s gradient stops or fill to change the reveal.',
      },
      {
        cause: 'Vertex Edit mode is not active.',
        fix: 'Per-vertex positions are animatable only from Vertex Edit mode. Enter it on the mask shape to keyframe individual anchor points.',
      },
      {
        cause: 'Record Mode is off.',
        fix: 'Enable it with Ctrl+Alt+R so property changes create keyframes at the playhead.',
      },
    ],
    related: [
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
      { label: 'Vertex editing', path: '/editor/shapes/vertex-editing' },
      { label: 'Morph and deform animation', path: '/editor/animate/morph-deform' },
    ],
  },

  '/troubleshooting/mask-inversion-does-not-apply': {
    title: 'Mask inversion does not apply',
    description:
      'Need the inverse of a FlashFX mask? Luminance masks invert by inverting the mask artwork — white reveals, black hides.',
    summary:
      'In Luminance mask mode, white in the mask layer means fully visible and black means fully transparent. Inverting the mask is therefore a matter of inverting the mask artwork itself rather than looking for an invert switch.',
    symptoms: [
      'The wrong half of the element is visible',
      'No invert option can be found on the mask',
      'Inverting the mask color changes nothing',
      'A clip path needs to hide rather than reveal its interior',
    ],
    causes: [
      {
        cause: 'The mask artwork needs inverting, not the mask setting.',
        fix: 'In Luminance mode, swap the mask layer’s light and dark areas — reverse a gradient’s stops, or flip its angle by 180°. White reveals, black hides, greys are proportional.',
      },
      {
        cause: 'The mask is in Alpha mode when Luminance would be easier to invert.',
        fix: 'Alpha mode reads the mask layer’s alpha channel directly. Luminance mode reads brightness, which is far easier to invert by editing the fill.',
      },
      {
        cause: 'A clip path is being used where an inverse is needed.',
        fix: 'A clip path always shows the target inside the clip shape. For the opposite, build the inverse shape with a boolean subtract operation and clip to that.',
      },
      {
        cause: 'The mask layer is not directly above the target.',
        fix: 'Alpha and luminance masks require the mask layer positioned directly above the target layer in the stack. An element in between breaks the relationship.',
      },
    ],
    related: [
      { label: 'Shape effects', path: '/editor/shapes/shape-effects' },
      { label: 'Boolean operations', path: '/editor/shapes/boolean-operations' },
      { label: 'Cropping and masking images', path: '/editor/images/cropping-masking' },
    ],
  },

  '/troubleshooting/multiple-masks-do-not-work-on-the-same-layer': {
    title: 'Multiple masks do not work on the same layer',
    description:
      'Stacking two masks on one FlashFX element? Use nested groups — each level carries its own clip path or mask mode.',
    summary:
      'An element carries one clip path and one mask mode, so a second mask applied to the same element replaces rather than compounds. Nesting is how you combine them: group the masked element, then mask the group.',
    symptoms: [
      'Applying a second mask removes the first',
      'Only the most recent mask has any effect',
      'Combining a clip path and an alpha mask gives an unexpected result',
      'The masks work separately but not together',
    ],
    causes: [
      {
        cause: 'Two masks are being applied to the same element.',
        fix: 'Group the already-masked element with Ctrl+G, then apply the second mask to the group. Each nesting level carries its own mask, and groups nest to any depth.',
      },
      {
        cause: 'A clip path and an alpha mask are competing.',
        fix: 'They are separate mechanisms — a clip path restricts to an outline, an alpha mask varies transparency by alpha or luminance. Put one on the element and the other on a group wrapping it.',
      },
      {
        cause: 'A single combined outline would be simpler.',
        fix: 'Use boolean operations to merge the two mask shapes into one path, then clip to the result. This is cheaper than nesting and avoids an extra offscreen buffer.',
      },
      {
        cause: 'The nesting is costing performance.',
        fix: 'Each alpha mask and each isolated group requires its own offscreen framebuffer. On a VRAM-constrained device deep nesting causes slowdowns — prefer a single combined boolean path where the result is the same.',
      },
    ],
    related: [
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Boolean operations', path: '/editor/shapes/boolean-operations' },
      { label: 'GPU memory management', path: '/editor/gpu/memory-management' },
    ],
  },

  // -------------------------------------------------------------------------
  // Layers
  // -------------------------------------------------------------------------

  '/troubleshooting/layer-cannot-be-locked-or-unlocked': {
    title: 'Layer cannot be locked or unlocked',
    description:
      'Lock toggle not responding in FlashFX? Where the padlock lives, what locking prevents, and how group locking affects members.',
    summary:
      'The lock is the padlock icon on each layer row in the Layer Panel. A locked layer cannot be selected or transformed on the canvas, which is what makes it look like several other things are broken at once.',
    symptoms: [
      'The padlock icon does not respond to clicks',
      'A layer stays selectable after locking it',
      'Members of a group cannot be unlocked individually',
      'An element cannot be selected on the canvas at all',
    ],
    causes: [
      {
        cause: 'You are clicking the wrong icon on the row.',
        fix: 'Each layer row carries a visibility eye, a lock padlock, a solo circle and a type icon. The padlock is the lock.',
      },
      {
        cause: 'The layer is inside a collapsed group.',
        fix: 'Click the expand arrow on the group row to reveal its members, then lock or unlock the member you want.',
      },
      {
        cause: 'The group is locked rather than the member.',
        fix: 'Unlock at the group level first. A locked group makes its members unreachable on the canvas.',
      },
      {
        cause: 'An element is locked and that is why nothing else works on it.',
        fix: 'If an element cannot be selected, transformed, duplicated or deleted, check its padlock before looking anywhere else — a lock blocks all of those at once.',
      },
    ],
    related: [
      { label: 'Interface overview', path: '/editor/fundamentals/interface-overview' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
      { label: 'Panels and layout', path: '/editor/fundamentals/panels-layout' },
    ],
  },

  '/troubleshooting/layer-will-not-hide-or-unhide': {
    title: 'Layer will not hide or unhide',
    description:
      'Visibility toggle not working in FlashFX? Solo mode overrides the eye icons, which is why a visible layer can still be hidden.',
    summary:
      'Each layer has an eye icon for visibility and a circle icon for solo. Solo overrides visibility — when any layer is soloed every other layer is hidden regardless of its own eye state, which makes a correctly-visible layer look broken.',
    symptoms: [
      'A layer with its eye on is still not visible',
      'Toggling the eye has no effect',
      'Several layers vanished at once',
      'The element is visible on the canvas but not in the export',
    ],
    causes: [
      {
        cause: 'Another layer is soloed.',
        fix: 'Solo hides all other layers. Find the layer with an active solo circle and switch it off to restore normal visibility.',
      },
      {
        cause: 'A property track is soloed in the timeline.',
        fix: 'Track solo in Animate mode suspends all other property animation. It is a separate control from layer solo — check both.',
      },
      {
        cause: 'The parent group is hidden.',
        fix: 'Hiding a group hides every member. Expand the group and check the group row’s own eye icon.',
      },
      {
        cause: 'The element is transparent rather than hidden.',
        fix: 'Check element opacity, fill layer opacity and the color alpha. An element at zero opacity is visible in the Layer Panel and invisible on the canvas.',
      },
    ],
    related: [
      { label: 'Interface overview', path: '/editor/fundamentals/interface-overview' },
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
      { label: 'Groups and composition', path: '/editor/shapes/groups-composition' },
    ],
  },

  '/troubleshooting/layers-are-disorganized-or-hard-to-manage': {
    title: 'Layers are disorganized or hard to manage',
    description:
      'A sprawling FlashFX layer stack? Renaming, grouping, z-order commands, track colors and timeline search bring it back under control.',
    summary:
      'The Layer Panel lists every element in Z-order, and the tools for managing a large stack are renaming, grouping, reordering and searching. Timeline search in particular scales far better than scrolling once a composition passes a few dozen layers.',
    symptoms: [
      'Layers are all named after their shape type',
      'Finding a specific element means scrolling a long list',
      'Dragging a layer accidentally moves it into a group',
      'The timeline track list is too long to navigate',
    ],
    causes: [
      {
        cause: 'Elements are using their default names.',
        fix: 'Double-click a layer name in the Layer Panel to rename it. Named layers are what make search and the timeline track list usable.',
      },
      {
        cause: 'Related elements are not grouped.',
        fix: 'Select them and press Ctrl+G. Groups collapse to one row, carry their own transform, and nest to any depth for hierarchical structure.',
      },
      {
        cause: 'Stacking order is being managed by dragging alone.',
        fix: 'Use the z-order commands instead: Ctrl+Shift+] to bring to front, Ctrl+] forward one step, Ctrl+[ back one step, Ctrl+Shift+[ to send to back. Dragging in the Layer Panel is what accidentally drops layers into groups.',
      },
      {
        cause: 'The timeline is being navigated by scrolling.',
        fix: 'Use layer search and the track type filters in the timeline, and the keyframe-only filter to hide tracks with nothing on them.',
      },
      {
        cause: 'Tracks are visually indistinguishable.',
        fix: 'Assign track colors so related layers read as a set at a glance in the timeline.',
      },
    ],
    related: [
      { label: 'Timeline search and filtering', path: '/editor/timeline/search-filtering' },
      { label: 'Track organization', path: '/editor/timeline/track-organization' },
      { label: 'Z-order management', path: '/editor/shapes/z-order' },
    ],
  },

  // -------------------------------------------------------------------------
  // Keyframes and the animation engine
  // -------------------------------------------------------------------------

  '/troubleshooting/keyframes-cannot-be-created': {
    title: 'Keyframes cannot be created',
    description:
      'No keyframes appearing in FlashFX? Record Mode is what turns property changes into keyframes — with it off, changes apply globally instead.',
    summary:
      'Record Mode is the single most common answer here. With it active, every property change on a selected element becomes a keyframe at the playhead. With it inactive, the same change updates the element across the entire timeline and creates nothing.',
    symptoms: [
      'Changing a property moves the element but adds no keyframe',
      'The change applies across the whole timeline instead of at one moment',
      'The timeline shows no property tracks for the element',
      'Keyframes appear for some properties and not others',
    ],
    causes: [
      {
        cause: 'Record Mode is off.',
        fix: 'Click the red record button in the transport controls or press Ctrl+Alt+R. Record Mode is activated automatically when Animate mode opens, unless Auto-keyframe Mode has been set to Manual in Preferences.',
      },
      {
        cause: 'You are not in Animate mode.',
        fix: 'Press Ctrl+2 or click Animate in the mode switcher. Design mode has no timeline to record into.',
      },
      {
        cause: 'No element is selected.',
        fix: 'Select the element first. Record Mode captures changes to selected elements only.',
      },
      {
        cause: 'You want a keyframe without changing the value.',
        fix: 'Press K to create a hold keyframe at the current value on all animated properties, or click the diamond icon next to a single property in the Properties Panel to keyframe just that one.',
      },
      {
        cause: 'Auto-keyframe Mode is set to Manual.',
        fix: 'In Edit → Preferences under Animation Settings, set Auto-keyframe Mode to On by default so recording is active whenever Animate mode is open.',
      },
    ],
    related: [
      { label: 'The keyframe system', path: '/editor/animate/keyframe-system' },
      { label: 'Entering Animate mode', path: '/editor/animate/entering-mode' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/keyframes-cannot-be-copied-or-pasted': {
    title: 'Keyframes cannot be copied or pasted',
    description:
      'Keyframe paste failing in FlashFX? Paste lands at the playhead unless you use Paste in Place, and incompatible properties are silently skipped.',
    summary:
      'Keyframes copy with Ctrl+C and paste with Ctrl+V at the playhead position, or with Ctrl+Shift+V at their original time positions. Pasting between different element types is not an error — incompatible properties are simply ignored.',
    symptoms: [
      'Pasted keyframes land at the wrong time',
      'Only some of the copied keyframes appear',
      'Nothing pastes onto a different type of element',
      'The relative timing between copied keyframes is lost',
    ],
    causes: [
      {
        cause: 'Paste placed the keyframes at the playhead.',
        fix: 'Use Ctrl+Shift+V (Paste in Place) to paste at the same time positions as the source.',
      },
      {
        cause: 'The target element type does not have those properties.',
        fix: 'Keyframes copy between elements of the same type. Pasting image filter keyframes onto a shape is ignored for the incompatible properties, which looks like a partial paste.',
      },
      {
        cause: 'The keyframes were not actually selected.',
        fix: 'Click a keyframe diamond to select it, Shift+click to add, or drag a marquee in empty timeline space to select a range. Ctrl+A in the timeline selects everything on all tracks.',
      },
      {
        cause: 'The playhead is outside the visible range.',
        fix: 'The paste succeeded somewhere off screen. Press Ctrl+Alt+F to fit the timeline to the full project duration and look again.',
      },
    ],
    related: [
      { label: 'The keyframe system', path: '/editor/animate/keyframe-system' },
      { label: 'Keyframe operations', path: '/editor/timeline/keyframe-operations' },
      { label: 'Keyboard shortcuts', path: '/editor/fundamentals/keyboard-shortcuts' },
    ],
  },

  '/troubleshooting/animation-preview-does-not-play': {
    title: 'Animation preview does not play',
    description:
      'Preview not playing or stuttering in FlashFX? The work area, the preview cache and preview quality decide what plays and how smoothly.',
    summary:
      'Space toggles playback. When it plays only a fraction of the composition, the work area In and Out points are constraining it; when it stutters, the frames have not been cached yet.',
    symptoms: [
      'Playback covers only part of the timeline',
      'The first pass stutters and the second is smooth',
      'The frame rate indicator sits well below the project frame rate',
      'Playback runs but the canvas does not update',
    ],
    causes: [
      {
        cause: 'The work area is limiting playback.',
        fix: 'Loop playback plays only within the In–Out range. Press Ctrl+Alt+F to fit the view to the full project, and reset the In and Out points with I and O at the positions you want.',
      },
      {
        cause: 'The frames are not cached.',
        fix: 'Run Animation → Pre-render Preview to cache the work area in the background. The green bar in the timeline ruler shows what is cached; cached frames play at full project frame rate regardless of complexity.',
      },
      {
        cause: 'Preview quality is too high for the composition.',
        fix: 'Drop to Half or Quarter in the transport bar. This affects live playback only — export is unaffected.',
      },
      {
        cause: 'The playhead is at the end of the range.',
        fix: 'Press Home to return to frame 0, or Shift+Space to stop and return to the In Point.',
      },
      {
        cause: 'The cache is stale after heavy edits.',
        fix: 'Run Animation → Clear Preview Cache to free the memory, then pre-render again.',
      },
    ],
    related: [
      { label: 'Playback and preview', path: '/editor/animate/playback-preview' },
      { label: 'Work area and export range', path: '/editor/timeline/work-area' },
      { label: 'Profiling tools', path: '/editor/gpu/profiling-tools' },
    ],
  },

  '/troubleshooting/animation-timing-cannot-be-adjusted': {
    title: 'Animation timing cannot be adjusted',
    description:
      'Retiming animation in FlashFX — dragging keyframes, scaling a selection in time, and the snapping setting that constrains precision.',
    summary:
      'Timing is changed by moving keyframes, and there are three ways to do it: drag them, nudge with Ctrl+Arrow for single frames, or scale a whole selection proportionally with Scale Time of Selected Keyframes.',
    symptoms: [
      'Dragging a keyframe snaps to the wrong position',
      'Moving one keyframe breaks the relative timing of the rest',
      'Timing cannot be set between two frames',
      'Stretching a sequence has to be done keyframe by keyframe',
    ],
    causes: [
      {
        cause: 'A whole sequence needs to scale, not one keyframe.',
        fix: 'Select the range and use Timeline → Scale Time of Selected Keyframes. Enter a percentage — 200% makes the animation take twice as long — or absolute start and end frames, or a duration. Values are untouched; only timing changes.',
      },
      {
        cause: 'Keyframe snapping is constraining the position.',
        fix: 'Keyframe Snapping in Animation Settings snaps drags to the nearest frame boundary. Turn it off for sub-frame precision, though that is rarely needed.',
      },
      {
        cause: 'Only one keyframe is selected.',
        fix: 'Multiple selected keyframes move together and preserve their relative timing. Marquee-select the range before dragging.',
      },
      {
        cause: 'Frame-accurate positioning is needed.',
        fix: 'Select the keyframe and use Ctrl+Left or Ctrl+Right to move one frame at a time, or right-click and choose Set Time to type an exact frame number.',
      },
      {
        cause: 'Several tracks need to hit the same moment.',
        fix: 'Select the keyframes across tracks and press Ctrl+Shift+K to snap them all to the playhead.',
      },
    ],
    related: [
      { label: 'Keyframe operations', path: '/editor/timeline/keyframe-operations' },
      { label: 'Time remapping', path: '/editor/timeline/time-remapping' },
      { label: 'The keyframe system', path: '/editor/animate/keyframe-system' },
    ],
  },

  '/troubleshooting/animation-will-not-loop': {
    title: 'Animation will not loop',
    description:
      'Loop working in preview but not in export? FlashFX loop playback is preview-only — expressions or matched keyframes make a loop that renders.',
    summary:
      'The Loop toggle in the transport is a preview feature and has no effect on export. A loop that survives rendering comes either from a loop expression or from manually matching the first and last keyframes.',
    symptoms: [
      'The preview loops but the exported file plays once',
      'The loop has a visible stutter at the seam',
      'Looping stops at the work area boundary',
      'The loop plays forward then backward unexpectedly',
    ],
    causes: [
      {
        cause: 'The transport Loop toggle is being relied on for export.',
        fix: 'It is preview-only. Use loopOut("cycle") on the property to cycle infinitely after the last keyframe, or build the loop into the keyframes.',
      },
      {
        cause: 'The loop seam has a duplicate frame.',
        fix: 'With a manual loop, the last frame must not be identical to the first in the output or the loop point stutters. Set the export to end one frame before the repeated keyframe.',
      },
      {
        cause: 'The loop should bounce rather than restart.',
        fix: 'Use loopOut("pingpong") to play forward then backward and repeat. loopIn("cycle") extends the cycle before the first keyframe as well.',
      },
      {
        cause: 'The work area is shorter than the loop.',
        fix: 'Loop playback runs within the In–Out range. Set the In and Out points with I and O to span the full cycle.',
      },
      {
        cause: 'The first and last keyframe values do not match.',
        fix: 'For a manual loop, create keyframes at frame N with the same values as frame 0. Without matching values the animation jumps at the seam.',
      },
    ],
    related: [
      { label: 'Looping and cycle animation', path: '/editor/animate/looping' },
      { label: 'Expressions and value linking', path: '/editor/animate/expressions' },
      { label: 'Work area and export range', path: '/editor/timeline/work-area' },
    ],
  },

  '/troubleshooting/animation-will-not-reverse': {
    title: 'Animation will not reverse',
    description:
      'Reversing animation in FlashFX — the Reverse Selected Keyframes command, what it mirrors, and when to use pingpong instead.',
    summary:
      'Reversing is a timeline operation on a keyframe selection: Timeline → Reverse Selected Keyframes. It reorders the selection so the end state becomes the start state, mirroring the timing around the centre of the selection.',
    symptoms: [
      'No reverse option appears in the Properties Panel',
      'Reversing affects only one track of several',
      'The reversed animation has different timing than expected',
      'Easing looks wrong after reversing',
    ],
    causes: [
      {
        cause: 'Nothing is selected, or only part of the animation is.',
        fix: 'Select the full range of keyframes across every track that should reverse, then run Timeline → Reverse Selected Keyframes. The command operates on the selection, not the element.',
      },
      {
        cause: 'The timing is mirrored around the selection centre, not the project.',
        fix: 'This is how the command works. Select exactly the range you want mirrored — a wider selection moves the animation in time as well as reversing it.',
      },
      {
        cause: 'Easing now reads backwards.',
        fix: 'Easing applies to the outgoing transition of each keyframe, so reversing swaps which transitions ease in and which ease out. Re-apply easing after reversing, or use the bulk shortcuts: F9 for Ease In-Out, Ctrl+F9 for Ease In, Shift+F9 for Ease Out, Ctrl+Shift+F9 for Linear.',
      },
      {
        cause: 'A back-and-forth cycle is wanted rather than a one-off reverse.',
        fix: 'Use loopOut("pingpong") on the property instead — it plays forward then backward continuously without duplicating keyframes.',
      },
    ],
    related: [
      { label: 'Keyframe operations', path: '/editor/timeline/keyframe-operations' },
      { label: 'Looping and cycle animation', path: '/editor/animate/looping' },
      { label: 'Easing and interpolation', path: '/editor/animate/easing-interpolation' },
    ],
  },

  '/troubleshooting/easing-presets-are-not-affecting-animation': {
    title: 'Easing presets are not affecting animation',
    description:
      'Easing applied but motion unchanged in FlashFX? Easing governs the outgoing transition, so it belongs on the keyframe the motion leaves.',
    summary:
      'Easing on a keyframe controls the transition out of that keyframe towards the next one. Applying it to the keyframe where the motion arrives changes the transition after it, not the one you were watching — this single rule explains most "easing does nothing" reports.',
    symptoms: [
      'The preset is applied but the motion still looks linear',
      'Easing affects the segment after the one you intended',
      'The last keyframe’s easing appears to do nothing',
      'Only one property eases when several were selected',
    ],
    causes: [
      {
        cause: 'The easing is on the wrong keyframe.',
        fix: 'Easing applies to the outgoing transition. The keyframe where motion starts controls the acceleration away; the keyframe where it ends controls the deceleration arriving. Apply the preset to the keyframe the motion leaves.',
      },
      {
        cause: 'Easing was applied to the final keyframe.',
        fix: 'The last keyframe has no following transition to govern, so its easing has no visible effect. Apply it to the preceding keyframe instead.',
      },
      {
        cause: 'Only one track was selected.',
        fix: 'Easing is per property track. Select the keyframes on every track that should share the curve, then apply — or use the bulk shortcuts F9, Ctrl+F9, Shift+F9 and Ctrl+Shift+F9 across a multi-track selection.',
      },
      {
        cause: 'The keyframes are Hold type.',
        fix: 'Hold keyframes have no interpolation at all, so no easing curve can apply. Right-click and toggle them back to standard keyframes.',
      },
      {
        cause: 'The two keyframes have the same value.',
        fix: 'Easing shapes the velocity of a change. With no change in value there is nothing to accelerate — check the values differ.',
      },
    ],
    related: [
      { label: 'Easing presets', path: '/editor/animate/easing-presets' },
      { label: 'Easing and interpolation', path: '/editor/animate/easing-interpolation' },
      { label: 'The easing graph editor', path: '/editor/animate/easing-graph' },
    ],
  },

  '/troubleshooting/animation-presets-are-not-applying': {
    title: 'Animation presets are not applying',
    description:
      'Applied an easing or animation preset in FlashFX with no result? Selection scope, keyframe type and the default easing setting all matter.',
    summary:
      'Presets apply to the keyframes that are selected when you apply them, and they govern the transition leaving each one. A preset applied with nothing selected, or applied to a Hold keyframe, produces no visible change.',
    symptoms: [
      'Choosing a preset changes nothing on the canvas',
      'The preset applies to one track but not the rest',
      'New keyframes do not use the preset you expect',
      'The preset appears applied in the panel but the motion is linear',
    ],
    causes: [
      {
        cause: 'No keyframes were selected when the preset was applied.',
        fix: 'Select one or more keyframes first, then choose the preset from the Properties Panel, the right-click submenu, or the easing indicator dropdown on the keyframe itself.',
      },
      {
        cause: 'The preset is on the keyframe the motion arrives at.',
        fix: 'Easing governs the outgoing transition. Apply the preset to the keyframe the motion leaves for it to affect the segment you are watching.',
      },
      {
        cause: 'The keyframes are Hold type.',
        fix: 'Hold keyframes do not interpolate, so no preset can shape them. Right-click and toggle to a standard keyframe.',
      },
      {
        cause: 'New keyframes are not picking up the preset you want.',
        fix: 'Default Easing in Preferences under Animation Settings controls what new keyframes get. The factory default is Ease In-Out; set it to Linear if you prefer to apply easing deliberately.',
      },
      {
        cause: 'The preset needs configuration.',
        fix: 'Stepped presets take a step count, and physical presets such as Bounce and Elastic overshoot the target — their effect is invisible over a very short transition. Lengthen the segment or open the graph editor to shape the curve directly.',
      },
    ],
    related: [
      { label: 'Easing presets', path: '/editor/animate/easing-presets' },
      { label: 'The easing graph editor', path: '/editor/animate/easing-graph' },
      { label: 'Application settings', path: '/editor/fundamentals/application-settings' },
    ],
  },

  '/troubleshooting/position-animation-does-not-work': {
    title: 'Position animation does not work',
    description:
      'Position keyframes not moving an element in FlashFX? Record Mode, group transforms and path attachment all override plain X/Y animation.',
    summary:
      'Position animates on independent X and Y tracks. When keyframes exist but nothing moves, the usual cause is that the element is attached to a motion path — its position is then driven by a progress value and the X/Y tracks no longer apply.',
    symptoms: [
      'Position keyframes exist but the element is stationary',
      'The element moves in preview but not where expected',
      'Moving the element updates the whole timeline instead of one frame',
      'Position animation works until the element is grouped',
    ],
    causes: [
      {
        cause: 'Record Mode is off.',
        fix: 'Enable it with Ctrl+Alt+R. Without it, moving the element changes its position across the entire timeline rather than creating a keyframe.',
      },
      {
        cause: 'The element is attached to a motion path.',
        fix: 'Once attached, position is driven by a single progress value from 0 to 1 rather than X/Y coordinates. Keyframe Progress instead, or detach from the path to return to coordinate animation.',
      },
      {
        cause: 'A group transform is cancelling the movement.',
        fix: 'Group and member transforms compose. A member animating one way inside a group animating the other can net to no visible movement. Check both levels.',
      },
      {
        cause: 'The property track is hidden or soloed away.',
        fix: 'The eye toggle on a property track suppresses its animation while preserving the keyframes, and soloing another track suspends all others. Check both in the timeline.',
      },
      {
        cause: 'The two keyframes have the same value.',
        fix: 'Confirm the X and Y values actually differ between keyframes. Type values directly in the Properties Panel, using a + or - prefix for a relative change.',
      },
    ],
    related: [
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
      { label: 'Path animation', path: '/editor/animate/path-animation' },
      { label: 'Parenting and hierarchy', path: '/editor/animate/parenting-hierarchy' },
    ],
  },

  '/troubleshooting/rotation-animation-does-not-rotate-objects': {
    title: 'Rotation animation does not rotate objects',
    description:
      'Rotation animating around the wrong point in FlashFX? Rotation pivots on the anchor point, which must be set before keyframing.',
    summary:
      'Rotation is applied around the element’s anchor point, which defaults to the geometric centre. Moving the anchor after rotation has been keyframed changes how the existing animation behaves — set the anchor first, then animate.',
    symptoms: [
      'The element orbits instead of spinning in place',
      'Rotation looks correct at one keyframe and wrong at another',
      'The element spins the short way when a full turn was wanted',
      'Rotation works on the group but not the member',
    ],
    causes: [
      {
        cause: 'The anchor point is not where the rotation should pivot.',
        fix: 'Set it before keyframing, using the 3×3 grid in the Properties Panel or Custom Anchor for an explicit offset. In Path Edit mode the anchor appears as a crosshair and can be dragged anywhere, including outside the element bounds.',
      },
      {
        cause: 'The anchor was moved after the rotation was animated.',
        fix: 'Changing the anchor retroactively alters how existing rotation and scale animation behaves. Set the anchor, then re-record the rotation keyframes.',
      },
      {
        cause: 'A full rotation was entered as a small angle.',
        fix: 'Values above 360° and below -360° are accepted and represent multiple full turns. Enter 720 for two clockwise revolutions rather than 0 to 360 twice.',
      },
      {
        cause: 'Auto-orient on a motion path is overriding rotation.',
        fix: 'Auto-Orient sets rotation from the direction of travel along the path. Turn it off to keep a fixed orientation, or use Orient Offset to add a constant rotation on top.',
      },
      {
        cause: 'The rotation is on the group rather than the member.',
        fix: 'Group rotation pivots on the group anchor and carries all members with it. Enter the group by double-clicking to rotate a member on its own pivot.',
      },
    ],
    related: [
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
      { label: 'Path animation', path: '/editor/animate/path-animation' },
    ],
  },

  '/troubleshooting/scale-animation-does-not-change-the-object-size': {
    title: 'Scale animation does not change the object size',
    description:
      'Scale keyframes having no effect in FlashFX? Scale X and Y are separate tracks and pivot on the anchor point, like rotation.',
    summary:
      'Scale is expressed as a percentage on independent X and Y tracks, with 100% as the original size. Like rotation it pivots on the anchor point, so an off-centre anchor makes a scaling element appear to move as well as grow.',
    symptoms: [
      'The element drifts as it scales',
      'Only one axis scales',
      'Scaling the group does not scale the members visually',
      'The element flips instead of shrinking',
    ],
    causes: [
      {
        cause: 'The anchor point is off-centre.',
        fix: 'Scale expands away from the anchor. Set it to the centre in the 3×3 grid for symmetric growth, or place it deliberately for a scale that pushes in one direction.',
      },
      {
        cause: 'Only one of Scale X and Scale Y is keyframed.',
        fix: 'They are independent tracks. Keyframe both for uniform scaling — or keep them separate deliberately for squash-and-stretch.',
      },
      {
        cause: 'A negative scale value flipped the element.',
        fix: 'Scale X at -100% mirrors horizontally and Scale Y at -100% mirrors vertically, equivalent to the flip commands. Keep values positive when scaling down.',
      },
      {
        cause: 'Record Mode is off.',
        fix: 'Enable it with Ctrl+Alt+R so scale changes create keyframes rather than updating the element across the whole timeline.',
      },
      {
        cause: 'A group scale is compounding with a member scale.',
        fix: 'Group and member transforms multiply. A member scaled to 50% inside a group scaled to 200% renders at its original size.',
      },
    ],
    related: [
      { label: 'Transform operations', path: '/editor/shapes/transform-operations' },
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
      { label: 'Multi-property animation', path: '/editor/animate/multi-property' },
    ],
  },

  '/troubleshooting/opacity-animation-does-not-fade-objects': {
    title: 'Opacity animation does not fade objects',
    description:
      'Fade not working in FlashFX? Three opacity controls exist, and keyframing the wrong one leaves the element visible throughout.',
    summary:
      'Element opacity, fill layer opacity and color alpha are three separate controls, and only one of them is usually the right one to keyframe. For a whole-element fade, animate element opacity — it composites all fills, the stroke and the shadow together before blending.',
    symptoms: [
      'The opacity track animates but the element stays visible',
      'Only part of the element fades',
      'The fade works until the element is grouped',
      'The element fades on the canvas but not in the export',
    ],
    causes: [
      {
        cause: 'A fill layer opacity is animated instead of element opacity.',
        fix: 'Fill layer opacity affects one layer of the material stack. Keyframe element opacity for a fade of the whole element including stroke and shadow.',
      },
      {
        cause: 'Another opacity control is fixed at a low value.',
        fix: 'The three controls multiply. A fade from 100% to 0% on element opacity is invisible if a fill layer beneath is already at 0%, and vice versa.',
      },
      {
        cause: 'A group blend mode is isolating the composite.',
        fix: 'A group with any blend mode other than Pass-through composites internally before blending as a unit. Set it to Pass-through, or animate the group opacity instead of the member.',
      },
      {
        cause: 'The keyframes are Hold type.',
        fix: 'Hold keyframes jump rather than interpolate, producing a hard cut instead of a fade. Right-click and toggle them to standard keyframes.',
      },
      {
        cause: 'Record Mode is off.',
        fix: 'Enable it with Ctrl+Alt+R, or click the diamond next to the opacity field in the Properties Panel to keyframe that one property directly.',
      },
    ],
    related: [
      { label: 'The material system', path: '/editor/shapes/material-system' },
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
      { label: 'Blend modes', path: '/editor/shapes/blend-modes' },
    ],
  },

  '/troubleshooting/gradient-or-color-animation-is-not-working': {
    title: 'Gradient or color animation is not working',
    description:
      'Color transitions looking wrong in FlashFX? LAB versus RGB interpolation, and why gradient stops must correspond across keyframes.',
    summary:
      'Colors interpolate through LAB color space by default, which keeps perceived brightness consistent across the transition. Gradients animate per stop — stop colors, stop positions, angle and centre point are all separate animatable values.',
    symptoms: [
      'The colour transition passes through a muddy midpoint',
      'A gradient animation jumps instead of sweeping',
      'Only one gradient stop animates',
      'An unintended hue appears mid-transition',
    ],
    causes: [
      {
        cause: 'RGB interpolation is selected.',
        fix: 'RGB passes through the RGB midpoint and can introduce hue shifts halfway through a transition. Switch back to LAB via the color track context menu for perceptually uniform results.',
      },
      {
        cause: 'The gradients at each keyframe have different stop counts.',
        fix: 'Gradient animation interpolates stop by stop. Give both keyframes the same number of stops in the same order so each one has a counterpart to move towards.',
      },
      {
        cause: 'The wrong gradient property is keyframed.',
        fix: 'Stop Color, Stop Position, Gradient Angle and Center Position are separate tracks. Animating stop positions sweeps colour bands across the element; animating the angle rotates the whole ramp.',
      },
      {
        cause: 'Hold keyframes are producing a hard cut.',
        fix: 'That is correct behaviour for a flash or strobe — a two-keyframe Hold change over one or two frames is how impact flashes are built. Use standard keyframes for a smooth blend.',
      },
      {
        cause: 'Record Mode is off.',
        fix: 'Enable it with Ctrl+Alt+R before changing colors, or use the diamond icon next to the specific colour property.',
      },
    ],
    related: [
      { label: 'Animating colors', path: '/editor/animate/animating-colors' },
      { label: 'Fill types', path: '/editor/shapes/fill-types' },
      { label: 'Color system', path: '/editor/fundamentals/color-system' },
    ],
  },

  '/troubleshooting/motion-paths-are-not-applied-to-objects': {
    title: 'Motion paths are not applied to objects',
    description:
      'Element not following its path in FlashFX? Attaching is only half the setup — the Progress value has to be keyframed to drive movement.',
    summary:
      'Attaching an element to a path replaces its X/Y position with a single Progress value from 0 to 1. Attachment alone moves nothing — Progress has to be keyframed for the element to travel along the path.',
    symptoms: [
      'The element sits at the start of the path and never moves',
      'Position keyframes stopped working after attaching',
      'The element follows the path but faces the wrong way',
      'The element starts partway along the path',
    ],
    causes: [
      {
        cause: 'Progress has not been keyframed.',
        fix: 'Keyframe Progress from 0 at the start to 1 at the end. This is the value that drives motion along the path once attached.',
      },
      {
        cause: 'The element is still expected to use X/Y position.',
        fix: 'Attachment replaces coordinate animation with path progress. Existing position keyframes no longer drive the element — detach from the path if you want them back.',
      },
      {
        cause: 'Auto-Orient is off or misaligned.',
        fix: 'Turn on Auto-Orient so the element rotates to match its direction of travel. If the element’s front is not aligned with the default orientation, add an Orient Offset.',
      },
      {
        cause: 'Offset is shifting the start position.',
        fix: 'Offset moves the starting point along the path independently of Progress. Reset it to zero to start at the path origin.',
      },
      {
        cause: 'The path itself is the wrong shape.',
        fix: 'The motion path is a live vector path — edit its anchor points and curves and the trajectory updates in real time, even during playback.',
      },
    ],
    related: [
      { label: 'Path animation', path: '/editor/animate/path-animation' },
      { label: 'Motion paths and spatial interpolation', path: '/editor/animate/motion-paths' },
      { label: 'The Pen tool', path: '/editor/shapes/pen-tool' },
    ],
  },

  '/troubleshooting/compound-animations-are-not-working': {
    title: 'Compound animations are not working',
    description:
      'Several properties animating at once in FlashFX but the result is wrong? Group and member transforms compose, which can cancel motion out.',
    summary:
      'Any number of properties can be keyframed at the same time, and each property track is fully independent. When a compound animation looks wrong, the usual cause is that a group transform and a member transform are composing into something neither was meant to produce.',
    symptoms: [
      'Two animations that work alone conflict when combined',
      'The element ends up somewhere neither animation specified',
      'Animation on a member appears to do nothing',
      'Everything animates simultaneously when staggering was wanted',
    ],
    causes: [
      {
        cause: 'Group and member transforms are compounding.',
        fix: 'They add rather than override — a circle at (100, 50) in a group moved to (200, 0) renders at (300, 50). Use group animation for macro moves and member animation for internal detail, and check both levels when the result is unexpected.',
      },
      {
        cause: 'Every property shares the same keyframe times.',
        fix: 'Offset the tracks. Scale over frames 0–15, position over 0–45 and opacity over 5–20 reads as layered motion; all three over the same range reads as one robotic transition.',
      },
      {
        cause: 'A property track is hidden or another is soloed.',
        fix: 'The eye toggle suppresses a track’s animation while keeping its keyframes, and soloing one track suspends all the others. Check both before assuming a keyframe is missing.',
      },
      {
        cause: 'Parent inheritance is adding an unexpected transform.',
        fix: 'A child inherits its parent’s transform. Use a null object as a control, or Freeze Transform, when a child should not inherit everything.',
      },
      {
        cause: 'Record Mode was off for part of the session.',
        fix: 'Changes made with it off apply across the whole timeline rather than at the playhead, which silently shifts the baseline every keyframe is relative to.',
      },
    ],
    related: [
      { label: 'Multi-property animation', path: '/editor/animate/multi-property' },
      { label: 'Parenting and hierarchy', path: '/editor/animate/parenting-hierarchy' },
      { label: 'Property tracks', path: '/editor/animate/property-tracks' },
    ],
  },

  '/troubleshooting/multiple-objects-do-not-animate-with-offset-timing': {
    title: 'Multiple objects do not animate with offset timing',
    description:
      'Staggering several elements in FlashFX — shifting keyframe selections in time, and the stagger system that automates it for text.',
    summary:
      'For separate elements, staggering means offsetting their keyframes in time — select each element’s keyframes and move them. For text, the stagger system does this automatically across lines, words or characters without keyframing each unit.',
    symptoms: [
      'All elements start their animation on the same frame',
      'Offsetting one element shifts the others too',
      'Text animates as a single block when per-character motion was wanted',
      'The stagger runs in the wrong direction',
    ],
    causes: [
      {
        cause: 'The keyframes are being moved as one selection.',
        fix: 'Multiple selected keyframes move together and preserve relative timing — which is the opposite of what you want here. Select one element’s keyframes at a time and drag, or use Ctrl+Left and Ctrl+Right to shift by single frames.',
      },
      {
        cause: 'Text is in Block mode.',
        fix: 'Block mode treats the whole text element as one unit. Switch to Line, Word or Character mode so each unit becomes independently animatable.',
      },
      {
        cause: 'The stagger system is not configured.',
        fix: 'With stagger active, Delay per Unit sets the time between successive units — the default is 50ms. Direction can be Forward, Backward, From Center, From Edges or Random.',
      },
      {
        cause: 'The stagger envelope needs its own easing.',
        fix: 'The Easing Override applies a curve to the stagger timing itself, separately from the easing on each unit’s individual animation. Use it to accelerate or decelerate the cascade.',
      },
      {
        cause: 'Character mode is slowing the composition.',
        fix: 'Character mode on a long string creates a great many active tracks. Use Word or Line mode where the extra granularity is not visible in the final result.',
      },
    ],
    related: [
      { label: 'Stagger and per-unit animation', path: '/editor/text/stagger-animation' },
      { label: 'Text animation modes', path: '/editor/text/animation-modes' },
      { label: 'Multi-property animation', path: '/editor/animate/multi-property' },
    ],
  },

  '/troubleshooting/text-properties-cannot-be-animated': {
    title: 'Text properties cannot be animated',
    description:
      'Per-character text animation unavailable in FlashFX? The animation mode decides the granularity of what you can keyframe.',
    summary:
      'A text element’s animation mode determines what the timeline exposes. Block mode gives one set of tracks for the whole element; Line, Word and Character modes divide it into independently animatable units. Per-character properties simply do not exist until you switch modes.',
    symptoms: [
      'The timeline shows only one track for a whole paragraph',
      'Per-character rotation or baseline shift cannot be found',
      'Switching modes prompts an unexpected dialog',
      'Character mode makes the composition sluggish',
    ],
    causes: [
      {
        cause: 'The text is in Block mode.',
        fix: 'Switch to Line, Word or Character mode. Line splits on hard returns and soft wraps, Word splits on spaces with punctuation attached to the preceding word, and Character splits per glyph.',
      },
      {
        cause: 'The mode switch dialog was cancelled.',
        fix: 'Changing modes on text that already has animation prompts to Convert, Reset or Cancel. Convert redistributes existing data to the new granularity; Reset clears it and starts fresh.',
      },
      {
        cause: 'The property is only available at a finer granularity.',
        fix: 'Font Size and Baseline Shift animate per character in Character mode. In Block mode only the element-level transform and fill properties are exposed.',
      },
      {
        cause: 'Character mode is generating too many tracks.',
        fix: 'Long strings in Character mode create many active animation tracks. Use the stagger system rather than keyframing each character, and prefer Word or Line mode where the difference is not visible.',
      },
      {
        cause: 'The text was converted to outlines.',
        fix: 'Conversion replaces the text element with vector paths, and the typography animation system no longer applies. Keep a hidden duplicate of the original before converting.',
      },
    ],
    related: [
      { label: 'Text animation modes', path: '/editor/text/animation-modes' },
      { label: 'Stagger and per-unit animation', path: '/editor/text/stagger-animation' },
      { label: 'Converting text to outlines', path: '/editor/text/convert-to-outlines' },
    ],
  },

  '/troubleshooting/auto-align-animation-is-not-working': {
    title: 'Auto align animation is not working',
    description:
      'Aligning animated elements in FlashFX — why alignment applies at the playhead, and how to keep animated objects aligned over time.',
    summary:
      'Alignment is a transform operation, not an animation feature. It repositions elements at the current playhead position — so on an animated element with Record Mode active it writes a keyframe, and with Record Mode off it shifts the element across the whole timeline.',
    symptoms: [
      'Aligned elements drift apart again during playback',
      'Aligning writes an unexpected keyframe',
      'Alignment moves the element for the whole timeline, not one frame',
      'Elements align at one moment and not at another',
    ],
    causes: [
      {
        cause: 'Alignment is being applied to elements that are animating.',
        fix: 'Alignment acts on positions at the playhead. On animated elements it either records a keyframe there (Record Mode on) or shifts the baseline everywhere (Record Mode off) — decide which you want before aligning.',
      },
      {
        cause: 'The elements need to stay aligned over time.',
        fix: 'Parent them to a null object and animate the null. Children inherit the parent transform, so they move together and stay in their arrangement.',
      },
      {
        cause: 'Fewer than two elements are selected.',
        fix: 'The alignment controls only appear with a multiple selection, and distribution needs three or more.',
      },
      {
        cause: 'One element should stay put while the others move to it.',
        fix: 'Click an already-selected element to make it the key object — it gains a thicker border and does not move while the rest align to it.',
      },
      {
        cause: 'A snapping behaviour was expected rather than an alignment command.',
        fix: 'Snapping assists while dragging on the canvas and has its own strength setting; alignment is a discrete command. They are separate systems.',
      },
    ],
    related: [
      { label: 'Alignment and distribution', path: '/editor/shapes/alignment-distribution' },
      { label: 'Parenting and hierarchy', path: '/editor/animate/parenting-hierarchy' },
      { label: 'Snapping system', path: '/editor/fundamentals/snapping-system' },
    ],
  },

  // -------------------------------------------------------------------------
  // Timeline
  // -------------------------------------------------------------------------

  '/troubleshooting/timeline-is-difficult-to-control-or-not-responding': {
    title: 'Timeline is difficult to control or not responding',
    description:
      'Timeline hard to navigate in FlashFX? Zoom, scroll, follow-playhead and filtering make a long track list workable.',
    summary:
      'The timeline zooms with the scroll wheel in the keyframe area and scrolls with Shift+scroll. Most "unresponsive timeline" reports are a view problem — the playhead or the keyframes are outside the visible range rather than missing.',
    symptoms: [
      'Keyframes are not visible anywhere in the timeline',
      'Scrolling zooms when panning was wanted',
      'The playhead disappears during playback',
      'There are too many tracks to find the one you need',
    ],
    causes: [
      {
        cause: 'The view is zoomed to the wrong range.',
        fix: 'Press Ctrl+Alt+F to fit the full project duration, Ctrl+Shift+F to fit the work area, or select keyframes and press F to zoom to them.',
      },
      {
        cause: 'Scroll is zooming rather than panning.',
        fix: 'The scroll wheel in the keyframe area zooms, centred on the cursor. Hold Shift to scroll horizontally instead, or drag the scroll bar at the bottom of the keyframe area.',
      },
      {
        cause: 'The playhead scrolls out of view during playback.',
        fix: 'Turn on the follow-playhead toggle in the transport bar so the timeline scrolls automatically to keep it visible.',
      },
      {
        cause: 'The track list is too long to navigate.',
        fix: 'Use layer search, the track type filters, and the keyframe-only filter to hide tracks that have nothing on them.',
      },
      {
        cause: 'Property tracks are collapsed.',
        fix: 'Each element row has an expand arrow revealing one track per animated property. Keyframes are on those sub-tracks, not the element row.',
      },
    ],
    related: [
      { label: 'Timeline ruler and time display', path: '/editor/timeline/ruler-time-display' },
      { label: 'Timeline search and filtering', path: '/editor/timeline/search-filtering' },
      { label: 'Track organization', path: '/editor/timeline/track-organization' },
    ],
  },
};
