'use client';

import React from 'react';

interface FooterGridCellProps {
    title: string;
    children: React.ReactNode;
}

export const FooterGridCell: React.FC<FooterGridCellProps> = ({
    title,
    children,
}) => {
    return (
        <div className="border border-white/40 p-4 md:col-span-1 md:p-8">
            <div className="flex h-full flex-col justify-between gap-12 space-y-4 md:gap-12 md:space-y-6 lg:gap-20">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-white"></div>
                    <h3 className="text-[10px] text-white md:text-base">
                        {title}
                    </h3>
                </div>
                {/* Content */}
                {children}
            </div>
        </div>
    );
};
