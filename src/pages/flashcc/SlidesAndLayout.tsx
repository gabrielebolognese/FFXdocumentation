import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function FlashCCSlidesAndLayout() {
  return (
    <Layout>
      <SEO
        title="Slides and layout in FlashCC"
        description="Slides and layout in FlashCC, the companion app to FlashFX for creating carousels."
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Slides and layout</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
