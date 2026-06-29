import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function S3Bucket() {
  return (
    <Layout>
      <SEO
        title="Bring Your Own S3 Bucket"
        description="Bring Your Own S3 Bucket for FlashFX"
        keywords="FlashFX, S3, bucket"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-4">Bring Your Own S3 Bucket</h1>
        <p className="text-sm text-white">Content will appear here</p>
      </div>
    </Layout>
  );
}
