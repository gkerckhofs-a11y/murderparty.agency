import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "404 — Murder Party Agency", robots: { index: false, follow: false } };
export default function GlobalNotFound() {
  return <html lang="fr"><body><main className="wrap page-intro">
    <span className="eyebrow">404 · MURDER PARTY AGENCY</span>
    <h1>Cette piste <em>s’arrête ici.</em></h1>
    <p>La page demandée n’existe pas.</p>
    <p lang="en">This trail ends here. The page you requested could not be found.</p>
    <div className="hero-actions">
      <a className="button primary" href="/scenarios/">Le catalogue en français →</a>
      <a className="button outline" href="/en/scenarios/" lang="en">Explore in English →</a>
    </div>
  </main></body></html>;
}
