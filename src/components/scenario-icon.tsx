import type { ReactNode } from "react";

const symbols: Record<string, ReactNode> = {
  showbiz: <>
    <path d="M12 27h40v24H12zM12 27l-3-11 39-9 3 11z" />
    <path d="m19 14 8 9m5-12 8 9M12 35h40M21 43h10" />
  </>,
  chateau: <>
    <path d="M12 53V22h9v8h9V18h-6V9h7v6h5V9h7v9h-6v12h9v-8h7v31H12Z" />
    <path d="M27 53V43a6 6 0 0 1 12 0v10M17 37v6m31-6v6M33 23v7" />
  </>,
  bikers: <>
    <circle cx="15" cy="44" r="11" strokeWidth="4" />
    <circle cx="49" cy="44" r="11" strokeWidth="4" />
    <path d="m15 44 11-20 11 20H15l24-16 10 16-8-27h9M22 23h11M37 44l-3 5h7" />
  </>,
  velvet: <>
    <path d="m17 37 5-23 10 5 10-5 5 23M18 32q14 7 28 0" />
    <path d="M17 37C4 40 5 47 32 49c27-2 28-9 15-12-9 5-21 5-30 0Z" />
  </>,
  disco: <>
    <path d="M32 3v9" />
    <circle cx="32" cy="35" r="21" />
    <ellipse cx="32" cy="35" rx="9" ry="21" />
    <path d="M32 14v42M13 27h38M11 36h42M14 45h36M6 13v8m-4-4h8M56 5v8m-4-4h8M57 51v8m-4-4h8" />
  </>,
  london: <>
    <circle cx="26" cy="25" r="17" />
    <path d="M16 23a10 10 0 0 1 10-8M38 37l6 6m-2-2 15 15-4 4-15-15" />
  </>,
  espions: <>
    <path d="M10 17h44L32 39 10 17Zm22 22v17m-10 0h20M18 25h28M41 27 53 9" />
    <ellipse cx="43" cy="24" rx="4" ry="3" transform="rotate(-52 43 24)" />
  </>,
  spy: <>
    <path d="M8 21V12h18l6 7h24v35H8V21Zm0 7h48" />
    <rect x="25" y="36" width="14" height="12" rx="2" />
    <path d="M28 36v-3a4 4 0 0 1 8 0v3m-4 5v3" />
  </>,
};

export function ScenarioIcon({ theme }: { theme: string }) {
  const symbol = symbols[theme];
  if (!symbol) return null;
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true" focusable="false" data-theme={theme}>
    {symbol}
  </svg>;
}
