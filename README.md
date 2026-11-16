# Bellio Gulf Coast website

Static marketing site for Bellio Gulf Coast (AR print + AI tools, Panama City, FL).
Plain HTML, CSS and a little JavaScript. No build step, no paid services.

Live: https://jbell003.github.io/bellio-gulf-coast/

## Files
- `index.html` single page site with anchors
- `style.css`, `script.js`
- `assets/` logo, favicon, Open Graph image
- `qr/` QR codes for the live demos (demos live in https://github.com/jbell003/bellio-ar-demo)
- `targets/` the images the demos scan

## Contact form
The form builds a `mailto:` link to belljonathan45@gmail.com. No backend. Nothing is sent until the visitor presses send in their email app.

## Custom domain (CNAME-ready note)
Planned domain: **belliogulfcoast.com** (not registered yet, so there is intentionally no `CNAME` file).

When the domain is bought:
1. Add a file named `CNAME` in the repo root containing one line: `belliogulfcoast.com`
2. At the registrar, add DNS records for GitHub Pages:
   - `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` record for `www` pointing to `jbell003.github.io`
3. In the repo go to Settings > Pages, set the custom domain, and tick "Enforce HTTPS" once the certificate is ready.
4. Replace `https://jbell003.github.io/bellio-gulf-coast/` with `https://belliogulfcoast.com/` in `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD).

## Notes
- No testimonials, client results or client logos are shown.
- Update the phone placeholder `[Phone coming soon]` in `index.html` when a number is ready.
