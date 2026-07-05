# Project: panicoycia.com

## Identity

**Pánico & Cía** is a Madrid-based pop-rock band performing the best national and international classics from the 70s, 80s, and 90s.

This repository contains the official band website and any supporting infrastructure.

## Technical Direction

| Concern | Decision |
|---|---|
| Web framework | Astro (static output, `output: 'static'`) |
| Language | TypeScript (strict mode) |
| Styling | Plain CSS with custom properties — no Tailwind, no CSS-in-JS |
| Hosting | Azure Static Web Apps |
| CI/CD | GitHub Actions (deploy on push to `main`) |
| Content layer | `src/web/src/content/site.ts` — single source of truth for all site content |
| CMS | None |
| Database | None |
| Backend | None initially; optional Azure Function for contact form only |

## Repository Layout

```
src/web/       Astro static website
src/api/       Reserved: future Azure Function (contact endpoint only)
docs/product/  Product intent, website brief, content model
docs/architecture/decisions/  ADRs (as needed)
docs/operations/  Deployment, domains, DNS, Azure SWA notes
openspec/      Source of truth for planned and accepted changes
.github/       Copilot instructions, GitHub Actions workflows
```

## Content Architecture

- All user-visible text, labels, and structured data (shows, members, repertoire) MUST be defined in `src/web/src/content/site.ts`.
- Components import from there — never hard-code content in `.astro` or `.ts` component files.
- Use placeholder strings and placeholder image paths until official assets are provided by the band.

## Asset Policy

Until the band provides official assets, use:
- Placeholder strings: `"[Band member name]"`, `"[Show date TBC]"`, etc.
- Placeholder images: `/images/placeholder-hero.jpg`, `/images/placeholder-member.jpg`, etc.
- Do not source images from the internet or stock photo sites without explicit permission.

## OpenSpec Usage

Every significant change to this repository MUST have a corresponding OpenSpec change in `openspec/changes/`. Agents MUST check `openspec status` before beginning implementation.
