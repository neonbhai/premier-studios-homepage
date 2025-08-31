'use client';

import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';

interface ContactFormHeaderProps {
    tagText: string;
    description: string;
}

export default function ContactFormHeader({
    tagText,
    description,
}: ContactFormHeaderProps) {
    return (
        <div className="flex flex-col gap-[1.5rem] md:gap-[1.875rem]">
            <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                <div className="flex w-full justify-start">
                    <Tags text={tagText} variant="dark" />
                </div>

                <HeaderSide
                    text="Let's Create Something "
                    blueText="Extraordinary"
                    large
                />
            </div>

            <p className="w-full max-w-[22.1875rem] text-[0.875rem] leading-[1.4] font-normal text-white/52 md:text-[1rem]">
                {description}
            </p>
        </div>
    );
}
