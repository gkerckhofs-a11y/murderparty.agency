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
    slug: "meurtre-au-chateau",
    title: "MEURTRE AU CHÂTEAU",
    universe: "Château",
    era: "Secrets & intrigues",
    eyebrow: "Les murs ont leurs secrets",
    pitch:
      "Un château, des personnages et des secrets. Entrez dans une enquête où chacun a un rôle à jouer.",
    intro:
      "Dans le cadre d’un château, vous incarnez un personnage avec ses secrets et ses objectifs. Interrogez les autres invités, confrontez les indices et négociez pour comprendre l’intrigue. Une Murder Party conçue autour du lieu, de son atmosphère et des échanges entre participants.",
    theme: "chateau",
    tagline: "Derrière chaque porte, une autre version des faits.",
    confirmed: true,
    posterTitle: ["MEURTRE", "AU CHÂTEAU"],
    format: "Enquête en personnages",
  },
  {
    slug: "the-bikers",
    title: "THE BIKERS",
    universe: "Bikers",
    era: "Enquête itinérante à vélo",
    eyebrow: "Chaque arrêt devient une scène",
    pitch:
      "Une balade à vélo devient une enquête. Secrets, rivalités et loyautés fragiles rythment le parcours.",
    intro:
      "Entrez dans l’univers d’un club de bikers traversé par les tensions et les secrets. À vélo, votre groupe progresse d’une étape à l’autre : de nouveaux indices, des personnages à interroger et des versions à confronter. Entre deux arrêts, les discussions font avancer l’enquête.",
    theme: "bikers",
    tagline: "La route avance. Les versions se croisent.",
    confirmed: true,
    format: "Murder Party à vélo",
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
  "Maquette de validation · Nom et textes à valider ; modalités précisées sur devis.";
