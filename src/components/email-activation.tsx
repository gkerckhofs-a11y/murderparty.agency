"use client";

import { useRef, useState } from "react";
import { quoteRecipient } from "@/lib/send-quote";

export default function EmailActivation() {
  const [status, setStatus] = useState<"idle" | "sending" | "accepted" | "error">("idle");
  const busy = useRef(false);
  async function activate() {
    if (busy.current) return;
    busy.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${quoteRecipient}`, {
        method: "POST",
        credentials: "omit",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: "Test technique Murder Party Agency",
          email: quoteRecipient,
          message: "Test de configuration du formulaire de murderparty.agency. Ceci n’est pas une demande de devis client.",
          _subject: "Activation du formulaire Murder Party Agency — test technique",
          _url: "https://murderparty.agency/devis/",
          _template: "table",
          _honey: "",
        }),
      });
      if (!response.ok) throw new Error("service unavailable");
      const result = await response.json();
      if (result?.success !== true && result?.success !== "true") throw new Error("not accepted");
      setStatus("accepted");
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      busy.current = false;
    }
  }
  return <div className="contact-privacy">
    <p>Cette page sert uniquement à configurer la réception des demandes par Guillaume Kerckhofs.</p>
    <p>Le bouton envoie un message de test sans données de client, via FormSubmit, à <strong>{quoteRecipient}</strong>. FormSubmit peut conserver ce test 30 jours. <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">Confidentialité du service</a>.</p>
    <button className="button primary" onClick={activate} disabled={status === "sending" || status === "accepted"}>
      {status === "sending" ? "Envoi du test…" : status === "accepted" ? "Test accepté par le service" : "Envoyer le test d’activation"}
    </button>
    {status === "accepted" && <div role="status">
      <p>Le service a accepté le test. Consultez la boîte <strong>{quoteRecipient}</strong>, y compris les courriers indésirables.</p>
      <p>Si FormSubmit vous envoie un message d’activation, ouvrez-le et utilisez son bouton de confirmation. Vérifiez ensuite la réception du message de test.</p>
      <p>Confirmez dans notre conversation que la validation est faite et que le test est reçu. Le bouton d’envoi direct pourra alors remplacer l’ouverture de la messagerie sur le formulaire public.</p>
    </div>}
    {status === "error" && <p role="alert">Impossible de confirmer l’acceptation du test. Aucun nouvel envoi n’a été lancé automatiquement. Si vous avez malgré tout reçu un e-mail, vérifiez-le avant de réessayer. Sinon, indiquez-nous cette erreur dans notre conversation.</p>}
    <p>Cette étape ne modifie pas encore le formulaire des visiteurs.</p>
  </div>;
}
