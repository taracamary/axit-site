# AXIT

Corporate landing page — frontend portfolio project

**Live demo:** [https://maria-kapiturko-axit-site.vercel.app/](https://maria-kapiturko-axit-site.vercel.app/)

---

## Overview

A multi-section landing page built to demonstrate practical frontend skills: semantic markup, scalable SCSS architecture, component-based structure, and basic accessibility practices

The implementation focuses on clean, maintainable code rather than feature volume — responsive grid layouts, reusable UI primitives, and consistent BEM naming throughout. React serves as a rendering layer; the main focus is on layout structure and styling approach

---

## Tech Stack

- **React 18** — component-based rendering
- **SCSS** — BEM methodology, modular partial architecture
- **react-burger-menu** — accessible mobile sidebar overlay
- **Create React App** — build tooling (react-scripts 5)
- **vercel** — deployment

---

## Key Features

- **Responsive layout** — custom breakpoint system (`xs` / `sm` / `md` / `lg` / `xl`) via `media-breakpoint-up/down` mixins; CSS Grid and Flexbox for all layouts
- **Interactive tabs** — controlled with `useState`, content switches on click
- **Mobile navigation** — burger menu sidebar, collapses at `≥ 768px`
- **Reusable UI components** — `Button`, `Form`, `DecorativeLine`, `SectionTitle`, `SectionSubtitle` consumed across sections via props
- **Data-driven sections** — pricing cards and social icons rendered from static arrays, not hardcoded markup

---

## Architecture

### SCSS

```
src/scss/
├── functions.scss   — rem-calc(), unitless-lh(), breakpoint resolution
├── variables.scss   — color tokens, font stacks, font-size scale, breakpoints
├── mixins.scss      — media-breakpoint-up/down, section-grid-markup
├── fonts.scss       — @font-face (Open Sans, Raleway, Roboto)
├── base.scss        — box-sizing reset, element defaults
├── shared.scss      — .wrapper, .button base reset, .visually-hidden
└── index.scss       — single import entry point
```

Each component has its own `.scss` file co-located alongside the `.js` file. BEM is applied consistently — flat specificity, no deeply nested selectors.

### Component structure

```
src/components/
├── button/              — variant-based (transparent / color)
├── decorative-line/     — modifier-driven (white / coral)
├── form/                — shared across banner and contact sections
├── header/ nav/ sidebar/ logo/
├── section-title/ section-subtitle/
└── sections/
    ├── banner-section/
    ├── benefits-section/   └── benefit-card/
    ├── comments-section/   └── comment-card/
    ├── prices-section/     └── price-card/
    ├── social-section/     └── social-items/
    ├── tabs-section/
    ├── portfolio-section/
    └── contact-section/
```

---

## Accessibility (A11y)

- Semantic HTML5 — `<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`, `<article>`
- Proper heading hierarchy — `h1` → `h2` (section titles) → `h3` (card/panel content)
- Visually-hidden `<label>` for every form field, including textarea
- `aria-label` on icon-only links (social icons)
- Decorative images use `alt=""`
- Tab widget follows WAI-ARIA Authoring Practices: `role="tablist"`, `role="tab"`, `aria-selected`, `role="tabpanel"`

---

## Getting Started

```bash
git clone https://github.com/taracamary/axit-site.git
cd axit-site
npm install

npm start        # dev server → http://localhost:3000
npm run build    # production build
npm run deploy   # publish to GitHub Pages
```

---

## What This Project Covers

- Building a scalable SCSS system with design tokens, custom functions, and responsive mixins
- Structuring reusable React components with clean prop interfaces
- Applying BEM consistently across a multi-section layout
- Implementing WAI-ARIA patterns for interactive widgets (tabs)
- Keeping accessibility solid without a dedicated framework

---

## Contact

- **Developer:** Maria Kapiturko — Frontend & HTML Developer
- **Location:** Minsk, Belarus (Available for global remote cooperation)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/taracamary)
- **GitHub:** [Follow on GitHub](https://github.com/taracamary)
