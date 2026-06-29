import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';

const tableOfContents = [
  { id: 'account-types', label: 'Account Types' },
  { id: 'guest-mode', label: 'Guest Mode' },
  { id: 'creating-an-account', label: 'Creating an Account' },
  { id: 'cloud-storage', label: 'Cloud Storage' },
  { id: 'storage-limits', label: 'Storage Limits' },
  { id: 'managing-storage', label: 'Managing Storage' },
  { id: 'project-sync', label: 'Project Sync' },
  { id: 'sharing-projects', label: 'Sharing Projects' },
  { id: 'exporting-and-downloading', label: 'Exporting & Downloading Projects' },
  { id: 'account-security', label: 'Account Security' },
  { id: 'deleting-your-account', label: 'Deleting Your Account' },
];

export default function AccountsStorage() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="Accounts, Storage & Sync | FlashFX Documentation"
        description="Learn about FlashFX account types, cloud storage, and project synchronization."
        keywords="FlashFX, accounts, storage, cloud sync, projects"
      />

      <div className="max-w-4xl space-y-8">
        <div>
          <span className="inline-block text-yellow-accent text-[10px] font-medium mb-2 uppercase tracking-wider">
            Fundamentals & Settings
          </span>
          <h1 className="text-4xl font-bold text-white mb-6">Accounts, Storage & Sync</h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80">
          <p className="text-base leading-relaxed">
            FlashFX offers flexible storage options, from guest mode (local-only) to cloud-synced accounts with team collaboration features. Choose the option that fits your workflow and storage needs.
          </p>

          <Section id="account-types" title="Account Types">
            <Table
              headers={['Account Type', 'Storage', 'Features', 'Cost']}
              rows={[
                ['Guest', 'Local (IndexedDB)', 'Full editor, no cloud sync, no sharing', 'Free'],
                ['Free Account', '100MB cloud', 'Cloud sync, project sharing, community access', 'Free'],
                ['Pro Account', '5GB cloud', 'Priority rendering, advanced export, custom fonts, asset library', '$9/month'],
                ['Team Account', 'Unlimited', 'Collaboration, team workspaces, version control, admin panel', '$29/month'],
              ]}
            />
          </Section>

          <Section id="guest-mode" title="Guest Mode">
            <p>
              No account required. Projects are stored in your browser's IndexedDB (local storage).
            </p>
            <p className="mt-4">Guest mode limitations:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>No cloud backup - projects are lost if browser data is cleared</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Cannot share projects with others</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>No access to community features or marketplace</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Projects are device-specific (cannot access from another computer)</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Best for:</strong> Testing FlashFX, one-off projects, privacy-sensitive work
            </p>
          </Section>

          <Section id="creating-an-account" title="Creating an Account">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Click "Sign Up" in the menu bar</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Enter email and create password (minimum 8 characters)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Verify email (check inbox for confirmation link)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Complete profile setup (username, display name)</li>
            </ul>
            <p className="mt-4">
              Alternatively, sign up with Google, GitHub, or Apple for single-click authentication.
            </p>
          </Section>

          <Section id="cloud-storage" title="Cloud Storage">
            <p>
              With a free or paid account, projects are automatically saved to cloud storage:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Auto-save</strong>,Changes sync to the cloud every 30 seconds</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Conflict resolution</strong>,If a project is edited on multiple devices, you're prompted to choose which version to keep</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Version history</strong>,Revert to previous saves (Pro and Team accounts only)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Offline mode</strong>,Projects are cached locally; changes sync when connection is restored</li>
            </ul>
          </Section>

          <Section id="storage-limits" title="Storage Limits">
            <p>Monitor storage usage in Account Settings → Storage:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Free accounts</strong>,100MB total (approximately 50-100 projects)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Pro accounts</strong>,5GB total (approximately 2500-5000 projects)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Team accounts</strong>,Unlimited (fair use policy applies)</li>
            </ul>
            <p className="mt-4">
              Storage is measured by compressed project file size. Images and media assets contribute most to storage use.
            </p>
          </Section>

          <Section id="managing-storage" title="Managing Storage">
            <p>If you approach your storage limit:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Delete unused projects</strong>,Move to trash, then empty trash to free space</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Download and archive</strong>,Export projects to local .flashfx files</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Optimize assets</strong>,Compress images before importing</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Upgrade account</strong>,Increase storage quota with Pro or Team plan</li>
            </ul>
          </Section>

          <Section id="project-sync" title="Project Sync">
            <p>
              Cloud sync keeps projects consistent across devices:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Edit on desktop, continue on tablet - projects sync automatically</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Real-time sync indicator in menu bar shows sync status</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Force sync: File → Sync Now</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span>Disable sync for sensitive projects: Project Settings → Sync → Off</li>
            </ul>
          </Section>

          <Section id="sharing-projects" title="Sharing Projects">
            <p>
              Collaborate by sharing project links (Free account or higher required):
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Open project</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>File → Share → Get Link</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Choose permissions: View Only, Comment, or Edit</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Copy link and send to collaborators</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Edit permission:</strong> Multiple users can edit simultaneously. Changes are merged in real-time (Team accounts only).
            </p>
          </Section>

          <Section id="exporting-and-downloading" title="Exporting and Downloading Projects">
            <p>
              Save projects to your device as .flashfx files:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Download project</strong>,File → Download → Project File (.flashfx)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Import project</strong>,File → Open → Upload .flashfx file</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Backup all projects</strong>,Account Settings → Download All Projects (exports a .zip archive)</li>
            </ul>
            <p className="mt-4">
              Project files include all assets, settings, and animation data. They are portable and can be opened in any FlashFX instance.
            </p>
          </Section>

          <Section id="account-security" title="Account Security">
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Two-factor authentication</strong>,Enable in Account Settings → Security</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Password changes</strong>,Account Settings → Change Password</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Active sessions</strong>,View and revoke device access in Security settings</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">•</span><strong className="text-white">Email notifications</strong>,Receive alerts for suspicious login attempts</li>
            </ul>
          </Section>

          <Section id="deleting-your-account" title="Deleting Your Account">
            <p>
              To permanently delete your account:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">1.</span>Account Settings → Privacy → Delete Account</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">2.</span>Download a backup of all projects (optional but recommended)</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">3.</span>Confirm deletion by entering your password</li>
              <li className="flex gap-3"><span className="text-yellow-accent mt-1">4.</span>Account and all cloud data are deleted within 48 hours</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Warning:</strong> This action is permanent. Deleted projects cannot be recovered.
            </p>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="space-y-4 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
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
            <tr key={i} className="border-b border-white/5 last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-xs text-white/70">
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
