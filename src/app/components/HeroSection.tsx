import HeroContentSection from './HeroContentSection';
import HeroBackground from './HeroBackground';
import NavBar from './NavBar';

const DEFAULT_CONTENT = {
    backgroundImage: '/assets/hero-background.png',
    yearBadge: '2017 - 2025',
    heading: "We're experts in wide-range of services!",
    highlightText: 'experts',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText: 'Join Now',
    brandText: 'Premier',
    brandHighlightLetter: 'P',
} as const;

interface HeroSectionProps {
    backgroundImage?: string;
    logoSrc?: string;
    logoAlt?: string;
    yearBadge?: string;
    heading?: string;
    highlightText?: string;
    description?: string;
    buttonText?: string;
    brandText?: string;
    brandHighlightLetter?: string;
    navLinks?: { label: string; href: string }[];
    contactButtonText?: string;
    showYearBadge?: boolean;
    showContentSection?: boolean;
    showNavBar?: boolean;
    halfheight?: boolean;
    quaterHeight?: boolean;
}

export default function HeroSection({
    backgroundImage,
    yearBadge,
    heading,
    highlightText,
    description,
    buttonText,
    brandText,
    brandHighlightLetter,
    showYearBadge = true,
    showContentSection = true,
    showNavBar = true,
    halfheight,
}: HeroSectionProps) {
    const displayBackgroundImage = backgroundImage || DEFAULT_CONTENT.backgroundImage;
    const displayYearBadge = yearBadge || DEFAULT_CONTENT.yearBadge;
    const displayHeading = heading || DEFAULT_CONTENT.heading;
    const displayHighlightText = highlightText || DEFAULT_CONTENT.highlightText;
    const displayDescription = description || DEFAULT_CONTENT.description;
    const displayButtonText = buttonText || DEFAULT_CONTENT.buttonText;
    const displayBrandText = brandText || DEFAULT_CONTENT.brandText;
    const displayBrandHighlightLetter = brandHighlightLetter || DEFAULT_CONTENT.brandHighlightLetter;

    return (
        <div
            className={`relative ${halfheight ? 'md:h-screen lg:h-screen' : 'h-[80vh] md:h-screen lg:h-screen'} min-h-[500px] w-full overflow-hidden`}
        >
            {/* Background Image */}
            <HeroBackground backgroundImage={displayBackgroundImage} />

            {/* Header */}
            {showNavBar && <NavBar overlay />}

            {/* Year Badge */}
            {showYearBadge && (
                <div className="absolute right-[8%] bottom-24 z-[25] sm:bottom-28 md:right-[6%] md:bottom-30 md:left-auto lg:bottom-[9.7vh] lg:left-15 xl:bottom-[9.7vh] xl:left-[4.3vw]">
                    <div className="text-sm leading-[1.5] font-bold text-white/83 sm:text-base xl:text-[1.1vw]">
                        {displayYearBadge}
                    </div>
                </div>
            )}

            {/* Content Section */}
            {showContentSection && (
                <HeroContentSection
                    heading={displayHeading}
                    highlightText={displayHighlightText}
                    description={displayDescription}
                    buttonText={displayButtonText}
                />
            )}

            {/* Large Premier Text */}
            {showYearBadge && (
                <div className="pointer-events-none absolute right-6 bottom-6 z-[2] sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="text-7xl leading-[1.199] font-medium text-white sm:text-8xl md:text-8xl lg:text-[15.1vw]">
                        <span className="text-[#029BE6]">
                            {displayBrandHighlightLetter}
                        </span>
                        {displayBrandText.slice(1)}
                    </h1>
                </div>
            )}
            {!showYearBadge && (
                <div className="pointer-events-none absolute right-6 bottom-6 z-[2] sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="text-7xl leading-[1.199] font-medium text-white sm:text-7xl md:text-8xl lg:text-[15.1vw]">
                        {displayBrandText.slice(0)}{' '}
                        <span className="text-[#029BE6]">
                            {displayBrandHighlightLetter}
                        </span>
                    </h1>
                </div>
            )}
        </div>
    );
}
