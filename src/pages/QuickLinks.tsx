import { ExternalLink, MessageSquare, Twitter, Youtube, Instagram, Linkedin, Facebook, BookOpen, Layers, Zap, Cpu, CheckSquare, PlayCircle, Award, Box, Users, ShoppingBag, Star, BarChart2, Rss, User, Grid2x2 as Grid, CreditCard, Rocket, HardDrive, FileText, Github, Package, Code2, Activity, LifeBuoy, Globe } from 'lucide-react';
import { ElementType } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface QuickLink {
  title: string;
  url: string;
  icon: ElementType;
}

interface QuickLinkSection {
  category: string;
  links: QuickLink[];
}

const quickLinks: QuickLinkSection[] = [
  {
    category: 'Social Media',
    links: [
      { title: 'Reddit', url: 'https://reddit.com/r/flashfx', icon: Globe },
      { title: 'Twitter / X', url: 'https://twitter.com/flashfx', icon: Twitter },
      { title: 'Discord', url: 'https://discord.gg/flashfx', icon: MessageSquare },
      { title: 'YouTube', url: 'https://youtube.com/@flashfx', icon: Youtube },
      { title: 'Instagram', url: 'https://instagram.com/flashfx', icon: Instagram },
      { title: 'LinkedIn', url: 'https://linkedin.com/company/flashfx', icon: Linkedin },
      { title: 'Facebook', url: 'https://facebook.com/flashfx', icon: Facebook },
    ],
  },
  {
    category: 'Documentation',
    links: [
      { title: 'Introduction', url: '/', icon: BookOpen },
      { title: 'Editor Documentation', url: '/editor', icon: Layers },
      { title: 'Features', url: '/features', icon: Zap },
      { title: 'Runtimes', url: '/runtimes', icon: Cpu },
      { title: 'Feature Support', url: '/feature-support', icon: CheckSquare },
      { title: 'Tutorials', url: '/tutorials', icon: PlayCircle },
      { title: 'Best Practices', url: '/best-practices', icon: Award },
      { title: '3D Documentation', url: '/editor/3d/overview', icon: Box },
    ],
  },
  {
    category: 'Community',
    links: [
      { title: 'Community Overview', url: '/community-overview', icon: Users },
      { title: 'Community Forum', url: '/community', icon: MessageSquare },
      { title: 'Marketplace', url: '/marketplace-overview', icon: ShoppingBag },
      { title: 'Experts Directory', url: '/experts', icon: Star },
      { title: 'Case Studies', url: '/case-studies', icon: BarChart2 },
      { title: 'Blog', url: '/blog', icon: Rss },
    ],
  },
  {
    category: 'Account & Support',
    links: [
      { title: 'Account Overview', url: '/account-overview', icon: User },
      { title: 'Workspaces', url: '/workspaces', icon: Grid },
      { title: 'Pricing', url: '/pricing', icon: CreditCard },
      { title: 'Early Access', url: '/early-access', icon: Rocket },
      { title: 'S3 Bucket Setup', url: '/s3-bucket', icon: HardDrive },
      { title: 'Terms & Conditions', url: '/terms', icon: FileText },
    ],
  },
  {
    category: 'Resources',
    links: [
      { title: 'GitHub', url: 'https://github.com/flashfx', icon: Github },
      { title: 'NPM Package', url: 'https://npmjs.com/package/@flashfx/runtime', icon: Package },
      { title: 'API Reference', url: 'https://api.flashfx.app', icon: Code2 },
      { title: 'Status Page', url: 'https://status.flashfx.app', icon: Activity },
      { title: 'Support', url: 'mailto:support@flashfx.app', icon: LifeBuoy },
    ],
  },
];

export default function QuickLinks() {
  return (
    <Layout>
      <SEO
        title="Quick Links"
        description="Quick access to all FlashFX resources, documentation, and community links"
        keywords="FlashFX, quick links, resources, documentation, community"
      />
      <div>
        <h1 className="text-4xl font-semibold text-white mb-8">Quick Links</h1>

        <div className="space-y-8">
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-white mb-4">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');
                  return (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between p-4 bg-navy-elevated border border-navy-border rounded-lg hover:border-yellow-accent transition-colors group"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors flex-shrink-0" />
                        <span className="text-sm text-white group-hover:text-yellow-accent transition-colors">
                          {link.title}
                        </span>
                      </span>
                      {isExternal && (
                        <ExternalLink className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors flex-shrink-0" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
