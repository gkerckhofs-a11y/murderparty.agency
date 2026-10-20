const origin = 'https://murderparty-e4278.web.app';
for (const path of ['/', '/devis/', '/le-createur/', '/scenarios/the-bikers/', '/scenarios/meurtre-au-chateau/', '/scenarios/black-velvet/', '/scenarios/showbiz/']) {
  const response = await fetch(`${origin}${path}`, { signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  if (!response.ok || !html.includes('Murder Party Agency')) {
    throw new Error(`Page non conforme : ${path} (HTTP ${response.status})`);
  }
  console.log(`OK ${path}`);
}
const missing = await fetch(`${origin}/verification-page-inexistante-862947/`, { signal: AbortSignal.timeout(20000) });
if (missing.status !== 404) throw new Error(`La page inconnue devrait renvoyer 404, reçu ${missing.status}`);
console.log(`Publication vérifiée : ${origin}`);
