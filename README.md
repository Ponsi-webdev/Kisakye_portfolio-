# Alec Xander — Freelance Portfolio Site

React + Vite + Tailwind CSS portfolio/service website.

## Local Development

Requires [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Editing Content

- **Contact details** (name, email, phone, WhatsApp, location): edit `src/config.js` — every page reads from this one file.
- **Projects**: edit `src/data/projects.js`. Each project needs a `label` ("Built demo", "Portfolio project", or "Demo concept") and a `liveUrl` — set `liveUrl: null` for anything not actually deployed; the site will automatically show "Concept project" instead of a broken Live Demo button.
- **Services, FAQ, tech stack, process steps**: edit `src/data/content.js`.

## Deployment (GitHub Pages, automatic)

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically — you do not need Node installed on your own computer to deploy.

1. Push this whole project (including the `.github` folder) to a GitHub repository.
2. In the repo, go to **Settings → Pages** → set **Source** to **GitHub Actions**.
3. Push to the `main` branch (or click "Run workflow" under the **Actions** tab).
4. After the workflow finishes (a minute or two), your site is live at `https://yourusername.github.io/repo-name/`.

Routing uses `HashRouter`, so page URLs look like `yoursite.com/#/services` — this is intentional and required for GitHub Pages, which doesn't support server-side rewrites for single-page apps.

## Manual Build (optional)

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Mobile Testing Checklist
- [ ] Test at 360px width (smallest common Android screen)
- [ ] Hamburger menu opens and closes correctly
- [ ] All buttons are easily tappable (not too small/close together)
- [ ] No horizontal scrolling on any page

## Accessibility Checklist
- [ ] All images have descriptive alt text (replace placeholders with real ones)
- [ ] Form fields have visible labels
- [ ] Focus states are visible when tabbing through the site
- [ ] Heading order is logical (h1 → h2 → h3, no skipping)

## SEO Checklist
- [ ] Update `index.html` title/meta description if your positioning changes
- [ ] Add per-page titles if you want (currently single-page-app, one title)
- [ ] Replace screenshot placeholders with real optimized images once available

## Conversion Checklist
- [ ] Primary CTA ("Request a Quote") visible above the fold on Home
- [ ] WhatsApp button works on every page
- [ ] Phone and email links work (`tel:` and `mailto:`)
- [ ] Quote form validates required fields before showing success message
- [ ] Every fictional project shows "Demo concept" — never presented as a real client
- [ ] No invented stats, testimonials, or results anywhere on the site
