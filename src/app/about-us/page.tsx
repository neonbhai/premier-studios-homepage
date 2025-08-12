import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import OfferSection from "../components/OfferSection";
import ContentSection from "../components/ContentSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CareersSection from "../components/CareersSection";

export default function AboutUs() {
  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection 
        showYearBadge={false}
        showContentSection={false}
        showNavBar={true}
        brandText="About"
        brandHighlightLetter="us"
        backgroundImage="/assets/about.png"
      />
      
      {/* About Section */}
      <AboutSection />

      {/* Offer Section */}
      <OfferSection />

      {/* Content Section */}
      <ContentSection reverse/>

      {/* Testimoniala */}
      <TestimonialsSection/>

      {/* Careers Section */}
      <CareersSection/>
    </div>
  );
}