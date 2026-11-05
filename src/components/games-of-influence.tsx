import Link from "next/link";
import { Arrow } from "./ui";
import { Breadcrumbs } from "./structured-data";
import { localizedPath, type Locale } from "@/lib/i18n";
import { gamesOfInfluence, influenceImage } from "@/content/games-of-influence";

function InfluenceEmblem() {
  return <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <circle cx="36" cy="36" r="32" /><circle cx="36" cy="36" r="25" opacity=".45" />
    <path d="m36 19 15 26H21Z" /><circle cx="36" cy="19" r="4" fill="var(--bg)" /><circle cx="21" cy="45" r="4" fill="var(--bg)" /><circle cx="51" cy="45" r="4" fill="var(--bg)" /><circle cx="36" cy="36" r="4" />
  </svg>;
}

export function InfluenceTeaser({ locale = "fr" }: { locale?: Locale }) {
  const en = locale === "en";
  return <section className="wrap influence-teaser" aria-label="Games of Influence">
    <Link href={localizedPath("/games-of-influence/", locale)} className="influence-teaser-link">
      <div className="influence-teaser-art" aria-hidden="true"><img src={influenceImage} width={1600} height={900} alt="" loading="lazy" /><InfluenceEmblem /></div>
      <div className="influence-teaser-copy"><span className="eyebrow">{en ? "NARRATIVE GAME · DIPLOMACY" : "JEU NARRATIF · DIPLOMATIE"}</span>
        <h2>Games of <em>Influence.</em></h2>
        <p>{en ? "Negotiate. Influence. Shape the story. Bring your factions together and decide the future of your world." : "Négociez. Influencez. Écrivez l’histoire. Réunissez vos factions et décidez ensemble de l’avenir de votre monde."}</p>
        <span className="influence-teaser-bottom"><span>{en ? "12 to 60 participants · Multiple settings" : "12 à 60 participants · Plusieurs univers"}</span><span className="text-link">{en ? "Discover the experience" : "Découvrir l’expérience"} <Arrow /></span></span>
      </div>
    </Link>
  </section>;
}

export default function GamesOfInfluencePage({ locale }: { locale: Locale }) {
  const t = (fr: string, en: string) => locale === "en" ? en : fr;
  const quoteHref = localizedPath(`/devis/?scenario=${gamesOfInfluence.slug}`, locale);
  return <div className="influence-page">
    <Breadcrumbs locale={locale} items={[{ name: gamesOfInfluence.title, path: localizedPath("/games-of-influence/", locale) }]} />
    <section className="influence-hero" aria-labelledby="influence-title">
      <img className="influence-hero-image" src={influenceImage} alt="" width={1600} height={900} fetchPriority="high" />
      <div className="influence-hero-shade" />
      <div className="wrap influence-hero-inner"><div className="influence-hero-copy">
        <span className="eyebrow">{t("EXPÉRIENCE NARRATIVE & DIPLOMATIE", "NARRATIVE EXPERIENCE & DIPLOMACY")}</span>
        <h1 id="influence-title"><span>Games of</span><em>Influence</em></h1>
        <p className="influence-tagline">{t("Négociez. Influencez. Écrivez l’histoire.", "Negotiate. Influence. Shape the story.")}</p>
        <p className="influence-hero-intro">{t("Les joueurs ne suivent pas une histoire : ils la construisent ensemble.", "Players don’t follow a story: they build it together.")}</p>
        <div className="hero-actions"><Link className="button primary" href={quoteHref}>{t("Imaginons votre partie", "Let’s plan your game")} <Arrow /></Link><a className="text-link" href="#univers">{t("Explorer les univers", "Explore the settings")} <Arrow diagonal /></a></div>
      </div><span className="influence-art-credit">{t("Illustration d’ambiance", "Atmosphere illustration")}</span></div>
    </section>
    <div className="influence-facts"><div className="wrap">
      <span><strong>12—60</strong>{t("participants", "participants")}</span>
      <span><strong>{t("Un récit", "One story")}</strong>{t("à construire ensemble", "to shape together")}</span>
      <span><strong>{t("Plusieurs univers", "Multiple settings")}</strong>{t("un même moteur de jeu", "one shared game system")}</span>
      <span><strong>{t("Sur devis", "Bespoke quote")}</strong>{t("pour votre événement", "for your event")}</span>
    </div></div>

    <section className="wrap influence-editorial influence-opening" aria-labelledby="influence-story">
      <div><span className="eyebrow">{t("LA DIPLOMATIE FAIT L’HISTOIRE", "DIPLOMACY DRIVES THE STORY")}</span><h2 id="influence-story">{t("Un monde commun.", "A shared world.")}<br /><em>{t("Des ambitions secrètes.", "Secret ambitions.")}</em></h2></div>
      <div className="influence-prose"><p>{t("Répartis en plusieurs factions, les participants doivent défendre leurs intérêts, négocier, former des alliances, convaincre leurs adversaires et peser sur les décisions qui feront évoluer leur monde.", "Divided into factions, participants defend their interests, negotiate, form alliances, persuade their opponents and influence the decisions that will shape their world.")}</p>
        <p>{t("Mais chaque faction poursuit aussi ses propres ambitions. Coopérer aujourd’hui peut être indispensable. S’opposer demain peut devenir nécessaire.", "But every faction also has ambitions of its own. Cooperation may be essential today. Opposition may become necessary tomorrow.")}</p>
        <p className="influence-accent">{t("Bienvenue dans un jeu où la diplomatie devient le moteur de l’histoire.", "Welcome to a game where diplomacy drives the story.")}</p>
      </div>
    </section>

    <section className="influence-chapters" aria-labelledby="influence-decisions"><div className="wrap">
      <div className="section-heading"><div><span className="eyebrow">{t("CHAPITRES, ÉVÉNEMENTS, CRISES & DILEMMES", "CHAPTERS, EVENTS, CRISES & DILEMMAS")}</span><h2 id="influence-decisions">{t("Vos décisions.", "Your decisions.")}<br /><em>{t("La suite de l’histoire.", "The next chapter.")}</em></h2></div><p>{t("La partie progresse à travers une succession de chapitres, d’événements, de crises et de dilemmes. À chaque étape, les factions doivent prendre position.", "The game unfolds through a series of chapters, events, crises and dilemmas. At every stage, the factions must take a stand.")}</p></div>
      <div className="influence-dilemmas">
        {[t("Investir dans un projet profitable à tous ?", "Invest in a project that benefits everyone?"), t("Privilégier sa propre faction ?", "Put your own faction first?"), t("Soutenir un allié ?", "Support an ally?"), t("Négocier son vote ?", "Negotiate your vote?"), t("Faire une promesse… et la tenir ?", "Make a promise… and keep it?")].map((question, i) => <div key={question}><span>{String(i + 1).padStart(2, "0")}</span><p>{question}</p></div>)}
      </div>
      <div className="influence-consequences"><p>{t("Les décisions prises par les joueurs ont des conséquences. Elles modifient l’équilibre du monde, ouvrent de nouvelles possibilités, provoquent parfois de nouvelles crises et orientent la suite du récit.", "The players’ decisions have consequences. They shift the balance of the world, open new possibilities, sometimes trigger new crises and guide the story forward.")}</p><p><strong>{t("L’histoire n’est jamais totalement écrite à l’avance.", "The story is never completely written in advance.")}</strong> {t("Deux groupes confrontés au même scénario peuvent créer deux aventures radicalement différentes.", "Two groups facing the same scenario can create two radically different adventures.")}</p></div>
    </div></section>

    <section className="wrap influence-diplomacy" aria-labelledby="influence-alliances"><div className="influence-emblem"><InfluenceEmblem /></div>
      <span className="eyebrow">{t("DIPLOMATIE, ALLIANCES & JEUX D’INFLUENCE", "DIPLOMACY, ALLIANCES & INFLUENCE")}</span>
      <h2 id="influence-alliances">{t("Le véritable terrain de jeu ?", "The real playing field?")}<br /><em>{t("Entre les joueurs.", "Between the players.")}</em></h2>
      <p>{t("Autour de chaque décision commencent les discussions. On argumente. On négocie. On cherche des soutiens. On crée des coalitions. On échange des faveurs. On tente de comprendre les véritables intentions des autres factions.", "Every decision sparks discussion. You make your case. You negotiate. You seek support, build coalitions and exchange favours. You try to understand what the other factions really want.")}</p>
      <p>{t("Certaines alliances dureront toute la partie. D’autres seulement quelques minutes. Car derrière les objectifs collectifs, chaque faction possède ses propres intérêts et peut chercher à orienter l’histoire à son avantage.", "Some alliances will last the whole game. Others only a few minutes. Behind the shared goals, each faction has its own interests and may try to steer the story to its advantage.")}</p>
      <blockquote>{t("Votre meilleur allié peut aussi devenir votre principal adversaire.", "Your greatest ally could also become your strongest opponent.")}</blockquote>
    </section>

    <section className="influence-worlds" id="univers" aria-labelledby="influence-worlds-title"><div className="wrap">
      <div className="section-heading"><div><span className="eyebrow">{t("PLUSIEURS UNIVERS", "MULTIPLE SETTINGS")}</span><h2 id="influence-worlds-title">{t("L’époque change.", "The era changes.")}<br /><em>{t("L’influence demeure.", "Influence remains.")}</em></h2></div><p>{t("Games of Influence n’est pas limité à un seul scénario. Chaque univers propose ses propres factions, enjeux, personnages et dilemmes.", "Games of Influence goes beyond a single scenario. Each setting brings its own factions, stakes, characters and dilemmas.")}</p></div>
      <article className="influence-western"><div className="influence-world-number" aria-hidden="true">01</div><div><span className="eyebrow">WESTERN</span><h3>Le Pacte <em>des Fondateurs</em></h3><p>{t("Une ville du Far West est en train de naître. Les grandes familles fondatrices doivent décider ensemble de son avenir : commerce, sécurité, infrastructures, justice, développement…", "A frontier town is taking shape. Its founding families must decide its future together: trade, security, infrastructure, justice, growth…")}</p><p>{t("Mais derrière cette ambition collective, chacune poursuit ses propres objectifs.", "But behind this shared ambition, every family is pursuing goals of its own.")}</p></div><div className="influence-western-note">{t("Quel avenir bâtirez-vous ensemble ?", "What future will you build together?")}<a href={quoteHref} className="text-link">{t("Parlons de votre univers", "Let’s discuss your setting")} <Arrow /></a></div></article>
      <div className="influence-other-worlds"><span className="eyebrow">{t("ET D’AUTRES UNIVERS…", "AND OTHER WORLDS…")}</span><ul>{[t("Mafia", "Mafia"), t("Moyen Âge", "Middle Ages"), t("Grandes corporations", "Corporate empires"), t("Science-fiction", "Science fiction"), t("Politique", "Politics"), t("Univers historiques", "Historical settings"), t("Scénarios personnalisés", "Bespoke scenarios")].map(world=><li key={world}>{world}</li>)}</ul><p>{t("L’époque change. Les enjeux changent. Les factions changent. Mais une question demeure : jusqu’où êtes-vous prêt à négocier pour influencer l’histoire ?", "The era changes. The stakes change. The factions change. But one question remains: how far will you negotiate to shape the story?")}</p></div>
    </div></section>

    <section className="wrap influence-editorial" aria-labelledby="influence-group"><div><span className="eyebrow">{t("DE 12 À 60 PARTICIPANTS", "12 TO 60 PARTICIPANTS")}</span><h2 id="influence-group">{t("Votre groupe.", "Your group.")}<br /><em>{t("Une place pour chacun.", "A part for everyone.")}</em></h2></div><div className="influence-prose">
      <p>{t("Games of Influence est conçu pour des groupes de 12 à 60 participants. Répartis en plusieurs factions, les joueurs peuvent naturellement trouver leur place dans le groupe.", "Games of Influence is designed for groups of 12 to 60 participants. Within their factions, players can naturally find the part that suits them.")}</p>
      <p>{t("Certains prendront la parole. D’autres négocieront discrètement. Certains analyseront les rapports de force, chercheront des informations ou partiront convaincre les autres factions.", "Some will speak up. Others will negotiate quietly. Some will analyse the balance of power, gather information or set out to persuade the other factions.")}</p>
      <p>{t("Il n’est pas nécessaire d’être joueur expérimenté ou amateur de jeu de rôle. Les règles sont volontairement accessibles.", "You don’t need to be an experienced gamer or a roleplaying enthusiast. The rules are designed to be accessible.")}</p>
      <p className="influence-accent">{t("Le système organise le jeu. Les participants créent l’expérience.", "The system structures the game. The participants create the experience.")}</p>
    </div></section>

    <section className="influence-gathering"><div className="wrap influence-editorial"><div><span className="eyebrow">{t("UNE EXPÉRIENCE POUR LES GROUPES", "AN EXPERIENCE FOR GROUPS")}</span><h2>{t("Des décisions partagées.", "Shared decisions.")}<br /><em>{t("Des souvenirs communs.", "Lasting memories.")}</em></h2></div><div className="influence-prose">
      <p>{t("Team building, séminaires, événements d’entreprise, soirées privées ou animations grand groupe : Games of Influence crée naturellement des interactions entre les participants.", "Team building, seminars, company events, private evenings or large group activities: Games of Influence creates opportunities for people to interact.")}</p>
      <p>{t("Le jeu pousse à communiquer avec des personnes avec lesquelles on n’aurait pas nécessairement échangé. Il crée des discussions, des négociations, des retournements de situation et des souvenirs communs.", "The game encourages conversations with people you might not otherwise have spoken to. It creates discussion, negotiation, unexpected turns and shared memories.")}</p>
      <p>{t("Narration interactive, diplomatie, négociation, stratégie, alliances et objectifs secrets : les joueurs décident de ce qui va se produire, puis vivent avec les conséquences de leurs choix. Progressivement, quelque chose d’unique apparaît : l’histoire de leur partie.", "Interactive storytelling, diplomacy, negotiation, strategy, alliances and secret objectives: players decide what happens, then live with the consequences of their choices. Gradually, something unique emerges: the story of their game.")}</p>
    </div></div></section>

    <section className="wrap influence-finale"><span className="eyebrow">{t("PERSONNE NE CONNAÎT ENCORE LA FIN", "NO ONE KNOWS THE ENDING YET")}</span><h2>{t("À la fin, vous raconterez", "At the end, you’ll remember")}<br /><em>{t("ce que vous avez fait.", "what you did.")}</em></h2>
      <p>{t("Les alliances que vous avez conclues. Les décisions que vous avez défendues. Les promesses que vous avez faites. Et parfois… celles que vous n’avez pas tenues.", "The alliances you forged. The decisions you defended. The promises you made. And sometimes… the ones you broke.")}</p>
      <Link href={quoteHref} className="button primary">{t("Écrivons votre prochaine histoire", "Let’s write your next story")} <Arrow /></Link>
      <p className="small-note">{t("12 à 60 participants · Plusieurs univers · Devis sur mesure", "12 to 60 participants · Multiple settings · Bespoke quote")}</p>
    </section>
  </div>;
}
