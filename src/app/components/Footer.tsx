'use client';

import React from 'react';
import { FooterGrid } from './FooterGrid';
import { FooterLogo } from './FooterLogo';
import { NewsletterSection } from './NewsletterSection';
import { FooterBottom } from './FooterBottom';

export const Footer: React.FC = () => {
    return (
        <footer className="relative pt-20 text-white md:pt-24">
            {/* Grid Layout */}
            <FooterGrid />
            <div className="relative px-4 pb-0 lg:px-20">
                <div className="mt-16 flex items-end justify-between">
                    <div>
                        <FooterLogo />
                    </div>
                    <div>
                        <NewsletterSection />
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </footer>
    );
};
