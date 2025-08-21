'use client';

import React, { forwardRef } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface ScrollAnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Whether to enable the scroll animation
     * @default true
     */
    enabled?: boolean;

    /**
     * Animation delay in seconds
     * @default 0
     */
    delay?: number;

    /**
     * Animation duration in seconds
     * @default 0.8
     */
    duration?: number;

    /**
     * Y offset for the fade in animation
     * @default 60
     */
    yOffset?: number;

    /**
     * ScrollTrigger start position
     * @default "top 80%"
     */
    triggerStart?: string;

    /**
     * ScrollTrigger end position
     * @default "bottom 20%"
     */
    triggerEnd?: string;

    /**
     * Easing function
     * @default "power2.out"
     */
    ease?: string;

    /**
     * HTML element type to render
     * @default "section"
     */
    as?: keyof React.JSX.IntrinsicElements;

    /**
     * Children to render inside the animated section
     */
    children: React.ReactNode;
}

/**
 * A wrapper component that adds scroll-triggered fade up animations to any section
 *
 * @example
 * ```tsx
 * // Basic usage
 * <ScrollAnimatedSection>
 *   <h2>This will fade up on scroll</h2>
 * </ScrollAnimatedSection>
 *
 * // Disabled animation
 * <ScrollAnimatedSection enabled={false}>
 *   <h2>This won't animate</h2>
 * </ScrollAnimatedSection>
 *
 * // Custom timing and easing
 * <ScrollAnimatedSection delay={0.3} duration={1.2} ease="elastic.out">
 *   <h2>Custom animation</h2>
 * </ScrollAnimatedSection>
 *
 * // Custom element type
 * <ScrollAnimatedSection as="div" className="custom-styles">
 *   <h2>Rendered as div instead of section</h2>
 * </ScrollAnimatedSection>
 * ```
 */
const ScrollAnimatedSection = forwardRef<
    HTMLElement,
    ScrollAnimatedSectionProps
>(
    (
        {
            enabled = true,
            delay = 0.3,
            duration = 0.8,
            yOffset = 60,
            triggerStart = 'top 80%',
            triggerEnd = 'bottom 20%',
            ease = 'power2.out',
            as: Component = 'section',
            className = '',
            children,
            ...props
        },
        forwardedRef
    ) => {
        const animationRef = useScrollAnimation({
            enabled,
            delay,
            duration,
            yOffset,
            triggerStart,
            triggerEnd,
            ease,
            customRef: forwardedRef as React.RefObject<HTMLElement>,
        });

        // Use the forwarded ref if provided, otherwise use the animation ref
        const ref = forwardedRef || animationRef;

        return React.createElement(
            Component,
            {
                ref,
                className,
                ...props,
            },
            children
        );
    }
);

ScrollAnimatedSection.displayName = 'ScrollAnimatedSection';

export default ScrollAnimatedSection;
