import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Murder Party Agency — Murder Parties sur mesure",
    template: "%s · Murder Party Agency",
  },
  description:
    "Des Murder Parties événementielles animées par nos équipes. Scénarios immersifs, lieux partenaires et repas sur demande. Devis sur mesure.",
  metadataBase: new URL("https://murderparty.agency"),
  robots: { index: true, follow: true },
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
