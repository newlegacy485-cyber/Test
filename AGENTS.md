# Luminary Studio — Static Marketing Website

## Cursor Cloud specific instructions

- **Stack**: Pure vanilla HTML, CSS, and JavaScript — no build step, no package manager, no bundler, zero dependencies.
- **Files**: The entire app is `index.html`, `styles.css`, and `script.js` at the repo root.
- **Dev server**: Serve the repo root with any static file server, e.g. `python3 -m http.server 8000` or `npx serve .`. There is no `package.json`, so `npm start`/`npm run dev` will not work.
- **Lint / test / build**: There are no configured linters, test frameworks, or build pipelines. Validate changes by opening the site in a browser and checking visually.
- **Contact form**: The form submission is simulated client-side with a `setTimeout` — no backend request is made.
- **Theming**: Dark/light theme is toggled via `data-theme` attribute on `<html>` and persisted in `localStorage`.
