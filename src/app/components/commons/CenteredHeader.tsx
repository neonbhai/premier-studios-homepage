import Tags from './Tags';
import HeaderCenter from './HeaderCenter';

interface CenteredHeaderProps {
    tagText: string;
    tagVariant?: 'light' | 'dark';
    whiteText: string;
    blueText: string;
    headerVariant?: 'light' | 'dark';
    description?: string;
    headerClassName?: string;
    containerClassName?: string;
}

export default function CenteredHeader({
    tagText,
    tagVariant = 'dark',
    whiteText,
    blueText,
    headerVariant = 'dark',
    description,
    headerClassName = 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    containerClassName = 'mb-12 flex flex-col items-center md:mb-16 lg:mb-20',
}: CenteredHeaderProps) {
    return (
        <div className={containerClassName}>
            <Tags text={tagText} variant={tagVariant} />

            <div className="flex max-w-2xl flex-col items-center gap-6 text-center md:gap-8">
                <HeaderCenter
                    whiteText={whiteText}
                    blueText={blueText}
                    variant={headerVariant}
                    className={headerClassName}
                />
                {description && (
                    <p className="px-4 text-sm leading-[1.4] font-normal text-white/70 md:text-base lg:text-lg">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}