import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";
import { categoryMap } from "@/data/categories";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found · 9nyanghea",
      description: "The blog post you requested does not exist.",
    };
  }

  return {
    title: `${post.title} · 9nyanghea`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const prevPost = posts[currentIndex - 1] || null;
  const nextPost = posts[currentIndex + 1] || null;
  const relatedPosts = posts
    .filter(
      (item) => item.slug !== post.slug && item.category === post.category,
    )
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="pill-button inline-flex items-center bg-white/80 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-ink)] shadow-sm hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-end)] focus-visible:ring-offset-2"
        >
          ← Back to home
        </Link>

        <article className="soft-card mt-6 rounded-[32px] border border-white/60 bg-white/90 p-6 sm:p-8">
          <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[var(--color-ink)]">
              {post.level}
            </span>
            <span>{post.focus}</span>
            <span>{post.minutes} min read</span>
            <span className="text-[var(--color-ink)]">
              {categoryMap[post.category].title}
            </span>
          </div>
          <h1 className="brand-title mt-4 text-3xl text-[var(--color-ink)] sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-[var(--color-muted)]">
            {post.summary}
          </p>
          <div
            className="mt-5 rounded-[24px] px-5 py-4 text-[var(--color-ink)] shadow-inner"
            style={{
              background:
                "linear-gradient(120deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))",
              color: "#0f1321",
            }}
          >
            {post.intro}
          </div>

And I should check the patch to ensure it follows tailwind classes. 

          <section className="mt-8 space-y-6" aria-label="Lesson sections">
            {post.sections.map((section) => {
              const sectionId = section.heading
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "");

              return (
                <article
                  key={section.heading}
                  id={sectionId}
                  className="rounded-[28px] border border-white/60 bg-white/90 shadow-lg shadow-[rgba(27,39,69,0.08)]"
                >
                  <div className="border-b border-white/60 px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="brand-title text-xl text-[var(--color-ink)]">
                        {section.heading}
                      </h2>
                      <Link
                        href={`#${sectionId}`}
                        className="text-sm font-semibold text-[var(--color-muted)] underline-offset-2 hover:text-[var(--color-ink)]"
                      >
                        #
                      </Link>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                      {section.description}
                    </p>
                  </div>
                  <ul className="space-y-2 px-5 py-4 text-sm text-[var(--color-ink)]">
                    {section.drills.map((drill) => (
                      <li key={drill} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gradient-end)]" />
                        {drill}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </section>

          <section
            id="final-mission"
            className="mt-10 rounded-[32px] p-6 text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Final Mission
              </p>
              <Link
                href="#final-mission"
                className="text-sm font-semibold text-white/70 underline-offset-2 hover:underline"
              >
                #
              </Link>
            </div>
            <h2 className="mt-2 text-2xl font-semibold">{post.mission.title}</h2>
            <ol className="mt-4 space-y-3 text-sm">
              {post.mission.steps.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-white/90">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 space-y-6" aria-label="Continue exploring">
            {relatedPosts.length > 0 && (
              <div className="rounded-[28px] border border-white/60 bg-white/90 p-5 shadow-lg shadow-[rgba(27,39,69,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Related · {categoryMap[post.category].title}
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {relatedPosts.map((relatedPost) => (
                    <li key={relatedPost.slug}>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="flex flex-col rounded-2xl bg-white/60 px-3 py-2 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-end)] focus-visible:ring-offset-2"
                      >
                        <span className="brand-title font-semibold text-[var(--color-ink)]">
                          {relatedPost.title}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                          {relatedPost.minutes} min · {relatedPost.focus}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <nav
              aria-label="Post navigation"
              className="flex flex-col gap-3 rounded-[28px] border border-dashed border-white/70 bg-white/80 p-5 text-sm text-[var(--color-ink)] shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-[var(--color-ink)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-end)] focus-visible:ring-offset-2"
                >
                  ← {prevPost.title}
                </Link>
              ) : (
                <span className="text-[var(--color-muted)]">← First lesson</span>
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-[var(--color-ink)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-end)] focus-visible:ring-offset-2"
                >
                  {nextPost.title} →
                </Link>
              ) : (
                <span className="text-[var(--color-muted)]">Last lesson →</span>
              )}
            </nav>
          </section>
        </article>
      </div>
    </div>
  );
}
