interface TextPageHeaderProps {
    title: string;
    lastUpdated: string;
}

export default function TextPageHeader({
    title,
    lastUpdated,
}: TextPageHeaderProps) {
    const words = title.split(' ');
    const lastWord = words.pop();
    const titleStart = words.join(' ');

    return (
        <div className="mb-16 md:mt-[50px] md:mb-28 lg:mt-[50px]">
            <h1 className="mb-4 font-sans text-4xl leading-[1.2] text-[#029BE6] sm:text-6xl md:mb-6 md:text-8xl lg:text-[96px]">
                {titleStart}
                {titleStart && ' '}
                <span className="text-white">{lastWord}</span>
            </h1>
            <p className="mt-8 font-sans text-sm leading-6 text-white/80 md:text-base lg:mt-20">
                Last Updated: {lastUpdated}
            </p>
        </div>
    );
}
