interface TagsProps {
    text: string;
    maxWidth?: string;
    className?: string;
    variant?: 'light' | 'dark';
    showDot?: boolean;
}

export default function Tags({
    text,
    maxWidth = '7.4375rem',
    className = '',
    variant = 'dark',
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
                className={`${currentVariant.text} text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] font-normal tracking-wider whitespace-nowrap capitalize`}
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
                className="animate-marquee w-[1022px] flex items-center gap-[0.5625rem]"
                // style={{ width: "10%" }}
            >
                {Array.from({ length: 20 }, (_, i) => (
                    <MarqueeContent key={i} />
                ))}
            </div>
        </div>
    );
}
