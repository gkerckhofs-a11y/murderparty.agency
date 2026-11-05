import GamesOfInfluencePage from "@/components/games-of-influence";
import { influenceImage } from "@/content/games-of-influence";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Games of Influence : jeu narratif, diplomatie et négociation", "Négociez, formez des alliances et écrivez l’histoire. Games of Influence : une expérience narrative de 12 à 60 participants, plusieurs univers, sur devis.", "/games-of-influence/", influenceImage);
export default function Page() { return <GamesOfInfluencePage locale="fr" />; }
