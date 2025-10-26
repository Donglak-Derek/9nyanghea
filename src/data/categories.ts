import type { CategoryId } from "./types";

export type CategoryMeta = {
  id: CategoryId;
  title: string;
  description: string;
};

export const categories: CategoryMeta[] = [
  {
    id: "kpop",
    title: "K-pop Lyric Studio",
    description:
      "Dissect hooks, rap verses, and melodic runs to boost listening + pronunciation.",
  },
  {
    id: "kdrama",
    title: "Drama Expression Deck",
    description:
      "Swipe drama-worthy lines and reactions for everyday chats and storytelling.",
  },
  {
    id: "culture",
    title: "Culture Cue Cards",
    description:
      "Quick culture explainers so your Korean feels respectful, witty, and current.",
  },
  {
    id: "comedy",
    title: "Comedy Skit Room",
    description:
      "Act through sketch scenes to sharpen timing, rhythm, and playful vocab.",
  },
];

export const categoryMap: Record<CategoryId, CategoryMeta> = categories.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<CategoryId, CategoryMeta>,
);
