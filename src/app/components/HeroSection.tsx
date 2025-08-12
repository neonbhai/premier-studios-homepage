import Image from "next/image";
import ArrowButton from "./commons/ArrowButton";
import NavBar from "./NavBar";

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
}

export default function HeroSection({
  backgroundImage = "/assets/hero-background.png",
  logoSrc = "/assets/logo.png",
  logoAlt = "Premier Studio Logo",
  yearBadge = "2017 - 2025",
  heading = "We're experts in wide-range of services!",
  highlightText = "experts",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText = "Join Now",
  brandText = "Premier",
  brandHighlightLetter = "P",
  navLinks,
  contactButtonText = "Contact us",
  showYearBadge = true,
  showContentSection = true,
  showNavBar = true
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover grayscale"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
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
        <div className="absolute left-4 sm:left-8 xl:left-[4.3vw] bottom-8 sm:bottom-12 xl:bottom-[9.7vh] text-white/83 text-sm sm:text-base xl:text-[1.1vw] font-bold leading-[1.5]">
          {yearBadge}
        </div>
      )}

      {/* Content Section */}
      {showContentSection && (
        <div className="absolute left-4 sm:left-8 xl:left-[4.3vw] top-[30vh] sm:top-[32vh] xl:top-[32.4vh] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] xl:w-[29.5vw] flex flex-col gap-6 sm:gap-8 xl:gap-[3.9vh]">
          <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[2.6vh]">
            {/* Heading */}
            <h2 className="text-[#F7F7F7] text-xl sm:text-2xl xl:text-[2.3vw] font-medium leading-[1.2] max-w-[90%] xl:max-w-[27.1vw] font-bricolage">
              {heading.split(highlightText).map((part, index) => (
                <span key={index}>
                  {part}
                  {index < heading.split(highlightText).length - 1 && (
                    <span className="text-[#029BE6]">{highlightText}</span>
                  )}
                </span>
              ))}
            </h2>

            {/* Description */}
            <p className="text-white/83 text-sm sm:text-base xl:text-[1.1vw] font-medium leading-[1.5]">
              {description}
            </p>
          </div>

          {/* Join Now Button */}
          <ArrowButton text={buttonText} size="medium" variant="dark" className2=" text-white" />
        </div>
      )}

      {/* Large Premier Text */}
     { showYearBadge && <div className="absolute right-4 sm:right-8 xl:right-[4.3vw] bottom-0">
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl xl:text-[15.1vw] font-medium leading-[1.199] font-sherika">
          <span className="text-[#029BE6]">{brandHighlightLetter}</span>{brandText.slice(1)}
        </h1>
      </div>}
    { !showYearBadge &&  <div className="absolute right-4 sm:right-8 xl:right-[4.3vw] bottom-0">
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl xl:text-[15.1vw] font-medium leading-[1.199] font-sherika">
        {brandText.slice(0)}  <span className="text-[#029BE6]">{brandHighlightLetter}</span>
        </h1>
      </div>}
    </div>
  );
}