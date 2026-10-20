import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/structured-data";
import Catalogue from "@/components/catalogue";
import { EndCta } from "@/components/ui";
export const metadata = pageMetadata("Scénarios de murder party", "Comparez nos quatre murder parties animées : Hollywood, château médiéval, Prohibition et enquête en fatbike. Groupes de 10 à 40 selon le scénario.", "/scenarios/");
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
            Hollywood, château, bikers, Prohibition…
            <br />
            Quatre scénarios de soirées enquête animées par nos équipes.
          </p>
          <p className="editorial-note">
            Nos équipes se déplacent. Nous pouvons aussi proposer un lieu
            partenaire et prendre en charge le repas. Le tout sur devis sur
            mesure.
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
          Château et Black Velvet accueillent de 15 à 40 participants. Indiquez
          le nombre de participants envisagé, vos souhaits pour le lieu et le
          repas. Le format, les conditions pratiques et les prestations retenues
          seront précisés dans votre devis.
        </p>
      </section>
      <EndCta />
    </>
  );
}
