import Link from "next/link";
import { Arrow, EndCta } from "@/components/ui";
import { Breadcrumbs } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "À propos : qu’est-ce qu’une murder party ?",
  "Découvrez nos soirées enquête : personnages reçus à l’avance, préparation, costumes, interprétation et recherche d’indices. Une expérience signée Le Ludificateur.",
  "/a-propos/",
);

export default function AboutPage() {
  return <>
    <Breadcrumbs items={[{ name: "À propos", path: "/a-propos/" }]} />
    <section className="page-intro wrap about-intro" aria-labelledby="about-title">
      <span className="eyebrow">À PROPOS DE NOS MURDER PARTIES</span>
      <h1 id="about-title">Qu’est-ce qu’une<br /><em>soirée enquête ?</em></h1>
      <div className="intro-columns">
        <p>Une soirée enquête, aussi appelée <strong>murder party</strong>, est un
          jeu de rôle grandeur nature. Chaque participant incarne un personnage
          et prend part à une histoire dans laquelle une énigme, le plus souvent
          un crime, doit être résolue avant la fin du jeu.</p>
        <p className="editorial-note">Nos enquêtes en huis clos réunissent les
          personnages dans un même cadre pendant environ trois heures.
          <Link href="/scenarios/the-bikers/"> The Bikers</Link> propose une autre
          forme d’aventure : une enquête itinérante à vélo de quatre heures,
          au fil des paysages.</p>
      </div>
    </section>

    <section className="process" aria-labelledby="preparation-title">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMMENT NOUS FONCTIONNONS</span>
            <h2 id="preparation-title">Votre rôle commence<br /><em>avant la soirée.</em></h2>
          </div>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Recevoir son personnage.</h3>
            <p>Chaque joueur reçoit sa fiche de personnage à l’avance.
              Elle lui permet de découvrir qui il va incarner et de se préparer
              avant de retrouver les autres participants.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Se préparer à l’incarner.</h3>
            <p>Lisez votre fiche, appropriez-vous votre personnage et imaginez
              sa manière de parler, ses attitudes et son costume. Vous pouvez
              donner libre cours à votre créativité. Pour Meurtre au Château,
              les costumes médiévaux sont fournis.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Jouer son rôle.</h3>
            <p>Pendant la soirée, vous interprétez votre personnage dans vos
              échanges et vos décisions. Laissez place à l’improvisation et au
              jeu théâtral : vos interactions font vivre l’histoire,
              avec l’accompagnement de nos équipes d’animation.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="wrap detail-copy" aria-labelledby="investigation-title">
      <span className="eyebrow">INDICES, ALLIANCES ET SECRETS</span>
      <div>
        <h2 id="investigation-title">À qui pouvez-vous<br /><em>faire confiance ?</em></h2>
        <p>L’enquête avance grâce à la recherche d’indices et aux interactions
          entre les personnages. Écoutez les récits, posez des questions,
          confrontez les versions et rapprochez les informations recueillies
          pour comprendre ce qui s’est passé.</p>
        <p>Il vous faudra aussi faire preuve d’astuce pour trouver des alliés,
          obtenir une confidence et choisir ce que vous acceptez de révéler.
          Gardez vos secrets avec soin : l’assassin se cache peut-être
          parmi les personnes avec qui vous venez de discuter…</p>
        <Link href="/scenarios/" className="text-link">Choisir votre univers <Arrow /></Link>
      </div>
    </section>

    <section className="about-creator" aria-labelledby="guillaume-kerckhofs">
      <div className="wrap about-creator-inner">
        <figure className="creator-portrait">
          <img src="/images/guillaume-kerckhofs.webp"
            alt="Guillaume Kerckhofs, Le Ludificateur"
            width={768} height={1024} loading="lazy" />
          <figcaption>Guillaume Kerckhofs · Visuel du Ludificateur</figcaption>
        </figure>
        <div>
          <span className="eyebrow">DERRIÈRE LES INTRIGUES</span>
          <h2 id="guillaume-kerckhofs">Guillaume <em>Kerckhofs.</em></h2>
          <p>À l’origine du Ludificateur, Guillaume Kerckhofs imagine des jeux
            et des expériences qui donnent à chacun une place dans l’histoire.
            Avec Murder Party Agency, il rassemble des soirées enquête
            animées par ses équipes, à vivre entre collègues ou en groupe privé.</p>
          <a href="https://leludificateur.be/" className="text-link"
            target="_blank" rel="noopener noreferrer"
            aria-label="Découvrir Le Ludificateur (nouvel onglet)">
            Découvrir Le Ludificateur <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>

    <EndCta />
  </>;
}
