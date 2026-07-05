## Context

The repository is initialized with documentation and OpenSpec structure but no application code. `src/web/` is empty. The goal is to go from zero to a deployable static single-page site that the band can use immediately for promotion and booking inquiries.

The site targets fans, venue bookers, and event organizers. It must load fast on mobile, look professional, and make it trivial to update content (all text/data lives in one TypeScript file).

## Goals / Non-Goals

**Goals:**
- Deliver a complete, buildable Astro static site with all nine sections.
- Establish a CSS design system using custom properties — dark stage aesthetic, red/amber accents.
- Make content editable from a single `site.ts` file without touching component code.
- Automate deploy to Azure Static Web Apps on push to `main`.
- Achieve good Lighthouse scores (performance, accessibility, SEO) out of the box.
- Provide reveal-on-scroll animations via IntersectionObserver with reduced-motion support.

**Non-Goals:**
- No contact form backend (static `mailto:` link or external form service only).
- No CMS integration or admin panel.
- No authentication or user accounts.
- No server-side rendering or hybrid mode.
- No image optimization pipeline (Astro's built-in `<Image>` can be added later).
- No internationalization (site is Spanish-only for now).
- No cookie consent banner (no analytics in v1).
- No custom fonts (system font stack only for performance).

## Decisions

### 1. Astro with minimal template

**Choice:** `npm create astro@latest` with `--template minimal --typescript strict`.  
**Why:** Minimal template avoids opinionated boilerplate. Strict TS catches errors early. Astro's static output matches Azure SWA perfectly with zero runtime JS by default.  
**Alternative considered:** Using a starter theme — rejected because it brings unwanted dependencies and styling opinions.

### 2. Single-page architecture

**Choice:** One `index.astro` page with section components.  
**Why:** The site is promotional with ~9 content blocks. A single page with anchor navigation is the simplest UX for a band site — visitors scroll or jump to sections. No routing complexity.  
**Alternative considered:** Multi-page with one page per section — rejected as over-engineered for the content volume.

### 3. Plain CSS with custom properties

**Choice:** One `global.css` file defining a design token system (colors, spacing, typography, radii, shadows) plus component-scoped styles in `<style>` blocks within `.astro` files.  
**Why:** Zero build overhead, full control, no framework lock-in. Custom properties enable theme changes from one place.  
**Alternative considered:** Tailwind (explicitly prohibited by project constraints).

### 4. Content centralization in `site.ts`

**Choice:** A single typed TypeScript file exports all content: band info, member list, shows, repertoire songs, gallery items, video URLs, and contact details.  
**Why:** Non-technical collaborators can update content in one file. Components are purely presentational. Type safety prevents missing fields.  
**Alternative considered:** Astro Content Collections — rejected because the content is small and doesn't warrant a file-per-entry approach. One TS file is simpler.

### 5. IntersectionObserver for scroll animations

**Choice:** A small `reveal-on-scroll.ts` script using `[data-reveal]` attributes.  
**Why:** ~20 lines of code, no dependency, respects `prefers-reduced-motion`, fires once per element.  
**Alternative considered:** CSS-only `@scroll-timeline` — insufficient browser support as of mid-2026.

### 6. Azure Static Web Apps deployment

**Choice:** GitHub Actions workflow using `Azure/static-web-apps-deploy@v1`.  
**Why:** Native integration, zero-config routing, free tier adequate for a band site, automatic staging environments on PRs.  
**Alternative considered:** Netlify/Vercel — rejected because Azure SWA is already decided per project constraints.

### 7. Navigation pattern

**Choice:** Fixed top nav bar with anchor links to each section, hamburger menu on mobile.  
**Why:** Standard pattern for single-page sites. Keeps all sections discoverable.  
**Alternative considered:** No nav (scroll only) — rejected because it makes sections hard to reach directly.

## Risks / Trade-offs

- **Placeholder content looks unprofessional** → Mitigated by using realistic placeholder text and clearly marking images as placeholders. Content swap is trivial.
- **No contact form submission** → Accepted trade-off for v1. A `mailto:` link works. Azure Function can be added in a future change.
- **No analytics** → Acceptable for launch. Can add privacy-respecting analytics later.
- **System fonts only** → Small visual trade-off for significant performance gain. Custom fonts can be added once brand typography is decided.
- **Single CSS file could grow** → Mitigated by Astro's scoped `<style>` blocks for component-specific styles. Global file stays focused on tokens and utilities.
