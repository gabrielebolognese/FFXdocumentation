import { Youtube, Instagram, Twitter, Linkedin, BookOpen, Code, Mail, Users, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: 'Discord', id: 'discord' },
  { label: 'YouTube', id: 'youtube' },
  { label: 'Instagram', id: 'instagram' },
  { label: 'Reddit', id: 'reddit' },
  { label: 'X', id: 'x' },
  { label: 'LinkedIn', id: 'linkedin' },
  { label: 'Medium', id: 'medium' },
  { label: 'DEV.to', id: 'devto' },
  { label: 'Substack', id: 'substack' },
];

interface CommunityButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

function CommunityButton({ href, label, icon, variant = 'secondary' }: CommunityButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-yellow-accent text-navy-deepest px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:text-white transition-all duration-200 group"
      >
        {icon}
        {label}
        <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 border border-yellow-accent/40 text-yellow-accent px-5 py-2.5 rounded-lg text-sm font-medium hover:border-yellow-accent hover:bg-yellow-accent/10 hover:shadow-[0_0_14px_rgba(250,204,21,0.25)] transition-all duration-200 group"
    >
      {icon}
      {label}
      <ExternalLink size={13} className="opacity-40 group-hover:opacity-80 transition-opacity" />
    </a>
  );
}

export default function Community() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Join the Community"
        description="Connect with other FlashFX creators, get help, share work, and stay up to date."
        keywords="FlashFX, community, discord, social media"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-yellow-accent mb-4">Join the Community</h1>
          <p className="text-sm text-white/60 leading-relaxed">
            Connect with other FlashFX creators, get help, share work, and stay up to date.
          </p>
        </div>

        <div id="discord" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Discord</h2>
          <p className="text-sm text-white leading-relaxed">
            The main hub for the FlashFX community. Ask questions, share projects, get early access updates, and connect with the team directly.
          </p>
          <CommunityButton
            href="https://discord.gg/6GkfxwCU2Z"
            label="Join the FlashFX Discord"
            icon={<Users size={15} />}
            variant="primary"
          />
        </div>

        <div id="youtube" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">YouTube</h2>
          <p className="text-sm text-white leading-relaxed">
            Product walkthroughs, feature demos, and video tutorials.
          </p>
          <CommunityButton
            href="https://www.youtube.com/@flashfxeditor/videos"
            label="FlashFX on YouTube"
            icon={<Youtube size={15} />}
          />
        </div>

        <div id="instagram" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Instagram</h2>
          <p className="text-sm text-white leading-relaxed">
            Motion clips, visual updates, and community drops.
          </p>
          <CommunityButton
            href="https://www.instagram.com/flashfxeditor"
            label="FlashFX on Instagram"
            icon={<Instagram size={15} />}
          />
        </div>

        <div id="reddit" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Reddit</h2>
          <p className="text-sm text-white leading-relaxed">
            Community discussion, feedback threads, and show-and-tell.
          </p>
          <CommunityButton
            href="https://www.reddit.com/r/FlashFX"
            label="r/FlashFX on Reddit"
            icon={<ExternalLink size={15} />}
          />
        </div>

        <div id="x" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">X</h2>
          <p className="text-sm text-white leading-relaxed">
            Short updates, announcements, and quick tips.
          </p>
          <CommunityButton
            href="https://x.com/FlashFXeditor"
            label="FlashFX on X"
            icon={<Twitter size={15} />}
          />
        </div>

        <div id="linkedin" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">LinkedIn</h2>
          <p className="text-sm text-white leading-relaxed">
            Professional updates and company news.
          </p>
          <CommunityButton
            href="https://www.linkedin.com/in/gabriele-bolognese"
            label="FlashFX on LinkedIn"
            icon={<Linkedin size={15} />}
          />
        </div>

        <div id="medium" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Medium</h2>
          <p className="text-sm text-white leading-relaxed">
            Long-form articles on motion design, product thinking, and the story behind FlashFX.
          </p>
          <CommunityButton
            href="https://medium.com/@flashfx"
            label="FlashFX on Medium"
            icon={<BookOpen size={15} />}
          />
        </div>

        <div id="devto" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">DEV.to</h2>
          <p className="text-sm text-white leading-relaxed">
            Technical posts and developer-focused content.
          </p>
          <CommunityButton
            href="https://dev.to/therealgabry"
            label="FlashFX on DEV.to"
            icon={<Code size={15} />}
          />
        </div>

        <div id="substack" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">Substack</h2>
          <p className="text-sm text-white leading-relaxed">
            Newsletter updates delivered to your inbox.
          </p>
          <CommunityButton
            href="https://substack.com/@flashfx"
            label="FlashFX on Substack"
            icon={<Mail size={15} />}
          />
        </div>
      </div>
    </Layout>
  );
}
