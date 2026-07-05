## ADDED Requirements

### Requirement: CSS custom properties design system
The site SHALL define a design token system using CSS custom properties in `src/web/src/styles/global.css` covering colors, typography, spacing, radii, and shadows.

#### Scenario: Tokens are defined
- **WHEN** the `global.css` file is loaded
- **THEN** all design tokens are available as CSS custom properties on `:root`

### Requirement: Dark stage-inspired palette
The color scheme SHALL use a near-black background (`#090607`), deep red accent (`#c1121f`), amber/gold highlight (`#f4a261`), and high-contrast light text (`#f7f2ea`).

#### Scenario: Background is dark
- **WHEN** the site renders
- **THEN** the body background is near-black with subtle radial gradient accents

#### Scenario: Accent colors used consistently
- **WHEN** interactive elements (buttons, links, highlights) render
- **THEN** they use the red accent or gold highlight colors

### Requirement: Responsive typography
Typography SHALL use `clamp()` for fluid sizing, a system font stack for body text, and a serif display font for headings.

#### Scenario: Text scales with viewport
- **WHEN** the viewport changes size
- **THEN** heading and body text sizes adjust fluidly without breakpoint jumps

### Requirement: Reveal-on-scroll animations
Elements with a `[data-reveal]` attribute SHALL animate into view (fade in + slide up) when entering the viewport, using IntersectionObserver.

#### Scenario: Element enters viewport
- **WHEN** a `[data-reveal]` element scrolls into view (15% visible)
- **THEN** it transitions from `opacity: 0; translateY(32px)` to `opacity: 1; translateY(0)` over 700ms

#### Scenario: Animation fires once
- **WHEN** a `[data-reveal]` element has been revealed
- **THEN** the observer unobserves it and the element remains visible on subsequent scrolls

### Requirement: Reduced motion support
The site SHALL respect `prefers-reduced-motion: reduce` by disabling all transitions, animations, and smooth scrolling.

#### Scenario: Reduced motion preference active
- **WHEN** the user's OS has reduced motion enabled
- **THEN** all `[data-reveal]` elements are immediately visible, scroll behavior is `auto`, and no CSS transitions or animations run

### Requirement: Utility classes
The CSS SHALL provide reusable utility classes: `.section`, `.container`, `.eyebrow`, `.section-title`, `.section-lead`, `.button`, and `.card`.

#### Scenario: Section layout
- **WHEN** a section uses `.section` and `.container`
- **THEN** it has consistent vertical padding and a max-width centered container
