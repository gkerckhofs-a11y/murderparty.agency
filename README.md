# murderparty.agency — Maquette V0.5

Maquette commerciale navigable du 20 octobre 2026. Next.js 16.4.2, TypeScript, React 19.2.4. Le site est indépendant des moteurs de jeu.

## Périmètre confirmé

- Exclusivement des Murder Parties événementielles animées par les équipes.
- Marque dédiée, tarifs uniquement sur devis sur mesure.
- Déplacement de nos équipes, proposition de lieux partenaires et prise en charge du repas possibles (confirmé par l’utilisateur le 20 octobre 2026).
- The Bikers : 10 à 15 participants inclus. SHOWBIZ, Meurtre au Château et Black Velvet : 15 à 40 participants inclus (confirmation utilisateur du 20 octobre 2026).
- Durée des enquêtes : 3 h pour SHOWBIZ, Meurtre au Château et Black Velvet ; 4 h pour The Bikers (confirmation utilisateur du 20 octobre 2026). Durées centralisées dans `src/content/fr.ts`, affichées sur les cartes, les fiches, le choix du scénario et le récapitulatif du devis.
- The Bikers : fatbikes électriques Uni MK au look de moto, location du vélo comprise dans le prix indiqué au devis (confirmation utilisateur du 20 octobre 2026).
- The Bikers : départ depuis Hony (Esneux), confirmé par l’utilisateur le 20 octobre 2026. Affiché sur la carte, la fiche, le formulaire et son récapitulatif ; les autres choix de lieu concernent les prestations complémentaires.
- Meurtre au Château : immersion médiévale exceptionnelle dans un château, costumes médiévaux fournis et compris dans le prix (confirmation utilisateur du 20 octobre 2026).
- Français au lancement ; anglais ensuite.
- Aucun achat immédiat, paiement ou réservation automatique en V1.
- Domaine OVH : aucune modification DNS dans ce livrable.

## Démarrage

Node.js 22 recommandé. Installer avec `npm ci`, démarrer avec `npm run dev`, construire avec `npm run build`. L’export statique est dans `out/`. `npm run typecheck` vérifie les types.

## Pages réalisées

- `/` : accueil, direction cinématographique sombre / ivoire / cuivre.
- `/scenarios/` : catalogue filtrable par univers.
- `/scenarios/showbiz/`, `/scenarios/meurtre-au-chateau/`, `/scenarios/the-bikers/`, `/scenarios/black-velvet/` : fiches conceptuelles, FAQ et choix transmis au devis.
- `/devis/` : trois étapes, validation HTML des champs, récapitulatif modifiable avec préférence de lieu et prise en charge du repas, confirmation de simulation et remise à zéro.
- `/le-createur/` : présentation de Guillaume Kerckhofs et du Ludificateur, portrait publié sur le site source, démarche et lien externe. Accessible dans le menu desktop/mobile et le pied de page.
- `/validation/` : décisions, contenus provisoires, accès, suite et critères de recette.
- Page 404 et métadonnées de non-indexation.

Les capacités sont centralisées dans `src/content/fr.ts`, affichées sur les cartes et fiches et appliquées au champ de participants du formulaire. Le nombre reste facultatif ; s’il est renseigné, il doit être entier et dans les bornes inclusives du scénario. Sans scénario choisi : 10 à 40, avec explication des capacités distinctes.

Le formulaire ne transmet rien. Son état reste en mémoire du composant React ; il n’utilise ni Firestore, ni e-mail, ni stockage local. Les champs ne sont pas des réservations. Les données de test sont perdues lorsque le formulaire est démonté ou rechargé.

## Contenus à valider

« Murder Party Agency » est un nom de travail. Nom, logo, slogans et textes restent à valider. La direction visuelle générale est conservée après le retour positif de l’utilisateur. Meurtre au Château et The Bikers sont ajoutés au catalogue à sa demande ; SHOWBIZ et Black Velvet restent signalés comme provisoires. Les nouvelles affiches sont des propositions graphiques. Aucune durée, capacité, référence client, statistique ou citation client n’est inventée. Aucune solution d’intrigue n’est exposée.

Le contenu français des scénarios est dans `src/content/fr.ts`. Les textes d’interface doivent encore être centralisés pour la version anglaise : le bilinguisme n’est pas implémenté.

## Accès et production

- GitHub : dépôt privé `gkerckhofs-a11y/murderparty.agency`, droits de lecture et écriture vérifiés le 20 octobre 2026.
- Firebase : accès direct à la console vérifié. Projet `murderparty-e4278` (« murderparty »), forfait Blaze confirmé visuellement le 20 octobre 2026. Aucun service déployé ; accès CLI non connecté.
- Présentation privée temporaire : https://murderparty-agency-maquette.swiftclove64.chatgpt.site
- La maquette statique ne remplace pas la cible de production Firebase. Le manifest `.openai/hosting.json` appartient à l’environnement de présentation et n’est pas requis pour le développement Next.js.
- Aucun DNS, compte de facturation ou dépôt de moteur n’est modifié.

## Validation effectuée et limites

Compilation Next.js et TypeScript, génération des routes statiques, contrôle des liens et des ressources locales. Styles prévus de 320 px à grands écrans, menu mobile, focus visible, lien d’évitement, labels de formulaire, messages de simulation.

Les tests interactifs et visuels dans un navigateur n’ont pas été exécutés : le contrôle navigateur prévu par l’environnement est indisponible. Ne pas confondre styles adaptatifs implémentés et recette mobile réelle. La revue doit encore vérifier le menu, les filtres, le retour entre étapes, les champs invalides, la préselection, la FAQ, les débordements, le contraste et le zoom 200 % sur les navigateurs cibles.

## Étapes suivantes

1. Finaliser identité et textes ; confirmer les fiches encore provisoires. Fournir formats, lieux précis, menus, zones d’intervention, autres inclusions et coordonnées.
2. Configurer l’accès de déploiement Firebase pour `murderparty-e4278` ; arrêter l’hébergement, la région et les limites de coûts avant activation. Aucun déploiement automatique n’est configuré.
3. Concevoir le traitement des demandes : validation serveur, anti-abus, réception fiable, notifications, gestion des erreurs et des doublons, droits d’accès et conservation.
4. Préparer les contenus légaux, le référencement, l’accessibilité et les contrôles de performance. Réaliser une recette multi-écrans.
5. Lancer le français après validation, avec accord explicite préalable pour DNS et dépenses.
6. Ajouter les traductions anglaises validées et les routes correspondantes.

## Sources et assets

- Brief de l’utilisateur et décisions du projet, 20 octobre 2026 ; ajout de deux offres, déplacement, lieux partenaires et repas.
- [Le Ludificateur — À propos](https://leludificateur.be/), consulté le 20 octobre 2026 : Guillaume Kerckhofs, parcours culture/tourisme/événementiel/jeux ; fonction de responsable du Tourisme de la Ville de Liège, 2013–2020. Biographie reformulée sans témoignages ni références clients. Rédaction à valider. `public/images/guillaume-kerckhofs.webp` reprend le portrait publié à `https://leludificateur.be/wp-content/uploads/2026/07/ChatGPT-Image-1-juil.-2026-16_33_17-768x1024.png`, converti en WebP, sans modification de contenu. Crédit visible et lien vers le site source.
- [Meurtre au Château — Le Ludificateur](https://leludificateur.be/meurtre-au-chateau/), consulté le 20 octobre 2026 : enquête en personnages, secrets, objectifs et indices, immersion dans le château.
- [Sons of Misery — Le Ludificateur](https://leludificateur.be/sons-of-misery-balade-velo-murder-party/), consulté le 20 octobre 2026 : enquête itinérante à vélo inspirée des clubs de bikers. Titre commercial « The Bikers » demandé par l’utilisateur. Aucun récit de crime précis, durée, capacité ou prestation matériel inventé.
- [Murder Party Ride — 204 Adventures](https://204adventures.bike/murder-party-ride/), consulté le 20 octobre 2026 : vélos électriques fatbike au look de moto. Location incluse confirmée par l’utilisateur. La page source affiche un minimum de 8 et un prix public ; ne pas les reprendre : le brief actuel impose 10–15 participants et uniquement un devis.
- [Export statique Next.js](https://nextjs.org/docs/app/guides/static-exports), documentation consultée le 20 octobre 2026.
- [Coûts Firebase App Hosting](https://firebase.google.com/docs/app-hosting/costs), documentation consultée le 20 octobre 2026 : nécessite Blaze, services facturés au-delà des quotas gratuits.
- `public/images/salon-noir.webp` : illustration générée avec l’outil intégré de génération d’images, 20 octobre 2026 ; scène fictive, pas une photographie d’un événement réel. Prompt conservé dans `docs/asset-prompt.txt`. Conversion WebP pour le web.
- `public/images/chateau-medieval.webp`, `public/images/the-bikers.webp`, `public/images/black-velvet.webp` : fonds supplémentaires générés avec l’outil intégré le 20 octobre 2026, demandés par l’utilisateur. Illustrations conceptuelles, sans prétention de représenter un lieu, un événement ou un modèle de vélo fourni. Prompts exacts dans `docs/scenario-image-prompts.txt`. Conversion WebP, dimensions 960 × 1200 ; fonds partagés par les cartes et fiches, superposition sombre pour la lisibilité. Showbiz conserve son visuel.
- `public/images/the-bikers-unimk.webp` remplace le premier fond The Bikers en V0.4. Illustration générée par l’outil intégré à partir de la photo des vélos [204 Adventures](https://204adventures.bike/fatbike/) ; le modèle Uni MK utilisé est confirmé par l’utilisateur. Décor fictif, pas une photographie de Hony ni d’un événement. Photo de référence : `https://204adventures.bike/wp-content/uploads/2026/02/images-1024x683.jpg`. Prompt exact et références dans `docs/unimk-image-prompt.txt`.
- DM Sans : police auto-hébergée, paquet `@fontsource-variable/dm-sans` 5.3.0. Licence OFL fournie dans `public/fonts/OFL-DM-Sans.txt`. Aucun appel Google Fonts.

Ne pas activer de collecte réelle ni retirer les mentions provisoires des contenus non confirmés sans validation.
