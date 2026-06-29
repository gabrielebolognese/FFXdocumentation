import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function CaseStudies() {
  return (
    <Layout>
      <SEO
        title="Case Studies"
        description="Case Studies for FlashFX"
        keywords="FlashFX, case studies"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Case Studies</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
