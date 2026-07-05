## ADDED Requirements

### Requirement: Single-page layout with all sections
The page SHALL render a single scrollable page containing Hero, About, Upcoming Shows, Band Members, Gallery, Videos, Repertoire, Booking/Contact, and Footer sections in that order.

#### Scenario: All sections visible on load
- **WHEN** a user navigates to the site root
- **THEN** all nine sections are present in the DOM and reachable by scrolling

### Requirement: Responsive layout
The page SHALL be responsive and mobile-first, rendering correctly on viewports from 320px to 2560px wide.

#### Scenario: Mobile viewport
- **WHEN** the site is viewed on a 375px-wide viewport
- **THEN** all content is readable without horizontal scrolling and interactive elements are tap-friendly (min 44px touch target)

#### Scenario: Desktop viewport
- **WHEN** the site is viewed on a 1440px-wide viewport
- **THEN** content uses the available width with grid layouts for members, gallery, and repertoire

### Requirement: Anchor navigation
The page SHALL include a fixed navigation bar with links to each section using anchor IDs.

#### Scenario: Navigation link scrolls to section
- **WHEN** a user clicks a navigation link
- **THEN** the page scrolls smoothly to the corresponding section

#### Scenario: Mobile navigation
- **WHEN** the site is viewed on a mobile viewport
- **THEN** the navigation collapses into a hamburger menu that expands on tap

### Requirement: Semantic HTML and accessibility
All sections SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and include appropriate ARIA labels, `alt` text on images, and keyboard navigability.

#### Scenario: Screen reader navigation
- **WHEN** a screen reader user navigates the page
- **THEN** all sections are announced with meaningful headings and all images have descriptive alt text

#### Scenario: Keyboard navigation
- **WHEN** a user navigates using only the keyboard
- **THEN** all interactive elements (links, buttons, menu) are reachable via Tab and activatable via Enter/Space

### Requirement: SEO meta tags
The page SHALL include essential meta tags: title, description, Open Graph tags (og:title, og:description, og:image), and a canonical URL.

#### Scenario: Social sharing preview
- **WHEN** the site URL is shared on a social platform
- **THEN** the platform displays the band name, description, and a preview image

### Requirement: Hero section
The Hero section SHALL display the band name, a tagline, and a call-to-action button linking to the booking section.

#### Scenario: Hero renders
- **WHEN** the page loads
- **THEN** the hero section is the first visible content with band name, tagline, and CTA button

### Requirement: About section
The About section SHALL display a band description paragraph.

#### Scenario: About content
- **WHEN** a user scrolls to the About section
- **THEN** a description of the band and its music style is visible

### Requirement: Shows section
The Shows section SHALL display a list of upcoming shows with date, venue, city, and an optional ticket link.

#### Scenario: Shows with data
- **WHEN** the `site.ts` file contains upcoming shows
- **THEN** each show displays date, venue, city, and a ticket link if available

#### Scenario: No upcoming shows
- **WHEN** the `site.ts` file has an empty shows array
- **THEN** a message indicates no upcoming shows are scheduled

### Requirement: Members section
The Members section SHALL display each band member with their name, role/instrument, and a photo.

#### Scenario: Member cards
- **WHEN** the page renders the members section
- **THEN** each member is displayed in a card with photo, name, and instrument

### Requirement: Gallery section
The Gallery section SHALL display a grid of photos with lazy loading.

#### Scenario: Gallery renders
- **WHEN** a user scrolls to the gallery
- **THEN** images load lazily and display in a responsive grid

### Requirement: Videos section
The Videos section SHALL embed YouTube videos referenced in `site.ts`.

#### Scenario: Video embeds
- **WHEN** the videos section renders
- **THEN** each video is displayed as a responsive iframe embed with a title attribute

### Requirement: Repertoire section
The Repertoire section SHALL display the band's song list grouped by category or artist.

#### Scenario: Song list renders
- **WHEN** the repertoire section renders
- **THEN** songs are listed with title and original artist, grouped logically

### Requirement: Booking/Contact section
The Booking section SHALL display contact information and a mailto link for booking inquiries.

#### Scenario: Contact info visible
- **WHEN** a user scrolls to the booking section
- **THEN** an email link and phone number (if provided) are displayed for booking

### Requirement: Footer
The Footer SHALL display copyright, social media links, and the band name.

#### Scenario: Footer renders
- **WHEN** the user reaches the bottom of the page
- **THEN** copyright year, band name, and social links are visible
