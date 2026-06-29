import { useLocation } from 'react-router-dom';
import { Play } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import VideoEmbed from '../components/VideoEmbed';

const tutorialVideos: Record<string, { id: string; url: string }> = {
  '/tutorials/how-to-create-a-new-project': {
    id: '7zYDaMDK_Fg',
    url: 'https://www.youtube.com/watch?v=7zYDaMDK_Fg',
  },
  '/tutorials/how-to-save-and-export-a-project': {
    id: 'H2KzO52VAsc',
    url: 'https://www.youtube.com/watch?v=H2KzO52VAsc',
  },
  '/tutorials/how-to-navigate-the-canvas': {
    id: 'Q0ykLG3Z4gM',
    url: 'https://www.youtube.com/watch?v=Q0ykLG3Z4gM',
  },
};

const tutorialTitles: Record<string, string> = {
  '/tutorials/how-to-create-a-new-project': 'How to create a new project',
  '/tutorials/how-to-save-and-export-a-project': 'How to save and export a project',
  '/tutorials/how-to-navigate-the-canvas': 'How to navigate the canvas',
  '/tutorials/how-to-zoom-and-pan-efficiently': 'How to zoom and pan efficiently',
  '/tutorials/how-to-change-background-color': 'How to change background color',
  '/tutorials/how-to-switch-between-light-and-dark-mode': 'How to switch between light and dark mode',
  '/tutorials/how-to-organize-layers': 'How to organize layers',
  '/tutorials/how-to-lock-unlock-layers': 'How to lock/unlock layers',
  '/tutorials/how-to-hide-unhide-layers': 'How to hide/unhide layers',
  '/tutorials/how-to-use-the-undo-redo-history': 'How to use the undo/redo history',
  '/tutorials/how-to-create-a-rectangle': 'How to create a rectangle',
  '/tutorials/how-to-create-a-circle': 'How to create a circle',
  '/tutorials/how-to-create-a-line': 'How to create a line',
  '/tutorials/how-to-create-custom-polygon-shapes': 'How to create custom polygon shapes',
  '/tutorials/how-to-edit-shape-properties': 'How to edit shape properties (size, position, rotation)',
  '/tutorials/how-to-copy-paste-shapes': 'How to copy/paste shapes',
  '/tutorials/how-to-duplicate-objects': 'How to duplicate objects',
  '/tutorials/how-to-align-objects-perfectly': 'How to align objects perfectly',
  '/tutorials/how-to-distribute-objects-evenly': 'How to distribute objects evenly',
  '/tutorials/how-to-group-and-ungroup-objects': 'How to group and ungroup objects',
  '/tutorials/how-to-fill-a-shape-with-color': 'How to fill a shape with color',
  '/tutorials/how-to-apply-gradient-fills': 'How to apply gradient fills',
  '/tutorials/how-to-use-stroke-border-settings': 'How to use stroke/border settings',
  '/tutorials/how-to-adjust-opacity': 'How to adjust opacity',
  '/tutorials/how-to-use-color-presets': 'How to use color presets',
  '/tutorials/how-to-use-eyedropper-tool-to-pick-colors': 'How to use eyedropper tool to pick colors',
  '/tutorials/how-to-save-custom-color-palettes': 'How to save custom color palettes',
  '/tutorials/how-to-apply-shadows-and-glows': 'How to apply shadows and glows',
  '/tutorials/how-to-add-inner-shadows': 'How to add inner shadows',
  '/tutorials/how-to-apply-texture-overlays': 'How to apply texture overlays',
  '/tutorials/how-to-animate-position': 'How to animate position',
  '/tutorials/how-to-animate-scale': 'How to animate scale',
  '/tutorials/how-to-animate-rotation': 'How to animate rotation',
  '/tutorials/how-to-animate-opacity': 'How to animate opacity',
  '/tutorials/how-to-use-easing-presets': 'How to use easing presets',
  '/tutorials/how-to-create-keyframes': 'How to create keyframes',
  '/tutorials/how-to-copy-and-paste-keyframes': 'How to copy and paste keyframes',
  '/tutorials/how-to-adjust-timing-of-animations': 'How to adjust timing of animations',
  '/tutorials/how-to-use-the-timeline-efficiently': 'How to use the timeline efficiently',
  '/tutorials/how-to-preview-animations': 'How to preview animations',
  '/tutorials/how-to-create-compound-animations': 'How to create compound animations',
  '/tutorials/how-to-use-motion-paths': 'How to use motion paths',
  '/tutorials/how-to-loop-animations': 'How to loop animations',
  '/tutorials/how-to-reverse-animations': 'How to reverse animations',
  '/tutorials/how-to-create-offset-animations-for-multiple-objects': 'How to create offset animations for multiple objects',
  '/tutorials/how-to-apply-auto-align-animation': 'How to apply auto-align animation',
  '/tutorials/how-to-use-animation-presets': 'How to use animation presets',
  '/tutorials/how-to-animate-masks': 'How to animate masks',
  '/tutorials/how-to-animate-gradients-or-color-changes': 'How to animate gradients or color changes',
  '/tutorials/how-to-animate-text-properties': 'How to animate text properties',
  '/tutorials/how-to-create-a-basic-mask': 'How to create a basic mask',
  '/tutorials/how-to-animate-a-mask': 'How to animate a mask',
  '/tutorials/how-to-invert-masks': 'How to invert masks',
  '/tutorials/how-to-use-multiple-masks-on-a-single-layer': 'How to use multiple masks on a single layer',
  '/tutorials/how-to-apply-blur-effects': 'How to apply blur effects',
  '/tutorials/how-to-apply-glow-effects': 'How to apply glow effects',
  '/tutorials/how-to-apply-shadow-effects': 'How to apply shadow effects',
  '/tutorials/how-to-apply-distortion-effects': 'How to apply distortion effects',
  '/tutorials/how-to-combine-multiple-effects': 'How to combine multiple effects',
  '/tutorials/how-to-save-and-reuse-effect-presets': 'How to save and reuse effect presets',
};

export default function TutorialDetail() {
  const location = useLocation();
  const title = tutorialTitles[location.pathname];
  const video = tutorialVideos[location.pathname];

  if (!title) {
    return null;
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={`Learn ${title.toLowerCase()} in FlashFX`}
        keywords="FlashFX, tutorial, animation"
      />
      <div className="space-y-8">
        <h1 className="text-4xl font-semibold text-white">{title}</h1>

        {video ? (
          <VideoEmbed videoId={video.id} youtubeUrl={video.url} />
        ) : (
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 bg-navy-darker rounded-lg flex flex-col items-center justify-center">
              <Play className="w-16 h-16 text-white/20 mb-4" />
              <p className="text-sm text-white/40">Video coming soon</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
