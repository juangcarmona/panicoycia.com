### Requirement: README describes the project
`README.md` SHALL contain a project summary, intended stack, repository layout description, local development placeholder, and deployment target.

#### Scenario: New contributor reads README
- **WHEN** someone opens the repository for the first time
- **THEN** the README tells them what the project is, what tech it uses, how folders are organized, and where it deploys

### Requirement: Website brief defines product intent
`docs/product/website-brief.md` SHALL describe the website's purpose, target audience, sections, content assumptions, and placeholder asset policy.

#### Scenario: Content decisions are documented
- **WHEN** a contributor needs to know what sections the site has
- **THEN** `website-brief.md` lists: hero, about, shows, members, gallery, videos, repertoire, contact/booking

### Requirement: Deployment doc covers Azure SWA
`docs/operations/deployment.md` SHALL document the Azure Static Web Apps target, GitHub Actions CI/CD expectation, canonical domain (`panicoycia.es`), optional defensive domain (`panicoycia.com`), and DNS provider (Cloudflare).

#### Scenario: Ops info is findable
- **WHEN** a contributor needs to configure deployment
- **THEN** `deployment.md` provides the domain, hosting, and DNS context

### Requirement: API README explains reservation
`src/api/README.md` SHALL explain the folder is reserved for a future Azure Function contact endpoint and that nothing should be implemented there yet.

#### Scenario: No premature API work
- **WHEN** an agent is asked to add API logic
- **THEN** it reads the README and understands the folder is intentionally empty
