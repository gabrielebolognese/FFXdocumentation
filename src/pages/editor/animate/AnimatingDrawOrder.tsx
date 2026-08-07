import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'parenting-hierarchy-animation', label: 'Parenting & Hierarchy Animation' },
  { id: 'how-parenting-works', label: 'How Parenting Works' },
  { id: 'setting-up-parenting', label: 'Setting Up Parenting' },
  { id: 'null-objects', label: 'Null Objects' },
  { id: 'parenting-and-animation', label: 'Parenting and Animation' },
  { id: 'expressions-value-linking', label: 'Expressions & Value Linking' },
  { id: 'what-expressions-can-do', label: 'What Expressions Can Do' },
  { id: 'writing-expressions', label: 'Writing Expressions' },
  { id: 'expression-variables', label: 'Expression Variables' },
  { id: 'expression-functions', label: 'Expression Functions' },
  { id: 'example-expressions', label: 'Example Expressions' },
  { id: 'value-linking-driver-driven', label: 'Value Linking (Driver-Driven)' },
  { id: 'enabling-and-disabling-expressions', label: 'Enabling and Disabling Expressions' },
];

export default function AnimatingDrawOrder() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Parenting, Hierarchy & Expressions | FlashFX Documentation"
        description="Complete reference for parenting and hierarchy animation, and expressions and value linking in FlashFX."
        keywords="FlashFX, parenting, hierarchy animation, expressions, value linking, null object, driven keys"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Animate Mode
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Parenting & Hierarchy Animation</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="parenting-hierarchy-animation" title="Parenting & Hierarchy Animation">
            <p>Parenting creates a transform dependency between elements: a child element inherits the transform of its parent. When the parent moves, rotates, or scales, the child moves with it — while still retaining its own independent transform on top of the parent's.</p>
          </Section>

          <Section id="how-parenting-works" title="How Parenting Works">
            <p>A child element's world transform is the combination of:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>The parent's world transform (position, rotation, scale)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>The child's local transform (its own Position, Rotation, Scale relative to the parent)</li>
            </ul>
            <p>This means the child can have its own animation on top of whatever the parent is doing. A character's hand can rotate independently while the arm (parent) swings.</p>
          </Section>

          <Section id="setting-up-parenting" title="Setting Up Parenting">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">In the Hierarchy panel:</strong> Drag one element onto another to make it a child. The child is indented under the parent in the panel.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Via Properties Panel:</strong> In Animate mode, the Properties Panel shows a Parent field. Click the eyedropper icon and click the desired parent element on the canvas or in the hierarchy.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Keep World Position:</strong> When parenting, a dialog asks whether to keep the child's world-space position (compensating the local transform so the child doesn\'t jump) or to apply the parent\'s transform to the child\'s current position. In most animation contexts, keeping world position is preferred.</li>
            </ul>
          </Section>

          <Section id="null-objects" title="Null Objects">
            <p>A <strong className="text-white">Null Object</strong> (also called a control point or dummy) is an invisible element with no visual rendering. It exists solely to provide a transform that other elements can be parented to.</p>
            <p><strong className="text-white">Common uses:</strong></p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Group controller:</strong> Multiple elements parented to a single null can all be moved, rotated, or scaled simultaneously by animating the null — without requiring a visual group container</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Pivot relocation:</strong> Parent an element to a null placed at a custom pivot point to achieve rotation around an off-center axis</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Layered control:</strong> A hierarchy of nulls — a root null controls global position, a mid-level null controls rotation, leaf nulls control individual elements — provides multiple levels of independent control without coupling transforms</li>
            </ul>
            <p>Create a null object: <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+N</code> or via Object {'>'} New Null Object.</p>
          </Section>

          <Section id="parenting-and-animation" title="Parenting and Animation">
            <p>Parenting works in both Design and Animate modes. In Animate mode, the parent's keyframed transforms are inherited by the child at runtime. The child's own animation tracks record values in local space — relative to whatever the parent is doing at that time.</p>
            <p><strong className="text-white">Breaking parenting:</strong> To detach a child from its parent while preserving its world-space animation, use <strong className="text-white">Detach and Bake</strong>. This samples the child's world position at every frame and writes explicit keyframes on the child\'s own position track — after which the parent relationship is removed. This is useful for finalizing a rig after animation is complete.</p>
          </Section>

          <Section id="expressions-value-linking" title="Expressions & Value Linking">
            <p>Expressions allow a property's value to be driven by a formula or by the value of another property, rather than by keyframes. Expressions execute every frame, computing the property's value dynamically.</p>
          </Section>

          <Section id="what-expressions-can-do" title="What Expressions Can Do">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Link one property to another (e.g., one element's opacity mirrors another element's scale)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Apply math to a keyframed value (e.g., add a sine wave to a position to create oscillation on top of existing motion)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drive properties from time (e.g., a property that increases linearly with the frame number)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Create procedural animation that doesn't require any keyframes at all</li>
            </ul>
          </Section>

          <Section id="writing-expressions" title="Writing Expressions">
            <p>Expressions are written in a simplified JavaScript-like syntax. The expression field is accessed by right-clicking any property in the Properties Panel and selecting <strong className="text-white">Add Expression</strong>, or by clicking the expression icon (=) next to the property field.</p>
            <p>When an expression is active, the property field turns blue and keyframing is disabled for that property. The expression's computed value is shown in the field in real time.</p>
          </Section>

          <Section id="expression-variables" title="Expression Variables">
            <Table
              headers={['Variable', 'Type', 'Description']}
              rows={[
                ['time', 'Number', 'Current time in seconds (e.g., 1.5 = 1 second and 15 frames at 30fps)'],
                ['frame', 'Number', 'Current frame number as an integer'],
                ['value', 'Number / Array', 'The keyframed value of this property at the current time (allows expressions to modify keyframe values rather than replace them)'],
                ['thisElement', 'Object', 'The element this expression belongs to. Access its properties: thisElement.opacity, thisElement.x, etc.'],
                ['element("name")', 'Object', `Reference another element by name. element("Logo").rotation accesses the Logo element's rotation value.`],
              ]}
            />
          </Section>

          <Section id="expression-functions" title="Expression Functions">
            <Table
              headers={['Function', 'Description']}
              rows={[
                ['Math.sin(x)', 'Sine of x (in radians). Use for oscillating values.'],
                ['Math.cos(x)', 'Cosine of x (in radians).'],
                ['Math.abs(x)', 'Absolute value.'],
                ['Math.floor(x)', 'Round down to integer.'],
                ['Math.ceil(x)', 'Round up to integer.'],
                ['Math.round(x)', 'Round to nearest integer.'],
                ['Math.min(a, b)', 'Minimum of two values.'],
                ['Math.max(a, b)', 'Maximum of two values.'],
                ['clamp(value, min, max)', 'Constrain value to a range. Returns min if below min, max if above max.'],
                ['lerp(a, b, t)', 'Linear interpolation between a and b by factor t (0–1).'],
                ['remap(value, inMin, inMax, outMin, outMax)', 'Remaps a value from one range to another.'],
              ]}
            />
          </Section>

          <Section id="example-expressions" title="Example Expressions">
            <p><strong className="text-white">Constant rotation (spin):</strong></p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              time * 180
            </div>
            <p className="text-xs text-white/50 mt-1">Rotates the element 180 degrees per second continuously.</p>

            <p className="mt-4"><strong className="text-white">Oscillating position (bounce):</strong></p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              Math.sin(time * 4) * 30
            </div>
            <p className="text-xs text-white/50 mt-1">Moves the element up and down 30px at a frequency of 4 radians per second.</p>

            <p className="mt-4"><strong className="text-white">Mirror another element's opacity:</strong></p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              element("Background").opacity
            </div>
            <p className="text-xs text-white/50 mt-1">This element's opacity always matches the "Background" element's opacity.</p>

            <p className="mt-4"><strong className="text-white">Add oscillation on top of keyframed position:</strong></p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 font-mono text-xs text-yellow-accent">
              value + Math.sin(time * 6) * 5
            </div>
            <p className="text-xs text-white/50 mt-1">Adds a 5px sine wobble on top of the existing keyframed position values.</p>
          </Section>

          <Section id="value-linking-driver-driven" title="Value Linking (Driver-Driven)">
            <p>Value linking is a simplified form of expressions that connects one property directly to another without writing code:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Right-click the source property (the driver) and select <strong className="text-white">Copy Property Link</strong></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Right-click the target property (the driven) and select <strong className="text-white">Paste as Link</strong></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>The target property now mirrors the driver's value exactly</li>
            </ul>
            <p><strong className="text-white">Remapped links:</strong> After linking, an optional input/output range remapping can be applied — for example, linking an element's opacity (0–100%) to drive a blur radius (0–20px) so that as the element fades in from 0% to 100% opacity, its blur reduces from 20 to 0.</p>
          </Section>

          <Section id="enabling-and-disabling-expressions" title="Enabling and Disabling Expressions">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click the expression toggle icon (=) next to the property to enable or disable the expression without deleting it</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>When disabled, the property returns to its keyframed value (if any keyframes exist)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Right-click the property and select <strong className="text-white">Delete Expression</strong> to permanently remove it</li>
            </ul>
          </Section>

        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-semibold text-white border-b border-white/10 pb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-lg overflow-hidden text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-medium text-yellow-accent uppercase tracking-wider border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/70 border-b border-white/5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
