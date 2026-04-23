# Implementation Plan: Ocean Agency Travel Website

**Branch**: `001-ocean-agency-website` | **Date**: 2026-04-24 | **Spec**: [spec.md](specs/001-ocean-agency-website/spec.md)
**Input**: Feature specification from `/specs/001-ocean-agency-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a modern, responsive single-page website for Ocean Agency (وكالة المحيط للسفر والسياحة), a travel agency. The site will use **Next.js v16.2.4** with App Router, **Tailwind CSS** for styling, and full **RTL/Arabic** support. The page consists of 6 sections: Hero, Services, Why Choose Us, Packages & Pricing, About Us, and Contact. The site features smooth scrolling, fade-in animations, hover effects, SEO optimization, and responsive design across all breakpoints.

## Technical Context

**Language/Version**: TypeScript 5.x / Node.js 20+ / Next.js 16.2.4 (App Router)  
**Primary Dependencies**: Next.js 16.2.4, React 19, Tailwind CSS 4.x, Lucide React (icons)  
**Storage**: N/A (static site, no database)  
**Testing**: Manual browser testing, Lighthouse audits  
**Target Platform**: Web (all modern browsers: Chrome, Firefox, Safari, Edge)  
**Project Type**: Web application (single-page marketing site)  
**Performance Goals**: LCP < 2.5s, Lighthouse 90+ across all categories  
**Constraints**: Static content only, no authentication, no payment processing  
**Scale/Scope**: Single page with 6 sections, ~15 components, < 5000 LOC

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The constitution file is currently a default template without project-specific principles defined. No custom gates or constraints are in effect. Proceeding with standard best practices:

- ✅ **Component-based architecture**: All UI elements will be reusable functional components
- ✅ **Type safety**: TypeScript used throughout
- ✅ **SEO compliance**: Semantic HTML, proper heading hierarchy, meta tags
- ✅ **Accessibility**: ARIA attributes, proper contrast ratios, keyboard navigation
- ✅ **Performance**: Image optimization via next/image, minimal bundle size

**Gate Status**: PASS (no custom constitution constraints to evaluate)

## Project Structure

### Documentation (this feature)

```text
specs/001-ocean-agency-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   └── ui-contracts.md  # UI component contracts
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout (RTL, fonts, metadata)
├── page.tsx             # Main page composing all sections
├── globals.css          # Tailwind CSS imports + custom styles
├── api/
│   └── contact/
│       └── route.ts     # Contact form API route (mock)
└── fonts/               # Custom Arabic fonts (if needed)

components/
├── layout/
│   ├── Navbar.tsx       # Navigation bar with smooth scroll links
│   └── Footer.tsx       # Footer with contact info
├── sections/
│   ├── HeroSection.tsx  # Hero with background, CTA, phone
│   ├── ServicesSection.tsx    # Service cards grid
│   ├── WhyChooseUsSection.tsx # Features + values
│   ├── PackagesSection.tsx    # Destination package cards
│   ├── AboutSection.tsx       # Description, vision, mission
│   └── ContactSection.tsx     # Form + static info
├── ui/
│   ├── ServiceCard.tsx  # Individual service card
│   ├── PackageCard.tsx  # Individual package card
│   ├── FeatureItem.tsx  # Individual feature item
│   ├── ValueBadge.tsx   # Individual value badge
│   ├── ContactForm.tsx  # Contact form component
│   ├── SectionHeading.tsx # Reusable section title
│   └── AnimatedSection.tsx # Intersection Observer wrapper for fade-in
└── icons/               # Custom SVG icons (if needed)

lib/
├── data.ts              # Static data (services, packages, features, values)
└── utils.ts             # Utility functions (smooth scroll, validation)

public/
├── images/
│   ├── hero-bg.webp     # Hero background image
│   └── ...              # Other images
└── favicon.ico

tailwind.config.ts       # Tailwind configuration (RTL, Arabic fonts, custom theme)
next.config.ts           # Next.js configuration
tsconfig.json            # TypeScript configuration
package.json             # Dependencies
```

**Structure Decision**: Single Next.js application using the App Router pattern. All components are organized by concern: `layout/` for structural components, `sections/` for page sections, `ui/` for reusable atomic components. Static data is centralized in `lib/data.ts` for easy content updates. No backend separation needed as this is a static marketing site.

## Complexity Tracking

> No constitution violations to justify. Standard Next.js App Router architecture is straightforward for a single-page marketing site.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| N/A       | N/A        | N/A                                  |
