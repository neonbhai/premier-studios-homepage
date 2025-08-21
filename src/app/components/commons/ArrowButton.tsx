interface ArrowButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'light' | 'dark';
    className2?: string;
    fill?: string;
}

export default function ArrowButton({
    text = 'Join Now',
    onClick,
    className = '',
    size = 'medium',
    variant = 'light',
    className2 = '',
    fill = 'white',
}: ArrowButtonProps) {
    const sizeClasses = {
        small: {
            container: 'w-[119px] h-[50px]',
            text: 'text-xs',
            textPosition: 'left-[32px] top-[15px]',
        },
        medium: {
            container: 'w-[148.5px] h-[62.5px]',
            text: 'text-base',
            textPosition: 'left-[40px] top-[19px]',
        },
        large: {
            container: 'w-[178px] h-[75px]',
            text: 'text-lg',
            textPosition: 'left-[48px] top-[23px]',
        },
    };

    const currentSize = sizeClasses[size];

    return (
        <button
            className={`group relative w-fit transition-all duration-300 hover:scale-105 ${className}`}
            onClick={onClick}
        >
            <div className={`${currentSize.container} relative`}>
                {/* SVG with dynamic fill and transparent hover */}
                <svg
                    className="absolute inset-0 h-full w-full transition-all duration-300"
                    viewBox="0 0 149 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0V53.6801C0 58.6674 4.043 62.7104 9.0303 62.7104H138.966C144.508 62.7104 149 58.2182 149 52.6768V20.569L128.431 0H0Z"
                        fill={fill}
                        stroke={fill}
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:fill-transparent"
                    />
                </svg>

                {/* Button Text */}
                <span
                    className={`absolute ${currentSize.textPosition} ${currentSize.text} z-10 -ml-1 font-medium transition-all duration-300 ${
                        variant === 'light'
                            ? 'text-black group-hover:text-white'
                            : 'text-white group-hover:text-black'
                    } ${className2}`}
                >
                    {text}
                </span>
            </div>
        </button>
    );
}
