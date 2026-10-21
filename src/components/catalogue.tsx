"use client";
import { useState } from "react";
import { scenarios as frenchScenarios } from "@/content/fr";
import { scenarios as englishScenarios } from "@/content/en";
import type { Locale } from "@/lib/i18n";
import { ScenarioCard } from "./ui";
export default function Catalogue({ locale = "fr" }: { locale?: Locale }) {
  const scenarios = locale === "en" ? englishScenarios : frenchScenarios;
  const all = locale === "en" ? "All themes" : "Tous les univers";
  const [filter, setFilter] = useState(all);
  const filters = [all, ...new Set(scenarios.flatMap((s) => [s.universe, ...(s.keywords || [])]))];
  const visible = scenarios.filter(
    (s) => filter === filters[0] || s.universe === filter || s.keywords?.includes(filter),
  );
  return (
    <>
      <div className="filter-row" role="group" aria-label={locale === "en" ? "Filter themes and keywords" : "Filtrer les univers et les mots-clés"}>
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={f === filter}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="results-count" role="status">
        {visible.length} {locale === "en" ? (visible.length === 1 ? "experience" : "experiences") : (visible.length === 1 ? "expérience" : "expériences")}
      </p>
      <div className="cards">
        {visible.map((s) => (
          <ScenarioCard
            key={s.slug}
            scenario={s}
            locale={locale}
            index={scenarios.indexOf(s)}
          />
        ))}
      </div>
    </>
  );
}
