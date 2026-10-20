import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact et confidentialité",
  alternates: { canonical: "/contact/" },
};
export default function Contact() {
  return <section className="page-intro wrap contact-page">
    <p className="eyebrow">UNE QUESTION, UN PROJET</p>
    <h1>Parlons <em>ensemble.</em></h1>
    <p>Murder Party Agency est un projet de Guillaume Kerckhofs, Le Ludificateur.</p>
    <p><a className="text-link" href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a><br /><a className="text-link" href="tel:+32472950345">+32 472 95 03 45</a></p>
    <p><a className="text-link" href="https://leludificateur.be/" target="_blank" rel="noopener noreferrer">Découvrir Le Ludificateur ↗</a></p>
    <div id="confidentialite" className="contact-privacy">
      <h2>Vos données <em>personnelles.</em></h2>
      <p>Le formulaire prépare un récapitulatif dans votre navigateur. Il ne l’envoie pas automatiquement et ne l’enregistre pas dans une base de données. Les informations saisies sont perdues si vous rechargez ou quittez la page.</p>
      <p>Si vous choisissez de nous écrire, votre messagerie transmet à Guillaume Kerckhofs les informations que vous décidez d’envoyer. Elles servent à répondre à votre demande et à préparer votre devis.</p>
      <p>Pour toute question concernant vos données ou pour demander leur accès, leur correction ou leur suppression, écrivez à guillaume@leludificateur.be.</p>
      <p>Ce site n’intègre aucun outil publicitaire ni outil de mesure d’audience. L’hébergement Firebase Hosting traite les données techniques nécessaires pour servir et sécuriser les pages. <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a>.</p>
    </div>
  </section>;
}
