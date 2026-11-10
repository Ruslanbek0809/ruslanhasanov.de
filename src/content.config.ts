import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case studies: one Markdown file per project and locale,
 * at src/content/projects/<locale>/<slug>.md. The file name is the URL slug.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '{en,de}/*.md' }),
  schema: z.object({
    order: z.number().int(),
    /** Spans both columns on the home page and shows the key figures. */
    wide: z.boolean().default(false),
    kind: z.string(),
    title: z.string(),
    tagline: z.string(),
    /** Meta description for the case-study page. */
    description: z.string(),
    period: z.string(),
    context: z.string(),
    badge: z.object({ label: z.string(), tone: z.enum(['progress', 'ok', 'neutral']) }),
    summary: z.string(),
    tags: z.array(z.string()),
    figures: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    highlight: z.string(),
    stack: z.array(z.string()),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  }),
});

/** Imprint and privacy policy, one Markdown file per locale. */
const legal = defineCollection({
  loader: glob({ base: './src/content/legal', pattern: '{en,de}/*.md' }),
  schema: z.object({
    page: z.enum(['imprint', 'privacy']),
    title: z.string(),
    description: z.string(),
    updated: z.string(),
  }),
});

export const collections = { projects, legal };
