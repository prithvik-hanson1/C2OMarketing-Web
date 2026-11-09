# C20 Marketing — Digital Solutions & Marketing

Static agency site generated with Node's standard library. No installed packages or external runtime dependencies.

Run `npm run build` to generate the site, `npm test` to verify prices and content, and `npm start` to preview at http://localhost:4173 (override with C20_PORT). Local form POSTs are rejected; Netlify provides the real form backend.

## Content sources

- `content/catalogue.mjs`: services, prices, categories, deliverables, exclusions, enquiry groups, policies and FAQ. The internal custom-card reference is excluded from public output.
- `content/team.json`: preserved verified biographies and social links.
- `content/projects.mjs`: empty portfolio dataset with its record schema. Publish only approved work; concepts need an explicit label, and outcomes/testimonials need verification/authorization flags.
- `build.mjs`: shared page templates and navigation.
- `site/agency.css` and `site/agency.js`: layout, motion, catalogue filtering, menu and form enhancement.
- `site/assets/`: retained C20 mark and hero art.

Netlify runs `node build.mjs` and publishes `site/`. The static `contact` form includes a honeypot and required fields. Enhanced submission uses URL-encoded POST, preserves inputs on errors and redirects only after a successful HTTP response. Native submission works without JavaScript. Notification recipients are configured in Netlify.

Legacy metrics URLs redirect to How We Work. Previous pages and styles remain in local `archive/pre-project-agency` and Git history. Historical ZIPs and `dist` folders are not publication sources. No environment secrets or analytics integrations were found in the project.

Production requires founder approval. Review on a PR Deploy Preview first; non-production Netlify deployments currently require team login.

