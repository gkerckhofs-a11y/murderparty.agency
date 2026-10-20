# Référencement — audit et améliorations du 20 octobre 2026

## Constats

La version initiale disposait d’un export HTML statique, d’un sitemap, d’un robots.txt autorisant l’exploration et d’URLs canoniques. Les titres principaux et plusieurs titres de pages étaient surtout évocateurs ; certaines descriptions étaient héritées et identiques. Il manquait des données structurées et une explication détaillée de l’offre « soirée enquête / soirée mystère ».

## Améliorations

- Titres et descriptions distincts pour les 10 pages publiques ; mention de la marque et du sujet de chaque page.
- Accueil précisé autour de la murder party, de la soirée enquête et de la soirée mystère, pour les entreprises et les groupes privés.
- Nouvelle page `/soiree-enquete/` : fonctionnement, organisation, capacités, durées, choix du scénario, lieu, repas et questions pratiques. Liens depuis l’accueil, les fiches et le pied de page.
- Ciblage commercial retenu avec l’accord de l’utilisateur le 20 octobre : Wallonie et Bruxelles, avec mise en avant de Liège. Présent dans les métadonnées de l’accueil et du guide, les textes d’accueil, le catalogue et le devis. Le lieu et les déplacements restent à confirmer sur devis selon le scénario. The Bikers conserve son départ fixe à Hony, Esneux, près de Liège ; Meurtre au Château nécessite un château. Aucune implantation dans une autre ville n’est revendiquée et aucune page locale répétitive n’a été créée.
- Données structurées JSON-LD Organization et WebSite sur l’accueil ; BreadcrumbList associé à un fil d’Ariane visible sur le catalogue, les fiches et le guide.
- Métadonnées Open Graph et Twitter cohérentes avec la page et son illustration ; ces métadonnées servent au partage, sans promesse de gain de classement Google.
- Préchargement de l’image principale de l’accueil. Les images WebP et la police locale existaient déjà.
- Ajout du guide au sitemap, maintien des URLs canoniques sur `https://murderparty.agency/`.

Aucun avis, note, prix, adresse légale, volume de recherche, chiffre d’audience ou classement n’a été inventé. Aucun outil publicitaire ni mesure d’audience n’a été ajouté. Pas de balisage Event sans événement daté ni de LocalBusiness sans adresse confirmée.

## Vérifications

Publication réussie sur Firebase Hosting : [exécution GitHub Actions 39469005929](https://github.com/gkerckhofs-a11y/murderparty.agency/actions/runs/39469005929), commit `cc5f73a2a8362db673323b455e4125cdcc31e7ed`. Tous les contrôles avant et après déploiement sont passés, y compris ceux des 10 pages publiées. Le domaine principal est désormais accessible en HTTPS ; `www` redirige vers `https://murderparty.agency/` (contrôle direct du 20 octobre 2026).

`npm run build`, `npm run typecheck` et `npm run verify:seo` ont réussi. Contrôle des liens internes de l’export et des alternatives des images effectué. Le script `verify-seo.mjs` contrôle les 10 pages du sitemap : statut HTTP en mode distant, absence de noindex, langue, titre/description uniques, un H1, URL canonique, métadonnées sociales et syntaxe JSON-LD. Il est exécuté dans GitHub Actions avant et après publication.

Ce contrôle n’est ni un score de classement, ni une validation par l’outil Google Rich Results Test. Aucun résultat Lighthouse, PageSpeed Insights ou Core Web Vitals réel n’est disponible. La recette visuelle du site public reste limitée par la protection des identifiants du navigateur de travail.

## Domaine et Google Search Console — configuration terminée le 20 octobre 2026

- Le domaine principal répond en HTTPS (HTTP 200), `www` redirige vers celui-ci, et `robots.txt` ainsi que `sitemap.xml` sont accessibles. Les DNS publics pointent vers Firebase.
- Propriété **préfixe d’URL** `https://murderparty.agency/` validée par Google via une balise HTML. La validation DNS d’une propriété « domaine » n’a pas été menée à terme, car OVH demandait une nouvelle connexion. Aucun changement DNS n’a été effectué pendant cette configuration.
- Balise permanente `google-site-verification` ajoutée via `metadata.verification.google` dans `src/app/layout.tsx`. La conserver pour maintenir la validation.
- Déploiement de cette balise : [GitHub Actions 39483011995](https://github.com/gkerckhofs-a11y/murderparty.agency/actions/runs/39483011995), commit `42fa90472b8c93f1ec3c699f5122c969721edc35`, terminé avec succès. Compilation, types et contrôles SEO avant/après publication réussis.
- Sitemap `https://murderparty.agency/sitemap.xml` envoyé et lu par Google le 20 octobre 2026 : état **« Opération effectuée »**, **10 pages découvertes** et 0 vidéo.
- Accueil inspecté : **« Détectée, actuellement non indexée »** au moment du contrôle. Demande d’indexation acceptée ; Google confirme l’ajout à sa file d’attente d’exploration prioritaire. Une demande acceptée ne signifie pas que la page est déjà indexée.
- Les rapports de la nouvelle propriété sont en cours de traitement. Aucun classement ni chiffre de trafic n’est encore établi pour ce site.

[Ouvrir le rapport Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Fmurderparty.agency%2F)

## Priorités restantes pour la découverte

1. Suivre l’indexation, puis les impressions, requêtes et clics dans Search Console. Adapter les contenus aux recherches réellement observées. Le choix des expressions de cette version repose sur la demande utilisateur et l’offre confirmée, pas sur une étude de volume ni une promesse de positionnement.
2. Ajouter un lien éditorial depuis Le Ludificateur vers ce site, puis depuis les pages partenaires pertinentes avec leur accord. Aucun site tiers n’a été modifié pendant cette configuration.

L’indexation et le classement sont distincts. Google précise que l’exploration peut prendre quelques jours à quelques semaines et qu’une demande ne garantit ni l’inclusion ni sa rapidité. Aucun délai de première position n’est promis.

## Références officielles

Google Search Central, consulté le 20 octobre 2026 :

- [Guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
