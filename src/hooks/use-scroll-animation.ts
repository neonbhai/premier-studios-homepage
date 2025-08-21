import { RefObject, useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-config';

interface ScrollAnimationOptions {
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
     * Custom ref to use instead of creating a new one
     */
    customRef?: RefObject<HTMLElement>;
}

/**
 * Custom hook for scroll-triggered fade up animations
 *
 * @param options - Configuration options for the animation
 * @returns ref object to attach to the element
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = useScrollAnimation({ delay: 0.2 });
 *
 *   return (
 *     <section ref={ref}>
 *       Content that will fade up on scroll
 *     </section>
 *   );
 * };
 * ```
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
    const {
        enabled = true,
        delay = 0,
        duration = 0.8,
        yOffset = 60,
        triggerStart = 'top 80%',
        triggerEnd = 'bottom 20%',
        ease = 'power2.out',
        customRef,
    } = options;

    const internalRef = useRef<HTMLElement>(null);
    const ref = customRef || internalRef;

    useGSAP(
        () => {
            if (!enabled || !ref.current) return;

            // Set initial state
            gsap.set(ref.current, {
                opacity: 0,
                y: yOffset,
                transformOrigin: 'center bottom',
            });

            // Create scroll trigger animation
            const animation = gsap.to(ref.current, {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease,
                scrollTrigger: {
                    trigger: ref.current,
                    start: triggerStart,
                    end: triggerEnd,
                    toggleActions: 'play none none reverse',
                    // Uncomment for debugging
                    // markers: true,
                },
            });

            return () => {
                animation.scrollTrigger?.kill();
                animation.kill();
            };
        },
        {
            dependencies: [
                enabled,
                delay,
                duration,
                yOffset,
                triggerStart,
                triggerEnd,
                ease,
            ],
        }
    );

    return ref;
}

/**
 * Batch scroll animation for multiple elements within a container
 *
 * @param options - Configuration options for the animation
 * @returns ref object to attach to the container element
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const ref = useBatchScrollAnimation({
 *     selector: '.animate-item',
 *     stagger: 0.1
 *   });
 *
 *   return (
 *     <section ref={ref}>
 *       <div className="animate-item">Item 1</div>
 *       <div className="animate-item">Item 2</div>
 *     </section>
 *   );
 * };
 * ```
 */
export function useBatchScrollAnimation(
    options: ScrollAnimationOptions & {
        /**
         * CSS selector for child elements to animate
         * @default ".scroll-animate"
         */
        selector?: string;

        /**
         * Stagger delay between child animations
         * @default 0.1
         */
        stagger?: number;
    } = {}
) {
    const {
        enabled = true,
        delay = 0,
        duration = 0.8,
        yOffset = 60,
        triggerStart = 'top 80%',
        triggerEnd = 'bottom 20%',
        ease = 'power2.out',
        selector = '.scroll-animate',
        stagger = 0.1,
        customRef,
    } = options;

    const internalRef = useRef<HTMLElement>(null);
    const ref = customRef || internalRef;

    useGSAP(
        () => {
            if (!enabled || !ref.current) return;

            const elements = ref.current.querySelectorAll(selector);

            if (elements.length === 0) return;

            // Set initial state for all elements
            gsap.set(elements, {
                opacity: 0,
                y: yOffset,
                transformOrigin: 'center bottom',
            });

            // Create staggered scroll trigger animation
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ref.current,
                    start: triggerStart,
                    end: triggerEnd,
                    toggleActions: 'play none none reverse',
                },
            });

            timeline.to(elements, {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease,
                stagger: stagger,
            });

            return () => {
                timeline.scrollTrigger?.kill();
                timeline.kill();
            };
        },
        {
            dependencies: [
                enabled,
                delay,
                duration,
                yOffset,
                triggerStart,
                triggerEnd,
                ease,
                selector,
                stagger,
            ],
        }
    );

    return ref;
}
