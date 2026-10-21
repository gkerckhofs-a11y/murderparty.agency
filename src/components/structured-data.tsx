import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

export function StructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ items, locale = "fr" }: { items: { name: string; path: string }[]; locale?: Locale }) {
  const trail = [{ name: locale === "en" ? "Home" : "Accueil", path: locale === "en" ? "/en/" : "/" }, ...items];
  return <>
    <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    }} />
    <nav className="wrap breadcrumb" aria-label={locale === "en" ? "Breadcrumb" : "Fil d’Ariane"}>
      {trail.map((item, index) => <span key={item.path}>
        {index > 0 && <span aria-hidden="true"> / </span>}
        {index === trail.length - 1
          ? <span aria-current="page">{item.name}</span>
          : <Link href={item.path}>{item.name}</Link>}
      </span>)}
    </nav>
  </>;
}
