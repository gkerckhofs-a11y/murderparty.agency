import Link from "next/link";
import { notFound } from "next/navigation";
import { scenarios, participantLabel, durationLabel } from "@/content/fr";
import { Poster, Arrow, EndCta } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/structured-data";
export function generateStaticParams() {
  return scenarios.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = scenarios.find((s) => s.slug === slug);
  if (!s) notFound();
  return pageMetadata(s.seoTitle, s.seoDescription, `/scenarios/${slug}/`, s.image);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = scenarios.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <Breadcrumbs items={[{ name: "Murder parties et animations", path: "/scenarios/" }, { name: s.title, path: `/scenarios/${s.slug}/` }]} />
      <section className="wrap scenario-hero">
        <div className="scenario-poster">
          <Poster scenario={s} large />
          <span className="image-credit">
            Illustration d’ambiance
          </span>
        </div>
        <div className="scenario-info">
          <span className="eyebrow">
            {s.universe} · {s.era}
          </span>
          <h1
            className={
              s.slug === "meurtre-au-chateau" ? "long-title" : undefined
            }
          >
            {s.title}
          </h1>
          {s.subtitle && <p className="scenario-subtitle">{s.subtitle}</p>}
          <p className="scenario-tagline">{s.tagline}</p>
          <span className="status-pill">
            {s.category === "animation" ? "ANIMATION D’ESPIONNAGE" : "MURDER PARTY ANIMÉE"} · SUR DEVIS
          </span>
          <div className="scenario-intro">
            <span className="eyebrow">
              {s.eyebrow}
            </span>
            {s.intro.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <dl className="facts">
            <div>
              <dt>Animation</dt>
              <dd>Par nos équipes</dd>
            </div>
            <div>
              <dt>Tarif</dt>
              <dd>Devis sur mesure</dd>
            </div>
            {s.format && (
              <div>
                <dt>Format</dt>
                <dd>{s.format}</dd>
              </div>
            )}
            {s.included && (
              <div>
                <dt>Inclus</dt>
                <dd>{s.included}</dd>
              </div>
            )}
            <div>
              <dt>Participants</dt>
              <dd>
                {participantLabel(s)} personnes
              </dd>
            </div>
            <div>
              <dt>{s.category === "animation" ? "Durée de l’animation" : "Durée de l’enquête"}</dt>
              <dd>{durationLabel(s)}</dd>
            </div>
            <div>
              <dt>{s.departure ? "Départ" : "Lieu"}</dt>
              <dd>{s.departure || s.venue || (s.slug === "meurtre-au-chateau" ? "Dans un château" : "À définir ensemble selon le scénario")}</dd>
            </div>
            {s.dressCode && <div><dt>Dress code</dt><dd>{s.dressCode}</dd></div>}
            <div>
              <dt>Repas</dt>
              <dd>Prise en charge possible sur demande</dd>
            </div>
          </dl>
          <Link href={`/devis/?scenario=${s.slug}`} className="button primary">
            {s.category === "animation" ? "Organisons votre Spy Party" : "Parlons de ce scénario"} <Arrow />
          </Link>
          <p className="small-note">
            Modalités et disponibilité à préciser dans votre devis.
          </p>
          {s.category !== "animation" && <Link href="/soiree-enquete/" className="text-link">Préparer votre soirée enquête <Arrow /></Link>}
        </div>
      </section>
      <section className="creator-approach" aria-labelledby="scenario-experience-title">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">L’EXPÉRIENCE {s.title}</span>
              <h2 id="scenario-experience-title">{s.experienceTitle}</h2>
            </div>
            <p>{s.experienceIntro}</p>
          </div>
          <div className="process-grid">
            {s.highlights.map((highlight, index) => (
              <div key={highlight.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap detail-copy">
        <span className="eyebrow">LES COULISSES DE VOTRE ÉVÉNEMENT</span>
        <div>
          <h2>
            L’intrigue se dessine.
            <br />
            <em>Le format se précise.</em>
          </h2>
          <p>
            {s.departure ? `Pour ${s.title}, le départ se fait depuis ${s.departure}.` : "Nos équipes se déplacent."} Nous pouvons aussi vous proposer des lieux
            partenaires et prendre en charge le repas. Selon le scénario et vos
            envies, nous réunissons les prestations retenues dans un devis sur
            mesure.
          </p>
          <details>
            <summary>
              Que comprend la prestation ? <span>+</span>
            </summary>
            <p>
              {s.category === "animation" ? "L’animation est organisée avec nos équipes." : "La Murder Party est animée par nos équipes."}{" "}
              {s.included && `${s.included}. `}Vous pouvez également nous
              confier la recherche d’un lieu partenaire et l’organisation du
              repas. Le détail des prestations et des conditions figure dans
              votre devis.
            </p>
          </details>
          {s.slug === "the-bikers" && s.included && (
            <details>
              <summary>
                Faut-il apporter son vélo ? <span>+</span>
              </summary>
              <p>
                Non : la location du fatbike électrique est comprise dans le
                prix de The Bikers. Ces vélos au look de moto font partie de
                l’expérience. Le tarif de votre événement est précisé dans votre
                devis sur mesure.
              </p>
            </details>
          )}
          {s.slug === "meurtre-au-chateau" && (
            <details>
              <summary>
                Faut-il prévoir un costume ? <span>+</span>
              </summary>
              <p>
                Non : les costumes médiévaux sont fournis et compris dans le
                prix de Meurtre au Château. Ils accompagnent l’ambiance
                médiévale de l’enquête. Le tarif de votre événement est précisé
                dans votre devis sur mesure.
              </p>
            </details>
          )}
          <details>
            <summary>
              Où peut se dérouler l’événement ? <span>+</span>
            </summary>
            <p>
              {s.departure ? `Le départ de ${s.title} se fait depuis ${s.departure}. Un lieu partenaire peut être proposé pour les prestations complémentaires, notamment le repas.` : s.slug === "meurtre-au-chateau" ? "L’enquête se déroule dans un château, dans une ambiance médiévale. Le lieu et les disponibilités sont précisés dans votre devis." : "Nous nous déplaçons et pouvons proposer des lieux partenaires. Le lieu adapté à votre scénario est défini avec vous, selon votre projet et les disponibilités."}
            </p>
          </details>
          <details>
            <summary>
              Combien de personnes peuvent participer ? <span>+</span>
            </summary>
            <p>
              {s.title} accueille {participantLabel(s)} participants.
            </p>
          </details>
          <details>
            <summary>
              {s.category === "animation" ? "Comment organiser cette animation ?" : "Comment organiser cette murder party ?"} <span>+</span>
            </summary>
            <p>
              Complétez le formulaire, vérifiez votre récapitulatif puis ouvrez
              votre messagerie pour nous envoyer votre demande. Notre équipe
              prépare votre devis sur mesure.
            </p>
          </details>
        </div>
      </section>
      <EndCta />
    </>
  );
}
