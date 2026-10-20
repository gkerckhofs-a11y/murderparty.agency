# murderparty.agency — Maquette V0.1

Maquette commerciale navigable du 20 octobre 2026. Next.js 16.4.2, TypeScript, React 19.2.4. Le site est indépendant des moteurs de jeu.

## Périmètre confirmé

- Exclusivement des Murder Parties événementielles animées par les équipes.
- Marque dédiée, tarifs uniquement sur devis.
- Français au lancement ; anglais ensuite.
- Aucun achat immédiat, paiement ou réservation automatique en V1.
- Domaine OVH : aucune modification DNS dans ce livrable.

## Démarrage

Node.js 22 recommandé. Installer avec `npm ci`, démarrer avec `npm run dev`, construire avec `npm run build`. L’export statique est dans `out/`. `npm run typecheck` vérifie les types.

## Pages réalisées

- `/` : accueil, direction cinématographique sombre / ivoire / cuivre.
- `/scenarios/` : catalogue filtrable par univers.
- `/scenarios/showbiz/`, `/scenarios/hot-spring/`, `/scenarios/black-velvet/` : fiches conceptuelles, FAQ et choix transmis au devis.
- `/devis/` : trois étapes, validation HTML des champs, récapitulatif modifiable, confirmation de simulation et remise à zéro.
- `/validation/` : décisions, contenus provisoires, accès, suite et critères de recette.
- Page 404 et métadonnées de non-indexation.

Le formulaire ne transmet rien. Son état reste en mémoire du composant React ; il n’utilise ni Firestore, ni e-mail, ni stockage local. Les champs ne sont pas des réservations. Les données de test sont perdues lorsque le formulaire est démonté ou rechargé.

## Contenus à valider

« Murder Party Agency » est un nom de travail. Nom, logo, slogans, textes, affiches et sélection de scénarios sont provisoires. Les cadres narratifs viennent du projet Ludificateur ; leur présence commerciale au catalogue n’est pas confirmée. Aucune durée, capacité, référence client, statistique ou citation client n’est inventée. Aucune solution d’intrigue n’est exposée.

Le contenu français des scénarios est dans `src/content/fr.ts`. Les textes d’interface doivent encore être centralisés pour la version anglaise : le bilinguisme n’est pas implémenté.

## Accès et production

- GitHub : dépôt privé `gkerckhofs-a11y/murderparty.agency`, droits de lecture et écriture vérifiés le 20 octobre 2026.
- Firebase : projet créé en Blaze d’après la confirmation de l’utilisateur, identifiant et accès technique non encore vérifiés. Aucun service Firebase déployé ni configuration de projet inventée.
- Présentation privée temporaire : https://murderparty-agency-maquette.swiftclove64.chatgpt.site
- La maquette statique ne remplace pas la cible de production Firebase. Le manifest `.openai/hosting.json` appartient à l’environnement de présentation et n’est pas requis pour le développement Next.js.
- Aucun DNS, compte de facturation ou dépôt de moteur n’est modifié.

## Validation effectuée et limites

Compilation Next.js et TypeScript, génération des routes statiques, contrôle des liens et des ressources locales. Styles prévus de 320 px à grands écrans, menu mobile, focus visible, lien d’évitement, labels de formulaire, messages de simulation.

Les tests interactifs et visuels dans un navigateur n’ont pas été exécutés : le contrôle navigateur prévu par l’environnement est indisponible. Ne pas confondre styles adaptatifs implémentés et recette mobile réelle. La revue doit encore vérifier le menu, les filtres, le retour entre étapes, les champs invalides, la préselection, la FAQ, les débordements, le contraste et le zoom 200 % sur les navigateurs cibles.

## Étapes suivantes

1. Valider identité, mise en page, catalogue et textes. Fournir formats, capacités, durées, lieux, zones d’intervention, inclusions et coordonnées.
2. Vérifier l’identifiant et l’accès Firebase ; arrêter l’hébergement, la région et les limites de coûts avant activation. Aucun déploiement automatique n’est configuré.
3. Concevoir le traitement des demandes : validation serveur, anti-abus, réception fiable, notifications, gestion des erreurs et des doublons, droits d’accès et conservation.
4. Préparer les contenus légaux, le référencement, l’accessibilité et les contrôles de performance. Réaliser une recette multi-écrans.
5. Lancer le français après validation, avec accord explicite préalable pour DNS et dépenses.
6. Ajouter les traductions anglaises validées et les routes correspondantes.

## Sources et assets

- Brief de l’utilisateur et décisions du projet, 20 octobre 2026.
- [Export statique Next.js](https://nextjs.org/docs/app/guides/static-exports), documentation consultée le 20 octobre 2026.
- [Coûts Firebase App Hosting](https://firebase.google.com/docs/app-hosting/costs), documentation consultée le 20 octobre 2026 : nécessite Blaze, services facturés au-delà des quotas gratuits.
- `public/images/salon-noir.webp` : illustration générée avec l’outil intégré de génération d’images, 20 octobre 2026 ; scène fictive, pas une photographie d’un événement réel. Prompt conservé dans `docs/asset-prompt.txt`. Conversion WebP pour le web.
- DM Sans : police auto-hébergée, paquet `@fontsource-variable/dm-sans` 5.3.0. Licence OFL fournie dans `public/fonts/OFL-DM-Sans.txt`. Aucun appel Google Fonts.

Ne pas activer de collecte réelle, publier le catalogue comme confirmé ou retirer les mentions provisoires sans validation.
