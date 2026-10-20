"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark, Arrow } from "./ui";
import { reviewNotice } from "@/content/fr";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <>
      <div className="review-bar">
        <span>{reviewNotice}</span>
        <Link href="/validation/">
          Notes de validation <Arrow diagonal />
        </Link>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="Murder Party Agency, accueil"
          >
            <Mark />
            <span>
              MURDER PARTY<small>AGENCY</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Fermer ✕" : "Menu ☰"}
          </button>
          <nav
            id="main-nav"
            aria-label="Navigation principale"
            className={open ? "nav is-open" : "nav"}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            <Link aria-current={path === "/" ? "page" : undefined} href="/">
              L’expérience
            </Link>
            <Link
              aria-current={path.startsWith("/scenarios") ? "page" : undefined}
              href="/scenarios/"
            >
              Les scénarios
            </Link>
            <Link
              aria-current={path.startsWith("/le-createur") ? "page" : undefined}
              href="/le-createur/"
            >
              Le créateur
            </Link>
            <Link
              className="button outline small"
              aria-current={path === "/devis/" ? "page" : undefined}
              href="/devis/"
            >
              Votre événement <Arrow />
            </Link>
            <span className="language" aria-label="Version française">
              FR
            </span>
          </nav>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <Link className="brand" href="/">
            <Mark />
            <span>
              MURDER PARTY<small>AGENCY</small>
            </span>
          </Link>
          <p>
            Des secrets à partager.
            <br />
            Une soirée à vivre.
          </p>
          <div>
            <Link href="/scenarios/">Les scénarios</Link>
            <Link href="/le-createur/">Le créateur</Link>
            <Link href="/devis/">Demander un devis</Link>
            <Link href="/validation/">À propos de cette maquette</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>murderparty.agency · Nom de travail à valider</span>
          <span>Français · Version anglaise prévue ensuite</span>
        </div>
      </div>
    </footer>
  );
}
