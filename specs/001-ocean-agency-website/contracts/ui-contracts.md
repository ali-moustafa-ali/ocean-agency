# UI Component Contracts: Ocean Agency Travel Website

**Feature Branch**: `001-ocean-agency-website`  
**Date**: 2026-04-24

> This document defines the public interface contracts for all React components. Each contract specifies the props, behavior, and accessibility requirements.

## Layout Components

### Navbar

```typescript
// components/layout/Navbar.tsx
interface NavbarProps {
  // No props — uses static NavItem[] data from lib/data.ts
}

// Behavior:
// - Fixed position at top of viewport
// - Transparent background on hero, solid on scroll
// - Contains logo/brand name + navigation links
// - Mobile: hamburger menu with slide-in nav
// - Each nav link smooth-scrolls to target section
// - Active link highlights based on scroll position

// Accessibility:
// - <nav> element with aria-label="التنقل الرئيسي"
// - Mobile menu button: aria-expanded, aria-controls
// - Skip-to-content link (hidden, visible on focus)
```

### Footer

```typescript
// components/layout/Footer.tsx
interface FooterProps {
  // No props — uses static ContactInfo from lib/data.ts
}

// Behavior:
// - Displays copyright, contact info, quick links
// - Fixed at bottom of page flow

// Accessibility:
// - <footer> element with appropriate role
// - Links have descriptive text
```

## Section Components

### HeroSection

```typescript
// components/sections/HeroSection.tsx
interface HeroSectionProps {
  // No props — self-contained with static content
}

// Behavior:
// - Full viewport height (min-h-screen)
// - Background image with dark overlay gradient
// - Centered content: title, subtitle, description, CTA, phone
// - CTA button scrolls to #contact section
// - Phone number is clickable (tel: link)
// - Parallax or subtle animation on background

// Accessibility:
// - Background image is decorative (aria-hidden)
// - CTA button has descriptive aria-label
// - Phone link: aria-label="اتصل بنا"
```

### ServicesSection

```typescript
// components/sections/ServicesSection.tsx
interface ServicesSectionProps {
  // No props — uses Service[] from lib/data.ts
}

// Behavior:
// - Section ID: "services"
// - Section heading: "خدماتنا"
// - Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop
// - Each card uses ServiceCard component
// - Fade-in animation on scroll
```

### WhyChooseUsSection

```typescript
// components/sections/WhyChooseUsSection.tsx
interface WhyChooseUsSectionProps {
  // No props — uses Feature[] and Value[] from lib/data.ts
}

// Behavior:
// - Section ID: "why-us"
// - Section heading: "لماذا تختارنا؟"
// - Two sub-sections: Features grid + Values display
// - Features: icon + text items
// - Values: badge/pill style display
// - Fade-in animation on scroll
```

### PackagesSection

```typescript
// components/sections/PackagesSection.tsx
interface PackagesSectionProps {
  // No props — uses Package[] from lib/data.ts
}

// Behavior:
// - Section ID: "packages"
// - Section heading: "باقاتنا ووجهاتنا"
// - Responsive grid of PackageCard components
// - Optional category filter tabs
// - Fade-in animation on scroll
```

### AboutSection

```typescript
// components/sections/AboutSection.tsx
interface AboutSectionProps {
  // No props — self-contained static content
}

// Behavior:
// - Section ID: "about"
// - Section heading: "من نحن"
// - Three content blocks: Description, Vision, Mission
// - Each block has its own icon and heading
// - Fade-in animation on scroll
```

### ContactSection

```typescript
// components/sections/ContactSection.tsx
interface ContactSectionProps {
  // No props — uses ContactInfo from lib/data.ts
}

// Behavior:
// - Section ID: "contact"
// - Section heading: "تواصل معنا"
// - Two columns: ContactForm + Static contact info
// - Static info: phone (tel: link), email (mailto: link)
// - Fade-in animation on scroll
```

## UI Components

### ServiceCard

```typescript
// components/ui/ServiceCard.tsx
interface ServiceCardProps {
  icon: string;        // Lucide icon name
  title: string;       // Arabic service title
  description: string; // Arabic description
}

// Behavior:
// - Card with icon, title, description, CTA button
// - Hover: subtle scale transform + shadow elevation
// - CTA button scrolls to #contact
// - Gradient border or accent color on hover

// Accessibility:
// - <article> element
// - Icon is decorative (aria-hidden)
// - Button: "تواصل معنا"
```

### PackageCard

```typescript
// components/ui/PackageCard.tsx
interface PackageCardProps {
  country: string;     // Arabic country name
  price: string;       // Display price string
  description: string; // Arabic description
  category: string;    // Category label
  image?: string;      // Optional destination image
}

// Behavior:
// - Card with country, price badge, description
// - Optional background image with overlay
// - Hover: subtle scale + shadow
// - Category badge displayed

// Accessibility:
// - <article> element
// - Image has alt text if present
// - Price is semantically marked
```

### FeatureItem

```typescript
// components/ui/FeatureItem.tsx
interface FeatureItemProps {
  icon: string;  // Lucide icon name
  title: string; // Arabic feature title
}

// Behavior:
// - Horizontal layout: icon + text
// - Subtle hover animation
// - Staggered fade-in within parent
```

### ValueBadge

```typescript
// components/ui/ValueBadge.tsx
interface ValueBadgeProps {
  title: string; // Arabic value title
  icon: string;  // Lucide icon name
}

// Behavior:
// - Pill/badge style with icon + text
// - Gradient or accent background
// - Subtle hover scale effect
```

### SectionHeading

```typescript
// components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  title: string;     // Arabic section title
  subtitle?: string; // Optional Arabic subtitle
}

// Behavior:
// - Centered heading with decorative underline/accent
// - Optional subtitle below
// - Uses proper heading level (h2)
// - Consistent spacing across all sections

// Accessibility:
// - Proper heading hierarchy (h2 for section, h3 for subsections)
```

### AnimatedSection

```typescript
// components/ui/AnimatedSection.tsx
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;    // Animation delay in ms (default: 0)
  direction?: 'up' | 'down' | 'left' | 'right'; // Slide direction (default: 'up')
}

// Behavior:
// - Wraps children with Intersection Observer
// - Fades in + slides when element enters viewport
// - triggerOnce: true (animates only first time)
// - threshold: 0.1 (triggers when 10% visible)
// - Respects prefers-reduced-motion

// Implementation:
// - Uses useEffect + IntersectionObserver
// - CSS transitions on opacity + transform
// - Cleanup observer on unmount
```

### ContactForm

```typescript
// components/ui/ContactForm.tsx
interface ContactFormProps {
  // No props — self-contained with internal state
}

// State:
// - email: string
// - phone: string
// - errors: { email?: string; phone?: string }
// - status: 'idle' | 'submitting' | 'success' | 'error'

// Behavior:
// - Two input fields: email, phone
// - Client-side validation on blur and submit
// - Submit to /api/contact POST endpoint
// - Show success message on 200 response
// - Show error message on failure
// - Disable button during submission

// Validation:
// - Email: standard email regex
// - Phone: digits only, optional +, min 8 chars

// Accessibility:
// - <form> element with aria-label
// - Labels associated with inputs via htmlFor
// - Error messages linked via aria-describedby
// - Submit button has loading state with aria-busy
```

## API Route

### POST /api/contact

```typescript
// app/api/contact/route.ts

// Request Body:
interface ContactRequest {
  email: string;
  phone: string;
}

// Response (200):
interface ContactResponse {
  success: true;
  message: string; // "تم إرسال رسالتك بنجاح"
}

// Response (400):
interface ContactErrorResponse {
  success: false;
  errors: {
    email?: string;
    phone?: string;
  };
}

// Behavior:
// - Validates email and phone server-side
// - Returns 400 with field-specific errors if invalid
// - Returns 200 with success message if valid
// - Mock implementation (no actual email sent)
// - Rate limiting consideration for production
```
