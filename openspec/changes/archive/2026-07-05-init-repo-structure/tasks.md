## 1. Folder Structure

- [x] 1.1 Create directory tree: `src/web/`, `src/api/`, `docs/product/`, `docs/architecture/decisions/`, `docs/operations/`, `.github/workflows/`
- [x] 1.2 Add `.gitkeep` to empty directories that must be preserved (`docs/architecture/decisions/`, `.github/workflows/`, `src/web/`)
- [x] 1.3 Create root `.gitignore` covering node_modules, dist, .astro, .env, OS files

## 2. OpenSpec Project Context

- [x] 2.1 Create `openspec/project.md` with project identity, technical direction, content architecture, and 2mtg.es prohibition
- [x] 2.2 Update `openspec/config.yaml` with project context and per-artifact rules

## 3. Documentation

- [x] 3.1 Rewrite `README.md` with project summary, stack, repo layout, dev placeholder, deployment target
- [x] 3.2 Create `docs/product/website-brief.md` with purpose, audience, sections, content assumptions, placeholder policy
- [x] 3.3 Create `docs/operations/deployment.md` with Azure SWA target, GitHub Actions, domains, DNS
- [x] 3.4 Create `src/api/README.md` explaining the folder is reserved for future Azure Function

## 4. Copilot Configuration

- [x] 4.1 Rewrite `.github/copilot-instructions.md` covering: repo purpose, layout, OpenSpec usage, validation, src/web and src/api roles, and all hard constraints (no Tailwind, no backend, no DB, no CMS, no copied assets, plain CSS, responsive, accessible, static output)
