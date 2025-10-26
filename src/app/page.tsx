"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { CategoryId } from "@/data/types";

type FilterId = "everything" | CategoryId;

const filterButtons: { id: FilterId; label: string }[] = [
  { id: "everything", label: "#everything" },
  { id: "culture", label: "#culture" },
  { id: "comedy", label: "#comedy" },
  { id: "kpop", label: "#kpop" },
  { id: "kdrama", label: "#kdrama" },
];

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("everything");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts =
    activeFilter === "everything"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeFilter);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const canShowMore = visibleCount < filteredPosts.length;

  const handleFilterChange = (filter: FilterId) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-16 text-center sm:py-20">
        <div
          className="soft-card relative flex flex-col items-center gap-3 px-8 py-8"
          style={{
            background:
              "linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))",
          }}
        >
          <span className="absolute -top-3 left-8 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-lg font-bold text-[var(--color-ink)] shadow-md">
            9
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Fun Korean Learning
          </p>
          <h1 className="brand-title text-4xl font-extrabold text-white drop-shadow sm:text-5xl">
            Learn Korean Fun!
          </h1>
          <p className="text-base text-white/90 sm:text-lg">
            Quick drops inspired by SNS clips, comedy skits, K-pop hooks, and
            K-drama lines.
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-5 pb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {filterButtons.map((filter) => {
            const isActive = filter.id === activeFilter;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleFilterChange(filter.id)}
                className={`pill-button border text-sm ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] text-white shadow-lg"
                    : "border-white/70 bg-white/80 text-[var(--color-ink)] shadow-sm hover:border-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <section aria-label="Latest posts">
          <div className="grid gap-5 sm:grid-cols-2">
            {visiblePosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="soft-card group block rounded-[30px] border border-white/60 p-6 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gradient-end)] focus-visible:ring-offset-2"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
                  {post.minutes} min · {post.focus}
                </p>
                <h2 className="brand-title mt-3 text-2xl text-[var(--color-ink)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.vocabulary.slice(0, 3).map((word) => (
                    <span
                      key={word}
                      className="rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-[var(--color-ink)]"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)]">
                  Read post →
                </span>
              </Link>
            ))}
          </div>

          {canShowMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 6)}
                className="pill-button border border-white/70 bg-white/90 text-[var(--color-ink)] shadow-sm hover:border-white"
              >
                Show more
              </button>
            </div>
          )}
        </section>
      </main>

      <section
        id="newsletter"
        className="mx-auto mt-4 max-w-5xl rounded-[32px] border border-white/40 bg-[var(--color-ink)]/95 px-6 py-10 text-white shadow-2xl sm:px-8"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Friday fan mail
            </p>
            <h2 className="brand-title mt-2 text-3xl text-white">
              Friday pop-culture nudges + mini missions.
            </h2>
            <p className="mt-3 text-white/80">
              Get a tiny mission, a recommended track or scene, and a playful
              reflection prompt straight to your inbox. Cancel anytime.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 md:max-w-lg md:flex-row">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-white placeholder:text-white/70 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="pill-button w-full border-none bg-white text-[var(--color-ink)] md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
