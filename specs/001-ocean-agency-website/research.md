# Research: Ocean Agency Travel Website

**Feature Branch**: `001-ocean-agency-website`  
**Date**: 2026-04-24

## 1. Next.js 16.2.4 with App Router + Tailwind CSS 4

**Decision**: Use `create-next-app` with `--tailwind --app --typescript` flags to scaffold the project with Next.js 16 and Tailwind CSS 4.

**Rationale**: 
- Next.js 16 uses React 19 and the App Router by default
- Tailwind CSS 4 has moved to CSS-first configuration (no `tailwind.config.js` needed)
- Configuration via `@theme` directive in `globals.css`
- Single `@import "tailwindcss"` replaces old three-directive setup
- Automatic content detection eliminates the need for `content` array

**Alternatives considered**:
- Tailwind CSS 3: Rejected — v4 is the current standard, has better performance, CSS-first config is simpler
- Vanilla CSS: Rejected — user explicitly requested Tailwind CSS
- Styled Components: Rejected — unnecessary complexity for a marketing site

**Key Implementation Notes**:
- No `tailwind.config.ts` needed — use `@theme` in CSS
- PostCSS plugin: `@tailwindcss/postcss`
- Custom theme variables via `@theme { --color-primary: ... }`
- Plugins imported via `@plugin` directive in CSS

## 2. RTL Arabic Support

**Decision**: Set `dir="rtl"` and `lang="ar"` on the `<html>` element in root layout. Use Tailwind CSS logical properties throughout.

**Rationale**:
- The `dir="rtl"` attribute tells the browser to render content right-to-left
- Tailwind CSS 4 has native RTL support via logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`)
- This approach requires no additional libraries or configuration
- Layout flips automatically when `dir` is set

**Alternatives considered**:
- `next-intl` for full i18n: Rejected — overkill for a single-language site
- Manual CSS overrides: Rejected — logical properties handle RTL automatically
- Third-party RTL plugin: Rejected — built-in Tailwind support is sufficient

**Key Implementation Notes**:
- Use logical properties: `ms-*` (margin-start) instead of `ml-*`, `me-*` instead of `mr-*`
- Use `text-right` naturally handled by RTL direction
- Mirror icons where needed with `rtl:-scale-x-100`
- Font: Use Google Fonts with Arabic subset (e.g., Noto Kufi Arabic, Cairo, or Tajawal)

## 3. Scroll-Based Fade-In Animations

**Decision**: Use native Intersection Observer API via a custom React hook (`useInView`) with CSS transitions on `opacity` and `transform`.

**Rationale**:
- Zero additional dependencies (no `framer-motion` or `react-intersection-observer` needed)
- GPU-accelerated by animating only `opacity` and `transform`
- Intersection Observer is more performant than scroll event listeners
- Simple implementation with `triggerOnce` behavior

**Alternatives considered**:
- `framer-motion`: Rejected — adds 30KB+ to bundle for simple fade-in effects
- `react-intersection-observer`: Rejected — small enough to implement natively
- CSS `scroll-timeline` / `@starting-style`: Considered but browser support is still limited

**Key Implementation Notes**:
- Create `AnimatedSection` wrapper component using `useEffect` + `IntersectionObserver`
- Animate `opacity: 0 → 1` and `translateY: 20px → 0`
- Use `threshold: 0.1` (trigger when 10% visible)
- Respect `prefers-reduced-motion` media query
- Cleanup observer in `useEffect` return

## 4. Image Strategy

**Decision**: Use `next/image` for all images with WebP format. Generate hero background image using AI image generation.

**Rationale**:
- `next/image` provides automatic optimization, lazy loading, and responsive sizing
- WebP format offers best compression-to-quality ratio
- Generated images avoid copyright issues and match the exact brand needs

**Alternatives considered**:
- Stock photos: Rejected — potential licensing issues, generic look
- CSS gradients only: Rejected — less impactful hero section
- Video background: Considered optional enhancement — start with image for performance

**Key Implementation Notes**:
- Hero image: Full-width background with overlay gradient
- Use `priority` prop on hero image for LCP optimization
- Set `sizes` prop appropriately for responsive images
- Use `placeholder="blur"` with `blurDataURL` for progressive loading

## 5. Font Selection

**Decision**: Use **Tajawal** from Google Fonts as the primary Arabic font, with system fallbacks.

**Rationale**:
- Tajawal is a clean, modern Arabic font with multiple weights
- Well-supported on Google Fonts with optimized delivery
- Professional appearance suitable for a travel agency
- Good readability at various sizes

**Alternatives considered**:
- Cairo: Good option but Tajawal has better weight variety
- Noto Kufi Arabic: More calligraphic, less suitable for body text
- Noto Naskh Arabic: Traditional style, less modern feel
- IBM Plex Arabic: Good but less widely used

## 6. Icons Strategy

**Decision**: Use **Lucide React** for service and feature icons.

**Rationale**:
- Tree-shakeable — only imports icons actually used
- Clean, consistent design that matches modern UI
- Lightweight alternative to FontAwesome
- MIT licensed, well-maintained

**Alternatives considered**:
- Heroicons: Good but fewer travel-related icons
- FontAwesome: Heavier bundle size, more complex setup
- Custom SVGs: Higher maintenance burden

## 7. Contact Form API Route

**Decision**: Implement a mock API route at `/api/contact` that validates input and returns a success response.

**Rationale**:
- Demonstrates the full form submission flow
- Easy to replace with real email service (SendGrid, Resend) later
- Validates email format and phone number on both client and server

**Alternatives considered**:
- `mailto:` link: Rejected — poor UX
- Third-party form service (Formspree): Rejected — adds external dependency
- No API route: Rejected — user requested optional API route

## 8. Smooth Scrolling

**Decision**: Use native CSS `scroll-behavior: smooth` on the `<html>` element, combined with anchor-based navigation using `href="#section-id"`.

**Rationale**:
- Zero JavaScript needed for basic smooth scrolling
- Works with all modern browsers
- Simple, reliable implementation

**Alternatives considered**:
- `scrollIntoView({ behavior: 'smooth' })`: More control but requires JS event handlers
- `scroll-snap`: Not appropriate for full-page sections in this design
- Third-party smooth scroll libraries: Unnecessary overhead
