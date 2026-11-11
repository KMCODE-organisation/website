# website — notes pour Claude

Contexte général (droits, workflow PR, Vercel) : `../CLAUDE.md`.

- **Gestionnaire de paquets : pnpm** (npm n'est pas installé sur le VPS).
- **Node 24** via `devEngines.runtime` : le Node système (22.22) est trop vieux pour Astro 7. Lancer les commandes via `pnpm` (`pnpm dev`, `pnpm build`, `pnpm exec …`), jamais `node`/`npx` directement.
- Dev depuis le Mac/iPhone : `pnpm dev --host` puis `http://100.85.44.125:4321` (Tailscale). Port Astro = 4321, pas 5173 comme l'ancien site Vite → vérifier qu'ufw l'autorise sur l'interface Tailscale.
- i18n : tout texte visible passe par `src/i18n/{fr,en}.json` ; les deux fichiers doivent garder les mêmes clés. `fr` = langue par défaut, sans préfixe d'URL.
- Thème : seulement les deux thèmes custom daisyUI ; pas de couleurs en dur dans les composants. Le choix est mémorisé dans `localStorage.theme` et appliqué par le script inline du `<head>` (évite le flash).
- Activité mise en avant : **installation domotique** (particuliers). Pas de chiffres, avis, certifications ou zone d'intervention inventés : à demander à Kevin.
- Source du contenu commercial (offres, matériel, données, limites) : doc Claude « KMCODE Domotique — Offre, matériel et gestion des données » (https://claude.ai/artifact/KkkxQdWYizcXVDB3fTqJF3). Ton **business, sans jargon** : « box domotique », pas « mini PC N150 » ; pas de Frigate, Tailscale, Zigbee… sur le site.
- Tous les prix vivent dans `src/data/pricing.js` (formatés par `formatPrice` selon la langue). Exception : les `meta.*Description` des JSON citent des prix en dur, à garder alignés.
- Limites à ne pas contredire : pas d'électricité (électricien partenaire), pas d'alarme certifiée ni télésurveillance, IA facultative sur le compte du client.
- Pages à slug traduit : déclarer la page dans `routes` (`src/i18n/index.js`) et créer `src/pages/<slug-fr>.astro` + `src/pages/en/<slug-en>.astro`.
- Charte : noir, blanc, violet `#6c5ce7` (`primary`), menthe `#5ed3b0` (`accent`). La menthe est illisible en texte sur fond blanc → l'utiliser en fond/décor, ou via `text-gradient` (dégradé assombri en thème clair).
- Direction visuelle : fond noir, halos violet/menthe, motif hexagonal « réseau » (`HeroVisual.astro`), typo arrondie, labels `eyebrow`, boutons ronds. Animations en CSS, désactivées si `prefers-reduced-motion`. Apparition au scroll : attribut `data-reveal`.
- Email de contact centralisé dans `src/config.js`.
- Icônes : `Icon.astro` (tracés Lucide inline, pas de dépendance). Ajouter un tracé au dictionnaire plutôt qu'importer une lib.
- Logos : exports bruts (PNG, variantes `dark/` et `light/`) dans `../helpers/brand/` (non versionné). Dans le site : `src/assets/brand/logo-{dark,light}.png` (rognés, 1000 px, optimisés en WebP par `astro:assets`), affichés via `Logo.astro` selon le thème. Favicon, icônes PWA et `og-image.jpg` (1200×630) dans `public/`, générés depuis les exports avec `sharp`.
