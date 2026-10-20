import Link from "next/link";
import type { Scenario } from "@/content/fr";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
export function Mark() {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true">
      <path
        d="M20 2 37 12v23L20 46 3 35V12Z"
        fill="none"
        stroke="currentColor"
      />
      <path
        d="M20 9 31 16v16L20 39 9 32V16Z"
        fill="none"
        stroke="currentColor"
      />
      <circle cx="20" cy="22" r="4" fill="currentColor" />
      <path d="m18 24-2 9h8l-2-9" fill="currentColor" />
    </svg>
  );
}
export function Poster({
  scenario,
  large = false,
}: {
  scenario: Scenario;
  large?: boolean;
}) {
  return (
    <div
      className={`poster ${scenario.theme} ${large ? "poster-large" : ""}`}
      aria-hidden="true"
    >
      <div className="poster-lines" />
      <div className="poster-top">
        MURDER PARTY AGENCY<span>UNE INTRIGUE À VIVRE</span>
      </div>
      <div className="poster-symbol">
        {scenario.theme === "chateau"
          ? "♜"
          : scenario.theme === "bikers"
            ? "◎"
            : scenario.theme === "velvet"
              ? "◇"
              : "✧"}
      </div>
      <div className="poster-name">
        {(scenario.posterTitle || scenario.title.split(" ")).map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
      <div className="poster-era">{scenario.era}</div>
      <div className="poster-bottom">{scenario.eyebrow}</div>
    </div>
  );
}
export function ScenarioCard({
  scenario,
  index,
}: {
  scenario: Scenario;
  index: number;
}) {
  return (
    <article className="scenario-card">
      <Link
        className="poster-link"
        href={`/scenarios/${scenario.slug}/`}
        aria-label={`Découvrir ${scenario.title}`}
      >
        <Poster scenario={scenario} />
        <span className="poster-open">
          <Arrow diagonal />
        </span>
      </Link>
      <span className="image-credit">Illustration d’ambiance</span>
      <div className="card-meta">
        <span>
          {String(index + 1).padStart(2, "0")} / {scenario.universe}
        </span>
        <span className="status-label">
          {scenario.confirmed ? "SUR DEVIS" : "À VALIDER"}
        </span>
      </div>
      <h3>
        <Link href={`/scenarios/${scenario.slug}/`}>{scenario.title}</Link>
      </h3>
      <p className="capacity-label">
        {scenario.minParticipants} à {scenario.maxParticipants} participants · {scenario.durationHours} h
      </p>
      {scenario.departure && <p className="inclusion-label">Départ depuis {scenario.departure}</p>}
      <p>{scenario.pitch}</p>
      {scenario.included && (
        <p className="inclusion-label">{scenario.included}</p>
      )}
      <Link href={`/scenarios/${scenario.slug}/`} className="text-link">
        Explorer l’intrigue <Arrow />
      </Link>
    </article>
  );
}
export function EndCta() {
  return (
    <section className="end-cta">
      <div className="wrap cta-inner">
        <span className="eyebrow">LE PROCHAIN CHAPITRE</span>
        <h2>
          Et si votre événement
          <br />
          <em>devenait une intrigue ?</em>
        </h2>
        <Link className="button primary" href="/devis/">
          Parlons de votre événement <Arrow />
        </Link>
        <p>
          Nous nous déplaçons · Lieux partenaires · Repas sur demande
          <br />
          Le tout sur devis sur mesure
        </p>
      </div>
    </section>
  );
}
