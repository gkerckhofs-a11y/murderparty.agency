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
            Affiche conceptuelle · Direction visuelle à valider
          </span>
        </div>
        <div className="scenario-info">
          <span className="eyebrow">
            {s.universe} · {s.era}
          </span>
          <h1>{s.title}</h1>
          <p className="scenario-tagline">{s.tagline}</p>
          <span className="status-pill">SCÉNARIO PRESSENTI · À VALIDER</span>
          <div className="scenario-intro">
            <span className="eyebrow">LE POINT DE DÉPART</span>
            <p>{s.intro}</p>
          </div>
          <dl className="facts">
            <div>
              <dt>Animation</dt>
              <dd>Par nos équipes</dd>
            </div>
            <div>
              <dt>Tarif</dt>
              <dd>Sur devis</dd>
            </div>
            <div>
              <dt>Durée et participants</dt>
              <dd>À confirmer</dd>
            </div>
            <div>
              <dt>Lieu et conditions</dt>
              <dd>À confirmer</dd>
            </div>
          </dl>
          <Link href={`/devis/?scenario=${s.slug}`} className="button primary">
            Parlons de ce scénario <Arrow />
          </Link>
          <p className="small-note">
            Présentation éditoriale provisoire, sans engagement de
            disponibilité.
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
            Votre lieu, la date souhaitée et le nombre de participants envisagé
            permettent d’ouvrir la discussion. Le devis précisera les modalités
            de la prestation.
          </p>
          <details>
            <summary>
              Que comprend la prestation ? <span>+</span>
            </summary>
            <p>
              L’animation par nos équipes est confirmée. Le détail du matériel,
              des préparatifs et des éventuelles options doit encore être validé
              pour cette fiche.
            </p>
          </details>
          <details>
            <summary>
              Combien de personnes peuvent participer ? <span>+</span>
            </summary>
            <p>
              La capacité commerciale de ce scénario n’est pas encore confirmée.
              Aucune limite n’est annoncée dans cette maquette.
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
