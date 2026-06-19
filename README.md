# jamesrmccarthy.ai

Personal site for **Jim McCarthy** (James R. McCarthy). Operator thesis, proof library, and writing.

Built with [Astro](https://astro.build). Deployed on [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel (framework preset: Astro).
3. Add custom domain `jamesrmccarthy.ai` and `www.jamesrmccarthy.ai`.
4. Point DNS to Vercel (A/CNAME per Vercel dashboard).

No environment variables required for V1.

## Content

Essays live in `src/content/writing/`. Add a markdown file with frontmatter:

```yaml
---
title: "Post title"
subtitle: "Optional subtitle"
description: "One-line summary for indexes and meta tags"
pubDate: 2026-06-19
draft: false
---
```

Set `draft: true` to hide from production builds.

Site copy and proof library: `src/data/`.

## AI discoverability

- `/llms.txt` — curated identity and page map for LLM crawlers
- Person JSON-LD on every page
- `/rss.xml` — writing feed
- `/sitemap-index.xml` — auto-generated via `@astrojs/sitemap`
- `/robots.txt` — allows major AI crawlers

## Design

Warm-light editorial layout. Typography-only hero (V1). Darker teal accent on links and nav.
