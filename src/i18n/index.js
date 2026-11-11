import { getRelativeLocaleUrl } from 'astro:i18n';
import fr from './fr.json';
import en from './en.json';

export const defaultLocale = 'fr';
export const dictionaries = { fr, en };
export const locales = Object.keys(dictionaries);

/** Slugs traduits des pages (clé interne → slug par langue). '' = accueil. */
export const routes = {
  home: { fr: '', en: '' },
  offers: { fr: 'offres', en: 'offers' },
};

const lookup = (dict, key) => key.split('.').reduce((node, part) => node?.[part], dict);

/**
 * Renvoie t('home.title') pour la langue donnée.
 * Clé absente → repli sur le français, puis sur la clé elle-même (visible en dev).
 */
export function useTranslations(locale = defaultLocale) {
  const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
  return (key) => lookup(dict, key) ?? lookup(dictionaries[defaultLocale], key) ?? key;
}

/** URL d'une page (clé de `routes`) dans une langue. */
export function pathFor(route, locale = defaultLocale) {
  return getRelativeLocaleUrl(locale, routes[route][locale]);
}

/** Chemin sans préfixe de langue : /en/foo → /foo, /foo → /foo. */
export function stripLocale(pathname) {
  const [, first, ...rest] = pathname.split('/');
  return locales.includes(first) && first !== defaultLocale ? `/${rest.join('/')}` : pathname;
}

/** URL de la même page dans une autre langue (slugs traduits compris). */
export function localizedPath(pathname, locale) {
  const slug = stripLocale(pathname).replace(/^\/|\/$/g, '');
  const route = Object.values(routes).find((r) => Object.values(r).includes(slug));
  return getRelativeLocaleUrl(locale, route ? route[locale] : slug);
}
