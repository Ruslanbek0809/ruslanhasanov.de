import { getRelativeLocaleUrl } from 'astro:i18n';
import { site } from '../config/site';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

/** Path segments per page and locale; the German legal pages use German slugs. */
const slugs = {
  home: { en: '', de: '' },
  imprint: { en: 'imprint', de: 'impressum' },
  privacy: { en: 'privacy', de: 'datenschutz' },
} as const;

export type PageKey = keyof typeof slugs;

export function pagePath(page: PageKey, locale: Locale): string {
  return getRelativeLocaleUrl(locale, slugs[page][locale]);
}

export function workPath(slug: string, locale: Locale): string {
  return getRelativeLocaleUrl(locale, `work/${slug}`);
}

/** In-page anchor on the home page of a locale, usable from any page. */
export function homeAnchor(id: string, locale: Locale): string {
  return `${pagePath('home', locale)}#${id}`;
}

export type Alternates = Record<Locale, string>;

export function pageAlternates(page: PageKey): Alternates {
  return { en: pagePath(page, 'en'), de: pagePath(page, 'de') };
}

export function workAlternates(slug: string): Alternates {
  return { en: workPath(slug, 'en'), de: workPath(slug, 'de') };
}

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).href;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'de' : 'en';
}
