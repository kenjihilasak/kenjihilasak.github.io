# Kenji Hilasaca — portfolio

Source for [kenjihilasak.github.io](https://kenjihilasak.github.io), the
professional portfolio of Kenji Hilasaca, a Data & AI Engineer based in Leeds,
UK.

The site presents selected work in data engineering, applied machine learning
and multilingual NLP. It is intentionally evidence-led: projects explain the
problem, contribution, evaluation, outcome and remaining trade-offs.

## Stack

- [Astro](https://astro.build/) for static rendering
- TypeScript for content data
- Self-hosted Source Serif 4 and IBM Plex Sans
- GitHub Actions for validation and GitHub Pages deployment
- Lighthouse for automated performance and accessibility budgets

No client-side framework or analytics script is shipped.

## Local development

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:4321`.

## Quality checks

```bash
npm run format:check
npm run build
npm run check:links
npm run audit
```

`npm run build` performs Astro's type/content checks before producing the static
site in `dist/`.

## Project structure

```text
src/
├── assets/       # Optimised by Astro at build time
├── components/   # Reusable UI
├── data/         # Typed portfolio and case-study content
├── layouts/      # Metadata, navigation and footer
├── pages/        # Static routes and case studies
└── styles/       # Global design tokens and foundations
```

## Deployment

Pull requests run formatting, type, build, link and Lighthouse checks. Merges to
`master` deploy the generated static site to GitHub Pages through the official
GitHub Pages actions.

## Design

The visual system uses an original academic-editorial direction: warm paper
tones, deep teal, restrained typography and visible information hierarchy. It
does not use University of Leeds logos, licensed typefaces or official page
templates.

## Licence

The site source is available under the [MIT Licence](./LICENSE). Personal
writing, CV content and photographs are excluded from that licence and remain
copyright Kenji Hilasaca.
