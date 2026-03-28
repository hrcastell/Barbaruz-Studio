# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Barbaruz Studio is a single-page React website for a barbershop/salon. The application is located in the `app/` directory and features a modern, section-based landing page with smooth scrolling navigation.

## Tech Stack

- **Frontend**: React 19.2 with TypeScript
- **Build Tool**: Vite 7.2
- **Styling**: Tailwind CSS 3.4 with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives) - see `app/components.json`
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Router**: React Router DOM 7.13

## Commands

All commands should be run from the `app/` directory:

```bash
cd app

# Development server with HMR
npm run dev

# Build for production (TypeScript + Vite)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Section-Based Structure

The app is organized as a single-page application with discrete sections:

- [src/App.tsx](app/src/App.tsx) - Main entry point that imports all sections
- [src/sections/](app/src/sections/) - Individual page sections (HeroSection, StudioSection, ServicesSection, ForHimSection, ForHerSection, BarbersSection, CutCollectionSection)
- [src/components/](app/src/components/) - Reusable components (Navbar)
- [src/components/ui/](app/src/components/ui/) - shadcn/ui components (auto-generated, modify with caution)

### Navigation Pattern

The app uses smooth scrolling via `element.scrollIntoView({ behavior: 'smooth' })`. Each section has an `id` attribute that corresponds to navigation targets:

- `#home` → HeroSection
- `#studio` → StudioSection
- `#services` → ServicesSection
- `#for-him` → ForHimSection
- `#for-her` → ForHerSection
- `#barbers` → BarbersSection
- `#cutcollection` → CutCollectionSection

The Navbar component ([src/components/Navbar.tsx](app/src/components/Navbar.tsx)) tracks active sections via scroll position and highlights the current section.

### Path Aliases

Configured in [vite.config.ts](app/vite.config.ts):

- `@/*` → `app/src/*`
- Use `@/components/ui/button` instead of relative paths

### Design System

The project uses a neutral earth-tone color palette defined inline (not in Tailwind config):

- Primary beige: `#C4B8A8`
- Dark brown: `#5A5448`, `#3D3830`, `#4A4540`
- Light cream: `#F5F0E8`, `#E8E4DC`
- Muted tones: `#8B8378`, `#9A9588`, `#6B6558`

These colors are used consistently throughout sections for backgrounds, text, and interactive elements.

### Responsive Design

- Mobile-first approach with Tailwind's responsive modifiers (`md:`, `lg:`)
- Mobile menu in Navbar toggles via state
- Images use aspect ratios and object-fit for consistent display
- Sections adapt from single-column to grid layouts on larger screens

## Working with UI Components

This project uses shadcn/ui. To add new components:

```bash
cd app
npx shadcn@latest add <component-name>
```

Components are installed to `app/src/components/ui/` and can be customized. Refer to [components.json](app/components.json) for configuration.

## Image Handling

Images are stored in `app/public/images/` and referenced as `/images/filename.jpg`. All image elements include error handlers that hide missing images gracefully:

```tsx
onError={(e) => {
  (e.target as HTMLImageElement).style.display = 'none';
}}
```

## Development Notes

- The Vite config includes `kimi-plugin-inspect-react` for React component inspection
- ESLint is configured with flat config format ([eslint.config.js](app/eslint.config.js))
- TypeScript strict mode is enabled
- The build uses `base: './'` for relative paths (supports deployment to subdirectories)
