import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'creating-a-new-project', label: 'Creating a New Project' },
  { id: 'common-canvas-presets', label: 'Common Canvas Presets' },
  { id: 'canvas-properties', label: 'Canvas Properties' },
  { id: 'frame-rate-settings', label: 'Frame Rate Settings' },
  { id: 'duration-and-timeline-length', label: 'Duration and Timeline Length' },
  { id: 'changing-canvas-settings', label: 'Changing Canvas Settings' },
  { id: 'transparent-backgrounds', label: 'Transparent Backgrounds' },
  { id: 'project-metadata', label: 'Project Metadata' },
];

export default function CanvasProjectSetup() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Canvas & Project Setup | FlashFX Documentation"
        description="Learn how to configure canvas dimensions, background, and project settings in FlashFX."
        keywords="FlashFX, canvas setup, project settings, artboard"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Canvas & Project Setup</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            The canvas is the rectangular viewport that defines the output dimensions and background of your composition. All elements within the canvas bounds are included in export; everything outside is clipped.
          </p>

          <Section id="creating-a-new-project" title="Creating a New Project">
            <p>When you create a new project, you're prompted to configure:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Project name</strong> — A descriptive title for organization</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Canvas dimensions</strong> — Width and height in pixels</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Frame rate</strong> — Frames per second (FPS) for animation timing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Background color</strong> — Canvas fill color or transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Duration</strong> — Default timeline length in seconds</li>
            </ul>
          </Section>

          <Section id="common-canvas-presets" title="Common Canvas Presets">
            <Table
              headers={['Preset', 'Dimensions', 'Aspect Ratio', 'Best For']}
              rows={[
                ['Instagram Post', '1080 × 1080', '1:1 Square', 'Social media posts'],
                ['Instagram Story', '1080 × 1920', '9:16 Portrait', 'Stories, Reels, TikTok'],
                ['YouTube 1080p', '1920 × 1080', '16:9 Landscape', 'Standard video content'],
                ['YouTube 4K', '3840 × 2160', '16:9 Landscape', 'High-resolution video'],
                ['Banner Ad', '728 × 90', 'Wide', 'Web advertising'],
                ['Twitter Header', '1500 × 500', '3:1', 'Social media headers'],
                ['Custom', 'Any', 'Any', 'Custom dimensions'],
              ]}
            />
          </Section>

          <Section id="canvas-properties" title="Canvas Properties">
            <p>Access canvas properties by clicking anywhere on the empty canvas background. The properties panel shows:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Width</strong> — Canvas width in pixels (minimum 1, maximum 8192)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Height</strong> — Canvas height in pixels (minimum 1, maximum 8192)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Aspect Ratio Lock</strong> — Maintains proportions when resizing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Background Color</strong> — Hex color or transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Background Opacity</strong> — 0-100% (only for color backgrounds)</li>
            </ul>
          </Section>

          <Section id="frame-rate-settings" title="Frame Rate Settings">
            <p>Frame rate determines the temporal resolution of your animation:</p>
            <Table
              headers={['FPS', 'Use Case', 'Notes']}
              rows={[
                ['24', 'Cinematic', 'Film standard, theatrical feel'],
                ['30', 'Standard Video', 'NTSC video standard, smooth playback'],
                ['60', 'High Frame Rate', 'Ultra-smooth motion, gaming'],
                ['12-15', 'Stylized', 'Stop-motion aesthetic'],
                ['Custom', 'Special Cases', 'Any value 1-120 FPS'],
              ]}
            />
            <p className="mt-4">
              Higher frame rates produce smoother motion but increase export file size and rendering time. Choose based on your delivery platform requirements.
            </p>
          </Section>

          <Section id="duration-and-timeline-length" title="Duration and Timeline Length">
            <p>
              Default timeline duration sets the initial length of the project. You can extend or shorten this at any time during production.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Minimum</strong> — 1 frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Maximum</strong> — 300 seconds (5 minutes)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Typical</strong> — 5-10 seconds for social media, 30-60 seconds for explainers</li>
            </ul>
            <p className="mt-4">
              Longer timelines consume more memory and may reduce editor performance on lower-end devices.
            </p>
          </Section>

          <Section id="changing-canvas-settings" title="Changing Canvas Settings">
            <p>You can modify canvas dimensions and background after project creation:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Deselect all elements (click empty canvas or press Escape)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Properties panel displays canvas settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Adjust dimensions, background, or frame rate</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Changes apply immediately</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Warning:</strong> Changing canvas dimensions does not automatically scale existing elements. Use Edit → Resize Canvas with Content if you want elements to scale proportionally.
            </p>
          </Section>

          <Section id="transparent-backgrounds" title="Transparent Backgrounds">
            <p>
              To export with transparency (alpha channel), set background color to "Transparent" in canvas settings. This is essential for:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Overlaying animations on other content</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>UI elements and icons</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Stickers and GIF exports</li>
            </ul>
            <p className="mt-4">
              Note: MP4 video does not support transparency. Use WebM with VP9 codec or PNG sequence for transparent video exports.
            </p>
          </Section>

          <Section id="project-metadata" title="Project Metadata">
            <p>Additional project settings accessible from File → Project Settings:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Project Name</strong> — Displayed in the project dashboard</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Description</strong> — Optional notes for organization</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Tags</strong> — Searchable keywords for filtering</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Visibility</strong> — Private or public (for sharing)</li>
            </ul>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
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
