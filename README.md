# Daniel Moreno Cartagena - Personal Portfolio

This is a personal web portfolio built with [Astro](https://astro.build), tailored for a Machine Learning Engineer & Researcher. Features a clean, dark theme with neon green accents.

## Requirements
- Node.js (v18 or higher recommended)
- NPM

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/danielmoreno/danielmoreno.github.io.git
cd danielmoreno.github.io
npm install
```

## Local Development
Start the dev server:

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

## Deployment to GitHub Pages
This project is configured to automatically deploy to GitHub Pages. All you need to do is:
1. Ensure your repository is named `[username].github.io` (or update `astro.config.mjs` path mappings)
2. Go to your repository settings on GitHub -> Pages
3. Set the source build step from "Deploy from a branch" to "GitHub Actions".
4. The `.github/workflows/deploy.yml` action will trigger automatically on pushes to `main`.

## Configuration
Before deploying, make sure to replace placeholders logically:
- Review `Formspree ID` located in `src/components/Contact.astro`
- Provide paths to PDF and SVG placeholders inside `public/` directory (e.g. `public/cv.pdf`).
- Check social links across components.
