import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function AccountOverview() {
  return (
    <Layout>
      <SEO
        title="Account Overview"
        description="Manage your FlashFX account, settings, and privacy preferences"
        keywords="FlashFX, account, overview, settings"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-6">Account Overview</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Your FlashFX Account</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Welcome to your FlashFX account management center. Here you can manage your account settings, subscription, and preferences.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Account Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-navy-elevated border border-navy-border rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Profile Settings</h3>
              <p className="text-sm text-gray-300">
                Update your email address and account preferences. Your email serves as your unique identifier on the platform.
              </p>
            </div>
            <div className="p-4 bg-navy-elevated border border-navy-border rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Privacy & Data</h3>
              <p className="text-sm text-gray-300">
                Review our privacy policy and manage your data. FlashFX is GDPR compliant and respects your privacy rights.
              </p>
            </div>
            <div className="p-4 bg-navy-elevated border border-navy-border rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Subscription</h3>
              <p className="text-sm text-gray-300">
                View and manage your subscription plan. Upgrade or downgrade your plan based on your needs.
              </p>
            </div>
            <div className="p-4 bg-navy-elevated border border-navy-border rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-sm text-gray-300">
                Manage your authentication settings and security preferences. Keep your account secure.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX operates under the jurisdiction of the Italian Republic and is fully compliant with the General Data Protection Regulation (GDPR). We collect only your email address as personal information and do not share it with third parties for marketing purposes.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            You have full control over your data with rights including access, rectification, erasure, and data portability. You may delete your account at any time, which will immediately remove your personal data from our systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Account Deletion</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            You can delete your FlashFX account at any time through the account settings. Upon deletion, your email address and associated personal data will be immediately removed from our active databases. This action is permanent and cannot be undone.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Support</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            For account-related questions or privacy inquiries, contact us at <a href="mailto:support@flashfx.app" className="text-blue-primary hover:underline">support@flashfx.app</a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
