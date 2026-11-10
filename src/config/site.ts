/**
 * Site-wide settings. Text lives in src/data/ and src/content/, not here.
 */

export type HeroVariant = 'nameplate' | 'readout' | 'specstrip';

/**
 * Which hero the home pages render.
 * - 'nameplate': small photo next to the name, facts card on the right (default)
 * - 'readout':   no photo in the hero, key figures on the right; the photo moves to About
 * - 'specstrip': photo as the first cell of a full-width facts strip
 */
export const HERO_VARIANT = 'nameplate' as HeroVariant;

export const site = {
  name: 'Ruslan Hasanov',
  url: 'https://ruslanhasanov.de',
  email: 'ruslanbek0809@gmail.com',
  github: 'https://github.com/Ruslanbek0809',
  linkedin: 'https://www.linkedin.com/in/ruslan-hasanoff-34208a218/',
  locality: 'Bremerhaven',
  ogImage: '/og.png',

  /**
   * CV downloads. Put the PDF into public/cv/ and set the path, e.g. '/cv/ruslan-hasanov-cv-en.pdf'.
   * While a value is null, no button for that language is rendered anywhere.
   */
  cv: {
    en: null,
    de: null,
  } as { en: string | null; de: string | null },
};

export const showPhotoInAbout = HERO_VARIANT === 'readout';
