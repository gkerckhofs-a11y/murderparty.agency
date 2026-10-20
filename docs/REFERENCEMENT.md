# Référencement — audit et améliorations du 20 octobre 2026

## Constats

La version initiale disposait d’un export HTML statique, d’un sitemap, d’un robots.txt autorisant l’exploration et d’URLs canoniques. Les titres principaux et plusieurs titres de pages étaient surtout évocateurs ; certaines descriptions étaient héritées et identiques. Il manquait des données structurées et une explication détaillée de l’offre « soirée enquête / soirée mystère ».

## Améliorations

- Titres et descriptions distincts pour les 10 pages publiques ; mention de la marque et du sujet de chaque page.
- Accueil précisé autour de la murder party, de la soirée enquête et de la soirée mystère, pour les entreprises et les groupes privés.
- Nouvelle page `/soiree-enquete/` : fonctionnement, organisation, capacités, durées, choix du scénario, lieu, repas et questions pratiques. Liens depuis l’accueil, les fiches et le pied de page.
- Ciblage géographique factuel pour The Bikers : Hony, Esneux, près de Liège. Aucune promesse de couverture de toute la Belgique ni implantation fictive dans d’autres villes.
- Données structurées JSON-LD Organization et WebSite sur l’accueil ; BreadcrumbList associé à un fil d’Ariane visible sur le catalogue, les fiches et le guide.
- Métadonnées Open Graph et Twitter cohérentes avec la page et son illustration ; ces métadonnées servent au partage, sans promesse de gain de classement Google.
- Préchargement de l’image principale de l’accueil. Les images WebP et la police locale existaient déjà.
- Ajout du guide au sitemap, maintien des URLs canoniques sur `https://murderparty.agency/`.

Aucun avis, note, prix, adresse légale, volume de recherche, chiffre d’audience ou classement n’a été inventé. Aucun outil publicitaire ni mesure d’audience n’a été ajouté. Pas de balisage Event sans événement daté ni de LocalBusiness sans adresse confirmée.

## Vérifications

Publication réussie sur Firebase Hosting : [exécution GitHub Actions 39469005929](https://github.com/gkerckhofs-a11y/murderparty.agency/actions/runs/39469005929), commit `cc5f73a2a8362db673323b455e4125cdcc31e7ed`. Tous les contrôles avant et après déploiement sont passés, y compris ceux des 10 pages publiées. Le guide est accessible à `https://murderparty-e4278.web.app/soiree-enquete/` en attendant l’activation complète du domaine principal.

`npm run build`, `npm run typecheck` et `npm run verify:seo` ont réussi. Contrôle des liens internes de l’export et des alternatives des images effectué. Le script `verify-seo.mjs` contrôle les 10 pages du sitemap : statut HTTP en mode distant, absence de noindex, langue, titre/description uniques, un H1, URL canonique, métadonnées sociales et syntaxe JSON-LD. Il est exécuté dans GitHub Actions avant et après publication.

Ce contrôle n’est ni un score de classement, ni une validation par l’outil Google Rich Results Test. Aucun résultat Lighthouse, PageSpeed Insights ou Core Web Vitals réel n’est disponible. La recette visuelle du site public reste limitée par la protection des identifiants du navigateur de travail.

## Priorités restantes pour la découverte

1. Terminer l’activation du domaine principal. Lors du contrôle, le domaine renvoyait HTTP 503 depuis l’environnement de vérification. Firebase affichait d’abord une erreur ACME sur l’ancienne IP OVH, puis « Enregistrements pas encore détectés » après validation ; `www` était affiché « Connecté ». Les valeurs DNS attendues ont déjà été enregistrées et vérifiées lors de la mise en ligne. Ne pas modifier arbitrairement les DNS pendant leur propagation.
2. Dans Google Search Console, vérifier la propriété de `murderparty.agency`, soumettre `https://murderparty.agency/sitemap.xml`, inspecter l’accueil et demander son indexation une fois le domaine accessible. Aucune soumission n’est déclarée effectuée : l’ouverture de Search Console a été bloquée par la protection des identifiants du navigateur, y compris après ouverture d’un nouveau document.
3. Ajouter un lien éditorial depuis Le Ludificateur vers ce site, puis depuis les pages partenaires pertinentes avec leur accord. Aucun site tiers n’a été modifié pendant cet audit.
4. Suivre impressions, requêtes, clics et pages indexées dans Search Console ; adapter les contenus aux recherches réellement observées. Le choix des expressions de cette version repose sur la demande utilisateur et l’offre confirmée, pas sur une étude de volume ou une promesse de positionnement.

L’indexation et le classement sont distincts. Google précise que l’exploration peut prendre quelques jours à quelques semaines et qu’une demande ne garantit ni l’inclusion ni sa rapidité. Aucun délai de première position n’est promis.

## Références officielles

Google Search Central, consulté le 20 octobre 2026 :

- [Guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Demander une nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [BreadcrumbList](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
