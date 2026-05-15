# Khalsa Financial Care — Static Site

Fully static HTML/CSS/JS version of the site. Works on any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, even opening `index.html` directly in a browser via a simple local server).

## Files
- `index.html`, `about.html`, `workshops.html`, `founders.html`, `contact.html` — pages
- `styles.css` — design tokens (colors, gradients, shadows)
- `site.js` — shared header + footer injection, mobile menu, icons
- `assets/` — logo, photos, NJ resolutions

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g. `khalsa-financial-care`).
2. Upload everything in this folder to the repo root.
3. In **Settings → Pages**, set Source to `Deploy from a branch` → branch `main`, folder `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within ~1 minute.

## Run locally
```bash
# from this folder:
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes
- Tailwind is loaded via the Play CDN (`cdn.tailwindcss.com`) so the existing utility classes render identically without a build step.
- Lucide icons are loaded from `unpkg.com/lucide`.
- Header and footer are injected by `site.js` so all five pages stay in sync — edit once, applies everywhere.
