import Link from 'next/link';

interface CTAButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
    size?: 'very-small' | 'small' | 'medium' | 'large';
    variant?: 'light' | 'dark';
    className2?: string;
    fill?: string;
    href?: string;
}

export default function CTAButton({
    text = 'Join Now',
    onClick,
    className = '',
    size = 'medium',
    variant = 'light',
    className2 = '',
    fill = 'white',
    href = '/contact',
}: CTAButtonProps) {
    const sizeClasses = {
        'very-small': {
            container: 'w-[95px] h-[40px]',
            text: 'text-[0.6rem]',
            textPosition: 'left-[36px] top-[13px]',
        },
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

    const buttonContent = (
        <div
            className={`group relative w-fit cursor-pointer transition-all duration-300 ${className}`}
            onClick={onClick}
        >
            <div className={`${currentSize.container} relative`}>
                {/* SVG with dynamic fill and transparent hover */}
                <svg
                    className="absolute inset-0 h-full w-full transition-all duration-300"
                    viewBox="0 0 150 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 0.5V54C1 58.9706 5.02943 63 10 63H139.5C145.023 63 149.5 58.5228 149.5 53V21L129 0.5H1Z"
                        fill={fill}
                        stroke={fill}
                        strokeWidth="2"
                        className="transition-all duration-300 group-hover:fill-transparent"
                    />
                </svg>

                {/* button Text */}
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
        </div>
    );

    return <Link href={href}>{buttonContent}</Link>;
}
