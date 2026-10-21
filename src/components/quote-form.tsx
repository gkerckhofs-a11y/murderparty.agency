"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { scenarios as frenchScenarios, durationLabel } from "@/content/fr";
import { scenarios as englishScenarios } from "@/content/en";
import { localizedPath, type Locale } from "@/lib/i18n";
import { Arrow } from "./ui";
type Quote = { kind: string; scenario: string; participants: string; date: string; location: string; venuePreference: string; meal: string; message: string; name: string; company: string; email: string; phone: string };
const initial: Quote = { kind: "", scenario: "", participants: "", date: "", location: "", venuePreference: "", meal: "", message: "", name: "", company: "", email: "", phone: "" };
function Form({ locale }: { locale: Locale }) {
  const t = (fr: string, en: string) => locale === "en" ? en : fr;
  const scenarios = locale === "en" ? englishScenarios : frenchScenarios;
  const params = useSearchParams();
  const [data, setData] = useState<Quote>(initial);
  const [step, setStep] = useState(1);
  const [copyStatus, setCopyStatus] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    const slug = params.get("scenario");
    if (slug && scenarios.some((s) => s.slug === slug)) setData((d) => ({ ...d, scenario: slug }));
  }, [params, scenarios]);
  useEffect(() => {
    if (mounted.current) heading.current?.focus();
    mounted.current = true;
  }, [step]);
  function update(key: keyof Quote, value: string) { setData((d) => ({ ...d, [key]: value })); }
  const selectedScenario = scenarios.find((s) => s.slug === data.scenario);
  const together = t("À définir ensemble", "Let’s decide together");
  const unspecified = t("À préciser", "To be confirmed");
  const scenario = selectedScenario?.title || together;
  const participantCount = Number(data.participants);
  const participantsInvalid = data.participants !== "" && (!Number.isInteger(participantCount) || participantCount < 1);
  const adaptationRequested = !!selectedScenario && data.participants !== "" && !participantsInvalid &&
    (participantCount < selectedScenario.minParticipants || participantCount > selectedScenario.maxParticipants);
  const recap = [
    [t("Événement", "Event"), data.kind || unspecified],
    [t("Expérience souhaitée", "Preferred experience"), scenario],
    [t("Durée", "Duration"), selectedScenario ? durationLabel(selectedScenario, locale) : t("Murder parties : environ 3 h, 4 h pour The Bikers. Spy Party : à définir ensemble.", "Murder mysteries: around 3 hours, 4 hours for The Bikers. Spy Party: to be agreed.")],
    ...(selectedScenario?.departure ? [[t("Départ de l’enquête", "Starting point"), selectedScenario.departure]] : []),
    ...(selectedScenario?.included ? [[t("Inclus", "Included"), selectedScenario.included]] : []),
    [t("Participants envisagés", "Estimated number of participants"), data.participants || unspecified],
    ...(adaptationRequested ? [[t("Adaptation du format", "Format adaptation"), t("À étudier avec notre équipe pour ce groupe", "To be discussed with our team for this group")]] : []),
    [t("Date souhaitée", "Preferred date"), data.date ? data.date.split("-").reverse().join("/") : unspecified],
    [selectedScenario?.departure ? t("Lieu pour les prestations complémentaires", "Venue for additional services") : t("Lieu envisagé", "Preferred venue"), data.location || unspecified],
    [selectedScenario?.departure ? t("Organisation du lieu complémentaire", "Additional venue arrangements") : t("Organisation du lieu", "Venue arrangements"), data.venuePreference || together],
    [t("Prise en charge du repas", "Meal arrangements"), data.meal || together],
    [t("Votre nom", "Your name"), data.name],
    [t("Organisation", "Organisation"), data.company || t("Non renseignée", "Not provided")],
    [t("E-mail", "Email"), data.email],
    [t("Téléphone", "Phone"), data.phone || t("Non renseigné", "Not provided")],
    [t("Votre projet", "Your plans"), data.message || t("Non renseigné", "Not provided")],
  ];
  const emailBody = `${t("Bonjour,\n\nJe souhaite un devis pour mon événement.", "Hello,\n\nI would like a quote for my event.")}\n\n${recap.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${t("Merci et à bientôt.", "Thank you. I look forward to hearing from you.")}`;
  const mailHref = `mailto:guillaume@leludificateur.be?subject=${encodeURIComponent(`${t("Demande de devis", "Quote request")} — ${scenario}`)}&body=${encodeURIComponent(emailBody)}`;
  return <div className="quote-form">
    <p className="form-notice">{t("Votre demande sera préparée pour un envoi depuis votre messagerie.", "Your enquiry will be prepared for you to send from your email app.")}</p>
    <ol className="steps" aria-label={t("Étapes du formulaire", "Form steps")}>
      {[t("Votre événement", "Your event"), t("Vos coordonnées", "Your details"), t("Récapitulatif", "Review")].map((label, i) => <li key={label} className={step === i + 1 ? "active" : step > i + 1 ? "complete" : ""} aria-current={step === i + 1 ? "step" : undefined}><span>{String(i + 1).padStart(2, "0")}</span>{label}</li>)}
    </ol>
    <form onSubmit={(e) => { e.preventDefault(); if (participantsInvalid) { setStep(1); return; } if (step < 3) setStep(step + 1); }}>
      <h2 ref={heading} tabIndex={-1}>
        {step === 1 ? <>{t("Donnons le", "Start with")} <em>{t("premier indice.", "the first clue.")}</em></> : step === 2 ? <>{t("Faisons", "Let’s get")} <em>{t("connaissance.", "acquainted.")}</em></> : <>{t("Votre projet,", "Your event,")} <em>{t("en un regard.", "at a glance.")}</em></>}
      </h2>
      <p className="form-helper">{step === 1 ? t("Une date ou un lieu encore incertains ? Laissez ces champs vides.", "Not sure about the date or venue yet? You can leave those fields blank.") : step === 2 ? t("Les champs marqués d’un astérisque sont obligatoires.", "Fields marked with an asterisk are required.") : t("Vérifiez les informations, puis envoyez votre demande depuis votre messagerie.", "Check your details, then send your enquiry from your email app.")}</p>
      {step === 1 && <div className="field-grid">
        <label>{t("Type d’événement *", "Event type *")}<select required value={data.kind} onChange={(e) => update("kind", e.target.value)}>
          <option value="">{t("Sélectionnez une option", "Select an option")}</option>
          <option>{t("Événement d’entreprise", "Corporate event")}</option><option>{t("Événement privé", "Private event")}</option><option>{t("Autre projet", "Other event")}</option>
        </select></label>
        <label>{t("Expérience souhaitée", "Preferred experience")}<select value={data.scenario} onChange={(e) => update("scenario", e.target.value)}>
          <option value="">{together}</option>{scenarios.map((s) => <option key={s.slug} value={s.slug}>{s.title} · {durationLabel(s, locale)}</option>)}
        </select>{selectedScenario?.included && <span className="field-help">{selectedScenario.included}.</span>}{selectedScenario?.departure && <span className="field-help">{t("Départ depuis", "Starting from")} {selectedScenario.departure}.</span>}</label>
        <label>{t("Nombre de participants envisagé", "Estimated number of participants")}<input inputMode="numeric" type="number" min={1} step="1" aria-describedby="participant-capacity participant-error" aria-invalid={participantsInvalid || undefined} value={data.participants} onChange={(e) => update("participants", e.target.value)} placeholder={t("Votre estimation", "Your estimate")} />
          <span className="field-help" id="participant-capacity">{t("Nous travaillons sur mesure et adaptons les scénarios et les personnages à la taille de votre groupe, à sa composition et à la diversité des genres.", "We tailor the scenarios and character roles to your group’s size, make-up and gender diversity.")}{adaptationRequested && <> {t("Nous étudierons ensemble l’adaptation de cette expérience à votre groupe.", "We’ll discuss how this experience can be adapted to your group.")}</>}</span>
          <span id="participant-error" className="field-error" role="alert">{participantsInvalid ? t("Indiquez un nombre entier supérieur à zéro, ou laissez ce champ vide si votre groupe n’est pas encore défini.", "Enter a whole number greater than zero, or leave this blank if your group size is not yet confirmed.") : ""}</span>
        </label>
        <label>{t("Date souhaitée", "Preferred date")}<input type="date" value={data.date} onChange={(e) => update("date", e.target.value)} /><span className="field-help">{t("N’entraîne aucune réservation.", "This does not make a booking.")}</span></label>
        <label>{selectedScenario?.departure ? t("Lieu pour les prestations complémentaires", "Venue for additional services") : t("Pour le lieu", "Venue arrangements")}<select value={data.venuePreference} onChange={(e) => update("venuePreference", e.target.value)}>
          <option value="">{together}</option><option>{t("Nous avons un lieu", "We have a venue")}</option><option>{t("Proposez-nous un lieu partenaire", "Please suggest a partner venue")}</option>
        </select></label>
        <label>{t("Souhaitez-vous nous confier le repas ?", "Would you like us to arrange a meal?")}<select value={data.meal} onChange={(e) => update("meal", e.target.value)}>
          <option value="">{together}</option><option>{t("Oui, avec prise en charge du repas", "Yes, please arrange a meal")}</option><option>{t("Non, sans prise en charge du repas", "No meal arrangements needed")}</option>
        </select></label>
        <label className="full">{selectedScenario?.departure ? t("Lieu complémentaire envisagé (facultatif)", "Preferred additional venue (optional)") : t("Ville, région ou lieu envisagé", "Preferred town, region or venue")}<input maxLength={200} value={data.location} onChange={(e) => update("location", e.target.value)} placeholder={t("À préciser si vous le connaissez", "If you have somewhere in mind")} /></label>
        <label className="full">{t("Racontez-nous votre projet", "Tell us about your plans")}<textarea maxLength={3000} rows={4} value={data.message} onChange={(e) => update("message", e.target.value)} placeholder={t("L’occasion, votre groupe, l’ambiance, vos souhaits pour le lieu et le repas…", "The occasion, your group, the atmosphere, your ideas for the venue and meal…")} /></label>
      </div>}
      {step === 2 && <div className="field-grid">
        <label>{t("Nom et prénom *", "Full name *")}<input autoComplete="name" required pattern=".*\S.*" maxLength={150} value={data.name} onChange={(e) => update("name", e.target.value)} /></label>
        <label>{t("Entreprise ou organisation", "Company or organisation")}<input autoComplete="organization" maxLength={200} value={data.company} onChange={(e) => update("company", e.target.value)} /></label>
        <label>{t("Adresse e-mail *", "Email address *")}<input autoComplete="email" required type="email" maxLength={254} value={data.email} onChange={(e) => update("email", e.target.value)} /></label>
        <label>{t("Téléphone", "Phone")}<input autoComplete="tel" type="tel" maxLength={50} value={data.phone} onChange={(e) => update("phone", e.target.value)} /></label>
        <p className="full privacy-note">{t("Ces informations permettront à Guillaume Kerckhofs, Le Ludificateur, de vous répondre. Elles restent dans cette page jusqu’à votre envoi par e-mail.", "These details allow Guillaume Kerckhofs, Le Ludificateur, to reply to you. They stay on this page until you send your email.")} <a href={localizedPath("/contact/#confidentialite", locale)}>{t("En savoir plus sur vos données", "Learn more about your data")}</a>.</p>
      </div>}
      {step === 3 && <><dl className="quote-recap">{recap.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="privacy-note">{t("Votre demande ne vaut ni réservation ni confirmation de disponibilité. Le devis est établi par notre équipe.", "Your enquiry is not a booking or confirmation of availability. Our team will prepare your bespoke quote.")}</p></>}
      <div className="form-actions">
        {step > 1 ? <button type="button" className="text-link back-button" onClick={() => setStep(step - 1)}>← {t("Retour", "Back")}</button> : <span className="small-note">{t("Votre devis sera établi par notre équipe.", "Our team will prepare your quote.")}</span>}
        {step < 3 ? <button className="button primary" type="submit">{step === 1 ? t("Vos coordonnées", "Your details") : t("Vérifier mon projet", "Review my enquiry")} <Arrow /></button> : <a className="button primary" href={mailHref}>{t("Ouvrir ma messagerie", "Open my email app")} <Arrow /></a>}
      </div>
      {step === 3 && <div className="email-handoff">
        <p>{t("L’e-mail est adressé à", "Your email is addressed to")} <a href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a>. {t("Vérifiez-le et cliquez sur « Envoyer » dans votre messagerie.", "Review it and click ‘Send’ in your email app.")}</p>
        <details><summary>{t("Votre messagerie ne s’ouvre pas ?", "Email app not opening?")}</summary>
          <p>{t("Copiez ce récapitulatif dans un e-mail à guillaume@leludificateur.be, avec l’objet « Demande de devis — Murder Party Agency ».", "Copy this summary into an email to guillaume@leludificateur.be, with the subject ‘Quote request — Murder Party Agency’.")}</p>
          <textarea aria-label={t("Récapitulatif à copier", "Summary to copy")} readOnly rows={12} value={emailBody} onFocus={(e) => e.target.select()} />
          <button className="button outline" type="button" onClick={async () => { try { await navigator.clipboard.writeText(emailBody); setCopyStatus(t("Récapitulatif copié.", "Summary copied.")); } catch { setCopyStatus(t("Sélectionnez et copiez le récapitulatif ci-dessus.", "Select and copy the summary above.")); } }}>{t("Copier le récapitulatif", "Copy summary")}</button>
          <p role="status">{copyStatus}</p>
        </details>
      </div>}
    </form>
  </div>;
}
export default function QuoteForm({ locale = "fr" }: { locale?: Locale }) {
  return <Suspense fallback={<p>{locale === "en" ? "Loading form…" : "Chargement du formulaire…"}</p>}><Form locale={locale} /></Suspense>;
}
