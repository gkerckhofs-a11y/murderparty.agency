import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const canonicalOrigin = 'https://murderparty.agency';
// With an origin argument, check the published HTML, not only the source/export.
const origin = process.argv[2];
async function read(path) {
  if (origin) {
    const response = await fetch(`${origin}${path}`, { signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
    assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${path}: X-Robots-Tag noindex`);
    return response.text();
  }
  const file = path.endsWith('/') ? `${path}index.html` : path;
  return readFile(`out${file}`, 'utf8');
}
function decode(text) {
  return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'g'))].map(([raw]) =>
    Object.fromEntries([...raw.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, name, value]) => [name, decode(value)])));
}
const sitemap = await read('/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => decode(url));
assert(urls.includes(`${canonicalOrigin}/soiree-enquete/`), 'Guide missing from sitemap');
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const robots = await read('/robots.txt');
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), 'Wrong sitemap in robots.txt');
assert(!/^Disallow:\s*\/\s*$/m.test(robots), 'Crawling blocked');
const titles = new Set();
const descriptions = new Set();
for (const url of urls) {
  assert(url.startsWith(`${canonicalOrigin}/`) && url.endsWith('/'), `Noncanonical sitemap URL: ${url}`);
  const path = new URL(url).pathname;
  const html = await read(path);
  assert.match(html, /<html[^>]*lang="fr"/, `${path}: language missing`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: expected one H1`);
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
  assert(title && !titles.has(title), `${path}: missing or duplicate title`);
  assert(title.includes('Murder Party Agency'), `${path}: brand missing from title`);
  titles.add(title);
  const metas = tags(html, 'meta');
  const description = metas.find(m => m.name === 'description')?.content;
  assert(description && !descriptions.has(description), `${path}: missing or duplicate description`);
  descriptions.add(description);
  assert(!metas.some(m => /^(robots|googlebot)$/.test(m.name || '') && /noindex/i.test(m.content || '')), `${path}: noindex`);
  assert.equal(tags(html, 'link').find(l => l.rel === 'canonical')?.href, url, `${path}: canonical`);
  assert.equal(metas.find(m => m.property === 'og:url')?.content, url, `${path}: og:url`);
  assert.equal(metas.find(m => m.property === 'og:description')?.content, description, `${path}: social description`);
  assert(metas.some(m => m.property === 'og:image' && m.content.startsWith(canonicalOrigin)), `${path}: social image`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(json);
    assert.equal(data['@context'], 'https://schema.org');
    if (data['@type'] === 'BreadcrumbList') {
      assert.equal(data.itemListElement.at(-1).item, url, `${path}: breadcrumb destination`);
      data.itemListElement.forEach((item, index) => assert.equal(item.position, index + 1));
    }
  }
  if (path === '/') {
    assert(html.includes('"@type":"Organization"') && html.includes('"@type":"WebSite"'), 'Missing organization/site data');
    assert(html.includes('soirée enquête') && html.includes('soirée mystère'), 'Missing visible search topics');
  }
  console.log(`SEO OK ${path}`);
}
console.log(`${urls.length} pages: unique titles/descriptions, canonicals, H1, robots, social metadata and JSON-LD verified.`);
