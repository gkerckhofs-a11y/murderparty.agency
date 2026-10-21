import Link from "next/link";
import { Arrow } from "./ui";

export function PartnerCta({ compact = false }: { compact?: boolean }) {
  const Heading = compact ? "h3" : "h2";
  return <section className={`partner-invitation${compact ? " is-compact" : ""}`}
    aria-labelledby="partner-invitation-title">
    <div className={`${compact ? "" : "wrap "}partner-invitation-inner`}>
      <div>
        <span className="eyebrow">DEVENIR UN LIEU PARTENAIRE</span>
        <Heading id="partner-invitation-title">Vous avez un lieu <em>d’exception ?</em></Heading>
        <p>Votre château, votre demeure de caractère ou votre lieu insolite se
          prêterait à une soirée immersive ? Imaginons ensemble les enquêtes
          qui pourraient y prendre vie.</p>
      </div>
      <Link href="/contact/#partenaires" className="button primary">
        Travaillons ensemble <Arrow />
      </Link>
    </div>
  </section>;
}
