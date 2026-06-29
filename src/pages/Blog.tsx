import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import type { BlogPost as BlogPostType } from '../data/blogPosts';

type FilterCategory = 'ALL' | 'RELEASES' | 'UPDATES' | 'TUTORIALS';

const filters: FilterCategory[] = ['ALL', 'RELEASES', 'TUTORIALS', 'UPDATES'];

const categoryColors: Record<string, string> = {
  RELEASES: 'text-emerald-400 bg-emerald-400/10',
  UPDATES: 'text-sky-400 bg-sky-400/10',
  TUTORIALS: 'text-amber-400 bg-amber-400/10',
};

function CategoryBadge({ category, size = 'sm' }: { category: string; size?: 'sm' | 'xs' }) {
  const colors = categoryColors[category] ?? 'text-white/50 bg-white/5';
  const sizeClass = size === 'xs'
    ? 'text-[9px] px-2 py-0.5'
    : 'text-[10px] px-2.5 py-1';
  return (
    <span className={`inline-block font-semibold uppercase tracking-widest rounded ${colors} ${sizeClass}`}>
      {category}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPostType }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/4 hover:border-white/18 transition-all duration-300"
    >
      <div className="relative aspect-[16/7] overflow-hidden bg-navy-elevated">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-3 mb-3">
            <CategoryBadge category={post.category} />
            <span className="text-white/40 text-[11px]">{post.date}</span>
          </div>
          <h2 className="text-2xl font-bold uppercase text-white leading-snug group-hover:text-yellow-accent transition-colors duration-200 max-w-3xl">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-white/60 line-clamp-2 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] text-white/40">
            <span>{post.author}</span>
            <span>·</span>
            <span>Featured</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogCard({ post }: { post: BlogPostType }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/8 bg-white/4 hover:border-white/18 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-navy-elevated">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <span className="text-white/10 text-xs uppercase tracking-widest">No image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={post.category} size="xs" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-2">
        <div className="text-[11px] text-white/35">
          {post.author} · {post.date}
        </div>
        <h3 className="text-sm font-bold uppercase text-white group-hover:text-yellow-accent transition-colors duration-200 leading-snug">
          {post.title}
        </h3>
        <p className="text-xs text-white/55 leading-relaxed line-clamp-3 mt-auto pt-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

function BlogTOC() {
  const categoryDot: Record<string, string> = {
    RELEASES: 'bg-emerald-400',
    UPDATES: 'bg-sky-400',
    TUTORIALS: 'bg-amber-400',
  };

  return (
    <aside className="hidden xl:block w-64 shrink-0">
      <div className="sticky top-24 space-y-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30 pb-2 border-b border-white/8">
          All Posts
        </div>
        <nav className="space-y-1">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group flex items-start gap-2.5 py-1.5 rounded text-white/45 hover:text-white transition-colors duration-150"
            >
              <span className={`mt-[5px] w-1.5 h-1.5 rounded-full shrink-0 ${categoryDot[post.category] ?? 'bg-white/20'} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <span className="text-[11px] leading-snug group-hover:text-yellow-accent transition-colors duration-150">
                {post.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function BlogListingView() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filtered = activeFilter === 'ALL'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeFilter);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <Layout extraWide>
      <SEO
        title="Blog"
        description="The FlashFX blog features motion design techniques, product updates, and creative workflows for interactive media professionals."
        keywords="FlashFX, blog, motion design, tutorials, updates, releases"
      />

      <div className="flex gap-12 pb-20">
        <div className="flex-1 min-w-0 space-y-10">
          <div className="pt-6 space-y-3">
            <div className="text-yellow-accent text-[10px] font-semibold uppercase tracking-widest">
              FlashFX Blog
            </div>
            <h1 className="text-4xl font-bold uppercase text-white leading-tight">
              Releases, Insights,<br />and Creator Stories.
            </h1>
            <p className="text-white/50 text-sm max-w-xl leading-relaxed">
              The FlashFX blog features motion design techniques, product updates, and creative workflows for interactive media professionals.
            </p>
          </div>

          <div className="flex items-center gap-1 border-b border-white/8 pb-0">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'text-white'
                    : 'text-white/35 hover:text-white/65'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-yellow-accent" />
                )}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-white/30 text-sm uppercase tracking-widest">
              No posts in this category yet.
            </div>
          ) : (
            <div className="space-y-8">
              {featured && <FeaturedCard post={featured} />}

              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="pt-4 flex justify-center">
            <a
              href="https://blog.flashfx.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-yellow-accent hover:bg-yellow-accent/90 active:scale-[0.98] text-black font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-yellow-accent/20 hover:shadow-yellow-accent/35"
            >
              <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
              <span>View Full Blog</span>
            </a>
          </div>
        </div>

        <BlogTOC />
      </div>
    </Layout>
  );
}

function BlogPostView({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout wide>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={`FlashFX, blog, ${post.category.toLowerCase()}`}
        ogImage={post.image}
      />

      <div className="max-w-3xl mx-auto pb-20">
        <div className="pt-4 pb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-[11px] text-white/40 hover:text-yellow-accent transition-colors uppercase tracking-widest"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <CategoryBadge category={post.category} />
              <span className="text-white/30 text-[11px]">{post.date}</span>
            </div>

            <h1 className="text-3xl font-bold uppercase text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-1">
              <div className="w-7 h-7 rounded-full bg-yellow-accent/20 border border-yellow-accent/30 flex items-center justify-center">
                <span className="text-yellow-accent text-[10px] font-bold">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-[12px] text-white/70 font-medium">{post.author}</div>
                <div className="text-[10px] text-white/30">{post.date}</div>
              </div>
            </div>
          </header>

          <div className="rounded-xl overflow-hidden border border-white/8 bg-navy-elevated aspect-video">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/15 text-xs uppercase tracking-widest">No image available</span>
              </div>
            )}
          </div>

          <div className="space-y-5 text-sm text-white/65 leading-[1.85]">
            <p className="text-white/80 text-base leading-[1.85]">{post.excerpt}</p>

            <div className="border-t border-white/6 pt-5 space-y-4">
              <p>
                This article covers the latest developments in FlashFX. Our team is continuously working to bring new capabilities to motion designers and developers who rely on FlashFX for their interactive media projects.
              </p>
              <p>
                The changes described here are available across all supported platforms and runtimes. For integration guidance, refer to the relevant runtime documentation or reach out via the community channels.
              </p>
              <p>
                Stay up to date by subscribing to release announcements, or follow the FlashFX changelog for a granular breakdown of every patch and feature addition.
              </p>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-10 border-t border-white/8 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                More in {post.category.charAt(0) + post.category.slice(1).toLowerCase()}
              </h2>
              <Link
                to="/blog"
                className="text-[11px] text-yellow-accent hover:text-yellow-accent/70 transition-colors uppercase tracking-widest"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}

export default function Blog() {
  const { slug } = useParams<{ slug?: string }>();
  return slug ? <BlogPostView slug={slug} /> : <BlogListingView />;
}
