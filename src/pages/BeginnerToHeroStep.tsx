import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import VideoEmbed from '../components/VideoEmbed';
import { videoObjectEntity, SITE_URL } from '../utils/structuredData';
import type { BeginnerToHeroStep } from '../data/beginnerToHero';
import {
  BASE_PATH,
  steps,
  stageOfSlug,
  indexOfSlug,
  pathForStep,
  videoForStep,
} from '../data/beginnerToHero';

/**
 * One step of the "From Beginner to Hero" course.
 *
 * Every step is its own route, so the previous and next arrows are real
 * `<Link>`s rather than state. That keeps the browser back button, deep links
 * and prerendering working — and gives each step an inbound internal link from
 * its two neighbours, which a client-side carousel could not.
 *
 * Returns null for an unknown slug, matching TutorialDetail.
 */
export default function BeginnerToHeroStep() {
  const location = useLocation();
  const slug = location.pathname.replace(`${BASE_PATH}/`, '');
  const index = indexOfSlug(slug);

  if (index === -1) {
    return null;
  }

  const step = steps[index];
  const stage = stageOfSlug[step.slug];
  const video = videoForStep(step, index);
  const previous = index > 0 ? steps[index - 1] : null;
  const next = index < steps.length - 1 ? steps[index + 1] : null;
  const position = index + 1;

  return (
    // `extraWide` takes the content column from col-span-2 to col-span-4 —
    // literally double the width, which is what gives the video its size. It
    // also drops the table-of-contents rail, which a stepper has no use for.
    <Layout extraWide>
      <SEO
        title={`${step.title} — Beginner to Hero step ${position}`}
        description={step.summary}
        // No VideoObject while the embed is a stand-in: describing someone
        // else's video as a FlashFX tutorial is fabricated structured data.
        structuredData={
          video.isPlaceholder
            ? undefined
            : [
                videoObjectEntity({
                  name: step.title,
                  description: step.summary,
                  videoId: video.id,
                  canonical: `${SITE_URL}${location.pathname}`,
                }),
              ]
        }
      />

      <div className="space-y-6">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <Link
              to={BASE_PATH}
              className="inline-flex items-center gap-1.5 text-yellow-accent hover:text-yellow-400 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              From Beginner to Hero
            </Link>
            <span className="text-navy-border">/</span>
            <span className="text-blue-muted">{stage}</span>
            <span className="text-navy-border">/</span>
            <span className="text-blue-muted">
              Step {position} of {steps.length}
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-white leading-tight">{step.title}</h1>
          <p className="text-sm text-white/70 leading-relaxed">{step.summary}</p>
        </header>

        {/* The arrows are full-height bars flanking the video, not buttons
            beside it — `items-stretch` is what makes them match the embed's
            height whatever the column width works out to.

            From `sm` up they sit either side. On a phone two 56px bars would
            eat a third of the viewport, so `order` + `basis-full` drops the
            video onto its own line and puts the arrows in a row beneath it.
            Same markup and same links at both sizes: no duplicated DOM and
            nothing hidden from a crawler.

            `min-w-0` stops the 16:9 embed forcing the row wider than the
            column. */}
        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          <div className="order-1 sm:order-2 basis-full sm:basis-0 sm:flex-1 min-w-0">
            <VideoEmbed videoId={video.id} youtubeUrl={video.url} />
          </div>
          <div className="order-2 sm:order-1 flex-1 sm:flex-none flex">
            <StepArrow direction="previous" step={previous} />
          </div>
          <div className="order-3 flex-1 sm:flex-none flex">
            <StepArrow direction="next" step={next} />
          </div>
        </div>

        {video.isPlaceholder && (
          <p className="text-xs text-blue-muted leading-relaxed">
            <span className="text-yellow-accent font-medium">Placeholder.</span> This is a sample
            video standing in until the lesson for this step is recorded — it is not the lesson
            itself.
          </p>
        )}

        <Progress position={position} total={steps.length} />

        <nav className="grid sm:grid-cols-2 gap-3" aria-label="Course steps">
          <StepLink direction="previous" step={previous} />
          <StepLink direction="next" step={next} />
        </nav>
      </div>
    </Layout>
  );
}

function StepArrow({
  direction,
  step,
}: {
  direction: 'previous' | 'next';
  step: BeginnerToHeroStep | null;
}) {
  const Icon = direction === 'previous' ? ChevronLeft : ChevronRight;
  const label = direction === 'previous' ? 'Previous step' : 'Next step';

  // `self-stretch` + `h-auto` make the bar take the full height of the flex
  // row, which the video defines.
  const shared =
    'self-stretch h-auto flex items-center justify-center w-full sm:w-14 min-h-[3rem] rounded-xl border transition-colors';

  if (!step) {
    return (
      <div
        aria-hidden="true"
        className={`${shared} border-navy-border/60 text-white/10 cursor-default`}
      >
        <Icon className="w-7 h-7" />
      </div>
    );
  }

  return (
    <Link
      to={pathForStep(step)}
      aria-label={`${label}: ${step.title}`}
      title={step.title}
      className={`${shared} border-navy-border bg-navy-elevated text-blue-muted hover:text-yellow-accent hover:border-yellow-accent/40 hover:bg-navy-panel`}
    >
      <Icon className="w-7 h-7" />
    </Link>
  );
}

function Progress({ position, total }: { position: number; total: number }) {
  const percent = Math.round((position / total) * 100);

  return (
    <div className="space-y-2">
      <div className="h-1 w-full rounded-full bg-navy-elevated overflow-hidden">
        <div className="h-full rounded-full bg-yellow-accent" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-xs text-blue-muted">
        {percent}% through the course — step {position} of {total}
      </p>
    </div>
  );
}

function StepLink({
  direction,
  step,
}: {
  direction: 'previous' | 'next';
  step: BeginnerToHeroStep | null;
}) {
  const isPrevious = direction === 'previous';

  if (!step) {
    return (
      <Link
        to={BASE_PATH}
        className={`group flex items-center gap-3 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors ${
          isPrevious ? '' : 'sm:justify-end sm:text-right'
        }`}
      >
        {isPrevious && (
          <ChevronLeft className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
        )}
        <span>
          <span className="block text-[10px] uppercase tracking-wider text-blue-muted">
            {isPrevious ? 'Start of the course' : 'End of the course'}
          </span>
          <span className="block text-sm text-white/80 group-hover:text-white transition-colors">
            Course overview
          </span>
        </span>
        {!isPrevious && (
          <ChevronRight className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
        )}
      </Link>
    );
  }

  return (
    <Link
      to={pathForStep(step)}
      className={`group flex items-center gap-3 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors ${
        isPrevious ? '' : 'sm:justify-end sm:text-right'
      }`}
    >
      {isPrevious && (
        <ChevronLeft className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
      )}
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-wider text-blue-muted">
          {isPrevious ? 'Previous' : 'Next'}
        </span>
        <span className="block text-sm text-white/80 group-hover:text-white transition-colors truncate">
          {step.title}
        </span>
      </span>
      {!isPrevious && (
        <ChevronRight className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
      )}
    </Link>
  );
}
