# Pullela Lalitha — Portfolio

**Author:** Pullela Lalitha
**Description:** A fully responsive, animated personal portfolio for a Data Science student specializing in data engineering — ETL pipelines, streaming systems, and analytics. Built from scratch with a data-pipeline visual theme: a decorative parallax "flow" diagram in the hero, scroll-triggered reveals across every section, and content grouped the way a real data pipeline is (Ingest → Transform → Store → Analyze).

🔗 **Live site:** _add your deployed URL here after Phase 5, e.g. `https://lalitha-pullela.vercel.app`_

---

## Tech stack

- **React 18 + Vite** — component structure and fast local dev
- **Tailwind CSS** — utility-first styling, custom design tokens (colors/fonts) in `tailwind.config.js`
- **Framer Motion** — scroll-triggered animations (`whileInView`) and the parallax hero background (`useScroll` / `useTransform`)
- **react-icons** — GitHub/LinkedIn/menu icons
- **Google Fonts** — Space Grotesk (display), Inter (body), JetBrains Mono (labels/tags)

## Features implemented

- Fully responsive layout: mobile (375px), tablet (768px), desktop (1280px+), with a collapsing hamburger nav on mobile
- 1 parallax effect: the animated pipeline line + flowing data "packets" behind the Hero (`src/components/PipelineBackdrop.jsx`)
- 4+ on-scroll animations: About fade-in, Skills staggered badge reveal, Projects staggered card reveal, Education timeline reveal
- `prefers-reduced-motion` respected globally (see `src/index.css`)
- All 5 required sections: Hero, About, Skills, Projects, Contact — plus a bonus Education section
- Visible keyboard focus states for accessibility
- SEO basics: `<title>`, `<meta name="description">`, `<meta name="viewport">`, Open Graph tags

## Project structure

```
portfolio/
├─ src/
│  ├─ components/       # Navbar, Hero, About, Skills, Projects, Education, Contact, Footer, PipelineBackdrop
│  ├─ data/content.js   # All resume content lives here — edit this file to update text/links
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
└─ vite.config.js
```

## Run it locally

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Before you deploy — things to personalize

1. **Project repo links** — in `src/data/content.js`, each project's `github` field currently points to the profile page (`https://github.com/LALITHA-14`). Replace each with the exact repository URL once that project is pushed publicly.
2. **CodeChef / GeeksforGeeks / LeetCode / HackerRank links** — double-check the URLs in the `profiles` array match your exact profile slugs.
3. **Resume download (optional)** — if you want a "Download Resume" button, drop a `resume.pdf` into `public/` and add a link to it (e.g. `<a href="/resume.pdf" download>`).
4. **Phone number** — intentionally left off the live site for privacy. Add it to `src/data/content.js` and the Contact section if you want it public.

## Deployment (Vercel)

1. Push this repo to GitHub (public).
2. Go to [vercel.com](https://vercel.com), **New Project**, import the GitHub repo.
3. Vercel auto-detects Vite — framework preset: **Vite**, build command `npm run build`, output directory `dist`.
4. Deploy. Every push to `main` redeploys automatically.
5. Copy the live URL back into this README and into your submission.

## Lighthouse checklist

After deploying, run a Lighthouse audit (Chrome DevTools → Lighthouse → Desktop) and confirm:

| Category | Target |
|---|---|
| Performance | 80+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 85+ |

If Performance is short, the usual fixes are: compress any images you add to WebP under 300KB (hero) / 150KB (others) and add `loading="lazy"`, since this build currently ships no raster images at all.
