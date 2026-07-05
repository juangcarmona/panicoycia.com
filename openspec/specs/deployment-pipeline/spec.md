## ADDED Requirements

### Requirement: GitHub Actions workflow for Azure SWA
The repository SHALL include a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the Astro site to Azure Static Web Apps on push to `main`.

#### Scenario: Push to main triggers deploy
- **WHEN** code is pushed to the `main` branch
- **THEN** the workflow runs `npm install`, `npm run build` in `src/web/`, and deploys `src/web/dist/` to Azure SWA

#### Scenario: Pull request creates staging
- **WHEN** a pull request is opened targeting `main`
- **THEN** the workflow deploys a staging environment for preview

#### Scenario: PR close cleans up staging
- **WHEN** a pull request targeting `main` is closed
- **THEN** the staging environment is removed

### Requirement: Static web app configuration
The repository SHALL include a `staticwebapp.config.json` at the repo root with security headers, custom error pages, and navigation fallback.

#### Scenario: Security headers applied
- **WHEN** any page is served
- **THEN** response headers include X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, and Permissions-Policy

#### Scenario: SPA navigation fallback
- **WHEN** a user navigates to a non-existent path
- **THEN** they receive a 404 response (no SPA fallback since it's static)

### Requirement: README documents setup and deployment
The `README.md` SHALL document local development setup, build commands, and Azure SWA deployment configuration.

#### Scenario: Developer onboarding
- **WHEN** a new developer clones the repository
- **THEN** they can follow README instructions to install, run dev server, build, and understand the deployment pipeline
