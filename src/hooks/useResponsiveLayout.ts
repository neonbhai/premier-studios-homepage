'use client';
import { useState, useEffect, useCallback } from 'react';

// Breakpoint constants similar to what Expensify App uses
const BREAKPOINTS = {
    SMALL: 768,
    MEDIUM: 1024,
    LARGE: 1200,
    EXTRA_LARGE: 1440,
} as const;

// Screen size categories
export type ScreenSize = 'small' | 'medium' | 'large' | 'extraLarge';

interface WindowDimensions {
    width: number;
    height: number;
}

interface ResponsiveLayoutState {
    width: number;
    height: number;
    isSmallScreenWidth: boolean;
    isLargeScreen: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    screenSize: ScreenSize;
    isLandscape: boolean;
    isPortrait: boolean;
}

/**
 * Get the current screen size category based on width
 */
const getScreenSize = (width: number): ScreenSize => {
    if (width < BREAKPOINTS.SMALL) return 'small';
    if (width < BREAKPOINTS.LARGE) return 'medium';
    if (width < BREAKPOINTS.EXTRA_LARGE) return 'large';
    return 'extraLarge';
};

/**
 * Return SSR-safe initial dimensions. Must be identical on server and first client render
 * to avoid hydration mismatches in components that branch on dimensions.
 */
const getInitialDimensions = (): WindowDimensions => ({ width: 0, height: 0 });

/**
 * Custom hook for responsive layout management
 *
 * Provides comprehensive screen size detection and responsive utilities
 * Similar to patterns used in Expensify App for handling different screen sizes
 *
 * @returns ResponsiveLayoutState object with screen size information
 */
export const useResponsiveLayout = (): ResponsiveLayoutState => {
    // Important: initialize to a stable SSR value so server and first client render match
    const [dimensions, setDimensions] = useState<WindowDimensions>(
        getInitialDimensions()
    );

    const handleResize = useCallback(() => {
        if (typeof window !== 'undefined') {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Set initial dimensions
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    // Calculate responsive states
    const { width, height } = dimensions;
    const screenSize = getScreenSize(width);

    // Core responsive flags (matching your requested API)
    const isSmallScreenWidth = width < BREAKPOINTS.SMALL;
    const isLargeScreen = width >= BREAKPOINTS.LARGE;

    // Additional useful responsive flags
    const isMobile = width < BREAKPOINTS.SMALL;
    const isTablet = width >= BREAKPOINTS.SMALL && width < BREAKPOINTS.LARGE;
    const isDesktop = width >= BREAKPOINTS.LARGE;

    // Orientation detection
    const isLandscape = width > height;
    const isPortrait = height >= width;

    return {
        width,
        height,
        isSmallScreenWidth,
        isLargeScreen,
        isMobile,
        isTablet,
        isDesktop,
        screenSize,
        isLandscape,
        isPortrait,
    };
};

/**
 * Custom hook for media query-like functionality
 * Similar to CSS media queries but in JavaScript
 *
 * @param query - The breakpoint to match against
 * @returns boolean indicating if the query matches
 */
export const useMediaQuery = (query: keyof typeof BREAKPOINTS): boolean => {
    const { width } = useResponsiveLayout();
    return width >= BREAKPOINTS[query];
};

/**
 * Hook for getting responsive styles based on screen size
 * Allows conditional styling similar to CSS media queries
 *
 * @param styles - Object with styles for different screen sizes
 * @returns The appropriate style object for the current screen size
 */
export const useResponsiveStyles = <T>(styles: {
    small?: T;
    medium?: T;
    large?: T;
    extraLarge?: T;
}): T | undefined => {
    const { screenSize } = useResponsiveLayout();
    return styles[screenSize];
};
