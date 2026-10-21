import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap page-intro">
      <span className="eyebrow">404 · FAUSSE PISTE</span>
      <h1>
        Cette piste
        <br />
        <em>s’arrête ici.</em>
      </h1>
      <p>La page demandée n’existe pas.</p>
      <Link className="button primary" href="/scenarios/">
        Retrouver les scénarios →
      </Link>
    </section>
  );
}
