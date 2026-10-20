import Link from "next/link";
import { Arrow, ScenarioCard, EndCta } from "@/components/ui";
import { scenarios } from "@/content/fr";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-line" />
              MURDER PARTIES ÉVÉNEMENTIELLES
            </p>
            <h1>
              Ce soir,
              <br />
              tout le monde
              <br />a <em>un secret.</em>
            </h1>
            <p className="hero-desc">
              Une intrigue à vivre ensemble.
              <br />
              Des Murder Parties animées par nos équipes,
              <br className="desktop-break" /> pour faire de votre événement une
              histoire.
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
          <span>UNE EXPÉRIENCE ÉVÉNEMENTIELLE</span>
          <span>UNIQUEMENT SUR DEVIS</span>
        </div>
      </section>
      <section className="intro-section wrap">
        <span className="eyebrow">L’EXPÉRIENCE</span>
        <div>
          <h2>
            Une soirée à vivre.
            <br />
            <em>Une vérité à découvrir.</em>
          </h2>
          <p>
            Entrez dans une intrigue, échangez avec les autres participants et
            cherchez ce qui se cache derrière les apparences. Nos équipes
            animent votre Murder Party.
          </p>
          <Link href="/devis/" className="text-link">
            Imaginer votre événement <Arrow />
          </Link>
        </div>
      </section>
      <section className="catalogue-preview wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">LES UNIVERS PRESSENTIS</span>
            <h2>
              Choisissez votre <em>intrigue.</em>
            </h2>
          </div>
          <Link className="text-link" href="/scenarios/">
            Voir le catalogue <Arrow />
          </Link>
        </div>
        <p className="editorial-note">
          Sélection proposée à partir de vos scénarios. Offre commerciale et
          formats à valider.
        </p>
        <div className="cards">
          {scenarios.map((s, i) => (
            <ScenarioCard key={s.slug} scenario={s} index={i} />
          ))}
        </div>
      </section>
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
              Un parcours proposé pour la prise de contact.
              <br />
              Les modalités se précisent dans votre devis.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                "01",
                "Votre projet",
                "Partagez vos envies, votre lieu et le nombre de participants envisagé.",
              ],
              [
                "02",
                "Votre devis",
                "Les contours de la prestation se définissent avec notre équipe.",
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
      <EndCta />
    </>
  );
}
