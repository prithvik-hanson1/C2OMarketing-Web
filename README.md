# C20 Marketing

A static multi-page website for C20 Marketing, a student-led initiative offering free digital marketing direction to small businesses.

## Pages

- Home and free Direction Finder
- About and team
- Success metrics approach
- Client stories
- Contact form

## Run locally

The site is plain HTML, CSS, and JavaScript. Serve the `site/` folder with any static web server. For example:

```powershell
cd site
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to Netlify

Connect this repository to Netlify. The included `netlify.toml` publishes `site/` with no build command. The contact form uses Netlify Forms, so submissions are collected after deployment. Configure notification recipients in Netlify if needed.

## Project structure

- `site/` — production-ready static website and assets
- `netlify.toml` — Netlify publish and redirect configuration
- `.gitignore` — ignores local tooling, archives, and generated files

## Content notes

The site does not claim client outcomes or success figures that C20 has not supplied. Add case-study details only with client permission and verified results. Review biographies and contact-form settings before making changes public.
