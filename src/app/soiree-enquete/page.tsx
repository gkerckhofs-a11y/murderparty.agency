import Link from "next/link";
import { Arrow, EndCta } from "@/components/ui";
import { Breadcrumbs } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Organiser une soirée enquête ou soirée mystère",
  "Préparez votre soirée enquête en Wallonie ou à Bruxelles : principe de la murder party, scénarios, durées et lieux. Entreprises et groupes privés, sur devis.",
  "/soiree-enquete/",
);

export default function MysteryEvening() {
  return <>
    <Breadcrumbs items={[{ name: "Organiser une soirée enquête", path: "/soiree-enquete/" }]} />
    <section className="page-intro wrap">
      <p className="eyebrow">UNE INTRIGUE À PARTAGER</p>
      <h1>Votre soirée enquête,<br /><em>le mystère en plus.</em></h1>
      <div className="intro-columns">
        <p>Une murder party transforme votre événement en histoire à vivre.
          Les participants incarnent des personnages, échangent des informations
          et cherchent à comprendre une intrigue. Chaque conversation peut
          changer leur lecture des événements.</p>
        <p className="editorial-note">Murder Party Agency organise des soirées enquête
          animées par ses équipes, pour les entreprises et les groupes privés.
          Pour votre projet en Wallonie ou à Bruxelles, le scénario, le lieu et
          les déplacements sont confirmés dans un devis sur mesure.</p>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">COMPRENDRE L’EXPÉRIENCE</span>
      <div>
        <h2>Murder party ou<br /><em>soirée mystère ?</em></h2>
        <p>Sur ce site, les expressions « soirée enquête » et « soirée mystère »
          désignent nos murder parties animées. Vous entrez dans un univers de fiction
          avec des personnages, des secrets et des indices à confronter.
          L’enquête progresse grâce aux échanges entre les invités : interroger,
          écouter, négocier et recouper les versions font partie de l’expérience.</p>
        <p>Pour une soirée d’entreprise ou un projet de team building, indiquez-nous
          ce que vous souhaitez proposer à vos collègues et la taille du groupe.
          Pour un événement privé, partagez l’occasion, vos envies et le cadre envisagé.
          Nous précisons ensemble le format adapté et les conditions d’organisation.</p>
        <Link href="/devis/" className="text-link">Parler de votre événement <Arrow /></Link>
      </div>
    </section>
    <section className="process">
      <div className="wrap">
        <div className="section-heading">
          <div><p className="eyebrow">L’ORGANISATION</p><h2>Trois choix pour<br /><em>préparer votre soirée.</em></h2></div>
        </div>
        <div className="process-grid">
          <div><span>01</span><h3>Le groupe et la date.</h3>
            <p>Précisez le nombre de participants et la date souhaitée.
              Les capacités varient selon le scénario : 15 à 40 personnes pour
              SHOWBIZ, Meurtre au Château et Black Velvet ; 10 à 15 pour The Bikers.</p></div>
          <div><span>02</span><h3>L’univers de l’enquête.</h3>
            <p>Choisissez une ambiance qui vous attire : le glamour du cinéma à Hollywood,
              un banquet dans un château assiégé, une guerre de succession dans la mafia
              ou la découverte des paysages au fil d’une enquête en fatbike électrique.</p></div>
          <div><span>03</span><h3>Le lieu et le repas.</h3>
            <p>Nos équipes se déplacent et peuvent proposer un lieu partenaire.
              La prise en charge du repas est possible sur demande. Meurtre au Château
              se déroule dans un château ; The Bikers part de Hony, à Esneux.</p></div>
        </div>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">CHOISIR SON INTRIGUE</span>
      <div>
        <h2>Quatre univers,<br /><em>quatre façons d’enquêter.</em></h2>
        <p><Link href="/scenarios/showbiz/">SHOWBIZ</Link> vous entraîne dans le glamour
          d’Hollywood, entre ambitions de cinéma et casting bouleversé par un meurtre.
          Avec <Link href="/scenarios/meurtre-au-chateau/">Meurtre au Château</Link>,
          le siège et le banquet médiéval donnent leur cadre à l’enquête, dans un château
          et avec des costumes fournis. L’organisation du repas est précisée sur devis.</p>
        <p><Link href="/scenarios/black-velvet/">Black Velvet</Link> réunit les invités
          dans la mafia new-yorkaise de 1928 : guerre de succession, alliances et
          luttes de pouvoir dans un club clandestin. Pour une murder party à vélo près de Liège,
          <Link href="/scenarios/the-bikers/"> The Bikers</Link> mêle enquête et
          découverte des paysages en fatbike électrique au départ de Hony, à Esneux.
          La location du vélo est incluse.</p>
        <Link href="/scenarios/" className="text-link">Comparer les scénarios de murder party <Arrow /></Link>
      </div>
    </section>
    <section className="wrap detail-copy">
      <span className="eyebrow">LES QUESTIONS PRATIQUES</span>
      <div>
        <h2>Avant de<br /><em>mener l’enquête.</em></h2>
        <details><summary>Combien de temps dure une murder party ? <span>+</span></summary>
          <p>La durée de l’enquête est de 3 heures pour SHOWBIZ, Meurtre au Château et
            Black Velvet, et de 4 heures pour The Bikers. L’organisation d’un éventuel
            repas est précisée séparément dans votre devis.</p></details>
        <details><summary>Quel est le prix d’une soirée enquête ? <span>+</span></summary>
          <p>Les tarifs sont uniquement sur devis. Indiquez votre scénario, votre groupe,
            le lieu envisagé et vos souhaits pour le repas afin que nous précisions
            les prestations et leur prix.</p></details>
        <details><summary>Qui anime la soirée mystère ? <span>+</span></summary>
          <p>Nos équipes animent la murder party. Les offres présentées ici sont des
            prestations événementielles ; le déroulement et les modalités sont
            définis avec vous lors de la préparation.</p></details>
        <details><summary>Peut-on organiser une murder party près de Liège ? <span>+</span></summary>
          <p>The Bikers part de Hony, à Esneux, près de Liège. Pour les autres scénarios,
            indiquez la commune et le lieu envisagés dans votre demande : nous
            confirmons les possibilités de déplacement et les lieux partenaires
            selon votre projet.</p></details>
        <details><summary>Et pour une soirée enquête en Wallonie ou à Bruxelles ? <span>+</span></summary>
          <p>Présentez-nous votre projet en précisant la commune, la date et le groupe.
            Nous confirmons avec vous les possibilités de déplacement et le lieu
            adapté au scénario, sur devis. Meurtre au Château nécessite un château ;
            The Bikers conserve son départ à Hony, à Esneux. Le repas et un éventuel
            lieu partenaire peuvent également faire partie de votre demande.</p></details>
        <details><summary>Comment demander un devis ? <span>+</span></summary>
          <p>Complétez le <Link href="/devis/">formulaire de demande</Link>, vérifiez
            le récapitulatif, puis cliquez sur « Envoyer ma demande ».
            Vous pouvez aussi <Link href="/contact/">nous contacter directement</Link>.</p></details>
      </div>
    </section>
    <EndCta />
  </>;
}
