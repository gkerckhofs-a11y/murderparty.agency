const origin = 'https://murderparty-e4278.web.app';
for (const path of ['/', '/soiree-enquete/', '/scenarios/', '/contact/', '/devis/', '/a-propos/', '/scenarios/the-bikers/', '/scenarios/meurtre-au-chateau/', '/scenarios/black-velvet/', '/scenarios/showbiz/']) {
  const response = await fetch(`${origin}${path}`, { signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  if (!response.ok || !html.includes('Murder Party Agency')) {
    throw new Error(`Page non conforme : ${path} (HTTP ${response.status})`);
  }
  console.log(`OK ${path}`);
}
for (const path of ['/le-createur', '/le-createur/']) {
  const response = await fetch(`${origin}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
  const destination = new URL(response.headers.get('location') || '/', origin);
  if (response.status !== 301 || destination.href !== `${origin}/a-propos/`) {
    throw new Error(`Redirection incorrecte : ${path} (HTTP ${response.status}, ${destination.href})`);
  }
  console.log(`REDIRECT OK ${path} → /a-propos/`);
}
const missing = await fetch(`${origin}/verification-page-inexistante-862947/`, { signal: AbortSignal.timeout(20000) });
if (missing.status !== 404) throw new Error(`La page inconnue devrait renvoyer 404, reçu ${missing.status}`);
console.log(`Publication vérifiée : ${origin}`);
