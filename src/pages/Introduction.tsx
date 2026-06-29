import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: 'Overview', id: 'overview' },
  { label: 'Workspace & Interface Modes', id: 'workspace' },
  { label: 'Design & Creation Tools', id: 'design-tools' },
  { label: 'Advanced Text System', id: 'text-system' },
  { label: 'Image Filters & Effects', id: 'filters' },
  { label: 'Animation Engine', id: 'animation' },
  { label: 'Export & Rendering', id: 'export' },
  { label: 'Project Management', id: 'project-management' },
  { label: 'AI-Powered Features', id: 'ai-features' },
  { label: 'Keyboard Shortcuts', id: 'shortcuts' },
  { label: 'Storage & Account Modes', id: 'storage' },
  { label: 'Supported Export Formats', id: 'export-formats' },
  { label: 'Roadmap & Upcoming Features', id: 'roadmap' },
  { label: 'Performance & Browser Compatibility', id: 'performance' },
];

export default function Introduction() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Introduction"
        description="FlashFX Official Product Documentation - Alpha Release"
        keywords="FlashFX, documentation, motion design, animation, alpha release"
      />

      <div className="space-y-8">
        <div>
          <div className="mb-3">
            <h1 className="text-4xl font-semibold text-white">Introduction</h1>
            <p className="text-sm text-blue-muted mt-2">Official Product Documentation · Alpha Release</p>
          </div>
        </div>

        <div id="overview" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">1. Overview</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX is a professional web-based application for motion design and animation. It brings together a
            comprehensive vector drawing toolkit, a powerful multi-track animation engine, and a full-featured export system
            , all accessible directly through a modern web browser without any installation. Whether you are a designer
            crafting a brand identity animation, a content creator producing social media videos, or a developer prototyping an
            interactive concept, FlashFX provides all the tools necessary to create stunning, publication-ready motion
            graphics.
          </p>

          <p className="text-sm text-white leading-relaxed">
            The application is designed around three distinct workflow modes, Design, Animate, and Advanced, allowing
            users to focus on the right tools at the right time. Projects can be saved to the cloud for access across devices, or
            worked on offline in Guest mode with local browser storage. The entire creation-to-export pipeline lives in the
            browser, making FlashFX exceptionally accessible and portable.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white" colSpan={2}>
                    What is FlashFX?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium w-1/3">Category</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Web-based Motion Design & Animation Application</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Platform</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Web Browser (Chrome, Edge, Firefox, Safari)</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Status</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Alpha, Active Development</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Creator</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Gabriele Bolognese</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Core Capability</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Design, animate, and export professional motion graphics entirely within a web browser, no installation required.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="workspace" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">2. Workspace & Interface Modes</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX organizes its workspace into three carefully considered layout modes. Each mode adapts the interface to
            the specific task at hand, hiding unnecessary panels and surfacing the controls that matter most in that phase of
            work.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Design Mode</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A clean, canvas-focused layout optimized for creating and positioning visual elements. The timeline and animation controls are minimized, giving designers maximum screen space for composition work. This is the primary mode for building the visual structure of a scene, adding shapes, text, images, and arranging layers.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Animate Mode</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A timeline-centric layout where the animation controls take center stage. Panels expand to reveal the full keyframe timeline, property tracks, and easing graph. This mode is used once the visual composition is in place, allowing precise control over how elements move, scale, fade, and transform over time.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Advanced Mode</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A comprehensive layout that keeps all panels visible simultaneously. Suited for power users who need to switch rapidly between design and animation tasks, or who are working on complex projects where constant access to all controls is beneficial. This mode prioritizes functionality and information density over visual simplicity.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white leading-relaxed">
            Switching between modes is instant and non-destructive, no work is lost or reset when changing layouts. The
            three modes share the same underlying project state, so changes made in one mode are immediately reflected in
            all others.
          </p>
        </div>

        <div id="design-tools" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">3. Design & Creation Tools</h2>

          <h3 className="text-2xl font-semibold text-white">3.1 Vector Drawing Tools</h3>

          <p className="text-sm text-white leading-relaxed">
            FlashFX provides a complete set of vector drawing primitives. Every shape is fully resolution-independent,
            meaning it renders with perfect clarity at any canvas size or zoom level.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Rectangle Tool</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Creates rectangular and square shapes with fully adjustable width, height, corner radius, fill, and stroke. Rectangles can be given smooth rounded corners for softer aesthetics or kept sharp for precise geometric compositions. Supports all material system features including gradients and blend modes.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Circle / Ellipse Tool</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Draws perfect circles and ellipses. Like all vector shapes, circles respond to the full material system and can carry complex multi-layer fills, outlines, shadows, and blur effects.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Star & Polygon Tool</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Generates multi-pointed stars and regular polygons with a configurable number of sides or points. The inner and outer radius of stars can be adjusted to create anything from subtle decorative motifs to dramatic radial bursts.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Line Tool</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Draws straight lines with configurable stroke weight, color, and cap style. Lines support the same material properties as other shapes, including gradient strokes.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Text Tool</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Places text objects with full typographic control. Text supports rich formatting at the character level and integrates with the advanced text animation system for per-character, per-word, and per-line animation effects.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Image Import</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Imports raster images directly onto the canvas. Imported images support 60+ visual filters, blend modes, and full integration with the animation engine, position, scale, opacity, and color properties can all be keyframe-animated.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Smart Guides & Snapping</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An intelligent alignment assistance system that displays dynamic guides when elements approach edges, centers, or equidistant positions relative to other objects. Snapping can be toggled on or off and works with both the grid and other elements on canvas.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Grid System</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An optional overlay grid provides structural reference points for precise layout work. Grid visibility and snap sensitivity are configurable.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">3.2 Material System</h3>

          <p className="text-sm text-white leading-relaxed">
            The material system is one of FlashFX's most distinctive features. Rather than a simple flat fill, each shape can
            carry a multi-layer material stack that combines gradients, textures, patterns, and blend modes to produce
            sophisticated visual surfaces.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Multi-Layer Fills</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each element can have multiple fill layers stacked on top of one another. Every layer has its own color, gradient, or texture, as well as its own opacity and blend mode, enabling effects that would normally require complex compositing in external tools.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Gradient Fills</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Gradients can be linear or radial, with an unlimited number of color stops. Each stop's color and position are fully adjustable. Gradients can be rotated and scaled independently of the shape they fill.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Texture Fills</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Procedurally generated textures can be applied as fill layers. Texture parameters such as scale, density, and variation are fully adjustable.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Pattern Generation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Built-in pattern generators create repeating geometric motifs including dots, lines, grids, and more. Patterns scale with the element and respond to all material blending options.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Blend Modes</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Every material layer supports a full suite of blend modes, including multiply, screen, overlay, soft light, hard light, and more, giving designers precise control over how layers interact visually.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">3.3 Groups & Layer Management</h3>

          <p className="text-sm text-white leading-relaxed">
            Complex compositions require robust organization. FlashFX provides a layering and grouping system that keeps
            projects structured and manageable.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Layer Stack</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All elements exist in a z-ordered layer stack. Any element can be moved up, down, to the top, or to the bottom of the stack to control visual depth and overlap.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Grouping</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Multiple elements can be grouped together into a single logical unit. Groups can be moved, scaled, and animated as a whole, while individual members within the group retain their own properties and can still be edited independently.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Ungrouping</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Groups can be dissolved at any time, returning their constituent elements to the main layer stack. This is a non-destructive operation, no properties or keyframes are lost.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Z-Order Controls</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Fine-grained stacking order control via keyboard shortcuts and context menus, allowing precise management of overlapping elements.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Context Menus</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Right-clicking any element or empty canvas area produces a context-sensitive menu with common actions such as group, ungroup, duplicate, delete, and ordering controls.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="text-system" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">4. Advanced Text System</h2>

          <p className="text-sm text-white leading-relaxed">
            Text in FlashFX is far more than a simple label. The text system supports complex typographic styling at the
            individual character level, rich visual effects, and an animation engine that can orchestrate stunning per-character
            or per-word motion sequences.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Rich Character Formatting</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each character within a text block can independently carry its own font size, color, bold, italic, and underline settings. This allows gradient-colored headings, mixed-weight typography, and other expressive typographic treatments without workarounds.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Gradient Text</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Text can be filled with any gradient from the material system, linear, radial, or custom multi-stop gradients. Each gradient is mapped across the full extent of the text string, creating smooth color transitions across individual characters.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Text Stroke</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An adjustable outline stroke can be applied to any text, with full color and width control. Strokes can complement or contrast the fill for legibility or stylistic effect.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Drop Shadows</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Text supports configurable drop shadows with adjustable offset, blur radius, and color, adding depth and lift to text elements.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Pattern Fills</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The same pattern generation system available for shapes can be applied as a text fill, creating textured or patterned typographic treatments.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Text Animation Modes</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Text can be animated as a whole block, broken into individual characters, split into words, or divided by lines, each mode enabling a distinct class of animation effect. Stagger timing controls allow sequential reveals, cascading fades, and wave-like motion across text strings.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Per-Character Keyframes</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">When animating in character or word mode, each unit can receive its own independent keyframe, or a stagger delay can offset when each unit begins animating relative to the previous one, automating complex sequential animations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="filters" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">5. Image Filters & Effects</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX includes over 60 professional image filters that can be applied to any imported image or shape. Filters
            stack and compose, allowing complex multi-effect treatments to be built up non-destructively.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Blur Effects</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Multiple blur types including Gaussian blur for soft defocus effects, directional motion blur for simulating movement, and radial blur for zoom and spin effects. Blur radius is fully adjustable and can be animated over time.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Color Adjustments</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A comprehensive suite of color controls including brightness, contrast, saturation, hue rotation, and color temperature. Color curves can be adjusted per channel for fine-grained color grading.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Stylization Effects</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Artistic filters including edge detection, emboss, posterize, and pixelation effects that transform photographic content into stylized illustrations or graphic treatments.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Distortion Effects</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Warp, ripple, and displacement effects that deform the underlying image geometry, creating liquid, organic, or glitch-style visual treatments.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Blend Mode Integration</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Every image layer supports the full blend mode library, allowing images to interact with shapes and other layers below them in complex ways, from simple transparency to advanced photographic compositing techniques like multiply and screen.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Animated Filters</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All filter parameters can be keyframe-animated, meaning an image can transition from sharp to blurred, from full color to monochrome, or from undistorted to warped, all driven by the animation timeline.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="animation" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">6. Animation Engine</h2>

          <p className="text-sm text-white leading-relaxed">
            The animation engine is the heart of FlashFX. It enables precise, expressive control over how every visual
            element behaves over time, from simple fade-ins to complex multi-element choreography with custom easing
            curves.
          </p>

          <h3 className="text-2xl font-semibold text-white">6.1 Keyframe System</h3>

          <p className="text-sm text-white leading-relaxed">
            FlashFX uses a keyframe-based animation model familiar to users of professional motion design tools. At its
            simplest, a keyframe records the value of a property at a specific point in time. The engine interpolates between
            keyframes to produce smooth motion.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Automatic Keyframe Creation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">When animation mode is active, any property change made to a selected element automatically creates a keyframe at the current playhead position. There is no need to manually insert keyframes, moving an element or adjusting a color while a playhead is positioned instantly captures that state as a keyframe.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Manual Keyframe Editing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Keyframes can be selected, moved, duplicated, or deleted directly on the timeline. Moving a keyframe earlier or later in time changes when the animated state is reached, giving precise control over pacing and timing.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Multi-Property Animation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Any number of properties on any element can be animated simultaneously. Position, rotation, scale, opacity, color, stroke width, blur radius, all can have independent keyframe tracks running in parallel.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Timeline Visualization</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each animated property gets its own horizontal track on the timeline, with keyframes displayed as diamond markers. The full history of an element's animation is visible at a glance, making it easy to identify timing and adjust pacing.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Keyframe Selection & Manipulation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Multiple keyframes can be selected simultaneously across different tracks. Selected groups can be moved together to shift timing, or deleted in bulk to remove a segment of animation.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">6.2 Easing & Interpolation</h3>

          <p className="text-sm text-white leading-relaxed">
            The quality of an animation is largely determined by its easing, the acceleration and deceleration profile
            between keyframes. FlashFX provides 16 easing presets and a custom curve editor for complete control over
            motion feel.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">16 Easing Presets</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Ready-to-use easing options covering the full spectrum of motion feel, including Linear (constant speed), Ease In/Out (smooth acceleration), Ease In-Out (smooth start and end), Bounce (spring-back overshoot), Elastic (oscillating overshoot), and more. Each preset can be applied to individual keyframes.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Custom Bezier Curves</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The interpolation graph allows users to edit bezier curve handles directly, creating entirely custom easing profiles. The curve is visualized as a graph with draggable control points, providing an intuitive and precise editing experience.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Per-Keyframe Easing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each individual keyframe transition can have its own easing setting. The transition from one keyframe to the next can ease in differently than the transition to the one after it, enabling nuanced motion with varying rhythms within a single animation.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Easing Visualization</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The curve editor provides a live visual preview of how the easing profile will affect the property value over time, making it easy to verify that the intended motion feel has been achieved before previewing playback.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">6.3 Multi-Track Timeline</h3>

          <p className="text-sm text-white leading-relaxed">
            The timeline is the primary workspace for animation. FlashFX's dual timeline layout provides both a high-level
            view of all animated elements and a detailed per-element property view.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Dual Timeline Layout</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The timeline supports two complementary views: a wide overview that shows all animated elements and their timing at once, and a focused element view that expands to show the individual property tracks for a selected element.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Timeline Navigation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The playhead can be dragged to any point in time. Arrow key navigation steps through frames precisely. Pan controls allow scrolling through long animations, and scroll-wheel zooming adjusts the visible time range.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Play & Preview</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Full preview playback is available at any time with the spacebar or play button. Playback loops continuously so that animations can be reviewed repeatedly without manual interaction.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Frame-Accurate Scrubbing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Dragging the playhead scrubs through the animation at full fidelity, allowing frame-by-frame inspection of any moment in the timeline. The canvas updates in real time as the playhead moves.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">6.4 Sequence Compositor</h3>

          <p className="text-sm text-white leading-relaxed">
            For more complex productions, the Sequence Compositor allows multiple distinct animation sequences to be
            assembled into a longer composition, with timing and layering control over how sequences relate to one another.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Multiple Sequences</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A project can contain any number of named sequences, each with its own full timeline of animated elements. Sequences can represent scenes, sections, or variations of a motion design piece.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Sequence Ordering</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Sequences can be arranged in order to create a longer production. Transitions between sequences can be timed to produce seamless or deliberate cuts.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Independent Timelines</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each sequence has its own independent timeline with its own duration, elements, and animations. This keeps complex projects organized by dividing them into logical sections.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="export" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">7. Export & Rendering</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX provides a complete export pipeline capable of producing publication-ready video files, image
            sequences, and animated GIFs, all rendered directly within the browser using a deterministic frame-accurate
            renderer.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Video Export, WebM</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exports animations as WebM video files using VP8 or VP9 encoding. WebM is an open format widely supported by web browsers and video platforms, making it ideal for web-destined motion graphics.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Video Export, MP4</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exports animations as MP4 files encoded with the H.264 codec. MP4 is the most universally compatible video format, accepted by virtually every platform, device, and editing application.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Frame Rate Options</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Export frame rates of 24 fps (cinematic), 30 fps (broadcast standard), and 60 fps (smooth, high-motion) are supported. Higher frame rates produce smoother motion at the cost of larger file sizes.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Quality Settings</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Four quality tiers, Low, Medium, High, and Maximum, give control over the trade-off between file size and visual fidelity. Higher settings produce larger files with more detail and less compression artifacting.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">PNG Image Sequence</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exports each frame of the animation as an individual PNG file, packaged for delivery. PNG sequences are the highest-fidelity export format and are commonly used when handing off work to professional compositing or video editing software such as After Effects or DaVinci Resolve.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Single Frame Export</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exports any single frame from the animation as a standalone PNG image, with support for transparent backgrounds. Useful for creating thumbnails, still previews, or static design deliverables.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">GIF Export</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exports the animation as an animated GIF for use in messaging, social media, or web contexts where video playback is not supported. GIF export includes frame rate and color palette controls to balance quality and file size.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Deterministic Rendering</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The rendering engine produces frame-by-frame output that is identical every time the same project is exported. This ensures consistency between preview and final export, and between repeated exports of the same file.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Batch Processing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Multiple export formats can be queued and processed simultaneously in a single export session, saving time when deliverables are needed in several formats at once.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="project-management" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">8. Project Management</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX is designed to support both casual exploration and professional production workflows. A robust project
            management system handles saving, loading, organizing, and sharing design files across sessions and devices.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Cloud Storage</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Authenticated users can save projects directly to the cloud. Cloud-saved projects are accessible from any device and any browser, simply log in to resume work wherever you left off. Projects are stored securely with owner-based access control, meaning only the account that created a project can view or edit it.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Automatic Cloud Sync</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">When working in an authenticated session, changes are automatically synchronized to the cloud at regular intervals. There is no need to manually trigger saves, the application keeps the cloud copy current in the background.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Guest Mode / Local Storage</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Users who prefer not to create an account can work in Guest mode. In this mode, projects are saved to the browser's local storage. Work is preserved between sessions on the same device and browser, though it is not synced to other devices and would be lost if browser data were cleared.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Project Files (.flashfx)</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Projects can be exported as portable .flashfx files, a compressed package that contains the entire project state including all elements, animations, settings, and embedded assets. These files can be shared, backed up, or archived, and re-imported into FlashFX on any installation.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Auto-Backup</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The application automatically generates preview thumbnails and creates backup snapshots of projects at key moments, providing a safety net against accidental data loss.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Version History</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A built-in changelog tracks meaningful changes to a project over time, providing a record of how the design has evolved and enabling reference back to earlier states.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Unlimited Undo / Redo</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Every action taken in the editor is fully reversible. Ctrl+Z steps backward through the history indefinitely, and Ctrl+Y reapplies undone actions. The history is maintained for the full duration of a session.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Copy & Paste</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Full clipboard support for elements allows copying items within a project or between projects. Pasted elements retain all their properties and animation data.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="ai-features" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">9. AI-Powered Features</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX integrates artificial intelligence capabilities to accelerate creative workflows and provide intelligent
            assistance at key stages of the design process.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">AI Chat Assistant</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An integrated conversational assistant is available throughout the application. Users can ask for design suggestions, request explanations of features, get feedback on compositional choices, or get step-by-step guidance on how to achieve a specific effect. The assistant is context-aware and understands the current state of the project.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">DALL-E Image Generation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">FlashFX integrates with OpenAI's DALL-E image generation system, allowing users to generate custom images directly from a text prompt without leaving the application. Generated images are placed directly onto the canvas and can be edited, filtered, and animated like any imported image.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Google Image Search Integration</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Users can search for stock and reference images from within the application and import results directly onto the canvas. This eliminates the need to switch between browser tabs when sourcing visual reference or placeholder imagery.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">AI-Powered Design Presets</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The application includes a library of smart design presets that leverage AI to suggest starting points, style combinations, and animation configurations tailored to common use cases and design goals.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="shortcuts" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">10. Keyboard Shortcuts</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX is built for efficiency. An extensive keyboard shortcut system allows power users to access the most
            common actions without reaching for the mouse, significantly accelerating production workflows.
          </p>

          <h3 className="text-2xl font-semibold text-white">General Controls</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Shortcut</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + Z</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Undo the last action. Can be pressed repeatedly to step back through the full action history.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + Y</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Redo the last undone action.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + D</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Duplicate the currently selected element(s), creating an identical copy with all properties and animation data.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + G</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Group the selected elements into a single composite unit.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + Shift + G</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Ungroup the selected group, returning its elements to the main layer stack.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Delete</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Remove the currently selected element(s) from the canvas.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + A</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Select all elements on the canvas.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Escape</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Deselect all elements and return to the neutral selection state.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">Drawing Tools</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Shortcut</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">R</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Activate the Rectangle drawing tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">C</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Activate the Circle / Ellipse drawing tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">T</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Activate the Text placement tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">L</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Activate the Line drawing tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">I</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Activate the Image import tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">V</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Return to the Selection (pointer) tool.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">View & Navigation</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Shortcut</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + 0</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Fit the entire canvas to the current window, resetting zoom to show the full composition.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + =</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Zoom in, increasing the visible scale of the canvas.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + -</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Zoom out, decreasing the visible scale of the canvas.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + ;</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Toggle the grid overlay on or off.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + '</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Toggle element snapping on or off.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">Timeline Controls</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Shortcut</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Spacebar</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Play or pause animation playback from the current playhead position.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Left Arrow</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Step the playhead back by one frame.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Right Arrow</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Advance the playhead forward by one frame.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Ctrl + Drag</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Pan the timeline view left or right to navigate through longer animations.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Scroll Wheel</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Zoom the timeline in or out, adjusting the visible time range.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">Element Nudging</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Shortcut</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Arrow Keys</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Move the selected element(s) by 1 pixel in the corresponding direction.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">Shift + Arrow Keys</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Move the selected element(s) by 10 pixels in the corresponding direction for faster repositioning.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="storage" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">11. Storage & Account Modes</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX supports two distinct operational modes, each suited to different working preferences and requirements.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Aspect</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Guest Mode</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Authenticated Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Account Required</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">No</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Yes (free email/password)</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Storage Location</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Browser local storage</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Cloud database</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Cross-Device Access</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">No</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Yes, from any device</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Automatic Sync</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">No</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Yes, continuous</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Persistence</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Until browser data cleared</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Indefinite cloud retention</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Free Storage Quota</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Limited by browser quota</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">50 MB on free tier</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Data Security</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Local only</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Server-side with Row Level Security</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="export-formats" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">12. Supported Export Formats</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Format</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Type</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Key Attributes</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">WebM</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Video</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">VP8 / VP9 codec, open format</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Web delivery, browser-based video</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">MP4</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Video</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">H.264 codec, universal compatibility</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Broadcast, social media, editing pipelines</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">PNG Sequence</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Image Series</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Lossless, per-frame PNGs</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">High-end compositing, post-production</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">GIF</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Animated Image</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Looping, wide compatibility</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Messaging, social posts, web embeds</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Single PNG</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Still Image</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Lossless, transparency support</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Thumbnails, static design deliverables</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">.flashfx Project</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Project File</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Compressed JSON + assets</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Archiving, sharing, cross-device work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="roadmap" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">13. Roadmap & Upcoming Features</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX is in active development. The following features are planned for future releases, representing the
            direction in which the platform is growing.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Real-Time Collaboration</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Multiple users will be able to work on the same project simultaneously, with live cursor visibility and synchronized updates, enabling team-based motion design workflows.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Video Import & Editing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">The ability to import video files as layers within a composition, enabling FlashFX to function as a lightweight video editing and compositing environment, not just an animation creation tool.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Audio Tracks & Sync</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Import audio files and synchronize animation keyframes to audio cues, enabling music-driven motion design and motion graphics that react to sound.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Shape Morphing Animations</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Animate the transition of one shape's geometry into another, enabling fluid, organic-looking form transformations between keyframes.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">3D Transform Support</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Extend the existing 2D transform system with perspective and depth controls, enabling pseudo-3D rotations and spatial compositions without requiring a dedicated 3D engine.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Plugin System</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An extensible plugin architecture that will allow third-party developers to add new tools, export formats, data sources, or AI integrations to the FlashFX platform.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Template Marketplace</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A library of professionally designed, fully animated templates that users can customize as starting points, accelerating production for common use cases such as title cards, lower thirds, social media posts, and presentation graphics.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Mobile Responsive Design</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">An adapted interface for tablet and mobile devices, enabling design review, annotation, and lightweight editing away from a desktop workstation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="performance" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">14. Performance & Browser Compatibility</h2>

          <p className="text-sm text-white leading-relaxed">
            FlashFX is a browser-based application and performs best when run in a modern, up-to-date browser. The
            following guidance helps ensure the best possible experience.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Browser</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Minimum Version</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Google Chrome</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Version 90+</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Recommended, best performance & compatibility</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Microsoft Edge</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Version 90+</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Fully supported, built on the same engine as Chrome</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Mozilla Firefox</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Version 88+</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Fully supported, excellent standards compliance</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Apple Safari</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Version 14+</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Supported; some advanced video export features work best in Chrome</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">14.1 Performance Best Practices</h3>

          <p className="text-sm text-white leading-relaxed">
            Because FlashFX runs entirely in the browser, performance depends on both the application's design and the
            complexity of the project. The following practices help maintain smooth performance even with demanding
            compositions.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Canvas Dimensions</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Use 4K resolution (3840×2160) for final export, but consider working at 1080p during the creation phase to reduce the rendering load during editing and preview. The canvas can be scaled up for export without loss.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Image Optimization</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Compress and resize images before importing them into FlashFX. Large, uncompressed images are the most common cause of performance slowdowns, particularly when multiple images are animated simultaneously.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Layer Organization</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Use grouping to consolidate related elements. Fewer independent layers means less rendering overhead, particularly during playback preview.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Animation Length</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Shorter animations export more quickly and play back more smoothly during editing. For long productions, consider using the Sequence Compositor to divide the work into segments rather than building a single very long timeline.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Filter Usage</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Complex image filters, particularly stacked blur and distortion effects, increase the processing cost of each frame. Use them judiciously on compositions with many animated elements.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
