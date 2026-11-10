import { site } from '../config/site';
import { locales, type Locale } from '../i18n/routes';

/** The CV for a page's language, falling back to the other language; null when none is configured. */
export function primaryCv(locale: Locale): string | null {
  return site.cv[locale] ?? site.cv[locale === 'en' ? 'de' : 'en'];
}

/** Every configured CV, in a stable order (English first). */
export function allCvs(): { lang: Locale; href: string }[] {
  return locales.flatMap((lang) => {
    const href = site.cv[lang];
    return href ? [{ lang, href }] : [];
  });
}
