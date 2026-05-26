# Portfolio (Next.js)

Premium portfolio scaffold for Keerat Bhasin. See [`../UI_SPEC.md`](../UI_SPEC.md) for the living design spec.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- GSAP (installed; ScrollTrigger wiring in Phase 2)
- Lenis smooth scroll

## Structure

- `src/lib/content.ts` — copy and data (single source of truth)
- `src/components/` — section components
- `public/resume.pdf` — resume download

## Legacy

The original static site remains at the repo root (`index.html`) until GitHub Pages cutover.
