import type { Metadata } from "next";
import Catalogue from "@/components/catalogue";
import { EndCta } from "@/components/ui";
export const metadata: Metadata = { title: "Les scénarios" };
export default function Page() {
  return (
    <>
      <section className="page-intro wrap">
        <span className="eyebrow">LE CATALOGUE</span>
        <h1>
          À chaque univers,
          <br />
          <em>ses secrets.</em>
        </h1>
        <div className="intro-columns">
          <p>
            Hollywood, château, bikers, Prohibition…
            <br />
            Explorez les ambiances de vos prochaines intrigues.
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
          Indiquez le nombre de participants envisagé, vos souhaits pour le lieu
          et le repas. Le format, les conditions pratiques et les prestations
          retenues seront précisés dans votre devis. Les fiches marquées « À
          valider » restent provisoires.
        </p>
      </section>
      <EndCta />
    </>
  );
}
