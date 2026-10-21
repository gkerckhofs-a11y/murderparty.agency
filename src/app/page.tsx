import Link from "next/link";
import { Arrow, ScenarioCard, EndCta } from "@/components/ui";
import { scenarios } from "@/content/fr";
import { pageMetadata, organizationData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { PartnerCta } from "@/components/partner-cta";
export const metadata = pageMetadata(
  "Murder party en Wallonie et à Bruxelles",
  "Votre soirée enquête ou soirée mystère en Wallonie et à Bruxelles. Quatre murder parties animées pour entreprises et groupes privés. Organisation sur devis.",
  "/",
);
export default function Home() {
  return (
    <>
      <StructuredData data={organizationData} />
      <link rel="preload" as="image" href="/images/salon-noir.webp" fetchPriority="high" />
      <section className="hero">
        <div className="hero-image" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-line" />
              MURDER PARTIES ÉVÉNEMENTIELLES
            </p>
            <h1>
              Murder party.
              <br />
              Ce soir,
              <br /><em>tout se joue.</em>
            </h1>
            <p className="hero-desc">
              Une soirée enquête, des personnages, des secrets.
              <br />
              Nos équipes animent votre soirée mystère,
              <br className="desktop-break" /> pour un événement d’entreprise ou privé.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/scenarios/">
                Explorer les scénarios <Arrow />
              </Link>
              <Link className="text-link" href="/devis/">
                Parlons de votre événement <Arrow diagonal />
              </Link>
            </div>
          </div>
          <div className="hero-caption">
            <span>01 — L’INVITATION</span>
            <span>Visuel d’ambiance illustratif</span>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>ANIMÉ PAR NOS ÉQUIPES</span>
          <span>CHEZ VOUS OU DANS UN LIEU PARTENAIRE</span>
          <span>DEVIS SUR MESURE</span>
        </div>
      </section>
      <section className="intro-section wrap">
        <span className="eyebrow">L’EXPÉRIENCE</span>
        <div>
          <h2>
            Une murder party à vivre.
            <br />
            <em>Une vérité à découvrir.</em>
          </h2>
          <p>
            Entrez dans une intrigue, échangez avec les autres participants et
            cherchez ce qui se cache derrière les apparences. Nos équipes
            animent votre murder party : une soirée enquête dans laquelle
            les invités incarnent des personnages, confrontent leurs indices
            et font avancer l’histoire ensemble.
          </p>
          <Link href="/devis/" className="text-link">
            Imaginer votre événement <Arrow />
          </Link>
        </div>
      </section>
      <section className="catalogue-preview wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LES UNIVERS</span>
            <h2>
              Choisissez votre <em>intrigue.</em>
            </h2>
          </div>
          <Link className="text-link" href="/scenarios/">
            Voir le catalogue <Arrow />
          </Link>
        </div>
        <div className="cards">
          {scenarios.map((s, i) => (
            <ScenarioCard key={s.slug} scenario={s} index={i} />
          ))}
        </div>
      </section>
      <section className="services-section wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VOTRE ÉVÉNEMENT, SUR MESURE</span>
            <h2>
              L’intrigue, le lieu,
              <br />
              <em>et le plaisir de recevoir.</em>
            </h2>
          </div>
          <p>
            Nous construisons votre devis autour de vos envies : animation, lieu
            et repas.
          </p>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Nous venons à vous.</h3>
            <p>
              Nos équipes se déplacent pour animer votre Murder Party dans le
              lieu que vous envisagez.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Un lieu à trouver ?</h3>
            <p>
              Nous pouvons vous proposer des lieux partenaires pour accueillir
              votre événement.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Et le repas aussi.</h3>
            <p>
              Nous pouvons également prendre en charge le repas. Les prestations
              retenues sont réunies dans un devis sur mesure.
            </p>
          </div>
        </div>
        <Link href="/devis/" className="text-link">
          Composer votre événement <Arrow />
        </Link>
      </section>
      <PartnerCta />
      <section className="process">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DE L’IDÉE À L’INTRIGUE</span>
              <h2>
                Votre événement commence
                <br />
                <em>par une conversation.</em>
              </h2>
            </div>
            <p>
              Partagez vos envies avec notre équipe.
              <br />
              Les modalités se précisent dans votre devis.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Votre projet",
                "Partagez vos envies, votre lieu ou votre besoin d’un lieu partenaire, et le nombre de participants envisagé.",
              ],
              [
                "02",
                "Votre devis",
                "Animation, lieu partenaire et repas selon vos besoins : nous préparons un devis sur mesure.",
              ],
              [
                "03",
                "Votre Murder Party",
                "Une expérience événementielle animée par nos équipes.",
              ],
            ].map(([n, t, p]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap detail-copy" aria-labelledby="enquete-title">
        <span className="eyebrow">PRÉPARER VOTRE SOIRÉE</span>
        <div>
          <h2 id="enquete-title">Votre soirée mystère<br /><em>en Wallonie et à Bruxelles.</em></h2>
          <p>Un projet de soirée enquête à Liège, ailleurs en Wallonie ou à Bruxelles ?
            Réunissez vos collègues ou votre groupe privé autour d’une intrigue.
            Choisissez un univers, précisez le nombre de participants et laissez nos
            équipes vous accompagner dans l’organisation. Indiquez-nous la commune
            envisagée : le lieu, les déplacements, l’animation et le repas éventuel
            sont confirmés dans votre devis selon le scénario.</p>
          <p>Pour une murder party près de Liège, <Link href="/scenarios/the-bikers/">The Bikers</Link> propose
            une enquête en fatbike électrique au départ de Hony, à Esneux.
            Pour les autres scénarios, le lieu est convenu avec vous selon le projet.</p>
          <Link className="text-link" href="/soiree-enquete/">Comment organiser une soirée enquête ? <Arrow /></Link>
        </div>
      </section>
      <EndCta />
    </>
  );
}
