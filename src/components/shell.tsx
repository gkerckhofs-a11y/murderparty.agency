"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark, Arrow } from "./ui";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Header({ locale = "fr" }: { locale?: Locale }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const en = locale === "en";
  const href = (path: string) => localizedPath(path, locale);
  const frenchPath = localizedPath(path, "fr");
  useEffect(() => setOpen(false), [path]);
  return <header className="header"><div className="wrap header-inner">
    <Link className="brand" href={href("/")} aria-label={en ? "Murder Party Agency, home" : "Murder Party Agency, accueil"}>
      <Mark /><span>MURDER PARTY<small>AGENCY</small></span>
    </Link>
    <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
      {open ? (en ? "Close ✕" : "Fermer ✕") : "Menu ☰"}
    </button>
    <nav id="main-nav" aria-label={en ? "Main navigation" : "Navigation principale"} className={open ? "nav is-open" : "nav"}
      onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}>
      <Link aria-current={frenchPath === "/" ? "page" : undefined} href={href("/")}>{en ? "The experience" : "L’expérience"}</Link>
      <Link aria-current={frenchPath.startsWith("/scenarios/") ? "page" : undefined} href={href("/scenarios/")}>{en ? "Scenarios" : "Les scénarios"}</Link>
      <Link aria-current={frenchPath === "/a-propos/" ? "page" : undefined} href={href("/a-propos/")} onClick={() => setOpen(false)}>{en ? "About" : "À propos"}</Link>
      <Link className="button outline small" aria-current={frenchPath === "/devis/" ? "page" : undefined} href={href("/devis/")}>{en ? "Your event" : "Votre événement"} <Arrow /></Link>
      <div className="language language-switch" aria-label={en ? "Language" : "Langue"}>
        {(["fr", "en"] as const).map((language, index) => <span key={language}>
          {index > 0 && <span className="language-divider" aria-hidden="true"> / </span>}
          {language === locale ? <span aria-current="true">{language.toUpperCase()}</span> :
            <a href={localizedPath(path, language)} hrefLang={language} lang={language}
              aria-label={language === "en" ? "View this page in English" : "Voir cette page en français"}
              onClick={(event) => {
                const url = new URL(window.location.href);
                const scenario = url.searchParams.get("scenario");
                const query = scenario && frenchPath === "/devis/" ? `?scenario=${encodeURIComponent(scenario)}` : "";
                event.currentTarget.href = localizedPath(path + query + url.hash, language);
              }}>{language.toUpperCase()}</a>}
        </span>)}
      </div>
    </nav>
  </div></header>;
}

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const en = locale === "en";
  const href = (path: string) => localizedPath(path, locale);
  return <footer className="footer"><div className="wrap">
    <div className="footer-top">
      <Link className="brand" href={href("/")}><Mark /><span>MURDER PARTY<small>AGENCY</small></span></Link>
      <p>{en ? "Secrets to share." : "Des secrets à partager."}<br />{en ? "An evening to live." : "Une soirée à vivre."}</p>
      <div>
        <Link href={href("/scenarios/")}>{en ? "Scenarios" : "Les scénarios"}</Link>
        <Link href={href("/soiree-enquete/")}>{en ? "Plan a murder mystery party" : "Organiser une soirée enquête"}</Link>
        <Link href={href("/a-propos/")}>{en ? "About" : "À propos"}</Link>
        <Link href={href("/devis/")}>{en ? "Request a quote" : "Demander un devis"}</Link>
        <Link href={href("/contact/#partenaires")}>{en ? "Become a venue partner" : "Proposer un lieu partenaire"}</Link>
        <Link href={href("/contact/")}>{en ? "Contact & privacy" : "Contact & confidentialité"}</Link>
      </div>
    </div>
    <div className="footer-bottom"><span>Murder Party Agency · Le Ludificateur</span><span>{en ? "Hosted events · Bespoke quotes" : "Événements animés · Devis sur mesure"}</span></div>
  </div></footer>;
}
