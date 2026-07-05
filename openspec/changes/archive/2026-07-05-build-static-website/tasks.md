## 1. Astro Project Scaffold

- [x] 1.1 Run `npm create astro@latest` in `src/web/` with minimal template, TypeScript strict, and install dependencies
- [x] 1.2 Configure `src/web/astro.config.mjs` with `output: 'static'` and site URL placeholder
- [x] 1.3 Configure `src/web/tsconfig.json` with strict mode and path aliases

## 2. CSS Design System

- [x] 2.1 Create `src/web/src/styles/global.css` with custom properties (colors, typography, spacing, radii, shadows), base resets, utility classes (`.section`, `.container`, `.eyebrow`, `.section-title`, `.section-lead`, `.button`, `.card`), reveal-on-scroll styles, and `prefers-reduced-motion` support

## 3. Content Layer

- [x] 3.1 Create `src/web/src/content/site.ts` with typed exports for all sections: metadata, navigation, hero, about, shows, members, gallery, videos, repertoire, contact, and footer — all populated with realistic placeholder content

## 4. Scroll Animation Script

- [x] 4.1 Create `src/web/src/scripts/reveal-on-scroll.ts` with IntersectionObserver logic for `[data-reveal]` elements

## 5. Layout and Page Structure

- [x] 5.1 Create `src/web/src/layouts/Layout.astro` with HTML shell, meta tags, Open Graph tags, global CSS import, and reveal script import
- [x] 5.2 Create `src/web/src/pages/index.astro` composing all section components in order

## 6. Section Components

- [x] 6.1 Create `src/web/src/components/Nav.astro` — fixed nav bar with anchor links and mobile hamburger menu
- [x] 6.2 Create `src/web/src/components/Hero.astro` — band name, tagline, CTA button
- [x] 6.3 Create `src/web/src/components/About.astro` — band description
- [x] 6.4 Create `src/web/src/components/Shows.astro` — upcoming shows list with date, venue, city, ticket link
- [x] 6.5 Create `src/web/src/components/Members.astro` — member cards with photo, name, instrument
- [x] 6.6 Create `src/web/src/components/Gallery.astro` — responsive image grid with lazy loading
- [x] 6.7 Create `src/web/src/components/Videos.astro` — responsive YouTube embeds
- [x] 6.8 Create `src/web/src/components/Repertoire.astro` — grouped song list
- [x] 6.9 Create `src/web/src/components/Contact.astro` — booking info with mailto link
- [x] 6.10 Create `src/web/src/components/Footer.astro` — copyright, social links, band name

## 7. Placeholder Assets

- [x] 7.1 Create placeholder image files in `src/web/public/images/` (placeholder-hero.jpg, placeholder-member.jpg, placeholder-gallery-*.jpg)

## 8. Deployment Configuration

- [x] 8.1 Create `.github/workflows/deploy.yml` — GitHub Actions workflow for Azure Static Web Apps (build + deploy on push to main, staging on PR, cleanup on PR close)
- [x] 8.2 Create `staticwebapp.config.json` at repo root with security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy) and 404 handling

## 9. Documentation

- [x] 9.1 Update `README.md` with project overview, local development setup (install, dev, build, preview), deployment notes, and content editing instructions
