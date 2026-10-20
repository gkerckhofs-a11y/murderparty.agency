#!/usr/bin/env bash
# À exécuter une seule fois dans Google Cloud Shell avec le compte propriétaire.
# Autorise GitHub Actions à publier Hosting. Aucune clé privée créée.
set -euo pipefail
trap 'printf "\nÉCHEC ligne %s : autorisation incomplète. Corriger l’erreur puis relancer ce script.\n" "$LINENO" >&2' ERR

readonly PROJECT_ID='murderparty-e4278'
readonly PROJECT_NUMBER='447999018941'
readonly REPOSITORY='gkerckhofs-a11y/murderparty.agency'
readonly REPOSITORY_ID='1427055208'
readonly OWNER_ID='331737602'
readonly POOL='murderparty-github'
readonly PROVIDER='murderparty-main'
readonly ACCOUNT='murderparty-deployer'
readonly DEPLOYER="${ACCOUNT}@${PROJECT_ID}.iam.gserviceaccount.com"

command -v gcloud >/dev/null || { echo 'Exécuter ce script dans Google Cloud Shell.'; exit 1; }
active_account="$(gcloud auth list --filter='status:ACTIVE' --format='value(account)')"
[[ -n "$active_account" ]] || { echo 'Aucun compte Google actif dans Cloud Shell.'; exit 1; }
actual_number="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')"
[[ "$actual_number" == "$PROJECT_NUMBER" ]] || { echo 'Numéro de projet inattendu : arrêt sans modification.'; exit 1; }

setup_errors="$(mktemp -d)"
trap 'rm -rf -- "$setup_errors"' EXIT

# Google documente jusqu'à cinq minutes de propagation IAM/WIF.
# Seul NOT_FOUND est réessayé : une erreur de permission reste bloquante.
wait_for_resource() {
  local attempt output status
  for attempt in {1..31}; do
    if output="$(gcloud "$@" 2>"$setup_errors/read.log")"; then
      printf '%s\n' "$output"
      return 0
    else
      status=$?
    fi
    if ! grep -q 'NOT_FOUND' "$setup_errors/read.log" || [[ "$attempt" == 31 ]]; then
      cat "$setup_errors/read.log" >&2
      return "$status"
    fi
    printf 'Ressource en cours de propagation : nouvelle vérification dans 10 s (%s/30).\n' "$attempt" >&2
    sleep 10
  done
}

# Lors d'une reprise, une ressource créée mais pas encore lisible peut déjà exister.
create_or_reuse() {
  local status
  if gcloud "$@" 2>"$setup_errors/create.log"; then
    cat "$setup_errors/create.log" >&2
    return 0
  else
    status=$?
  fi
  if grep -q 'ALREADY_EXISTS' "$setup_errors/create.log"; then
    echo 'Ressource déjà créée : reprise de la configuration.' >&2
    return 0
  fi
  cat "$setup_errors/create.log" >&2
  return "$status"
}

printf '\nProjet : %s (%s)\nDépôt : %s\nCompte Google : %s\n' "$PROJECT_ID" "$PROJECT_NUMBER" "$REPOSITORY" "$active_account"
cat <<'NOTICE'
Autorisation de publication Firebase Hosting depuis la branche main du dépôt indiqué.
Création d’un compte technique et d’une fédération GitHub avec jetons temporaires.
Droits : administration Hosting, lecture des clés API et utilisation des API du projet.
Aucun rôle Owner/Editor, aucune permission Firestore/Functions, aucun accès OVH.
Ce script ne publie pas encore le site et ne modifie pas les DNS.
NOTICE

gcloud services enable iam.googleapis.com iamcredentials.googleapis.com \
  sts.googleapis.com cloudresourcemanager.googleapis.com serviceusage.googleapis.com \
  firebase.googleapis.com firebasehosting.googleapis.com apikeys.googleapis.com \
  --project="$PROJECT_ID" --quiet

if ! gcloud iam service-accounts describe "$DEPLOYER" --project="$PROJECT_ID" >/dev/null 2>&1; then
  create_or_reuse iam service-accounts create "$ACCOUNT" --display-name='Murder Party - publication Hosting' \
    --project="$PROJECT_ID" --quiet
fi
account_disabled="$(wait_for_resource iam service-accounts describe "$DEPLOYER" --project="$PROJECT_ID" --format='value(disabled)')"
[[ "${account_disabled,,}" != 'true' ]] || { echo 'Compte technique désactivé : arrêt.'; exit 1; }

for role in roles/firebasehosting.admin roles/serviceusage.apiKeysViewer roles/serviceusage.serviceUsageConsumer; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" --member="serviceAccount:$DEPLOYER" \
    --role="$role" --condition=None --quiet >/dev/null
done

if ! gcloud iam workload-identity-pools describe "$POOL" --location=global --project="$PROJECT_ID" >/dev/null 2>&1; then
  create_or_reuse iam workload-identity-pools create "$POOL" --location=global \
    --display-name='Murder Party GitHub' --project="$PROJECT_ID" --quiet
fi
pool_state="$(wait_for_resource iam workload-identity-pools describe "$POOL" --location=global --project="$PROJECT_ID" --format='value(state)')"
pool_disabled="$(wait_for_resource iam workload-identity-pools describe "$POOL" --location=global --project="$PROJECT_ID" --format='value(disabled)')"
[[ "$pool_state" == 'ACTIVE' && "${pool_disabled,,}" != 'true' ]] || { echo 'Fédération désactivée ou supprimée : arrêt.'; exit 1; }

mapping='google.subject=assertion.sub,attribute.repository_id=assertion.repository_id,attribute.repository_owner_id=assertion.repository_owner_id,attribute.ref=assertion.ref,attribute.workflow_ref=assertion.workflow_ref,attribute.event_name=assertion.event_name'
condition="assertion.repository_id == '$REPOSITORY_ID' && assertion.repository_owner_id == '$OWNER_ID' && assertion.ref == 'refs/heads/main' && assertion.workflow_ref == '${REPOSITORY}/.github/workflows/deploy-firebase.yml@refs/heads/main' && (assertion.event_name == 'push' || assertion.event_name == 'workflow_dispatch')"
provider_action=create-oidc
if gcloud iam workload-identity-pools providers describe "$PROVIDER" --workload-identity-pool="$POOL" --location=global --project="$PROJECT_ID" >/dev/null 2>&1; then
  provider_action=update-oidc
fi
create_or_reuse iam workload-identity-pools providers "$provider_action" "$PROVIDER" \
  --workload-identity-pool="$POOL" --location=global --project="$PROJECT_ID" \
  --issuer-uri='https://token.actions.githubusercontent.com' \
  --attribute-mapping="$mapping" --attribute-condition="$condition" --quiet
provider_state="$(wait_for_resource iam workload-identity-pools providers describe "$PROVIDER" --workload-identity-pool="$POOL" --location=global --project="$PROJECT_ID" --format='value(state)')"
provider_disabled="$(wait_for_resource iam workload-identity-pools providers describe "$PROVIDER" --workload-identity-pool="$POOL" --location=global --project="$PROJECT_ID" --format='value(disabled)')"
[[ "$provider_state" == 'ACTIVE' && "${provider_disabled,,}" != 'true' ]] || { echo 'Fournisseur désactivé ou supprimé : arrêt.'; exit 1; }

# Appliquer les restrictions même si create-oidc a retrouvé une création récente.
if [[ "$provider_action" == 'create-oidc' ]]; then
  gcloud iam workload-identity-pools providers update-oidc "$PROVIDER" \
    --workload-identity-pool="$POOL" --location=global --project="$PROJECT_ID" \
    --issuer-uri='https://token.actions.githubusercontent.com' \
    --attribute-mapping="$mapping" --attribute-condition="$condition" --quiet
fi

gcloud iam service-accounts add-iam-policy-binding "$DEPLOYER" --project="$PROJECT_ID" \
  --role=roles/iam.workloadIdentityUser \
  --member="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL}/attribute.repository_id/${REPOSITORY_ID}" \
  --quiet >/dev/null

cat <<'DONE'

AUTORISATION MURDERPARTY CONFIGURÉE
Aucun secret à transmettre. Indique simplement « fait » pour lancer la première publication.
Les nouveaux droits peuvent prendre quelques minutes à se propager.

Pour retirer cette autorisation :
gcloud iam workload-identity-pools providers update-oidc murderparty-main --workload-identity-pool=murderparty-github --location=global --project=murderparty-e4278 --disabled
DONE
