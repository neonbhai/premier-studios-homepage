# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development

```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build the application for production
npm start            # Start the production server
npm run lint         # Run ESLint
npm run prettier     # Format all files with Prettier
npm run prettier:check # Check if files are properly formatted
```

### Code Quality

- **Linting**: `npm run lint` - Uses ESLint with Next.js configuration
- **Formatting**: `npm run prettier` - Uses Prettier with Tailwind plugin
- **Type checking**: TypeScript is configured but no dedicated typecheck script

## Architecture Overview

### Framework & Core Technologies

- **Next.js 15.4.6** with App Router architecture
- **React 19.1.0** with TypeScript
- **Tailwind CSS 4** for styling
- **GSAP 3.13.0** with ScrollTrigger for animations
- **Framer Motion 12.23.12** for additional animations

### Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── components/         # React components
│   │   ├── cards/         # Card components (FAQ, Project, Testimonial)
│   │   └── commons/       # Reusable UI components (Buttons, Icons, etc.)
│   ├── data/              # Static data files (services, projects, testimonials)
│   └── (pages)/           # Route pages (about-us, contact-us, projects, etc.)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries and configuration
└── CONSTS.ts             # Application constants (social links, contact info)
```

### Animation System

The project uses a comprehensive scroll animation system:

- **Main Component**: `ScrollAnimatedSection` wraps content for fade-up animations
- **Configuration**: `src/lib/gsap-config.ts` initializes GSAP globally
- **Hooks**: `use-scroll-animation.ts` provides flexible animation utilities
- **Integration**: GSAP config is imported in `layout.tsx`

Key animation components:

- `ScrollAnimatedSection` - Wrap any content for scroll-triggered fade-up
- `useScrollAnimation()` - Hook for direct element animation
- `useBatchScrollAnimation()` - Hook for staggered child animations

### Data Management

Static data is organized in `src/app/data/`:

- `servicesData.ts` - Services offered
- `projectsData.ts` - Project portfolio
- `testimonialsData.ts` - Client testimonials
- `MarqueeData.ts` - Marquee content
- `offerServicesData.ts` - Service offerings

### Component Patterns

- **Section Components**: Major page sections (HeroSection, AboutSection, etc.)
- **Card Components**: Reusable cards in `/components/cards/`
- **Common Components**: Shared UI elements in `/components/commons/`
- **Layout**: Global Footer in layout, NavBar conditionally rendered

### Navigation Structure

Main navigation includes:

- Home (`/`)
- Our work (`/projects`)
- About (`/about-us`)
- Contact (`/contact-us`)

Additional pages:

- Privacy Policy (`/privacy-policy`)
- Terms (`/terms`)

### Constants & Configuration

- **Social Links**: Defined in `CONSTS.ts` (Discord, Instagram, Twitter)
- **Contact Info**: Phone, email, and address in `CONSTS.ts`
- **Styling**: Tailwind with custom font configuration in `lib/fonts.ts`
- **TypeScript**: Path mapping with `@/*` alias pointing to `./src/*`

### Key Dependencies

- **Image Optimization**: `sharp` for Next.js image processing
- **Animation**: GSAP with React integration via `@gsap/react`
- **Icons & Assets**: SVG files stored in `public/assets/`
- **SVGR**: SVGR is implemented

### Development Notes

- Uses Next.js App Router (not Pages Router)
- All animations configured for client-side rendering
- Global styles in `app/globals.css`
- Components follow TypeScript strict mode
- Responsive design with mobile-first approach using Tailwind
