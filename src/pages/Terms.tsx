import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: '1. Agreement to Our Legal Terms', id: 'agreement' },
  { label: '2. Our Services', id: 'services' },
  { label: '3. Intellectual Property Rights', id: 'ip-rights' },
  { label: '4. User Representations', id: 'user-representations' },
  { label: '5. User Registration', id: 'user-registration' },
  { label: '6. Purchases and Payment', id: 'purchases' },
  { label: '7. Subscriptions', id: 'subscriptions' },
  { label: '8. Software', id: 'software' },
  { label: '9. Prohibited Activities', id: 'prohibited' },
  { label: '10. User Generated Contributions', id: 'ugc' },
  { label: '11. Contribution License', id: 'contribution-license' },
  { label: '12. Guidelines for Reviews', id: 'reviews' },
  { label: '13. Social Media', id: 'social-media' },
  { label: '14. Third-Party Websites and Content', id: 'third-party' },
  { label: '15. Services Management', id: 'management' },
  { label: '16. Privacy Policy', id: 'privacy' },
  { label: '17. Copyright Infringements', id: 'copyright' },
  { label: '18. Term and Termination', id: 'termination' },
  { label: '19. Modifications and Interruptions', id: 'modifications' },
  { label: '20. Governing Law', id: 'governing-law' },
  { label: '21. Dispute Resolution', id: 'dispute' },
  { label: '22. Corrections', id: 'corrections' },
  { label: '23. Disclaimer', id: 'disclaimer' },
  { label: '24. Limitations of Liability', id: 'liability' },
  { label: '25. Indemnification', id: 'indemnification' },
  { label: '26. User Data', id: 'user-data' },
  { label: '27. Electronic Communications, Transactions, and Signatures', id: 'electronic' },
  { label: '28. California Users and Residents', id: 'california' },
  { label: '29. Miscellaneous', id: 'miscellaneous' },
  { label: '30. Contact Us', id: 'contact' },
];

export default function Terms() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Terms and Conditions"
        description="FlashFX Service Agreement - Terms and Conditions"
        keywords="FlashFX, terms, conditions, legal, service agreement"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white mb-3">Terms and Conditions</h1>
          <p className="text-sm text-blue-muted">FlashFX Service Agreement</p>
          <p className="text-xs text-blue-muted mt-1">Last updated: July 31, 2025 · FlashFX, Italy</p>
        </div>

        <div id="agreement" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">1. Agreement to Our Legal Terms</h2>

          <p className="text-sm text-white leading-relaxed">
            We operate the website flashfx.app (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
          </p>

          <p className="text-sm text-white leading-relaxed">
            You can contact us by phone at 3475119760, email at <a href="mailto:support@flashfx.app" className="text-yellow-accent hover:text-[#fde047]">support@flashfx.app</a>
          </p>

          <p className="text-sm text-white leading-relaxed">
            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and FlashFX, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. If you do not agree with all of these legal terms, then you are expressly prohibited from using the services and you must discontinue use immediately.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by <a href="mailto:support@flashfx.app" className="text-yellow-accent hover:text-[#fde047]">support@flashfx.app</a>, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
          </p>

          <p className="text-sm text-white leading-relaxed">
            The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We recommend that you print a copy of these Legal Terms for your records.
          </p>
        </div>

        <div id="services" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">2. Our Services</h2>

          <p className="text-sm text-white leading-relaxed">
            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>

          <p className="text-sm text-white leading-relaxed">
            The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
          </p>
        </div>

        <div id="ip-rights" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">3. Intellectual Property Rights</h2>

          <h3 className="text-2xl font-semibold text-white">3.1 Our Intellectual Property</h3>

          <p className="text-sm text-white leading-relaxed">
            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
          </p>

          <p className="text-sm text-white leading-relaxed">
            Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
          </p>

          <p className="text-sm text-white leading-relaxed">
            The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">3.2 Your Use of Our Services</h3>

          <p className="text-sm text-white leading-relaxed">
            Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>access the Services; and</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>download or print a copy of any portion of the Content to which you have properly gained access,</span>
            </li>
          </ul>

          <p className="text-sm text-white leading-relaxed">
            solely for your personal, non-commercial use or internal business purpose.
          </p>

          <p className="text-sm text-white leading-relaxed">
            Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          </p>

          <p className="text-sm text-white leading-relaxed">
            If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <a href="mailto:support@flashfx.app" className="text-yellow-accent hover:text-[#fde047]">support@flashfx.app</a>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
          </p>

          <p className="text-sm text-white leading-relaxed">
            Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">3.3 Your Submissions and Contributions</h3>

          <p className="text-sm text-white leading-relaxed">
            Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
          </p>

          <p className="text-sm text-white leading-relaxed">
            <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
          </p>

          <p className="text-sm text-white leading-relaxed">
            <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You understand that Contributions may be viewable by other users of the Services and possibly through third-party websites.
          </p>

          <p className="text-sm text-white leading-relaxed">
            <strong>When you post Contributions, you grant us a license (including use of your name, trademarks, and logos):</strong> By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels.
          </p>

          <p className="text-sm text-white leading-relaxed">
            This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
          </p>

          <p className="text-sm text-white leading-relaxed">
            <strong>You are responsible for what you post or upload:</strong> By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>warrant and represent that your Submissions and/or Contributions do not constitute confidential information.</span>
            </li>
          </ul>

          <p className="text-sm text-white leading-relaxed">
            You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.
          </p>

          <p className="text-sm text-white leading-relaxed">
            <strong>We may remove or edit your Content:</strong> Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">3.4 Copyright Infringement</h3>

          <p className="text-sm text-white leading-relaxed">
            We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the "COPYRIGHT INFRINGEMENTS" section below.
          </p>
        </div>

        <div id="user-representations" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">4. User Representations</h2>

          <p className="text-sm text-white leading-relaxed">
            By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (6) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Services for any illegal or unauthorized purpose; and (8) your use of the Services will not violate any applicable law or regulation.
          </p>

          <p className="text-sm text-white leading-relaxed">
            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
          </p>
        </div>

        <div id="user-registration" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">5. User Registration</h2>

          <p className="text-sm text-white leading-relaxed">
            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
          </p>
        </div>

        <div id="purchases" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">6. Purchases and Payment</h2>

          <p className="text-sm text-white leading-relaxed">
            We accept the following forms of payment:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Visa</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Mastercard</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>PayPal</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>American Express</span>
            </li>
          </ul>

          <p className="text-sm text-white leading-relaxed">
            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Euros.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
          </p>
        </div>

        <div id="subscriptions" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">7. Subscriptions</h2>

          <h3 className="text-2xl font-semibold text-white">7.1 Billing and Renewal</h3>

          <p className="text-sm text-white leading-relaxed">
            Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle is monthly.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">7.2 Free Trial</h3>

          <p className="text-sm text-white leading-relaxed">
            We offer a 7-day free trial to new users who register with the Services. The account will be charged according to the user's chosen subscription at the end of the free trial.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">7.3 Cancellation</h3>

          <p className="text-sm text-white leading-relaxed">
            You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <a href="mailto:support@flashfx.app" className="text-yellow-accent hover:text-[#fde047]">support@flashfx.app</a>.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">7.4 Fee Changes</h3>

          <p className="text-sm text-white leading-relaxed">
            We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
          </p>
        </div>

        <div id="software" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">8. Software</h2>

          <p className="text-sm text-white leading-relaxed">
            We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ("EULA"), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided "AS IS" without warranty of any kind, either express or implied, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.
          </p>
        </div>

        <div id="prohibited" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">9. Prohibited Activities</h2>

          <p className="text-sm text-white leading-relaxed">
            You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
          </p>

          <p className="text-sm text-white leading-relaxed">
            As a user of the Services, you agree not to:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Use any information obtained from the Services in order to harass, abuse, or harm another person.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Make improper use of our support services or submit false reports of abuse or misconduct.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Use the Services in a manner inconsistent with any applicable laws or regulations.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Engage in unauthorized framing of or linking to the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Delete the copyright or other proprietary rights notice from any Content.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Attempt to impersonate another user or person or use the username of another user.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Use a buying agent or purchasing agent to make purchases on the Services.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Reverse engineering</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Reselling or redistribution</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Automated use (use bots and scripts)</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Any unlawful use</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Using content that violates intellectual property (copyright)</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Create deep fakes, or any harmful content</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Attempting to bypass security servers of FlashFX or any other company through flashfx</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Excessive use of network infrastructure (server overload)</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>User data mining and collection</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Attempting to bypass payment systems</span>
            </li>
          </ul>
        </div>

        <div id="ugc" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">10. User Generated Contributions</h2>

          <p className="text-sm text-white leading-relaxed">
            The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
          </p>

          <ul className="space-y-3 text-white text-sm ml-6">
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions are not false, inaccurate, or misleading.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not violate any applicable law, regulation, or rule.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not violate the privacy or publicity rights of any third party.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-yellow-accent mt-0.5">•</span>
              <span>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</span>
            </li>
          </ul>

          <p className="text-sm text-white leading-relaxed">
            Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
          </p>
        </div>

        <div id="contribution-license" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">11. Contribution License</h2>

          <p className="text-sm text-white leading-relaxed">
            By posting your Contributions to any part of the Services or making Contributions accessible to the Services by linking your account from the Services to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.
          </p>

          <p className="text-sm text-white leading-relaxed">
            This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
          </p>
        </div>

        <div id="reviews" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">12. Guidelines for Reviews</h2>

          <p className="text-sm text-white leading-relaxed">
            We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
          </p>
        </div>

        <div id="social-media" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">13. Social Media</h2>

          <p className="text-sm text-white leading-relaxed">
            As part of the functionality of the Services, you may link your account with online accounts you have with third-party service providers (each such account, a "Third-Party Account") by either: (1) providing your Third-Party Account login information through the Services; or (2) allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.
          </p>

          <p className="text-sm text-white leading-relaxed">
            By granting us access to any Third-Party Accounts, you understand that (1) we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the "Social Network Content") so that it is available on and through the Services via your account, including without limitation any friend lists and (2) we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account.
          </p>

          <p className="text-sm text-white leading-relaxed">
            Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Services. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Services.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You will have the ability to disable the connection between your account on the Services and your Third-Party Accounts at any time. Please note that your relationship with the third-party service providers associated with your third-party accounts is governed solely by your agreement(s) with such third-party service providers.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We make no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Services.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You can deactivate the connection between the Services and your Third-Party Account by contacting us using the contact information below or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.
          </p>
        </div>

        <div id="third-party" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">14. Third-Party Websites and Content</h2>

          <p className="text-sm text-white leading-relaxed">
            The Services may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content.
          </p>

          <p className="text-sm text-white leading-relaxed">
            Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party.
          </p>

          <p className="text-sm text-white leading-relaxed">
            You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
          </p>
        </div>

        <div id="management" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">15. Services Management</h2>

          <p className="text-sm text-white leading-relaxed">
            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
          </p>
        </div>

        <div id="privacy" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">16. Privacy Policy</h2>

          <p className="text-sm text-white leading-relaxed">
            We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in Germany. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Germany, then through your continued use of the Services, you are transferring your data to Germany, and you expressly consent to have your data transferred to and processed in Germany. Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children's Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Services as quickly as is reasonably practical.
          </p>
        </div>

        <div id="copyright" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">17. Copyright Infringements</h2>

          <p className="text-sm text-white leading-relaxed">
            We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.
          </p>
        </div>

        <div id="termination" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">18. Term and Termination</h2>

          <p className="text-sm text-white leading-relaxed">
            These Legal Terms shall remain in full force and effect while you use the Services. Without limiting any other provision of these legal terms, we reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the services (including blocking certain IP addresses), to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these legal terms or of any applicable law or regulation. We may terminate your use or participation in the services or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.
          </p>

          <p className="text-sm text-white leading-relaxed">
            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
          </p>
        </div>

        <div id="modifications" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">19. Modifications and Interruptions</h2>

          <p className="text-sm text-white leading-relaxed">
            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
          </p>

          <p className="text-sm text-white leading-relaxed">
            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
          </p>
        </div>

        <div id="governing-law" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">20. Governing Law</h2>

          <p className="text-sm text-white leading-relaxed">
            These Legal Terms are governed by and interpreted following the laws of Italy, and the use of the United Nations Convention of Contracts for the International Sales of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. FlashFX and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Lazio, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Italy, or in the EU country in which you reside.
          </p>
        </div>

        <div id="dispute" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">21. Dispute Resolution</h2>

          <h3 className="text-2xl font-semibold text-white">21.1 Informal Negotiations</h3>

          <p className="text-sm text-white leading-relaxed">
            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us (individually, a "Party" and collectively, the "Parties"), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">21.2 Binding Arbitration</h3>

          <p className="text-sm text-white leading-relaxed">
            Any dispute arising from the relationships between the Parties to these Legal Terms shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be Rome, Italy. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of Italy.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">21.3 Restrictions</h3>

          <p className="text-sm text-white leading-relaxed">
            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">21.4 Exceptions to Informal Negotiations and Arbitration</h3>

          <p className="text-sm text-white leading-relaxed">
            The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
          </p>
        </div>

        <div id="corrections" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">22. Corrections</h2>

          <p className="text-sm text-white leading-relaxed">
            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
          </p>
        </div>

        <div id="disclaimer" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">23. Disclaimer</h2>

          <p className="text-sm text-white leading-relaxed">
            The services are provided on an as-is and as-available basis. You agree that your use of the services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We make no warranties or representations about the accuracy or completeness of the services' content or the content of any websites or mobile applications linked to the services and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the services, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the services, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the services by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the services. We do not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services, any hyperlinked website, or any website or mobile application featured in any banner or other advertising, and we will not be a party to or in any way be responsible for monitoring any transaction between you and any third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate.
          </p>
        </div>

        <div id="liability" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">24. Limitations of Liability</h2>

          <p className="text-sm text-white leading-relaxed">
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages. Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the lesser of the amount paid, if any, by you to us during the six (6) month period prior to any cause of action arising or $100.00 USD. Certain US state laws and international laws do not allow limitations on implied warranties or the exclusion or limitation of certain damages. If these laws apply to you, some or all of the above disclaimers or limitations may not apply to you, and you may have additional rights.
          </p>
        </div>

        <div id="indemnification" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">25. Indemnification</h2>

          <p className="text-sm text-white leading-relaxed">
            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
          </p>
        </div>

        <div id="user-data" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">26. User Data</h2>

          <p className="text-sm text-white leading-relaxed">
            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
          </p>
        </div>

        <div id="electronic" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">27. Electronic Communications, Transactions, and Signatures</h2>

          <p className="text-sm text-white leading-relaxed">
            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the services. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
          </p>
        </div>

        <div id="california" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">28. California Users and Residents</h2>

          <p className="text-sm text-white leading-relaxed">
            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
          </p>
        </div>

        <div id="miscellaneous" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">29. Miscellaneous</h2>

          <p className="text-sm text-white leading-relaxed">
            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
          </p>
        </div>

        <div id="contact" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">30. Contact Us</h2>

          <p className="text-sm text-white leading-relaxed">
            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
          </p>

          <div className="text-sm text-white leading-relaxed">
            <p className="font-medium">FlashFX</p>
            <p>
              Email: <a href="mailto:support@flashfx.app" className="text-yellow-accent hover:text-[#fde047]">support@flashfx.app</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
