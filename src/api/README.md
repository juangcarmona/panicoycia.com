# src/api — Reserved: Future Azure Function

This directory is reserved for a future **Azure Functions** contact endpoint.

## Purpose

When implemented, this folder will contain an HTTP-triggered Azure Function that handles contact/booking form submissions from the website.

## Status

**Not implemented.** Do not add any code, dependencies, or configuration here until the contact form feature is explicitly requested.

## Planned Scope (when implemented)

- Single HTTP-triggered function: `contact` (POST)
- Receives form data from the website contact section
- Sends an email notification to the band's booking address
- No database, no authentication, no storage

## Structure (when scaffolded)

```
src/api/
  contact/
    function.json
    index.ts
  host.json
  local.settings.json   ← git-ignored
  package.json
```

## Notes for Agents

- Do not scaffold this folder.
- Do not add a `package.json` or any dependencies here.
- Do not reference this folder in any build or deploy configuration until the API change is approved and planned via OpenSpec.
