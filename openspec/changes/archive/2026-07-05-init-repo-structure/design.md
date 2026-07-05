## Context

The repository contains only a README stub and an OpenSpec config. No source code, documentation, or CI/CD exists. The goal is to lay down a clean, minimal foundation that future Copilot agents can extend safely.

Constraints inherited from project decisions:
- Astro + TypeScript + plain CSS (no Tailwind, no CSS-in-JS).
- Azure Static Web Apps deployment via GitHub Actions.
- Content centralized in `src/web/src/content/site.ts`.
- https://2mtg.es/ is structural/UX inspiration only — zero asset/code/branding copying.
- No backend, database, or CMS unless explicitly requested later.

## Goals / Non-Goals

**Goals:**
- Establish folder structure matching the long-term architecture.
- Provide enough documentation for any contributor (human or AI) to orient themselves.
- Configure OpenSpec `project.md` as the permanent project context.
- Prepare `.github/copilot-instructions.md` for cloud agent usage.
- Reserve `src/api/` for a future Azure Function without implementing it.

**Non-Goals:**
- Scaffold the Astro app (separate future change).
- Implement the contact form or any API.
- Add npm dependencies or lock files.
- Set up CI/CD workflows (will come with the Astro scaffold change).
- Create visual design, mockups, or brand assets.

## Decisions

1. **Monorepo-lite with `src/web` and `src/api`** — keeps the static site and the optional function isolated. Each has its own `package.json` when scaffolded. This avoids workspace tooling complexity while leaving room for the Azure Function later.

2. **`openspec/project.md` as single source of project context** — agents read this file before acting. It replaces scattered context in multiple docs.

3. **`docs/` for human-readable documentation, `openspec/` for machine-consumed specs** — clear separation; docs are prose, specs are structured requirements.

4. **`.gitignore` based on Node + Astro defaults** — covers `node_modules`, `dist`, `.astro`, `.env`.

5. **No `.editorconfig` or linter configs yet** — these come with the Astro scaffold change to avoid speculative configuration.

## Risks / Trade-offs

- [Empty directories may not be committed by Git] → Add `.gitkeep` files in empty dirs that must exist.
- [Copilot instructions may drift from reality as repo evolves] → OpenSpec changes will update instructions as part of their task list.
- [Docs written before code may become stale] → Keep docs intentionally brief; detail lives in specs.
