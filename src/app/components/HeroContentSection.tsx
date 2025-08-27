import ArrowButton from './commons/ArrowButton';

interface HeroContentSectionProps {
    heading: string;
    highlightText: string;
    description: string;
    buttonText: string;
}

export default function HeroContentSection({
    heading,
    highlightText,
    description,
    buttonText,
}: HeroContentSectionProps) {
    return (
        <div className="absolute top-[30vh] left-7 flex w-[calc(90%-4rem)] flex-col gap-6 sm:top-[32vh] sm:left-8 sm:w-[calc(70%-4rem)] sm:gap-8 md:w-[calc(40%-4rem)] xl:top-[32.4vh] xl:left-[4.3vw] xl:w-[29.5vw] xl:gap-[3.9vh]">
            <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[2.6vh]">
                <h2 className="max-w-[90%] text-xl leading-[1.2] font-medium text-[#F7F7F7] sm:text-2xl xl:max-w-[27.1vw] xl:text-[2.3vw]">
                    {heading.split(highlightText).map((part, index) => (
                        <span key={index}>
                            {part}
                            {index <
                                heading.split(highlightText).length - 1 && (
                                <span className="text-[#029BE6]">
                                    {highlightText}
                                </span>
                            )}
                        </span>
                    ))}
                </h2>

                <p className="text-sm leading-[1.5] font-medium text-white/83 sm:text-base xl:text-[1.1vw]">
                    {description}
                </p>
            </div>

            <ArrowButton
                text={buttonText}
                size="medium"
                variant="light"
                className2=" "
            />
        </div>
    );
}
