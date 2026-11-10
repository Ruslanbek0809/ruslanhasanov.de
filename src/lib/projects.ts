import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale } from '../i18n/routes';

export type Project = CollectionEntry<'projects'>;

/** Entry ids look like "en/thesis-foundation-models"; the part after the locale is the URL slug. */
export function projectSlug(entry: Project): string {
  return entry.id.split('/').slice(1).join('/');
}

export async function getProjects(locale: Locale): Promise<Project[]> {
  const all = await getCollection('projects', (entry) => entry.id.startsWith(`${locale}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Static paths for the case-study pages of one locale, each with the next project (wrapping around).
 * Fails the build if a project exists in one language but not the other, since the language switch
 * links to the same slug.
 */
export async function caseStudyPaths(locale: Locale) {
  const perLocale = await Promise.all(locales.map((l) => getProjects(l)));
  const slugSets = perLocale.map((list) => list.map(projectSlug).sort().join(','));
  if (new Set(slugSets).size > 1) {
    throw new Error(`Case studies differ between languages: ${slugSets.join(' vs ')}`);
  }

  const projects = perLocale[locales.indexOf(locale)];
  return projects.map((entry, i) => ({
    params: { slug: projectSlug(entry) },
    props: {
      entry,
      next: projects[(i + 1) % projects.length],
      index: i + 1,
      total: projects.length,
    },
  }));
}
