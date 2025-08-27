import HeroContentSection from './HeroContentSection';
import HeroBackground from './HeroBackground';
import NavBar from './NavBar';

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
    backgroundImage = '/assets/hero-background.png',
    yearBadge = '2017 - 2025',
    heading = "We're experts in wide-range of services!",
    highlightText = 'experts',
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText = 'Join Now',
    brandText = 'Premier',
    brandHighlightLetter = 'P',
    showYearBadge = true,
    showContentSection = true,
    showNavBar = true,
    halfheight,
    quaterHeight,
}: HeroSectionProps) {
    return (
        <div
            className={`relative ${halfheight ? 'md:h-screen lg:h-screen' : ' h-[80vh] md:h-screen lg:h-screen'} min-h-[500px] w-full overflow-hidden`}
        >
            {/* Background Image */}
            <HeroBackground backgroundImage={backgroundImage} />

            {/* Header */}
            {showNavBar && <NavBar overlay />}

            {/* Year Badge */}
            {showYearBadge && (
                <div className="absolute right-[8%] bottom-24 sm:bottom-28 md:right-[6%] md:bottom-30 md:left-auto lg:bottom-[9.7vh] lg:left-8 xl:bottom-[9.7vh] xl:left-[4.3vw]">
                    <div className="text-sm leading-[1.5] font-bold text-white/83 sm:text-base xl:text-[1.1vw]">
                        {yearBadge}
                    </div>
                </div>
            )}

            {/* Content Section */}
            {showContentSection && (
                <HeroContentSection
                    heading={heading}
                    highlightText={highlightText}
                    description={description}
                    buttonText={buttonText}
                />
            )}

            {/* Large Premier Text */}
            {showYearBadge && (
                <div className="absolute right-6 bottom-6 sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="text-7xl leading-[1.199] font-medium text-white sm:text-8xl md:text-8xl lg:text-[15.1vw]">
                        <span className="text-[#029BE6]">
                            {brandHighlightLetter}
                        </span>
                        {brandText.slice(1)}
                    </h1>
                </div>
            )}
            {!showYearBadge && (
                <div className="absolute right-6 bottom-6 sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="text-7xl leading-[1.199] font-medium text-white sm:text-7xl md:text-8xl lg:text-[15.1vw]">
                        {brandText.slice(0)}{' '}
                        <span className="text-[#029BE6]">
                            {brandHighlightLetter}
                        </span>
                    </h1>
                </div>
            )}
        </div>
    );
}
