export type CategoryId = "kpop" | "kdrama" | "culture" | "comedy";

export type PostSection = {
  heading: string;
  description: string;
  drills: string[];
};

export type PostMission = {
  title: string;
  steps: string[];
};

export type PostLevel = "Beginner" | "Intermediate" | "Advanced";
export type PostFocus = "Speaking" | "Listening" | "Grammar" | "Culture";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  level: PostLevel;
  focus: PostFocus;
  minutes: number;
  publishedAt: string;
  vocabulary: string[];
  category: CategoryId;
  intro: string;
  sections: PostSection[];
  mission: PostMission;
};
