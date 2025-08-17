interface TagsProps {
    text: string;
    maxWidth?: string;
    className?: string;
    variant?: 'light' | 'dark';
    center?: boolean;
    showDot?: boolean;
}

export default function Tags({
    text,
    maxWidth = '7.4375rem',
    className = '',
    variant = 'dark',
    center = false,
    showDot = true,
}: TagsProps) {
    const variantClasses = {
        light: {
            text: 'text-black',
            dot: 'bg-black',
        },
        dark: {
            text: 'text-white',
            dot: 'bg-white',
        },
    };

    const currentVariant = variantClasses[variant];

    const MarqueeContent = () => (
        <>
            <span
                className={`${currentVariant.text} text-[1rem] font-normal tracking-wider whitespace-nowrap uppercase`}
            >
                {text}
            </span>
            {showDot && (
                <div
                    className={`h-[0.4375rem] w-[0.4375rem] ${currentVariant.dot} flex-shrink-0 rounded-full`}
                ></div>
            )}
        </>
    );

    return (
        <div
            className={`w-full overflow-hidden ${className}`}
            style={{ maxWidth }}
        >
            <div
                className="flex items-center gap-[0.5625rem] animate-marquee"
                style={{ width: 'fit-content' }}
            >
                {Array.from({ length: 25 }, (_, i) => (
                    <MarqueeContent key={i} />
                ))}
            </div>
        </div>
    );
}
