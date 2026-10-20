import Link from "next/link";
export const metadata = { title: "Notes de validation" };
export default function Page() {
  return (
    <article className="wrap validation-page">
      <span className="eyebrow">MAQUETTE V0.2 · 20 OCTOBRE 2026</span>
      <h1>
        Ce qui est prêt.
        <br />
        <em>Ce qui reste à décider.</em>
      </h1>
      <p className="lead">
        Un support de validation de l’identité visuelle, des contenus et du
        parcours de demande de devis.
      </p>
      <section>
        <h2>Les décisions confirmées</h2>
        <ul>
          <li>
            Murder Parties événementielles exclusivement, animées par vos
            équipes.
          </li>
          <li>Marque dédiée ; tarifs uniquement sur devis sur mesure.</li>
          <li>
            Nos équipes se déplacent. Proposition de lieux partenaires et prise
            en charge du repas possibles.
          </li>
          <li>
            Ajout de Meurtre au Château et The Bikers au catalogue, confirmé le
            20 octobre 2026.
          </li>
          <li>Français au lancement, anglais prévu ensuite.</li>
          <li>
            Aucun achat immédiat, paiement en ligne ou réservation automatique
            en V1.
          </li>
          <li>
            Architecture cible : Next.js, TypeScript, Firebase et dépôt GitHub
            indépendant des moteurs de jeu.
          </li>
          <li>
            Domaine murderparty.agency acheté chez OVH. Aucune modification DNS
            autorisée à ce stade.
          </li>
        </ul>
      </section>
      <section>
        <h2>Les propositions à valider</h2>
        <ul>
          <li>
            Le nom de travail « Murder Party Agency », le monogramme et les
            accroches.
          </li>
          <li>
            Les nouvelles affiches conceptuelles de Meurtre au Château et The
            Bikers. La direction générale est conservée après votre retour
            positif.
          </li>
          <li>
            La sélection SHOWBIZ et Black Velvet reste identifiée comme
            provisoire. Meurtre au Château et The Bikers sont confirmés au
            catalogue.
          </li>
          <li>
            Les textes de présentation sont des propositions éditoriales sans
            révélation des solutions.
          </li>
          <li>
            Les durées, capacités, zones d’intervention, lieux précis, menus,
            inclusions et conditions pratiques restent à définir pour chaque
            devis.
          </li>
          <li>
            Les coordonnées professionnelles, l’identité de l’exploitant et les
            textes légaux restent à préciser.
          </li>
        </ul>
      </section>
      <section>
        <h2>Réalisé dans cette version</h2>
        <ul>
          <li>
            Accueil, catalogue filtrable, quatre fiches scénario et formulaire
            de devis en trois étapes.
          </li>
          <li>
            Menu mobile, liens entre pages, préselection du scénario, contrôles
            des champs et récapitulatif modifiable, avec choix du lieu et de la
            prise en charge du repas.
          </li>
          <li>
            Confirmation explicitement simulée ; aucun envoi d’e-mail, paiement,
            réservation, appel Firebase ni collecte de prospects.
          </li>
          <li>
            Pages françaises, contenu séparé du code d’interface, styles
            adaptatifs et balisage d’accessibilité.
          </li>
          <li>Consigne de non-indexation de la maquette.</li>
        </ul>
        <p>
          La mise en page mobile est implémentée. Le contrôle visuel interactif
          dans un navigateur reste à effectuer ; il n’a pas été réalisé dans cet
          environnement.
        </p>
      </section>
      <section>
        <h2>État des accès</h2>
        <dl className="quote-recap">
          <div>
            <dt>GitHub</dt>
            <dd>
              Dépôt privé gkerckhofs-a11y/murderparty.agency identifié et droits
              de lecture/écriture confirmés. Aucun dépôt de moteur modifié.
            </dd>
          </div>
          <div>
            <dt>Firebase</dt>
            <dd>
              Accès direct à la console confirmé. Projet murderparty-e4278 («
              murderparty »), forfait Blaze vérifié. Aucun service déployé ;
              accès CLI non connecté.
            </dd>
          </div>
          <div>
            <dt>OVH / DNS</dt>
            <dd>Aucun accès utilisé ; aucune modification effectuée.</dd>
          </div>
          <div>
            <dt>Maquette</dt>
            <dd>
              Environnement de présentation privé, séparé de l’hébergement
              Firebase prévu pour la production.
            </dd>
          </div>
        </dl>
      </section>
      <section>
        <h2>La suite du développement</h2>
        <ol className="roadmap">
          <li>
            <strong>Valider la maquette.</strong> Identité, textes, catalogue,
            parcours et rendu sur ordinateur et téléphone.
          </li>
          <li>
            <strong>Établir le socle dédié.</strong> Synchroniser le dépôt
            GitHub dédié ; configurer le déploiement du projet Firebase
            murderparty-e4278, déjà identifié en Blaze ; confirmer la
            configuration d’hébergement avant activation.
          </li>
          <li>
            <strong>Rendre le devis opérationnel.</strong> Validation côté
            serveur, protection contre les abus, réception des demandes et
            notifications testées ; règles d’accès et confidentialité définies.
          </li>
          <li>
            <strong>Préparer le lancement français.</strong> Contenus approuvés,
            coordonnées et textes légaux, référencement, accessibilité,
            performance et tests multi-écrans.
          </li>
          <li>
            <strong>Mettre en ligne.</strong> Validation finale, puis
            raccordement du domaine OVH après votre accord explicite pour les
            DNS et tout coût éventuel.
          </li>
          <li>
            <strong>Ajouter l’anglais.</strong> Traductions validées, pages
            dédiées et navigation bilingue.
          </li>
        </ol>
      </section>
      <section>
        <h2>Critères de validation</h2>
        <ul>
          <li>
            Les quatre parcours principaux sont accessibles depuis le menu et
            les appels à l’action.
          </li>
          <li>
            Chaque carte mène à sa propre fiche ; le choix est conservé dans le
            formulaire.
          </li>
          <li>
            Les filtres fonctionnent ; les étapes du devis conservent les
            données en avançant et en revenant.
          </li>
          <li>
            Les champs obligatoires et l’e-mail invalide bloquent la
            progression.
          </li>
          <li>
            Sur ordinateur et mobile : texte lisible, aucun débordement
            horizontal, navigation au clavier, focus visible et zones tactiles
            utilisables.
          </li>
          <li>
            Les contenus non confirmés restent identifiés ; aucun avis client,
            référence, chiffre commercial ou capacité n’est inventé.
          </li>
          <li>
            Le formulaire précise qu’il s’agit d’une simulation, sans annoncer
            un envoi réel.
          </li>
        </ul>
      </section>
      <section>
        <h2>Sources de contenu</h2>
        <p>
          Vos décisions dans ce projet et votre demande du 20 octobre 2026.
          Cadres narratifs SHOWBIZ et Black Velvet issus du contexte du projet
          Ludificateur. Les deux nouvelles offres, le déplacement, les lieux
          partenaires et la prise en charge du repas sont confirmés par votre
          demande du 20 octobre 2026.
        </p>
        <p>
          Présentations sources, Le Ludificateur, consultées le 20 octobre 2026
          :{" "}
          <a href="https://leludificateur.be/meurtre-au-chateau/">
            Meurtre au Château
          </a>{" "}
          et{" "}
          <a href="https://leludificateur.be/sons-of-misery-balade-velo-murder-party/">
            Sons of Misery
          </a>
          , renommé « The Bikers » à votre demande. Aucun témoignage ni capacité
          repris.
        </p>
        <p>
          Références techniques :{" "}
          <a href="https://nextjs.org/docs/app/guides/static-exports">
            documentation Next.js, export statique
          </a>{" "}
          et{" "}
          <a href="https://firebase.google.com/docs/app-hosting/costs">
            documentation Firebase, coûts App Hosting
          </a>{" "}
          (consultées le 20 octobre 2026).
        </p>
        <p>
          Firebase App Hosting requiert un forfait Blaze avec facturation à
          l’usage. Vous avez indiqué avoir créé le projet au forfait Blaze.
          Aucun service facturable supplémentaire n’est activé par cette
          maquette.
        </p>
      </section>
      <Link className="button primary" href="/">
        Retour à la maquette →
      </Link>
    </article>
  );
}
