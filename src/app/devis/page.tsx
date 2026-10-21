import { pageMetadata } from "@/lib/seo";
import QuoteForm from "@/components/quote-form";
export const metadata = pageMetadata("Devis murder party et animation Spy Party", "Préparez votre devis pour une murder party ou Spy Party : expérience, groupe, date, lieu et repas. Envoyez votre récapitulatif depuis votre messagerie.", "/devis/");
export default function Page() {
  return (
    <section className="wrap quote-page">
      <aside className="quote-aside">
        <span className="eyebrow">PARLONS DE VOTRE ÉVÉNEMENT</span>
        <h1>
          Votre devis
          <br />
          <em>sur mesure.</em>
        </h1>
        <p>
          Une murder party ou une animation Spy Party, une occasion, un groupe.
          <br />
          Racontez-nous le début de l’histoire.
        </p>
        <div className="quote-promise">
          <span>01</span>
          <p>
            Une expérience
            <br />
            <strong>animée par nos équipes.</strong>
          </p>
          <span>02</span>
          <p>
            Une prestation
            <br />
            <strong>sur devis sur mesure.</strong>
          </p>
        </div>
        <p className="small-note">
          Pour votre événement en Wallonie ou à Bruxelles, indiquez la commune
          envisagée. Le lieu et les déplacements sont confirmés selon le scénario.
          <br />
          Un lieu partenaire et le repas peuvent aussi être proposés :
          indiquez-nous vos envies.
        </p>
      </aside>
      <QuoteForm />
    </section>
  );
}
