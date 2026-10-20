import Link from "next/link";
import { notFound } from "next/navigation";
import { scenarios } from "@/content/fr";
import { Poster, Arrow, EndCta } from "@/components/ui";
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
  return { title: s?.title || "Scénario" };
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
      <div className="wrap breadcrumb">
        <Link href="/scenarios/">Les scénarios</Link>
        <span aria-hidden="true">/</span>
        <span>{s.title}</span>
      </div>
      <section className="wrap scenario-hero">
        <div className="scenario-poster">
          <Poster scenario={s} large />
          <span className="image-credit">
            Illustration d’ambiance · Visuel conceptuel à valider
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
          <p className="scenario-tagline">{s.tagline}</p>
          <span className="status-pill">
            {s.confirmed
              ? "MURDER PARTY ANIMÉE · SUR DEVIS"
              : "SCÉNARIO PRESSENTI · À VALIDER"}
          </span>
          <div className="scenario-intro">
            <span className="eyebrow">
              {s.slug === "meurtre-au-chateau" ? "AU CŒUR D’UN CHÂTEAU" : "LE POINT DE DÉPART"}
            </span>
            <p>{s.intro}</p>
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
                {s.minParticipants} à {s.maxParticipants} personnes
              </dd>
            </div>
            <div>
              <dt>Durée de l’enquête</dt>
              <dd>{s.durationHours} h</dd>
            </div>
            <div>
              <dt>{s.departure ? "Départ" : "Lieu"}</dt>
              <dd>{s.departure || (s.slug === "meurtre-au-chateau" ? "Dans un château" : "À définir ensemble selon le scénario")}</dd>
            </div>
            <div>
              <dt>Repas</dt>
              <dd>Prise en charge possible sur demande</dd>
            </div>
          </dl>
          <Link href={`/devis/?scenario=${s.slug}`} className="button primary">
            Parlons de ce scénario <Arrow />
          </Link>
          <p className="small-note">
            {s.confirmed
              ? "Modalités et disponibilité à préciser dans votre devis."
              : "Présentation éditoriale provisoire, sans engagement de disponibilité."}
          </p>
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
              La Murder Party est animée par nos équipes.{" "}
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
              Nous nous déplaçons et pouvons proposer des lieux partenaires. Le
              lieu ou le parcours adapté à votre scénario est défini avec vous,
              selon votre projet et les disponibilités.
            </p>
          </details>
          <details>
            <summary>
              Combien de personnes peuvent participer ? <span>+</span>
            </summary>
            <p>
              {s.title} accueille de {s.minParticipants} à {s.maxParticipants}{" "}
              participants. Le nombre maximal est de {s.maxParticipants}{" "}
              personnes.
            </p>
          </details>
          <details>
            <summary>
              Comment organiser cette Murder Party ? <span>+</span>
            </summary>
            <p>
              Le formulaire prépare une demande de devis. Dans cette maquette,
              vous pouvez tester les étapes et consulter le récapitulatif, sans
              envoi réel.
            </p>
          </details>
        </div>
      </section>
      <EndCta />
    </>
  );
}
