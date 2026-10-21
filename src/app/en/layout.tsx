import { SiteDocument, rootMetadata } from "@/components/site-document";
export const metadata = rootMetadata("en");
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
