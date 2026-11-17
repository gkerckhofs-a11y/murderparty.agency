import Link from "next/link";
import { Arrow, EndCta } from "@/components/ui";
import { Breadcrumbs } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Murder party Liège – soirée enquête sur mesure",
  "Organisez votre murder party ou soirée enquête à Liège et en province de Liège : entreprises, anniversaires et groupes privés. Scénarios animés, devis sur mesure.",
  "/murder-party-liege/",
);

export default function MurderPartyLiege() {
  return <>
    <Breadcrumbs items={[{ name: "Murder party à Liège", path: "/murder-party-liege/" }]} />
    <section className="page-intro wrap">
      <p className="eyebrow">LIÈGE · PROVINCE DE LIÈGE</p>
      <h1>Murder party à Liège.<br /><em>Votre soirée enquête sur mesure.</em></h1>
      <div className="intro-columns">
        <p>Vous cherchez une murder party à Liège pour un team building, une soirée d’entreprise, un anniversaire ou un événement entre amis ? Plongez vos invités dans une intrigue : chacun incarne un personnage, protège ses secrets, récolte des indices et tente de démasquer le coupable.</p>
        <p className="editorial-note">Murder Party Agency conçoit et anime ces soirées enquête pour les entreprises et les groupes privés. À Liège et dans sa province, nous définissons avec vous le scénario, le lieu, les déplacements et, si souhaité, le repas. Les modalités sont confirmées dans un devis personnalisé.</p>
      </div>
      <Link href="/devis/" className="text-link">Demander un devis pour Liège <Arrow /></Link>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">UNE ENQUÊTE À VIVRE ENSEMBLE</span>
      <div>
        <h2>Une soirée enquête,<br /><em>pas un spectacle à regarder.</em></h2>
        <p>Les invités reçoivent des rôles et se retrouvent au cœur de la même histoire. Ils interrogent les suspects, confrontent leurs versions, négocient et prennent des décisions. L’intrigue se construit dans leurs échanges, avec l’accompagnement de notre équipe d’animation.</p>
        <p>Pour une entreprise liégeoise, c’est une manière originale de réunir des collègues autour d’un objectif commun. Pour une fête privée, c’est l’occasion de partager une expérience dont chacun est acteur. Le cadre, le nombre de participants et l’ambiance sont définis selon votre projet.</p>
        <Link href="/soiree-enquete/" className="text-link">Comment se déroule une soirée enquête ? <Arrow /></Link>
      </div>
    </section>
    <section className="process">
      <div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">CHOISISSEZ VOTRE UNIVERS</p><h2>Trois pistes pour<br /><em>votre murder party.</em></h2></div></div>
        <div className="process-grid">
          <div><span>01</span><h3>Le château et ses secrets.</h3><p><Link href="/scenarios/meurtre-au-chateau/">Meurtre au Château</Link> vous transporte dans une intrigue médiévale avec costumes fournis. Cette expérience nécessite un château : l’Avouerie d’Anthisnes fait partie des lieux où elle a été conçue et jouée.</p></div>
          <div><span>02</span><h3>Hollywood, mafia ou disco.</h3><p><Link href="/scenarios/showbiz/">SHOWBIZ</Link>, <Link href="/scenarios/black-velvet/">Black Velvet</Link> et <Link href="/scenarios/disco-killer/">Disco Killer</Link> proposent des univers différents pour une soirée en personnages. Le choix du scénario et le lieu sont définis avec vous.</p></div>
          <div><span>03</span><h3>L’enquête à vélo près de Liège.</h3><p><Link href="/scenarios/the-bikers/">The Bikers</Link> associe fatbike électrique et intrigue itinérante. Cette aventure de quatre heures commence à Hony, à Esneux, au sud de Liège. La location du vélo est incluse.</p></div>
        </div>
        <Link href="/scenarios/" className="text-link">Découvrir tous les scénarios <Arrow /></Link>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">UNE EXPÉRIENCE CONÇUE DANS LA RÉGION</span>
      <div>
        <h2>Des réalisations<br /><em>ancrées en province de Liège.</em></h2>
        <p>La murder party <Link href="/scenarios/meurtre-au-chateau/">Meurtre au Château</Link> a été développée à l’Avouerie d’Anthisnes pour valoriser ce lieu patrimonial et faire participer des groupes à une enquête collective. Vous pouvez découvrir <a href="https://leludificateur.be/meurtre-au-chateau/" target="_blank" rel="noopener noreferrer">ce projet et les retours publiés par Le Ludificateur</a>.</p>
        <p>Avec <Link href="/scenarios/the-bikers/">The Bikers</Link>, l’expérience prend une autre forme : la vallée de l’Ourthe devient le terrain d’une aventure itinérante au départ d’Esneux. Ces formats illustrent deux manières d’intégrer un lieu réel dans l’histoire.</p>
        <p>Pour un événement en ville de Liège ou ailleurs dans la province, précisez-nous votre commune et votre salle éventuelle. Nous confirmerons les possibilités d’animation, de déplacement et de lieu partenaire selon le scénario retenu.</p>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">VOS QUESTIONS À LIÈGE</span>
      <div>
        <h2>Avant de réserver<br /><em>votre soirée mystère.</em></h2>
        <details><summary>Peut-on organiser une murder party dans notre entreprise à Liège ? <span>+</span></summary><p>Indiquez-nous vos locaux, le nombre d’invités et la date souhaitée. Nos équipes se déplacent ; nous vérifions les conditions d’accueil et d’animation dans votre lieu avant de confirmer la prestation sur devis.</p></details>
        <details><summary>Quelle est la différence entre murder party et soirée enquête ? <span>+</span></summary><p>Pour nos prestations, ces deux expressions désignent une enquête immersive jouée en personnages. Les participants interrogent, cherchent des indices et construisent ensemble la résolution de l’histoire.</p></details>
        <details><summary>Combien de personnes peuvent participer ? <span>+</span></summary><p>Le format dépend du scénario et de la composition du groupe. Les fiches du <Link href="/scenarios/">catalogue</Link> indiquent les effectifs habituels. Nous étudions avec vous les adaptations possibles.</p></details>
        <details><summary>Quel est le tarif d’une soirée enquête à Liège ? <span>+</span></summary><p>Nous établissons un devis selon le scénario, le groupe, le lieu, les éventuels déplacements et les prestations de repas souhaitées. Aucun tarif forfaitaire n’est annoncé sans ces informations.</p></details>
        <details><summary>Peut-on organiser le repas et trouver un lieu partenaire ? <span>+</span></summary><p>Oui, ces prestations peuvent être proposées selon les disponibilités et le projet. Pour Meurtre au Château, un cadre de château est nécessaire ; pour The Bikers, le départ reste fixé à Hony.</p></details>
        <Link href="/devis/" className="text-link">Préparer votre événement à Liège <Arrow /></Link>
      </div>
    </section>
    <EndCta />
  </>;
}
