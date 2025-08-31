import Image from 'next/image';

const DEFAULT_CONTENT = {
    title: 'Okari',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    year: '2025',
    imageSrc: '/assets/project-bg.png',
    imageAlt: 'Project image',
} as const;

interface ProjectCardProps {
    title?: string;
    description?: string;
    year?: string;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    year,
    imageSrc,
    imageAlt,
    className = '',
}: ProjectCardProps) {
    const displayTitle = title || DEFAULT_CONTENT.title;
    const displayDescription = description || DEFAULT_CONTENT.description;
    const displayYear = year || DEFAULT_CONTENT.year;
    const displayImageSrc = imageSrc || DEFAULT_CONTENT.imageSrc;
    const displayImageAlt = imageAlt || DEFAULT_CONTENT.imageAlt;

    return (
        <div
            className={`w-full overflow-hidden rounded-[1.875rem] bg-[#F7F7F7] ${className}`}
        >
            {/* Image Section - Top portion */}
            <div className="relative m-[7px] h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[350px] md:h-[400px] lg:h-[477px]">
                <Image
                    src={displayImageSrc}
                    alt={displayImageAlt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Text Content Section - Bottom portion */}
            <div className="p-[1.875rem] pt-4">
                <div className="flex flex-col gap-4">
                    {/* Title */}
                    <h3 className="text-[1.5rem] leading-[1.21] font-medium text-black sm:text-[1.75rem] md:text-[1.825rem] lg:text-[1.825rem]">
                        {displayTitle}
                    </h3>

                    {/* Description and Year Row */}
                    <div className="flex items-start justify-between gap-4 lg:gap-[159px]">
                        <p className="line-clamp-2 max-w-[280px] flex-1 text-[0.875rem] leading-[1.21] font-light text-black sm:max-w-[320px] sm:text-[0.9375rem] md:max-w-[350px] md:text-[1rem] lg:max-w-[372px] lg:text-[1rem]">
                            {displayDescription}
                        </p>
                        <span className="flex-shrink-0 text-[0.875rem] leading-[1.21] font-light whitespace-nowrap text-black sm:text-[0.9375rem] md:text-[1rem] lg:text-[1rem]">
                            {displayYear}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
