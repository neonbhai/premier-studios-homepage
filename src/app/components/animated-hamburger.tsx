import React from 'react';

interface AnimatedHamburgerProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
    isOpen,
    onClick,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative z-[101] flex cursor-pointer items-center justify-center text-gray-900 transition-transform duration-300 ${className}`}
            aria-label="Toggle mobile menu"
        >
            <svg
                className="h-[35px] w-[35px] md:h-[45px] md:w-[45px]"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Top line - morphs to fill gaps AND rotates to form top part of X */}
                <path
                    d={
                        isOpen
                            ? 'M5.8335 10.209H29.1668'
                            : 'M5.8335 10.209H10.2085M29.1668 10.209H16.0418'
                    }
                    stroke="white" //white
                    strokeWidth="2.1875"
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-in-out"
                    style={{
                        transformOrigin: '17.5px 17.5px',
                        transform: isOpen
                            ? 'rotate(45deg) translateY(7.29px)'
                            : 'rotate(0deg) translateY(0px)',
                    }}
                />

                {/* Middle line - fades out when open */}
                <path
                    d="M5.8335 17.5007H29.1668"
                    stroke="white" //white
                    strokeWidth="2.1875"
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-in-out"
                    style={{
                        opacity: isOpen ? 0 : 1,
                        transform: isOpen ? 'scale(0)' : 'scale(1)',
                        transformOrigin: 'center',
                    }}
                />

                {/* Bottom line - morphs to fill gaps AND rotates to form bottom part of X */}
                <path
                    d={
                        isOpen
                            ? 'M5.8335 24.7923H29.1668'
                            : 'M5.8335 24.7923H18.9585M29.1668 24.7923H24.7918'
                    }
                    stroke="white" //white
                    strokeWidth="2.1875"
                    strokeLinecap="round"
                    className="transition-all duration-300 ease-in-out"
                    style={{
                        transformOrigin: '17.5px 17.5px',
                        transform: isOpen
                            ? 'rotate(-45deg) translateY(-7.29px)'
                            : 'rotate(0deg) translateY(0px)',
                    }}
                />
            </svg>
        </button>
    );
};
