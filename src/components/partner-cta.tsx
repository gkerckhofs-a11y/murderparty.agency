import Link from "next/link";
import { Arrow } from "./ui";
import { localizedPath, type Locale } from "@/lib/i18n";
export function PartnerCta({ compact = false, locale = "fr" }: { compact?: boolean; locale?: Locale }) {
  const Heading = compact ? "h3" : "h2";
  const en = locale === "en";
  return <section className={`partner-invitation${compact ? " is-compact" : ""}`} aria-labelledby="partner-invitation-title">
    <div className={`${compact ? "" : "wrap "}partner-invitation-inner`}>
      <div>
        <span className="eyebrow">{en ? "BECOME A VENUE PARTNER" : "DEVENIR UN LIEU PARTENAIRE"}</span>
        <Heading id="partner-invitation-title">{en ? "Have an " : "Vous avez un lieu "}<em>{en ? "exceptional venue?" : "d’exception ?"}</em></Heading>
        <p>{en ? "Could your castle, characterful house or unusual venue host an immersive evening? Let’s imagine the mysteries that could come to life there." : "Votre château, votre demeure de caractère ou votre lieu insolite se prêterait à une soirée immersive ? Imaginons ensemble les enquêtes qui pourraient y prendre vie."}</p>
      </div>
      <Link href={localizedPath("/contact/#partenaires", locale)} className="button primary">{en ? "Let’s work together" : "Travaillons ensemble"} <Arrow /></Link>
    </div>
  </section>;
}
