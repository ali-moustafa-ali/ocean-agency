# Data Model: Ocean Agency Travel Website

**Feature Branch**: `001-ocean-agency-website`  
**Date**: 2026-04-24

> **Note**: This is a static marketing website. All data is defined as TypeScript interfaces and stored as constant arrays in `lib/data.ts`. No database or external API is used.

## Entities

### 1. Service

Represents a travel service offered by Ocean Agency.

| Field       | Type     | Description                           | Required |
|-------------|----------|---------------------------------------|----------|
| id          | string   | Unique identifier (kebab-case)        | Yes      |
| icon        | string   | Lucide icon name                      | Yes      |
| title       | string   | Arabic service title                  | Yes      |
| description | string   | Arabic short description              | Yes      |

**Validation Rules**:
- `id` must be unique across all services
- `title` must be non-empty Arabic text
- `description` should be 20-100 characters

**Instance Count**: 7 services (static)

```typescript
interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}
```

### 2. Package (Travel Destination)

Represents a travel destination package/visa category.

| Field       | Type     | Description                           | Required |
|-------------|----------|---------------------------------------|----------|
| id          | string   | Unique identifier (kebab-case)        | Yes      |
| country     | string   | Arabic country/region name            | Yes      |
| price       | string   | Display price (e.g., "يبدأ من ٢٥٠٠ ر.س") | Yes  |
| description | string   | Arabic short description              | Yes      |
| category    | string   | Category tag                          | Yes      |
| image       | string   | Image path for the destination        | No       |

**Validation Rules**:
- `id` must be unique across all packages
- `price` is a display string (not a number) for flexibility
- `category` is one of: "visa", "tourism"

```typescript
interface Package {
  id: string;
  country: string;
  price: string;
  description: string;
  category: 'visa' | 'tourism';
  image?: string;
}
```

### 3. Feature (Why Choose Us)

Represents a competitive advantage or feature.

| Field       | Type     | Description                           | Required |
|-------------|----------|---------------------------------------|----------|
| id          | string   | Unique identifier                     | Yes      |
| icon        | string   | Lucide icon name                      | Yes      |
| title       | string   | Arabic feature title                  | Yes      |

**Instance Count**: 5 features (static)

```typescript
interface Feature {
  id: string;
  icon: string;
  title: string;
}
```

### 4. Value (Company Values)

Represents a core company value.

| Field | Type   | Description                | Required |
|-------|--------|----------------------------|----------|
| id    | string | Unique identifier          | Yes      |
| title | string | Arabic value title         | Yes      |
| icon  | string | Lucide icon name           | Yes      |

**Instance Count**: 4 values (static)

```typescript
interface Value {
  id: string;
  title: string;
  icon: string;
}
```

### 5. ContactFormData

Represents the data submitted through the contact form.

| Field | Type   | Description                        | Required |
|-------|--------|------------------------------------|----------|
| email | string | User's email address               | Yes      |
| phone | string | User's phone number                | Yes      |

**Validation Rules**:
- `email` must match standard email regex pattern
- `phone` must be a valid phone format (digits, optional +, spaces, dashes)

```typescript
interface ContactFormData {
  email: string;
  phone: string;
}
```

### 6. ContactInfo (Static)

Static contact information displayed on the page.

| Field | Type   | Description                | Value                    |
|-------|--------|----------------------------|--------------------------|
| phone | string | Agency phone number        | "0500807580"             |
| email | string | Agency email address       | "Oceansaudi1@gmail.com"  |

```typescript
interface ContactInfo {
  phone: string;
  email: string;
}
```

### 7. NavItem

Navigation link for smooth scrolling.

| Field   | Type   | Description              | Required |
|---------|--------|--------------------------|----------|
| id      | string | Target section ID        | Yes      |
| label   | string | Arabic display label     | Yes      |

```typescript
interface NavItem {
  id: string;
  label: string;
}
```

## Relationships

```text
Page
├── NavItem[] ─────────────► Section IDs (anchor links)
├── HeroSection ───────────► ContactInfo (phone display)
├── ServicesSection ───────► Service[] (7 cards)
├── WhyChooseUsSection ────► Feature[] (5 items) + Value[] (4 items)
├── PackagesSection ───────► Package[] (4+ cards)
├── AboutSection ──────────► Static content (no entity)
└── ContactSection ────────► ContactFormData (form) + ContactInfo (static)
```

## State Transitions

### Contact Form State

```text
IDLE → VALIDATING → SUBMITTING → SUCCESS
                  ↘ VALIDATION_ERROR
                              ↘ SUBMISSION_ERROR
```

| State            | Description                              |
|------------------|------------------------------------------|
| IDLE             | Form is ready for input                  |
| VALIDATING       | Client-side validation in progress       |
| VALIDATION_ERROR | One or more fields have validation errors |
| SUBMITTING       | Form data being sent to API route        |
| SUCCESS          | Submission successful, show confirmation |
| SUBMISSION_ERROR | API route returned an error              |
