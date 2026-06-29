import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'animatable-properties', label: 'Animatable Properties' },
  { id: 'position-and-scale-animation', label: 'Position and Scale Animation' },
  { id: 'opacity-and-blend-mode-transitions', label: 'Opacity and Blend Mode Transitions' },
];

export default function AnimatingImagesPage() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Animating Image Properties | FlashFX Documentation"
        description="Reference for animating images including Ken Burns, parallax, opacity transitions, and filter animation in FlashFX."
        keywords="FlashFX, animating images, Ken Burns, parallax, opacity fade, blend mode animation"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Animating Image Properties</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            Images are fully compatible with the animation engine. All image-specific properties participate in the keyframe system.
          </p>

          <Section id="animatable-properties" title="Animatable Properties">
            <Table
              headers={['Property', 'Notes']}
              rows={[
                ['Position X / Y', 'Standard position animation'],
                ['Width / Height', 'Size over time; combine with position for scale effects'],
                ['Scale X / Y', 'Uniform or non-uniform scale'],
                ['Rotation', 'Spin, pivot, or subtle tilt animations'],
                ['Opacity', 'Fade in/out'],
                ['Crop Frame', 'Animate the crop position or size (reveal/conceal without moving the image)'],
                ['Blend Mode', 'Switches are discrete (jump cuts); not smoothly interpolated'],
                ['Filter Parameters', 'Any filter value,blur radius, color grade, distortion strength'],
                ['Warp Control Points', 'Individual mesh points of the Warp filter'],
              ]}
            />
          </Section>

          <Section id="position-and-scale-animation" title="Position and Scale Animation">
            <p>Common image animation techniques:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Ken Burns Effect</strong>,slow pan and zoom, achieved by animating position and scale simultaneously with slow ease in/out over many seconds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Impact Zoom</strong>,sudden scale increase on a beat, using a short strong Ease Out keyframe followed by a slight scale-back</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span><strong className="text-white">Parallax</strong>,layered images with different scale/position animation speeds create a depth illusion as the composition moves</li>
            </ul>
          </Section>

          <Section id="opacity-and-blend-mode-transitions" title="Opacity and Blend Mode Transitions">
            <p><strong className="text-white">Fading an image in:</strong></p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create a keyframe with Opacity = 0% at the start frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Create a keyframe with Opacity = 100% at the desired reveal frame</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Set easing to Ease In-Out for a natural feel</li>
            </ol>
            <p><strong className="text-white">Blend mode transitions</strong> are not smoothly interpolated,the mode switches instantaneously at the keyframe. To simulate a blend mode fade, animate the image opacity from 0 to 100% while the blend mode is already set to the target mode.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
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
                <td key={j} className="px-4 py-3 text-xs text-white/70">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
