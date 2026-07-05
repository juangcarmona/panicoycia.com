## ADDED Requirements

### Requirement: Astro project initializes and builds
The system SHALL have a valid Astro project under `src/web/` configured with TypeScript strict mode and `output: 'static'`.

#### Scenario: Fresh install
- **WHEN** a developer runs `npm install` in `src/web/`
- **THEN** all dependencies install without errors

#### Scenario: Production build
- **WHEN** a developer runs `npm run build` in `src/web/`
- **THEN** Astro produces a static site in `src/web/dist/` with no errors

#### Scenario: Dev server
- **WHEN** a developer runs `npm run dev` in `src/web/`
- **THEN** a local development server starts and serves the site

### Requirement: TypeScript strict mode enforced
The system SHALL use TypeScript in strict mode with no `any` types or implicit types in source code.

#### Scenario: Type checking passes
- **WHEN** a developer runs `npm run astro check` in `src/web/`
- **THEN** no type errors are reported
