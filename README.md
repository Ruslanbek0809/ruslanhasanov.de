# ruslanhasanov.de

Personal portfolio of Ruslan Hasanov. Static site built with [Astro](https://astro.build), plain CSS, no client-side framework. English at `/`, German at `/de/`.

## Run locally

Needs Node 22.23.4 or newer (developed on Node 26).

```sh
npm ci            # install the exact versions from package-lock.json
npm run dev       # dev server at http://localhost:4321
```

## Build

```sh
npm run check        # type and template diagnostics (astro check)
npm run build        # static output in dist/
npm run preview      # serve dist/ locally
npm run check:links  # after a build: every internal link must resolve
```

The npm scripts set `ASTRO_TELEMETRY_DISABLED=1`, so Astro sends no usage data.

## Where the text lives

Editing text never means touching components.

| What | English | German |
| --- | --- | --- |
| Home page (hero, highlights, shipped software, about, experience, skills, contact, SEO title/description) | `src/data/home.en.ts` | `src/data/home.de.ts` |
| Case studies (one Markdown file per project) | `src/content/projects/en/*.md` | `src/content/projects/de/*.md` |
| Imprint / privacy policy | `src/content/legal/en/*.md` | `src/content/legal/de/*.md` |
| Interface strings (navigation, buttons, labels, 404) | `src/i18n/ui.ts` (`en`) | `src/i18n/ui.ts` (`de`) |
| Email, GitHub, LinkedIn, CV paths, hero variant | `src/config/site.ts` | (shared) |

Both home files follow the type in `src/data/types.ts`: if a field is missing in one language, `npm run check` fails.

## Add a project (case study)

1. Copy an existing file, e.g. `src/content/projects/en/llm-forecasting.md`, to `src/content/projects/en/<slug>.md`. The file name becomes the URL: `/work/<slug>/`.
2. Create the German version with the **same file name** in `src/content/projects/de/`. The build fails if a project exists in only one language.
3. Fill in the frontmatter (`order` sets the position on the home page; `wide: true` makes the card span both columns and shows `figures`) and write the Problem / Approach / Results sections in Markdown.
4. `npm run build`. The home page card, the case-study page, the next-project link and the sitemap update automatically.

## Switch the hero variant

In `src/config/site.ts` set `HERO_VARIANT` to one of:

- `'nameplate'` (default): small photo next to the name, key-facts card on the right
- `'readout'`: no photo in the hero, key figures on the right; the photo moves into the About section
- `'specstrip'`: photo as the first cell of a full-width facts strip

## Add or replace the CV PDFs

1. Drop the file(s) into `public/cv/`, e.g. `public/cv/ruslan-hasanov-cv-en.pdf` and `public/cv/ruslan-hasanov-cv-de.pdf`.
2. In `src/config/site.ts` set the paths, without `public`:
   ```ts
   cv: {
     en: '/cv/ruslan-hasanov-cv-en.pdf',
     de: '/cv/ruslan-hasanov-cv-de.pdf',
   },
   ```
   While a value is `null`, no button for it appears (header, hero, mobile menu, contact). The header and hero link to the CV in the page language and fall back to the other one; the contact section lists every configured CV.
3. `npm run build` to check, then commit and push.

Remember: anything in `public/` is public. Check the PDF for a street address, phone number or date of birth before publishing it.

## Images

- Profile photo: `src/assets/profile.jpg`. Astro resizes it to WebP at build time; the greyscale and crop are CSS (`.ph` in `src/styles/global.css`).
- Social preview: `public/og.png` (1200x630) is rendered from `scripts/og-image.html` with headless Chrome: `npm run og` (macOS Chrome path by default; set `CHROME=/path/to/chrome` elsewhere). It shows "Available now": regenerate it when that changes.
- Favicon: `public/favicon.svg`.

## Project layout

```
src/
  config/site.ts        site settings (links, CV paths, hero variant)
  data/                 home page copy per language (typed)
  content/              Markdown collections: projects/, legal/
  content.config.ts     collection schemas
  i18n/                 routes per language, interface strings
  components/           header, footer, heroes/, sections/, case-study and legal page templates
  layouts/BaseLayout    <head> (SEO, hreflang, Open Graph, JSON-LD), header, footer
  styles/               global.css (tokens, base), fonts.css (self-hosted IBM Plex)
  pages/                routes: /, /work/[slug]/, /imprint/, /privacy/, /de/...
scripts/                link checker, OG image source
```

## Before going live

- [ ] Impressum and privacy policy: replace `[POSTAL ADDRESS: TO BE ADDED BY OWNER]` in all four files under `src/content/legal/` with a postal address where you can be reached (a c/o or impressum service address is possible).
- [ ] Have both legal texts reviewed, then remove the "DRAFT, not yet reviewed" notice (`legal.draftTitle` / `draftBody` in `src/i18n/ui.ts` and the `.draft` block in `src/components/LegalPage.astro`). Check in particular: the Cloudflare data processing agreement (Art. 28 GDPR) is accepted in your Cloudflare account, the Gmail note in section 6 still matches how you receive email, and whether § 18 (2) MStV applies to you.
- [ ] In Cloudflare, make sure nothing sets cookies or adds scripts (Bot Fight Mode, Web Analytics, Zaraz, email obfuscation, Rocket Loader). The privacy policy promises no cookies and no tracking.
- [ ] CV files: decide which PDFs to publish, add them as described above.
- [ ] Domain and DNS: connect `ruslanhasanov.de` (and `www`, redirected to the apex) to the Cloudflare project, with HTTPS enforced. The site URL is set in `astro.config.mjs` (`site`).
- [ ] After deploying, submit `https://ruslanhasanov.de/sitemap-index.xml` in Google Search Console and test the social preview (`/og.png`).
