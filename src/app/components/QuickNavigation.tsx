'use client';

import React from 'react';
import Link from 'next/link';

const navigationLinks = [
    { label: 'Home', href: '/' },

    { label: 'Our Studio', href: '/about-us' },
    { label: 'Our Work', href: '/projects' },
    { label: 'Reviews', href: '/#testimonials' },
];

export const QuickNavigation: React.FC = () => {
    return (
        <nav className="space-y-1 md:space-y-4">
            {navigationLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="block text-[10px] text-white transition-colors hover:text-white/80 md:text-base"
                    onClick={() => {
                        console.log('[QuickNavigation] click', {
                            href: link.href,
                        });
                    }}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
};
