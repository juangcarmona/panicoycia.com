## Why

The current visual identity uses elegant serif fonts (Georgia), warm gold accents, and rounded premium cards — this doesn't match the band's actual concert-poster identity. Pánico & Cía's posters use bold condensed uppercase type, black/white/red palette, and raw gig-poster energy.

## What Changes

- Replace CSS design tokens: fonts, colors, radii, shadows.
- Load Google Fonts: Bebas Neue, Oswald, Inter, Permanent Marker.
- Restyle Hero with huge uppercase title, red ampersand, text-shadow poster effect, and handwritten kicker.
- Restyle Nav with uppercase Oswald and red hover.
- Update section styling: rough borders, uppercase headings, red accents instead of gold.
- Use real concert/poster images from `/images/` in the gallery.
- Add CSS-only grunge texture (grid noise overlay on body).

## Capabilities

### New Capabilities
<!-- None — this modifies an existing capability -->

### Modified Capabilities
- `visual-identity`: Complete palette and typography redesign from elegant/serif to poster/condensed.

## Impact

- `src/web/src/styles/global.css` — full rewrite of tokens and base styles.
- `src/web/src/layouts/Layout.astro` — added Google Fonts preconnect and stylesheet link.
- `src/web/src/components/Hero.astro` — new markup (kicker, uppercase title with `<span>` for ampersand, subtitle).
- `src/web/src/components/Nav.astro` — uppercase logo, Oswald font, red hover.
- `src/web/src/components/Members.astro` — Oswald name, red role text.
- `src/web/src/components/Shows.astro` — red date, Oswald font.
- `src/web/src/components/Repertoire.astro` — red category headings.
- `src/web/src/components/Gallery.astro` — sharp borders, real images.
- `src/web/src/components/Footer.astro` — display font, red hover.
- `src/web/src/components/Contact.astro` — red hover.
- `src/web/src/content/site.ts` — updated gallery, hero tagline, ogImage.
