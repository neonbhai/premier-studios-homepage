import Image from 'next/image';

interface ProjectCardProps {
    title?: string;
    description?: string;
    year?: string;
    imageSrc?: string;
    imageAlt?: string;
    className?: string;
}

export default function ProjectCard({
    title = 'Okari',
    description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    year = '2025',
    imageSrc = '/assets/project-bg.png',
    imageAlt = 'Project image',
    className = '',
}: ProjectCardProps) {
    return (
        <div
            className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1.875rem] bg-[#F7F7F7] ${className}`}
        >
            {/* Background Image */}
            <div className="h-[85%] w-full overflow-hidden rounded-[1.875rem] p-2">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="overflow-hidden rounded-[1.475rem] object-cover"
                />
            </div>

            {/* Content Overlay */}
            <div className="z-10 mb-4 flex w-full items-start justify-between gap-[1rem] bg-white px-7 py-2">
                {/* Title */}
                <div>
                    <h3 className="w-full text-[1.825rem] leading-[1.21] font-medium text-black">
                        {title}
                    </h3>

                    {/* Description and Year */}
                    <div className="gap-[ .9375rem] flex w-full items-start justify-between lg:items-end xl:items-end">
                        <p className="max-w-[23.25rem] flex-1 text-[1rem] leading-[1.21] font-light text-black">
                            {description}
                        </p>
                    </div>
                </div>
                <span className="text-[1rem] leading-[1.21] font-light whitespace-nowrap text-black">
                    {year}
                </span>
            </div>
        </div>
    );
}
