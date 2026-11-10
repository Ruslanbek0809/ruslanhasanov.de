import type { Locale } from './routes';

/** Interface strings (navigation, buttons, labels). Page copy lives in src/data/ and src/content/. */
export interface UiStrings {
  skipLink: string;
  navLabel: string;
  menu: string;
  languageLabel: string;
  switchTo: string;
  nav: { work: string; about: string; experience: string; contact: string };
  downloadCv: string;
  cvLabels: { en: string; de: string };
  opensInNewTab: string;
  footer: { imprint: string; privacy: string; legalNav: string; socialNav: string };
  keyFacts: string;
  keyFigures: string;
  photoAlt: string;
  ogImageAlt: string;
  homeLink: string;
  caseStudy: {
    eyebrow: string;
    back: string;
    next: string;
    period: string;
    context: string;
    stack: string;
    links: string;
    noLinks: string;
    highlight: string;
    readMore: string;
  };
  legal: { draftTitle: string; draftBody: string; updated: string };
  notFound: {
    title: string;
    description: string;
    heading: string;
    body: string;
    homeButton: string;
    otherLanguage: string;
  };
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    skipLink: 'Skip to content',
    navLabel: 'Main',
    menu: 'Menu',
    languageLabel: 'Language',
    switchTo: 'Deutsche Version',
    nav: { work: 'Work', about: 'About', experience: 'Experience', contact: 'Contact' },
    downloadCv: 'Download CV',
    cvLabels: { en: 'Download CV (English, PDF)', de: 'Download CV (German, PDF)' },
    opensInNewTab: 'opens in a new tab',
    footer: { imprint: 'Imprint', privacy: 'Privacy', legalNav: 'Legal', socialNav: 'Profiles' },
    keyFacts: 'Key facts',
    keyFigures: 'Key figures',
    photoAlt: 'Portrait of Ruslan Hasanov',
    ogImageAlt: 'Ruslan Hasanov, AI/ML engineer',
    homeLink: 'Ruslan Hasanov, home',
    caseStudy: {
      eyebrow: 'case study',
      back: 'All work',
      next: 'Next project',
      period: 'Period',
      context: 'Context',
      stack: 'Stack',
      links: 'Links',
      noLinks: 'No public links yet.',
      highlight: "What I'd highlight to an engineer",
      readMore: 'Read case study',
    },
    legal: {
      draftTitle: 'DRAFT, not yet reviewed',
      draftBody: 'This text is a draft and has not been legally reviewed. It is not yet valid.',
      updated: 'Last updated',
    },
    notFound: {
      title: 'Page not found | Ruslan Hasanov',
      description: 'The page you were looking for does not exist.',
      heading: 'Page not found',
      body: 'The page you were looking for does not exist or has moved.',
      homeButton: 'Back to the home page',
      otherLanguage: 'Zur deutschen Startseite',
    },
  },
  de: {
    skipLink: 'Zum Inhalt springen',
    navLabel: 'Hauptnavigation',
    menu: 'Menü',
    languageLabel: 'Sprache',
    switchTo: 'English version',
    nav: { work: 'Projekte', about: 'Über mich', experience: 'Werdegang', contact: 'Kontakt' },
    downloadCv: 'Lebenslauf herunterladen',
    cvLabels: {
      en: 'Lebenslauf herunterladen (Englisch, PDF)',
      de: 'Lebenslauf herunterladen (Deutsch, PDF)',
    },
    opensInNewTab: 'öffnet in neuem Tab',
    footer: { imprint: 'Impressum', privacy: 'Datenschutz', legalNav: 'Rechtliches', socialNav: 'Profile' },
    keyFacts: 'Eckdaten',
    keyFigures: 'Kennzahlen',
    photoAlt: 'Porträt von Ruslan Hasanov',
    ogImageAlt: 'Ruslan Hasanov, KI-/ML-Ingenieur',
    homeLink: 'Ruslan Hasanov, Startseite',
    caseStudy: {
      eyebrow: 'Fallstudie',
      back: 'Alle Projekte',
      next: 'Nächstes Projekt',
      period: 'Zeitraum',
      context: 'Kontext',
      stack: 'Technologien',
      links: 'Links',
      noLinks: 'Noch keine öffentlichen Links.',
      highlight: 'Das Wichtigste aus technischer Sicht',
      readMore: 'Fallstudie lesen',
    },
    legal: {
      draftTitle: 'ENTWURF, noch nicht geprüft',
      draftBody: 'Dieser Text ist ein Entwurf und wurde noch nicht rechtlich geprüft. Er ist noch nicht gültig.',
      updated: 'Stand',
    },
    notFound: {
      title: 'Seite nicht gefunden | Ruslan Hasanov',
      description: 'Die gesuchte Seite existiert nicht.',
      heading: 'Seite nicht gefunden',
      body: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
      homeButton: 'Zur Startseite',
      otherLanguage: 'Go to the English home page',
    },
  },
};
