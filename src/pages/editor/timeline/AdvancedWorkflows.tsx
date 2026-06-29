import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'the-adjustment-layer-pattern', label: 'The Adjustment Layer Pattern' },
  { id: 'the-pre-comp-adjustment-layer-pattern', label: 'The Pre-Comp + Adjustment Layer Pattern' },
  { id: 'the-master-control-null-pattern', label: 'The Master Control Null Pattern' },
  { id: 'expression-controller-nulls', label: 'Expression Controller Nulls' },
  { id: 'timeline-driven-state-machines', label: 'Timeline-Driven State Machines' },
  { id: 'sequence-looping-with-time-remap', label: 'Sequence Looping with Time Remap' },
];

export default function AdvancedWorkflows() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Advanced Workflow Patterns | FlashFX Documentation"
        description="Adjustment layers, pre-comp patterns, master control nulls, expression controllers, and timeline-driven state machines in FlashFX."
        keywords="FlashFX, adjustment layer, pre-comp, master control null, expression controller, state machine"
      />
      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">Timeline and Composition</span>
          <h1 className="text-4xl font-bold text-white mb-6">Advanced Workflow Patterns</h1>
        </div>
        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="the-adjustment-layer-pattern" title="The Adjustment Layer Pattern">
            <p>An Adjustment Layer applies its effects to all layers below it in the stack, without containing any element of its own.</p>
            <p>Creating an Adjustment Layer: Insert -&gt; Adjustment Layer</p>
            <p>The adjustment layer appears in the layer stack as a special layer type. Any filter or effect added to the adjustment layer applies to the composite of everything below it in real time.</p>
            <p><strong className="text-white">Uses:</strong></p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Global color grade over the entire composition without modifying individual elements</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>Animated blur that defocuses all elements simultaneously (e.g., a "DOF rack focus" effect across the scene)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A global vignette applied to the full composite</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">-</span>A blend mode adjustment that colorizes the entire scene beneath it</li>
            </ul>
          </Section>

          <Section id="the-pre-comp-adjustment-layer-pattern" title="The Pre-Comp + Adjustment Layer Pattern">
            <p>A common professional technique:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Pre-compose all scene elements into a nested sequence</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Place the nested sequence in the parent composition</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Add an Adjustment Layer above the nested sequence with the desired color grade</li>
            </ol>
            <p>Result: The full scene is graded uniformly. The grade can be easily replaced or toggled by modifying only the adjustment layer.</p>
          </Section>

          <Section id="the-master-control-null-pattern" title="The Master Control Null Pattern">
            <p>For managing a composition with many related animation properties:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create a Null Object (the "Master Control null")</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Parent all relevant elements to this null</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Link each element's properties to the null's custom properties using Value Linking</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Animate only the null</li>
            </ol>
            <p>This creates a single-point control for complex multi-element effects (e.g., controlling the position of an entire scene with one control, or driving the opacity of 20 elements from a single slider).</p>
          </Section>

          <Section id="expression-controller-nulls" title="Expression Controller Nulls">
            <p>For creating user-friendly "control sliders":</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create a null with custom properties named descriptively (e.g., "Animation Progress")</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Write expressions on all target elements that reference the null's custom property value</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Keyframe only the null's custom property</li>
            </ol>
            <p>Result: Animating one value drives a complex coordinated multi-element animation. Useful for creating reusable animation rigs that can be reused across projects by copying the null and its linked elements.</p>
          </Section>

          <Section id="timeline-driven-state-machines" title="Timeline-Driven State Machines">
            <p>For UI or interactive mockup animations, the timeline can simulate state machine behavior:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Define each visual state on a separate keyframe cluster (group of keyframes at the same time)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Use Hold keyframes to prevent interpolation between states</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Time remap or expressions control which keyframe cluster is "active" at any given time</li>
            </ol>
            <p>This pattern produces a pseudo-state-machine within the timeline, useful for demonstrating interaction designs where the "active" state changes based on a logical condition.</p>
          </Section>

          <Section id="sequence-looping-with-time-remap" title="Sequence Looping with Time Remap">
            <p>To create a looping animation within the Compositor:</p>
            <ol className="space-y-1 text-sm list-none">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Create the loop animation in its own sequence (keyframes must be identical at frame 0 and frame N)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Place the sequence in the Compositor</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Enable Time Remap on the Compositor clip</li>
              <li className="flex gap-3">
                <span className="text-yellow-accent mt-1">4.</span>
                <span>
                  {'Apply '}
                  <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">loopOut("cycle")</code>
                  {' expression to the Time Remap property'}
                </span>
              </li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">5.</span>Trim the clip end to any desired total duration</li>
            </ol>
            <p>The sequence will loop indefinitely for the duration of the clip, regardless of the clip's length relative to the underlying sequence length.</p>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; label: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
