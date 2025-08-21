'use client';

import React from 'react';
import Link from 'next/link';

export const FooterBottom: React.FC = () => {
    return (
        <div className="mt-8 flex flex-grow flex-col items-end justify-between gap-4 pb-3">
            <div className="text-right text-xs text-white/40 md:text-base">
                © 2025 Premier Studios. All Rights Reserved.
            </div>
            <div className="flex gap-4 md:gap-8">
                <Link
                    href="/terms"
                    className="text-xs text-white transition-colors hover:text-white/80 md:text-base"
                >
                    Terms & Condition
                </Link>
                <Link
                    href="/privacy-policy"
                    className="text-xs text-white transition-colors hover:text-white/80 md:text-base"
                >
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};
