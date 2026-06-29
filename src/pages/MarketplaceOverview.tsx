import Layout from '../components/Layout';
import SEO from '../components/SEO';

const tableOfContents = [
  { label: 'What is the Marketplace?', id: 'what-is-marketplace' },
  { label: 'How the Home Feed Works', id: 'home-feed' },
  { label: 'Recommendation Scoring Algorithm', id: 'scoring-algorithm' },
  { label: 'Categories and Filtering', id: 'categories-filtering' },
  { label: 'Search', id: 'search' },
  { label: 'Asset Detail Modal', id: 'asset-detail' },
  { label: 'Upload / Submission', id: 'upload-submission' },
  { label: 'Download and Purchase Flow', id: 'download-purchase' },
  { label: 'Creator Dashboard', id: 'creator-dashboard' },
  { label: 'Data Models', id: 'data-models' },
];

export default function MarketplaceOverview() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Marketplace Overview"
        description="Complete overview of the FlashFX Marketplace,a digital distribution platform for motion graphics and video production assets."
        keywords="FlashFX, marketplace, assets, templates, 3D, motion graphics, creator dashboard"
      />

      <div className="space-y-8">
        <div>
          <div className="mb-3">
            <h1 className="text-4xl font-semibold text-white">Marketplace Overview</h1>
            <p className="text-sm text-blue-muted mt-2">Digital Distribution Platform for Creative Assets</p>
          </div>
        </div>

        <div id="what-is-marketplace" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">1. What is the Marketplace?</h2>

          <p className="text-sm text-white leading-relaxed">
            The marketplace is a digital distribution platform for creative motion graphics and video production assets. It serves two audiences: creators who upload and sell their work, and users who browse, search, and download content.
          </p>

          <p className="text-sm text-white leading-relaxed">
            It supports three distinct content types:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Content Type</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">File Format(s)</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Marketplace Assets</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">.ffx</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Animation templates and effects</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Projects</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">.ffxproj</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Full project files with multiple scenes</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">3D Assets</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">.blend, .fbx, .obj, .gltf, .c4d, .ma</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">3D models and elements</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="home-feed" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">2. How the Home Feed Works</h2>

          <p className="text-sm text-white leading-relaxed">
            When no category is selected, the main page displays a curated set of horizontal content rows, each populated by a recommendation engine. Each row shows 6 items. Items shown in one row are never repeated in another.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Row Type</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">"For You" rows</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Personalized rows for authenticated users, based on category interaction history. Up to 3 rows, one per top-interacted category. Requires at least 5 interactions within the last 30 days to activate.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Trending row</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Items with the highest recent download momentum, measured as a ratio of recent vs. lifetime download count.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Newest row</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Items created within a 14-day recency window.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Popular row</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Most-downloaded items older than 48 hours.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Top 3 Category rows</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Full breakdowns for the 3 categories with the most content on the platform.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Discover Something New row</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Fully randomized items for serendipitous discovery. Ignores scoring entirely.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="scoring-algorithm" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">3. Recommendation Scoring Algorithm</h2>

          <p className="text-sm text-white leading-relaxed">
            Every item is scored using a composite formula with three weighted factors. Items in curated rows are drawn from the top 25% scorers, with the remaining slots filled from a mid-tier exposure pool to give good content a chance at visibility. The Discover row ignores scoring entirely and is fully random.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Factor</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Weight</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Calculation Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Recency</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">35%</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Exponential decay with a 14-day half-life</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Downloads</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">45%</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Logarithmic scale based on lifetime download count</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Momentum</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">20%</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Ratio of recent 7-day downloads to total lifetime downloads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="categories-filtering" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">4. Categories and Filtering</h2>

          <p className="text-sm text-white leading-relaxed">
            The marketplace organizes content into distinct category sets per content type. The left sidebar shows all categories with item counts.
          </p>

          <h3 className="text-2xl font-semibold text-white">4.1 Marketplace Asset Categories</h3>

          <p className="text-sm text-white leading-relaxed">
            12 categories apply to Marketplace Assets (.ffx files):
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white" colSpan={2}>
                    Asset Categories
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Text Kits',
                  'Transitions',
                  'Logo Animations',
                  'UI Animations',
                  'Infographics',
                  'Lower Thirds',
                  'HUD & Tech',
                  'Social Media',
                  'Backgrounds',
                  'Icon Animations',
                  'Explainer Graphics',
                  'Video Overlays',
                ].reduce<string[][]>((rows, item, i) => {
                  if (i % 2 === 0) rows.push([item]);
                  else rows[rows.length - 1].push(item);
                  return rows;
                }, []).map((row, i) => (
                  <tr key={i}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white w-1/2">{row[0]}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white w-1/2">{row[1] || ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-white leading-relaxed">
            Projects and 3D assets each have their own dedicated category sets separate from the asset categories above.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-6">4.2 Filtering Options</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Filter</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Options</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Applies To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Price</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All, Free, Paid</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All content types</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Sort</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Popular, Newest, Top-Rated</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All content types</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Render Engine</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Blender, Maya, C4D, and others</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">3D assets only</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Loop Ready</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Toggle on/off</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">3D assets only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="search" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">5. Search</h2>

          <p className="text-sm text-white leading-relaxed">
            The search system provides fast, full-text discovery across all marketplace content. It is activated via Cmd/Ctrl+K and operates with a 150ms debounce to avoid unnecessary queries during typing.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Activation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Cmd/Ctrl+K opens the search interface from anywhere in the marketplace.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Live Dropdown</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Shows up to 4 results per section (12 total) as the user types, with a 150ms debounce.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Keyboard Navigation</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Arrow keys navigate the dropdown results; Enter confirms and opens the selected item.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Full Search Results Page</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Pressing Enter without a selection opens a full results page with all matches organized by section.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">5.1 Full-Text Scoring Field Priority</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Field</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Score Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Title</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Highest</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Keywords, Tags, Author</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Medium</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium">Description</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Lowest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="asset-detail" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">6. Asset Detail Modal</h2>

          <p className="text-sm text-white leading-relaxed">
            Clicking any item opens a detail modal that presents the full context and metadata for an asset. The modal is the primary point of interaction for viewing, evaluating, and downloading content.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Section</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Contents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Image Carousel</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Up to 5 images per asset, browsable within the modal.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Core Info</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Title, author, category, rating, download count, and price.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Description</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Full long-form description as entered by the creator during submission.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Tags and Metadata</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All associated tags and structured metadata fields.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">3D-Specific Fields</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">For 3D assets only: render engine, polygon count, loop-ready status, and supported file formats.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Action Button</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Download or Get Asset button, which initiates the appropriate flow for free or paid items.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="upload-submission" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">7. Upload / Submission (Create Template Wizard)</h2>

          <p className="text-sm text-white leading-relaxed">
            A 6-step modal wizard guides creators through the submission process. The wizard includes a progress indicator, back/continue navigation, and an unsaved changes warning when attempting to close mid-submission.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Step</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Label</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">1</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Title</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Name the template.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">2</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Asset Type</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Choose file type: .ffx, .ffxproj, or a 3D format.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">3</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Category</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Select from the categories relevant to the chosen asset type.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">4</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Media</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Upload up to 9 images. The first image is required and serves as the thumbnail.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">5</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Description</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Long-form description used in search indexing and the asset detail display.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">6</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Pricing</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Toggle Free or Premium. If Premium is selected, enter a price in USD.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="download-purchase" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">8. Download and Purchase Flow</h2>

          <p className="text-sm text-white leading-relaxed">
            All downloads are logged with the item ID, item type, user ID, and timestamp. This data feeds both the recommendation engine and creator analytics.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Flow Type</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Steps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Free Items</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Direct download. Download counter is incremented and the event is logged to the user's download history.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Paid Items</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Goes through a purchase flow. A purchase record is created containing the price and timestamp. The download counter is then incremented and the event is logged.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="creator-dashboard" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">9. Creator Dashboard</h2>

          <p className="text-sm text-white leading-relaxed">
            The Creator Dashboard is accessible at /dashboard and provides creators with visibility into their uploads, performance metrics, and account settings. It is organized into three sections.
          </p>

          <h3 className="text-2xl font-semibold text-white">9.1 Submissions</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Grouped by Type</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">All uploaded items are listed and grouped by type: Assets, Projects, and 3D.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Item Summary</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Each item displays its thumbnail, title, category, price badge, download count, and upload date.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Delete</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">A delete button triggers a confirmation modal that warns the creator that previous downloaders will retain their copy of the file.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">9.2 Analytics</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Feature</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Date Range Selector</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Filter analytics by: 7 days, 30 days, 90 days, or All Time.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Summary Cards</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Four headline metrics: Total Downloads, Total Purchases, Total Views, and Total Revenue.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Downloads Chart</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">SVG line chart showing downloads over time with a per-item legend.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Views Chart</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">SVG line chart showing views over time with a per-item legend.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Purchases Chart</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">SVG bar chart showing purchases over time. Only shown if the creator has at least one premium item.</td>
                </tr>
                <tr>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">Revenue</td>
                  <td className="border border-navy-border px-4 py-2 text-sm text-white">Revenue figures and the purchases chart are only displayed for creators who have published premium items.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">9.3 Account</h3>

          <p className="text-sm text-white leading-relaxed">
            The Account section contains profile information and settings, as well as an account deletion option for creators who wish to permanently remove their account and associated data.
          </p>
        </div>

        <div id="data-models" className="scroll-mt-32 space-y-4">
          <h2 className="text-3xl font-semibold text-white">10. Data Models</h2>

          <p className="text-sm text-white leading-relaxed">
            The three content types each have their own data shape, but share a common set of base fields. Extended fields apply only to the content type that requires them.
          </p>

          <h3 className="text-2xl font-semibold text-white">10.1 Common Fields (All Content Types)</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Field</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['id', 'Unique identifier for the item.'],
                  ['title', 'Display name of the asset.'],
                  ['category', 'Category the item belongs to.'],
                  ['author', 'Creator who submitted the item.'],
                  ['rating', 'Aggregated user rating.'],
                  ['download count', 'Total number of times the item has been downloaded.'],
                  ['price', 'Numeric price in USD, or "free".'],
                  ['thumbnail', 'Primary preview image.'],
                  ['tags', 'Array of keyword tags used in search and discovery.'],
                  ['creation date', 'Timestamp of when the item was first published.'],
                ].map(([field, desc]) => (
                  <tr key={field}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">{field}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">10.2 Extended Fields,Projects</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Field</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['difficulty level', 'Skill level required to work with the project.'],
                  ['scene count', 'Number of scenes contained in the project file.'],
                  ['duration', 'Total playback length of the project.'],
                  ['software requirements', 'Any software versions or plugins required to use the project.'],
                ].map(([field, desc]) => (
                  <tr key={field}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">{field}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">10.3 Extended Fields,3D Assets</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Field</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['render engine', 'The renderer the asset was built for (e.g. Blender, Maya, C4D).'],
                  ['polygon count', 'Total number of polygons in the 3D model.'],
                  ['file formats', 'All available file format variants included in the download.'],
                  ['loop ready', 'Boolean indicating whether the asset is designed as a seamless loop.'],
                ].map(([field, desc]) => (
                  <tr key={field}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono align-top">{field}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-white mt-6">10.4 User Interaction Tracking</h3>

          <p className="text-sm text-white leading-relaxed">
            User interaction is tracked across five event types, all tied to authenticated user accounts. This data drives the recommendation engine and creator analytics.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Event Type</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Category interactions', 'Powers the "For You" personalized feed rows.'],
                  ['Download logs', 'Records every download with item ID, item type, user ID, and timestamp.'],
                  ['View logs', 'Tracks when users open the asset detail modal.'],
                  ['Purchase records', 'Stores price, timestamp, and item details for paid transactions.'],
                  ['Ratings', 'User-submitted star ratings used in sort and display.'],
                ].map(([event, purpose]) => (
                  <tr key={event}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-medium align-top">{event}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
