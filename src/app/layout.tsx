import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Murder party & soirée enquête | Murder Party Agency",
    template: "%s | Murder Party Agency",
  },
  description:
    "Organisez une murder party, une soirée enquête ou une soirée mystère animée par nos équipes. Événements d’entreprise et privés, sur devis.",
  metadataBase: new URL("https://murderparty.agency"),
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
