import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function Components() {
  return (
    <Layout>
      <SEO
        title="Components"
        description="Fundamentals - Components"
        keywords="FlashFX, editor, components"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Components</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
