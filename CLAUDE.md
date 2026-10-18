# JacobAYoung.github.io — Jake's résumé site (Angular 19)

Standalone Angular 19 app, no router, one component. Live on GitHub Pages; stage: live.

- Résumé content is data in `src/app/resume.ts` — edit content there, not in the template.
- A PDF in `public/` mirrors the content for paper: update it when `resume.ts` changes.
- Print stylesheet lives in `app.component.scss`; printing the page is the paper résumé.
- Commands: `npm ci`, `npm start` (http://localhost:4200), `npm run build`, `npm test` (Karma; there are
  no spec files yet).
- Push to `master` deploys via GitHub Actions (`.github/workflows/pages.yml`) — don't push without Jake's OK.
- `dist/` and `.angular/` are build output.
