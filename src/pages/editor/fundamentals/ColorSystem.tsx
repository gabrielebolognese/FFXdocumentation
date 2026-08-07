import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-color-picker', label: 'The Color Picker' },
  { id: 'color-input-modes', label: 'Color Input Modes' },
  { id: 'eyedropper-tool', label: 'Eyedropper Tool' },
  { id: 'recent-colors', label: 'Recent Colors' },
  { id: 'swatches-panel', label: 'Swatches Panel' },
  { id: 'global-vs-local-swatches', label: 'Global vs. Local Swatches' },
  { id: 'importing-exporting-palettes', label: 'Importing and Exporting Palettes' },
  { id: 'color-management', label: 'Color Management' },
  { id: 'transparency-and-alpha', label: 'Transparency and Alpha' },
  { id: 'keyboard-shortcuts', label: 'Keyboard Shortcuts' },
  { id: 'best-practices', label: 'Best Practices' },
];

export default function ColorSystem() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Color System & Color Picker | FlashFX Documentation"
        description="Learn about the color system, color picker, and color management in FlashFX."
        keywords="FlashFX, color picker, color system, swatches"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Color System & Color Picker</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX uses a comprehensive color system supporting multiple color spaces, transparency, and project-wide color management through swatches and palettes.
          </p>

          <Section id="the-color-picker" title="The Color Picker">
            <p>
              The color picker appears whenever you click a color swatch in the properties panel. It provides multiple input methods for precise color selection.
            </p>
            <p className="mt-4">Color picker components:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">2D hue/saturation gradient</strong> — Click and drag to select color</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Value slider</strong> — Adjust brightness</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Alpha slider</strong> — Adjust opacity (0-100%)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Hex input</strong> — Enter 6-digit hex codes (#RRGGBB)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">RGB sliders</strong> — Individual red, green, blue channels (0-255)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">HSL sliders</strong> — Hue (0-360°), Saturation (0-100%), Lightness (0-100%)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Eyedropper</strong> — Sample color from canvas or screen</li>
            </ul>
          </Section>

          <Section id="color-input-modes" title="Color Input Modes">
            <p>Toggle between color modes using the tabs at the top of the picker:</p>
            <Table
              headers={['Mode', 'Format', 'Best For']}
              rows={[
                ['HEX', '#RRGGBB', 'Web/CSS colors, quick copy-paste'],
                ['RGB', 'R: 0-255, G: 0-255, B: 0-255', 'Precise channel control'],
                ['HSL', 'H: 0-360°, S: 0-100%, L: 0-100%', 'Intuitive hue/saturation adjustments'],
                ['HSB/HSV', 'H: 0-360°, S: 0-100%, B: 0-100%', 'Design software standard'],
              ]}
            />
          </Section>

          <Section id="eyedropper-tool" title="Eyedropper Tool">
            <p>Sample colors from the canvas or screen:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Click the eyedropper icon in the color picker</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Cursor changes to a crosshair with color preview</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Click anywhere on canvas to sample that pixel's color</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Press Escape to cancel</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Advanced:</strong> Hold Shift while using the eyedropper to sample from anywhere on your screen, not just the FlashFX canvas. This requires browser permission.
            </p>
          </Section>

          <Section id="recent-colors" title="Recent Colors">
            <p>
              The color picker displays a row of recently used colors below the gradient area. Click any swatch to instantly apply that color. Recent colors persist across sessions and are project-specific.
            </p>
          </Section>

          <Section id="swatches-panel" title="Swatches Panel">
            <p>
              Swatches are saved colors you can reuse throughout a project. Access via Window → Swatches.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Add swatch</strong> — Click the + button with a color selected</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Apply swatch</strong> — Click a swatch to set the active fill/stroke color</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Edit swatch</strong> — Double-click to open color picker</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Delete swatch</strong> — Right-click → Delete</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Rename swatch</strong> — Right-click → Rename (e.g., "Brand Blue")</li>
            </ul>
            <p className="mt-4">
              Swatches are saved per-project. To share swatches across projects, export and import swatch palettes.
            </p>
          </Section>

          <Section id="global-vs-local-swatches" title="Global Swatches vs. Local Swatches">
            <Table
              headers={['Type', 'Scope', 'Use Case']}
              rows={[
                ['Local Swatches', 'Current project only', 'Project-specific brand colors'],
                ['Global Swatches', 'All projects', 'Personal favorite colors, common neutrals'],
              ]}
            />
            <p className="mt-4">
              Toggle between local and global swatches using the dropdown at the top of the Swatches panel.
            </p>
          </Section>

          <Section id="importing-exporting-palettes" title="Importing and Exporting Palettes">
            <p>Share color palettes across projects or with team members:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Export palette</strong> — Swatches panel menu → Export → Save as .ase (Adobe Swatch Exchange) or .gpl (GIMP Palette)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Import palette</strong> — Swatches panel menu → Import → Select .ase or .gpl file</li>
            </ul>
            <p className="mt-4">
              Supported formats:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>.ase — Adobe Swatch Exchange (Photoshop, Illustrator compatible)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>.gpl — GIMP Palette</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>.txt — Plain text hex list (one color per line)</li>
            </ul>
          </Section>

          <Section id="color-management" title="Color Management">
            <p>FlashFX operates in the sRGB color space by default, which is standard for web and screen display.</p>
            <p className="mt-4"><strong className="text-white">Color accuracy:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Colors are rendered using the browser's color management system</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Exported videos and images use sRGB color profile</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>For print work, convert exports to CMYK using external tools</li>
            </ul>
          </Section>

          <Section id="transparency-and-alpha" title="Transparency and Alpha">
            <p>
              Every color in FlashFX has an alpha channel controlling transparency:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">0% alpha</strong> — Fully transparent (invisible)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">50% alpha</strong> — Semi-transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">100% alpha</strong> — Fully opaque</li>
            </ul>
            <p className="mt-4">
              Note: Alpha affects color blending. A semi-transparent red over blue produces a purple result.
            </p>
          </Section>

          <Section id="keyboard-shortcuts" title="Keyboard Shortcuts">
            <Table
              headers={['Shortcut', 'Action']}
              rows={[
                ['I', 'Activate eyedropper (when color picker is open)'],
                ['X', 'Swap fill and stroke colors'],
                ['D', 'Reset fill and stroke to default (black fill, no stroke)'],
                ['/', 'Toggle fill/stroke active selector'],
              ]}
            />
          </Section>

          <Section id="best-practices" title="Best Practices">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Create swatches for brand colors at the start of a project</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Name swatches descriptively ("Primary Blue", "Accent Yellow")</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Use HSL mode for quick lightness/saturation variations</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Sample colors from imported logos using the eyedropper</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Export swatch palettes when delivering projects to clients</li>
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
