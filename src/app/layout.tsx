import type { Metadata } from "next";
import { Header, Footer } from "@/components/shell";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Murder Party Agency — Maquette",
    template: "%s · Murder Party Agency",
  },
  description:
    "Maquette de validation pour des Murder Parties événementielles animées par nos équipes. Prestations uniquement sur devis.",
  robots: { index: false, follow: false },
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
