export type Scenario = {
  slug: string;
  title: string;
  subtitle?: string;
  category?: "animation";
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
  durationHours?: number;
  venue?: string;
  dressCode?: string;
  departure?: string;
  included?: string;
};
export function participantLabel(scenario: Scenario, locale: "fr" | "en" = "fr") {
  return scenario.minParticipants === scenario.maxParticipants
    ? `${scenario.minParticipants}`
    : `${scenario.minParticipants}${locale === "en" ? " to " : " à "}${scenario.maxParticipants}`;
}
export function durationLabel(scenario: Scenario, locale: "fr" | "en" = "fr") {
  return scenario.durationHours ? `${scenario.durationHours} h` : (locale === "en" ? "Duration to be agreed" : "Durée à définir ensemble");
}
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
  {
    "slug": "disco-killer",
    "title": "DISCO KILLER",
    "subtitle": "Meurtre sur le dancefloor",
    "minParticipants": 20,
    "maxParticipants": 30,
    "durationHours": 3,
    "universe": "Disco",
    "keywords": [
      "Seventies",
      "Soirée dansante"
    ],
    "era": "New York · 1978",
    "eyebrow": "Paillettes, danse et humour noir",
    "theme": "disco",
    "image": "/images/disco-killer.webp",
    "tagline": "Saurez-vous démasquer le tueur avant le dernier slow ?",
    "pitch": "New York, 1978. Sous les boules à facettes, un tueur rôde. Une murder party qui se danse autant qu’elle se joue : enquête, paillettes et tubes des seventies.",
    "intro": "New York, 1978. Les nuits sont électriques, les pantalons sont à pattes d’éléphant et les boules à facettes font tourner les têtes. Au Starship Discovery One, la discothèque la plus déjantée de Manhattan, tout le monde rêve de gloire, de paillettes et de nuits sans lendemain.\n\nMais depuis quelques semaines, un mystérieux assassin sème la terreur dans les clubs new-yorkais. La presse l’a surnommé le Disco Killer. Ses victimes ont toutes été poignardées au beau milieu de la piste de danse. Et ce soir, malgré la menace, la fête promet d’être mémorable…\n\nProducteurs véreux, stars capricieuses, DJs mégalomanes, danseurs survoltés et policiers infiltrés : chacun a ses secrets, ses ambitions et quelques cadavres dans le placard.",
    "experienceTitle": "Une murder party qui se danse autant qu’elle se joue.",
    "experienceIntro": "Ici, l’enquête se mêle à une véritable soirée disco. Entre deux révélations compromettantes, les joueurs s’affrontent sur le dancefloor, négocient sous les boules à facettes et se déhanchent sur les tubes des seventies.",
    "highlights": [
      {
        "title": "Le dancefloor fait partie du jeu.",
        "text": "Une véritable soirée dansante s’intègre à l’enquête. Les tubes des seventies rythment les rencontres, les négociations et les révélations."
      },
      {
        "title": "Des ego sous les projecteurs.",
        "text": "Producteurs, stars, DJs et danseurs poursuivent leurs ambitions. Les policiers infiltrés se mêlent à la fête : derrière les paillettes, chacun a quelque chose à cacher."
      },
      {
        "title": "Le New York de 1978.",
        "text": "Pattes d’éléphant, tenues extravagantes et boules à facettes : laissez libre cours à votre créativité pour incarner votre personnage dans une ambiance disco et humour noir."
      }
    ],
    "venue": "Une discothèque ou une salle aménagée en dancefloor",
    "dressCode": "Années 70, disco et tenues extravagantes",
    "format": "Soirée enquête avec soirée dansante intégrée",
    "seoTitle": "Disco Killer : murder party disco et soirée dansante",
    "seoDescription": "New York, 1978 : enquêtez sous les boules à facettes. Disco Killer mêle murder party et soirée disco pour 20 à 30 joueurs, environ 3 h. Sur devis."
  },
  {
    "slug": "london-requiem",
    "title": "LONDON REQUIEM",
    "subtitle": "La vente des âmes",
    "minParticipants": 15,
    "maxParticipants": 20,
    "durationHours": 3,
    "universe": "Londres",
    "keywords": [
      "Sherlock Holmes",
      "Gothique"
    ],
    "era": "Londres · 1912",
    "eyebrow": "Enquête gothique et mystères",
    "theme": "london",
    "image": "/images/london-requiem.webp",
    "tagline": "Et si certaines vérités avaient mieux fait de rester enterrées ?",
    "pitch": "Londres, 1912. Une vente privée, un maître de maison mort et un corps disparu. Une enquête à la manière de Sherlock Holmes, entre secrets de famille et mystères occultes.",
    "intro": "Londres, 1912. Le brouillard enveloppe les rues de la capitale britannique. Dans les salons feutrés de la bonne société, on parle encore des terribles crimes de Whitechapel, des mystères de l’Orient et de ces étranges expériences qui prétendent repousser les frontières de la mort.\n\nCe soir, le mystérieux docteur Edmund Rowland a convié une poignée de privilégiés à une vente privée exceptionnelle. Objets précieux rapportés des Indes, œuvres d’art mystérieuses et antiquités inestimables doivent passer entre les mains de collectionneurs fortunés.\n\nMais le maître de maison est mort. Et son corps a disparu.\n\nLa vente aura pourtant lieu. Car dans la bonne société londonienne, il serait inconvenant de laisser un décès gâcher une réception.",
    "experienceTitle": "Une enquête digne de Sherlock Holmes.",
    "experienceIntro": "Aristocrates décadents, détectives obstinés, médiums inquiétants et marchands d’art sans scrupules se croisent dans une intrigue où chaque découverte soulève de nouvelles questions. Meurtre, spiritisme, héritages maudits et ombres de Jack l’Éventreur : plusieurs mystères intimement liés attendent les joueurs.",
    "highlights": [
      {
        "title": "Le raffinement du Londres édouardien.",
        "text": "La vente privée réunit une société élégante autour d’œuvres d’art et d’antiquités. Les bonnes manières résistent même à la disparition du corps du maître de maison."
      },
      {
        "title": "Des mystères à plusieurs niveaux.",
        "text": "Recoupez les découvertes, confrontez les versions et démêlez des intrigues personnelles. L’investigation classique rencontre les mystères occultes."
      },
      {
        "title": "Une atmosphère gothique.",
        "text": "Brouillard londonien, spiritisme et secrets inavouables composent une soirée inspirée des grands romans policiers britanniques."
      }
    ],
    "venue": "Château, manoir, demeure historique ou salon d’époque",
    "dressCode": "Élégance britannique du début du XXe siècle : aristocrates, détectives et personnages mystérieux",
    "format": "Enquête à plusieurs niveaux, mystères occultes et intrigues personnelles",
    "seoTitle": "London Requiem : murder party Sherlock Holmes et gothique",
    "seoDescription": "Londres, 1912 : une vente privée, un mort et un corps disparu. Une murder party gothique inspirée de Sherlock Holmes, 15 à 20 joueurs, environ 3 h."
  },
  {
    "slug": "nid-d-espions",
    "title": "NID D’ESPIONS",
    "subtitle": "Bons baisers de nulle part",
    "posterTitle": [
      "NID",
      "D’ESPIONS"
    ],
    "minParticipants": 15,
    "maxParticipants": 15,
    "durationHours": 3,
    "universe": "Espionnage",
    "keywords": [
      "James Bond",
      "Humour"
    ],
    "era": "Hôtel-casino · Secrets internationaux",
    "eyebrow": "Bluff, diplomatie et faux-semblants",
    "theme": "espions",
    "image": "/images/nid-d-espions.webp",
    "tagline": "Votre mission : découvrir la vérité. Et surtout, ne faire confiance à personne.",
    "pitch": "Dans un prestigieux hôtel-casino, un meurtre fait tomber les couvertures. Entre James Bond et OSS 117, bluffez, négociez et protégez vos secrets sans renverser votre Martini.",
    "intro": "Bienvenue dans le monde merveilleux de l’espionnage international, où personne n’est celui qu’il prétend être, où les cocktails sont toujours bien frappés et où les agents secrets ont parfois davantage de charme que de compétences.\n\nDans le cadre feutré d’un prestigieux hôtel-casino, les apparences sont trompeuses. Derrière les smokings impeccables et les robes de soirée se dissimulent des espions, des manipulateurs et quelques individus dont les intentions sont franchement douteuses.\n\nMais lorsqu’un meurtre vient perturber ce petit monde, les couvertures commencent à tomber. Et un mystérieux secret, le Code Tesla, pourrait bien bouleverser l’équilibre des forces.",
    "experienceTitle": "Entre James Bond et OSS 117, une enquête délicieusement décalée.",
    "experienceIntro": "Ici, on espionne ses voisins, on collectionne les fausses identités, on négocie des informations confidentielles et on tente de survivre aux intrigues internationales sans renverser son Martini. Une expérience qui fait la part belle au bluff, à la diplomatie, à la trahison et à l’humour.",
    "highlights": [
      {
        "title": "Une couverture à préserver.",
        "text": "Smokings et robes de soirée cachent des identités trompeuses. Observez vos voisins et choisissez avec soin ce que vous leur révélez."
      },
      {
        "title": "Le Code Tesla au cœur des convoitises.",
        "text": "Un meurtre et un mystérieux secret bouleversent les rapports de force. Les informations deviennent une monnaie d’échange et les alliances restent fragiles."
      },
      {
        "title": "L’espionnage avec humour.",
        "text": "L’élégance rencontre le décalage dans une ambiance de film d’espionnage. L’intrigue peut se transposer dans un hôtel, un casino ou un autre lieu élégant."
      }
    ],
    "venue": "Hôtel, casino, salle de réception ou lieu élégant",
    "dressCode": "Smokings, robes de soirée, agents secrets et élégance internationale",
    "format": "Intrigue d’espionnage mêlant meurtre et enjeux internationaux",
    "seoTitle": "Nid d’espions : murder party James Bond et OSS 117",
    "seoDescription": "Un hôtel-casino, un meurtre et le Code Tesla. Nid d’espions mêle bluff, humour et espionnage à la James Bond ou OSS 117. 15 joueurs, environ 3 h."
  },
  {
    "slug": "spy-party",
    "title": "SPY PARTY",
    "subtitle": "Votre événement passe sous couverture",
    "category": "animation",
    "minParticipants": 30,
    "maxParticipants": 120,
    "universe": "Espionnage",
    "keywords": [
      "Grands groupes",
      "Animation"
    ],
    "era": "Missions secrètes · Agences rivales",
    "eyebrow": "Rencontres, missions et infiltration",
    "theme": "spy",
    "image": "/images/spy-party.webp",
    "tagline": "Les meilleures informations se cachent peut-être à la table d’à côté.",
    "pitch": "De 30 à 120 participants, des agences rivales et des missions secrètes. Une animation d’espionnage conviviale pour briser la glace, bluffer et échanger au fil de votre événement.",
    "intro": "Et si vos invités menaient une double vie le temps de votre événement ? Spy Party les plonge dans un jeu d’espionnage où les agences rivales, les identités secrètes et les informations confidentielles multiplient les occasions de se rencontrer.\n\nVotre mission : nouer des contacts, récolter des renseignements et négocier avec les autres participants. Entre bluff et infiltration, une conversation anodine peut devenir votre meilleur atout. Les smartphones et les QR codes accompagnent les missions et la circulation des informations.",
    "experienceTitle": "Un grand groupe, mille occasions de se rencontrer.",
    "experienceIntro": "Spy Party est une animation d’espionnage pour 30 à 120 participants, qui peut accompagner un cocktail ou un repas. Chacun joue à son rythme, sans personnage théâtral imposé. Le format et la durée sont définis avec vous selon le déroulement de votre événement.",
    "highlights": [
      {
        "title": "Des missions pour briser la glace.",
        "text": "Rencontrer d’autres invités, échanger des informations et négocier : les missions donnent un prétexte ludique aux conversations et aux nouvelles alliances."
      },
      {
        "title": "Des agences et des identités secrètes.",
        "text": "Saurez-vous repérer vos alliés et préserver vos informations ? Bluff, infiltration et diplomatie nourrissent le jeu entre les participants."
      },
      {
        "title": "Une animation au rythme de la réception.",
        "text": "Cocktail, repas, événement d’entreprise ou fête privée : nous précisons ensemble l’intégration de Spy Party, les besoins pratiques et la durée."
      }
    ],
    "venue": "Un lieu adapté à votre réception, à définir ensemble",
    "format": "Animation d’espionnage pour grands groupes",
    "seoTitle": "Spy Party : animation espionnage pour 30 à 120 personnes",
    "seoDescription": "Missions secrètes, agences rivales, bluff et rencontres : Spy Party anime votre cocktail, repas ou événement de 30 à 120 participants. Format sur devis."
  },
];
