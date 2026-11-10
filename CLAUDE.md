# website — notes pour Claude

Contexte général (droits, workflow PR, Vercel) : `../CLAUDE.md`.

- **Gestionnaire de paquets : pnpm** (npm n'est pas installé sur le VPS).
- **Node 24** via `devEngines.runtime` : le Node système (22.22) est trop vieux pour Astro 7. Lancer les commandes via `pnpm` (`pnpm dev`, `pnpm build`, `pnpm exec …`), jamais `node`/`npx` directement.
- Dev depuis le Mac/iPhone : `pnpm dev --host` puis `http://100.85.44.125:4321` (Tailscale). Port Astro = 4321, pas 5173 comme l'ancien site Vite → vérifier qu'ufw l'autorise sur l'interface Tailscale.
- i18n : tout texte visible passe par `src/i18n/{fr,en}.json` ; les deux fichiers doivent garder les mêmes clés. `fr` = langue par défaut, sans préfixe d'URL.
- Thème : seulement les deux thèmes custom daisyUI ; pas de couleurs en dur dans les composants. Le choix est mémorisé dans `localStorage.theme` et appliqué par le script inline du `<head>` (évite le flash).
- Direction visuelle : maquette dans `../helpers/` (fond quasi noir, typo arrondie, labels en capitales espacées = utilitaire `eyebrow`, boutons ronds à contour).
