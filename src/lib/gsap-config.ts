'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * GSAP Configuration for Next.js
 *
 * This file configures GSAP with all necessary plugins for the application.
 * It should be imported once in the app to ensure proper plugin registration.
 */

// Only configure GSAP on the client side
if (typeof window !== 'undefined') {
    // Register all GSAP plugins
    gsap.registerPlugin(ScrollTrigger, useGSAP);

    // Global GSAP configuration
    gsap.config({
        // Disable null target warnings for cleaner console output
        nullTargetWarn: false,

        // Force 3D transforms for better performance (optional)
        force3D: true,
    });

    // ScrollTrigger global configuration
    ScrollTrigger.config({
        // Disable auto-refresh on window resize for better performance
        // You can manually call ScrollTrigger.refresh() when needed
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });
}

/**
 * Utility function to refresh ScrollTrigger
 * Call this after dynamic content changes
 */
export const refreshScrollTrigger = () => {
    if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
    }
};

/**
 * Utility function to kill all ScrollTrigger instances
 * Useful for cleanup in development or route changes
 */
export const killAllScrollTriggers = () => {
    if (typeof window !== 'undefined') {
        ScrollTrigger.killAll();
    }
};

export { gsap, ScrollTrigger, useGSAP };
