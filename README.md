# Tanay Singh | Portfolio

**Live:** https://tanaysingh-portfolio.vercel.app

Personal portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Editing content

All copy lives in `src/data`:

- `profile.ts` for name, title, tagline, about, quick facts, email, and social links
- `skills.ts` for the tools grid (name and bundled SVG logo from `src/assets/logos`)
- `projects.ts` for project rows and their screenshots
- `hackathons.ts` for the hackathon timeline

Optimized WebP images live in `src/assets/images`. Full-size originals are kept locally in `images-src/`, which is git-ignored and never part of the build.

Any value starting with `TODO` is rendered as a visible dashed placeholder until you replace it.
The Download Resume button links to `Resume.pdf` in the `tanaysinghh/resume` repo, so updating that file updates the site.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```
