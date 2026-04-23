# Quickstart: Ocean Agency Travel Website

**Feature Branch**: `001-ocean-agency-website`  
**Date**: 2026-04-24

## Prerequisites

- Node.js 20+ installed
- npm or bun package manager

## Setup

### 1. Initialize the Project

```bash
cd /Users/alimoustafa/Downloads/ocean
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --yes
```

> **Note**: The `--yes` flag runs in non-interactive mode. The `--src-dir=false` puts the `app/` directory at the project root (not under `src/`).

### 2. Install Additional Dependencies

```bash
npm install lucide-react
```

### 3. Configure RTL and Arabic Font

In `app/layout.tsx`, set:
```tsx
<html lang="ar" dir="rtl">
```

Import Tajawal font from Google Fonts using `next/font/google`:
```tsx
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
});
```

### 4. Configure Tailwind Theme

In `app/globals.css`:
```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(0.55 0.18 230);      /* Deep ocean blue */
  --color-primary-light: oklch(0.65 0.15 230); /* Lighter blue */
  --color-primary-dark: oklch(0.40 0.20 230);  /* Darker blue */
  --color-secondary: oklch(0.70 0.12 180);     /* Teal accent */
  --color-accent: oklch(0.75 0.15 55);         /* Warm gold */
  --color-surface: oklch(0.98 0.005 230);      /* Light surface */
  --color-surface-dark: oklch(0.15 0.02 230);  /* Dark surface */
  --color-text: oklch(0.20 0.02 230);          /* Dark text */
  --color-text-light: oklch(0.95 0.005 230);   /* Light text */
}
```

### 5. Project Structure

Create the following directories:
```bash
mkdir -p components/layout components/sections components/ui lib public/images
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Development Workflow

1. Start with `app/layout.tsx` (RTL, fonts, metadata)
2. Create reusable UI components (`SectionHeading`, `AnimatedSection`)
3. Create static data in `lib/data.ts`
4. Build section components one at a time (Hero → Services → Why Us → Packages → About → Contact)
5. Compose sections in `app/page.tsx`
6. Add Navbar and Footer
7. Create API route for contact form
8. Polish animations and responsiveness
9. Generate hero background image
10. Lighthouse audit and optimization

## Key Commands

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start dev server         |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
