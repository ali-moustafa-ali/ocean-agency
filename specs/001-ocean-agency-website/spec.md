# Feature Specification: Ocean Agency Travel Website

**Feature Branch**: `001-ocean-agency-website`  
**Created**: 2026-04-24  
**Status**: Draft  
**Input**: User description: "Create a modern, responsive single-page website using Next.js v16.2.4 (App Router) for a travel agency called Ocean Agency."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Agency Landing Page (Priority: P1)

A visitor opens the Ocean Agency website and immediately sees a visually stunning hero section with a travel-themed background, the agency name "Ocean Agency" with Arabic subtitle "وكالة المحيط للسفر والسياحة", a short description, and a CTA button to initiate contact. The phone number 0500807580 is prominently displayed.

**Why this priority**: The hero section is the first impression and primary conversion point. Without it, no other section matters.

**Independent Test**: Can be tested by loading the page and verifying the hero section renders with correct text, background, CTA, and phone number. Delivers immediate brand presence.

**Acceptance Scenarios**:

1. **Given** a visitor lands on the homepage, **When** the page loads, **Then** they see the hero section with background image/video, agency name in English and Arabic, description, CTA button, and phone number.
2. **Given** a visitor is on mobile, **When** the page loads, **Then** the hero section is fully responsive and readable.
3. **Given** a visitor clicks "تواصل معنا", **When** the CTA is clicked, **Then** the page smooth-scrolls to the contact section.

---

### User Story 2 - Explore Services (Priority: P1)

A visitor scrolls down to view all services offered by Ocean Agency. Each service is displayed as a card with an icon, title, short description, and a contact button.

**Why this priority**: Services are the core business offering. Visitors need to understand what the agency provides.

**Independent Test**: Can be tested by scrolling to the services section and verifying all 7 service cards render with icons, titles, descriptions, and contact buttons.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to the Services section, **When** the section is visible, **Then** they see 7 service cards: إصدار التأشيرات, حجز تذاكر الطيران, حجز الفنادق, تنظيم البرامج السياحية, الاستشارات الخاصة بالسفر, متابعة الطلبات, توفير مواصلات.
2. **Given** a visitor hovers over a service card, **When** the hover occurs, **Then** a subtle animation/hover effect is applied.
3. **Given** a visitor clicks "تواصل معنا" on any service card, **When** clicked, **Then** the page scrolls to the contact section.

---

### User Story 3 - Review Why Choose Us (Priority: P2)

A visitor views the "Why Choose Us" section showing features and values that differentiate Ocean Agency from competitors.

**Why this priority**: Trust signals help convert visitors. Important but secondary to core service information.

**Independent Test**: Can be tested by scrolling to the section and verifying features (5 items) and values (4 items) are displayed.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to "Why Choose Us", **When** the section is visible, **Then** they see features: دقة في تجهيز ملفات التأشيرات, خبرة في متطلبات السفارات, خدمة عملاء مستمرة, حلول مخصصة, سرعة في الإنجاز.
2. **Given** a visitor scrolls to "Why Choose Us", **When** the section is visible, **Then** they see values: المصداقية, الاحترافية, الالتزام, رضا العميل.

---

### User Story 4 - Browse Travel Packages (Priority: P2)

A visitor views available travel destination packages with country names, prices, and descriptions organized by category.

**Why this priority**: Packages drive revenue but require service understanding first.

**Independent Test**: Can be tested by scrolling to the packages section and verifying destination cards render with country, price, and description.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to Packages, **When** the section is visible, **Then** they see destination cards for الشنغن, بريطانيا, أمريكا, وجهات سياحية عالمية.
2. **Given** a visitor views a package card, **When** the card is displayed, **Then** it shows country name, price, and short description.

---

### User Story 5 - Read About the Agency (Priority: P2)

A visitor reads about Ocean Agency including its description, vision, and mission.

**Why this priority**: Builds trust and credibility. Supplementary to main offerings.

**Independent Test**: Can be tested by scrolling to About Us and verifying agency description, vision, and mission statements render correctly.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to About Us, **When** the section is visible, **Then** they see the agency description, vision statement, and mission statement.

---

### User Story 6 - Submit Contact Form (Priority: P1)

A visitor fills out the contact form with their email and phone number and submits it. Static contact info (phone and email) is also visible.

**Why this priority**: Contact is the primary conversion action. Essential for business.

**Independent Test**: Can be tested by filling and submitting the form, verifying validation, and checking the static contact info is visible.

**Acceptance Scenarios**:

1. **Given** a visitor fills in email and phone, **When** they click "إرسال", **Then** the form validates inputs and shows success feedback.
2. **Given** a visitor submits with invalid email, **When** they click "إرسال", **Then** a validation error is shown.
3. **Given** a visitor views the contact section, **When** the section loads, **Then** static info shows phone 0500807580 and email Oceansaudi1@gmail.com.

---

### Edge Cases

- What happens when the form is submitted with empty fields? → Validation errors are shown.
- How does the site handle slow network connections? → Images use next/image for optimization; loading states are handled gracefully.
- What happens on very small screens (< 320px)? → Responsive design ensures minimum usable layout.
- What if JavaScript is disabled? → SSR ensures core content is visible.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render a single-page website with 6 sections: Hero, Services, Why Choose Us, Packages, About Us, Contact.
- **FR-002**: System MUST use Next.js v16.2.4 with App Router (app directory).
- **FR-003**: System MUST use Tailwind CSS for all styling.
- **FR-004**: System MUST support RTL (right-to-left) layout for Arabic content.
- **FR-005**: System MUST implement smooth scrolling between sections via navigation and CTA buttons.
- **FR-006**: System MUST be fully responsive across mobile (< 768px), tablet (768px-1024px), and desktop (> 1024px).
- **FR-007**: System MUST display 7 service cards with icons, titles, descriptions, and CTA buttons.
- **FR-008**: System MUST display travel package cards with country, price, and description.
- **FR-009**: System MUST include a contact form with email and phone fields with basic validation.
- **FR-010**: System MUST display static contact information (phone: 0500807580, email: Oceansaudi1@gmail.com).
- **FR-011**: System MUST implement fade-in animations and hover effects on cards and interactive elements.
- **FR-012**: System MUST use SEO-friendly structure with proper meta tags, heading hierarchy, and semantic HTML.
- **FR-013**: System MUST optimize images using next/image component.
- **FR-014**: System MUST use reusable, functional React components.
- **FR-015**: Contact form SHOULD support mock email sending via API route (optional).

### Key Entities

- **Service**: Represents a travel service (icon, title, description).
- **Package**: Represents a travel destination package (country, price, description, category).
- **ContactSubmission**: Represents a form submission (email, phone).
- **Feature**: Represents a "Why Choose Us" feature (icon, title).
- **Value**: Represents a company value (title).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All 6 sections render correctly on page load within 3 seconds (LCP < 2.5s).
- **SC-002**: Website scores 90+ on Google Lighthouse for Performance, Accessibility, Best Practices, and SEO.
- **SC-003**: All text is displayed in Arabic with correct RTL alignment.
- **SC-004**: Smooth scrolling works between all sections via navigation and CTA buttons.
- **SC-005**: Contact form validates email format and phone number before submission.
- **SC-006**: Website renders correctly on Chrome, Firefox, Safari, and Edge latest versions.
- **SC-007**: All images are optimized and served in modern formats via next/image.

## Assumptions

- Users have modern browsers with JavaScript enabled (SSR provides fallback for SEO).
- The website is content-only (no user authentication, no database, no payment processing).
- Package prices are static/hardcoded (no dynamic pricing API).
- Contact form uses a mock API route or displays success message without actual email delivery.
- Arabic is the primary language; English is used only for the agency name "Ocean Agency".
- Images will be generated/sourced for the travel theme (hero background, service icons).
- No multi-language support needed beyond the current Arabic + English branding.
