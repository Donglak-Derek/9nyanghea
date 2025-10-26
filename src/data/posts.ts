export type Post = {
  slug: string;
  title: string;
  summary: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  focus: "Speaking" | "Listening" | "Grammar" | "Culture";
  minutes: number;
  publishedAt: string;
  vocabulary: string[];
};

export const posts: Post[] = [
  {
    slug: "greetings-that-feel-natural",
    title: "Comedy Skit Greeting Remix",
    summary:
      "Move beyond 안녕하세요 by riffing through café and campus skits so your openings feel natural and playful.",
    level: "Beginner",
    focus: "Speaking",
    minutes: 7,
    publishedAt: "2025-01-12",
    vocabulary: ["반갑습니다", "오랜만이에요", "잘 지냈어?"],
  },
  {
    slug: "sound-patterns-pronunciation",
    title: "K-pop Lyric Lab: Sound Patterns",
    summary:
      "Train your ear with chorus snippets to catch 받침 blends, tense consonants, and the soft endings idols lean on.",
    level: "Intermediate",
    focus: "Listening",
    minutes: 9,
    publishedAt: "2025-01-05",
    vocabulary: ["받침", "된소리", "연음"],
  },
  {
    slug: "conversation-blueprint",
    title: "Rom-com Café Script",
    summary:
      "Act out a sweet rom-com order scene to customize drinks, add flair, and show gratitude without sounding robotic.",
    level: "Beginner",
    focus: "Speaking",
    minutes: 6,
    publishedAt: "2024-12-28",
    vocabulary: ["아메리카노", "따뜻하게", "포장해 주세요"],
  },
  {
    slug: "storytelling-in-past-tense",
    title: "K-Drama Recap Builder",
    summary:
      "Rewrite dramatic finales with -았/었- endings and feeling words so your weekend recaps stay vivid.",
    level: "Intermediate",
    focus: "Grammar",
    minutes: 11,
    publishedAt: "2024-12-18",
    vocabulary: ["-았/었-", "재미있다", "심심하다"],
  },
];
