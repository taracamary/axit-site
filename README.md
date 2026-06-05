# AXIT

Corporate landing page — frontend portfolio project

**Live demo:** [https://maria-kapiturko-axit-site.vercel.app](https://maria-kapiturko-axit-site.vercel.app)

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

## What I focused on

- Building a scalable SCSS system with design tokens, custom functions, and responsive mixins
- Structuring reusable React components with clean prop interfaces
- Applying BEM consistently across a multi-section layout
- Implementing WAI-ARIA patterns for interactive widgets (tabs)
- Keeping accessibility solid without a dedicated framework

---

## UI / UX Highlights

- Tab buttons highlight the active state with a coral background; clicking switches content in place without a page reload
- Mobile sidebar slides in from the right below `768px`; the desktop nav hides automatically via CSS — no JS involved in the toggle visibility logic
- All interactive buttons have `hover` and `focus` states with `background-color` and `border-color` transitions (`0.2s ease`)
- Each content section follows the same visual rhythm: centered title → short decorative `<hr>` line → subtitle → content grid
- Decorative separator lines are `64px` wide, in white on dark backgrounds and coral on light — controlled via BEM modifiers

---

## Architecture

- Each component lives in its own folder with a co-located `.scss` file — styles and markup stay together
- Global SCSS is split into focused partials: `variables`, `functions`, `mixins`, `base`, `shared`, loaded through a single `index.scss` entry point
- BEM naming throughout — flat specificity, no deep nesting
- Design tokens (colors, font sizes, breakpoints) are centralized in `variables.scss`; pixel-to-rem conversion and line-height calculation are handled by custom SCSS functions
- Layout built with CSS Grid for section-level structure and Flexbox for component internals — no utility framework
- Responsive breakpoints managed via `media-breakpoint-up/down` mixins, consistent across all components
- Build tooling: Create React App (react-scripts 5)

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
```

---

## Contact

- **Developer:** Maria Kapiturko — Frontend & HTML Developer
- **Location:** Minsk, Belarus (Available for global remote cooperation)
- **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/taracamary)
- **GitHub:** [Follow on GitHub](https://github.com/taracamary)

---

_This project is part of a frontend portfolio focused on production-level layout structure, styling architecture, and UI interactions_
