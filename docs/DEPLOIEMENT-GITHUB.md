# Autorisation unique de publication

Le propriétaire exécute `scripts/authorize-github-firebase.sh` dans Google Cloud Shell. Il vérifie le projet `murderparty-e4278` et son numéro `447999018941` avant toute modification. Le script est relançable ; en cas d'erreur, les opérations déjà réussies ne sont pas annulées.

Le script utilise le numéro numérique du projet pour les ressources WIF et attend jusqu'à cinq minutes lorsqu'une ressource créée retourne temporairement `NOT_FOUND`. Les autres erreurs ne sont pas masquées. Une réponse `ALREADY_EXISTS` permet la reprise ; les conditions restrictives du fournisseur sont réappliquées avant la délégation.

Il active les API d'identité, de projet, de clés API et de Firebase Hosting, crée le compte `murderparty-deployer`, le pool `murderparty-github` et le fournisseur `murderparty-main`. Aucun serveur applicatif, base de données, clé privée ou secret GitHub n'est créé.

## Périmètre des droits

- Compte technique : `roles/firebasehosting.admin`, `roles/serviceusage.apiKeysViewer`, `roles/serviceusage.serviceUsageConsumer` sur le seul projet `murderparty-e4278`. Le rôle Hosting permet aussi l'administration des sites et des domaines Hosting ; le workflow ne publie que le site prévu.
- Identité GitHub : `roles/iam.workloadIdentityUser` sur ce seul compte technique.
- Conditions obligatoires : dépôt numérique `1427055208`, propriétaire numérique `331737602`, branche `main`, workflow `gkerckhofs-a11y/murderparty.agency/.github/workflows/deploy-firebase.yml`, événement `push` ou `workflow_dispatch`.
- Aucun rôle Owner/Editor, aucun droit d'administration IAM du projet, aucun droit Firestore ou Functions. Le script ne retire pas d'éventuels droits antérieurs de ce compte technique.
- Toute personne pouvant modifier la branche `main` et ce workflow peut publier le site. Les pull requests et forks ne satisfont pas les conditions d'identité.

## Publication

Après le message `AUTORISATION MURDERPARTY CONFIGURÉE`, Codex peut demander une publication en modifiant `.github/deploy-request.json` sur `main`. Le workflow se lance aussi manuellement depuis GitHub Actions. Cette séparation permet de conserver des changements sans les publier immédiatement.

Le workflow installe les dépendances verrouillées, compile Next.js, contrôle TypeScript, s'authentifie avec l'action Google officielle et une identité temporaire, crée le site Hosting s'il n'existe pas, puis déploie seulement `out/`. Les fichiers d'authentification restent hors de `out/`, ne sont pas archivés et sont nettoyés par l'action Google. Les pages publiques et la réponse 404 sont ensuite contrôlées. Aucun envoi de devis n'est effectué par ces contrôles.

Au 20 octobre 2026, le script et le workflow sont préparés ; leur bon fonctionnement réel exige l'exécution par le propriétaire puis une première publication réussie. Aucun accès Google n'est considéré acquis avant cette vérification. La configuration DNS OVH est distincte.

## Révocation

```bash
gcloud iam workload-identity-pools providers update-oidc murderparty-main --workload-identity-pool=murderparty-github --location=global --project=murderparty-e4278 --disabled
```

Cette commande empêche l'émission de nouveaux jetons ; les jetons déjà émis restent utilisables jusqu'à leur expiration. Le site déjà publié reste en ligne.

## Sources officielles

Consultées le 20 octobre 2026 : [Google, action d'authentification GitHub](https://github.com/google-github-actions/auth), [Google Cloud, fédération des pipelines](https://docs.cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines), [Firebase, rôles par produit](https://firebase.google.com/docs/projects/iam/roles-predefined-product).
