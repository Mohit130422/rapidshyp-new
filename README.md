# RapidShyp — Landing Page

A pixel-faithful recreation of the RapidShyp eCommerce shipping platform landing
page, built with **Next.js (App Router)** and **Tailwind CSS v4**.

The page is built entirely from **dynamic, data-driven components** — all copy,
stats, features, FAQs, footer links, etc. live in `/data`, so the marketing team
can update content without touching component code (your "future POV" requirement).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build && npm run start
```

## Architecture

```
app/
  layout.js        # fonts (Poppins + Inter) + metadata
  page.js          # composes every section in order
  globals.css      # Tailwind v4 @theme design tokens + utilities

components/
  ui/              # reusable primitives (Button, Tag, Icon, PhoneMock, ...)
  sections/        # one file per page section, each reads from /data

data/
  navigation.js    # header nav + footer columns
  hero.js          # hero, stats, value props
  features.js      # alternating feature blocks (drive one reusable component)
  sections.js      # AI, dashboard, mobile, modes, testimonials, blog, FAQ, CTA
```

### Why it's "dynamic"

- **`FeatureSections`** renders the same `FeatureSection` component for every entry
  in `data/features.js`. Add an object → a new section appears, layout auto-flips.
- **`FeatureVisual`** switches mock illustrations by a `visual` key, so each
  feature picks its artwork from data.
- **Footer**, **FAQ**, **stats**, **testimonials**, **blog**, and **nav** all
  `.map()` over arrays in `/data`. Change content in one place.

## Design tokens

Defined in `app/globals.css` under `@theme` — brand purple scale, amber/orange
accents, the signature purple→orange gradient, radii, and shadows. Use them as
Tailwind classes like `bg-brand-800`, `text-brand-600`, `gradient-brand`.

## Notes

- Tailwind v4 is configured via `@tailwindcss/postcss` (no `tailwind.config.js`
  needed — tokens live in CSS).
- Illustrations are pure CSS/SVG mocks (no image assets required). Swap in real
  imagery by dropping files in `/public` and referencing them in the components.
- Motion respects `prefers-reduced-motion`.
