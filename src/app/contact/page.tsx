import { pageMetadata } from "@/lib/seo";
import { Arrow } from "@/components/ui";
export const metadata = pageMetadata("Contact et confidentialité", "Contactez Guillaume Kerckhofs pour organiser votre murder party ou proposer un lieu partenaire. Coordonnées et informations sur vos données personnelles.", "/contact/");

const partnerSubject = "Proposition de lieu partenaire — Murder Party Agency";
const partnerBody = "Bonjour Guillaume,\n\nJe souhaite vous présenter un lieu qui pourrait accueillir vos soirées immersives.\n\nNom du lieu :\nAdresse / commune :\nCapacité d’accueil :\nEspaces et ambiance :\nLien vers le site ou des photos :\nMes coordonnées :\n\nAu plaisir d’en discuter !";
const partnerMailHref = `mailto:guillaume@leludificateur.be?subject=${encodeURIComponent(partnerSubject)}&body=${encodeURIComponent(partnerBody)}`;
export default function Contact() {
  return <section className="page-intro wrap contact-page">
    <p className="eyebrow">UNE QUESTION, UN PROJET</p>
    <h1>Parlons <em>ensemble.</em></h1>
    <p>Murder Party Agency est un projet de Guillaume Kerckhofs, Le Ludificateur.</p>
    <p><a className="text-link" href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a><br /><a className="text-link" href="tel:+32472950345">+32 472 95 03 45</a></p>
    <p><a className="text-link" href="https://leludificateur.be/" target="_blank" rel="noopener noreferrer">Découvrir Le Ludificateur ↗</a></p>
    <section id="partenaires" className="partner-contact" aria-labelledby="partner-contact-title">
      <span className="eyebrow">TRAVAILLONS ENSEMBLE</span>
      <h2 id="partner-contact-title">Proposez-nous <em>votre lieu.</em></h2>
      <p>Vous gérez un lieu d’exception et souhaitez y accueillir des soirées
        immersives ? Présentez-nous son atmosphère, sa localisation, ses espaces
        et sa capacité d’accueil. Un lien vers votre site ou quelques photos
        nous aideront à imaginer les possibilités ensemble.</p>
      <a className="button primary" href={partnerMailHref}>Présenter mon lieu par e-mail <Arrow /></a>
      <p className="partner-contact-note">Le bouton ouvre votre messagerie avec
        un message prérempli à compléter et à envoyer. Vous pouvez aussi écrire
        directement à <a href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a>
        {" "}avec l’objet « Proposition de lieu partenaire ».</p>
    </section>
    <div id="confidentialite" className="contact-privacy">
      <h2>Vos données <em>personnelles.</em></h2>
      <p>Le formulaire prépare un récapitulatif dans votre navigateur. Il ne l’envoie pas automatiquement et ne l’enregistre pas dans une base de données. Les informations saisies sont perdues si vous rechargez ou quittez la page.</p>
      <p>Si vous choisissez de nous écrire, votre messagerie transmet à Guillaume Kerckhofs les informations que vous décidez d’envoyer. Elles servent à répondre à votre demande et à préparer votre devis.</p>
      <p>Pour toute question concernant vos données ou pour demander leur accès, leur correction ou leur suppression, écrivez à guillaume@leludificateur.be.</p>
      <p>Ce site n’intègre aucun outil publicitaire ni outil de mesure d’audience. L’hébergement Firebase Hosting traite les données techniques nécessaires pour servir et sécuriser les pages. <a href="https://policies.google.com/privacy?hl=fr" target="_blank" rel="noopener noreferrer">Politique de confidentialité de Google</a>.</p>
    </div>
  </section>;
}
