import { ExternalLink, Zap, FlaskConical, Users, Shield } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const perks = [
  {
    icon: Zap,
    title: 'Ultra Features, Free',
    description: 'Get full access to Ultra-tier features at no cost for the duration of your early access membership.',
  },
  {
    icon: FlaskConical,
    title: 'Test Before Anyone Else',
    description: 'Be the first to try new features as they are developed. Your feedback directly shapes what ships.',
  },
  {
    icon: Users,
    title: 'Direct Line to the Team',
    description: 'Communicate directly with the FlashFX development team through a dedicated Discord channel.',
  },
];

const requirements = [
  { label: 'Age', value: 'Must be 18 years or older' },
  { label: 'Discord', value: 'An active Discord account is required' },
  { label: 'Selection', value: 'Access is granted on a case-by-case basis' },
];

export default function EarlyAccess() {
  return (
    <Layout>
      <SEO
        title="Early Access"
        description="Apply for early access to FlashFX. Get Ultra features for free and test new functionality before anyone else."
        keywords="FlashFX, early access, beta, Ultra, free"
      />

      <div className="max-w-3xl mx-auto space-y-20 pt-8 pb-16">

        <div className="text-center space-y-4">
          <div className="text-yellow-accent text-[10px] font-medium uppercase tracking-widest">
            Limited Program
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Early Access
          </h1>
          <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            A small group of selected individuals gets free Ultra access and the chance to shape FlashFX before it reaches the public.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {perks.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-3 hover:border-white/20 transition-colors"
            >
              <div className="w-8 h-8 rounded-md bg-yellow-accent/10 flex items-center justify-center">
                <Icon size={16} className="text-yellow-accent" />
              </div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-xs font-medium text-white/40 uppercase tracking-widest">Requirements</h2>
          <div className="border border-white/10 rounded-lg divide-y divide-white/10 overflow-hidden">
            {requirements.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-6 py-4">
                <span className="text-xs text-white/40 uppercase tracking-wide">{label}</span>
                <span className="text-xs text-white/80">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6 text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Shield size={14} className="text-yellow-accent" />
              <span className="text-xs text-yellow-accent font-medium uppercase tracking-widest">Selected Individuals Only</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Apply for Early Access</h2>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm mx-auto">
              Early access is not publicly available. Submit a request through the form below and the team will review your application.
            </p>
          </div>

          <a
            href="https://forms.gle/Z9ccNnbu9MwvSsAk9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-accent/90 text-black font-semibold text-xs py-3 px-8 rounded-md transition-colors"
          >
            Submit a Request
            <ExternalLink size={12} />
          </a>

          <p className="text-[10px] text-white/30">
            Applications are reviewed manually. Not all requests will be approved.
          </p>
        </div>

      </div>
    </Layout>
  );
}
