# Envoi direct des demandes de devis

## État de préparation

Cette évolution est préparée séparément de la version publiée. La validation du destinataire chez FormSubmit et un contrôle d’acceptation réel doivent précéder sa mise en production. Le formulaire public conserve son fonctionnement par messagerie jusque-là. Une page de configuration non indexable, absente du menu et du sitemap, est disponible à `/activation-envoi/` pour que le propriétaire puisse lancer le test depuis son navigateur.

Le test automatisé du 21 octobre 2026 a reçu HTTP 403 / Cloudflare 1010, avec le motif « browser_signature_banned ». Aucun envoi ni activation n’est confirmé par ce test. Aucun contournement du blocage n’a été tenté.

## Fonctionnement prévu

- Destinataire fixe : `guillaume@leludificateur.be`, adresse professionnelle déjà utilisée sur le site.
- Bouton « Envoyer ma demande » sur le récapitulatif ; requête HTTPS POST vers l’interface AJAX de FormSubmit.
- Aucun mot de passe SMTP ni secret dans le navigateur. Aucune extension des droits du compte Firebase.
- E-mail du visiteur transmis dans le champ `email` prévu par FormSubmit pour permettre la réponse.
- Message de confirmation uniquement après réponse positive du service, sans promesse de livraison dans la boîte de réception.
- Refus HTTP, réponse incorrecte, activation demandée, interruption et expiration : message d’erreur, conservation des informations dans la page et possibilité d’utiliser sa messagerie ou de copier le texte. Aucun renvoi automatique.
- Bouton bloqué pendant l’envoi, garde contre les doubles clics, champ antispam. Aucune désactivation explicite de la protection reCAPTCHA du prestataire.
- Information de confidentialité adaptée : transmission à FormSubmit et conservation annoncée de 30 jours. Pas de stockage Firebase des demandes ni d’ajout de mesure d’audience.

## Activation et recette

1. Depuis `/activation-envoi/`, le propriétaire peut faire une demande d’activation/test technique vers le destinataire, pour `https://murderparty.agency/devis/`. La page ne collecte aucune donnée de client et ne permet pas de changer de destinataire.
2. Le propriétaire de la boîte doit confirmer le formulaire via le message d’activation FormSubmit. Ne jamais publier ni conserver le lien d’activation ou les identifiants privés de récupération des demandes dans Git.
3. Après confirmation du propriétaire, vérifier l’acceptation et la réception d’un message identifié comme test. Publier cette évolution seulement après ce contrôle ; ne pas annoncer une livraison sans preuve.
4. Garder le lien vers la messagerie comme solution de secours.

Contrôles locaux : `node --experimental-strip-types --test scripts/test-quote-send.mjs`, puis compilation, typage et vérification SEO. Les tests simulent le prestataire et n’envoient aucun e-mail.

Sources officielles consultées le 21 octobre 2026 : [AJAX](https://formsubmit.co/ajax-documentation), [options et conservation](https://formsubmit.co/documentation), [activation et aide](https://formsubmit.co/help), [confidentialité](https://formsubmit.co/privacy.pdf).
