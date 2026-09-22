import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SidebarStateProvider } from './contexts/SidebarStateContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CompareAfterEffects from './pages/compare/AfterEffects';
import CompareCapCut from './pages/compare/CapCut';
import CompareDaVinciResolve from './pages/compare/DaVinciResolve';
import FreeMotionGraphics from './pages/compare/FreeMotionGraphics';
import LightweightEditor from './pages/compare/LightweightEditor';
import Editor from './pages/Editor';
import Features from './pages/Features';
import Runtimes from './pages/Runtimes';
import FeatureSupport from './pages/FeatureSupport';
import Tutorials from './pages/Tutorials';
import TutorialDetail from './pages/TutorialDetail';
import TroubleshootingDetail from './pages/TroubleshootingDetail';
import BestPractices from './pages/BestPractices';
import QuickLinks from './pages/QuickLinks';
import Creators from './pages/Creators';
import Community from './pages/Community';
import Blog from './pages/Blog';
import EarlyAccess from './pages/EarlyAccess';
import CommunityOverview from './pages/CommunityOverview';
import MarketplaceOverview from './pages/MarketplaceOverview';
import Experts from './pages/Experts';
import AccountOverview from './pages/AccountOverview';
import Workspaces from './pages/Workspaces';
import Pricing from './pages/Pricing';
import S3Bucket from './pages/S3Bucket';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import BeginnerToHero from './pages/BeginnerToHero';
import BeginnerToHeroStep from './pages/BeginnerToHeroStep';

import ThreeDOverview from './pages/threed/Overview';
import ThreeDTechnologyStack from './pages/threed/TechnologyStack';
import ThreeDFileStructure from './pages/threed/FileStructure';
import ThreeDPerShapeRenderer from './pages/threed/architecture/PerShapeRenderer';
import ThreeDCanvasIntegration from './pages/threed/architecture/CanvasIntegration';
import ThreeDDirtyFlagRenderLoop from './pages/threed/architecture/DirtyFlagRenderLoop';
import ThreeDModeSystem from './pages/threed/architecture/ModeSystem';
import ThreeDSceneSerialization from './pages/threed/architecture/SceneSerialization';
import ThreeDShapeElement from './pages/threed/api/ThreeDShapeElement';
import ThreeDEngine from './pages/threed/api/ThreeDEngine';
import ThreeDSceneManager from './pages/threed/api/SceneManager';
import ThreeDGizmoController from './pages/threed/api/GizmoController';
import ThreeDGeometryFactory from './pages/threed/api/GeometryFactory';
import ThreeDMaterialSystem from './pages/threed/api/MaterialSystem';
import ThreeDPropertiesPanel from './pages/threed/api/PropertiesPanel';
import ThreeDTextureSystem from './pages/threed/api/TextureSystem';
import ThreeDModelImport from './pages/threed/api/ModelImport';
import ThreeDShapeLibrary from './pages/threed/api/ShapeLibrary';
import ThreeDPerformance from './pages/threed/guides/Performance';
import ThreeDKeyboardShortcuts from './pages/threed/guides/KeyboardShortcuts';
import ThreeDTroubleshooting from './pages/threed/guides/Troubleshooting';
import ThreeDExtending from './pages/threed/guides/Extending';

import InterfaceOverviewOverview from './pages/editor/interface-overview/Overview';
import InterfaceOverviewToolbar from './pages/editor/interface-overview/Toolbar';
import InterfaceOverviewHierarchy from './pages/editor/interface-overview/Hierarchy';
import InterfaceOverviewInspector from './pages/editor/interface-overview/Inspector';
import InterfaceOverviewStage from './pages/editor/interface-overview/Stage';

import WhatIsFlashFX from './pages/editor/fundamentals/WhatIsFlashFX';
import InterfaceOverview from './pages/editor/fundamentals/InterfaceOverview';
import WorkspaceModes from './pages/editor/fundamentals/WorkspaceModes';
import CanvasProjectSetup from './pages/editor/fundamentals/CanvasProjectSetup';
import ApplicationSettings from './pages/editor/fundamentals/ApplicationSettings';
import GridRulersGuides from './pages/editor/fundamentals/GridRulersGuides';
import SnappingSystem from './pages/editor/fundamentals/SnappingSystem';
import ZoomNavigation from './pages/editor/fundamentals/ZoomNavigation';
import ColorSystem from './pages/editor/fundamentals/ColorSystem';
import PanelsLayout from './pages/editor/fundamentals/PanelsLayout';
import AccountsStorage from './pages/editor/fundamentals/AccountsStorage';
import KeyboardShortcuts from './pages/editor/fundamentals/KeyboardShortcuts';
import Accessibility from './pages/editor/fundamentals/Accessibility';

import ShapePrimitives from './pages/editor/shapes/ShapePrimitives';
import ShapesOverview from './pages/editor/shapes/Overview';
import Bones from './pages/editor/shapes/Bones';
import BoneTips from './pages/editor/shapes/BoneTips';
import Meshes from './pages/editor/shapes/Meshes';
import Clipping from './pages/editor/shapes/Clipping';
import Solos from './pages/editor/shapes/Solos';
import TrimPath from './pages/editor/shapes/TrimPath';
import Joysticks from './pages/editor/shapes/Joysticks';
import PenTool from './pages/editor/shapes/PenTool';
import TransformOperations from './pages/editor/shapes/TransformOperations';
import VertexEditing from './pages/editor/shapes/VertexEditing';
import BooleanOperations from './pages/editor/shapes/BooleanOperations';
import MaterialSystem from './pages/editor/shapes/MaterialSystem';
import FillTypes from './pages/editor/shapes/FillTypes';
import StrokeProperties from './pages/editor/shapes/StrokeProperties';
import ShadowsGlow from './pages/editor/shapes/ShadowsGlow';
import ShapeBlendModes from './pages/editor/shapes/BlendModes';
import ShapeEffects from './pages/editor/shapes/ShapeEffects';
import GroupsComposition from './pages/editor/shapes/GroupsComposition';
import AlignmentDistribution from './pages/editor/shapes/AlignmentDistribution';
import ZOrderManagement from './pages/editor/shapes/ZOrderManagement';

import PlacingText from './pages/editor/text/PlacingText';
import TextBoxModes from './pages/editor/text/TextBoxModes';
import CharacterFormatting from './pages/editor/text/CharacterFormatting';
import ParagraphFormatting from './pages/editor/text/ParagraphFormatting';
import TypographyControls from './pages/editor/text/TypographyControls';
import TextFill from './pages/editor/text/TextFill';
import TextStroke from './pages/editor/text/TextStroke';
import TextShadow from './pages/editor/text/TextShadow';
import TextBackground from './pages/editor/text/TextBackground';
import TextTransform from './pages/editor/text/TextTransform';
import AnimationModes from './pages/editor/text/AnimationModes';
import StaggerAnimation from './pages/editor/text/StaggerAnimation';
import TextOnPath from './pages/editor/text/TextOnPath';
import ConvertToOutlines from './pages/editor/text/ConvertToOutlines';

import ImportingImages from './pages/editor/images/ImportingImages';
import TransformPlacement from './pages/editor/images/TransformPlacement';
import CroppingMaskingPage from './pages/editor/images/CroppingMaskingPage';
import ImageFillMode from './pages/editor/images/ImageFillMode';
import ColorAdjustment from './pages/editor/images/ColorAdjustment';
import BlurFilters from './pages/editor/images/BlurFilters';
import ArtisticFilters from './pages/editor/images/ArtisticFilters';
import DistortionFiltersPage from './pages/editor/images/DistortionFiltersPage';
import LightAtmosphere from './pages/editor/images/LightAtmosphere';
import FilterStacking from './pages/editor/images/FilterStacking';
import AnimatingImagesPage from './pages/editor/images/AnimatingImagesPage';
import AIGeneratedImages from './pages/editor/images/AIGeneratedImages';
import AssetManagement from './pages/editor/images/AssetManagement';
import PerformanceGuidelines from './pages/editor/images/PerformanceGuidelines';

import ConstraintsOverview from './pages/editor/constraints/Overview';
import IKConstraint from './pages/editor/constraints/IKConstraint';
import DistanceConstraint from './pages/editor/constraints/DistanceConstraint';
import ScaleConstraint from './pages/editor/constraints/ScaleConstraint';
import RotationConstraint from './pages/editor/constraints/RotationConstraint';
import TransformConstraint from './pages/editor/constraints/TransformConstraint';
import TranslationConstraint from './pages/editor/constraints/TranslationConstraint';
import FollowPathConstraint from './pages/editor/constraints/FollowPathConstraint';
import ScrollConstraints from './pages/editor/constraints/ScrollConstraints';

import EnteringMode from './pages/editor/animate/EnteringMode';
import KeyframeSystem from './pages/editor/animate/KeyframeSystem';
import PropertyTracks from './pages/editor/animate/PropertyTracks';
import EasingInterpolation from './pages/editor/animate/EasingInterpolation';
import EasingGraph from './pages/editor/animate/EasingGraph';
import EasingPresets from './pages/editor/animate/EasingPresets';
import MultiProperty from './pages/editor/animate/MultiProperty';
import AnimatingColors from './pages/editor/animate/AnimatingColors';
import PathAnimation from './pages/editor/animate/PathAnimation';
import MorphDeform from './pages/editor/animate/MorphDeform';
import ParentingHierarchy from './pages/editor/animate/ParentingHierarchy';
import Expressions from './pages/editor/animate/Expressions';
import MotionPaths from './pages/editor/animate/MotionPaths';
import Looping from './pages/editor/animate/Looping';
import PlaybackPreview from './pages/editor/animate/PlaybackPreview';

import RenderingEnvironment from './pages/editor/gpu/RenderingEnvironment';
import WebGLArchitecture from './pages/editor/gpu/WebGLArchitecture';
import MemoryManagement from './pages/editor/gpu/MemoryManagement';
import BlendModeConstraints from './pages/editor/gpu/BlendModeConstraints';
import FilterCosts from './pages/editor/gpu/FilterCosts';
import ThreeDTransform from './pages/editor/gpu/ThreeDTransform';
import PerspectiveCamera from './pages/editor/gpu/PerspectiveCamera';
import ZDepthOrdering from './pages/editor/gpu/ZDepthOrdering';
import ThreeDLighting from './pages/editor/gpu/ThreeDLighting';
import TierDetection from './pages/editor/gpu/TierDetection';
import ProfilingTools from './pages/editor/gpu/ProfilingTools';
import BrowserConstraints from './pages/editor/gpu/BrowserConstraints';
import ThreeDOptimization from './pages/editor/gpu/ThreeDOptimization';
import ThreeDExporting from './pages/editor/gpu/ThreeDExporting';

import TimelineArchitecture from './pages/editor/timeline/Architecture';
import RulerTimeDisplay from './pages/editor/timeline/RulerTimeDisplay';
import TrackOrganization from './pages/editor/timeline/TrackOrganization';
import KeyframeOperations from './pages/editor/timeline/KeyframeOperations';
import TimelineGraphEditor from './pages/editor/timeline/GraphEditor';
import WorkArea from './pages/editor/timeline/WorkArea';
import TimeRemapping from './pages/editor/timeline/TimeRemapping';
import LayerDuration from './pages/editor/timeline/LayerDuration';
import SequenceCompositor from './pages/editor/timeline/SequenceCompositor';
import NestedSequences from './pages/editor/timeline/NestedSequences';
import TimelineMarkers from './pages/editor/timeline/Markers';
import SearchFiltering from './pages/editor/timeline/SearchFiltering';
import RenderingCues from './pages/editor/timeline/RenderingCues';
import AdvancedWorkflows from './pages/editor/timeline/AdvancedWorkflows';

import StateMachinesOverview from './pages/editor/state-machines/Overview';
import States from './pages/editor/state-machines/States';
import Inputs from './pages/editor/state-machines/Inputs';
import Transitions from './pages/editor/state-machines/Transitions';
import Listeners from './pages/editor/state-machines/Listeners';
import Layers from './pages/editor/state-machines/Layers';

import EventsOverview from './pages/editor/events/Overview';
import AudioEvents from './pages/editor/events/AudioEvents';

import DataBindingOverview from './pages/editor/data-binding/Overview';
import Lists from './pages/editor/data-binding/Lists';

import LayoutsOverview from './pages/editor/layouts/Overview';
import Tools from './pages/editor/layouts/Tools';
import Parameters from './pages/editor/layouts/Parameters';
import Styles from './pages/editor/layouts/Styles';
import Animation from './pages/editor/layouts/Animation';
import NSlicing from './pages/editor/layouts/NSlicing';
import Scrolling from './pages/editor/layouts/Scrolling';

import ExportingRuntime from './pages/editor/exporting/Runtime';
import ExportingVideoOrStatic from './pages/editor/exporting/VideoOrStatic';
import ExportingBackup from './pages/editor/exporting/Backup';

import ShareLinksOverview from './pages/editor/share-links/Overview';
import FramerAndRive from './pages/editor/share-links/FramerAndRive';

import LiteOverview from './pages/lite/Overview';
import LiteInterface from './pages/lite/Interface';
import LiteCreatingProject from './pages/lite/CreatingProject';
import LiteObjects from './pages/lite/Objects';
import LiteAnimation from './pages/lite/Animation';
import LiteGestures from './pages/lite/Gestures';
import LiteExport from './pages/lite/Export';
import LiteLimitations from './pages/lite/Limitations';
import LiteTroubleshooting from './pages/lite/Troubleshooting';
import LiteUpgrade from './pages/lite/Upgrade';
import LiteSquare from './pages/lite/objects/Square';
import LiteCircle from './pages/lite/objects/Circle';
import LiteLine from './pages/lite/objects/Line';
import LiteObjectText from './pages/lite/objects/Text';

/**
 * The route table on its own, with no router around it, so the client entry
 * can wrap it in BrowserRouter and the prerenderer (scripts/prerender.mjs via
 * src/entry-server.tsx) can wrap the same tree in StaticRouter.
 */
export function AppRoutes() {
  return (
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/features" element={<Features />} />
          <Route path="/runtimes" element={<Runtimes />} />
          <Route path="/feature-support" element={<FeatureSupport />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/how-to-create-a-new-project" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-save-and-export-a-project" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-navigate-the-canvas" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-zoom-and-pan-efficiently" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-change-background-color" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-switch-between-light-and-dark-mode" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-organize-layers" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-lock-unlock-layers" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-hide-unhide-layers" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-the-undo-redo-history" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-a-rectangle" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-a-circle" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-a-line" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-custom-polygon-shapes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-edit-shape-properties" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-copy-paste-shapes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-duplicate-objects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-align-objects-perfectly" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-distribute-objects-evenly" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-group-and-ungroup-objects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-fill-a-shape-with-color" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-gradient-fills" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-stroke-border-settings" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-adjust-opacity" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-color-presets" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-eyedropper-tool-to-pick-colors" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-save-custom-color-palettes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-shadows-and-glows" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-add-inner-shadows" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-texture-overlays" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-position" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-scale" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-rotation" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-opacity" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-easing-presets" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-keyframes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-copy-and-paste-keyframes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-adjust-timing-of-animations" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-the-timeline-efficiently" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-preview-animations" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-compound-animations" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-motion-paths" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-loop-animations" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-reverse-animations" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-offset-animations-for-multiple-objects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-auto-align-animation" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-animation-presets" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-masks" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-gradients-or-color-changes" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-text-properties" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-create-a-basic-mask" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-animate-a-mask" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-invert-masks" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-use-multiple-masks-on-a-single-layer" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-blur-effects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-glow-effects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-shadow-effects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-apply-distortion-effects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-combine-multiple-effects" element={<TutorialDetail />} />
          <Route path="/tutorials/how-to-save-and-reuse-effect-presets" element={<TutorialDetail />} />

          <Route path="/troubleshooting/editor-is-slow" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/canvas-is-not-rendering" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-export-fails" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/file-cannot-be-opened" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/changes-are-not-saving" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/project-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/project-does-not-save-or-export" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/cannot-navigate-the-canvas" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/zoom-or-pan-is-not-working-correctly" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/canvas-background-color-does-not-change" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/light-mode-or-dark-mode-does-not-switch" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/layers-are-disorganized-or-hard-to-manage" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/layer-cannot-be-locked-or-unlocked" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/layer-will-not-hide-or-unhide" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/undo-or-redo-history-is-not-working" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/rectangle-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/circle-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/line-tool-is-not-drawing-lines" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/custom-polygon-shapes-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/shape-size-position-or-rotation-cannot-be-edited" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/copy-and-paste-of-shapes-does-not-work" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/objects-are-not-duplicating" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/objects-will-not-align-correctly" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/objects-cannot-be-distributed-evenly" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/objects-cannot-be-grouped-or-ungrouped" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/shape-color-fill-does-not-apply" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/gradient-fill-is-not-working" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/stroke-or-border-settings-are-not-visible-or-applied" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/opacity-changes-are-not-applied" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/color-presets-are-missing-or-not-applying" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/eyedropper-tool-does-not-pick-colors" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/custom-color-palette-cannot-be-saved" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/shadow-or-glow-effects-are-not-visible" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/inner-shadows-are-not-appearing" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/texture-overlays-are-not-applying" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/position-animation-does-not-work" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/scale-animation-does-not-change-the-object-size" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/rotation-animation-does-not-rotate-objects" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/opacity-animation-does-not-fade-objects" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/easing-presets-are-not-affecting-animation" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/keyframes-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/keyframes-cannot-be-copied-or-pasted" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-timing-cannot-be-adjusted" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/timeline-is-difficult-to-control-or-not-responding" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-preview-does-not-play" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/compound-animations-are-not-working" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/motion-paths-are-not-applied-to-objects" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-will-not-loop" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-will-not-reverse" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/multiple-objects-do-not-animate-with-offset-timing" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/auto-align-animation-is-not-working" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/animation-presets-are-not-applying" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/masks-cannot-be-animated" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/gradient-or-color-animation-is-not-working" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/text-properties-cannot-be-animated" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/mask-cannot-be-created" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/mask-animation-does-not-work" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/mask-inversion-does-not-apply" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/multiple-masks-do-not-work-on-the-same-layer" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/blur-effect-is-not-visible" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/glow-effect-is-not-visible" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/shadow-effect-does-not-appear" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/distortion-effects-are-not-applied" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/multiple-effects-conflict-or-do-not-combine-correctly" element={<TroubleshootingDetail />} />
          <Route path="/troubleshooting/effect-presets-cannot-be-saved-or-reused" element={<TroubleshootingDetail />} />

          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/quick-links" element={<QuickLinks />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/community-overview" element={<CommunityOverview />} />
          <Route path="/marketplace-overview" element={<MarketplaceOverview />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/account-overview" element={<AccountOverview />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/s3-bucket" element={<S3Bucket />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />

          <Route path="/editor/3d/overview" element={<ThreeDOverview />} />
          <Route path="/editor/3d/technology-stack" element={<ThreeDTechnologyStack />} />
          <Route path="/editor/3d/file-structure" element={<ThreeDFileStructure />} />
          <Route path="/editor/3d/architecture/per-shape-renderer" element={<ThreeDPerShapeRenderer />} />
          <Route path="/editor/3d/architecture/canvas-integration" element={<ThreeDCanvasIntegration />} />
          <Route path="/editor/3d/architecture/dirty-flag-render-loop" element={<ThreeDDirtyFlagRenderLoop />} />
          <Route path="/editor/3d/architecture/mode-system" element={<ThreeDModeSystem />} />
          <Route path="/editor/3d/architecture/scene-serialization" element={<ThreeDSceneSerialization />} />
          <Route path="/editor/3d/api/threedshapeelement" element={<ThreeDShapeElement />} />
          <Route path="/editor/3d/api/threedengine" element={<ThreeDEngine />} />
          <Route path="/editor/3d/api/scenemanager" element={<ThreeDSceneManager />} />
          <Route path="/editor/3d/api/gizmocontroller" element={<ThreeDGizmoController />} />
          <Route path="/editor/3d/api/geometryfactory" element={<ThreeDGeometryFactory />} />
          <Route path="/editor/3d/api/materialsystem" element={<ThreeDMaterialSystem />} />
          <Route path="/editor/3d/api/properties-panel" element={<ThreeDPropertiesPanel />} />
          <Route path="/editor/3d/api/texture-system" element={<ThreeDTextureSystem />} />
          <Route path="/editor/3d/api/model-import" element={<ThreeDModelImport />} />
          <Route path="/editor/3d/api/shape-library" element={<ThreeDShapeLibrary />} />
          <Route path="/editor/3d/guides/performance" element={<ThreeDPerformance />} />
          <Route path="/editor/3d/guides/keyboard-shortcuts" element={<ThreeDKeyboardShortcuts />} />
          <Route path="/editor/3d/guides/troubleshooting" element={<ThreeDTroubleshooting />} />
          <Route path="/editor/3d/guides/extending" element={<ThreeDExtending />} />

          <Route path="/editor/interface-overview/overview" element={<InterfaceOverviewOverview />} />
          <Route path="/editor/interface-overview/toolbar" element={<InterfaceOverviewToolbar />} />
          <Route path="/editor/interface-overview/hierarchy" element={<InterfaceOverviewHierarchy />} />
          <Route path="/editor/interface-overview/inspector" element={<InterfaceOverviewInspector />} />
          <Route path="/editor/interface-overview/stage" element={<InterfaceOverviewStage />} />

          <Route path="/editor/fundamentals/what-is-flashfx" element={<WhatIsFlashFX />} />
          <Route path="/editor/fundamentals/interface-overview" element={<InterfaceOverview />} />
          <Route path="/editor/fundamentals/workspace-modes" element={<WorkspaceModes />} />
          <Route path="/editor/fundamentals/canvas-project-setup" element={<CanvasProjectSetup />} />
          <Route path="/editor/fundamentals/application-settings" element={<ApplicationSettings />} />
          <Route path="/editor/fundamentals/grid-rulers-guides" element={<GridRulersGuides />} />
          <Route path="/editor/fundamentals/snapping-system" element={<SnappingSystem />} />
          <Route path="/editor/fundamentals/zoom-navigation" element={<ZoomNavigation />} />
          <Route path="/editor/fundamentals/color-system" element={<ColorSystem />} />
          <Route path="/editor/fundamentals/panels-layout" element={<PanelsLayout />} />
          <Route path="/editor/fundamentals/accounts-storage" element={<AccountsStorage />} />
          <Route path="/editor/fundamentals/keyboard-shortcuts" element={<KeyboardShortcuts />} />
          <Route path="/editor/fundamentals/accessibility" element={<Accessibility />} />

          <Route path="/editor/shapes/primitives" element={<ShapePrimitives />} />
          <Route path="/editor/shapes/overview" element={<ShapesOverview />} />
          <Route path="/editor/shapes/bones" element={<Bones />} />
          <Route path="/editor/shapes/bone-tips" element={<BoneTips />} />
          <Route path="/editor/shapes/meshes" element={<Meshes />} />
          <Route path="/editor/shapes/clipping" element={<Clipping />} />
          <Route path="/editor/shapes/solos" element={<Solos />} />
          <Route path="/editor/shapes/trim-path" element={<TrimPath />} />
          <Route path="/editor/shapes/joysticks" element={<Joysticks />} />
          <Route path="/editor/shapes/pen-tool" element={<PenTool />} />
          <Route path="/editor/shapes/transform-operations" element={<TransformOperations />} />
          <Route path="/editor/shapes/vertex-editing" element={<VertexEditing />} />
          <Route path="/editor/shapes/boolean-operations" element={<BooleanOperations />} />
          <Route path="/editor/shapes/material-system" element={<MaterialSystem />} />
          <Route path="/editor/shapes/fill-types" element={<FillTypes />} />
          <Route path="/editor/shapes/stroke-properties" element={<StrokeProperties />} />
          <Route path="/editor/shapes/shadows-glow" element={<ShadowsGlow />} />
          <Route path="/editor/shapes/blend-modes" element={<ShapeBlendModes />} />
          <Route path="/editor/shapes/shape-effects" element={<ShapeEffects />} />
          <Route path="/editor/shapes/groups-composition" element={<GroupsComposition />} />
          <Route path="/editor/shapes/alignment-distribution" element={<AlignmentDistribution />} />
          <Route path="/editor/shapes/z-order" element={<ZOrderManagement />} />

          <Route path="/editor/text/placing-text" element={<PlacingText />} />
          <Route path="/editor/text/text-box-modes" element={<TextBoxModes />} />
          <Route path="/editor/text/character-formatting" element={<CharacterFormatting />} />
          <Route path="/editor/text/paragraph-formatting" element={<ParagraphFormatting />} />
          <Route path="/editor/text/typography-controls" element={<TypographyControls />} />
          <Route path="/editor/text/text-fill" element={<TextFill />} />
          <Route path="/editor/text/text-stroke" element={<TextStroke />} />
          <Route path="/editor/text/text-shadow" element={<TextShadow />} />
          <Route path="/editor/text/text-background" element={<TextBackground />} />
          <Route path="/editor/text/text-transform" element={<TextTransform />} />
          <Route path="/editor/text/animation-modes" element={<AnimationModes />} />
          <Route path="/editor/text/stagger-animation" element={<StaggerAnimation />} />
          <Route path="/editor/text/text-on-path" element={<TextOnPath />} />
          <Route path="/editor/text/convert-to-outlines" element={<ConvertToOutlines />} />

          <Route path="/editor/images/importing" element={<ImportingImages />} />
          <Route path="/editor/images/transform-placement" element={<TransformPlacement />} />
          <Route path="/editor/images/cropping-masking" element={<CroppingMaskingPage />} />
          <Route path="/editor/images/fill-mode" element={<ImageFillMode />} />
          <Route path="/editor/images/color-adjustment" element={<ColorAdjustment />} />
          <Route path="/editor/images/blur-filters" element={<BlurFilters />} />
          <Route path="/editor/images/artistic-filters" element={<ArtisticFilters />} />
          <Route path="/editor/images/distortion-filters" element={<DistortionFiltersPage />} />
          <Route path="/editor/images/light-atmosphere" element={<LightAtmosphere />} />
          <Route path="/editor/images/filter-stacking" element={<FilterStacking />} />
          <Route path="/editor/images/animating-images" element={<AnimatingImagesPage />} />
          <Route path="/editor/images/ai-generated" element={<AIGeneratedImages />} />
          <Route path="/editor/images/asset-management" element={<AssetManagement />} />
          <Route path="/editor/images/performance" element={<PerformanceGuidelines />} />

          <Route path="/editor/constraints/overview" element={<ConstraintsOverview />} />
          <Route path="/editor/constraints/ik-constraint" element={<IKConstraint />} />
          <Route path="/editor/constraints/distance-constraint" element={<DistanceConstraint />} />
          <Route path="/editor/constraints/scale-constraint" element={<ScaleConstraint />} />
          <Route path="/editor/constraints/rotation-constraint" element={<RotationConstraint />} />
          <Route path="/editor/constraints/transform-constraint" element={<TransformConstraint />} />
          <Route path="/editor/constraints/translation-constraint" element={<TranslationConstraint />} />
          <Route path="/editor/constraints/follow-path-constraint" element={<FollowPathConstraint />} />
          <Route path="/editor/constraints/scroll-constraints" element={<ScrollConstraints />} />

          <Route path="/editor/animate/entering-mode" element={<EnteringMode />} />
          <Route path="/editor/animate/keyframe-system" element={<KeyframeSystem />} />
          <Route path="/editor/animate/property-tracks" element={<PropertyTracks />} />
          <Route path="/editor/animate/easing-interpolation" element={<EasingInterpolation />} />
          <Route path="/editor/animate/easing-graph" element={<EasingGraph />} />
          <Route path="/editor/animate/easing-presets" element={<EasingPresets />} />
          <Route path="/editor/animate/multi-property" element={<MultiProperty />} />
          <Route path="/editor/animate/animating-colors" element={<AnimatingColors />} />
          <Route path="/editor/animate/path-animation" element={<PathAnimation />} />
          <Route path="/editor/animate/morph-deform" element={<MorphDeform />} />
          <Route path="/editor/animate/parenting-hierarchy" element={<ParentingHierarchy />} />
          <Route path="/editor/animate/expressions" element={<Expressions />} />
          <Route path="/editor/animate/motion-paths" element={<MotionPaths />} />
          <Route path="/editor/animate/looping" element={<Looping />} />
          <Route path="/editor/animate/playback-preview" element={<PlaybackPreview />} />

          <Route path="/editor/gpu/rendering-environment" element={<RenderingEnvironment />} />
          <Route path="/editor/gpu/webgl-architecture" element={<WebGLArchitecture />} />
          <Route path="/editor/gpu/memory-management" element={<MemoryManagement />} />
          <Route path="/editor/gpu/blend-mode-constraints" element={<BlendModeConstraints />} />
          <Route path="/editor/gpu/filter-costs" element={<FilterCosts />} />
          <Route path="/editor/gpu/3d-transform" element={<ThreeDTransform />} />
          <Route path="/editor/gpu/perspective-camera" element={<PerspectiveCamera />} />
          <Route path="/editor/gpu/z-depth-ordering" element={<ZDepthOrdering />} />
          <Route path="/editor/gpu/3d-lighting" element={<ThreeDLighting />} />
          <Route path="/editor/gpu/tier-detection" element={<TierDetection />} />
          <Route path="/editor/gpu/profiling-tools" element={<ProfilingTools />} />
          <Route path="/editor/gpu/browser-constraints" element={<BrowserConstraints />} />
          <Route path="/editor/gpu/3d-optimization" element={<ThreeDOptimization />} />
          <Route path="/editor/gpu/3d-exporting" element={<ThreeDExporting />} />

          <Route path="/editor/timeline/architecture" element={<TimelineArchitecture />} />
          <Route path="/editor/timeline/ruler-time-display" element={<RulerTimeDisplay />} />
          <Route path="/editor/timeline/track-organization" element={<TrackOrganization />} />
          <Route path="/editor/timeline/keyframe-operations" element={<KeyframeOperations />} />
          <Route path="/editor/timeline/graph-editor" element={<TimelineGraphEditor />} />
          <Route path="/editor/timeline/work-area" element={<WorkArea />} />
          <Route path="/editor/timeline/time-remapping" element={<TimeRemapping />} />
          <Route path="/editor/timeline/layer-duration" element={<LayerDuration />} />
          <Route path="/editor/timeline/sequence-compositor" element={<SequenceCompositor />} />
          <Route path="/editor/timeline/nested-sequences" element={<NestedSequences />} />
          <Route path="/editor/timeline/markers" element={<TimelineMarkers />} />
          <Route path="/editor/timeline/search-filtering" element={<SearchFiltering />} />
          <Route path="/editor/timeline/rendering-cues" element={<RenderingCues />} />
          <Route path="/editor/timeline/advanced-workflows" element={<AdvancedWorkflows />} />

          <Route path="/editor/state-machines/overview" element={<StateMachinesOverview />} />
          <Route path="/editor/state-machines/states" element={<States />} />
          <Route path="/editor/state-machines/inputs" element={<Inputs />} />
          <Route path="/editor/state-machines/transitions" element={<Transitions />} />
          <Route path="/editor/state-machines/listeners" element={<Listeners />} />
          <Route path="/editor/state-machines/layers" element={<Layers />} />

          <Route path="/editor/events/overview" element={<EventsOverview />} />
          <Route path="/editor/events/audio-events" element={<AudioEvents />} />

          <Route path="/editor/data-binding/overview" element={<DataBindingOverview />} />
          <Route path="/editor/data-binding/lists" element={<Lists />} />

          <Route path="/editor/layouts/overview" element={<LayoutsOverview />} />
          <Route path="/editor/layouts/tools" element={<Tools />} />
          <Route path="/editor/layouts/parameters" element={<Parameters />} />
          <Route path="/editor/layouts/styles" element={<Styles />} />
          <Route path="/editor/layouts/animation" element={<Animation />} />
          <Route path="/editor/layouts/n-slicing" element={<NSlicing />} />
          <Route path="/editor/layouts/scrolling" element={<Scrolling />} />

          <Route path="/editor/exporting/runtime" element={<ExportingRuntime />} />
          <Route path="/editor/exporting/video-or-static" element={<ExportingVideoOrStatic />} />
          <Route path="/editor/exporting/backup" element={<ExportingBackup />} />

          <Route path="/editor/share-links/overview" element={<ShareLinksOverview />} />
          <Route path="/editor/share-links/framer-and-rive" element={<FramerAndRive />} />

          <Route path="/lite" element={<LiteOverview />} />
          <Route path="/lite/interface" element={<LiteInterface />} />
          <Route path="/lite/creating-project" element={<LiteCreatingProject />} />
          <Route path="/lite/objects" element={<LiteObjects />} />
          <Route path="/lite/objects/square" element={<LiteSquare />} />
          <Route path="/lite/objects/circle" element={<LiteCircle />} />
          <Route path="/lite/objects/line" element={<LiteLine />} />
          <Route path="/lite/objects/text" element={<LiteObjectText />} />
          <Route path="/lite/animation" element={<LiteAnimation />} />
          <Route path="/lite/gestures" element={<LiteGestures />} />
          <Route path="/lite/export" element={<LiteExport />} />
          <Route path="/lite/limitations" element={<LiteLimitations />} />
          <Route path="/lite/troubleshooting" element={<LiteTroubleshooting />} />
          <Route path="/lite/upgrade" element={<LiteUpgrade />} />

          <Route path="/compare/after-effects" element={<CompareAfterEffects />} />
          <Route path="/compare/capcut" element={<CompareCapCut />} />
          <Route path="/compare/davinci-resolve" element={<CompareDaVinciResolve />} />
          <Route path="/free-motion-graphics" element={<FreeMotionGraphics />} />
          <Route path="/lightweight-editor" element={<LightweightEditor />} />


          <Route path="/beginner-to-hero" element={<BeginnerToHero />} />
          <Route path="/beginner-to-hero/01-what-is-flashfx" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/02-the-interface" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/03-workspace-modes" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/04-canvas-and-project-setup" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/05-zoom-and-navigation" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/06-grid-guides-and-snapping" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/07-your-first-rectangle" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/08-circles-arcs-and-rings" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/09-stars-and-polygons" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/10-lines-and-arrowheads" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/11-the-pen-tool" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/12-vertex-editing" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/13-boolean-operations" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/14-the-material-stack" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/15-color-and-the-picker" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/16-gradients" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/17-textures-and-patterns" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/18-strokes" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/19-shadows" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/20-glow" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/21-blend-modes" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/22-groups-and-nesting" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/23-alignment-and-distribution" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/24-z-order-and-layers" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/25-masks-and-clipping" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/26-placing-text" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/27-formatting-text" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/28-styling-text" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/29-text-on-a-path" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/30-importing-images" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/31-cropping-and-image-fills" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/32-color-adjustment" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/33-filters" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/34-entering-animate-mode" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/35-your-first-keyframes" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/36-property-tracks" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/37-easing" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/38-the-easing-graph" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/39-animating-transforms" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/40-animating-color" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/41-motion-paths" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/42-text-animation" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/43-parenting-and-nulls" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/44-looping-and-time" element={<BeginnerToHeroStep />} />
          <Route path="/beginner-to-hero/45-preview-and-export" element={<BeginnerToHeroStep />} />







          <Route path="*" element={<NotFound />} />
          </Routes>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SidebarStateProvider>
          <AppRoutes />
        </SidebarStateProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
