import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, PlayCircle } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { stages, steps, pathForStep } from '../data/beginnerToHero';

/**
 * Landing page for the "From Beginner to Hero" course.
 *
 * Also the section's link hub: it is the one page that links to all 45 steps,
 * which is what keeps them reachable for a crawler that arrives here rather
 * than walking the chain of previous/next arrows one step at a time.
 */

const tableOfContents = stages.map((stage) => ({
  id: stage.label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  label: stage.label,
}));

export default function BeginnerToHero() {
  const firstStep = steps[0];

  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="From Beginner to Hero — the complete FlashFX course"
        description={`A ${steps.length}-step course through FlashFX, in order — from the interface and your first shape to motion paths, stagger and export.`}
      />

      <div className="space-y-10">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs text-yellow-accent">
            <GraduationCap className="w-4 h-4" />
            {steps.length} steps · {stages.length} stages
          </div>

          <h1 className="text-4xl font-semibold text-white leading-tight">
            From Beginner to Hero
          </h1>

          <p className="text-sm text-white/70 leading-relaxed max-w-2xl">
            The tutorial library answers one question at a time. This is the other thing — a single
            path through FlashFX in the order the editor actually builds on itself, from opening it
            for the first time to shipping a finished piece.
          </p>

          <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
            Work through it front to back, or jump to the stage you need. Each step has previous and
            next arrows, so you never have to come back here to keep going.
          </p>

          <Link
            to={pathForStep(firstStep)}
            className="inline-flex items-center gap-2 bg-yellow-accent hover:bg-yellow-400 text-black text-xs font-semibold px-4 py-2.5 rounded-md transition-colors"
          >
            <PlayCircle className="w-4 h-4" />
            Start with step 1 — {firstStep.title}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </header>

        {stages.map((stage, stageIndex) => {
          // Course-order number of this stage's first step.
          const offset = stages
            .slice(0, stageIndex)
            .reduce((total, previous) => total + previous.steps.length, 0);

          return (
            <section
              key={stage.label}
              id={tableOfContents[stageIndex].id}
              className="scroll-mt-32 space-y-4"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-white">
                  <span className="text-blue-muted font-normal mr-2">
                    Stage {stageIndex + 1}
                  </span>
                  {stage.label}
                </h2>
                <p className="text-xs text-blue-muted leading-relaxed">{stage.blurb}</p>
              </div>

              <ol className="space-y-2">
                {stage.steps.map((step, indexInStage) => (
                  <li key={step.slug}>
                    <Link
                      to={pathForStep(step)}
                      className="group flex items-start gap-4 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors"
                    >
                      <span className="text-xs font-semibold text-yellow-accent tabular-nums mt-0.5 shrink-0 w-6">
                        {String(offset + indexInStage + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-white/85 group-hover:text-white transition-colors">
                          {step.title}
                        </span>
                        <span className="block text-xs text-blue-muted leading-relaxed mt-0.5">
                          {step.summary}
                        </span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-blue-muted group-hover:text-yellow-accent transition-colors shrink-0 mt-0.5 ml-auto" />
                    </Link>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        <section className="bg-navy-panel border border-navy-border rounded-lg p-6">
          <h2 className="text-sm font-semibold text-white mb-2">Looking for one specific answer?</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            The course is sequential by design. If you already know what you need, the tutorial
            library is organised by topic instead, and the troubleshooting section is organised by
            symptom.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/tutorials"
              className="inline-flex items-center gap-2 border border-navy-border hover:border-yellow-accent/40 text-white/80 hover:text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
            >
              Tutorial library
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/runtimes"
              className="inline-flex items-center gap-2 border border-navy-border hover:border-yellow-accent/40 text-white/80 hover:text-white text-xs font-medium px-4 py-2 rounded-md transition-colors"
            >
              Troubleshooting
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
