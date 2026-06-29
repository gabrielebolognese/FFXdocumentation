import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContentsItems = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'data-controller', label: '1. Data Controller and Contact Information' },
  { id: 'information-collect', label: '2. Information We Collect' },
  { id: 'legal-basis', label: '3. Legal Basis and Purposes of Processing' },
  { id: 'cookies', label: '4. Cookies and Tracking Technologies' },
  { id: 'disclosure', label: '5. Disclosure of Personal Information' },
  { id: 'data-transfers', label: '6. International Data Transfers' },
  { id: 'data-retention', label: '7. Data Retention' },
  { id: 'minors', label: '8. Protection of Minors' },
  { id: 'gdpr-rights', label: '9. Your Privacy Rights Under GDPR' },
  { id: 'updates', label: '10. Updates to This Privacy Policy' },
  { id: 'contact', label: '11. Contact Information' },
];

export default function PrivacyPolicy() {
  return (
    <Layout tableOfContents={tableOfContentsItems}>
      <SEO
        title="Privacy Policy"
        description="FlashFX Privacy Policy - How we collect, use, and protect your data"
        keywords="FlashFX, privacy policy, GDPR, data protection"
      />
      <div className="max-w-4xl">
        <h1 className="text-4xl font-semibold text-white mb-2">FlashFX Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">
          Effective Date: February 1, 2026<br />
          Last Updated: February 1, 2026
        </p>

        <section id="introduction" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            This Privacy Policy describes how FlashFX collects, uses, processes, discloses, and protects personal information when you use the FlashFX platform and related services. FlashFX is operated under the jurisdiction of the Italian Republic and complies with the General Data Protection Regulation (GDPR) (EU) 2016/679 and applicable Italian data protection laws.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy.
          </p>
        </section>

        <section id="data-controller" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">1. Data Controller and Contact Information</h2>
          <h3 className="text-xl font-semibold text-white mb-3">1.1 Identity of the Data Controller</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX operates as the data controller for the purposes of data protection legislation. Our operations are based in Italy, and we process personal data in accordance with applicable European Union and Italian laws.
          </p>
          <h3 className="text-xl font-semibold text-white mb-3">1.2 Contact Information</h3>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li>Service Name: FlashFX</li>
            <li>Email Address: <a href="mailto:support@flashfx.app" className="text-blue-primary hover:underline">support@flashfx.app</a></li>
            <li>Country of Operation: Italy</li>
          </ul>
        </section>

        <section id="information-collect" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information Provided by Users</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            We adhere to the principle of data minimization and collect only the minimum amount of personal information necessary to provide and maintain our Services:
          </p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li><strong>Email Address:</strong> Your email address is collected when you create an account on the FlashFX platform. This serves as your unique identifier and primary means of communication with our Services.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">2.2 Information We Do Not Collect</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-2">To further protect your privacy, we explicitly do not collect:</p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li><strong>Payment Information:</strong> All payment transactions are processed by third-party payment service providers</li>
            <li><strong>Detailed Personal Profile Information:</strong> Beyond your email address, we do not collect full name, postal address, telephone number, date of birth, or demographic information</li>
            <li><strong>Email-Based Analytics:</strong> We do not perform behavioral analytics, profiling, or tracking based on your email address</li>
          </ul>
        </section>

        <section id="legal-basis" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">3. Legal Basis and Purposes of Processing</h2>
          <h3 className="text-xl font-semibold text-white mb-3">3.1 Legal Basis for Processing</h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-2">Under the GDPR, we process your personal data based on:</p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li><strong>Contractual Necessity (Article 6(1)(b) GDPR):</strong> Processing your email address is necessary for account creation and management</li>
            <li><strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> Maintaining platform security, preventing fraud, and improving our Services</li>
            <li><strong>Consent (Article 6(1)(a) GDPR):</strong> For promotional or marketing communications with your explicit consent</li>
            <li><strong>Legal Obligation (Article 6(1)(c) GDPR):</strong> To comply with legal obligations under Italian or EU law</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">3.2 Purposes of Processing</h3>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li>Account creation and management</li>
            <li>Authentication and access control</li>
            <li>Essential service communications</li>
            <li>Customer support</li>
            <li>Platform security</li>
            <li>Legal compliance</li>
            <li>Promotional communications (with consent)</li>
          </ul>
        </section>

        <section id="cookies" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking Technologies</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX uses only essential technical cookies that are strictly necessary for the operation of our Services:
          </p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li><strong>Authentication Cookies:</strong> Verify your identity and maintain your logged-in status</li>
            <li><strong>Session Management Cookies:</strong> Manage your active session</li>
            <li><strong>Security Cookies:</strong> Protect your account from fraudulent activity</li>
          </ul>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            We do not use advertising cookies, analytics and profiling cookies, or third-party marketing cookies.
          </p>
        </section>

        <section id="disclosure" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">5. Disclosure of Personal Information to Third Parties</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            We do not sell, rent, lease, or trade your personal information to third parties. Your email address may be processed by carefully selected service providers:
          </p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li>Email delivery services</li>
            <li>Cloud hosting and infrastructure providers</li>
            <li>Payment processors</li>
            <li>Security and fraud prevention services</li>
          </ul>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            We do not share your information with third-party advertising networks or marketing platforms.
          </p>
        </section>

        <section id="data-transfers" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">6. International Data Transfers</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX operates under the jurisdiction of the Italian Republic. Where we transfer your personal data outside the European Economic Area, we ensure appropriate safeguards are in place through Standard Contractual Clauses and additional security measures.
          </p>
        </section>

        <section id="data-retention" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Your email address and account information are retained during your active use of FlashFX. You may delete your account at any time through the account settings, which will immediately remove your personal data from our active databases.
          </p>
        </section>

        <section id="minors" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">8. Protection of Minors</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX is not directed to children under the age of 13 years. Use by individuals under 13 is strictly prohibited. Users between 13 and 18 may use the Services with parental supervision recommended.
          </p>
        </section>

        <section id="gdpr-rights" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">9. Your Privacy Rights Under the GDPR</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-2">You have the following rights:</p>
          <ul className="text-sm text-gray-300 leading-relaxed list-disc list-inside mb-4">
            <li><strong>Right of Access (Article 15):</strong> Obtain confirmation and access to your personal data</li>
            <li><strong>Right to Rectification (Article 16):</strong> Request correction of inaccurate data</li>
            <li><strong>Right to Erasure (Article 17):</strong> Request deletion of your personal data</li>
            <li><strong>Right to Restriction (Article 18):</strong> Request restricted processing of your data</li>
            <li><strong>Right to Data Portability (Article 20):</strong> Receive your data in a machine-readable format</li>
            <li><strong>Right to Object (Article 21):</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent (Article 7(3)):</strong> Withdraw consent for marketing communications</li>
            <li><strong>Right to Lodge a Complaint (Article 77):</strong> File a complaint with the Italian supervisory authority (Garante per la protezione dei dati personali)</li>
          </ul>
          <p className="text-sm text-gray-300 leading-relaxed">
            To exercise your rights, contact us at <a href="mailto:support@flashfx.app" className="text-blue-primary hover:underline">support@flashfx.app</a>. We will respond within one month.
          </p>
        </section>

        <section id="updates" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">10. Updates to This Privacy Policy</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            FlashFX reserves the right to update this Privacy Policy at any time. Material changes will be communicated via email or in-platform notification. Continued use of the Services constitutes acceptance of the updated Policy.
          </p>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            For questions or to exercise your rights, contact us at:<br />
            <strong>Email:</strong> <a href="mailto:support@flashfx.app" className="text-blue-primary hover:underline">support@flashfx.app</a><br />
            <strong>Service Name:</strong> FlashFX<br />
            <strong>Country of Operation:</strong> Italy
          </p>
        </section>
      </div>
    </Layout>
  );
}
