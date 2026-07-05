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
  workflows/                GitHub Actions (added with Astro scaffold)
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
  web/                      Astro static website (to be scaffolded)
  api/                      Reserved: future Azure Function
README.md
.gitignore
```

## Local Development

> The Astro app has not been scaffolded yet. Once scaffolded under `src/web/`:

```bash
cd src/web
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Deployment

Deployed to **Azure Static Web Apps** on push to `main` via GitHub Actions.

- Canonical domain: `panicoycia.es`
- Defensive domain: `panicoycia.com`
- DNS: Cloudflare
