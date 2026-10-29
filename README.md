# A2Z IPTV Website

SEO-focused static website for A2Z IPTV, an IPTV subscription and IPTV reseller platform. The site presents IPTV streaming plans, multi-connection options, reseller panels, IPTV restreaming services, setup guidance, country-specific landing pages, and support information in a fast, crawlable HTML structure.

## Website highlights

- Responsive IPTV subscription and reseller landing pages
- Country-focused pages for Australia, Canada, China, Hong Kong, India, Indonesia, Israel, Italy, Japan, and South Korea
- IPTV restreaming and reseller-panel comparisons
- Multi-connection and single-connection subscription information
- Sports coverage sections for football, basketball, cricket, motorsports, combat sports, and other live events
- Setup guides and device-focused streaming guidance
- Pricing, free-trial, refund-policy, and support-oriented pages
- XML sitemap for search-engine discovery
- Lightweight static HTML, CSS, and JavaScript with no server-side framework

## Main page groups

| Area | Representative pages |
| --- | --- |
| IPTV subscriptions | `subscriptions.html`, `single-connection.html`, `multi-connections.html`, `free-trial.html` |
| IPTV restreaming | `restream.html`, `australia-iptv-restream.html`, `canada-iptv-restream.html`, `china-iptv-restream.html`, `hong-kong-iptv-restream.html` |
| Reseller services | `reseller.html`, `iptv-reseller-panel-australia.html`, `iptv-reseller-panel-canada.html`, `iptv-reseller-panel-china.html`, `iptv-reseller-panel-hong-kong.html` |
| Country landing pages | `buy-iptv-subscription-in-*.html`, `best-iptv-restream-in-*.html` |
| Guides and policies | `setup-guide.html`, `about-us.html`, `refund-policy.html`, `page-sitemap.xml` |

## Technology

- Semantic HTML5 pages
- Tailwind-style utility classes and custom responsive CSS
- Vanilla JavaScript for navigation, carousels, accordions, icons, and interactive content
- Font Awesome and web fonts loaded from external CDNs
- GitHub-ready static deployment with no build step required

## Run locally

Because this is a static website, it can be previewed with any local HTTP server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser.

Opening `index.html` directly also works for basic inspection, but an HTTP server is recommended for testing relative links and browser behavior consistently.

## SEO and content structure

The project uses descriptive page filenames, country-specific URLs, internal navigation between related IPTV services, reusable headings, responsive layouts, and `page-sitemap.xml` to support discoverability. When adding a page, keep the title, heading hierarchy, canonical URL strategy, internal links, image `alt` text, and sitemap entry aligned with the page topic.

## Deployment

This repository is designed for static hosting. Upload the repository contents to a static host or configure the host to serve `index.html` as the default document. Ensure that HTML pages, JavaScript, CSS, and sitemap files retain their relative paths after deployment.

## Repository notes

The repository contains both production-facing static pages and JavaScript utilities used for inspection and validation during site maintenance. Review any content, links, pricing, and legal copy before publishing changes to production.

## License

No open-source license is specified for this repository. Site content, branding, copy, and design should be treated as proprietary unless the owner grants permission for reuse.
