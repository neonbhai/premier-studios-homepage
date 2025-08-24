'use client';

interface InterestSelectorProps {
    interests: string[];
    selectedInterests: string[];
    onToggleInterest: (interest: string) => void;
}

export default function InterestSelector({
    interests,
    selectedInterests,
    onToggleInterest,
}: InterestSelectorProps) {
    return (
        <div className="flex w-full flex-col gap-[1rem] md:gap-[1.5rem]">
            <h3 className="text-[1rem] leading-[1.21] font-medium text-[#050505] md:text-[1.25rem]">
                I{"'"}m interested in...
            </h3>

            <div className="flex w-full flex-col gap-[1rem] lg:flex-row lg:flex-wrap">
                {interests.map((interest) => (
                    <button
                        key={interest}
                        type="button"
                        onClick={() => onToggleInterest(interest)}
                        className={`rounded-full px-[0.5rem] py-[0.5rem] text-center text-[0.75rem] leading-[1.21] font-medium transition-colors md:px-[0.75rem] md:py-[0.625rem] md:text-[0.875rem] ${
                            selectedInterests.includes(interest)
                                ? 'border-[1.5px] border-[#029BE6] bg-[#029BE6] text-white'
                                : 'border-[1.5px] border-black/52 text-black/52'
                        }`}
                    >
                        {interest}
                    </button>
                ))}
            </div>
        </div>
    );
}