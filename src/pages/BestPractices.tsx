import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Hash } from 'lucide-react';

const tableOfContents = [
  { label: 'Canvas & Composition', id: '01-canvas-composition' },
  { label: 'Material System', id: '02-material-system' },
  { label: 'Text System', id: '03-text-system' },
  { label: 'Image Assets & Filters', id: '04-image-assets-filters' },
  { label: 'Animation Engine', id: '05-animation-engine' },
  { label: 'Sequence Compositor', id: '06-sequence-compositor' },
  { label: 'Export & Rendering', id: '07-export-rendering' },
  { label: 'Project Management', id: '08-project-management' },
  { label: 'AI-Powered Features', id: '09-ai-powered-features' },
  { label: 'Browser & Runtime Environment', id: '10-browser-runtime' },
];

export default function BestPractices() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Best Practices"
        description="Performance and optimization guide for FlashFX. Learn best practices for canvas composition, materials, animation, and export workflows."
        keywords="FlashFX, best practices, performance, optimization, motion design"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 pt-8">
          <div className="text-yellow-accent text-[10px] font-medium uppercase tracking-widest">
            Performance & Optimization Guide
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            FlashFX, Best Practices
          </h1>
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Alpha Release
          </p>
        </div>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Table of Contents</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
            <a href="#01-canvas-composition" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">01, Canvas & Composition</a>
            <a href="#02-material-system" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">02, Material System</a>
            <a href="#03-text-system" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">03, Text System</a>
            <a href="#04-image-assets-filters" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">04, Image Assets & Filters</a>
            <a href="#05-animation-engine" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">05, Animation Engine</a>
            <a href="#06-sequence-compositor" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">06, Sequence Compositor</a>
            <a href="#07-export-rendering" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">07, Export & Rendering</a>
            <a href="#08-project-management" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">08, Project Management</a>
            <a href="#09-ai-powered-features" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">09, AI-Powered Features</a>
            <a href="#10-browser-runtime" className="text-yellow-accent hover:text-yellow-accent/80 transition-colors">10, Browser & Runtime Environment</a>
          </div>
        </nav>

        <div className="prose prose-invert max-w-none space-y-16">
          <Section id="01-canvas-composition" title="01, Canvas & Composition">
            <SubSection title="Working Resolution Strategy">
              <p>Work at <strong>1080p during the creation phase</strong> and scale up to 4K only at export time. The canvas renderer processes every pixel on every frame preview,a 4K canvas during editing quadruples the rendering load compared to 1080p with no perceptible benefit while animating.</p>
              <ul>
                <li>Use <strong>1920×1080</strong> as your standard working canvas</li>
                <li>Switch to <strong>3840×2160</strong> only in the final export dialog</li>
                <li>For social content (Reels, Shorts, Stories), work at <strong>1080×1920</strong>, do not start from a landscape canvas and crop later</li>
              </ul>
              <Note>Canvas dimensions are non-destructive. Changing resolution at export does not affect or distort any element already placed on the canvas.</Note>
            </SubSection>

            <SubSection title="Layer Stack Discipline">
              <p>Every independent element on the canvas is an active rendering object during playback preview. Keeping the layer stack lean directly reduces preview overhead.</p>
              <ul>
                <li><strong>Group related elements</strong> as soon as they are positioned. A group renders as a single composited unit rather than N individual layers.</li>
                <li><strong>Delete unused elements</strong> immediately, hidden or off-canvas layers still consume memory and are evaluated by the renderer on every frame.</li>
                <li><strong>Lock static elements</strong> once finalized. Locked layers skip interactive transform checks, reducing input latency on busy canvases.</li>
                <li>Prefer <strong>fewer, richer layers</strong> over many simple ones. A single shape with a multi-layer material is cheaper than five overlapping shapes.</li>
              </ul>
            </SubSection>

            <SubSection title="Z-Order and Overlap">
              <ul>
                <li>Minimize unnecessary overlap between animated elements. The renderer must evaluate pixel compositing for every overlapping region on every frame.</li>
                <li>Stack animated elements <strong>above static backgrounds</strong>, not interleaved with them. This lets the renderer batch static content more efficiently.</li>
                <li>Use <strong>context menu Z-order controls</strong> (or keyboard shortcuts) early, reorganizing stacking order mid-animation can introduce unintended visual collisions.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="02-material-system" title="02, Material System">
            <SubSection title="Multi-Layer Fill Economics">
              <p>Each fill layer added to a shape increases per-frame compositing cost. The material system is powerful, but layering without intent is the most common source of unnecessary load.</p>
              <ul>
                <li><strong>Audit fill stacks regularly.</strong> A gradient fill with a subtle texture overlay on top is often visually indistinguishable from a single well-configured gradient, remove the texture if it adds no meaningful visual value.</li>
                <li>Use <strong>opacity on individual fill layers</strong> rather than stacking semi-transparent solid fills. One layer at reduced opacity is cheaper than two layers composited together.</li>
                <li>Apply complex multi-layer materials only to <strong>hero elements</strong>. Background shapes and structural geometry should use simple solid or two-stop gradient fills.</li>
              </ul>
            </SubSection>

            <SubSection title="Blend Mode Usage">
              <p>Blend modes are compositing operations, each one requires reading the pixel values of all layers below before computing the output.</p>
              <Table
                headers={['Blend Mode Category', 'Performance Impact', 'Recommended Use']}
                rows={[
                  ['Normal / Opacity', 'Minimal', 'Anywhere'],
                  ['Multiply / Screen', 'Low', 'Moderate use'],
                  ['Overlay / Soft Light', 'Medium', 'Key elements only'],
                  ['Hard Light / Difference', 'High', 'Sparingly'],
                  ['Stacked blends on animated layers', 'Very High', 'Avoid where possible'],
                ]}
              />
              <ul>
                <li><strong>Never stack multiple blend mode layers on a fast-moving animated element.</strong> The renderer must recompute compositing on every frame of motion.</li>
                <li>If a blend mode effect is needed on an animated element, <strong>bake it into a static image</strong> and import the result, then animate the image instead.</li>
                <li>For web-destined exports, blend modes that require framebuffer access add significant overhead, test blend-heavy compositions in Chrome before finalizing.</li>
              </ul>
            </SubSection>

            <SubSection title="Gradient Performance">
              <ul>
                <li>Linear and radial gradients with <strong>2–4 color stops</strong> are effectively free in terms of render cost.</li>
                <li>Gradients with <strong>8+ color stops</strong> on animated shapes begin to add measurable overhead, simplify where the visual difference is negligible.</li>
                <li>Animating gradient stop positions or colors over time is more expensive than animating shape position or scale. Reserve animated gradients for prominent, isolated elements.</li>
              </ul>
            </SubSection>

            <SubSection title="Pattern Fills">
              <ul>
                <li>Patterns with high density (very small tile size, many repetitions across a large shape) increase per-frame computation.</li>
                <li>On large background elements, <strong>reduce pattern density</strong> or use a rasterized version of the pattern imported as an image with a static texture fill.</li>
                <li>Avoid animating pattern scale parameters directly, instead, animate the element's scale and keep the pattern tile configuration static.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="03-text-system" title="03, Text System">
            <SubSection title="Formatting Architecture">
              <p>The rich character-level formatting system in FlashFX is expressive but requires disciplined use to avoid unnecessary complexity in the element tree.</p>
              <ul>
                <li>Minimize the number of <strong>mixed-format segments</strong> within a single text block. Each formatting boundary creates an internal layout boundary that the renderer must evaluate.</li>
                <li>If a heading requires gradient text, a stroke, and a drop shadow simultaneously, <strong>verify each effect is perceptible at final export size</strong> before committing. Effects invisible at render size still have a processing cost.</li>
                <li>For text that does not animate, prefer <strong>simple formatting</strong>, the per-frame cost of complex rich text drops to near-zero once the element is static, but the initial layout computation still contributes to load time.</li>
              </ul>
            </SubSection>

            <SubSection title="Text Animation Modes, Choosing Correctly">
              <p>FlashFX supports four animation granularities: <strong>Block, Character, Word, and Line.</strong> Each mode has a different cost profile and appropriate use case.</p>
              <Table
                headers={['Mode', 'Renderer Cost', 'Best For']}
                rows={[
                  ['Block', 'Very Low', 'Simple fade-ins, scale reveals, position moves'],
                  ['Line', 'Low', 'Multi-line staggered reveals, subtitle-style entries'],
                  ['Word', 'Medium', 'Conversational reveals, typographic emphasis'],
                  ['Character', 'High', 'Hero titles, expressive lettering, short strings only'],
                ]}
              />
              <ul>
                <li><strong>Never apply Character mode to long paragraphs.</strong> Character mode creates individual animation tracks per glyph, a 200-character paragraph generates 200 active keyframe tracks.</li>
                <li>For long copy that needs a reveal, use <strong>Line mode with a short stagger delay.</strong> The visual effect is comparable and the track count is proportional to line count, not character count.</li>
                <li>When using Word or Character mode, set a <strong>stagger delay</strong> rather than manually keyframing each unit. The automated stagger is computationally identical but saves significant authoring time and keeps the timeline readable.</li>
              </ul>
            </SubSection>

            <SubSection title="Stagger Timing Best Practices">
              <ul>
                <li>Keep stagger delays <strong>proportional to animation duration.</strong> A 0.05s stagger on a 0.3s animation reads as a clean cascade; a 0.2s stagger on the same animation feels disjointed.</li>
                <li>For character animations, a stagger of <strong>30–60ms</strong> per character is the standard readable range for titles. Below 20ms the effect becomes imperceptible; above 100ms it reads as sequential, not cascading.</li>
                <li>Apply <strong>Ease Out</strong> easing to staggered character entrances and <strong>Ease In</strong> to exits. This matches natural motion perception and requires no additional keyframes, just set the easing on the first keyframe in the sequence.</li>
              </ul>
            </SubSection>

            <SubSection title="Drop Shadow and Stroke on Animated Text">
              <ul>
                <li>Drop shadows on <strong>animating text</strong> (especially in Character mode) require per-frame shadow recalculation for each glyph.</li>
                <li>If the text is animating, consider <strong>removing the shadow during motion</strong> by keyframing shadow opacity to 0 at the start of the animation and fading it in once the text settles.</li>
                <li>Text strokes applied to thin fonts at small sizes often disappear in export, use stroke values above <strong>1.5px</strong> for any text below 24pt, and preview at export resolution before finalizing.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="04-image-assets-filters" title="04, Image Assets & Filters">
            <SubSection title="Pre-Import Optimization">
              <p>Images imported into FlashFX are loaded into browser memory at their original dimensions, regardless of how they are displayed on canvas. An 8192×7022 image displayed in a 200×200 slot still occupies the full memory footprint of the original.</p>
              <ul>
                <li><strong>Resize images before import</strong> to match their intended canvas usage size. A 1:1 pixel ratio between the source image and its canvas dimensions is the optimal target.</li>
                <li>For images used as full-canvas backgrounds at 1080p, the source should be no larger than <strong>1920×1080 (or 2× for retina: 3840×2160).</strong></li>
                <li>For small decorative elements, <strong>512×512</strong> is typically the highest resolution that produces a visible quality difference.</li>
                <li>Convert images to <strong>WebP format before import</strong> wherever possible. WebP at equivalent quality is 25–35% smaller than PNG and 25–50% smaller than JPEG.</li>
              </ul>
            </SubSection>

            <SubSection title="Filter Stack Management">
              <p>FlashFX's 60+ filters compose non-destructively, but compositing cost grows with each additional filter applied to an animated element.</p>
              <ul>
                <li>Apply filters in <strong>order of visual impact.</strong> If a blur effect makes a color adjustment invisible underneath it, remove the color adjustment, invisible filters still process.</li>
                <li><strong>Gaussian blur</strong> is the most expensive per-frame filter, especially at high radius values. On animated elements, keep Gaussian blur radius below <strong>20px</strong> unless the element is otherwise static.</li>
                <li><strong>Motion blur</strong> should be reserved for elements with fast directional movement. Applied to slow or static elements it adds cost with no perceptible benefit.</li>
                <li>Stack at most <strong>2–3 filters</strong> on any single animated element. Beyond three, profile the playback frame rate before adding more.</li>
              </ul>
              <Warning>Stacking distortion effects (warp + ripple + displacement) on an animated image layer is one of the highest-cost operations in FlashFX. Test on the target export resolution before committing to this combination.</Warning>
            </SubSection>

            <SubSection title="Animated Filters">
              <p>Animating filter parameters (e.g., blur radius over time, hue rotation on a moving element) multiplies per-frame compute cost.</p>
              <ul>
                <li>Animate <strong>one filter parameter at a time</strong> per element where possible.</li>
                <li>Use <strong>short eased transitions</strong> for filter animations rather than long linear curves. A blur that goes from 0 to 20px in 10 frames with Ease In/Out reads identically to a 30-frame linear blur but saves 20 frames of heavy computation.</li>
                <li>If multiple elements need the same animated filter effect, <strong>group them and apply the filter to the group</strong> rather than individually to each member.</li>
              </ul>
            </SubSection>

            <SubSection title="Blend Modes on Images">
              <ul>
                <li>Image layers using <strong>Multiply or Screen</strong> blend modes on complex backgrounds are expensive.</li>
                <li>Where a blend mode is primarily used for color interaction and not compositing transparency, test whether a <strong>color adjustment filter</strong> on the image achieves a similar result at lower cost.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="05-animation-engine" title="05, Animation Engine">
            <SubSection title="Keyframe Hygiene">
              <p>The timeline accumulates keyframes across the full project lifecycle. Redundant or accidental keyframes are one of the most common sources of unexpected animation behavior and timeline complexity.</p>
              <ul>
                <li><strong>Delete redundant keyframes</strong>, if two adjacent keyframes on the same property have identical values, the interpolation between them produces no motion. Remove one.</li>
                <li>After repositioning an element, check that <strong>no unintended position keyframes</strong> were created at the current playhead. The automatic keyframe system captures all property changes while in Animate mode, accidental nudges create orphaned keyframes.</li>
                <li>Use <strong>Ctrl+A</strong> on the timeline (select all keyframes for an element) periodically to review the full animation state of any element. Keyframes on unexpected properties signal accidental edits.</li>
                <li>When deleting a segment of animation, select all keyframes in the range across all property tracks simultaneously before deleting, removing only some tracks while leaving others creates broken, one-sided interpolation.</li>
              </ul>
            </SubSection>

            <SubSection title="Easing Selection">
              <p>Easing is one of the highest-leverage decisions in motion design. The right easing choice communicates intent; the wrong one makes professional motion feel amateur.</p>
              <Table
                headers={['Easing', 'When to Use']}
                rows={[
                  ['Ease Out', 'Entering elements, things arriving from off screen'],
                  ['Ease In', 'Exiting elements, things leaving the composition'],
                  ['Ease In-Out', 'Internal moves, elements repositioning within the canvas'],
                  ['Linear', 'Mechanical or rhythmic motion only, conveyor belts, clocks'],
                  ['Bounce', 'Playful interfaces, icons, notifications, game UI'],
                  ['Elastic', 'Expressive typographic motion, use sparingly'],
                  ['Custom Bezier', 'Branded motion, define and reuse the same curve throughout a project'],
                ]}
              />
              <ul>
                <li><strong>Never use Linear easing for organic motion.</strong> Linear easing communicates computation, not physics. Even a subtle Ease In-Out on a simple position move reads as intentional.</li>
                <li>When applying a custom Bezier curve, define it once, note the control point values, and apply the same curve to all similar motions in the project. Consistent easing is the primary characteristic of professional motion design.</li>
                <li>The <strong>easing visualization graph</strong> in the curve editor shows the velocity profile over time, not the position. A steep slope indicates fast movement; a flat slope indicates deceleration. Read the graph in terms of speed, not position.</li>
              </ul>
            </SubSection>

            <SubSection title="Multi-Property Animation Efficiency">
              <p>Animating multiple properties simultaneously on a single element is computationally straightforward, the renderer calculates all properties in a single pass per element per frame. The cost concern is <strong>timeline readability</strong>, not render performance.</p>
              <ul>
                <li>Keep animated property tracks <strong>organized by type</strong>: transform properties (position, scale, rotation) together, then visual properties (opacity, color, blur) below.</li>
                <li>Avoid animating <strong>position and scale simultaneously</strong> unless the motion explicitly requires both. A scale animation often makes a simultaneous position move imperceptible, simplify to one axis of motion where possible.</li>
                <li>For complex multi-property animations, <strong>animate one property to completion, then review</strong> before adding the next. Building all properties simultaneously makes it difficult to isolate which property is responsible for an unintended visual result.</li>
              </ul>
            </SubSection>

            <SubSection title="Playback Preview Optimization">
              <ul>
                <li>If playback preview stutters, <strong>reduce canvas resolution</strong> (not export resolution) to 720p for the editing session, then restore before export.</li>
                <li>Close any unused browser tabs before intensive preview playback. FlashFX's renderer competes with other tabs for GPU and memory resources.</li>
                <li><strong>Scrub manually</strong> through complex animations rather than relying on live playback during authoring. Frame-accurate scrubbing via the arrow keys is always smooth regardless of composition complexity.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="06-sequence-compositor" title="06, Sequence Compositor">
            <SubSection title="When to Use Sequences">
              <p>The Sequence Compositor is not a default tool for all projects, it is appropriate for specific production structures.</p>
              <p><strong>Use sequences when:</strong></p>
              <ul>
                <li>Total animation length exceeds <strong>30 seconds</strong></li>
                <li>The project has <strong>distinct scenes</strong> with different element sets</li>
                <li>Different sections are being authored by different team members</li>
                <li>A section needs to be <strong>re-ordered or re-timed</strong> independently of others</li>
              </ul>
              <p><strong>Do not use sequences for:</strong></p>
              <ul>
                <li>Single continuous animations under 30 seconds</li>
                <li>Projects where all elements persist across the full duration</li>
                <li>Simple looping graphics intended for single-use playback</li>
              </ul>
            </SubSection>

            <SubSection title="Sequence Structure Best Practices">
              <ul>
                <li>Name every sequence <strong>descriptively and immediately</strong>, Sequence 01, Sequence 02 becomes unmanageable above four sequences. Use names like Intro_Logo, Main_Title, CTA_Outro.</li>
                <li>Keep each sequence's internal timeline <strong>as short as the content requires.</strong> Padding sequences with empty frames at the end adds to total project parse time.</li>
                <li>When transitioning between sequences, use the sequence-level timing controls to create a <strong>deliberate cut or overlap</strong> rather than cross-fading within a single long timeline, cross-fades built in the compositor are cleaner and easier to modify than keyframed opacity fades at sequence boundaries.</li>
              </ul>
            </SubSection>

            <SubSection title="Independent Timeline Advantages">
              <ul>
                <li>Assets that appear in only one sequence should be <strong>placed in that sequence, not the shared layer stack.</strong> This keeps each sequence's memory footprint isolated.</li>
                <li>Test each sequence <strong>individually before assembling the full compositor.</strong> A performance issue in a single sequence is far easier to diagnose in isolation than within a full composition.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="07-export-rendering" title="07, Export & Rendering">
            <SubSection title="Format Selection Guide">
              <p>Choosing the wrong export format is a common source of unnecessary file size or quality loss.</p>
              <Table
                headers={['Goal', 'Format', 'Settings']}
                rows={[
                  ['Web playback, social upload', 'MP4 (H.264)', '30fps, High quality'],
                  ['Browser embedding, open web', 'WebM (VP9)', '30fps, High quality'],
                  ['Post-production handoff', 'PNG Sequence', '24 or 30fps, lossless'],
                  ['Social quick share, messaging', 'GIF', '15fps, reduce palette to 64–128 colors'],
                  ['Static thumbnail or preview', 'Single PNG', 'Transparent background on'],
                  ['Project archival or sharing', '.flashfx', 'Always include embedded assets'],
                ]}
              />
              <Note>GIF export generates significantly larger files than MP4 at equivalent visual quality. Use GIF only where video is not supported by the target platform.</Note>
            </SubSection>

            <SubSection title="Quality Tier Selection">
              <p>The four export quality tiers (Low, Medium, High, Maximum) control bitrate and compression aggressiveness.</p>
              <ul>
                <li><strong>Low:</strong> Suitable only for draft review or internal reference. Not acceptable for publication.</li>
                <li><strong>Medium:</strong> Acceptable for social media content where platform re-compression will occur anyway (Instagram, TikTok compress on upload).</li>
                <li><strong>High:</strong> The correct default for most publication use cases.</li>
                <li><strong>Maximum:</strong> Use for compositing handoff (alongside PNG Sequence) or archival masters only. File sizes are substantially larger with diminishing visual returns for web use.</li>
              </ul>
            </SubSection>

            <SubSection title="Frame Rate Selection">
              <ul>
                <li><strong>24fps:</strong> Use for film-style content, branded video, and any motion that should feel cinematic.</li>
                <li><strong>30fps:</strong> Use for broadcast-standard content, corporate presentations, and most social media.</li>
                <li><strong>60fps:</strong> Use only for UI animations, product demos, or content where smoothness is the explicit design intent. 60fps doubles export file size versus 30fps.</li>
              </ul>
              <Warning>Exporting at 60fps and uploading to a platform that caps at 30fps wastes storage and upload time. Verify target platform frame rate limits before exporting.</Warning>
            </SubSection>

            <SubSection title="Batch Export Efficiency">
              <ul>
                <li>Queue all required formats in a <strong>single batch export session</strong> rather than exporting one format, waiting, then exporting again. The renderer only parses the project once per batch.</li>
                <li>For PNG Sequence exports of long animations, ensure sufficient <strong>browser storage quota</strong> is available before starting, the export will fail silently if quota is exhausted mid-render.</li>
                <li>On complex compositions, <strong>export a single-frame PNG first</strong> to verify color accuracy and layer visibility before committing to a full video export.</li>
              </ul>
            </SubSection>

            <SubSection title="Deterministic Rendering">
              <p>FlashFX's renderer is deterministic, the same project always produces the same output.</p>
              <ul>
                <li>This means <strong>do not modify the project between batch exports.</strong> Any change, even a single pixel nudge, invalidates consistency between files in a batch.</li>
                <li>If a client requests a revision after export, <strong>re-export all formats in the batch</strong>, not just the format they reviewed. Other formats may have been delivered downstream.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="08-project-management" title="08, Project Management">
            <SubSection title="Cloud Sync Best Practices">
              <ul>
                <li><strong>Log into an authenticated account</strong> before beginning any project intended for retention. Guest mode saves to browser local storage, clearing browser data or switching devices loses the project entirely.</li>
                <li>The automatic cloud sync operates at regular intervals, not on every action. Before closing the browser, <strong>wait for the sync indicator to confirm the latest state was saved.</strong></li>
                <li>Projects saved in authenticated mode are protected with <strong>owner-based access control</strong>, they are not accessible from shared or public sessions. Do not rely on URL sharing for collaboration in the current release; collaboration is a planned roadmap feature.</li>
              </ul>
            </SubSection>

            <SubSection title="File Hygiene">
              <ul>
                <li>Export a <strong>.flashfx file</strong> at major project milestones as an offline backup, regardless of cloud sync status. Cloud sync is not a substitute for versioned file backups.</li>
                <li>The .flashfx format is a <strong>compressed package</strong> containing all project state and embedded assets. It is the only format that can be re-imported into FlashFX for continued editing, do not delete source .flashfx files after exporting video.</li>
                <li>When archiving a project, <strong>embed all assets</strong> into the .flashfx file before exporting. Linked external assets not included in the package will fail to load when the file is re-imported on a different device.</li>
              </ul>
            </SubSection>

            <SubSection title="Version History">
              <ul>
                <li>The version history changelog tracks <strong>meaningful project milestones</strong>, not every individual action. Use it to navigate back to earlier design directions, not as a frame-by-frame undo mechanism.</li>
                <li>For granular undo, use <strong>Ctrl+Z</strong> (unlimited within the session). Version history is for reviewing the broader evolution of a project.</li>
                <li>Annotate version history entries with <strong>context notes</strong> when switching major design directions. A note like "client preferred v2 color direction" prevents confusion when reviewing history weeks later.</li>
              </ul>
            </SubSection>

            <SubSection title="Undo/Redo Discipline">
              <ul>
                <li>The undo history is maintained for the <strong>full duration of a session</strong> but does not persist across sessions. Once the browser tab is closed, the undo stack is lost.</li>
                <li><strong>Ctrl+D (Duplicate)</strong> before destructive edits to a complex element. If the edit produces an undesirable result, the duplicate serves as a fallback while the original is still accessible in the layer stack.</li>
                <li>Grouping before a transform operation (<strong>Ctrl+G</strong>, then transform, then <strong>Ctrl+Shift+G</strong> to ungroup) produces a cleaner undo chain than transforming ungrouped elements individually.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="09-ai-powered-features" title="09, AI-Powered Features">
            <SubSection title="AI Chat Assistant">
              <p>The context-aware Chat Assistant is most effective when the interaction is <strong>specific and grounded in the current project state.</strong></p>
              <ul>
                <li>Ask for <strong>feature guidance with intent:</strong> "How do I create a staggered character reveal for this title?" produces a more useful response than "How do text animations work?"</li>
                <li>Use the assistant to <strong>validate compositional decisions:</strong> describe the effect you are trying to achieve and ask whether the current approach is the most efficient implementation.</li>
                <li>The assistant understands the current project state, if a specific element is selected, reference it directly rather than describing it abstractly.</li>
                <li>Do not use the assistant as a substitute for understanding the toolset. Use it to <strong>accelerate learning</strong>, then internalize the workflow so it becomes a keyboard-shortcut operation rather than a conversational one.</li>
              </ul>
            </SubSection>

            <SubSection title="DALL-E Image Generation">
              <ul>
                <li>Generated images are placed at <strong>canvas center at their generated resolution</strong>, reposition and resize immediately before continuing work.</li>
                <li>Generated images are treated identically to imported images: they respond to all 60+ filters, support blend modes, and are fully keyframe-animatable. <strong>Apply compression and resize</strong> the same way as any imported image before using in an animated composition.</li>
                <li>For consistent results, write <strong>descriptive, style-specific prompts.</strong> Include lighting direction, color palette, and style references in the prompt, the model responds to specificity.</li>
                <li>If a generated image is close but not quite right, <strong>do not regenerate from scratch.</strong> Import the generated image, apply color adjustment filters in FlashFX to correct tone or saturation, and use distortion filters to adjust geometry. Regenerating is slower and produces a different result each time.</li>
              </ul>
              <Tip>Describe the intended canvas context in the prompt. A prompt that includes "flat vector graphic, dark background, orange accent, motion graphics style" produces results that integrate more naturally into FlashFX compositions than a generic prompt.</Tip>
            </SubSection>

            <SubSection title="AI Design Presets">
              <ul>
                <li>Presets generate a starting configuration, <strong>treat them as scaffolding</strong>, not finished compositions.</li>
                <li>After applying a preset, <strong>audit the layer stack and material assignments</strong> before beginning animation. AI-suggested configurations may include fill layers or blend modes that are appropriate for the preset's reference style but unnecessary for the target use case.</li>
                <li>Use presets to <strong>explore unfamiliar style directions quickly</strong>, then strip the result back to the elements that are genuinely useful. Learning what to remove from an AI preset is as valuable as learning what to keep.</li>
              </ul>
            </SubSection>

            <SubSection title="Google Image Search Integration">
              <ul>
                <li>Images imported via search arrive at their <strong>source resolution</strong>, apply the same pre-use optimization workflow as any imported image.</li>
                <li>Search results are intended as <strong>reference or placeholder content.</strong> Verify licensing status before using search-sourced images in published work.</li>
                <li>Imported search images are embedded in the .flashfx project file like any other asset. <strong>Large reference images significantly increase .flashfx file size</strong>, resize or replace placeholders before archiving.</li>
              </ul>
            </SubSection>
          </Section>

          <Section id="10-browser-runtime" title="10, Browser & Runtime Environment">
            <SubSection title="Browser Selection">
              <Table
                headers={['Browser', 'Recommendation', 'Notes']}
                rows={[
                  ['Chrome 90+', 'Preferred', 'Best WebGL performance, full export feature support'],
                  ['Edge 90+', 'Fully supported', 'Chromium-based, equivalent performance to Chrome'],
                  ['Firefox 88+', 'Fully supported', 'Excellent for general use'],
                  ['Safari 14+', 'Supported', 'Some advanced video export features work best in Chrome'],
                ]}
              />
              <ul>
                <li>Always use the <strong>most current browser version available.</strong> FlashFX relies on modern WebGL and JavaScript APIs that receive performance improvements in every browser release.</li>
                <li>For <strong>export-critical sessions</strong>, use Chrome. Safari's video encoding implementation produces slightly different output for some codec configurations.</li>
              </ul>
            </SubSection>

            <SubSection title="Memory Management">
              <p>FlashFX runs entirely in the browser and shares memory with the browser process and other tabs.</p>
              <ul>
                <li><strong>Close unused browser tabs</strong> before opening large FlashFX projects. Each tab consumes GPU and system memory that the FlashFX renderer requires for smooth playback.</li>
                <li>For projects with many imported images, <strong>monitor browser memory usage</strong> via the browser's task manager (Shift+Esc in Chrome). If memory exceeds 70–80% of available RAM, performance will degrade.</li>
                <li>If the browser tab becomes sluggish during a long editing session, <strong>save to cloud, close the tab, and reopen the project.</strong> The browser allocates memory incrementally during a session; a fresh tab starts with a clean heap.</li>
                <li>Guest mode stores projects in <strong>browser local storage</strong>, which has a quota limit. Projects with many embedded images may approach this limit, switch to authenticated mode for asset-heavy projects.</li>
              </ul>
            </SubSection>

            <SubSection title="CPU and GPU Considerations">
              <ul>
                <li>FlashFX's renderer offloads compositing to the <strong>GPU where supported.</strong> Ensure hardware acceleration is enabled in the browser settings for best performance.</li>
                <li>On machines with <strong>integrated graphics</strong>, complex blend mode stacks and animated filter compositions will perform significantly worse than on dedicated GPU systems. Simplify compositions accordingly.</li>
                <li><strong>CPU performance primarily affects export speed,</strong> not playback preview. A faster CPU reduces export render time but has a limited impact on real-time preview frame rate, which is GPU-bound.</li>
              </ul>
            </SubSection>

            <SubSection title="Performance Red Flags">
              <p>The following symptoms indicate a composition that needs optimization before export:</p>
              <Table
                headers={['Symptom', 'Likely Cause', 'Action']}
                rows={[
                  ['Preview playback drops below 15fps', 'Too many animated layers or stacked blend modes', 'Group layers, remove redundant blend modes'],
                  ['Export takes more than 5× realtime', 'Stacked animated filters at high resolution', 'Reduce filter complexity or export at lower quality tier'],
                  ['Browser tab crashes on export', 'Insufficient memory for PNG sequence export', 'Reduce canvas resolution or export in shorter sequences'],
                  ['Text rendering flickers during preview', 'Character mode animation on long strings', 'Switch to Word or Line mode'],
                  ['Canvas interaction latency above 100ms', 'Excessive independent layers', 'Consolidate with grouping'],
                ]}
              />
            </SubSection>
          </Section>
        </div>

        <footer className="text-center space-y-2 pb-16 pt-8">
          <p className="text-xs text-white/40">FlashFX, Official Product Documentation · Alpha Release</p>
          <p className="text-xs text-white/40">Made with passion by Gabriele Bolognese</p>
          <p className="text-xs text-white/40">© Gabriele Bolognese, FlashFX</p>
        </footer>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <Hash className="w-6 h-6 text-yellow-accent" />
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-8 pl-9">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="space-y-4 text-sm text-white/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-accent/10 border border-yellow-accent/20 rounded-lg p-4 text-sm text-white/80">
      <strong className="text-yellow-accent">Note:</strong> {children}
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-sm text-white/80">
      <strong className="text-red-400">Warning:</strong> {children}
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-sm text-white/80">
      <strong className="text-blue-400">Tip:</strong> {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
