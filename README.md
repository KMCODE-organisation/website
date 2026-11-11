# KMCODE — site vitrine

Site public de KMCODE : [www.kmcode.fr](https://www.kmcode.fr).

## Stack

| Rôle | Choix |
|---|---|
| Framework | [Astro](https://astro.build) (JS, rendu statique, zéro JS envoyé par défaut) |
| Styles | [Tailwind CSS v4](https://tailwindcss.com) |
| Composants UI | [daisyUI 5](https://daisyui.com) (100 % CSS, pas de JS) |
| Traduction | i18n natif d'Astro : `fr` à la racine, `en` sous `/en/` |
| Thème | Thèmes daisyUI `kmcode` (sombre, défaut) et `kmcode-light` — charte : noir, blanc, violet `#6c5ce7`, menthe `#5ed3b0` |
| Police | Quicksand Variable (auto-hébergée via Fontsource) |
| Hébergement | Vercel (preview par PR, prod au merge sur `main`) |

## Démarrer

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # sortie statique dans dist/
pnpm preview
```

Node 24 est requis (`devEngines` dans `package.json` : pnpm le télécharge automatiquement si besoin).

## Organisation

```
src/
  i18n/          fr.json, en.json + helpers (useTranslations, localizedPath)
  layouts/       BaseLayout.astro : <head>, SEO, hreflang, thème
  components/    Header, Footer, LangSwitcher, ThemeToggle
  views/         contenu des pages, partagé entre les langues
  pages/         routes : index.astro (fr), en/index.astro
  styles/        global.css : Tailwind, daisyUI, thèmes
```

### Ajouter une page

1. Créer la vue dans `src/views/MaPage.astro` (textes via `t('cle')`).
2. Créer les deux routes `src/pages/ma-page.astro` et `src/pages/en/ma-page.astro` qui l'enveloppent dans `BaseLayout`.
3. Ajouter les clés dans `src/i18n/fr.json` **et** `src/i18n/en.json`.

### Thème

Les couleurs sont dans `src/styles/global.css` (blocs `@plugin 'daisyui/theme'`). Utiliser les classes sémantiques (`bg-base-100`, `text-base-content`, `btn-primary`…) plutôt que des couleurs en dur : le basculement sombre/clair suit automatiquement.
