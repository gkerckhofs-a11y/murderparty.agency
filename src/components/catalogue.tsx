"use client";
import { useState } from "react";
import { scenarios } from "@/content/fr";
import { ScenarioCard } from "./ui";
export default function Catalogue() {
  const [filter, setFilter] = useState("Tous les univers");
  const filters = ["Tous les univers", ...scenarios.map((s) => s.universe)];
  const visible = scenarios.filter(
    (s) => filter === filters[0] || s.universe === filter,
  );
  return (
    <>
      <div className="filter-row" role="group" aria-label="Filtrer les univers">
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
        {visible.length}{" "}
        {visible.length === 1 ? "univers pressenti" : "univers pressentis"}
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
