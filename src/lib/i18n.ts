export type Locale = "fr" | "en";
const routes = [
  ["/", "/en/"], ["/scenarios/", "/en/scenarios/"],
  ["/a-propos/", "/en/about/"], ["/soiree-enquete/", "/en/murder-mystery-party/"],
  ["/devis/", "/en/quote/"], ["/contact/", "/en/contact/"],
] as const;
export function localizedPath(path: string, locale: Locale): string {
  const split = path.search(/[?#]/);
  const pathname = split < 0 ? path : path.slice(0, split);
  const suffix = split < 0 ? "" : path.slice(split);
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const pair = routes.find(([fr, en]) => fr === normalized || en === normalized);
  let result: string;
  if (pair) result = pair[locale === "en" ? 1 : 0];
  else if (/^\/(en\/)?scenarios\/[^/]+\/$/.test(normalized)) {
    const french = normalized.replace(/^\/en\//, "/");
    result = locale === "en" ? `/en${french}` : french;
  } else result = locale === "en" ? "/en/" : "/";
  const anchors = locale === "en"
    ? suffix.replace("#partenaires", "#partners").replace("#confidentialite", "#privacy")
    : suffix.replace("#partners", "#partenaires").replace("#privacy", "#confidentialite");
  return result + anchors;
}
