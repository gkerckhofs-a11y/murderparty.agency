# Mise en ligne du 20 octobre 2026

Publication Firebase Hosting réussie, confirmée dans GitHub Actions et la console Firebase. Version Hosting `accc38`, publiée à 19:19 (Europe/Brussels) par `murderparty-deployer@murderparty-e4278.iam.gserviceaccount.com`.

- Site disponible : https://murderparty-e4278.web.app/
- Exécution : https://github.com/gkerckhofs-a11y/murderparty.agency/actions/runs/39464925264
- Commit publié : `40e64adaa8adc86b4446949a0976fef439f9415b`.
- Contrôles réussis : compilation, TypeScript, authentification WIF, publication, pages principales et 404 ; ressources JavaScript et CSS de l’accueil accessibles en HTTP 200.

## Domaine et DNS

Dans Firebase : domaine principal `murderparty.agency` et domaine `www.murderparty.agency` configuré pour rediriger vers `murderparty.agency`.

Valeurs demandées par l’assistant Firebase et enregistrées chez OVH :

| Nom | Type | Valeur |
| --- | --- | --- |
| murderparty.agency | A | 199.36.158.100 |
| murderparty.agency | TXT | hosting-site=murderparty-e4278 |
| www.murderparty.agency | CNAME | murderparty-e4278.web.app. |

Les deux anciens A `213.186.33.5` et les TXT de parking OVH (`1|www.murderparty.agency`, `3|welcome`) ont été remplacés. NS, trois MX, SPF, sous-domaine ftp et TTL 3600 ont été conservés. DNSSEC n’a pas été modifié. La zone initiale est conservée dans `dns-before-firebase-2026-10-20.zone`.

Le résolveur public Google renvoie les trois nouvelles valeurs attendues. À la dernière vérification, Firebase utilisait encore l’ancienne IP pour le défi ACME et affichait « Nécessite une configuration ». La propagation et l’émission du certificat restent donc en attente ; HTTPS et la redirection du domaine personnalisé ne sont pas encore confirmés. Les assistants OVH et Firebase annoncent un délai pouvant atteindre 24 heures.

Après propagation, vérifier dans Hosting que les deux domaines sont connectés, puis contrôler HTTPS sur le domaine principal, la redirection `www`, une page interne et une URL inexistante. Ne pas relancer le script d’autorisation pour cette vérification.

## Limites de recette

La protection des identifiants du navigateur de travail a empêché l’observation du site public malgré l’ouverture d’un nouveau document. Les consoles Firebase et OVH sont restées accessibles ; la recette visuelle et interactive ordinateur/mobile n’est pas considérée terminée. Les vérifications HTTP et du déploiement ont bien été effectuées.

Le formulaire de devis prépare un e-mail que le visiteur doit envoyer lui-même. Il ne stocke ni ne transmet automatiquement les demandes à un serveur.
