import { ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { TableOfContentsItem } from '../data/navigation';

const toc: TableOfContentsItem[] = [
  { id: 'key-facts', label: 'Key Facts at a Glance' },
  { id: 'two-ways-to-earn', label: 'Two Ways to Earn' },
  { id: 'approved-platforms', label: 'Approved Platforms' },
  { id: 'view-thresholds', label: 'View Thresholds' },
  { id: 'compensation-rates', label: 'Compensation Rates' },
  { id: 'referral-program', label: 'Referral Program Details' },
  { id: 'eligibility', label: 'Eligibility Requirements' },
  { id: 'content-rules', label: 'Content Rules' },
  { id: 'prohibited', label: 'What You Cannot Do' },
  { id: 'payment-terms', label: 'Payment Terms' },
  { id: 'program-modifications', label: 'Program Modifications' },
  { id: 'suspension-termination', label: 'Suspension & Termination' },
  { id: 'apply', label: 'Apply' },
];

export default function Creators() {
  return (
    <Layout tableOfContents={toc}>
      <SEO
        title="FlashFX Creator Program"
        description="Earn money creating content about FlashFX. Performance-based partnership with view-based payments and referral commissions."
        keywords="FlashFX, creator program, FCPA, earn, content creator"
      />

      <div className="max-w-4xl mx-auto space-y-16">

        {/* Hero */}
        <div className="space-y-4 pt-2">
          <div className="text-[10px] font-medium uppercase tracking-widest text-yellow-accent/70">
            Partnership Program
          </div>
          <h1 className="text-4xl font-semibold text-white leading-tight">
            FlashFX Creator Program
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            The FlashFX Creator Program (FCPA) is a performance-based partnership that lets independent content creators earn money by making content about FlashFX. You create, you post, you earn. No upfront cost, no exclusivity, no employment relationship — just a straightforward deal: if your content performs, you get paid.
          </p>

          <a
            href="https://forms.gle/6CCmGSyoQJWkfJ5M9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-accent text-black font-semibold text-sm px-6 py-3 rounded-md hover:bg-yellow-accent/90 transition-colors mt-2"
          >
            Apply to the Creator Program
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Key Facts */}
        <div className="space-y-4">
          <h2 id="key-facts" className="text-xl font-semibold text-white">Key Facts at a Glance</h2>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Program type', 'Independent contractor, performance-based'],
                  ['Exclusivity', 'Non-exclusive — you can work with other brands'],
                  ['Approved platforms', 'X (Twitter), Instagram Reels, YouTube'],
                  ['Referral commission rate', '30% of first subscription payment'],
                  ['Minimum posting requirement', '1 qualifying post per week'],
                  ['Payment cycle', 'Monthly, processed within 45 days of month end'],
                  ['Currency', 'USD'],
                  ['Effective date', 'February 1, 2026'],
                ].map(([detail, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white/50 font-medium w-1/3 border-b border-white/5">{detail}</td>
                    <td className="px-4 py-3 text-white/80 border-b border-white/5">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Two ways to earn */}
        <div className="space-y-4">
          <h2 id="two-ways-to-earn" className="text-xl font-semibold text-white">Two Ways to Earn</h2>
          <p className="text-white/50 text-sm">Both streams are independent. You can earn from one, or both, in the same month.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-2">
              <div className="text-yellow-accent text-xs font-semibold uppercase tracking-widest">Stream 1</div>
              <h3 className="text-white font-semibold">View-Based Compensation</h3>
              <p className="text-white/50 text-sm leading-relaxed">Earn per thousand views on qualifying content. Rates vary by platform and content type.</p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-2">
              <div className="text-yellow-accent text-xs font-semibold uppercase tracking-widest">Stream 2</div>
              <h3 className="text-white font-semibold">Referral Commission</h3>
              <p className="text-white/50 text-sm leading-relaxed">Earn 30% of subscription revenue from users you refer via your unique referral link.</p>
            </div>
          </div>
        </div>

        {/* Approved Platforms */}
        <div className="space-y-4">
          <h2 id="approved-platforms" className="text-xl font-semibold text-white">Approved Platforms</h2>
          <p className="text-white/50 text-sm">View-based compensation is only available for content published on the following platforms. Referral links work anywhere.</p>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider w-1/3">Platform</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Eligible Content Types</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['X (formerly Twitter)', 'Posts, videos, threads, and multimedia content featuring FlashFX'],
                  ['Instagram', 'Reels only (Stories, standard posts, IGTV, and other formats are not eligible)'],
                  ['YouTube', 'YouTube Shorts, standard videos (FlashFX as secondary element), and long-form tutorials (FlashFX as primary subject, minimum 8 minutes)'],
                ].map(([platform, types], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white font-medium border-b border-white/5">{platform}</td>
                    <td className="px-4 py-3 text-white/60 border-b border-white/5">{types}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View Thresholds */}
        <div className="space-y-4">
          <h2 id="view-thresholds" className="text-xl font-semibold text-white">View Thresholds</h2>
          <p className="text-white/50 text-sm">Content must reach the minimum view count within 30 days of publication. If the threshold is not met, no views count. If it is met, every view counts — including those before the threshold.</p>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Platform</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Minimum Views Required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Instagram Reels', '4,000 views'],
                  ['YouTube (all formats)', '1,000 views'],
                  ['X (Twitter)', '5,000 views'],
                ].map(([platform, threshold], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white border-b border-white/5">{platform}</td>
                    <td className="px-4 py-3 text-white/60 border-b border-white/5">{threshold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/70">Examples</h3>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Example</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Views</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Threshold</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Eligible Views</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Compensation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Instagram Reel', '3,850', '4,000', '0', '$0.00'],
                    ['Instagram Reel', '6,200', '4,000', '6,200', '$1.55'],
                    ['YouTube video', '15,000', '1,000', '15,000', '$15.00 (secondary) or $30.00 (primary)'],
                    ['X post', '4,900', '5,000', '0', '$0.00'],
                    ['X post', '8,500', '5,000', '8,500', '$0.85'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 border-b border-white/5 ${j === 0 ? 'text-white/80' : j === 4 ? 'text-yellow-accent font-medium' : 'text-white/50'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Compensation Rates */}
        <div className="space-y-4">
          <h2 id="compensation-rates" className="text-xl font-semibold text-white">Compensation Rates</h2>
          <p className="text-white/50 text-sm">All rates are in USD. Formula: <code className="bg-white/10 px-1.5 py-0.5 rounded text-white/70 font-mono text-xs">Compensation = (Eligible Views ÷ 1,000) × CPM Rate</code></p>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Platform</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Content Type</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">CPM Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['X (Twitter)', 'All post types', '$0.10 per 1,000 views'],
                  ['Instagram', 'Reels only', '$0.25 per 1,000 views'],
                  ['YouTube', 'FlashFX as secondary element (less than 50% of runtime)', '$1.00 per 1,000 views'],
                  ['YouTube', 'FlashFX as primary subject (8+ minutes, more than 50% of runtime)', '$2.00 per 1,000 views'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white border-b border-white/5">{row[0]}</td>
                    <td className="px-4 py-3 text-white/60 border-b border-white/5">{row[1]}</td>
                    <td className="px-4 py-3 text-yellow-accent font-medium border-b border-white/5">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold text-white">YouTube Classification</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider">Secondary Element,$1.00 CPM</div>
                <ul className="text-white/50 text-xs space-y-1 leading-relaxed">
                  <li>FlashFX shown or mentioned meaningfully</li>
                  <li>Less than 50% of runtime focused on FlashFX</li>
                  <li>Broader topic with FlashFX as one component</li>
                </ul>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-yellow-accent/70 font-medium uppercase tracking-wider">Primary Subject,$2.00 CPM</div>
                <ul className="text-white/50 text-xs space-y-1 leading-relaxed">
                  <li>Minimum 8 minutes long</li>
                  <li>More than 50% of runtime focused on FlashFX</li>
                  <li>Title, description, and thumbnail reflect FlashFX as main subject</li>
                  <li>Meaningful educational or demonstrative value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Referral Program */}
        <div className="space-y-4">
          <h2 id="referral-program" className="text-xl font-semibold text-white">Referral Program Details</h2>
          <p className="text-white/50 text-sm">You earn <span className="text-yellow-accent font-semibold">30%</span> of the subscription revenue generated by each new user who signs up through your referral link. This is a one-time commission per customer, applied to their first billing period.</p>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/70">Attribution Requirements</h3>
            <p className="text-white/40 text-xs">For a sale to count, all of the following must be true:</p>
            <ol className="text-white/50 text-sm space-y-1 list-decimal list-inside leading-relaxed">
              <li>The customer clicked your unique referral link</li>
              <li>The customer created a new FlashFX account</li>
              <li>The customer completed a paid subscription within 30 days of clicking</li>
              <li>The customer is new to FlashFX (no active subscription in the past 90 days)</li>
              <li>The transaction is not excluded under the rules below</li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/70">Excluded Transactions</h3>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider w-1/3">Exclusion Type</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Self-referrals', 'Any subscription purchased by you, your employees, or entities you control'],
                    ['Related party transactions', 'Family members, friends, or business associates where the purchase appears arranged primarily to generate commission'],
                    ['Fraudulent transactions', 'Any transaction FlashFX determines to be invalid or abusive'],
                    ['Refunded purchases', 'Subscriptions that are refunded or cancelled during a money-back period'],
                    ['Chargebacks', 'Any transaction subject to a payment dispute or reversal'],
                    ['Promotional accounts', 'Accounts created with promo codes resulting in zero or reduced payment to FlashFX'],
                    ['Renewal commissions', 'Recurring renewals from existing subscribers (only initial subscriptions qualify)'],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="px-4 py-3 text-white font-medium border-b border-white/5">{row[0]}</td>
                      <td className="px-4 py-3 text-white/50 border-b border-white/5">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="space-y-4">
          <h2 id="eligibility" className="text-xl font-semibold text-white">Eligibility Requirements</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">To Be Admitted</h3>
              <ul className="text-white/50 text-sm space-y-1.5 leading-relaxed">
                <li>Be at least 18 years old</li>
                <li>Have full legal capacity to enter binding contracts</li>
                <li>Maintain at least one active account in good standing on an approved platform</li>
                <li>Provide accurate contact information, payment details, and tax documentation</li>
                <li>No history of fraudulent activity or IP infringement</li>
                <li>Not be located in or subject to comprehensive EU, US, or UN sanctions</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">Weekly Activity Requirement</h3>
              <p className="text-white/50 text-sm leading-relaxed">Once accepted, you must publish at least one qualifying piece of FlashFX content every 7 days. Content must:</p>
              <ul className="text-white/50 text-sm space-y-1.5 leading-relaxed">
                <li>Be on an approved platform</li>
                <li>Feature FlashFX in a meaningful, substantive way</li>
                <li>Be original (not a repost from a previous week)</li>
                <li>Remain publicly accessible for at least 30 days</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-white/70">Approved Leaves of Absence</h3>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Leave Type</th>
                    <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Maximum Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Medical circumstances (you or immediate family)', '30 days per calendar year'],
                    ['Pre-scheduled vacation or personal leave', '14 consecutive days, 30 days total per year'],
                    ['Technical issues beyond your control', '7 days'],
                    ['Other extraordinary circumstances', "At FlashFX's discretion"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                      <td className="px-4 py-3 text-white/70 border-b border-white/5">{row[0]}</td>
                      <td className="px-4 py-3 text-white/50 border-b border-white/5">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Content Rules */}
        <div className="space-y-4">
          <h2 id="content-rules" className="text-xl font-semibold text-white">Content Rules</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">What Your Content Must Do</h3>
              <ul className="text-white/50 text-sm space-y-1.5 leading-relaxed">
                <li>Accurately represent FlashFX features, capabilities, limitations, and pricing</li>
                <li>Be based on your actual, genuine use of the software</li>
                <li>Clearly distinguish factual statements from personal opinions</li>
                <li>Disclose program participation where required by law or platform policy</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">Quality Standards</h3>
              <ul className="text-white/50 text-sm space-y-1.5 leading-relaxed">
                <li>Clear visuals and audible audio</li>
                <li>Professional presentation appropriate to the platform</li>
                <li>Coherent and understandable structure</li>
                <li>Proper grammar and language</li>
                <li>No excessive technical errors or production flaws</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What You Cannot Do */}
        <div className="space-y-4">
          <h2 id="prohibited" className="text-xl font-semibold text-white">What You Cannot Do</h2>
          <p className="text-white/50 text-sm">The following activities are strictly prohibited and constitute material breaches of the agreement:</p>
          <div className="space-y-3">
            {[
              {
                title: 'Fraud & Artificial Inflation',
                items: [
                  'Purchasing views, likes, followers, or any engagement metric from third-party services',
                  'Using bots or automated scripts to generate views, clicks, or referrals',
                  'Participating in engagement pods, view exchange programs, or like-for-like schemes',
                  'Repeatedly self-viewing your own content to inflate metrics',
                  'Offering payment or prizes in exchange for viewing content or clicking referral links',
                ],
              },
              {
                title: 'Referral Manipulation',
                items: [
                  'Using deceptive tactics to induce clicks on referral links',
                  'Placing tracking cookies without user consent',
                  'Cookie stuffing or URL manipulation to falsely attribute sales',
                ],
              },
              {
                title: 'Content Violations',
                items: [
                  'Making false, misleading, or unsubstantiated claims about FlashFX',
                  'Guaranteeing specific results or income that users will achieve',
                  'Disparaging FlashFX, its products, its employees, or other creators',
                  'Publishing illegal material, hate speech, or sexually explicit content',
                  'Promoting direct competitors in a way that negatively impacts FlashFX',
                ],
              },
              {
                title: 'Intellectual Property',
                items: [
                  'Using FlashFX trademarks in your brand name, domain, social handle, or product names',
                  'Creating a false impression that you are FlashFX or that FlashFX operates your content',
                  'Registering trademarks identical or confusingly similar to FlashFX\'s',
                ],
              },
            ].map((section, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/10 rounded-lg p-4 space-y-2">
                <h3 className="text-sm font-semibold text-white/80">{section.title}</h3>
                <ul className="text-white/40 text-sm space-y-1 leading-relaxed list-disc list-inside">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="space-y-4">
          <h2 id="payment-terms" className="text-xl font-semibold text-white">Payment Terms</h2>
          <p className="text-white/50 text-sm">Earnings are calculated monthly. FlashFX processes payment within 45 days of month end after a 15–30 day verification period. Example: January earnings are paid by March 15.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Payment Methods</h3>
              <ul className="text-white/50 text-sm space-y-1 leading-relaxed">
                <li>Bank wire transfer</li>
                <li>Electronic funds transfer (EFT) or ACH</li>
                <li>PayPal or similar electronic payment services</li>
                <li>Other methods agreed upon in writing</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/70">Minimum Threshold</h3>
              <p className="text-white/50 text-sm leading-relaxed">No minimum threshold is currently in effect. FlashFX reserves the right to introduce one with 30 days' written notice. Earnings below any future minimum roll over until met.</p>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4 space-y-2">
            <h3 className="text-sm font-semibold text-white">Tax Obligations</h3>
            <p className="text-white/50 text-sm leading-relaxed">You are solely responsible for all taxes arising from your earnings. FlashFX does not withhold taxes unless required by law. You must provide requested tax documentation, including VAT numbers for EU-based creators and W-8BEN forms for non-EU creators. All compensation is calculated and paid in USD.</p>
          </div>
        </div>

        {/* Program Modifications */}
        <div className="space-y-4">
          <h2 id="program-modifications" className="text-xl font-semibold text-white">Program Modifications</h2>
          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Change Type</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Minimum Notice</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Compensation rate changes', '60 days'],
                  ['Threshold requirement changes', '30 days'],
                  ['Platform additions or removals', '14 days (except emergencies)'],
                  ['Other material changes', 'Reasonable advance notice'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white/70 border-b border-white/5">{row[0]}</td>
                    <td className="px-4 py-3 text-white/50 border-b border-white/5">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-white/40 text-xs leading-relaxed">All changes apply prospectively. Content published before the effective date is compensated at the rate in effect when it was published. Continuing to participate after a change takes effect constitutes acceptance.</p>
        </div>

        {/* Suspension & Termination */}
        <div className="space-y-4">
          <h2 id="suspension-termination" className="text-xl font-semibold text-white">Suspension & Termination</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">Termination by FlashFX</h3>
              <div className="space-y-2">
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">For cause (immediate, no notice)</p>
                <p className="text-white/50 text-xs leading-relaxed">Fraudulent activity, material breach, 4+ consecutive weeks missed without leave, prohibited content, or conduct causing legal or reputational harm.</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider mt-3">Without cause</p>
                <p className="text-white/50 text-xs leading-relaxed">30 days' written notice. You continue to earn normally through the notice period.</p>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-lg p-5 space-y-3">
              <h3 className="text-sm font-semibold text-white">Termination by You</h3>
              <p className="text-white/50 text-sm leading-relaxed">You may exit at any time with 14 days' written notice. All verified earnings through your termination date are paid under normal payment timelines.</p>
            </div>
          </div>

          <div className="border border-white/10 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Termination Type</th>
                  <th className="px-4 py-3 text-left text-white/40 font-medium text-xs uppercase tracking-wider">Unpaid Earnings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Terminated by FlashFX without cause', 'All verified earnings paid under normal terms'],
                  ['Terminated by you', 'All verified earnings through termination date are paid'],
                  ['Terminated for cause (fraud)', 'FlashFX may forfeit unpaid earnings and pursue clawback of paid amounts'],
                  ['Terminated for cause (other breach)', 'FlashFX may pay compliant earnings and forfeit earnings tied to the breach'],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                    <td className="px-4 py-3 text-white/70 border-b border-white/5">{row[0]}</td>
                    <td className="px-4 py-3 text-white/50 border-b border-white/5">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="border border-yellow-accent/20 bg-yellow-accent/[0.04] rounded-lg p-8 space-y-4">
          <h2 id="apply" className="text-2xl font-semibold text-white">Apply</h2>
          <p className="text-white/60 text-sm leading-relaxed">The FlashFX Creator Program is currently accepting applications. The application is reviewed manually and you will be contacted if you are accepted.</p>
          <div className="space-y-2 text-white/50 text-sm">
            <p className="font-medium text-white/70">Before applying, confirm you meet these requirements:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>You are 18 or older</li>
              <li>You have an active account in good standing on at least one approved platform (X, Instagram, or YouTube)</li>
              <li>You are prepared to post at least one qualifying piece of FlashFX content every week</li>
            </ul>
          </div>
          <div className="pt-2">
            <a
              href="https://forms.gle/6CCmGSyoQJWkfJ5M9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-accent text-black font-semibold text-sm px-8 py-3 rounded-md hover:bg-yellow-accent/90 transition-colors"
            >
              Apply to the FlashFX Creator Program
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-white/30 text-xs">If you have questions before applying, reach out through the official support channels.</p>
        </div>

        {/* Footer note */}
        <div className="border-t border-white/5 pt-6">
          <p className="text-white/20 text-xs leading-relaxed">
            FlashFX Creator Program Agreement, Version 1.0, effective February 1, 2026. FlashFX S.r.l., Italy. This documentation page summarizes the key terms of the agreement and is provided for informational purposes. The full FCPA agreement governs in all cases.
          </p>
        </div>

      </div>
    </Layout>
  );
}
