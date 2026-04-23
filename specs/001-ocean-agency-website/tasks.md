# Tasks: Ocean Agency Travel Website

**Input**: Design documents from `/specs/001-ocean-agency-website/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not explicitly requested in spec. Skipping test tasks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization with Next.js 16.2.4, Tailwind CSS 4, and basic configuration

- [X] T001 Initialize Next.js 16.2.4 project with App Router, TypeScript, and Tailwind CSS using `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes`
- [X] T002 Install additional dependencies: `lucide-react` via `npm install lucide-react`
- [X] T003 Configure root layout with RTL direction, Arabic lang, and Tajawal font in `app/layout.tsx`
- [X] T004 Configure Tailwind CSS 4 theme with custom color palette (ocean blue, teal, gold) using `@theme` directive in `app/globals.css`
- [X] T005 [P] Create project directory structure: `components/layout/`, `components/sections/`, `components/ui/`, `lib/`, `public/images/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core shared components and data that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T006 Define all TypeScript interfaces (Service, Package, Feature, Value, ContactFormData, ContactInfo, NavItem) in `lib/types.ts`
- [X] T007 Create static data constants (services array, packages array, features array, values array, contact info, nav items) in `lib/data.ts`
- [X] T008 [P] Create utility functions (email validation, phone validation, smooth scroll helper) in `lib/utils.ts`
- [X] T009 [P] Create `AnimatedSection` wrapper component with Intersection Observer, fade-in + slide animation, triggerOnce, and prefers-reduced-motion support in `components/ui/AnimatedSection.tsx`
- [X] T010 [P] Create `SectionHeading` reusable component with centered title, optional subtitle, and decorative underline in `components/ui/SectionHeading.tsx`
- [X] T011 Generate hero background image (ocean/travel theme, wide panoramic) and save to `public/images/hero-bg.webp`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Browse Agency Landing Page (Priority: P1) 🎯 MVP

**Goal**: Visitor sees stunning hero section with background image, agency name, Arabic subtitle, description, CTA, and phone number

**Independent Test**: Load page, verify hero renders with correct text, background, CTA button, phone number. CTA scrolls to contact section. Responsive on mobile.

### Implementation for User Story 1

- [X] T012 [US1] Create `Navbar` component with fixed positioning, transparent-to-solid background on scroll, logo/brand name, navigation links, and mobile hamburger menu in `components/layout/Navbar.tsx`
- [X] T013 [US1] Create `HeroSection` component with full-viewport background image, dark overlay gradient, centered title "Ocean Agency", subtitle "وكالة المحيط للسفر والسياحة", description, CTA button linking to #contact, and clickable phone number (tel: link) in `components/sections/HeroSection.tsx`
- [X] T014 [US1] Create `Footer` component with copyright, contact info, and quick navigation links in `components/layout/Footer.tsx`
- [X] T015 [US1] Compose initial `app/page.tsx` with Navbar, HeroSection, and Footer; configure smooth scrolling via `scroll-behavior: smooth` in globals.css
- [X] T016 [US1] Add SEO metadata (title, description, Open Graph, favicon) in `app/layout.tsx` metadata export

**Checkpoint**: Hero page is fully functional and testable — visitor sees a stunning landing page with CTA and phone

---

## Phase 4: User Story 2 - Explore Services (Priority: P1)

**Goal**: Visitor scrolls down to view all 7 services as cards with icons, titles, descriptions, and contact buttons

**Independent Test**: Scroll to services section, verify 7 cards render with correct icons, Arabic titles, descriptions, and CTA buttons. Hover effects work. CTA scrolls to contact.

### Implementation for User Story 2

- [X] T017 [P] [US2] Create `ServiceCard` component with icon (Lucide), Arabic title, description, hover scale+shadow animation, and "تواصل معنا" CTA button linking to #contact in `components/ui/ServiceCard.tsx`
- [X] T018 [US2] Create `ServicesSection` component with section heading "خدماتنا", responsive grid (1/2/3 cols), rendering 7 ServiceCard instances from data, wrapped in AnimatedSection in `components/sections/ServicesSection.tsx`
- [X] T019 [US2] Add ServicesSection to `app/page.tsx` after HeroSection with section id="services"

**Checkpoint**: Services section visible with all 7 cards, hover effects, and contact CTAs

---

## Phase 5: User Story 6 - Submit Contact Form (Priority: P1)

**Goal**: Visitor fills out contact form (email, phone), submits it with validation. Static contact info visible.

**Independent Test**: Fill form with valid/invalid data, verify validation errors and success message. Static phone and email visible.

### Implementation for User Story 6

- [X] T020 [P] [US6] Create `ContactForm` component with email input, phone input, client-side validation (email regex, phone format), submit button "إرسال", loading state, success/error messages, and aria attributes in `components/ui/ContactForm.tsx`
- [X] T021 [P] [US6] Create mock API route at `app/api/contact/route.ts` that validates email and phone server-side, returns 200 with success message or 400 with field errors
- [X] T022 [US6] Create `ContactSection` component with section heading "تواصل معنا", two-column layout (form + static info), static phone (tel: link for 0500807580) and email (mailto: link for Oceansaudi1@gmail.com) in `components/sections/ContactSection.tsx`
- [X] T023 [US6] Add ContactSection to `app/page.tsx` with section id="contact"

**Checkpoint**: Contact form works end-to-end with validation. Static contact info displayed. All P1 stories complete.

---

## Phase 6: User Story 3 - Review Why Choose Us (Priority: P2)

**Goal**: Visitor views features (5 items) and values (4 items) that differentiate Ocean Agency

**Independent Test**: Scroll to "Why Choose Us" section, verify 5 features and 4 values render correctly.

### Implementation for User Story 3

- [X] T024 [P] [US3] Create `FeatureItem` component with icon and Arabic title, subtle hover animation in `components/ui/FeatureItem.tsx`
- [X] T025 [P] [US3] Create `ValueBadge` component with icon and Arabic title, gradient/accent pill style, hover scale in `components/ui/ValueBadge.tsx`
- [X] T026 [US3] Create `WhyChooseUsSection` component with section heading "لماذا تختارنا؟", features grid (FeatureItem × 5), values display (ValueBadge × 4), wrapped in AnimatedSection in `components/sections/WhyChooseUsSection.tsx`
- [X] T027 [US3] Add WhyChooseUsSection to `app/page.tsx` after ServicesSection with section id="why-us"

**Checkpoint**: Why Choose Us section displays all features and values with animations

---

## Phase 7: User Story 4 - Browse Travel Packages (Priority: P2)

**Goal**: Visitor views destination package cards with country names, prices, and descriptions

**Independent Test**: Scroll to packages section, verify destination cards for الشنغن, بريطانيا, أمريكا, وجهات سياحية عالمية render with prices and descriptions.

### Implementation for User Story 4

- [X] T028 [P] [US4] Create `PackageCard` component with country name, price badge, description, category label, optional image with overlay, hover scale+shadow animation in `components/ui/PackageCard.tsx`
- [X] T029 [US4] Create `PackagesSection` component with section heading "باقاتنا ووجهاتنا", responsive grid, rendering PackageCard instances from data, wrapped in AnimatedSection in `components/sections/PackagesSection.tsx`
- [X] T030 [US4] Add PackagesSection to `app/page.tsx` after WhyChooseUsSection with section id="packages"

**Checkpoint**: Packages section displays all destination cards with pricing

---

## Phase 8: User Story 5 - Read About the Agency (Priority: P2)

**Goal**: Visitor reads agency description, vision, and mission statements

**Independent Test**: Scroll to About Us, verify description, vision, and mission render correctly in Arabic.

### Implementation for User Story 5

- [X] T031 [US5] Create `AboutSection` component with section heading "من نحن", three content blocks (description with agency overview, vision "أن نكون من الجهات الرائدة...", mission "توفير حلول سفر متكاملة بجودة عالية..."), each with icon and sub-heading, wrapped in AnimatedSection in `components/sections/AboutSection.tsx`
- [X] T032 [US5] Add AboutSection to `app/page.tsx` after PackagesSection with section id="about"

**Checkpoint**: All user stories implemented — full page is functional

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Visual refinement, performance optimization, and final touches

- [X] T033 [P] Add smooth scroll-spy highlighting to Navbar based on current viewport section
- [X] T034 [P] Add staggered fade-in delays to card grids (ServiceCards, PackageCards, FeatureItems) for sequential reveal effect
- [X] T035 [P] Add WhatsApp floating button linking to 0500807580 with hover tooltip in `components/ui/WhatsAppButton.tsx` and add to `app/page.tsx`
- [X] T036 Verify full RTL layout correctness across all sections, fix any LTR remnants in spacing/alignment
- [X] T037 Test responsive breakpoints (mobile < 768px, tablet 768-1024px, desktop > 1024px) and fix layout issues
- [X] T038 Optimize all images with next/image `priority`, `sizes`, and `placeholder="blur"` props
- [X] T039 Run Lighthouse audit and address any scores below 90 for Performance, Accessibility, Best Practices, SEO
- [X] T040 Add loading.tsx skeleton for initial page load in `app/loading.tsx`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **US1 Hero (Phase 3)**: Depends on Foundational — first story to implement
- **US2 Services (Phase 4)**: Depends on Foundational — can parallel with US1
- **US6 Contact (Phase 5)**: Depends on Foundational — can parallel with US1/US2 (needed for CTA links)
- **US3 Why Choose Us (Phase 6)**: Depends on Foundational — can parallel with P1 stories
- **US4 Packages (Phase 7)**: Depends on Foundational — can parallel with other stories
- **US5 About (Phase 8)**: Depends on Foundational — can parallel with other stories
- **Polish (Phase 9)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: No dependencies on other stories — delivers MVP hero page
- **US2 (P1)**: Independent — adds services cards to page
- **US6 (P1)**: Independent — adds contact section (CTA target for US1/US2)
- **US3 (P2)**: Independent — adds why choose us section
- **US4 (P2)**: Independent — adds packages section
- **US5 (P2)**: Independent — adds about section

### Within Each User Story

- UI components before section components
- Section components before page composition
- All sections added to page.tsx in visual order

### Parallel Opportunities

- T005, T008, T009, T010 can run in parallel (different files)
- T012, T013, T014 can run in parallel within US1 (different component files)
- T017 can parallel with T020, T021 (different user stories)
- T024, T025 can run in parallel (different component files)
- T033, T034, T035 can run in parallel (different polish tasks)

---

## Parallel Example: User Story 2 (Services)

```bash
# Launch ServiceCard component (no dependencies on other US2 tasks):
Task: "Create ServiceCard component in components/ui/ServiceCard.tsx"

# Then compose into section (depends on ServiceCard):
Task: "Create ServicesSection in components/sections/ServicesSection.tsx"

# Then add to page (depends on ServicesSection):
Task: "Add ServicesSection to app/page.tsx"
```

---

## Implementation Strategy

### MVP First (P1 Stories: US1 + US2 + US6)

1. Complete Phase 1: Setup (project init)
2. Complete Phase 2: Foundational (types, data, utilities, shared components)
3. Complete Phase 3: US1 - Hero Section
4. Complete Phase 4: US2 - Services Section
5. Complete Phase 5: US6 - Contact Section
6. **STOP and VALIDATE**: Test all P1 stories independently — site has hero, services, and contact
7. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Hero) → Test → MVP landing page
3. Add US2 (Services) → Test → Services visible
4. Add US6 (Contact) → Test → Full conversion funnel (MVP complete!)
5. Add US3 (Why Choose Us) → Test → Trust signals added
6. Add US4 (Packages) → Test → Revenue info added
7. Add US5 (About) → Test → Full brand story
8. Polish → Final quality pass

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- US6 (Contact) elevated to Phase 5 because it is the CTA target for US1 and US2
- All text content is Arabic; ensure proper RTL rendering at each checkpoint
