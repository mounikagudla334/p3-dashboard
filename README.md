# Personal Finance Dashboard (P3) — Vibe Coding Module 12

React + TypeScript + Tailwind + Recharts + Vite. Dependencies are
pre-installed in `node_modules` — **do not run `npm install`**, it's
not needed and may fail on a corporate-proxied network.

## Run it locally
```
npm run dev
```
Then open the printed http://localhost:5173 (or 5174) link.

## Edit the data
Mock data lives in `src/data/financeData.ts` — 12 months of income/expense
figures and the category breakdown. Edit there to change the numbers shown.

## Deploy
1. `git init`
2. `git add .`
3. `git commit -m "initial commit"`
4. Create an empty repo on github.com, push this repo to it.
   (`node_modules` is excluded via `.gitignore` — that's correct;
   Vercel installs its own dependencies during deployment.)
5. On vercel.com: New Project → Import your GitHub repo → Deploy.

## If something breaks
- Run `npm run build` locally first to confirm it's clean before deploying.
- If node_modules ever needs reinstalling on this machine and `npm install`
  fails, that's the corporate registry proxy issue — re-extract this
  original zip instead of reinstalling.
