import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function CommunityOverview() {
  return (
    <Layout>
      <SEO
        title="Community Overview"
        description="Community Overview for FlashFX"
        keywords="FlashFX, community, overview"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Community Overview</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
