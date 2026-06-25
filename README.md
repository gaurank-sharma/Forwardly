# Forwardly

Award-winning, futuristic marketing site for **Forwardly** — a global digital
studio combining a premium creative agency with a SaaS platform.

> Your Vision. Our Execution.

## Stack
- **Vite + React 19 + React Router 7**
- **Tailwind CSS v4** (design tokens via `@theme` in `index.css`)
- **Three.js / @react-three/fiber / @react-three/drei** — WebGL hero + globe
- **GSAP + ScrollTrigger** — scroll-driven storytelling, reveals, parallax
- **Lenis** — physics-based smooth scrolling
- **lucide-react** — icons

## Getting started
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Architecture
```
src/
  main.jsx                # entry
  App.jsx                 # router + SmoothScroll + custom Cursor
  index.css               # Tailwind v4 theme tokens, glass utilities, keyframes
  pages/
    Home.jsx              # assembles all sections
  sections/               # one file per page section
    Hero.jsx              # 3D morphing core + headline + stats + clients
    AgencyVsSaaS.jsx      # agency vs platform comparison
    Services.jsx          # services grid (Web Dev flagship)
    CaseStudies.jsx       # interactive 3D-tilt case studies
    GlobalReach.jsx       # 3D globe + global stats
    WhyForwardly.jsx      # value pillars (sticky storytelling)
    Testimonials.jsx      # client quotes
    CTA.jsx               # conversion block
  components/
    layout/               # Navbar, Footer
    ui/                   # MagneticButton, GlassCard, Cursor, Reveal,
                          # SectionHeading, Marquee, Logo, Aurora
    three/                # HeroScene, MorphCore, GlobeScene (R3F)
  lib/
    gsap.js               # registers ScrollTrigger once
    SmoothScroll.jsx      # Lenis + GSAP ticker integration + scrollTo()
    useMagnetic.js        # magnetic hover hook
    useReveal.js          # scroll-reveal hook
  data/
    services.js, content.js   # content (services, case studies, testimonials…)
```

## Design system
Brand tokens live in `src/index.css` under `@theme`:
- Backgrounds `#F7F9FC` / `#0B101D`, brand `#2563FF → #00B2FF`
- Fonts: Poppins (display) + Inter (body), loaded in `index.html`
- Custom utilities: `text-gradient`, `bg-gradient-brand`, `glass`, `glass-dark`,
  `glow-brand`, `sheen`

The WebGL scenes are lazy-loaded and respect `prefers-reduced-motion`; the
custom cursor and magnetic effects are disabled on touch devices.
```
