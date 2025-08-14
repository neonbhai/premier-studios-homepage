interface HeaderSideProps {
    text: string;
    blueText?: string;
    className?: string;
    large?: boolean;
}

export default function HeaderSide({
    text,
    blueText,
    className = '',
    large = false,
}: HeaderSideProps) {
    return (
        <h2
            className={`text-center leading-[1.2] font-medium tracking-wide text-white capitalize lg:text-left ${large ? 'max-w-2xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl' : 'max-w-sm text-2xl md:text-4xl lg:text-5xl xl:text-6xl'} ${className}`}
        >
            {text}
            {blueText && (
                <>
                    {' '}
                    <span className="text-[#029BE6]">{blueText}</span>
                </>
            )}
        </h2>
    );
}
