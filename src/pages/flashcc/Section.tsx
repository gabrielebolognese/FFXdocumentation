import { Fragment, ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutGrid, AlertTriangle, Info } from 'lucide-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import {
  BASE_PATH,
  sections,
  groupOfSlug,
  indexOfSlug,
  pathForSection,
  type Block,
} from '../../data/flashcc';

/**
 * Renders one section of the FlashCC reference.
 *
 * One component for all 29 rather than 29 near-identical files: the content is
 * uniform transcribed prose, tables and code, so it lives in
 * `src/data/flashcc.ts` and this paints it. Same call as TroubleshootingDetail.
 *
 * Returns null for an unknown slug.
 */
export default function FlashCCSectionPage() {
  const location = useLocation();
  const slug = location.pathname.replace(`${BASE_PATH}/`, '');
  const index = indexOfSlug(slug);

  if (index === -1) {
    return null;
  }

  const section = sections[index];
  const group = groupOfSlug[section.slug];
  const previous = index > 0 ? sections[index - 1] : null;
  const next = index < sections.length - 1 ? sections[index + 1] : null;

  // Sub-headings drive the sticky ToC rail, matching the rest of the site.
  const tableOfContents = section.blocks
    .filter((block): block is Extract<Block, { kind: 'h' }> => block.kind === 'h')
    .map((block) => ({ id: block.id, label: stripInline(block.text) }));

  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title={`${section.title} — FlashCC`}
        description={section.summary}
      />

      <div className="space-y-8">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <Link
              to={BASE_PATH}
              className="inline-flex items-center gap-1.5 text-yellow-accent hover:text-yellow-400 transition-colors"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              FlashCC
            </Link>
            <span className="text-navy-border">/</span>
            <span className="text-blue-muted">{group}</span>
            <span className="text-navy-border">/</span>
            <span className="text-blue-muted">
              Section {section.number} of {sections.length}
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-white leading-tight">{section.title}</h1>
          <p className="text-sm text-white/70 leading-relaxed">{section.summary}</p>
        </header>

        <div className="space-y-5">
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </div>

        <nav className="grid sm:grid-cols-2 gap-3 pt-2" aria-label="Reference sections">
          <SectionLink direction="previous" section={previous} />
          <SectionLink direction="next" section={next} />
        </nav>
      </div>
    </Layout>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'h':
      return (
        <h2
          id={block.id}
          className="scroll-mt-32 text-xl font-semibold text-white pt-4 leading-snug"
        >
          {inline(block.text)}
        </h2>
      );

    case 'p':
      return <p className="text-sm text-white/80 leading-relaxed">{inline(block.text)}</p>;

    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return (
        <List className="space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-white/80 leading-relaxed">
              <span className="text-yellow-accent shrink-0 mt-0.5 tabular-nums">
                {block.ordered ? `${i + 1}.` : '•'}
              </span>
              <span className="min-w-0">{inline(item)}</span>
            </li>
          ))}
        </List>
      );
    }

    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-navy-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-navy-elevated">
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left px-4 py-2.5 text-xs font-semibold text-white/70 border-b border-navy-border"
                  >
                    {inline(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-navy-border/60 last:border-b-0">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="px-4 py-2.5 text-white/75 leading-relaxed align-top"
                    >
                      {inline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'code':
      return (
        <pre className="bg-navy-panel border border-navy-border rounded-lg p-4 overflow-x-auto">
          <code className="text-xs text-white/80 leading-relaxed font-mono whitespace-pre">
            {block.text}
          </code>
        </pre>
      );

    case 'note': {
      const warn = block.tone === 'warn';
      const Icon = warn ? AlertTriangle : Info;
      return (
        <div
          className={`flex gap-3 rounded-lg border p-4 ${
            warn
              ? 'border-yellow-accent/30 bg-yellow-accent/5'
              : 'border-navy-border bg-navy-panel'
          }`}
        >
          <Icon
            className={`w-4 h-4 shrink-0 mt-0.5 ${warn ? 'text-yellow-accent' : 'text-blue-muted'}`}
          />
          <p className="text-sm text-white/80 leading-relaxed min-w-0">{inline(block.text)}</p>
        </div>
      );
    }
  }
}

/**
 * Minimal inline markup: `**bold**`, `` `code` `` and `*italic*`.
 *
 * The bold alternative is listed first and every character class excludes its
 * own delimiter, so `**bold**` cannot be mis-parsed as two italics.
 *
 * Bold and italic recurse, because the source nests code inside bold often
 * enough to matter — `**Every layer is `pointerEvents: "none"`.**` would
 * otherwise print its own backticks. Code does not recurse: markup inside a
 * code span is content, not markup.
 */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={i} className="font-semibold text-white">
          {inline(part.slice(2, -2))}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <code
          key={i}
          className="text-yellow-accent bg-navy-elevated rounded px-1 py-0.5 text-xs font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={i} className="italic text-white/70">
          {inline(part.slice(1, -1))}
        </em>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/** Plain text for the table-of-contents rail, which takes a string. */
function stripInline(text: string): string {
  return text.replace(/\*\*|`|\*/g, '');
}

function SectionLink({
  direction,
  section,
}: {
  direction: 'previous' | 'next';
  section: (typeof sections)[number] | null;
}) {
  const isPrevious = direction === 'previous';

  const shell = `group flex items-center gap-3 bg-navy-panel border border-navy-border hover:border-yellow-accent/40 rounded-lg px-4 py-3 transition-colors ${
    isPrevious ? '' : 'sm:justify-end sm:text-right'
  }`;

  const target = section ? pathForSection(section) : BASE_PATH;
  const overline = section
    ? isPrevious
      ? 'Previous'
      : 'Next'
    : isPrevious
      ? 'Start of the reference'
      : 'End of the reference';
  const label = section ? `${section.number}. ${section.title}` : 'FlashCC overview';

  return (
    <Link to={target} className={shell}>
      {isPrevious && (
        <ChevronLeft className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
      )}
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-wider text-blue-muted">
          {overline}
        </span>
        <span className="block text-sm text-white/80 group-hover:text-white transition-colors truncate">
          {label}
        </span>
      </span>
      {!isPrevious && (
        <ChevronRight className="w-4 h-4 text-blue-muted shrink-0 group-hover:text-yellow-accent transition-colors" />
      )}
    </Link>
  );
}
