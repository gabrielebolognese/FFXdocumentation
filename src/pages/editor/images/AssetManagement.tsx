import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-asset-library', label: 'The Asset Library' },
  { id: 'replacing-an-image', label: 'Replacing an Image' },
  { id: 'embedding-vs-linking', label: 'Embedding vs. Linking' },
  { id: 'removing-unused-assets', label: 'Removing Unused Assets' },
];

export default function AssetManagement() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Image Asset Management | FlashFX Documentation"
        description="Reference for the asset library, replacing images, embedding, and managing unused assets in FlashFX."
        keywords="FlashFX, asset library, replace image, embedded assets, remove unused assets"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Images</span>
          <h1 className="text-4xl font-bold text-white mb-6">Image Asset Management</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-asset-library" title="The Asset Library">
            <p>
              {'All images currently used in the project are accessible in the Asset Library panel (View -\u003e Asset Library or '}
              <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">A</code>
              {'). The library displays:'}
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Thumbnail previews of all imported images</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>File format and dimensions</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Number of canvas instances (how many times each image is used)</li>
            </ul>
          </Section>

          <Section id="replacing-an-image" title="Replacing an Image">
            <p>To replace an image asset while preserving all existing placement, crop, and animation settings on the canvas:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>In the Asset Library, right-click the image thumbnail</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Select "Replace Asset"</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Choose a replacement image file</li>
            </ol>
            <p>All canvas instances of the original image are updated simultaneously. Animation keyframes and filter settings are preserved.</p>
          </Section>

          <Section id="embedding-vs-linking" title="Embedding vs. Linking">
            <p>By default, all imported images are <strong className="text-white">embedded</strong> in the .flashfx project file. The project is self-contained and fully portable.</p>
            <p><strong className="text-white">Linking (planned feature):</strong> Link an image asset by file path rather than embedding it. Changes to the source file on disk are reflected in the project. Suitable for large assets in production workflows where file size management is critical.</p>
          </Section>

          <Section id="removing-unused-assets" title="Removing Unused Assets">
            <p>
              File -&gt; Remove Unused Assets scans the project and removes any images in the Asset Library that are not referenced on any canvas. Reduces .flashfx file size.
            </p>
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
