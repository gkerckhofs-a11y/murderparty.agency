import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Contact et confidentialité", "Contactez Guillaume Kerckhofs pour organiser votre murder party. Coordonnées, préparation des demandes de devis et informations sur vos données personnelles.", "/contact/");
export default function Contact() {
  return <section className="page-intro wrap contact-page">
    <p className="eyebrow">UNE QUESTION, UN PROJET</p>
    <h1>Parlons <em>ensemble.</em></h1>
    <p>Murder Party Agency est un projet de Guillaume Kerckhofs, Le Ludificateur.</p>
    <p><a className="text-link" href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a><br /><a className="text-link" href="tel:+32472950345">+32 472 95 03 45</a></p>
    <p><a className="text-link" href="https://leludificateur.be/" target="_blank" rel="noopener noreferrer">Découvrir Le Ludificateur ↗</a></p>
    <div id="confidentialite" className="contact-privacy">
      <h2>Vos données <em>personnelles.</em></h2>
      <p>Le formulaire prépare un récapitulatif dans votre navigateur. Lorsque vous cliquez sur « Envoyer ma demande », vos coordonnées et les informations sur votre événement sont transmises au service FormSubmit, qui les adresse par e-mail à Guillaume Kerckhofs. Elles servent à vous répondre et à préparer votre devis.</p>
      <p>FormSubmit indique conserver les demandes pendant 30 jours. Consultez sa <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">politique de confidentialité</a> et sa <a href="https://formsubmit.co/documentation" target="_blank" rel="noopener noreferrer">documentation sur la conservation des demandes</a>. Évitez de joindre des informations sensibles à votre demande.</p>
      <p>Avant l’envoi, les données restent en mémoire dans cette page et sont perdues si vous la rechargez ou la quittez. Aucune demande n’est enregistrée dans une base Firebase. Si vous choisissez l’option d’envoi depuis votre messagerie, les informations passent par votre service de courrier électronique.</p>
      <p>Pour toute question concernant vos données ou pour demander leur accès, leur correction ou leur suppression, écrivez à guillaume@leludificateur.be.</p>
      <p>Ce site n’intègre aucun outil publicitaire ni outil de mesure d’audience. L’hébergement Firebase Hosting traite les données techniques nécessaires pour servir et sécuriser les pages. <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a>.</p>
    </div>
  </section>;
}
