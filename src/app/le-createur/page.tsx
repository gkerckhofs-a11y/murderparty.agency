import Link from "next/link";
import { Arrow, EndCta } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Guillaume Kerckhofs, créateur d’enquêtes", "Découvrez Guillaume Kerckhofs, Le Ludificateur : son parcours dans le tourisme, la culture et la création de jeux, et sa démarche pour vos murder parties.", "/le-createur/", "/images/guillaume-kerckhofs.webp");

export default function CreatorPage() {
  return (
    <>
      <section className="wrap creator-hero" aria-labelledby="creator-title">
        <div className="creator-copy">
          <span className="eyebrow">L’HOMME DERRIÈRE LES INTRIGUES</span>
          <h1 id="creator-title">Guillaume<br /><em>Kerckhofs.</em></h1>
          <p className="creator-role">Le Ludificateur</p>
          <p className="creator-lead">
            Imaginer une histoire. Donner à chacun une place pour la vivre.
          </p>
          <p>
            Guillaume Kerckhofs est à l’origine du Ludificateur. Il imagine des
            jeux et des expériences dans lesquels les participants prennent
            part à l’histoire.
          </p>
          <p>
            Son parcours passe par la programmation culturelle, le tourisme,
            l’événementiel et la création de jeux. Il a été responsable du
            Tourisme de la Ville de Liège de 2013 à 2020.
          </p>
          <p>
            Avec Le Ludificateur, il développe des enquêtes, des aventures de
            territoire et des dispositifs pédagogiques. Une même démarche les
            relie : partir d’un public, d’un lieu et d’une intention pour
            concevoir une expérience collective.
          </p>
          <a className="text-link" href="https://leludificateur.be/" target="_blank" rel="noopener noreferrer" aria-label="Découvrir Le Ludificateur (nouvel onglet)">
            Découvrir Le Ludificateur <Arrow diagonal />
          </a>
        </div>
        <figure className="creator-portrait">
          <img
            src="/images/guillaume-kerckhofs.webp"
            alt="Portrait de Guillaume Kerckhofs publié sur le site Le Ludificateur"
            width={768}
            height={1024}
          />
          <figcaption>Guillaume Kerckhofs · Visuel du Ludificateur</figcaption>
        </figure>
      </section>
      <section className="creator-approach" aria-labelledby="approach-title">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">UNE DÉMARCHE DE CRÉATION</span>
              <h2 id="approach-title">De votre intention<br /><em>à une histoire vécue.</em></h2>
            </div>
          </div>
          <div className="process-grid">
            <div>
              <span>01</span>
              <h3>Comprendre.</h3>
              <p>Votre public, vos envies et le contexte de votre événement donnent le point de départ.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Construire.</h3>
              <p>Le récit, les rôles et les interactions composent une expérience dans laquelle chacun peut prendre part.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Faire vivre.</h3>
              <p>Les participants entrent dans l’intrigue, échangent et font avancer l’histoire ensemble.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap intro-section creator-brand">
        <span className="eyebrow">UNE MARQUE DÉDIÉE AUX MURDER PARTIES</span>
        <div>
          <h2>Un univers à choisir.<br /><em>Une soirée à partager.</em></h2>
          <p>
            Murder Party Agency rassemble nos Murder Parties événementielles,
            animées par nos équipes. L’animation, le lieu et le repas se
            précisent ensemble dans votre devis sur mesure.
          </p>
          <Link className="text-link" href="/scenarios/">
            Découvrir les scénarios <Arrow />
          </Link>
        </div>
      </section>
      <EndCta />
    </>
  );
}
