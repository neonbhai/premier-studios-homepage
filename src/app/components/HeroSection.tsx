import Image from 'next/image';
import ArrowButton from './commons/ArrowButton';
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
}

export default function HeroSection({
    backgroundImage = '/assets/hero-background.png',
    logoSrc = '/assets/logo.png',
    logoAlt = 'Premier Studio Logo',
    yearBadge = '2017 - 2025',
    heading = "We're experts in wide-range of services!",
    highlightText = 'experts',
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText = 'Join Now',
    brandText = 'Premier',
    brandHighlightLetter = 'P',
    navLinks,
    contactButtonText = 'Contact us',
    showYearBadge = true,
    showContentSection = true,
    showNavBar = true,
    halfheight,
}: HeroSectionProps) {
    return (
        <div className={` relative ${halfheight?" md:h-screen lg:h-screen":" h-screen"} min-h-[500px] w-full overflow-hidden`}>
            {/* Background Image */}
            <div className="absolute inset-0 m-[17px] rounded-2xl">
                <Image
                    src={backgroundImage}
                    alt="Hero background"
                    fill
                    className="rounded-2xl object-cover md:object-center lg:object-center grayscale"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 rounded-2xl bg-black/30"></div>
            </div>

            {/* Header */}
            {showNavBar && (
                <NavBar
                    logoSrc={logoSrc}
                    logoAlt={logoAlt}
                    navLinks={navLinks}
                    contactButtonText={contactButtonText}
                    transparent={true}
                />
            )}

            {/* Year Badge */}
            {showYearBadge && (
                <div className="absolute bottom-8 left-4 text-sm leading-[1.5] font-bold text-white/83 sm:bottom-12 sm:left-8 sm:text-base xl:bottom-[9.7vh] xl:left-[4.3vw] xl:text-[1.1vw]">
                    {yearBadge}
                </div>
            )}

            {/* Content Section */}
            {showContentSection && (
                <div className="absolute top-[30vh] left-7 flex w-[calc(90%-4rem)] flex-col gap-6 sm:top-[32vh] sm:left-8 sm:w-[calc(70%-4rem)] sm:gap-8 md:w-[calc(40%-4rem)] xl:top-[32.4vh] xl:left-[4.3vw] xl:w-[29.5vw] xl:gap-[3.9vh]">
                    <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[2.6vh]">
                        {/* Heading */}
                        <h2 className="font-bricolage max-w-[90%] text-xl leading-[1.2] font-medium text-[#F7F7F7] sm:text-2xl xl:max-w-[27.1vw] xl:text-[2.3vw]">
                            {heading.split(highlightText).map((part, index) => (
                                <span key={index}>
                                    {part}
                                    {index <
                                        heading.split(highlightText).length -
                                            1 && (
                                        <span className="text-[#029BE6]">
                                            {highlightText}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </h2>

                        {/* Description */}
                        <p className="text-sm leading-[1.5] font-medium text-white/83 sm:text-base xl:text-[1.1vw]">
                            {description}
                        </p>
                    </div>

                    {/* Join Now Button */}
                    <ArrowButton
                        text={buttonText}
                        size="medium"
                        variant="light"
                        className2=" "
                    />
                </div>
            )}

            {/* Large Premier Text */}
            {showYearBadge && (
                <div className="absolute right-6 bottom-6 sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="text-6xl leading-[1.199] font-medium text-white sm:text-6xl md:text-8xl xl:text-[15.1vw]">
                        <span className="text-[#029BE6]">
                            {brandHighlightLetter}
                        </span>
                        {brandText.slice(1)}
                    </h1>
                </div>
            )}
            {!showYearBadge && (
                <div className="absolute right-6 bottom-6 sm:right-8 sm:bottom-4 xl:right-[4.3vw]">
                    <h1 className="pointer-events-none text-7xl leading-[1.199] font-medium text-white sm:text-7xl md:text-8xl xl:text-[15.1vw]">
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
