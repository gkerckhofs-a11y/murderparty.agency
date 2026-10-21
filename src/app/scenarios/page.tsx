import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/structured-data";
import Catalogue from "@/components/catalogue";
import { EndCta } from "@/components/ui";
export const metadata = pageMetadata("Murder parties et animation Spy Party", "Disco, mystère gothique, espionnage, mafia, cinéma ou Moyen Âge : sept murder parties et Spy Party pour les grands groupes. Découvrez nos expériences sur devis.", "/scenarios/");
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Scénarios de murder party", path: "/scenarios/" }]} />
      <section className="page-intro wrap">
        <span className="eyebrow">LE CATALOGUE</span>
        <h1>
          Nos murder parties,
          <br />
          <em>vos prochaines intrigues.</em>
        </h1>
        <div className="intro-columns">
          <p>
            Disco, Londres gothique, espionnage, glamour hollywoodien, mafia,
            banquet médiéval ou paysages à découvrir…
            <br />
            Sept murder parties et l’animation Spy Party pour les grands groupes.
          </p>
          <p className="editorial-note">
            Votre projet en Wallonie ou à Bruxelles : nous précisons le lieu et
            les déplacements selon le scénario. Un lieu partenaire et le repas
            peuvent aussi être proposés, sur devis sur mesure.
          </p>
        </div>
      </section>
      <section className="wrap catalogue-full">
        <Catalogue />
      </section>
      <section className="wrap practical">
        <div>
          <span className="eyebrow">UNE QUESTION DE FORMAT ?</span>
          <h2>
            Parlons de <em>votre groupe.</em>
          </h2>
        </div>
        <p>
          The Bikers accueille de 10 à 15 participants. SHOWBIZ, Meurtre au
          Château et Black Velvet accueillent de 15 à 40 participants. Disco Killer
          réunit 20 à 30 joueurs, London Requiem 15 à 20 et Nid d’espions 15.
          Pour les grands groupes, Spy Party propose une animation d’espionnage
          de 30 à 120 participants. Indiquez
          le nombre de participants envisagé, vos souhaits pour le lieu et le
          repas. Le format, les conditions pratiques et les prestations retenues
          seront précisés dans votre devis.
        </p>
      </section>
      <EndCta />
    </>
  );
}
