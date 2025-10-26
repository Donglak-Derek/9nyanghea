import Link from "next/link";
import { posts } from "@/data/posts";

const learningPath = [
  {
    title: "Comedy Skit Warmups",
    summary:
      "Act out goofy slice-of-life scenes so pronunciation sticks while you laugh.",
    drills: ["Mirror the punchline timing", "Swap characters mid-dialog"],
    badge: "Week 1",
  },
  {
    title: "K-pop Lyric Listening Party",
    summary:
      "Annotate hooks, catch hidden grammar, and sing the lines you want to remember.",
    drills: ["Chorus cloze cards", "One-breath rap challenge"],
    badge: "Week 2",
  },
  {
    title: "K-Drama Story Remix",
    summary:
      "Rewrite dramatic scenes with your own endings to flex vocab and emotion words.",
    drills: ["Alt-ending storyboard", "Reaction line swaps"],
    badge: "Week 3",
  },
];

const speakingLabs = [
  {
    title: "Comedy Skit Lab",
    blurb: "Break down timing, intonation, and gestures from sketch clips.",
    resources: ["3 beat sheets", "GIF-inspired drills", "Punchline tracker"],
  },
  {
    title: "K-pop Lyric Lounge",
    blurb: "Deconstruct hooks, rhymes, and ad-libs straight from new releases.",
    resources: ["Annotated lyric cards", "Tempo trainer", "Harmony hum guide"],
  },
  {
    title: "K-Drama Script Club",
    blurb: "Lift iconic lines, mark nuance, and practice scene partners cues.",
    resources: [
      "Scene highlight reels",
      "Emotion prompt dice",
      "Fandom vocab list",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="from-rose-50 via-slate-50 to-blue-50 relative isolate overflow-hidden border-b border-slate-100 bg-gradient-to-br">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-14 sm:px-6 md:px-10 md:pb-20 md:pt-20 lg:px-14">
          <div className="flex flex-col gap-6 text-balance text-center md:max-w-3xl md:text-left">
            <span className="mx-auto inline-flex w-max items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase text-slate-600 md:mx-0">
              9nyanghea · Fun Korean pop-culture lab
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Make learning Korean fun with comedy skits, K-pop lyrics, and
              K-drama scripts.
            </h1>
            <p className="text-lg text-slate-600">
              Play through laugh-out-loud scenes, sing catchy hooks, and steal
              lines from your favorite films so practice never feels like
              homework. Expect twice-weekly drops with audio companions and
              quick-win drills.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Link
                href="#featured"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore pop drops
              </Link>
              <Link
                href="#newsletter"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
              >
                Get study nudges
              </Link>
            </div>
          </div>

          <dl className="flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 backdrop-blur sm:p-6 md:grid md:grid-cols-3 md:gap-6">
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">
                Speech minutes
              </dt>
              <dd className="text-3xl font-semibold text-slate-900">+120</dd>
              <p className="mt-2 text-sm text-slate-600">
                Guided prompts you can record and review weekly.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">
                Real-life scripts
              </dt>
              <dd className="text-3xl font-semibold text-slate-900">36</dd>
              <p className="mt-2 text-sm text-slate-600">
                Dialogs for cafés, study groups, and travel days.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">
                Community check-ins
              </dt>
              <dd className="text-3xl font-semibold text-slate-900">Weekly</dd>
              <p className="mt-2 text-sm text-slate-600">
                Drop questions and clips—get feedback in 24h.
              </p>
            </div>
          </dl>
        </div>
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-14 sm:px-6 md:px-10 lg:px-14">
        <section id="featured" className="space-y-6">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Pop Culture Drops
            </p>
            <h2 className="section-title text-3xl text-slate-900">
              Fresh lessons pulled from skits, songs, and scripts
            </h2>
            <p className="text-slate-600">
              Each post blends comedic timing, lyric study, or cinematic dialogue
              with the Korean you need next. Screenshot the vocabulary bites and
              keep them in your notes app.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                      {post.level}
                    </span>
                    <span>{post.focus}</span>
                    <span>{post.minutes} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600">{post.summary}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.vocabulary.map((word) => (
                    <span
                      key={word}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-slate-900 underline-offset-2 hover:underline"
                  >
                    Read post →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Fun Study Route
            </p>
            <h2 className="section-title text-3xl text-slate-900">
              The 3-week pop-culture practice path
            </h2>
            <p className="text-slate-600">
              Rotate through skits, songs, and scripts so every week stays
              playful while you stack real speaking confidence.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningPath.map((step) => (
              <li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {step.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {step.drills.map((drill) => (
                    <li key={drill} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
                      {drill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Remix Labs
            </p>
            <h2 className="section-title text-3xl text-slate-900">
              Pick the pop-culture lab for today&apos;s vibe
            </h2>
          </div>
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 sm:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {speakingLabs.map((lab) => (
              <div
                key={lab.title}
                className="flex min-w-[260px] flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm sm:min-w-0 sm:p-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {lab.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{lab.blurb}</p>
                </div>
                <div className="space-y-2 text-sm text-slate-700">
                  {lab.resources.map((resource) => (
                    <p key={resource} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      {resource}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="newsletter"
          className="rounded-3xl border border-slate-200 bg-slate-900 px-5 py-10 text-white sm:px-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Friday fan mail
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
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
                className="w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
