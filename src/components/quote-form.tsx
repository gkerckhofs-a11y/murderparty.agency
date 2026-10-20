"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { scenarios } from "@/content/fr";
import { Arrow } from "./ui";
type Quote = {
  kind: string;
  scenario: string;
  participants: string;
  date: string;
  location: string;
  venuePreference: string;
  meal: string;
  message: string;
  name: string;
  company: string;
  email: string;
  phone: string;
};
const initial: Quote = {
  kind: "",
  scenario: "",
  participants: "",
  date: "",
  location: "",
  venuePreference: "",
  meal: "",
  message: "",
  name: "",
  company: "",
  email: "",
  phone: "",
};
function Form() {
  const params = useSearchParams();
  const [data, setData] = useState<Quote>(initial);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    const slug = params.get("scenario");
    if (slug && scenarios.some((s) => s.slug === slug))
      setData((d) => ({ ...d, scenario: slug }));
  }, [params]);
  useEffect(() => {
    if (mounted.current) heading.current?.focus();
    mounted.current = true;
  }, [step, done]);
  function update(key: keyof Quote, value: string) {
    setData((d) => ({ ...d, [key]: value }));
  }
  const scenario =
    scenarios.find((s) => s.slug === data.scenario)?.title ||
    "À définir ensemble";
  const recap = [
    ["Événement", data.kind || "À préciser"],
    ["Scénario souhaité", scenario],
    ["Participants envisagés", data.participants || "À préciser"],
    [
      "Date souhaitée",
      data.date ? data.date.split("-").reverse().join("/") : "À définir",
    ],
    ["Lieu envisagé", data.location || "À définir"],
    ["Organisation du lieu", data.venuePreference || "À définir ensemble"],
    ["Prise en charge du repas", data.meal || "À définir ensemble"],
    ["Votre nom", data.name],
    ["Organisation", data.company || "Non renseignée"],
    ["E-mail", data.email],
    ["Téléphone", data.phone || "Non renseigné"],
    ["Votre projet", data.message || "Non renseigné"],
  ];
  return (
    <div className="quote-form">
      <div className="form-notice">
        <span className="notice-dot" />
        Mode démonstration : aucune demande ni donnée de formulaire n’est
        transmise. Utilisez des informations fictives pour tester.
      </div>
      <ol className="steps" aria-label="Étapes du formulaire">
        {["Votre événement", "Vos coordonnées", "Récapitulatif"].map((s, i) => (
          <li
            key={s}
            className={
              step === i + 1 ? "active" : step > i + 1 ? "complete" : ""
            }
            aria-current={step === i + 1 ? "step" : undefined}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {s}
          </li>
        ))}
      </ol>
      {done ? (
        <div className="demo-success">
          <span className="success-mark">✓</span>
          <p className="eyebrow">PARCOURS DE DÉMONSTRATION TERMINÉ</p>
          <h2 ref={heading} tabIndex={-1}>
            Votre projet prend <em>forme.</em>
          </h2>
          <p>
            Le parcours de demande de devis a été simulé.
            <br />
            <strong>Aucune demande n’a été envoyée.</strong>
          </p>
          <p>
            Dans le site final, cette étape sera reliée à la réception et au
            suivi des demandes par l’équipe.
          </p>
          <div className="form-actions">
            <button className="button outline" onClick={() => setDone(false)}>
              Revoir mon récapitulatif
            </button>
            <Link className="text-link" href="/scenarios/">
              Retour aux scénarios <Arrow />
            </Link>
          </div>
          <button
            className="reset-link"
            onClick={() => {
              setData({ ...initial });
              setDone(false);
              setStep(1);
            }}
          >
            Effacer les données et recommencer
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (step < 3) setStep(step + 1);
            else setDone(true);
          }}
        >
          <h2 ref={heading} tabIndex={-1}>
            {step === 1 ? (
              <>
                Donnons le <em>premier indice.</em>
              </>
            ) : step === 2 ? (
              <>
                Faisons <em>connaissance.</em>
              </>
            ) : (
              <>
                Votre projet, <em>en un regard.</em>
              </>
            )}
          </h2>
          <p className="form-helper">
            {step === 1
              ? "Une date ou un lieu encore incertains ? Laissez ces champs vides."
              : step === 2
                ? "Les champs marqués d’un astérisque sont obligatoires."
                : "Vérifiez les informations avant de terminer la simulation."}
          </p>
          {step === 1 && (
            <div className="field-grid">
              <label>
                Type d’événement *
                <select
                  required
                  value={data.kind}
                  onChange={(e) => update("kind", e.target.value)}
                >
                  <option value="">Sélectionnez une option</option>
                  <option>Événement d’entreprise</option>
                  <option>Événement privé</option>
                  <option>Autre projet</option>
                </select>
              </label>
              <label>
                Scénario souhaité
                <select
                  value={data.scenario}
                  onChange={(e) => update("scenario", e.target.value)}
                >
                  <option value="">À définir ensemble</option>
                  {scenarios.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                      {s.confirmed ? "" : " — à valider"}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Nombre de participants envisagé
                <input
                  inputMode="numeric"
                  type="number"
                  min="1"
                  step="1"
                  value={data.participants}
                  onChange={(e) => update("participants", e.target.value)}
                  placeholder="Votre estimation"
                />
                <span className="field-help">
                  Une estimation, sans capacité d’accueil garantie.
                </span>
              </label>
              <label>
                Date souhaitée
                <input
                  type="date"
                  value={data.date}
                  onChange={(e) => update("date", e.target.value)}
                />
                <span className="field-help">
                  N’entraîne aucune réservation.
                </span>
              </label>
              <label>
                Pour le lieu
                <select
                  value={data.venuePreference}
                  onChange={(e) => update("venuePreference", e.target.value)}
                >
                  <option value="">À définir ensemble</option>
                  <option>Nous avons un lieu</option>
                  <option>Proposez-nous un lieu partenaire</option>
                </select>
              </label>
              <label>
                Souhaitez-vous nous confier le repas ?
                <select
                  value={data.meal}
                  onChange={(e) => update("meal", e.target.value)}
                >
                  <option value="">À définir ensemble</option>
                  <option>Oui, avec prise en charge du repas</option>
                  <option>Non, sans prise en charge du repas</option>
                </select>
              </label>
              <label className="full">
                Ville, région ou lieu envisagé
                <input
                  maxLength={200}
                  value={data.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="À préciser si vous le connaissez"
                />
              </label>
              <label className="full">
                Racontez-nous votre projet
                <textarea
                  maxLength={3000}
                  rows={4}
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="L’occasion, l’ambiance, vos souhaits pour le lieu et le repas…"
                />
              </label>
            </div>
          )}
          {step === 2 && (
            <div className="field-grid">
              <label>
                Nom et prénom *
                <input
                  autoComplete="name"
                  required
                  pattern=".*\S.*"
                  maxLength={150}
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </label>
              <label>
                Entreprise ou organisation
                <input
                  autoComplete="organization"
                  maxLength={200}
                  value={data.company}
                  onChange={(e) => update("company", e.target.value)}
                />
              </label>
              <label>
                Adresse e-mail *
                <input
                  autoComplete="email"
                  required
                  type="email"
                  maxLength={254}
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </label>
              <label>
                Téléphone
                <input
                  autoComplete="tel"
                  type="tel"
                  maxLength={50}
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </label>
              <p className="full privacy-note">
                Dans cette maquette, les données restent uniquement en mémoire
                dans cette page. Elles ne sont pas enregistrées dans une base de
                données. La notice de confidentialité du futur site reste à
                rédiger.
              </p>
            </div>
          )}
          {step === 3 && (
            <>
              <dl className="quote-recap">
                {recap.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="privacy-note">
                Cette simulation ne vaut ni devis, ni réservation, ni
                confirmation de disponibilité.
              </p>
            </>
          )}
          <div className="form-actions">
            {step > 1 ? (
              <button
                type="button"
                className="text-link back-button"
                onClick={() => setStep(step - 1)}
              >
                ← Retour
              </button>
            ) : (
              <span className="small-note">
                Votre devis sera établi par notre équipe.
              </span>
            )}
            <button className="button primary" type="submit">
              {step === 3
                ? "Terminer la simulation"
                : step === 1
                  ? "Vos coordonnées"
                  : "Vérifier mon projet"}{" "}
              <Arrow />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default function QuoteForm() {
  return (
    <Suspense fallback={<p>Chargement du formulaire…</p>}>
      <Form />
    </Suspense>
  );
}
