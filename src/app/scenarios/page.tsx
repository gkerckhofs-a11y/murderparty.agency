import type { Metadata } from "next";
import Catalogue from "@/components/catalogue";
import { EndCta } from "@/components/ui";
export const metadata: Metadata = { title: "Les scénarios" };
export default function Page() {
  return (
    <>
      <section className="page-intro wrap">
        <span className="eyebrow">LE CATALOGUE · SÉLECTION PROVISOIRE</span>
        <h1>
          À chaque univers,
          <br />
          <em>ses secrets.</em>
        </h1>
        <div className="intro-columns">
          <p>
            Hollywood, Far West, Prohibition…
            <br />
            Explorez les ambiances de vos prochaines intrigues.
          </p>
          <p className="editorial-note">
            Ces scénarios sont issus de vos projets. Leur présence au catalogue,
            leurs formats et leurs conditions de commercialisation restent à
            valider.
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
          Les durées, capacités d’accueil et conditions pratiques ne sont pas
          encore confirmées pour ce catalogue. Décrivez votre projet dans le
          formulaire pour préparer l’échange.
        </p>
      </section>
      <EndCta />
    </>
  );
}
