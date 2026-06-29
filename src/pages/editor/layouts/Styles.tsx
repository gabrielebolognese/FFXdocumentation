import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function Styles() {
  return (
    <Layout>
      <SEO
        title="Styles"
        description="Layouts - Styles"
        keywords="FlashFX, editor, styles"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Styles</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
