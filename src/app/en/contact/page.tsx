import { pageMetadata } from "@/lib/seo";
import { Arrow } from "@/components/ui";
export const metadata = pageMetadata("Contact and privacy", "Contact Guillaume Kerckhofs to plan your murder mystery party or propose a partner venue. Contact details and information about your personal data.", "/en/contact/");
const subject = "Venue partnership proposal — Murder Party Agency";
const body = "Hello Guillaume,\n\nI would like to introduce a venue that could host your immersive evenings.\n\nVenue name:\nAddress / town:\nCapacity:\nSpaces and atmosphere:\nWebsite or photo link:\nMy contact details:\n\nI look forward to discussing it with you.";
const mailHref = `mailto:guillaume@leludificateur.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
export default function Contact() {
  return <section className="page-intro wrap contact-page"><p className="eyebrow">A QUESTION, AN IDEA</p><h1>Let’s <em>talk.</em></h1>
    <p>Murder Party Agency is a project by Guillaume Kerckhofs, Le Ludificateur.</p>
    <p><a className="text-link" href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a><br /><a className="text-link" href="tel:+32472950345">+32 472 95 03 45</a></p>
    <p><a className="text-link" href="https://leludificateur.be/" target="_blank" rel="noopener noreferrer">Discover Le Ludificateur ↗</a></p>
    <section id="partners" className="partner-contact" aria-labelledby="partner-contact-title"><span className="eyebrow">LET’S WORK TOGETHER</span><h2 id="partner-contact-title">Tell us about <em>your venue.</em></h2>
      <p>Do you manage an exceptional venue and want to host immersive evenings? Tell us about its atmosphere, location, spaces and capacity. A website link or a few photos will help us explore the possibilities together.</p>
      <a className="button primary" href={mailHref}>Introduce my venue by email <Arrow /></a>
      <p className="partner-contact-note">This button opens your email app with a prepared message for you to complete and send. You can also write directly to <a href="mailto:guillaume@leludificateur.be">guillaume@leludificateur.be</a> with the subject “Venue partnership proposal”.</p>
    </section>
    <div id="privacy" className="contact-privacy"><h2>Your personal <em>data.</em></h2>
      <p>The form prepares a summary in your browser. It does not send it automatically or save it in a database. The information you enter is lost if you reload or leave the page.</p>
      <p>If you choose to write to us, your email app sends Guillaume Kerckhofs the information you decide to share. It is used to reply to your request and prepare your quote.</p>
      <p>For any questions about your data, or to request access, correction or deletion, write to guillaume@leludificateur.be.</p>
      <p>This website does not include advertising or audience analytics tools. Firebase Hosting processes the technical data needed to serve and secure the pages. <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</p>
    </div>
  </section>;
}
