# Koalafied Wiki

Team Koalafied's knowledge base covering electrical, software, mechanical and manufacturing, built with [VitePress](https://vitepress.dev).

**Live site:** https://declan-kb.github.io/Koalafied-Wiki/

## Editing

Click **Edit this page on GitHub** at the bottom of any page. See [How to edit](docs/contributing/how-to-edit.md) for the full guide, including how to add pages and images.

## Running locally

```bash
npm install
npm run docs:dev
```

Then open http://localhost:5173/Koalafied-Wiki/. `npm run docs:build` does a full build and fails on broken internal links.

Pushing to `main` deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`).
