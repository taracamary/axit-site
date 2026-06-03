# AXIT — High-Fidelity Component-Driven UI Prototype

A modern, production-ready corporate landing page prototype built with **React 18** and **Modular SCSS**. This project serves as an architectural demonstration of the **Atomic Design Philosophy**, showcasing highly isolated, reusable UI primitives, scalable styling systems, and fluid layout mechanics

* **Live Demo:** https://taracamary.github.io/axit-site/
* **Target Domain:** SaaS Landing Pages, Corporate Prototypes, High-Conversion Marketing Interfaces

---

## 🏗️ Technical Architecture & Key Engineering Solutions

### 1. Atomic Component Splitting & Reusability
The React layer (`src/components/`) is split into independent structural layout nodes and global reusable primitives:
* **UI Primitives:** Elements like `/button`, `/logo`, and `/decorative-line` are fully decoupled from layout concerns, relying exclusively on props for customization
* **Layout Blocks:** Global structural components (`/header`, `/footer`, `/nav`, `/sidebar`) manage positioning, while individual view segments are isolated inside the `/sections` wrapper to optimize React's virtual DOM reconciliation process

### 2. Tokenized & Scalable Styling Engine
Styles are engineered using an advanced, decoupled preprocessor directory (`src/scss/`):
* **`variables.scss` & `functions.scss`:** Centralized design tokens governing theme colors, strict semantic typography hierarchies, and automated pixel-to-rem calculation systems
* **BEM Encapsulation:** Class names strictly adhere to BEM guidelines to eliminate CSS selector nesting side-effects, guaranteeing low specificity and optimal rendering speeds during deep browser layout passes
* **Layout Integrity:** Achieves perfect cross-browser fluidity using dynamic CSS Grid matrices and Flexbox systems without the overhead of heavy visual utility frameworks

### 3. Accessible Interactive Patterns
* Built-in interactive tabs feature hardware-accelerated smooth opacity transitions
* Accessible cross-device sidebar navigation powered by responsive viewport detection
* Semantic HTML5 structure engineered to conform with web accessibility best practices

---

## 🛠️ Complete Tech Stack

* **Frontend Library:** React 18 (Component-driven view architecture)
* **Styling Preprocessor:** SCSS utilizing advanced mixins, custom utility functions, and responsive media abstraction layers
* **Layout Systems:** Comprehensive CSS Grid & Flexbox layouts
* **Navigation:** React-Burger-Menu for touch-optimized mobile drawer interactions
* **Asset Optimization:** Font Awesome integration for resolution-independent iconography
* **Package Management & Automation:** npm ecosystem with automated `gh-pages` deployment integration

---

## 💻 Local Development Setup

Make sure you have Node.js and npm installed

```bash
git clone https://github.com/taracamary/axit-site.git

```

```bash
cd axit-site

```

```bash
npm install

```

```bash
npm start

```

*The application will mount locally. Navigate to: `http://localhost:8080/homepage.html`*
