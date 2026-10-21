import type { Metadata } from "next";
import { Header, Footer } from "./shell";
import type { Locale } from "@/lib/i18n";
import "@/app/globals.css";
export function rootMetadata(locale: Locale): Metadata {
  return {
    title: { default: "Murder Party Agency", template: "%s | Murder Party Agency" },
    metadataBase: new URL("https://murderparty.agency"),
    verification: { google: "x8Xz7-qeGye6hmTsdIEmcCnW4SnwIaizj4y5zJ_ioik" },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: { type: "website", locale: locale === "en" ? "en_GB" : "fr_BE", siteName: "Murder Party Agency" },
    icons: { icon: "/icon.svg" },
  };
}
export function SiteDocument({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return <html lang={locale}><body>
    <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Aller au contenu"}</a>
    <Header locale={locale} />
    <main id="main">{children}</main>
    <Footer locale={locale} />
  </body></html>;
}
