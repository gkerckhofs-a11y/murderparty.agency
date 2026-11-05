import GamesOfInfluencePage from "@/components/games-of-influence";
import { influenceImage } from "@/content/games-of-influence";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Games of Influence: storytelling, diplomacy and negotiation", "Negotiate, forge alliances and shape the story. Games of Influence is a narrative experience for 12 to 60 participants across multiple settings. Bespoke quotes.", "/en/games-of-influence/", influenceImage);
export default function Page() { return <GamesOfInfluencePage locale="en" />; }
