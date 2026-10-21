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
          Chaque groupe est différent : nous travaillons sur mesure. Nous adaptons
          les scénarios et la répartition des personnages à la taille de votre
          groupe, à sa composition et à la diversité des genres. Parlez-nous de
          vos participants, de vos envies et de l’occasion : nous construisons
          avec vous une expérience adaptée. Le format, le lieu et les prestations
          retenues sont précisés ensemble dans votre devis.
        </p>
      </section>
      <EndCta />
    </>
  );
}
