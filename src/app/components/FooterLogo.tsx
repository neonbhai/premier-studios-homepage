'use client';

import React from 'react';
import Image from 'next/image';
import { useResponsiveLayout } from '../../hooks/useResponsiveLayout';

export const FooterLogo: React.FC = () => {
    const { isMobile, isTablet } = useResponsiveLayout();

    // Mobile logo
    if (isMobile) {
        return (
            <div className="flex-shrink-0">
                <Image
                    src="/assets/footer/Premier_logo_blue.png"
                    alt="Premier Studios Logo"
                    width={200}
                    height={200}
                    className="h-auto w-auto"
                />
            </div>
        );
    }

    // Tablet logo
    if (isTablet) {
        return (
            <div className="flex-shrink-0">
                <Image
                    src="/assets/footer/Premier_logo_blue.png"
                    alt="Premier Studios Logo"
                    width={400}
                    height={536}
                    className="h-auto w-auto max-w-[400px]"
                />
            </div>
        );
    }

    // Desktop logo
    return (
        <div className="flex-shrink-0">
            <Image
                src="/assets/footer/Premier_logo_blue.png"
                alt="Premier Studios Logo"
                width={400}
                height={400}
                className="h-auto w-auto max-w-[400px]"
            />
        </div>
    );
};
