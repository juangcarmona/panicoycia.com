## Why

This repository is empty — only a README and an OpenSpec config exist. We need to establish the foundational structure, documentation, and conventions before any code is written. A well-defined repo skeleton lets future Copilot agents and human contributors work safely from day one.

## What Changes

- Create the canonical folder structure (`src/web`, `src/api`, `docs/`, `.github/workflows`).
- Write `openspec/project.md` as the project's permanent context document.
- Write `README.md` with project summary, stack, layout, and development notes.
- Write `docs/product/website-brief.md` defining the website's purpose, audience, and sections.
- Write `docs/operations/deployment.md` covering Azure SWA, GitHub Actions, domains, and DNS.
- Write `src/api/README.md` reserving the folder for a future Azure Function.
- Rewrite `.github/copilot-instructions.md` to cover the new layout and constraints.
- Add `.gitignore` for Node/Astro projects.
- Create empty marker directories (`docs/architecture/decisions`).

## Capabilities

### New Capabilities
- `repo-structure`: Canonical folder layout and placeholder files.
- `project-docs`: README, product brief, operations docs, and API placeholder.
- `copilot-config`: Copilot instructions and OpenSpec project context.

### Modified Capabilities
_(none — this is the initial commit)_

## Impact

- Every folder and documentation file is new; no existing code or config is modified destructively.
- `.github/copilot-instructions.md` will be rewritten (the current stub is incomplete).
- After this change, the repo is ready for an "scaffold Astro app" change.
