import Tags from './commons/Tags';

const DEFAULT_CONTENT = {
    tagText: 'Our work',
    title: 'Projects.',
    description: 'A curated selection of projects that reflect our commitment to simplicity and purposeful design.',
} as const;

export default function ProjectsHeader() {
    return (
        <section className="w-full py-[3.125rem]">
            <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex w-full flex-col gap-[1.875rem]">
                    {/* Tags */}
                    <Tags text={DEFAULT_CONTENT.tagText} variant="dark" />

                    {/* Title and Description */}
                    <div className="relative h-[9.6875rem] w-full">
                        {/* Large Title */}
                        <h1 className="absolute top-0 left-0 text-[4rem] leading-[1.21] font-semibold tracking-[0.02em] text-[#029BE6] capitalize md:text-[6rem] lg:text-[8rem]">
                            {DEFAULT_CONTENT.title}
                        </h1>

                        {/* Description */}
                        <p className="absolute bottom-0 max-w-[17.4375rem] text-left text-[1rem] leading-[1.5] font-medium text-white/52 md:right-0 lg:right-0">
                            {DEFAULT_CONTENT.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
