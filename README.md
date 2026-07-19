# M.Abdullah — Oracle APEX Developer Portfolio (Aurora Theme)

Personal portfolio with an **Aurora glassmorphism theme** — animated gradient blobs,
frosted-glass cards, rotating hero words and a tech marquee.
Built with **React + TypeScript + Vite + Tailwind CSS**. Ready for **GitHub Pages**.

---

## ✏️ 1. Make it yours (edit your content)

Open **`src/data/portfolio.ts`** — this one file drives the whole site:

- `profile` → name, email, location, GitHub / LinkedIn links, rotating hero words
- `stats` → the numbers in the hero card
- `about` → bio paragraphs and highlight cards
- `skillGroups` → skills and levels
- `projects` → your real APEX projects (replace the samples!)
- `experience` / `education` → your timeline

## 💻 2. Run it locally

```bash
npm install
npm run dev
```

## 🚀 3. Put it live on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `portfolio`). Keep it public.
2. **Push this project** to it:

   ```bash
   git init
   git add .
   git commit -m "My Oracle APEX portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**: repo **Settings → Pages → Source → "GitHub Actions"**.

4. Done ✅ — the workflow in `.github/workflows/deploy.yml` builds and publishes
   automatically on every push to `main`. Your site will be live at:

   ```
   https://YOUR-USERNAME.github.io/portfolio/
   ```

> **Tip:** name the repo exactly `YOUR-USERNAME.github.io` to serve the site at
> the root `https://YOUR-USERNAME.github.io/` — everything works the same.

### Why it "just works"

- `vite.config.ts` uses `base: './'` → assets load correctly under any repo path
- `public/.nojekyll` → stops GitHub's Jekyll processing
- `.github/workflows/deploy.yml` → automatic build + deploy on every push

## 🛠️ Tech stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- lucide-react icons
