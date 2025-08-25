export function isTouchDevice(): boolean {
    // Check if we're in the browser
    if (typeof window === 'undefined') return false;

    // Method 1: Check for coarse pointer (most reliable for touch devices)
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    
    // Method 2: Check for touch support
    const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // A device is considered a touch device if it has a coarse pointer
    // This covers phones and tablets but excludes desktop with touchscreens
    return hasCoarsePointer || (hasTouchSupport && !window.matchMedia('(pointer: fine)').matches);
}