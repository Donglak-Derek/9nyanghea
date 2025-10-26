import type { Post } from "../types";
import lyricStudioHookEcho from "../kpop/lyric-studio-hook-echo";
import lyricStudioBridgeFeels from "../kpop/lyric-studio-bridge-feels";
import dramaExpressionReactionPack from "../kdrama/drama-expression-reaction-pack";
import dramaExpressionBreakupBanter from "../kdrama/drama-expression-breakup-banter";
import cultureCueMarketManners from "../culture/culture-cue-market-manners";
import cultureCueCafeHonorifics from "../culture/culture-cue-cafe-honorifics";
import comedySkitRoommateRoast from "../comedy/comedy-skit-roommate-roast";
import comedySkitTalkShowIntro from "../comedy/comedy-skit-talkshow-intro";

export const posts: Post[] = [
  lyricStudioHookEcho,
  lyricStudioBridgeFeels,
  dramaExpressionReactionPack,
  dramaExpressionBreakupBanter,
  cultureCueMarketManners,
  cultureCueCafeHonorifics,
  comedySkitRoommateRoast,
  comedySkitTalkShowIntro,
];

export const postsBySlug = posts.reduce((acc, post) => {
  acc[post.slug] = post;
  return acc;
}, {} as Record<string, Post>);

export const getPostBySlug = (slug: string) => postsBySlug[slug];
