import React from 'react';

interface ArrowRightIconProps {
    width?: number;
    height?: number;
    stroke?: string;
    className?: string;
}

export default function ArrowRightIcon({
    width = 7,
    height = 13,
    stroke = 'white',
    className,
}: ArrowRightIconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-hidden="true"
        >
            <path
                d="M1 1L6 6.5L1 12"
                stroke={stroke}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
