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
  confirmed?: boolean;
  posterTitle?: string[];
  format?: string;
  minParticipants: number;
  maxParticipants: number;
  included?: string;
};
export const scenarios: Scenario[] = [
  {
    slug: "showbiz",
    minParticipants: 15,
    maxParticipants: 40,
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
    slug: "meurtre-au-chateau",
    minParticipants: 15,
    maxParticipants: 40,
    title: "MEURTRE AU CHÂTEAU",
    universe: "Château",
    era: "Ambiance médiévale",
    eyebrow: "Les murs ont leurs secrets",
    pitch:
      "Une immersion médiévale exceptionnelle dans un château. Costumes, personnages et secrets vous entraînent au cœur de l’intrigue.",
    intro:
      "Poussez les portes du château et plongez dans une ambiance médiévale immersive. Le cadre du château, les costumes médiévaux fournis et les personnages composent une expérience d’immersion exceptionnelle. Incarnez votre rôle, avec ses secrets et ses objectifs : interrogez les autres invités, confrontez les indices et négociez pour comprendre l’intrigue. Ici, le lieu fait pleinement partie de l’histoire.",
    theme: "chateau",
    tagline: "Un château. Une ambiance médiévale. Une immersion exceptionnelle.",
    confirmed: true,
    posterTitle: ["MEURTRE", "AU CHÂTEAU"],
    format: "Enquête médiévale en personnages",
    included: "Costumes médiévaux fournis et compris dans le prix",
  },
  {
    slug: "the-bikers",
    minParticipants: 10,
    maxParticipants: 15,
    title: "THE BIKERS",
    universe: "Bikers",
    era: "Enquête en fatbike électrique",
    eyebrow: "Chaque arrêt devient une scène",
    pitch:
      "Des vélos électriques au look de moto, une bande de bikers et une enquête à vivre sur la route.",
    intro:
      "Enfourchez des fatbikes électriques au look de moto et entrez dans l’univers d’un club de bikers traversé par les tensions et les secrets. Votre groupe progresse d’une étape à l’autre : de nouveaux indices, des personnages à interroger et des versions à confronter. Entre deux arrêts, les discussions font avancer l’enquête.",
    theme: "bikers",
    tagline: "La route avance. Les versions se croisent.",
    confirmed: true,
    format: "Murder Party en fatbike électrique",
    included: "Location du vélo comprise dans le prix",
  },
  {
    slug: "black-velvet",
    minParticipants: 15,
    maxParticipants: 40,
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
  "Maquette de validation · Nom et textes à valider ; modalités précisées sur devis.";
