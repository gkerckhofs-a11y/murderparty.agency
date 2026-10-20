export type Scenario = {
  slug: string;
  title: string;
  universe: string;
  era: string;
  eyebrow: string;
  pitch: string;
  intro: string;
  theme: string;
  tagline: string;
};
export const scenarios: Scenario[] = [
  {
    slug: "showbiz",
    title: "SHOWBIZ",
    universe: "Hollywood",
    era: "Années 1930",
    eyebrow: "Sous les projecteurs",
    pitch:
      "Un casting, une villa, des ambitions. Et une mort qui change le scénario.",
    intro:
      "Hollywood, années 1930. Monarch Pictures prépare Midnight Orchid. Le casting final réunit artistes et personnalités du cinéma dans une villa. L’assassinat de l’actrice Vivienne Vale fait basculer la soirée.",
    theme: "showbiz",
    tagline: "Le premier rôle se mérite. La vérité aussi.",
  },
  {
    slug: "hot-spring",
    title: "HOT SPRING",
    universe: "Far West",
    era: "Montana · 1876",
    eyebrow: "Derrière les portes du saloon",
    pitch:
      "Un banquet au saloon. Un contrat ferroviaire. Des intérêts qui s’affrontent.",
    intro:
      "Hot Spring, Montana, 1876. Au saloon, le banquet est interrompu par la mort de Cornelius Thorne. La signature d’un contrat ferroviaire approche. Derrière les conversations, les intérêts s’entrecroisent.",
    theme: "western",
    tagline: "Dans cette ville, chacun a quelque chose à cacher.",
  },
  {
    slug: "black-velvet",
    title: "BLACK VELVET",
    universe: "Prohibition",
    era: "New York · 1928",
    eyebrow: "À huis clos",
    pitch:
      "Un club clandestin, une succession disputée et un casting sous tension.",
    intro:
      "New York, 24 octobre 1928. Au Black Velvet, un tripot clandestin, les lieutenants d’un financier disparu se réunissent pour régler sa succession. Le casting du film Les Lumières de Minuit rassemble aussi artistes et habitués du club.",
    theme: "velvet",
    tagline: "Les portes se ferment. Les ambitions s’éveillent.",
  },
];
export const reviewNotice =
  "Maquette de validation · Nom, textes et sélection de scénarios provisoires.";
