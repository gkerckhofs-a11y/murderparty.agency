# murderparty.agency — Site publié sur Firebase Hosting

Site commercial Next.js 16.4.2 / TypeScript / React 19.2.4, indépendant des moteurs de jeu. Mise en ligne et configuration du domaine autorisées par l’utilisateur le 20 octobre 2026.

## Fonctionnement

Murder Parties exclusivement animées par les équipes, prix uniquement sur devis. Aucun paiement, achat immédiat ou réservation automatique. Français au lancement.

- SHOWBIZ, Meurtre au Château, Black Velvet : 15–40 participants, 3 h.
- The Bikers : 10–15 participants, 4 h, départ Hony (Esneux), vélos Uni MK au look de moto, location incluse dans le devis.
- Meurtre au Château : immersion médiévale dans un château, costumes médiévaux fournis et compris dans le prix.
- Déplacement des équipes, lieux partenaires et repas possibles selon le projet ; le départ de The Bikers reste Hony.
- Page À propos : principe de la soirée enquête, fiche reçue à l’avance, préparation et interprétation du personnage ; courte présentation de Guillaume Kerckhofs / Le Ludificateur.

## Parcours de devis

Le formulaire vérifie les champs, applique les capacités, prépare un récapitulatif et ouvre un e-mail prérempli vers `guillaume@leludificateur.be`. Le visiteur doit envoyer cet e-mail depuis sa messagerie. Un texte intégral à copier est disponible si le lien mailto ne fonctionne pas ou est trop long. Aucun faux message de réception.

Aucun stockage local, base de données, SDK Firebase, outil publicitaire ou mesure d’audience ajouté. Les données restent en mémoire jusqu’au transfert choisi vers la messagerie du visiteur. La page `/contact/` décrit ce fonctionnement. L’automatisation de la réception et du suivi des demandes reste une évolution distincte.

## Développement et export

`npm ci`, puis `npm run dev` pour le développement ou `npm run build` pour générer `out/`. `npm run typecheck` vérifie les types. Node.js 22 ou version compatible recommandé.

Routes : accueil, catalogue, quatre fiches, devis, À propos, guide soirée enquête, contact/confidentialité et 404. Depuis le 21 octobre 2026, `/a-propos/` remplace la page créateur ; Firebase redirige définitivement `/le-createur/` vers cette nouvelle page. L’ancre `#guillaume-kerckhofs` y est conservée. L’ancienne page publique `/validation/` est retirée ; son historique reste dans `docs/validation-maquette.tsx.txt`.

Métadonnées, URLs canoniques, robots.txt et sitemap ciblent `https://murderparty.agency`. Les illustrations d’ambiance conservent leur mention explicative.

Référencement : page `/soiree-enquete/`, métadonnées propres aux 10 pages publiques, données structurées et contrôles automatisés. Voir [l’audit et les étapes d’indexation](docs/REFERENCEMENT.md). `npm run verify:seo` vérifie l’export après compilation ; `node scripts/verify-seo.mjs https://murderparty-e4278.web.app` contrôle les pages publiées.

## Firebase Hosting

Projet et site cible : `murderparty-e4278`. Configuration dans `firebase.json` et `.firebaserc`, export statique `out/`. Aucun service App Hosting, Functions, Firestore ou Cloud Run à créer pour cette version.

Après authentification de la CLI sur le compte autorisé :

```sh
npm ci
npm run build
npx firebase-tools deploy --only hosting --project murderparty-e4278
```

Cette commande publie uniquement Hosting. Le projet existant est au forfait Blaze ; les dépassements des quotas Hosting peuvent être facturés. Aucun achat ni changement de forfait n’a été effectué.

État au 20 octobre 2026 : première publication réussie sur `https://murderparty-e4278.web.app/` via GitHub Actions, exécution `39464925264`, commit `40e64adaa8adc86b4446949a0976fef439f9415b`. Toutes les étapes ont réussi, y compris les contrôles des pages et de la réponse 404. La console Hosting confirme la version `accc38`, publiée à 19:19 (heure de Bruxelles).

Les domaines `murderparty.agency` et `www.murderparty.agency` ont été ajoutés à Firebase ; `www` redirige vers le domaine principal. La zone OVH a été mise à jour avec les valeurs exactes de l’assistant. Le résolveur Google confirme le nouvel A, le TXT de validation et le CNAME. La validation Firebase et le certificat HTTPS restent en attente de propagation ; le domaine personnalisé n’est pas encore déclaré opérationnel. Détails et sauvegarde de la zone : [mise en ligne](docs/MISE-EN-LIGNE.md).

## Vérifications et suite

- Compilation et typage de la version publique, génération statique, contrôle des liens et ressources locales.
- Retrait des mentions de maquette, de simulation, du nom provisoire et de la route de revue.
- Recette visuelle et interactive sur ordinateur/mobile encore à effectuer ; ne pas la confondre avec la compilation et les styles adaptatifs déjà implémentés.
- Vérifiés en production : publication, pages principales, route 404, JavaScript et feuille de style de l’accueil (HTTP 200). L’accès de publication par identité temporaire fonctionne.
- À finaliser après propagation : validation Firebase, HTTPS du domaine principal et redirection HTTPS de `www`. La recette visuelle en navigateur n’a pas pu être terminée : la protection des identifiants du navigateur a bloqué l’observation du site public, sans bloquer les consoles OVH/Firebase.
- Informations légales de l’activité à compléter avec les données confirmées de l’exploitant ; aucune adresse légale ou numéro d’entreprise inventé.
- Évolutions : envoi serveur et suivi des demandes avec anti-abus et politique de conservation validée, puis traduction anglaise.

Dépôt GitHub : `gkerckhofs-a11y/murderparty.agency`. Prévisualisation privée de travail gérée séparément par Sites ; `.openai/hosting.json` n’intervient pas dans le déploiement Firebase.

## Autorisation unique via GitHub

Le script `scripts/authorize-github-firebase.sh` prépare une délégation sans clé privée, limitée à ce dépôt, à `main` et au workflow de publication Hosting. Il est à exécuter une fois par le propriétaire dans Google Cloud Shell. [Procédure, droits et révocation](docs/DEPLOIEMENT-GITHUB.md).

Le workflow `.github/workflows/deploy-firebase.yml` est opérationnel. Une modification de `.github/deploy-request.json` par Codex lance la compilation, les contrôles et la publication Hosting. L’autorisation et la première publication ont été vérifiées en conditions réelles. Aucun changement DNS OVH n’est effectué par ce workflow ; la configuration initiale du domaine a été faite séparément.

## Sources et assets

- Brief de l’utilisateur et décisions du projet, 20 octobre 2026 ; ajout de deux offres, déplacement, lieux partenaires et repas.
- [Le Ludificateur — À propos](https://leludificateur.be/), consulté le 20 octobre 2026 : Guillaume Kerckhofs, parcours culture/tourisme/événementiel/jeux ; fonction de responsable du Tourisme de la Ville de Liège, 2013–2020. Biographie reformulée sans témoignages ni références clients. `public/images/guillaume-kerckhofs.webp` reprend le portrait publié à `https://leludificateur.be/wp-content/uploads/2026/07/ChatGPT-Image-1-juil.-2026-16_33_17-768x1024.png`, converti en WebP, sans modification de contenu. Crédit visible et lien vers le site source.
- [Meurtre au Château — Le Ludificateur](https://leludificateur.be/meurtre-au-chateau/), consulté le 20 octobre 2026 : enquête en personnages, secrets, objectifs et indices, immersion dans le château.
- [Sons of Misery — Le Ludificateur](https://leludificateur.be/sons-of-misery-balade-velo-murder-party/), consulté le 20 octobre 2026 : enquête itinérante à vélo inspirée des clubs de bikers. Titre commercial « The Bikers » demandé par l’utilisateur. Aucun récit de crime précis, durée, capacité ou prestation matériel inventé.
- [Murder Party Ride — 204 Adventures](https://204adventures.bike/murder-party-ride/), consulté le 20 octobre 2026 : vélos électriques fatbike au look de moto. Location incluse confirmée par l’utilisateur. La page source affiche un minimum de 8 et un prix public ; ne pas les reprendre : le brief actuel impose 10–15 participants et uniquement un devis.
- [Export statique Next.js](https://nextjs.org/docs/app/guides/static-exports), documentation consultée le 20 octobre 2026.
- [Coûts Firebase App Hosting](https://firebase.google.com/docs/app-hosting/costs), documentation consultée le 20 octobre 2026 : nécessite Blaze, services facturés au-delà des quotas gratuits.
- `public/images/salon-noir.webp` : illustration générée avec l’outil intégré de génération d’images, 20 octobre 2026 ; scène fictive, pas une photographie d’un événement réel. Prompt conservé dans `docs/asset-prompt.txt`. Conversion WebP pour le web.
- `public/images/chateau-medieval.webp`, `public/images/the-bikers.webp`, `public/images/black-velvet.webp` : fonds supplémentaires générés avec l’outil intégré le 20 octobre 2026, demandés par l’utilisateur. Illustrations conceptuelles, sans prétention de représenter un lieu, un événement ou un modèle de vélo fourni. Prompts exacts dans `docs/scenario-image-prompts.txt`. Conversion WebP, dimensions 960 × 1200 ; fonds partagés par les cartes et fiches, superposition sombre pour la lisibilité. Showbiz conserve son visuel.
- `public/images/the-bikers-unimk.webp` remplace le premier fond The Bikers en V0.4. Illustration générée par l’outil intégré à partir de la photo des vélos [204 Adventures](https://204adventures.bike/fatbike/) ; le modèle Uni MK utilisé est confirmé par l’utilisateur. Décor fictif, pas une photographie de Hony ni d’un événement. Photo de référence : `https://204adventures.bike/wp-content/uploads/2026/02/images-1024x683.jpg`. Prompt exact et références dans `docs/unimk-image-prompt.txt`.
- DM Sans : police auto-hébergée, paquet `@fontsource-variable/dm-sans` 5.3.0. Licence OFL fournie dans `public/fonts/OFL-DM-Sans.txt`. Aucun appel Google Fonts.

Ne pas ajouter de promesse commerciale, témoignage, capacité, inclusion ou collecte supplémentaire sans source confirmée.
