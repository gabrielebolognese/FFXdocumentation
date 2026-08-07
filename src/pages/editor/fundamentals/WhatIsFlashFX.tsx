import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'who-flashfx-is-for', label: 'Who FlashFX is For' },
];

export default function WhatIsFlashFX() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="What is FlashFX | FlashFX Documentation"
        description="Learn about FlashFX, a professional web-native motion graphics and animation design platform."
        keywords="FlashFX, motion graphics, animation, web platform"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">What is FlashFX</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-white/80 leading-relaxed">
          <p className="text-base">
            FlashFX is a professional, web-native motion graphics and animation design platform built to run entirely inside a modern web browser. It is designed to serve the full motion design workflow — from initial vector composition through animation authoring to publication-ready export — without any installation, plugin, or native application dependency.
          </p>

          <p>The platform is structured around three disciplines:</p>

          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-yellow-accent mt-1">•</span>
              <div>
                <strong className="text-white">Vector Design</strong> — a complete drawing, shaping, and compositing environment with a material system capable of producing complex layered surfaces.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-accent mt-1">•</span>
              <div>
                <strong className="text-white">Animation</strong> — a keyframe-based animation engine with per-property tracks, custom easing curves, and a multi-sequence compositor for long-form productions.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-accent mt-1">•</span>
              <div>
                <strong className="text-white">Export</strong> — a deterministic, frame-accurate renderer that outputs to MP4, WebM, PNG Sequence, GIF, and static PNG directly from the browser.
              </div>
            </li>
          </ul>

          <p>
            FlashFX is not a video editor, a photo editor, or a 3D application. It operates in the 2D motion graphics space with optional perspective transform support for pseudo-3D effects. Its closest conceptual relatives are Adobe After Effects and Motion, though it is purpose-built for the web and for accessibility across skill levels.
          </p>

          <div id="who-flashfx-is-for" className="bg-white/5 border border-white/10 rounded-lg p-6 mt-8 scroll-mt-24">
            <h2 className="text-xl font-semibold text-white mb-4">Who FlashFX is For</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span><strong className="text-white">Motion designers</strong> creating branded animations, title sequences, and social media content</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span><strong className="text-white">Content creators</strong> producing Reels, Shorts, Stories, and looping GIFs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span><strong className="text-white">UI/UX designers</strong> prototyping animated interface concepts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span><strong className="text-white">Developers</strong> visualizing motion specifications before implementation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">•</span>
                <span><strong className="text-white">Educators and students</strong> learning motion design principles without software cost</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
