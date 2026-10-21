"use client";
import { useState } from "react";
import { scenarios } from "@/content/fr";
import { ScenarioCard } from "./ui";
export default function Catalogue() {
  const [filter, setFilter] = useState("Tous les univers");
  const filters = ["Tous les univers", ...new Set(scenarios.flatMap((s) => [s.universe, ...(s.keywords || [])]))];
  const visible = scenarios.filter(
    (s) => filter === filters[0] || s.universe === filter || s.keywords?.includes(filter),
  );
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filtrer les univers et les mots-clés">
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
        {visible.length} {visible.length === 1 ? "expérience" : "expériences"}
      </p>
      <div className="cards">
        {visible.map((s) => (
          <ScenarioCard
            key={s.slug}
            scenario={s}
            index={scenarios.indexOf(s)}
          />
        ))}
      </div>
    </>
  );
}
