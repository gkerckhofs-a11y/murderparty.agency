import type { Metadata } from "next";

export const siteUrl = "https://murderparty.agency";
export const siteName = "Murder Party Agency";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image = "/images/salon-noir.webp",
): Metadata {
  return {
    title: { absolute: `${title} | ${siteName}` },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
      locale: "fr_BE",
      siteName,
      images: [{ url: image, alt: "Illustration d’ambiance — Murder Party Agency" }],
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
      description: "Murder parties événementielles animées par nos équipes, pour les entreprises et les événements privés, sur devis.",
      email: "guillaume@leludificateur.be",
      telephone: "+32472950345",
      founder: {
        "@type": "Person",
        name: "Guillaume Kerckhofs",
        url: `${siteUrl}/le-createur/`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: `${siteUrl}/`,
      inLanguage: "fr-BE",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};
