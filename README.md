# C20 Marketing

Static, multi-page marketing site for C20, a student-led team that offers free marketing support to small businesses. The experience uses dark, space-inspired editorial chapters with crisp light sections and restrained C20-blue accents. Text remains readable without JavaScript; optional GSAP motion respects reduced-motion preferences.

## Local preview

From this folder, run `node serve.mjs` and open `http://127.0.0.1:4173`. Netlify publishes the `site/` directory directly; no build step is required.

## Site pages

- `site/index.html`: home, Direction Finder, process, approach, and team preview.
- `site/about.html`: C20 background and verified team biographies.
- `site/metrics.html`: how progress is chosen and reviewed without invented results.
- `site/work.html`: current client collaborations and public details approved for sharing.
- `site/contact.html`: native Netlify form, with Netlify handling submission and redirect.
- `site/thanks.html`: form redirect destination.

## Operational notes

- Netlify Forms must be enabled on the site. Configure notification recipients in the Netlify dashboard if needed.
- The Direction Finder is a starting point, not a promise of a particular result.
- Client work, named outcomes, and testimonials should only be added with permission and confirmed details.
- The page imagery and mark are in `site/assets/`. GSAP and ScrollTrigger are loaded from a pinned jsDelivr CDN on the homepage; motion is progressive enhancement and static content remains visible if the CDN is unavailable.
- The current redesign is intended for a Netlify Deploy Preview. Production deployment requires approval.

