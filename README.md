# VOLD Artisan - Website

Static website for **VOLD Artisan**, an artisan bakery & café in Batam Center, Indonesia, that also supplies
bread, pastry, buns and noodles to cafes, restaurants, hotels, catering and retail (B2B).

## Pages

| Path | Content |
|---|---|
| `/` | Hero slider with scroll parallax, product categories, B2B and café highlights, why VOLD, closing CTA |
| `/b2b/` | B2B supply: product sample, link to the 2026 catalogue (PDF), how it works, WhatsApp quotation |
| `/cafe/` | Café: opening hours, location, Instagram, photo gallery, signature menu |

## Tech

Plain HTML + CSS, one small script (`assets/js/hero.js`) for the hero parallax. No framework, no build step,
no database. Fonts (DM Serif Display, DM Sans) and images are self-hosted in `assets/`.

SEO: each page has its own title, description, canonical, Open Graph and Twitter tags, plus JSON-LD
(`Bakery`, `WebSite`, `Service`). `robots.txt` and `sitemap.xml` are at the root.

## Run locally

```bash
npm start            # serves the folder on http://localhost:3000
```

Or open `index.html` directly in a browser. All links are relative, so the site works under a sub-path
(GitHub Pages project site) as well as on its own domain.

## Deploy

GitHub Pages: Settings > Pages > Source "Deploy from a branch", branch `main`, folder `/ (root)`.
`.nojekyll` is included so Pages serves the files as they are.

If the site moves to its own domain, update the absolute URLs in the `<head>` of the three `index.html`
files (canonical, `og:url`, `og:image`, JSON-LD), plus `robots.txt` and `sitemap.xml`.

## Security

Static files only: no server code, database, forms, login or third-party scripts. Every page ships a
Content Security Policy (meta tag) that only allows scripts, styles, fonts and images from this site.
External links open with `rel="noreferrer"`. GitHub Pages cannot set response headers, so
`frame-ancestors`/`X-Frame-Options` (clickjacking) and custom HSTS are not possible here; turn on
"Enforce HTTPS" in the Pages settings.

## Status

- Done: home, B2B and café pages, responsive layout, parallax, SEO metadata.
- Not yet: favicon, a dedicated 1200x630 social preview image, own domain.
- Menu and the B2B catalogue are PDFs hosted on Google Drive, linked from the site.

## Brand

The VOLD Artisan name, logo, photos and copy belong to VOLD Artisan and are shown here with permission.
They are not licensed for reuse. No open-source license is granted for this repository.
