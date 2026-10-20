import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Murder party en Wallonie et à Bruxelles | Murder Party Agency",
    template: "%s | Murder Party Agency",
  },
  description:
    "Votre soirée enquête ou soirée mystère en Wallonie et à Bruxelles. Quatre murder parties animées pour entreprises et groupes privés. Organisation sur devis.",
  metadataBase: new URL("https://murderparty.agency"),
  verification: { google: "x8Xz7-qeGye6hmTsdIEmcCnW4SnwIaizj4y5zJ_ioik" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: { type: "website", locale: "fr_BE", siteName: "Murder Party Agency" },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
