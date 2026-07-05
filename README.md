# Pánico & Cía — Official Website

Official website for **Pánico & Cía**, a Madrid-based pop-rock band performing the best national and international classics from the 70s, 80s, and 90s.

## Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Language:** TypeScript (strict)
- **Styles:** Plain CSS with custom properties
- **Hosting:** Azure Static Web Apps
- **CI/CD:** GitHub Actions

## Repository Layout

```
.github/
  copilot-instructions.md   Guidance for Copilot agents
  workflows/deploy.yml      Azure SWA deploy workflow
docs/
  product/
    website-brief.md        Purpose, audience, sections, content model
  architecture/decisions/   ADRs (as needed)
  operations/
    deployment.md           Azure SWA, domains, DNS
openspec/
  project.md                Permanent project context for agents
  specs/                    Accepted capability specs
  changes/                  Planned and in-progress changes
src/
  web/                      Astro static website
    public/
      staticwebapp.config.json  Azure SWA routing & security headers
  api/                      Reserved: future Azure Function
README.md
.gitignore
```

## Local Development

```bash
cd src/web
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
npm run check     # TypeScript type checking
```

## Editing Content

All site content lives in a single file:

```
src/web/src/content/site.ts
```

Edit this file to update text, shows, members, gallery, videos, repertoire, or contact info. Components read from this file — never hard-code content in `.astro` files.

## Deployment

Deployed to **Azure Static Web Apps** on push to `main` via GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Secret required: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- App location: `src/web`
- Output: `dist`
- Staging environments auto-created on pull requests

### Domains

- Canonical domain: `panicoycia.es`
- Defensive domain: `panicoycia.com`
- DNS: Cloudflare
