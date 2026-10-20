import { execFileSync } from 'node:child_process';

const project = 'murderparty-e4278';
// Une erreur d'accès interrompt la publication ; elle n'est pas interprétée
// comme un site absent. Aucun site existant n'est supprimé ou réinitialisé.
const response = JSON.parse(execFileSync('firebase', ['hosting:sites:list', '--project', project, '--json', '--non-interactive'], { encoding: 'utf8' }));
if (response.status !== 'success' || !Array.isArray(response.result?.sites)) {
  throw new Error('Réponse inattendue de Firebase : arrêt avant création.');
}
const exists = response.result.sites.some(site => site.name?.split('/').at(-1) === project);
if (!exists) {
  execFileSync('firebase', ['hosting:sites:create', project, '--project', project, '--non-interactive'], { stdio: 'inherit' });
}
console.log(`Site Hosting vérifié : ${project}`);
