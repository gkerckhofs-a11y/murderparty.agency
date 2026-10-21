import type { Metadata } from "next";
import EmailActivation from "@/components/email-activation";

export const metadata: Metadata = {
  title: { absolute: "Activation de l’envoi — Murder Party Agency" },
  description: "Configuration de l’envoi des demandes de devis vers l’adresse de Guillaume Kerckhofs.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/activation-envoi/" },
};

export default function EmailSetupPage() {
  return <section className="page-intro wrap contact-page">
    <span className="eyebrow">CONFIGURATION DU FORMULAIRE</span>
    <h1>Activer la réception <em>des demandes.</em></h1>
    <EmailActivation />
  </section>;
}
