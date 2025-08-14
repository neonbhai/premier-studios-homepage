interface HeaderCenterProps {
    whiteText: string;
    blueText: string;
    className?: string;
    variant?: 'light' | 'dark';
}

export default function HeaderCenter({
    whiteText,
    blueText,
    className = '',
    variant = 'dark',
}: HeaderCenterProps) {
    const textColor = variant === 'light' ? 'text-black' : 'text-white';

    return (
        <h2
            className={`${textColor} w-full text-center text-[2rem] leading-[1.2] font-medium md:text-[3rem] ${className}`}
        >
            {whiteText} <span className="text-[#029BE6]">{blueText}</span>
        </h2>
    );
}
