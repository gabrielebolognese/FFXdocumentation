import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function Scrolling() {
  return (
    <Layout>
      <SEO
        title="Scrolling"
        description="Layouts - Scrolling"
        keywords="FlashFX, editor, scrolling"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Scrolling</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
