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
        <div className="absolute z-[2] top-[21vh] left-7 flex w-[calc(90%-4rem)] flex-col gap-6 sm:top-[32vh] sm:left-8 sm:w-[calc(70%-4rem)] sm:gap-8 md:top-[30vh] md:w-[calc(40%-4rem)] lg:top-[30vh] xl:top-[32.4vh] xl:left-[4.3vw] xl:w-[29.5vw] xl:gap-[3.9vh]">
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

            <div className="hidden w-full sm:block">
                <ArrowButton
                    text={buttonText}
                    size="medium"
                    variant="light"
                    className2=" "
                    href="/contact"
                />
            </div>
            <div className="block w-full sm:hidden">
                <ArrowButton
                    text={buttonText}
                    size="very-small"
                    variant="light"
                    className2=" -ml-3 text-[0.7rem] -mt-[2px] "
                    href="/contact"
                />
            </div>
        </div>
    );
}
