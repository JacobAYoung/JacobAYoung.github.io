# jacobayoung.github.io

Jake Young's résumé site. Angular 19 (standalone, no router), one component, the résumé as data in
`src/app/resume.ts`; the PDF in `public/` is the same content for paper.

- Edit `src/app/resume.ts`, push to `master` → GitHub Actions builds and deploys to Pages.
- Local: `npm ci && npx ng serve` → http://localhost:4200
- Print the page and you get the résumé (print stylesheet in `app.component.scss`).
