### Requirement: Canonical folder layout exists
The repository SHALL contain the following top-level directories: `.github/`, `docs/`, `openspec/`, `src/`.

#### Scenario: Fresh clone has expected structure
- **WHEN** a contributor clones the repository
- **THEN** the directories `.github/`, `docs/product/`, `docs/architecture/decisions/`, `docs/operations/`, `openspec/`, `src/web/`, and `src/api/` all exist

### Requirement: src/web reserved for Astro app
The `src/web/` directory SHALL be the root of the Astro static website when scaffolded.

#### Scenario: No premature scaffold
- **WHEN** this change is complete
- **THEN** `src/web/` exists but contains no `package.json` or source files (scaffolding is a separate change)

### Requirement: src/api reserved for future Azure Function
The `src/api/` directory SHALL contain only a README explaining its purpose until an API is explicitly requested.

#### Scenario: API folder is inert
- **WHEN** a build or deploy runs
- **THEN** `src/api/` has no effect on the static site build or deployment

### Requirement: Empty directories tracked via .gitkeep
Any directory that must exist but has no files SHALL contain a `.gitkeep` file.

#### Scenario: Git preserves empty dirs
- **WHEN** the repository is cloned
- **THEN** `docs/architecture/decisions/` exists (via `.gitkeep`)

### Requirement: .gitignore covers Node and Astro
The root `.gitignore` SHALL ignore `node_modules/`, `dist/`, `.astro/`, `.env`, and OS-specific files.

#### Scenario: Build artifacts excluded
- **WHEN** a contributor runs `npm run build` inside `src/web/`
- **THEN** the `dist/` output is not tracked by Git
