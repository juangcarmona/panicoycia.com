## ADDED Requirements

### Requirement: Centralized content file
All user-visible text, labels, and structured data SHALL be defined in `src/web/src/content/site.ts` and exported as typed constants.

#### Scenario: Content is typed
- **WHEN** a developer imports from `site.ts`
- **THEN** TypeScript provides full type safety with no `any` types

#### Scenario: Component reads content
- **WHEN** an Astro component renders text or data
- **THEN** it imports from `site.ts` and does not contain hard-coded user-visible strings

### Requirement: Content structure covers all sections
The `site.ts` file SHALL export typed data for: site metadata, hero, about, shows (array), members (array), gallery images (array), videos (array), repertoire (grouped array), contact info, footer, and navigation labels.

#### Scenario: All sections have content
- **WHEN** the site builds
- **THEN** every section component can import its required data from `site.ts` without fallbacks

### Requirement: Placeholder content
All content fields SHALL have realistic placeholder values that demonstrate the data structure and render a complete-looking page.

#### Scenario: Placeholder renders realistically
- **WHEN** the site is built with default `site.ts` content
- **THEN** all sections display placeholder text and reference placeholder image paths under `/images/`
