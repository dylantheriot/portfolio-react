# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (port 5173)
npm run build     # Production build to /dist
npm run preview   # Serve /dist locally
```

No test runner, linter, or formatter is configured.

## Architecture

Single-page scrolling portfolio site for dylantheriot.com. Vite + React 19 + Tailwind CSS v4. No routing library, no state management library — just `useState`/`useEffect`/`useRef`.

**Entry flow:** `index.html` → `src/index.jsx` (createRoot) → `App.jsx` (renders all sections top-to-bottom)

**Section render order in App.jsx:**
`NoiseOverlay` → `GradientOrbs` → `Hero` → `ExperienceSpotlight` → `TechStack` → `Education` → `About` → `Archive` → `Footer`

### Key directories

- `src/components/sections/` — full-page sections composing the site
- `src/components/ui/` — reusable primitives (ExpandableGroup, GradientOrbs, NoiseOverlay)
- `src/components/shared/` — scroll animation wrappers (ScrollAnimation.jsx is the active system)
- `src/data/` — static JS data files (experience.js, projects.js, about.js, leadership.js). Edit these to update site content.

### Styling

Tailwind CSS v4 with CSS-first configuration — theme tokens (`--color-bg`, `--color-surface`, `--color-indigo`, etc.) are defined in `src/assets/tailwind.css` under `@theme {}`. There is no `tailwind.config.js`. Custom font AvenirNext and global CSS (keyframe animations, scrollbar, dot-grid background) live in `src/assets/index.css`.

### Animations

Uses `@react-spring/web` throughout. `src/components/shared/ScrollAnimation.jsx` exports named wrappers (`PopIn`, `PopInLeft`, `FadeInLeft`, etc.) that combine IntersectionObserver with react-spring for scroll-triggered animations. Hero uses `useChain` for sequenced entry animation.

### Images

Company logos in `src/assets/images/companies/` and about photos in `src/assets/images/about/` are auto-imported via `import.meta.glob` — drop files in and they're picked up without explicit imports.

### Deployment

GitHub Pages with CNAME pointing to `dylantheriot.com`. `base: './'` in vite.config.js ensures relative asset paths.
