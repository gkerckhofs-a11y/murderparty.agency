import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/i18n";
import { type Scenario, participantLabel, durationLabel } from "@/content/fr";
import { ScenarioIcon } from "./scenario-icon";
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
  locale = "fr",
}: {
  scenario: Scenario;
  large?: boolean;
  locale?: Locale;
}) {
  return (
    <div
      className={`poster ${scenario.theme} ${large ? "poster-large" : ""}`}
      aria-hidden="true"
    >
      <div className="poster-lines" />
      <div className="poster-top">
        MURDER PARTY AGENCY<span>{locale === "en" ? "A STORY TO STEP INTO" : "UNE INTRIGUE À VIVRE"}</span>
      </div>
      <div className="poster-symbol">
        <ScenarioIcon theme={scenario.theme} />
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
  locale = "fr",
}: {
  scenario: Scenario;
  index: number;
  locale?: Locale;
}) {
  return (
    <article className="scenario-card">
      <Link
        className="poster-link"
        href={localizedPath(`/scenarios/${scenario.slug}/`, locale)}
        aria-label={`${locale === "en" ? "Discover" : "Découvrir"} ${scenario.title}`}
      >
        <Poster scenario={scenario} locale={locale} />
        <span className="poster-open">
          <Arrow diagonal />
        </span>
      </Link>
      <span className="image-credit">{locale === "en" ? "Atmosphere illustration" : "Illustration d’ambiance"}</span>
      <div className="card-meta">
        <span>
          {String(index + 1).padStart(2, "0")} / {scenario.universe}
          {scenario.keywords?.length ? ` · ${scenario.keywords.join(" · ")}` : ""}
        </span>
        <span className="status-label">
          {scenario.category === "animation" ? (locale === "en" ? "ACTIVITY" : "ANIMATION") : (locale === "en" ? "MURDER MYSTERY" : "MURDER PARTY")}
        </span>
      </div>
      <h3>
        <Link href={localizedPath(`/scenarios/${scenario.slug}/`, locale)}>{scenario.title}</Link>
      </h3>
      {scenario.subtitle && <p className="card-subtitle">{scenario.subtitle}</p>}
      <p className="capacity-label">
        {locale === "en" ? "Typical format: " : "Format indicatif : "}{participantLabel(scenario, locale)} participants · {durationLabel(scenario, locale)}
      </p>
      {scenario.departure && <p className="inclusion-label">{locale === "en" ? "Starting from" : "Départ depuis"} {scenario.departure}</p>}
      <p>{scenario.pitch}</p>
      {scenario.included && (
        <p className="inclusion-label">{scenario.included}</p>
      )}
      <Link href={localizedPath(`/scenarios/${scenario.slug}/`, locale)} className="text-link">
        {scenario.category === "animation" ? (locale === "en" ? "Discover the activity" : "Découvrir l’animation") : (locale === "en" ? "Explore the story" : "Explorer l’intrigue")} <Arrow />
      </Link>
    </article>
  );
}
export function EndCta({ locale = "fr" }: { locale?: Locale }) {
  const en = locale === "en";
  return <section className="end-cta"><div className="wrap cta-inner">
    <span className="eyebrow">{en ? "THE NEXT CHAPTER" : "LE PROCHAIN CHAPITRE"}</span>
    <h2>{en ? "What if your event" : "Et si votre événement"}<br /><em>{en ? "became a mystery?" : "devenait une intrigue ?"}</em></h2>
    <Link className="button primary" href={localizedPath("/devis/", locale)}>{en ? "Let’s talk about your event" : "Parlons de votre événement"} <Arrow /></Link>
    <p>{en ? "We come to you · Partner venues · Meals on request" : "Nous nous déplaçons · Lieux partenaires · Repas sur demande"}<br />{en ? "Everything tailored to your quote" : "Le tout sur devis sur mesure"}</p>
  </div></section>;
}
