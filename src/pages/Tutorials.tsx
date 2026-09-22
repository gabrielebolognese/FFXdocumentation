import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronsRight, GraduationCap, Layers, Palette, Play, Sparkles, Video } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import VideoEmbed from '../components/VideoEmbed';
import { steps as courseSteps } from '../data/beginnerToHero';

/** Read from the course itself so the card cannot drift out of date. */
const TOTAL_COURSE_STEPS = courseSteps.length;

interface Category {
  icon: React.ReactNode;
  label: string;
  count: number;
  description: string;
  video?: { id: string; url: string };
}

const categories: Category[] = [
  {
    icon: <BookOpen size={15} />,
    label: 'Getting Started',
    count: 10,
    description: 'Canvas setup, navigation, layer management, and project basics.',
    video: { id: '7zYDaMDK_Fg', url: 'https://www.youtube.com/watch?v=7zYDaMDK_Fg' },
  },
  {
    icon: <Layers size={15} />,
    label: 'Shapes & Objects',
    count: 10,
    description: 'Creating, editing, aligning, and composing shapes and groups.',
    video: { id: 'H2KzO52VAsc', url: 'https://www.youtube.com/watch?v=H2KzO52VAsc' },
  },
  {
    icon: <Palette size={15} />,
    label: 'Colors & Fills',
    count: 10,
    description: 'Fills, gradients, strokes, opacity, shadows, and color tools.',
    video: { id: 'Q0ykLG3Z4gM', url: 'https://www.youtube.com/watch?v=Q0ykLG3Z4gM' },
  },
  {
    icon: <Play size={15} />,
    label: 'Animation',
    count: 18,
    description: 'Keyframes, easing, motion paths, looping, and timeline workflows.',
  },
  {
    icon: <Sparkles size={15} />,
    label: 'Masking',
    count: 4,
    description: 'Creating, animating, inverting, and stacking masks.',
  },
  {
    icon: <Video size={15} />,
    label: 'Effects',
    count: 6,
    description: 'Blur, glow, shadow, distortion, and combining effect presets.',
  },
];

export default function Tutorials() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setActiveTab((prev) => (prev === index ? null : index));
  };

  return (
    <Layout>
      <SEO
        title="Tutorials"
        description="Step-by-step video tutorials for FlashFX — from getting started to advanced animation techniques."
        keywords="FlashFX, tutorials, learning, animation, video guides"
      />
      <div className="space-y-8">
        {/* Sits above the h1 on purpose. The course is the other way into this
            material — the library below is organised by topic for dipping into,
            this is one ordered path — and it is the stronger entry point for
            anyone arriving without a specific question, so it goes first rather
            than being buried in the intro copy. */}
        <Link
          to="/beginner-to-hero"
          className="group block w-full rounded-xl bg-gradient-to-r from-yellow-accent to-orange-500 px-6 py-5 sm:px-8 sm:py-7 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 transition-shadow"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-black shrink-0" />

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-lg sm:text-2xl font-semibold text-black leading-tight">
                  From Beginner to Hero
                </span>
                <span className="text-xs font-semibold text-black/60 uppercase tracking-wider">
                  {TOTAL_COURSE_STEPS} steps
                </span>
              </div>
              <p className="text-xs sm:text-sm text-black/75 leading-relaxed mt-1.5 max-w-3xl">
                The complete course, in order — from the interface and your first shape through to
                motion paths, stagger, the sequence compositor and export.
              </p>
            </div>

            <ChevronsRight className="w-7 h-7 sm:w-9 sm:h-9 text-blue-primary shrink-0 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-white">Tutorials</h1>
          <p className="text-sm font-bold text-red-500">Tutorial videos are still work in progress and not available yet.</p>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
            Tutorials are short, focused video guides designed to help you get productive with FlashFX as fast as
            possible. Whether you're opening the editor for the first time or trying to nail a specific animation
            technique, each tutorial walks you through one topic step by step — no prior experience required.
          </p>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
            The library covers <span className="text-white font-medium">60 videos</span> across 6 topic areas, from
            canvas basics and shape tools all the way through keyframe animation, masking, and visual effects. Pick a
            topic below and start wherever it makes sense for you.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">What's covered</h2>

          <div className="flex flex-col gap-2">
            {categories.map((cat, i) => (
              <div key={cat.label}>
                <button
                  onClick={() => handleTabClick(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors text-left ${
                    activeTab === i
                      ? 'bg-navy-elevated border-white/15 text-white'
                      : 'bg-navy-darker border-white/6 text-white/70 hover:text-white hover:border-white/12'
                  }`}
                >
                  <span className={`shrink-0 ${activeTab === i ? 'text-yellow-accent' : 'text-yellow-accent/60'}`}>
                    {cat.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium">{cat.label}</span>
                      <span className="text-xs text-white/30">{cat.count} videos</span>
                      {cat.video && (
                        <span className="text-xs text-yellow-accent/70 font-medium">Available</span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">{cat.description}</p>
                  </div>
                  <span className={`text-white/30 text-xs transition-transform duration-200 ${activeTab === i ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {activeTab === i && (
                  <div className="mt-2 px-4 py-5 bg-navy-darker/60 border border-white/6 rounded-lg">
                    {cat.video ? (
                      <VideoEmbed videoId={cat.video.id} youtubeUrl={cat.video.url} />
                    ) : (
                      <div className="relative w-full rounded-xl overflow-hidden bg-navy-elevated border border-white/6" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <Play className="w-12 h-12 text-white/15" />
                          <p className="text-sm text-white/30">Video coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/30 leading-relaxed">
          Select a tutorial from the list above to get started.
        </p>
      </div>
    </Layout>
  );
}
