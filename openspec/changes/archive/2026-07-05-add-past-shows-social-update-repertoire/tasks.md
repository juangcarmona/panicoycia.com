## 1. Content Model Updates

- [x] 1.1 Add `PastShow`, `PastShowsContent`, `SocialLinkItem`, `SocialSectionContent` interfaces to `site.ts`
- [x] 1.2 Add `pastShows` data with 6 verified venues
- [x] 1.3 Add `social` section data with Instagram and Facebook
- [x] 1.4 Comment out upcoming `shows` export (unclear dates)
- [x] 1.5 Replace repertoire with new 11-song setlist
- [x] 1.6 Update footer socials with real Instagram/Facebook URLs
- [x] 1.7 Update navigation links (remove Conciertos/Miembros, add Escenarios/Redes)

## 2. New Components

- [x] 2.1 Create `src/web/src/components/PastShows.astro` — card list with venue, city, date, note
- [x] 2.2 Create `src/web/src/components/Social.astro` — centered cards with label and handle

## 3. Page Composition

- [x] 3.1 Update `index.astro`: remove Shows/Members imports, add PastShows and Social in correct order
