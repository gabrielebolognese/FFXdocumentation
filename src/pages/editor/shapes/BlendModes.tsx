import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'normal-group', label: 'Normal Group' },
  { id: 'darken-group', label: 'Darken Group' },
  { id: 'lighten-group', label: 'Lighten Group' },
  { id: 'contrast-group', label: 'Contrast Group' },
  { id: 'inversion-group', label: 'Inversion Group' },
  { id: 'component-group', label: 'Component Group' },
];

export default function BlendModes() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Blend Modes | FlashFX Documentation"
        description="Complete reference for all blend modes in FlashFX — normal, darken, lighten, contrast, inversion, and component groups."
        keywords="FlashFX, blend modes, multiply, screen, overlay, compositing"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Manipulating Shapes
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Blend Modes</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Blend modes control how a shape composites with the content below it in the layer stack. They are set in the Properties Panel under "Compositing."
          </p>

          <Section id="normal-group" title="Normal Group (Default)">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Normal', 'Standard alpha compositing. The element overlays content below according to its opacity.'],
                ['Dissolve', 'At less than 100% opacity, pixels alternate randomly between fully opaque and fully transparent, creating a dithered transparency effect.'],
              ]}
            />
          </Section>

          <Section id="darken-group" title="Darken Group">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Darken', 'Keeps only the darker pixels between the element and what is beneath it.'],
                ['Multiply', 'Multiplies color values. Always produces a darker result. White is neutral (no effect); black produces black.'],
                ['Color Burn', 'Increases contrast and darkens the base by reflecting the blend color. Stronger effect than Multiply.'],
                ['Linear Burn', 'Darkens by decreasing brightness. Darker than Multiply in most cases.'],
                ['Darker Color', 'Compares the full pixel values and keeps whichever is darker.'],
              ]}
            />
          </Section>

          <Section id="lighten-group" title="Lighten Group">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Lighten', 'Keeps only the lighter pixels between the element and what is beneath it.'],
                ['Screen', 'Inverts, multiplies, then re-inverts. Always produces a lighter result. Black is neutral; white produces white.'],
                ['Color Dodge', 'Brightens the base by reflecting the blend color. Strong highlight effect.'],
                ['Linear Dodge (Add)', 'Adds color values together. Strongly brightening; can quickly saturate to white.'],
                ['Lighter Color', 'Compares full pixel values and keeps whichever is lighter.'],
              ]}
            />
          </Section>

          <Section id="contrast-group" title="Contrast Group">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Overlay', 'Multiplies dark areas and Screens light areas. Increases contrast. 50% gray is neutral.'],
                ['Soft Light', 'Similar to Overlay but gentler and less contrasty.'],
                ['Hard Light', 'Similar to Overlay but the blend color controls the effect rather than the base.'],
                ['Vivid Light', 'Burns or dodges by adjusting contrast depending on tone. Very high contrast.'],
                ['Linear Light', 'Burns or dodges by adjusting brightness. Even more extreme than Vivid Light.'],
                ['Pin Light', 'Replaces colors depending on the blend color\'s tone. Produces posterized-looking results.'],
                ['Hard Mix', 'Reduces all colors to pure primaries (red, green, blue, cyan, magenta, yellow, white, or black).'],
              ]}
            />
          </Section>

          <Section id="inversion-group" title="Inversion Group">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Difference', 'Subtracts one color from the other. White inverts the base; black has no effect.'],
                ['Exclusion', 'Similar to Difference but lower contrast. 50% gray produces no change.'],
                ['Subtract', 'Subtracts blend color from base. Can produce strongly darkened results.'],
                ['Divide', 'Divides base color by blend color. Produces very bright, often over-exposed results.'],
              ]}
            />
          </Section>

          <Section id="component-group" title="Component Group">
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Hue', 'Applies the hue of the blend to the luminosity and saturation of the base.'],
                ['Saturation', 'Applies the saturation of the blend to the hue and luminosity of the base.'],
                ['Color', 'Applies both hue and saturation of the blend to the base. Useful for colorization effects.'],
                ['Luminosity', 'Applies the luminosity of the blend to the hue and saturation of the base. Inverse of Color.'],
              ]}
            />
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
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
