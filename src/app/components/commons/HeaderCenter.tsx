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
            className={`${textColor} w-full ${side ? 'text-start text-[2rem] leading-[1.] font-semibold md:text-[2.5rem]' : 'text-center text-[2rem] leading-[1.2] font-medium md:text-[3rem]'} ${className}`}
        >
            {whiteText} <span className="text-[#029BE6]">{blueText}</span>
        </h2>
    );
}
