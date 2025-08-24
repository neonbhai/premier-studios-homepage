import React from 'react';

interface ExternalArrowIconProps {
    width?: number;
    height?: number;
    stroke?: string;
    className?: string;
}

export default function ExternalArrowIcon({
    width = 11,
    height = 11,
    stroke = 'white',
    className,
}: ExternalArrowIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-hidden="true"
        >
            <path
                d="M1 10L10 1M10 1H1M10 1V10"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
