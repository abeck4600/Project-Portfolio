# Project-Portfolio

This repository contains the portfolio site in [my-projects-site](my-projects-site).

## Local development

Run the site from the repository root:

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

The workflow in [\.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml) builds the Vite app and publishes the generated files to the repository root, which lets GitHub Pages serve the site from `main`.

After GitHub Pages is enabled for the repository root, the public site will be available at:

`https://abeck4600.github.io/Project-Portfolio/`