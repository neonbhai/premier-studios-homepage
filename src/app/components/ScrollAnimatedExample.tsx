'use client';

import ScrollAnimatedSection from './scroll-animated-section';
import {
    useScrollAnimation,
    useBatchScrollAnimation,
} from '@/hooks/use-scroll-animation';

/**
 * Example component demonstrating ScrollAnimatedSection usage
 */
export default function ScrollAnimatedExample() {
    // Example using the hook directly
    const directRef = useScrollAnimation({
        delay: 0.2,
        duration: 1.0,
        yOffset: 80,
        ease: 'power2.out',
    });

    // Example using batch animation hook
    const batchRef = useBatchScrollAnimation({
        selector: '.batch-item',
        stagger: 0.15,
        delay: 0.3,
    });

    return (
        <div className="space-y-16 p-8">
            {/* Basic usage */}
            <ScrollAnimatedSection>
                <div className="rounded-lg bg-blue-500 p-8 text-white">
                    <h2 className="text-2xl font-bold">Basic Animation</h2>
                    <p>
                        This section fades up when scrolled into view with
                        default settings.
                    </p>
                </div>
            </ScrollAnimatedSection>

            {/* Custom timing */}
            <ScrollAnimatedSection
                delay={0.5}
                duration={1.2}
                ease="elastic.out"
            >
                <div className="rounded-lg bg-green-500 p-8 text-white">
                    <h2 className="text-2xl font-bold">Custom Animation</h2>
                    <p>
                        This section has custom timing (0.5s delay, 1.2s
                        duration) with elastic easing.
                    </p>
                </div>
            </ScrollAnimatedSection>

            {/* Different element type */}
            <ScrollAnimatedSection as="div" className="my-custom-class">
                <div className="rounded-lg bg-purple-500 p-8 text-white">
                    <h2 className="text-2xl font-bold">Custom Element Type</h2>
                    <p>
                        This renders as a div instead of section with custom CSS
                        classes.
                    </p>
                </div>
            </ScrollAnimatedSection>

            {/* Disabled animation */}
            <ScrollAnimatedSection enabled={false}>
                <div className="rounded-lg bg-red-500 p-8 text-white">
                    <h2 className="text-2xl font-bold">No Animation</h2>
                    <p>
                        This section won't animate because animation is
                        disabled.
                    </p>
                </div>
            </ScrollAnimatedSection>

            {/* Using hook directly */}
            <section
                ref={directRef}
                className="rounded-lg bg-yellow-500 p-8 text-white"
            >
                <h2 className="text-2xl font-bold">Direct Hook Usage</h2>
                <p>
                    This section uses the useScrollAnimation hook directly with
                    custom settings.
                </p>
            </section>

            {/* Batch animation */}
            <section ref={batchRef} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Batch Animation Example
                </h2>
                <div className="batch-item rounded-lg bg-indigo-500 p-6 text-white">
                    <h3 className="text-xl font-semibold">Item 1</h3>
                    <p>These items will animate with a stagger effect.</p>
                </div>
                <div className="batch-item rounded-lg bg-indigo-500 p-6 text-white">
                    <h3 className="text-xl font-semibold">Item 2</h3>
                    <p>
                        Each item animates 0.15 seconds after the previous one.
                    </p>
                </div>
                <div className="batch-item rounded-lg bg-indigo-500 p-6 text-white">
                    <h3 className="text-xl font-semibold">Item 3</h3>
                    <p>Perfect for animating lists or grid items.</p>
                </div>
            </section>
        </div>
    );
}
