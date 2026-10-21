import { SiteDocument, rootMetadata } from "@/components/site-document";
export const metadata = rootMetadata("fr");
export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="fr">{children}</SiteDocument>;
}
