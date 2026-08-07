import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <span className="text-[11px] uppercase tracking-widest text-white/30 font-semibold mb-5 block">
        {title}
      </span>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.disabled ? (
              <span className="text-[13px] text-white/25 block leading-snug cursor-not-allowed select-none">
                {link.label}
              </span>
            ) : link.href ? (
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-150 no-underline block leading-snug"
              >
                {link.label}
              </a>
            ) : link.to ? (
              <Link
                to={link.to}
                className="text-[13px] text-white/50 hover:text-white transition-colors duration-150 no-underline block leading-snug"
              >
                {link.label}
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

const productLinks: FooterLink[] = [
  { label: 'Motion Editor', href: 'https://editor.flashfx.app', external: true },
  { label: 'Templates Library', href: 'https://marketplace.flashfx.app', external: true },
  { label: 'Export and Formats', to: '/editor/exporting/runtime' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Download', href: 'https://flashfx.app/', external: true },
  { label: 'Changelog', href: 'https://discord.gg/VkSrB55HWg', external: true },
  { label: 'Roadmap', href: 'https://roadmap.flashfx.app', external: true },
];

const resourcesLinks: FooterLink[] = [
  { label: 'Documentation', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: 'Beginner Guide', to: '/tutorials' },
  { label: 'YouTube Creators', href: 'https://www.youtube.com/@flashfxeditor/videos', external: true },
  { label: 'FAQ', href: 'https://flashfx.app/#/faq', external: true },
  { label: 'Status', href: 'https://discord.gg/VkSrB55HWg', external: true },
];

const compareLinks: FooterLink[] = [
  { label: 'vs After Effects', to: '/compare/after-effects' },
  { label: 'vs CapCut', to: '/compare/capcut' },
  { label: 'vs DaVinci Resolve', to: '/compare/davinci-resolve' },
  { label: 'Free Motion Graphics', to: '/free-motion-graphics' },
  { label: 'Lightweight Editor', to: '/lightweight-editor' },
];

const companyLinks: FooterLink[] = [
  { label: 'About', to: '/editor' },
  { label: 'Careers', href: 'https://x.com/flashfxeditor', external: true },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Security', href: 'https://discord.gg/VkSrB55HWg', external: true },
];

const connectLinks: FooterLink[] = [
  { label: 'X / Twitter', href: 'https://x.com/FlashFXeditor', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/flashfxeditor', external: true },
  { label: 'YouTube', href: 'https://www.youtube.com/@flashfxeditor/videos', external: true },
  { label: 'Newsletter', href: 'https://discord.gg/VkSrB55HWg', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy-panel border-t border-navy-border mt-24">
      <div className="w-[90vw] mx-auto">
        <div className="px-0 pt-20 pb-16">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-[240px] lg:flex-shrink-0">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/android-chrome-192x192.png" alt="FlashFX" className="w-7 h-7 rounded-md" />
                <p className="text-base font-bold text-white tracking-tight leading-none">
                  FlashFX
                </p>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Motion graphics without the complexity. Design and animate with precision.
              </p>
              <a
                href="https://flashfx.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-accent text-black text-xs font-semibold rounded-md hover:bg-yellow-accent/90 transition-colors duration-150 no-underline"
              >
                Try FlashFX Free
              </a>
            </div>

            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
              <FooterColumn title="Product" links={productLinks} />
              <FooterColumn title="Resources" links={resourcesLinks} />
              <FooterColumn title="Compare" links={compareLinks} />
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Connect" links={connectLinks} />
            </div>
          </div>

          <div className="border-t border-navy-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25">
              &copy; 2026 FlashFX. All rights reserved.
            </p>
            <p className="text-xs text-white/25">
              Made with passion by Gabriele Bolognese
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
