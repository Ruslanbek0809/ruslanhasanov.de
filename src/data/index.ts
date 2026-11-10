import type { Locale } from '../i18n/routes';
import type { HomeContent } from './types';
import en from './home.en';
import de from './home.de';

export const home: Record<Locale, HomeContent> = { en, de };
