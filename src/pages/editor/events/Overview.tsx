import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

export default function EventsOverview() {
  return (
    <Layout>
      <SEO
        title="Overview"
        description="Events - Overview"
        keywords="FlashFX, editor, events"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Overview</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
