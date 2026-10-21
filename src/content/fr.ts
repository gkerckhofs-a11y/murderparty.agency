export type Scenario = {
  slug: string;
  title: string;
  universe: string;
  keywords?: string[];
  era: string;
  eyebrow: string;
  pitch: string;
  intro: string;
  theme: string;
  tagline: string;
  experienceTitle: string;
  experienceIntro: string;
  highlights: { title: string; text: string }[];
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
    seoTitle: "SHOWBIZ : murder party glamour à Hollywood",
    seoDescription: "Glamour, cinéma et casting à Hollywood dans les années 1930. SHOWBIZ : une murder party animée pour 15 à 40 personnes, 3 h, sur devis.",
    image: "/images/salon-noir.webp",
    universe: "Hollywood",
    keywords: ["Glamour"],
    era: "Années 1930",
    eyebrow: "Glamour, cinéma et ambitions",
    pitch:
      "Hollywood, années 1930. Le glamour d’une soirée de cinéma, un rôle à décrocher et un meurtre qui bouleverse le casting. Ce soir, chacun veut tenir le premier rôle.",
    intro:
      "Hollywood, années 1930. Dans une villa, Monarch Pictures réunit artistes et personnalités du cinéma pour le casting final de Midnight Orchid. Derrière les sourires et les belles manières, chacun défend sa carrière, ses relations et sa place sous les projecteurs. L’assassinat de l’actrice Vivienne Vale bouleverse la soirée : les invités doivent désormais démêler une affaire de meurtre tout en poursuivant leurs ambitions. À vous d’entrer en scène.",
    theme: "showbiz",
    tagline: "Sous le glamour, les rivalités. Derrière le casting, un meurtre.",
    experienceTitle: "Votre soirée dans les coulisses d’Hollywood.",
    experienceIntro: "SHOWBIZ joue avec les codes du cinéma : le prestige d’un studio, le désir d’être choisi et l’écart entre une image publique et ce qu’elle dissimule. Une soirée enquête où l’on se présente, se met en scène et cherche à convaincre.",
    highlights: [
      { title: "Le glamour des années 1930.", text: "Entrez dans un Hollywood de stars, d’ambitions et de réputations. La villa devient le théâtre d’une rencontre où chaque conversation peut compter pour une carrière." },
      { title: "Un casting sous tension.", text: "Midnight Orchid est au cœur des convoitises. Artistes et personnalités du cinéma se croisent autour du film, avec leurs intérêts, leurs espoirs et leurs rivalités." },
      { title: "Un meurtre en coulisses.", text: "La mort de Vivienne Vale trouble les apparences. Écoutez les récits, confrontez les indices et cherchez ce qui se cache derrière les sourires de la soirée." },
    ],
  },
  {
    slug: "meurtre-au-chateau",
    durationHours: 3,
    minParticipants: 15,
    maxParticipants: 40,
    title: "MEURTRE AU CHÂTEAU",
    seoTitle: "Meurtre au Château : murder party médiévale",
    seoDescription: "Un château assiégé, un banquet médiéval et un meurtre à élucider. Murder party avec costumes fournis, 15 à 40 personnes, 3 h. Repas sur devis.",
    image: "/images/chateau-medieval.webp",
    universe: "Château",
    keywords: ["Moyen Âge"],
    era: "Ambiance médiévale",
    eyebrow: "Siège, banquet et secrets",
    pitch:
      "Un château assiégé, des convives réunis pour un banquet médiéval et un meurtre à élucider. Derrière les remparts, les secrets s’invitent à la table.",
    intro:
      "Le château est assiégé. À l’intérieur, un banquet médiéval réunit des personnages dont les intérêts ne s’accordent pas toujours. Un meurtre vient troubler les convives : la menace ne se trouve plus seulement au-delà des remparts. En costume, prenez place dans cette intrigue de château, écoutez ce qui se murmure et confrontez les versions. Le siège, le banquet et le lieu lui-même donnent à l’enquête toute sa couleur médiévale.",
    theme: "chateau",
    tagline: "Le siège aux portes. Les secrets à la table.",
    experienceTitle: "Derrière les remparts, un banquet sous tension.",
    experienceIntro: "Meurtre au Château réunit la pression d’un siège et les échanges d’un banquet médiéval. Le décor n’est pas un simple arrière-plan : vous jouez dans un château et les costumes fournis vous font entrer dans l’époque.",
    highlights: [
      { title: "Un château assiégé.", text: "Le siège donne son cadre à l’histoire. À l’abri des murs, il faut pourtant comprendre d’où vient le danger et à qui l’on peut se fier." },
      { title: "Des secrets parmi les convives.", text: "Le banquet place les rencontres au cœur de l’intrigue. Derrière les échanges se dessinent des intérêts divergents, des soupçons et des versions à recouper." },
      { title: "Le Moyen Âge à incarner.", text: "Le château et les costumes médiévaux fournis donnent une présence concrète à votre personnage. L’organisation du repas réel est précisée séparément dans votre devis." },
    ],
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
    seoDescription: "Enquête, paysages et fatbikes électriques au départ de Hony, Esneux, près de Liège. The Bikers : 10 à 15 personnes, 4 h, location du vélo incluse.",
    image: "/images/the-bikers-unimk.webp",
    universe: "Bikers",
    keywords: ["Extérieur"],
    era: "Enquête en fatbike électrique",
    eyebrow: "La route, les paysages, l’enquête",
    pitch:
      "Au départ de Hony, près de Liège, découvrez les paysages en fatbike électrique et menez l’enquête dans l’univers d’un club de bikers. L’aventure se vit au fil de la route.",
    intro:
      "Enfourchez un fatbike électrique Uni MK au look de moto et prenez la route depuis Hony, à Esneux. The Bikers mêle découverte des paysages et enquête dans un club de bikers traversé par les tensions et les secrets. Le groupe avance d’une étape à l’autre, entre moments de balade et scènes d’enquête. Les arrêts donnent l’occasion d’interroger, de confronter les indices et de remettre les versions en perspective. Ici, l’histoire se découvre autant en chemin qu’au fil des échanges.",
    theme: "bikers",
    tagline: "Des paysages à découvrir. Une affaire à démêler.",
    experienceTitle: "Une enquête qui prend le grand air.",
    experienceIntro: "The Bikers associe le plaisir de rouler ensemble à une intrigue en personnages. La découverte des paysages fait partie de l’expérience : le déplacement donne son rythme à l’aventure, avec des étapes pour revenir à l’enquête.",
    highlights: [
      { title: "Découvrir les paysages.", text: "La sortie commence à Hony, à Esneux, près de Liège. Profitez du parcours en groupe : les paysages et la balade occupent une vraie place dans cette murder party itinérante." },
      { title: "L’allure d’une bande de bikers.", text: "Les fatbikes électriques Uni MK au look de moto participent à l’ambiance du club. Leur location est comprise dans la prestation." },
      { title: "L’enquête d’étape en étape.", text: "Chaque arrêt fait place aux indices, aux personnages et aux versions à confronter. L’intrigue se construit progressivement, au rythme de votre aventure sur la route." },
    ],
    format: "Murder Party en fatbike électrique",
    included: "Location du vélo comprise dans le prix",
  },
  {
    slug: "black-velvet",
    durationHours: 3,
    minParticipants: 15,
    maxParticipants: 40,
    title: "BLACK VELVET",
    seoTitle: "Black Velvet : murder party mafia et succession",
    seoDescription: "New York, 1928 : mafia, guerre de succession et alliances dans un club clandestin. Black Velvet, murder party animée, 15 à 40 personnes, 3 h, sur devis.",
    image: "/images/black-velvet.webp",
    universe: "Mafia",
    era: "New York · 1928",
    eyebrow: "Mafia et guerre de succession",
    pitch:
      "New York, 1928. Le parrain est mort et ses lieutenants se disputent la succession. Dans un club clandestin, les alliances se négocient et chacun veut sa part du pouvoir.",
    intro:
      "New York, 24 octobre 1928. Le parrain qui finançait le Black Velvet est mort. Ses lieutenants se retrouvent dans le club clandestin pour régler sa succession, mais personne n’entend renoncer à ses ambitions. Dans cette guerre de pouvoir, chaque soutien compte, les fidélités se discutent et les secrets deviennent des arguments. Entrez dans la mafia de la Prohibition : il vous faudra comprendre les intérêts de chacun, négocier vos alliances et choisir à qui faire confiance.",
    theme: "velvet",
    tagline: "Le parrain est mort. La lutte pour le pouvoir commence.",
    experienceTitle: "La mafia à l’heure des comptes.",
    experienceIntro: "Black Velvet place les rapports de force au centre de la soirée. La succession ouvre une lutte d’influence entre des personnages qui ont besoin les uns des autres, sans pouvoir se fier à tout le monde. Le club clandestin devient le lieu de toutes les négociations.",
    highlights: [
      { title: "La guerre de succession.", text: "La disparition du parrain laisse ses affaires disputées. Les lieutenants veulent peser sur la suite, et les autres invités ont aussi leurs intérêts à défendre." },
      { title: "Des alliances à négocier.", text: "Soutenir un camp, convaincre un interlocuteur, protéger une information : les échanges donnent tout son relief à cette soirée de pouvoir et de méfiance." },
      { title: "New York sous la Prohibition.", text: "En 1928, le Black Velvet rassemble les invités dans l’atmosphère d’un tripot clandestin. Une ambiance de mafia et de secrets, où les belles manières n’effacent pas les rivalités." },
    ],
  },
];
