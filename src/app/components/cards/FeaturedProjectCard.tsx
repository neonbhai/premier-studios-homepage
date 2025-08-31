import Image from 'next/image';
import CTAButton from '../commons/CTAButton';

const DEFAULT_CONTENT = {
    fallbackTitle: 'ELEMENTO',
    fallbackDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    viewProjectText: 'View Project',
} as const;

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
};

interface FeaturedProjectCardProps {
    className?: string;
    position?: string;
    project?: Project;
}

export default function FeaturedProjectCard({
    className = '',
    position = 'center',
    project,
}: FeaturedProjectCardProps) {
    const getStyles = () => {
        if (position === 'center') {
            return 'w  opacity-100 scale-100';
        } else {
            return ' opacity-50 scale-90 hover:opacity-70';
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-[30px] transition-all duration-500 ease-in-out ${className} ${getStyles()}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={project?.image || '/assets/project-bg.png'}
                    alt="Project background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 text-black sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16">
                <h3 className="mb-1 text-[18px] leading-[1.21] font-medium sm:mb-2 sm:text-[22px] md:text-[26px] lg:text-[29px]">
                    {project?.title || DEFAULT_CONTENT.fallbackTitle}
                </h3>
                <p className="max-w-[200px] text-[12px] leading-[1.21] font-normal sm:max-w-[240px] sm:text-[13px] md:max-w-[270px] md:text-[14px] lg:max-w-[294px] lg:text-[14.6px]">
                    {project?.description || DEFAULT_CONTENT.fallbackDescription}
                </p>

                <div className="relative mt-3 flex items-center sm:mt-4 md:mt-5">
                    <div className="hidden sm:block">
                        <CTAButton
                            text={DEFAULT_CONTENT.viewProjectText}
                            variant="dark"
                            size="medium"
                            fill="#000000"
                            className2="text-white -ml-4"
                            href="/projects"
                        />
                    </div>
                    <div className="block sm:hidden">
                        <CTAButton
                            text={DEFAULT_CONTENT.viewProjectText}
                            variant="dark"
                            size="very-small"
                            fill="#000000"
                            className2="text-white -ml-5"
                            href="/projects"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
