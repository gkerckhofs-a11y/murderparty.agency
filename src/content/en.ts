import { scenarios as frenchScenarios, type Scenario } from "./fr";

type Translation = Pick<Scenario, "title" | "universe" | "era" | "eyebrow" | "pitch" | "intro" | "tagline" | "experienceTitle" | "experienceIntro" | "highlights" | "seoTitle" | "seoDescription"> & Partial<Pick<Scenario, "subtitle" | "keywords" | "posterTitle" | "format" | "included" | "venue" | "dressCode">>;
const translations: Record<string, Translation> = {
  showbiz: {
    title: "SHOWBIZ", universe: "Hollywood", keywords: ["Glamour"], era: "The 1930s", eyebrow: "Glamour, cinema and ambition",
    pitch: "Hollywood, the 1930s. A glamorous film gathering, a coveted role and a murder that turns the casting upside down. Tonight, everyone wants the leading part.",
    intro: "Hollywood, the 1930s. At a villa, Monarch Pictures brings together performers and film industry figures for the final casting of Midnight Orchid. Behind the smiles and polished manners, everyone is protecting their career, their connections and their place in the spotlight. The murder of actress Vivienne Vale disrupts the evening: the guests must now untangle a murder case while pursuing their own ambitions. Your cue to enter the scene.",
    tagline: "Beneath the glamour, rivalry. Behind the casting, murder.",
    experienceTitle: "Your evening behind the scenes in Hollywood.",
    experienceIntro: "SHOWBIZ draws on the world of cinema: the prestige of a studio, the desire to be chosen and the gap between a public image and what it conceals. A murder mystery evening where everyone makes an entrance, plays a part and tries to persuade.",
    highlights: [
      { title: "The glamour of the 1930s.", text: "Enter a Hollywood of stars, ambitions and reputations. The villa becomes the setting for a gathering where every conversation could shape a career." },
      { title: "A casting under pressure.", text: "Everyone has their eyes on Midnight Orchid. Performers and film industry figures gather around the production with their own interests, hopes and rivalries." },
      { title: "Murder behind the scenes.", text: "Vivienne Vale’s death unsettles appearances. Listen to the stories, compare the clues and discover what lies behind the evening’s smiles." },
    ],
    seoTitle: "SHOWBIZ: a glamorous Hollywood murder mystery party",
    seoDescription: "Glamour, cinema and a casting in 1930s Hollywood. SHOWBIZ is a hosted murder mystery party for 15 to 40 people, lasting 3 hours. Bespoke quotes.",
  },
  "meurtre-au-chateau": {
    title: "MURDER AT THE CASTLE", posterTitle: ["MURDER AT", "THE CASTLE"], universe: "Castle", keywords: ["Middle Ages"], era: "A medieval setting", eyebrow: "Siege, banquet and secrets",
    pitch: "A castle under siege, guests gathered for a medieval banquet and a murder to solve. Behind the ramparts, secrets take their place at the table.",
    intro: "The castle is under siege. Inside, a medieval banquet brings together characters whose interests do not always align. A murder unsettles the guests: the threat is no longer confined to the other side of the ramparts. In costume, take your place in this castle intrigue, listen to the whispers and compare the accounts. The siege, the banquet and the venue itself give this mystery its unmistakably medieval atmosphere.",
    tagline: "A siege at the gates. Secrets at the table.",
    experienceTitle: "Behind the ramparts, a banquet under tension.",
    experienceIntro: "Murder at the Castle combines the pressure of a siege with the conversations of a medieval banquet. The setting is more than a backdrop: you play in a castle, and the supplied costumes help you step into the period.",
    highlights: [
      { title: "A castle under siege.", text: "The siege sets the scene. Even within the safety of the walls, you must discover where the danger comes from and whom you can trust." },
      { title: "Secrets among the guests.", text: "The banquet puts encounters at the heart of the story. Conversations reveal conflicting interests, suspicions and accounts to cross-check." },
      { title: "Step into the Middle Ages.", text: "The castle and the supplied medieval costumes bring your character to life. Arrangements for an actual meal are specified separately in your quote." },
    ],
    format: "A medieval character-based mystery", included: "Medieval costumes supplied and included in the price",
    seoTitle: "Murder at the Castle: a medieval murder mystery party",
    seoDescription: "A castle under siege, a medieval banquet and a murder to solve. Costumes included, 15 to 40 people, 3 hours. Meal arrangements quoted separately.",
  },
  "the-bikers": {
    title: "THE BIKERS", universe: "Bikers", keywords: ["Outdoors"], era: "An electric fatbike mystery", eyebrow: "The road, the scenery, the mystery",
    pitch: "Set off from Hony, near Liège, explore the scenery on electric fatbikes and investigate a mystery in the world of a biker club. The adventure unfolds along the road.",
    intro: "Climb onto a motorcycle-style Uni MK electric fatbike and set off from Hony, in Esneux. The Bikers combines scenic exploration with a mystery involving a biker club divided by tensions and secrets. The group travels from one stage to the next, alternating between the ride and scenes of investigation. Stops offer a chance to question others, compare clues and reconsider the different accounts. Here, the story is discovered through the journey as much as through conversation.",
    tagline: "Scenery to discover. A case to unravel.",
    experienceTitle: "A mystery that takes you outdoors.",
    experienceIntro: "The Bikers combines the pleasure of riding together with a character-based story. Exploring the scenery is part of the experience: the journey sets the pace, with stops to return to the investigation.",
    highlights: [
      { title: "Discover the scenery.", text: "The outing starts in Hony, Esneux, near Liège. Enjoy the route together: the scenery and the ride are an integral part of this travelling murder mystery." },
      { title: "The look of a biker gang.", text: "The motorcycle-style Uni MK electric fatbikes contribute to the club atmosphere. Bike hire is included in the experience." },
      { title: "Investigate along the way.", text: "Each stop makes room for clues, characters and accounts to compare. The mystery develops gradually as your adventure on the road unfolds." },
    ],
    format: "Murder mystery on electric fatbikes", included: "Bike hire included in the price",
    seoTitle: "Electric bike murder mystery near Liège — The Bikers",
    seoDescription: "Mystery, scenery and electric fatbikes from Hony, Esneux, near Liège. The Bikers welcomes 10 to 15 people for 4 hours, with bike hire included.",
  },
  "black-velvet": {
    title: "BLACK VELVET", universe: "Mafia", era: "New York · 1928", eyebrow: "Mafia and a succession struggle",
    pitch: "New York, 1928. The boss is dead and his lieutenants are fighting over the succession. In a secret club, alliances are negotiated and everyone wants a share of the power.",
    intro: "New York, 24 October 1928. The boss who financed the Black Velvet is dead. His lieutenants gather in the clandestine club to settle the succession, but nobody intends to give up their ambitions. In this struggle for power, every supporter matters, loyalties are negotiable and secrets become bargaining chips. Step into the Prohibition-era mafia: you will need to understand everyone’s interests, negotiate your alliances and decide whom to trust.",
    tagline: "The boss is dead. The struggle for power begins.",
    experienceTitle: "A reckoning in the mafia.",
    experienceIntro: "Black Velvet puts power dynamics at the centre of the evening. The succession sparks a struggle for influence between characters who need each other but cannot trust everyone. The clandestine club becomes the setting for every negotiation.",
    highlights: [
      { title: "The succession struggle.", text: "The boss’s death leaves his business interests up for grabs. The lieutenants want a say in what happens next, while the other guests have interests of their own." },
      { title: "Alliances to negotiate.", text: "Support a faction, persuade someone, protect a piece of information: these exchanges give depth to an evening of power and suspicion." },
      { title: "Prohibition-era New York.", text: "In 1928, Black Velvet brings guests together in a clandestine gambling club. A world of mafia secrets, where polished manners do not erase rivalries." },
    ],
    seoTitle: "Black Velvet: a mafia murder mystery and power struggle",
    seoDescription: "New York, 1928: mafia, succession and alliances in a clandestine club. Black Velvet is a hosted murder mystery for 15 to 40 people, lasting 3 hours.",
  },
  "disco-killer": {
    title: "DISCO KILLER", subtitle: "Murder on the dancefloor", universe: "Disco", keywords: ["Seventies", "Dancing"], era: "New York · 1978", eyebrow: "Glitter, dancing and dark humour",
    pitch: "New York, 1978. A killer is on the loose beneath the mirror balls. A murder mystery you dance as much as you play: clues, glitter and seventies hits.",
    intro: "New York, 1978. The nights are electric, the trousers are flared and the mirror balls are turning heads. At the Starship Discovery One, Manhattan’s wildest nightclub, everyone dreams of fame, glitter and nights with no tomorrow.\n\nBut for several weeks, a mysterious killer has been terrorising New York’s clubs. The press has dubbed the murderer the Disco Killer. Every victim has been stabbed in the middle of the dancefloor. And tonight, despite the threat, the party promises to be unforgettable…\n\nCrooked producers, temperamental stars, egomaniac DJs, tireless dancers and undercover police: everyone has their secrets, their ambitions and a few skeletons in the closet.",
    tagline: "Can you unmask the killer before the last slow dance?",
    experienceTitle: "A murder mystery you dance as much as you play.",
    experienceIntro: "Here, the investigation meets a real disco party. Between compromising revelations, players face off on the dancefloor, negotiate beneath the mirror balls and dance to seventies hits.",
    highlights: [
      { title: "The dancefloor is part of the game.", text: "A real dance party is woven into the investigation. Seventies hits set the pace for encounters, negotiations and revelations." },
      { title: "Egos in the spotlight.", text: "Producers, stars, DJs and dancers pursue their ambitions. Undercover police join the party: behind the glitter, everyone has something to hide." },
      { title: "New York in 1978.", text: "Flared trousers, extravagant outfits and mirror balls: let your creativity shine as you bring your character to life in a disco atmosphere with dark humour." },
    ],
    venue: "A nightclub or a room set up as a dancefloor", dressCode: "Seventies disco and extravagant outfits", format: "Murder mystery with an integrated dance party",
    seoTitle: "Disco Killer: a disco murder mystery and dance party",
    seoDescription: "New York, 1978: investigate beneath the mirror balls. Disco Killer combines murder mystery and disco dancing for 20 to 30 players, around 3 hours.",
  },
  "london-requiem": {
    title: "LONDON REQUIEM", subtitle: "The auction of souls", universe: "London", keywords: ["Sherlock Holmes", "Gothic"], era: "London · 1912", eyebrow: "Gothic investigation and mystery",
    pitch: "London, 1912. A private auction, a dead host and a missing body. A Sherlock Holmes-style investigation, caught between family secrets and occult mysteries.",
    intro: "London, 1912. Fog shrouds the streets of the British capital. In the hushed drawing rooms of high society, people still speak of the terrible Whitechapel crimes, the mysteries of the East and strange experiments claiming to push back the boundaries of death.\n\nTonight, the mysterious Dr Edmund Rowland has invited a privileged few to an exceptional private auction. Precious objects brought back from India, mysterious works of art and priceless antiquities are to pass into the hands of wealthy collectors.\n\nBut the host is dead. And his body has disappeared.\n\nThe auction will go ahead nevertheless. In London’s high society, it would be unseemly to let a death spoil a reception.",
    tagline: "What if some truths were better left buried?",
    experienceTitle: "An investigation worthy of Sherlock Holmes.",
    experienceIntro: "Decadent aristocrats, dogged detectives, unsettling mediums and unscrupulous art dealers cross paths in a story where every discovery raises new questions. Murder, spiritualism, cursed inheritances and the shadow of Jack the Ripper: several closely connected mysteries await the players.",
    highlights: [
      { title: "The elegance of Edwardian London.", text: "The private auction gathers elegant society around works of art and antiquities. Good manners endure even the disappearance of the host’s body." },
      { title: "Layers of mystery.", text: "Cross-check discoveries, compare accounts and untangle personal intrigues. Classic detective work meets occult mysteries." },
      { title: "A gothic atmosphere.", text: "London fog, spiritualism and unspoken secrets shape an evening inspired by the great British detective novels." },
    ],
    venue: "A castle, manor, historic house or period drawing room", dressCode: "Early twentieth-century British elegance: aristocrats, detectives and mysterious characters", format: "A layered investigation, occult mysteries and personal intrigues",
    seoTitle: "London Requiem: a gothic Sherlock Holmes-style murder mystery",
    seoDescription: "London, 1912: a private auction, a dead host and a missing body. A gothic murder mystery inspired by Sherlock Holmes, 15 to 20 players, around 3 hours.",
  },
  "nid-d-espions": {
    title: "NEST OF SPIES", subtitle: "From nowhere with love", posterTitle: ["NEST OF", "SPIES"], universe: "Espionage", keywords: ["James Bond", "Humour"], era: "Hotel-casino · International secrets", eyebrow: "Bluff, diplomacy and deception",
    pitch: "In a prestigious hotel-casino, a murder blows everyone’s cover. Somewhere between James Bond and OSS 117, bluff, negotiate and protect your secrets without spilling your Martini.",
    intro: "Welcome to the wonderful world of international espionage, where nobody is who they claim to be, cocktails are always perfectly chilled and secret agents sometimes have more charm than competence.\n\nIn the refined surroundings of a prestigious hotel-casino, appearances are deceptive. Immaculate dinner jackets and evening gowns conceal spies, manipulators and a few people with decidedly questionable intentions.\n\nBut when a murder disrupts this little world, covers begin to crumble. And a mysterious secret, the Tesla Code, could upset the balance of power.",
    tagline: "Your mission: discover the truth. Above all, trust no one.",
    experienceTitle: "Between James Bond and OSS 117, a delightfully offbeat mystery.",
    experienceIntro: "Spy on your neighbours, collect false identities, negotiate confidential information and try to survive international intrigue without spilling your Martini. An experience that gives centre stage to bluff, diplomacy, betrayal and humour.",
    highlights: [
      { title: "A cover to maintain.", text: "Dinner jackets and evening gowns conceal deceptive identities. Observe your neighbours and choose carefully what you reveal." },
      { title: "The coveted Tesla Code.", text: "A murder and a mysterious secret upset the balance of power. Information becomes a bargaining chip and alliances remain fragile." },
      { title: "Espionage with a sense of humour.", text: "Elegance meets the unexpected in a spy-film atmosphere. The story can be adapted to a hotel, casino or another elegant venue." },
    ],
    venue: "A hotel, casino, reception room or elegant venue", dressCode: "Dinner jackets, evening gowns, secret agents and international elegance", format: "A spy story combining murder and international stakes",
    seoTitle: "Nest of Spies: a James Bond and OSS 117-style murder mystery",
    seoDescription: "A hotel-casino, a murder and the Tesla Code. Nest of Spies combines bluff, humour and James Bond or OSS 117-style espionage. 15 players, around 3 hours.",
  },
  "spy-party": {
    title: "SPY PARTY", subtitle: "Your event goes undercover", universe: "Espionage", keywords: ["Large groups", "Activity"], era: "Secret missions · Rival agencies", eyebrow: "Encounters, missions and infiltration",
    pitch: "From 30 to 120 participants, rival agencies and secret missions. A sociable espionage activity to break the ice, bluff and exchange information throughout your event.",
    intro: "What if your guests led a double life for the duration of your event? Spy Party draws them into an espionage game where rival agencies, secret identities and confidential information create opportunities to meet.\n\nYour mission: make contacts, gather intelligence and negotiate with other participants. Between bluff and infiltration, an innocent conversation could become your greatest asset. Smartphones and QR codes support the missions and the exchange of information.",
    tagline: "The best intelligence might be sitting at the next table.",
    experienceTitle: "A large group, countless opportunities to connect.",
    experienceIntro: "Spy Party is an espionage activity for 30 to 120 participants that can accompany a drinks reception or a meal. Everyone plays at their own pace, without an assigned theatrical character to perform. The format and duration are agreed with you to fit the schedule of your event.",
    highlights: [
      { title: "Missions to break the ice.", text: "Meet other guests, exchange intelligence and negotiate: missions give conversations and new alliances a playful purpose." },
      { title: "Agencies and secret identities.", text: "Can you identify your allies and protect your information? Bluff, infiltration and diplomacy drive the interaction between participants." },
      { title: "An activity that fits your reception.", text: "Drinks reception, meal, company event or private celebration: together we agree how Spy Party fits in, its practical requirements and its duration." },
    ],
    venue: "A venue suited to your reception, to be agreed together", format: "Espionage activity for large groups",
    seoTitle: "Spy Party: an espionage activity for 30 to 120 people",
    seoDescription: "Secret missions, rival agencies, bluff and new connections: Spy Party brings play to your reception, meal or event for 30 to 120 people. Bespoke quotes.",
  },
};

// Capacities, duration, images and identifiers share the French source of truth.
export const scenarios: Scenario[] = frenchScenarios.map((scenario) => {
  const translation = translations[scenario.slug];
  if (!translation) throw new Error(`Missing English scenario: ${scenario.slug}`);
  return { ...scenario, ...translation };
});
