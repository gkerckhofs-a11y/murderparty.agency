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
  seoTitle: string;
  seoDescription: string;
  image: string;
  posterTitle?: string[];
  format?: string;
  minParticipants: number;
  maxParticipants: number;
  durationHours: number;
  departure?: string;
  included?: string;
};
export const scenarios: Scenario[] = [
  {
    slug: "showbiz",
    durationHours: 3,
    minParticipants: 15,
    maxParticipants: 40,
    title: "SHOWBIZ",
    seoTitle: "SHOWBIZ : murder party Hollywood",
    seoDescription: "Une soirée enquête à Hollywood dans les années 1930 : casting, secrets et meurtre. SHOWBIZ, murder party animée pour 15 à 40 personnes, 3 h, sur devis.",
    image: "/images/salon-noir.webp",
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
    slug: "meurtre-au-chateau",
    durationHours: 3,
    minParticipants: 15,
    maxParticipants: 40,
    title: "MEURTRE AU CHÂTEAU",
    seoTitle: "Meurtre au Château : murder party médiévale",
    seoDescription: "Vivez une murder party médiévale dans un château, avec costumes fournis. Enquête animée pour 15 à 40 participants, 3 h, organisation sur devis.",
    image: "/images/chateau-medieval.webp",
    universe: "Château",
    era: "Ambiance médiévale",
    eyebrow: "Les murs ont leurs secrets",
    pitch:
      "Une immersion médiévale exceptionnelle dans un château. Costumes, personnages et secrets vous entraînent au cœur de l’intrigue.",
    intro:
      "Poussez les portes du château et plongez dans une ambiance médiévale immersive. Le cadre du château, les costumes médiévaux fournis et les personnages composent une expérience d’immersion exceptionnelle. Incarnez votre rôle, avec ses secrets et ses objectifs : interrogez les autres invités, confrontez les indices et négociez pour comprendre l’intrigue. Ici, le lieu fait pleinement partie de l’histoire.",
    theme: "chateau",
    tagline: "Un château. Une ambiance médiévale. Une immersion exceptionnelle.",
    posterTitle: ["MEURTRE", "AU CHÂTEAU"],
    format: "Enquête médiévale en personnages",
    included: "Costumes médiévaux fournis et compris dans le prix",
  },
  {
    slug: "the-bikers",
    durationHours: 4,
    departure: "Hony (Esneux)",
    minParticipants: 10,
    maxParticipants: 15,
    title: "THE BIKERS",
    seoTitle: "Murder party à vélo près de Liège — The Bikers",
    seoDescription: "The Bikers : murder party en fatbike électrique au départ de Hony, Esneux, près de Liège. 10 à 15 participants, 4 h, location du vélo incluse, sur devis.",
    image: "/images/the-bikers-unimk.webp",
    universe: "Bikers",
    era: "Enquête en fatbike électrique",
    eyebrow: "Chaque arrêt devient une scène",
    pitch:
      "Des vélos électriques Uni MK au look de moto, une bande de bikers et une enquête à vivre sur la route.",
    intro:
      "Au départ de Hony (Esneux), enfourchez des fatbikes électriques Uni MK au look de moto et entrez dans l’univers d’un club de bikers traversé par les tensions et les secrets. Votre groupe progresse d’une étape à l’autre : de nouveaux indices, des personnages à interroger et des versions à confronter. Entre deux arrêts, les discussions font avancer l’enquête.",
    theme: "bikers",
    tagline: "La route avance. Les versions se croisent.",
    format: "Murder Party en fatbike électrique",
    included: "Location du vélo comprise dans le prix",
  },
  {
    slug: "black-velvet",
    durationHours: 3,
    minParticipants: 15,
    maxParticipants: 40,
    title: "BLACK VELVET",
    seoTitle: "Black Velvet : soirée mystère à New York",
    seoDescription: "Plongez dans un club clandestin à New York en 1928. Black Velvet, murder party animée sur fond de Prohibition, pour 15 à 40 personnes, 3 h, sur devis.",
    image: "/images/black-velvet.webp",
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
