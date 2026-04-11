# Flowlytics

**Analytics SaaS landing page** — built to demonstrate real-world React + Tailwind frontend skills for freelance clients.

🔗 **Live Demo:** [flowlytics-three.vercel.app](https://flowlytics-three.vercel.app)

---

## What it is

Flowlytics is a fully responsive landing page for a fictional analytics SaaS product. It showcases the kind of frontend work clients hire for: clean UI, smooth animations, working interactive components, and production-quality code structure.

---

## Features

- **Animated hero section** — staggered headline entrance with Framer Motion, live animated stats row
- **Navbar** — blur-on-scroll effect, responsive hamburger menu
- **Social proof marquee** — auto-scrolling logo bar with fade gradient edges
- **Feature cards** — scroll-triggered stagger animations with `whileInView`
- **Pricing toggle** — monthly/yearly switch with live price updates
- **FAQ accordion** — smooth expand/collapse
- **CTA section** — Formspree-wired contact form
- **Fully responsive** — mobile, tablet, desktop

---

## Tech Stack

| Tool | Usage |
|---|---|
| React 18 | Component architecture |
| Tailwind CSS | Styling and responsive layout |
| Framer Motion | Page animations, scroll triggers |
| Formspree | Contact form backend |
| Vercel | Deployment |

---

## Getting Started

```bash
git clone https://github.com/Sohelspathan/flowlytics
cd flowlytics
npm install
npm run dev
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
├── sections/
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── SocialProof.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── CTA.jsx
└── App.jsx
```

---

## Key Implementation Notes

**Scroll-based navbar** — `useEffect` attaches a single scroll listener on mount and cleans it up on unmount to prevent listener stacking across route changes.

**Framer Motion scroll triggers** — `viewport={{ once: true, amount: 0.2 }}` fires animations when 20% of the element enters the viewport, giving a natural reveal without firing too early.

**Pricing toggle** — driven by a single `boolean` state; yearly/monthly prices are stored per plan object and swapped conditionally.

---

## Deployment

Deployed on Vercel via GitHub integration. Any push to `main` triggers a new deployment automatically.

---

## What this demonstrates for clients

- Pixel-perfect responsive implementation
- Smooth, production-grade animations (not just CSS transitions)
- Clean component structure and reusable patterns
- Real interactivity (toggle, accordion, form)
- Fast load times with optimized font loading

---

*Part of my freelance frontend portfolio. Built with React + Tailwind + Framer Motion.*