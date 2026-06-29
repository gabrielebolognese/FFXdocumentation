import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function LayoutsOverview() {
  return (
    <Layout>
      <SEO
        title="Overview"
        description="Layouts - Overview"
        keywords="FlashFX, editor, layouts"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Overview</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
