import { Fragment } from 'react';
import { Check, Minus, Zap, Users, Star } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

type CellValue = 'yes' | 'no' | string;

interface Feature {
  label: string;
  free: CellValue;
  ultra: CellValue;
  teams: CellValue;
}

interface Section {
  title: string;
  features: Feature[];
}

const sections: Section[] = [
  {
    title: 'General',
    features: [
      { label: 'Projects', free: 'Unlimited', ultra: 'Unlimited', teams: 'Unlimited' },
      { label: 'Cloud storage', free: '500 MB', ultra: '20 GB', teams: '20 GB' },
      { label: 'Export formats (MP4 / GIF / WebM / SVG)', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Priority support', free: 'no', ultra: 'yes', teams: 'yes' },
    ],
  },
  {
    title: 'Main Editor',
    features: [
      { label: 'Shape & vector tools', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Text & typography', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Image import & editing', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Animation timeline', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Keyframe system & easing curves', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Groups / layers & masking', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Blend modes & opacity', free: 'yes', ultra: 'yes', teams: 'yes' },
      { label: 'Custom fonts', free: 'yes', ultra: 'yes', teams: 'yes' },
    ],
  },
  {
    title: '3D Features',
    features: [
      { label: '3D primitives', free: '2 shapes', ultra: 'All shapes', teams: 'All shapes' },
      { label: 'Advanced materials (PBR / toon / wireframe)', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: '3D model import (GLB / OBJ / FBX / STL)', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'Texture maps (diffuse / normal / roughness)', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'HDRI lighting & environment', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: '3D animation in timeline', free: 'no', ultra: 'yes', teams: 'yes' },
    ],
  },
  {
    title: 'AI Features',
    features: [
      { label: 'AI credits', free: 'no', ultra: '500 / month', teams: '2000 / month' },
      { label: 'AI motion graphics', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'AI assistant', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'AI image search', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'AI image generation', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'AI background remover', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'AI sound generator', free: 'no', ultra: 'yes', teams: 'yes' },
    ],
  },
  {
    title: 'Teams & Collaboration',
    features: [
      { label: 'Team workspace', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Real-time collaboration', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Shared asset library', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Role management (Admin / Editor / Viewer)', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Version history', free: '30 days', ultra: '90 days', teams: '90 days' },
      { label: 'Comments & annotations', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Brand kit', free: 'no', ultra: 'yes', teams: 'yes' },
      { label: 'Team templates', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Guest access', free: 'no', ultra: 'no', teams: 'yes' },
      { label: 'Admin dashboard', free: 'no', ultra: 'yes', teams: 'yes' },
    ],
  },
];

function Cell({ value, col }: { value: CellValue; col: 'free' | 'ultra' | 'teams' }) {
  const isUltra = col === 'ultra';
  if (value === 'yes') {
    return (
      <div className="flex justify-center">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isUltra ? 'bg-yellow-accent/15' : 'bg-white/8'}`}>
          <Check className={`w-3 h-3 ${isUltra ? 'text-yellow-accent' : 'text-white/60'}`} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === 'no') {
    return (
      <div className="flex justify-center">
        <Minus className="w-4 h-4 text-white/18" strokeWidth={2} />
      </div>
    );
  }
  return (
    <div className={`text-center text-[12px] font-medium leading-tight ${isUltra ? 'text-yellow-accent' : 'text-white/55'}`}>
      {value}
    </div>
  );
}

const plans = [
  {
    key: 'free' as const,
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Start creating with the full editor and core tools.',
    icon: Star,
    cta: 'Get started free',
    ctaHref: 'https://editor.flashfx.app',
    highlight: false,
    badge: null,
  },
  {
    key: 'ultra' as const,
    name: 'Ultra',
    price: '$29',
    period: '/ month',
    description: 'Unlock 3D, AI tools, and the full creative toolkit.',
    icon: Zap,
    cta: 'Start Ultra',
    ctaHref: 'https://editor.flashfx.app',
    highlight: true,
    badge: 'Most popular',
  },
  {
    key: 'teams' as const,
    name: 'Teams',
    price: '$39',
    period: '/ seat / month',
    description: 'Collaborate at scale with shared workspaces and admin tools.',
    icon: Users,
    cta: 'Start Teams',
    ctaHref: 'https://editor.flashfx.app',
    highlight: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <Layout wide>
      <SEO
        title="Pricing"
        description="Compare FlashFX plans,Free, Ultra, and Teams. Find the right plan for your creative workflow."
        keywords="FlashFX, pricing, plans, Free, Ultra, Teams, comparison"
      />

      <div className="max-w-6xl mx-auto space-y-20 pb-24">

        <div className="text-center space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-accent/10 border border-yellow-accent/20">
            <span className="text-yellow-accent text-[10px] font-semibold uppercase tracking-widest">Plans & Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            The right plan for every creator.
          </h1>
          <p className="text-white/50 text-sm max-w-xl mx-auto leading-relaxed">
            Start free and upgrade when you need more power. Every plan includes the full editor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.key}
                className={`relative rounded-xl p-6 flex flex-col gap-6 transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-yellow-accent/5 border border-yellow-accent/40 shadow-[0_0_40px_rgba(250,204,21,0.08)]'
                    : 'bg-white/[0.03] border border-white/8 hover:border-white/14'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-yellow-accent text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${plan.highlight ? 'bg-yellow-accent/15' : 'bg-white/6'}`}>
                      <Icon className={`w-4 h-4 ${plan.highlight ? 'text-yellow-accent' : 'text-white/50'}`} />
                    </div>
                    <span className="text-base font-semibold text-white">{plan.name}</span>
                  </div>
                  <p className="text-[12px] text-white/45 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-[12px] text-white/35 leading-tight">{plan.period}</span>
                </div>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center text-[13px] font-semibold py-2.5 px-5 rounded-lg transition-all duration-150 no-underline ${
                    plan.highlight
                      ? 'bg-yellow-accent text-black hover:bg-yellow-accent/90'
                      : 'bg-white/8 text-white hover:bg-white/12 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className="space-y-0">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white">Full feature comparison</h2>
            <p className="text-sm text-white/40 mt-1">Everything included in each plan, side by side.</p>
          </div>

          <div className="rounded-xl border border-white/8 overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-4 px-5 w-[52%]">
                    <span className="text-[11px] font-semibold text-white/30 uppercase tracking-widest">Feature</span>
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.key} className={`py-4 px-4 text-center w-[16%] ${plan.highlight ? 'bg-yellow-accent/5' : ''}`}>
                      <span className={`text-[13px] font-semibold ${plan.highlight ? 'text-yellow-accent' : 'text-white/70'}`}>
                        {plan.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, si) => (
                  <Fragment key={`section-group-${si}`}>
                    <tr key={`section-${si}`} className="border-t border-white/6">
                      <td colSpan={4} className="px-5 py-3 bg-white/[0.025]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                          {section.title}
                        </span>
                      </td>
                    </tr>
                    {section.features.map((feature, fi) => (
                      <tr
                        key={`${si}-${fi}`}
                        className="border-t border-white/[0.05] hover:bg-white/[0.02] transition-colors duration-100"
                      >
                        <td className="py-3.5 px-5">
                          <span className="text-[13px] text-white/65">{feature.label}</span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <Cell value={feature.free} col="free" />
                        </td>
                        <td className="py-3.5 px-4 bg-yellow-accent/[0.025]">
                          <Cell value={feature.ultra} col="ultra" />
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <Cell value={feature.teams} col="teams" />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}

                <tr className="border-t border-white/10 bg-white/[0.02]">
                  <td className="py-5 px-5">
                    <span className="text-[13px] font-semibold text-white/80">Price</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[13px] font-semibold text-white/60">$0</span>
                  </td>
                  <td className="py-5 px-4 text-center bg-yellow-accent/[0.025]">
                    <span className="text-[13px] font-bold text-yellow-accent">$29 / month</span>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-[13px] font-semibold text-white/60">$39 / seat / month</span>
                  </td>
                </tr>

                <tr className="border-t border-white/8">
                  <td className="py-5 px-5" />
                  {plans.map((plan) => (
                    <td key={plan.key} className={`py-5 px-4 ${plan.highlight ? 'bg-yellow-accent/[0.025]' : ''}`}>
                      <a
                        href={plan.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block text-center text-[12px] font-semibold py-2 px-3 rounded-lg transition-all duration-150 no-underline ${
                          plan.highlight
                            ? 'bg-yellow-accent text-black hover:bg-yellow-accent/90'
                            : 'bg-white/8 text-white hover:bg-white/12 border border-white/10'
                        }`}
                      >
                        {plan.cta}
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Common questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes. Monthly subscribers can cancel before the next billing cycle. Annual subscribers retain access for the full year they paid for.',
                },
                {
                  q: 'Is there a free trial?',
                  a: 'The Free plan is available forever,no credit card required. Upgrade to Ultra or Teams at any time.',
                },
                {
                  q: 'What payment methods are accepted?',
                  a: 'Visa, Mastercard, American Express, and PayPal. All payments are processed securely.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="space-y-1.5 border-b border-white/6 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-[14px] font-medium text-white">{q}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white opacity-0 select-none" aria-hidden>.</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What happens to my projects if I cancel?',
                  a: 'Your projects are yours. You can export everything before your subscription ends.',
                },
                {
                  q: 'How does Teams billing work?',
                  a: 'Teams is billed per seat per month. Each member of your workspace counts as one seat.',
                },
                {
                  q: 'Do you offer education pricing?',
                  a: 'Education and non-profit pricing is available. Reach out at support@flashfx.app to discuss.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="space-y-1.5 border-b border-white/6 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-[14px] font-medium text-white">{q}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
