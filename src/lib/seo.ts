import type { Metadata } from "next";
import { localizedPath } from "./i18n";

export const siteUrl = "https://murderparty.agency";
export const siteName = "Murder Party Agency";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/salon-noir.webp",
): Metadata {
  const en = path.startsWith("/en/");
  return {
    title: { absolute: `${title} | ${siteName}` },
    description,
    alternates: { canonical: path, languages: { "fr-BE": localizedPath(path, "fr"), en: localizedPath(path, "en"), "x-default": localizedPath(path, "fr") } },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      locale: en ? "en_GB" : "fr_BE",
      alternateLocale: en ? ["fr_BE"] : ["en_GB"],
      siteName,
      images: [{ url: image, alt: en ? "Atmosphere illustration — Murder Party Agency" : "Illustration d’ambiance — Murder Party Agency" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
  };
}

export const organizationData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
      description: "Murder parties et soirées enquête animées pour les entreprises et les groupes privés en Wallonie et à Bruxelles. Lieu et déplacements confirmés sur devis selon le scénario.",
      email: "guillaume@leludificateur.be",
      telephone: "+32472950345",
      founder: {
        "@type": "Person",
        name: "Guillaume Kerckhofs",
        url: `${siteUrl}/a-propos/#guillaume-kerckhofs`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: `${siteUrl}/`,
      inLanguage: ["fr-BE", "en"],
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
