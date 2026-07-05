## 1. Content Model

- [x] 1.1 Add `whatsAppUrl: string` property to `ContactContent` interface in `site.ts`
- [x] 1.2 Add `whatsAppUrl: "https://wa.me/34686209311"` to the `contact` data object

## 2. Component

- [x] 2.1 Add WhatsApp button in `Contact.astro` linking to `contact.whatsAppUrl` with `target="_blank" rel="noopener noreferrer"`
- [x] 2.2 Style WhatsApp button with green (#25d366) to differentiate from email CTA
- [x] 2.3 Preserve existing email action unchanged
