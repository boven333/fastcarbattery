# Fastcar Battery — Next.js

Thai responsive website built with Next.js App Router. `npm install`, `npm run dev`, `npm run build` (static output in `out/`).

Preview builds intentionally use noindex and disallow crawling. For production on fastcarbattery.com build with `SITE_INDEXABLE=true npm run build`. Canonical URLs and sitemap target the original domain. Configure the production host before enabling indexing.

## Migration status
This is the new frontend, not a completed WordPress data migration. The original website and DNS have not been changed. Phone numbers confirmed by owner; LINE unavailable. Address and hours taken from original website; confirm before launch. Hero photo is AI-generated illustrative imagery, not an actual shop/team photo.

Before replacing WordPress:
- Export WordPress pages, posts, products, media and SEO metadata; inventory URLs using sitemap and Search Console. Existing `/services/` and `/location/` retained; legacy products/blog have not yet been migrated.
- Migrate product data, article bodies and images into a selected CMS/data source; preserve valuable existing URLs and metadata. Do not redirect all retired articles/products to the homepage.
- Build a one-to-one permanent redirect map for changed URLs. Static Next exports cannot implement server redirects; configure them at the final host/CDN.
- Confirm prices, inventory, warranty, exact service area and business address. No invented reviews, response times or prices are used.
- Choose hosting and CMS if owner needs editing. This export has no admin dashboard or persistent forms.
- Add verified analytics/Search Console configuration and submit sitemap after production launch. Validate structured data, indexing, 404s, performance and redirect responses on the real domain.

Sources: https://fastcarbattery.com/ and https://fastcarbattery.com/location/ inspected 2026-09-19.
