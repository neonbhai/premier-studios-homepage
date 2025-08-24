interface HeaderCenterProps {
    whiteText: string;
    blueText: string;
    className?: string;
    variant?: 'light' | 'dark';
    side?: boolean;
}

export default function HeaderCenter({
    whiteText,
    blueText,
    className = '',
    variant = 'dark',
    side,
}: HeaderCenterProps) {
    const textColor = variant === 'light' ? 'text-black' : 'text-white';

    return (
        <h2
            className={`${textColor} w-full ${side ? 'text-start text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] leading-[1.] font-semibold lg:text-[2.5rem]' : 'text-center text-[1.5rem] sm:text-[1.7rem] md:text-[2rem] leading-[1.2] font-medium lg:text-[3rem]'} ${className}`}
        >
            {whiteText} <span className="text-[#029BE6]">{blueText}</span>
        </h2>
    );
}
