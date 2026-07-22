# M. Abdullah — Portfolio

A premium, "Aurora Enterprise" themed portfolio for an Oracle APEX & Database Developer, built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion (animations, page/section transitions)
- lucide-react (icon set)
- react-router-dom (`HashRouter`, GitHub Pages-safe routing)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL. The dev server hot-reloads on save.

## Build

```bash
npm run build
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  components/
    layout/        Navbar, Footer
    sections/       Hero, About, Skills, Services, Projects, Experience,
                     Education, Certifications, Stats, Contact, TechMarquee
    ui/             Reusable primitives (Reveal, SectionLabel, AuroraBackground,
                     MouseGlow, ScrollProgressBar, LoadingScreen, ProjectCard,
                     ProjectModal, Timeline, BrandIcons)
    chatbot/        AiAssistant — the offline "Abdullah AI" widget
  data/
    personalData.ts       Single source of truth for all portfolio content
    chatbotKnowledge.ts   Local, offline knowledge base + keyword matcher for the chatbot
  hooks/            useTheme, useScrollProgress, useActiveSection, useCountUp
  pages/            Home, NotFound
```

To update the site's content (name, skills, projects, experience, etc.), edit
`src/data/personalData.ts` — everything else reads from it, including the
chatbot's knowledge base.

## The "Abdullah AI" assistant

The floating chat widget (bottom-right) runs **entirely offline** — no API
keys, no network calls. `src/data/chatbotKnowledge.ts` defines a small set of
intents with keyword triggers; `matchIntent()` scores the user's message
against them and returns a predefined, data-driven response. It only answers
questions about the portfolio owner and politely declines anything else.

## Deploying to GitHub Pages

This repo ships with a ready-to-use GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys `dist/` on every
push to `main`.

1. Push this project to a GitHub repository.
2. In the repo settings, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Important:** `vite.config.ts` sets `base: '/portfolio/'`. If your repository
name is different, update that value to `/<your-repo-name>/` before deploying
(or to `/` if deploying to a `<username>.github.io` root repo).

## Notes

- Routing uses `HashRouter`, so deep links work on GitHub Pages without any
  server-side rewrite rules.
- The contact form is intentionally static (no backend) — it acknowledges
  submissions client-side. Wire it up to a form service (Formspree, Getform,
  etc.) or your own endpoint if you need real delivery.
- Replace `public/resume/M-Abdullah-Resume.pdf` with your own resume file.
- Update the social/contact links and `resumeUrl` in
  `src/data/personalData.ts`.
