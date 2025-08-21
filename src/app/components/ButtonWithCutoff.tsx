'use client';

import React from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonWithCutoffProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    flipped?: boolean;
    size?: ButtonSize;
}

const NormalSVG: React.FC<{ flipped: boolean }> = ({ flipped }) => {
    const path = flipped
        ? 'M0 0V53.85C0 58.82 4.03 63 9 63H192C197.52 63 202 58.52 202 52.84V20.66L174.25 0H0Z'
        : 'M202 0V53.85C202 58.82 197.97 63 193 63H10C4.477 63 0 58.52 0 52.84V20.66L27.75 0H202Z';

    return (
        <svg
            className="absolute inset-0 h-full w-full transition-opacity duration-200 group-hover:opacity-0"
            viewBox="0 0 202 63"
            preserveAspectRatio="none"
            fill="none"
        >
            <path d={path} fill="white" stroke="white" />
        </svg>
    );
};

const HoverSVG: React.FC<{ flipped: boolean }> = ({ flipped }) => {
    const path = flipped
        ? 'M0 0V53.85C0 58.82 4.03 63 9 63H192C197.52 63 202 58.52 202 52.84V20.66L174.25 0H0Z'
        : 'M202 0V53.85C202 58.82 197.97 63 193 63H10C4.477 63 0 58.52 0 52.84V20.66L27.75 0H202Z';

    return (
        <svg
            className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            viewBox="0 0 202 63"
            preserveAspectRatio="none"
            fill="none"
        >
            <path d={path} fill="transparent" stroke="white" />
        </svg>
    );
};

export const ButtonWithCutoff: React.FC<ButtonWithCutoffProps> = ({
    text,
    href,
    onClick,
    className = '',
    flipped = false,
    size = 'lg',
}) => {
    // Get size-specific dimensions and styles
    const getSizeConfig = (size: ButtonSize) => {
        switch (size) {
            case 'sm':
                return {
                    height: 48,
                    width: 120,
                    textSize: 'text-sm',
                    padding: 'px-3',
                };
            case 'md':
                return {
                    height: 48,
                    width: 140,
                    textSize: 'text-base',
                    padding: 'px-4',
                };
            case 'lg':
                return {
                    height: 62,
                    width: 160,
                    textSize: 'text-lg',
                    padding: 'px-5',
                };
        }
    };

    const sizeConfig = getSizeConfig(size);

    // Debug logging
    console.log('ButtonWithCutoff render:', {
        size,
        sizeConfig,
        flipped,
        text,
    });

    const content = (
        <div
            className="button-cutoff-container relative flex-shrink-0"
            style={{
                width: sizeConfig.width,
                height: sizeConfig.height,
                minWidth: sizeConfig.width,
                minHeight: sizeConfig.height,
            }}
        >
            <div className="group relative h-full w-full cursor-pointer">
                <NormalSVG flipped={flipped} />
                <HoverSVG flipped={flipped} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="button-cutoff-text font-body font-medium text-black transition-colors duration-200 group-hover:text-white">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className={className}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {content}
        </button>
    );
};
