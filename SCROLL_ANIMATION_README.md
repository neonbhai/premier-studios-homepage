# ScrollAnimatedSection Implementation

This document explains how to use the ScrollAnimatedSection component with GSAP in this Next.js project.

## Overview

The ScrollAnimatedSection component provides smooth scroll-triggered fade-up animations using GSAP's ScrollTrigger plugin. It includes both a ready-to-use component and flexible hooks for custom implementations.

## What's Been Configured

✅ **Dependencies Installed:**

- `gsap` - Core GSAP library
- `@gsap/react` - React integration for GSAP
- `@types/gsap` - TypeScript definitions

✅ **Files Created:**

- `src/lib/gsap-config.ts` - GSAP global configuration
- `src/hooks/use-scroll-animation.ts` - Animation hooks
- `src/app/components/scroll-animated-section.tsx` - Main component
- `src/app/components/ScrollAnimatedExample.tsx` - Usage examples

✅ **Integration:**

- GSAP configuration imported in `src/app/layout.tsx`
- TypeScript properly configured

## Usage

### Basic Usage

```tsx
import ScrollAnimatedSection from '@/app/components/scroll-animated-section';

export default function MyComponent() {
    return (
        <ScrollAnimatedSection>
            <div>
                <h2>This content will fade up on scroll</h2>
                <p>Any content inside will animate together</p>
            </div>
        </ScrollAnimatedSection>
    );
}
```

### Custom Animation Settings

```tsx
<ScrollAnimatedSection
    delay={0.5} // Wait 0.5 seconds before starting
    duration={1.2} // Animation takes 1.2 seconds
    yOffset={100} // Start 100px below final position
    ease="elastic.out" // Use elastic easing
    triggerStart="top 70%" // Trigger when element's top reaches 70% from viewport top
>
    <div>Custom animation settings</div>
</ScrollAnimatedSection>
```

### Different HTML Elements

```tsx
<ScrollAnimatedSection as="div" className="custom-class">
    <p>Renders as a div instead of section</p>
</ScrollAnimatedSection>
```

### Using Hooks Directly

```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

function MyComponent() {
    const ref = useScrollAnimation({
        delay: 0.3,
        duration: 1.0,
        ease: 'power2.out',
        yOffset: 80,
    });

    return (
        <section ref={ref}>
            <h2>Animated with the hook directly</h2>
        </section>
    );
}
```

### Batch Animations

```tsx
import { useBatchScrollAnimation } from '@/hooks/use-scroll-animation';

function MyComponent() {
    const ref = useBatchScrollAnimation({
        selector: '.animate-item', // CSS selector for child elements
        stagger: 0.1, // 0.1 second delay between each item
        delay: 0.2, // Initial delay
    });

    return (
        <section ref={ref}>
            <div className="animate-item">Item 1</div>
            <div className="animate-item">Item 2</div>
            <div className="animate-item">Item 3</div>
        </section>
    );
}
```

## Available Props

### ScrollAnimatedSection Props

- `enabled?: boolean` - Toggle animation on/off (default: true)
- `delay?: number` - Animation delay in seconds (default: 0.3)
- `duration?: number` - Animation duration in seconds (default: 0.8)
- `yOffset?: number` - Initial Y position offset in pixels (default: 60)
- `triggerStart?: string` - ScrollTrigger start position (default: "top 80%")
- `triggerEnd?: string` - ScrollTrigger end position (default: "bottom 20%")
- `ease?: string` - GSAP easing function (default: "power2.out")
- `as?: keyof React.JSX.IntrinsicElements` - HTML element type (default: "section")
- `children: React.ReactNode` - Content to animate

### Hook Options

The hooks accept the same options as the component props, plus:

For `useBatchScrollAnimation`:

- `selector?: string` - CSS selector for child elements (default: ".scroll-animate")
- `stagger?: number` - Stagger delay between animations (default: 0.1)

## Common Easing Options

- `"power2.out"` (default) - Smooth power2 easing
- `"power3.out"` - Stronger power3 easing
- `"back.out"` - Bounces back slightly
- `"elastic.out"` - Elastic bounce effect
- `"none"` - Linear animation

## ScrollTrigger Positions

- `"top 80%"` - Trigger when element's top reaches 80% from viewport top
- `"center center"` - Trigger when centers align
- `"bottom 20%"` - Trigger when element's bottom reaches 20% from viewport top

## Examples in Action

See `src/app/components/ScrollAnimatedExample.tsx` for a complete working example with all different usage patterns.

## Performance Tips

1. **Use batch animations** when animating multiple similar elements
2. **Keep animation durations reasonable** (0.3-1.2 seconds)
3. **Test on different screen sizes** to ensure animations work well responsively
4. **Consider accessibility** - animations should not interfere with user experience

## Troubleshooting

### Animation Not Working

- Check that GSAP config is imported in layout
- Verify element has proper dimensions (height/width)
- Ensure ScrollTrigger is registered

### Performance Issues

- Reduce number of animated elements
- Use batch animations where possible
- Adjust ScrollTrigger refresh settings

### TypeScript Errors

- Ensure `@types/gsap` is installed
- Check that all imports are correct
- Verify component props match interface

## Integration with Existing Components

To add scroll animations to existing components, simply wrap them with `ScrollAnimatedSection`:

```tsx
// Before
<section className="my-section">
    <h2>My Section Title</h2>
    <p>Section content...</p>
</section>

// After
<ScrollAnimatedSection>
    <section className="my-section">
        <h2>My Section Title</h2>
        <p>Section content...</p>
    </section>
</ScrollAnimatedSection>
```

Or use the hook directly:

```tsx
function MyComponent() {
    const ref = useScrollAnimation({ delay: 0.2 });

    return (
        <section ref={ref} className="my-section">
            <h2>My Section Title</h2>
            <p>Section content...</p>
        </section>
    );
}
```
