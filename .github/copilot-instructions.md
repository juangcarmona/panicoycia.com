# GitHub Copilot Instructions — panicoycia.com

## Authority

Trust this file first. Check `openspec/project.md` for deep project context. Search the repository only when these instructions are incomplete or contradicted by existing code. Always run validation before proposing or applying changes.

---

## Project

Static promotional website for **Pánico & Cía**, a Madrid-based pop-rock band.  
Sections: hero · about · shows · members · gallery · videos · repertoire · contact/booking.

**Stack:** Astro · TypeScript · plain CSS  
**Deployment:** Azure Static Web Apps via GitHub Actions (`main` branch)

---

## Repository Layout

```
.github/
  copilot-instructions.md   ← you are here
  workflows/                CI/CD (added with Astro scaffold)
docs/
  product/website-brief.md  Site purpose, audience, sections
  architecture/decisions/   ADRs (as needed)
  operations/deployment.md  Azure SWA, domains, DNS
openspec/
  project.md                Permanent project context — read before significant changes
  specs/                    Accepted capability specs
  changes/                  Planned and in-progress OpenSpec changes
src/
  web/                      Astro static website
  api/                      RESERVED — future Azure Function only, do not touch
README.md
.gitignore
```

---

## OpenSpec Workflow

Before starting significant work, check for an active change:

```bash
openspec status --change <name>
```

Every non-trivial change should have a corresponding OpenSpec change in `openspec/changes/`. If one exists and has a `tasks.md`, work through its tasks. Run `/opsx:apply` to implement.

---

## Commands (once Astro is scaffolded under `src/web/`)

| Purpose | Command |
|---|---|
| Dev server | `cd src/web && npm run dev` |
| Production build | `cd src/web && npm run build` |
| Preview build | `cd src/web && npm run preview` |
| Type-check | `cd src/web && npm run astro check` |
| Validate before PR | `npm run build && npm run astro check` |

Bootstrap (run once): `npm create astro@latest src/web -- --template minimal --typescript strict --install --no-git`

---

## Coding Conventions

- **TypeScript strict** — no `any`, no implicit types.
- **Plain CSS** with custom properties (`--color-primary`, `--font-heading`, etc.) in `src/web/src/styles/global.css`. No Tailwind, no utility frameworks, no CSS-in-JS.
- **Content in one place** — all user-visible text, labels, and structured data live in `src/web/src/content/site.ts`. Components import from there; never hard-code content in `.astro` files.
- **Accessibility required** — semantic HTML, `alt` on all images, ARIA labels on interactive elements, keyboard navigable.
- **Responsive required** — mobile-first, CSS Grid/Flexbox, no fixed-pixel layout containers.
- One Astro component per file, PascalCase filenames.
- No `console.log` in committed code.

---

## Constraints — Never Do Without Explicit Request

- No backend, server-side logic, or API routes
- No database or CMS
- No Tailwind or CSS utility frameworks
- No unnecessary npm dependencies
- Do not break `output: 'static'` in `astro.config.mjs`
- Do not copy text, CSS, code, images, logos, or any asset from https://2mtg.es/ (structural/UX inspiration only)
- Do not source images from the internet without band approval — use `/images/placeholder-*.jpg`

---

## Azure Static Web Apps

- Build artefact: `src/web/dist/`  
- App location: `src/web` · Output location: `dist` · API location: _(empty)_  
- Deploy secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`  
- Routing config: `staticwebapp.config.json` at repo root  
- After routing changes: build and preview locally before pushing

