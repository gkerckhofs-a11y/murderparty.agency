import type { Metadata } from "next";
import QuoteForm from "@/components/quote-form";
export const metadata: Metadata = { title: "Votre événement" };
export default function Page() {
  return (
    <section className="wrap quote-page">
      <aside className="quote-aside">
        <span className="eyebrow">PARLONS DE VOTRE ÉVÉNEMENT</span>
        <h1>
          Tout commence
          <br />
          par <em>vous.</em>
        </h1>
        <p>
          Une envie, une occasion, un groupe.
          <br />
          Racontez-nous le début de l’histoire.
        </p>
        <div className="quote-promise">
          <span>01</span>
          <p>
            Une Murder Party
            <br />
            <strong>animée par nos équipes.</strong>
          </p>
          <span>02</span>
          <p>
            Une prestation
            <br />
            <strong>uniquement sur devis.</strong>
          </p>
        </div>
        <p className="small-note">
          Les scénarios présentés sont provisoires.
          <br />
          Les modalités seront précisées avec l’équipe.
        </p>
      </aside>
      <QuoteForm />
    </section>
  );
}
