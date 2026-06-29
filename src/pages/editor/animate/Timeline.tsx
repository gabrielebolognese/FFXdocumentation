import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'property-tracks', label: 'Property Tracks' },
  { id: 'collapsing-and-expanding-tracks', label: 'Collapsing and Expanding Tracks' },
  { id: 'track-visibility-and-lock', label: 'Track Visibility and Lock' },
  { id: 'animatable-properties', label: 'Animatable Properties' },
  { id: 'the-timeline-ruler', label: 'The Timeline Ruler' },
  { id: 'work-area', label: 'Work Area' },
  { id: 'playback-and-preview', label: 'Playback & Preview' },
  { id: 'transport-controls', label: 'Transport Controls' },
  { id: 'playback-speed', label: 'Playback Speed' },
  { id: 'preview-quality', label: 'Preview Quality' },
  { id: 'scrubbing', label: 'Scrubbing' },
  { id: 'onion-skinning', label: 'Onion Skinning' },
];

export default function Timeline() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Property Tracks & Playback Controls | FlashFX Documentation"
        description="Complete reference for property tracks, the timeline panel, and playback and preview controls in FlashFX."
        keywords="FlashFX, property tracks, timeline, playback, preview, transport controls, scrubbing"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Animate Mode
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Property Tracks & Timeline</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">

          <Section id="property-tracks" title="Property Tracks">
            <p>Every animatable property on an element has its own property track in the timeline. Tracks are organized hierarchically:</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 font-mono text-xs text-white/70 leading-relaxed">
              <div>Element name</div>
              <div className="ml-4">└─ Transform</div>
              <div className="ml-8">├─ Position X</div>
              <div className="ml-8">├─ Position Y</div>
              <div className="ml-8">├─ Rotation</div>
              <div className="ml-8">├─ Scale X</div>
              <div className="ml-8">├─ Scale Y</div>
              <div className="ml-8">└─ Opacity</div>
              <div className="ml-4">└─ Fill</div>
              <div className="ml-8">├─ Fill Color</div>
              <div className="ml-8">└─ Fill Opacity</div>
            </div>
            <p>Only tracks with at least one keyframe are visible in the timeline by default. An element with no animation data shows as a collapsed row with no sub-tracks.</p>
          </Section>

          <Section id="collapsing-and-expanding-tracks" title="Collapsing and Expanding Tracks">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Click the triangle/arrow next to an element name to expand or collapse its track group</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Alt+click</code> the triangle to expand or collapse all tracks for all elements simultaneously</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>The collapsed view shows all keyframes for an element as a single combined row,useful for seeing the overall animation structure at a glance</li>
            </ul>
          </Section>

          <Section id="track-visibility-and-lock" title="Track Visibility and Lock">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Eye icon:</strong> Temporarily hide the animation on a track without deleting keyframes. The element returns to its unanimated state in the viewport for that property.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Lock icon:</strong> Prevents keyframes on this track from being selected or moved. Useful for protecting finished animations while working on others.</li>
            </ul>
          </Section>

          <Section id="animatable-properties" title="Animatable Properties">
            <p>The following property categories have tracks in the timeline:</p>
            <Table
              headers={['Category', 'Animatable Properties']}
              rows={[
                ['Transform', 'Position X/Y, Rotation, Scale X/Y, Skew X/Y, Opacity, Anchor Point X/Y'],
                ['Fill', 'Fill Color (RGBA), Fill Opacity, Gradient stop colors and positions'],
                ['Stroke', 'Stroke Color, Stroke Width, Stroke Opacity, Dash offset'],
                ['Effects', 'Blur Radius, Shadow Offset X/Y, Shadow Blur, Shadow Color, Glow Radius, Glow Color'],
                ['Shape', 'Corner Radius, Path vertices (morph), Trim Path Start/End/Offset'],
                ['Text', 'Font Size, Character Spacing, Baseline Shift, all per-character transforms in character/word mode'],
                ['Layout', 'Width, Height (for fixed-frame elements), Padding values'],
              ]}
            />
          </Section>

          <Section id="the-timeline-ruler" title="The Timeline Ruler">
            <p>The ruler at the top of the timeline panel shows the time axis. By default it displays frame numbers. The ruler can be switched to display timecode (<code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">HH:MM:SS:FF</code>) or seconds via the timeline settings menu.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Zoom:</strong> Scroll the mouse wheel over the timeline to zoom in or out on the time axis. Zooming in reveals finer frame-level detail; zooming out gives a broader view of the full animation.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Pan:</strong> Middle-click drag, or hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Space</code> and drag, to pan the timeline view horizontally without moving the playhead.</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Fit to window:</strong> Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">F</code> in the timeline to zoom and pan so the full sequence duration is visible.</li>
            </ul>
          </Section>

          <Section id="work-area" title="Work Area">
            <p>The work area defines the range of the timeline that will be played during preview and exported. It is shown as a highlighted bar in the ruler.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Drag the left or right edge of the work area bar to set the In and Out points</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">B</code> to set the work area In point to the current playhead position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Press <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">N</code> to set the work area Out point to the current playhead position</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Double-click the work area bar to reset it to the full document duration</li>
            </ul>
          </Section>

          <Section id="playback-and-preview" title="Playback & Preview">
            <p>The transport controls in the timeline panel manage playback of the animation within the editor.</p>
          </Section>

          <Section id="transport-controls" title="Transport Controls">
            <Table
              headers={['Control', 'Shortcut', 'Action']}
              rows={[
                ['Play / Pause', 'Space', 'Starts or pauses real-time playback from the current playhead position'],
                ['Stop', 'Shift+Space', 'Stops playback and returns the playhead to the work area In point'],
                ['Step Back 1 Frame', 'Left Arrow', 'Moves the playhead one frame earlier'],
                ['Step Forward 1 Frame', 'Right Arrow', 'Moves the playhead one frame later'],
                ['Go to Start', 'Home', 'Jumps the playhead to frame 0 (or work area In point)'],
                ['Go to End', 'End', 'Jumps the playhead to the last frame (or work area Out point)'],
                ['Previous Keyframe', 'J', 'Jumps to the nearest keyframe earlier than the current position on any selected track'],
                ['Next Keyframe', '; (semicolon)', 'Jumps to the nearest keyframe later than the current position on any selected track'],
                ['Loop Toggle', 'Ctrl+L', 'Toggles looping,playback restarts from In point when it reaches the Out point'],
              ]}
            />
          </Section>

          <Section id="playback-speed" title="Playback Speed">
            <p>The playback speed multiplier is shown in the transport bar. Click to change:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">0.25×</strong>,quarter speed, useful for reviewing fast motion or easing curves</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">0.5×</strong>,half speed</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">1×</strong>,real time (default)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">2×</strong>,double speed</li>
            </ul>
            <p>Playback speed does not affect export. It only controls how fast the editor plays back for review purposes.</p>
          </Section>

          <Section id="preview-quality" title="Preview Quality">
            <p>The preview quality setting controls how the canvas is rendered during playback. Higher quality is more accurate but requires more processing power.</p>
            <Table
              headers={['Mode', 'Description']}
              rows={[
                ['Draft', 'Reduced resolution, effects simplified. Maintains smooth real-time playback on most hardware.'],
                ['Normal', 'Full resolution, most effects rendered. Recommended for general review.'],
                ['Full Quality', 'All effects, full resolution, no simplifications. May drop frames on complex scenes.'],
              ]}
            />
            <p>The current playback frame rate is displayed in the timeline status bar. If it drops below the document frame rate, consider switching to Draft mode.</p>
          </Section>

          <Section id="scrubbing" title="Scrubbing">
            <p>Dragging the playhead handle manually through the timeline is called <strong className="text-white">scrubbing</strong>. The canvas updates in real time as you drag, allowing frame-accurate review of motion.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Fast scrub:</strong> Drag the playhead at normal speed,the canvas updates as fast as the hardware allows</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Precise scrub:</strong> Hold <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Shift</code> while dragging to reduce the playhead's movement speed for frame-by-frame precision</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Clicking anywhere in the timeline ruler (not on a track) also jumps the playhead to that position</li>
            </ul>
          </Section>

          <Section id="onion-skinning" title="Onion Skinning">
            <p>Onion skinning overlays semi-transparent ghost frames from adjacent time positions onto the canvas, helping visualize the trajectory and spacing of motion.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Toggle onion skin: <code className="text-yellow-accent bg-white/5 px-1.5 py-0.5 rounded">Ctrl+Shift+O</code></li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Frame spread:</strong> Number of frames before and after the current frame to show as ghost layers (default: 2 frames each direction)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Opacity falloff:</strong> Closer frames appear more opaque; frames further away are more transparent</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Color tint:</strong> Past frames appear in red tint; future frames appear in green tint by default (configurable)</li>
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
