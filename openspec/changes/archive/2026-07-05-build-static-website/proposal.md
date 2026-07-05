## Why

The band has no web presence. A static promotional site gives Pánico & Cía a professional landing page for fans, venues, and booking agents to discover the band, see upcoming shows, and request bookings — without ongoing hosting costs or maintenance burden.

## What Changes

- Scaffold an Astro project under `src/web/` with TypeScript strict mode and static output.
- Build a single-page landing with nine sections: Hero, About, Upcoming Shows, Band Members, Gallery, Videos, Repertoire, Booking/Contact, and Footer.
- Create a dark stage-inspired visual identity (near-black background, red/amber accents, high-contrast typography) using plain CSS custom properties.
- Centralize all content in `src/web/src/content/site.ts`.
- Add reveal-on-scroll animations via IntersectionObserver (no library).
- Add a GitHub Actions workflow for Azure Static Web Apps deployment.
- Add `staticwebapp.config.json` with security headers and routing.
- Update `README.md` with local dev, build, and deploy instructions.

## Capabilities

### New Capabilities
- `astro-scaffold`: Astro project setup, config, TypeScript, build pipeline, and dev tooling.
- `landing-page`: Single-page layout with all nine content sections, responsive and accessible.
- `visual-identity`: Dark stage-inspired CSS design system (custom properties, typography, colors, animations).
- `content-layer`: Centralized typed content file (`site.ts`) consumed by all components.
- `deployment-pipeline`: GitHub Actions workflow and Azure SWA configuration for automated deploy.

### Modified Capabilities
<!-- No existing specs are modified — this is a greenfield build. -->

## Impact

- `src/web/` directory goes from empty to a fully functional Astro project.
- New npm dependencies: `astro`, `@astrojs/check`, `typescript`.
- `.github/workflows/` gains an Azure SWA deploy workflow.
- Root gains `staticwebapp.config.json`.
- `README.md` is rewritten with project setup instructions.
