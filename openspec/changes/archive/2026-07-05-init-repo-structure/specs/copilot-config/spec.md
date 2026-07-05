## ADDED Requirements

### Requirement: Copilot instructions file exists
`.github/copilot-instructions.md` SHALL be the primary context file for GitHub Copilot agents, explaining repo purpose, layout, OpenSpec usage, validation expectations, and hard constraints.

#### Scenario: Agent reads instructions before acting
- **WHEN** a Copilot agent starts a session on this repo
- **THEN** it finds `.github/copilot-instructions.md` and trusts it as the authoritative source

### Requirement: Instructions are concise
`.github/copilot-instructions.md` SHALL be no longer than 2 pages and optimized for quick parsing by AI agents.

#### Scenario: Instructions fit context window efficiently
- **WHEN** the file is loaded into an agent's context
- **THEN** it occupies minimal tokens while conveying all critical constraints

### Requirement: Instructions declare constraints
The instructions file SHALL explicitly prohibit: Tailwind, backend (unless requested), database, CMS, copyrighted assets from external sites, and unnecessary dependencies. It SHALL require: plain CSS, responsive design, accessibility, and static output preservation.

#### Scenario: Agent respects constraints
- **WHEN** an agent proposes adding Tailwind or a database
- **THEN** the instructions file contradicts the proposal and the agent halts

### Requirement: OpenSpec project.md provides permanent context
`openspec/project.md` SHALL define the project identity, technical direction, inspiration source constraints, and content architecture for use by OpenSpec artifact generation.

#### Scenario: New change reads project context
- **WHEN** `openspec instructions` is run for any artifact
- **THEN** `project.md` context is available to guide artifact creation

### Requirement: Project.md prohibits asset copying
`openspec/project.md` SHALL explicitly state that https://2mtg.es/ is structural/UX inspiration only and that copying text, assets, logos, photos, videos, code, CSS, or branding from that site is prohibited.

#### Scenario: Agent avoids copying
- **WHEN** an agent references 2mtg.es during implementation
- **THEN** it uses only structural/layout ideas, never literal content or assets
