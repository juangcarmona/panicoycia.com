# Deployment — panicoycia.com

## Hosting: Azure Static Web Apps

The site is deployed to **Azure Static Web Apps** (Free tier).

- Build output: `src/web/dist/`
- App location: `src/web`
- Output location: `dist`
- API location: _(empty — no API in v1)_

## CI/CD: GitHub Actions

Deployment is triggered automatically on push to `main`.

- Workflow file: `.github/workflows/azure-static-web-apps.yml` _(to be added with Astro scaffold change)_
- Authentication: `AZURE_STATIC_WEB_APPS_API_TOKEN` secret in GitHub repository settings
- Do not modify the deploy workflow without confirming the secret name is unchanged

## Domains

| Role | Domain | Status |
|---|---|---|
| Canonical | `panicoycia.es` | Primary domain |
| Defensive | `panicoycia.com` | Redirect to canonical |

Both domains should redirect non-www to www (or vice versa) — decide before DNS setup.

## DNS: Cloudflare

- DNS is expected to be managed in **Cloudflare**.
- Azure SWA provides a `*.azurestaticapps.net` domain for staging/validation.
- Add CNAME records in Cloudflare pointing to the Azure SWA hostname once provisioned.
- Enable Cloudflare proxying (orange cloud) only after SSL validation is confirmed.

## Azure SWA Routing

Routing rules are defined in `staticwebapp.config.json` at the project root (to be created with the Astro scaffold change). Key rules:

- Serve `index.html` for all routes (single-page site, no server-side routing needed)
- Set security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`
- 404 fallback: redirect to `/`

## Staging

Azure SWA creates a preview environment for each pull request automatically. Preview URLs follow the pattern:
`https://<sha>.<location>.azurestaticapps.net`

## Rollback

Redeploy the previous commit via GitHub Actions (`Re-run jobs` on the prior successful workflow run).
