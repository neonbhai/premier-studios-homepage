import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import OfferSection from '../components/OfferSection';
import HistorySection from '../components/HistorySection';
import ContentSection from '../components/ContentSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CareersSection from '../components/CareersSection';
import ScrollAnimatedSection from '../components/scroll-animated-section';

export default function AboutUs() {
    return (
        <div className="">
            {/* Hero Section - No animation (first section) */}
            <HeroSection
                showYearBadge={false}
                showContentSection={false}
                showNavBar={true}
                brandText="About"
                brandHighlightLetter="us"
                backgroundImage="/assets/about.png"
                halfheight
            />

            {/* About Section */}
            <ScrollAnimatedSection>
                <AboutSection />
            </ScrollAnimatedSection>

            {/* Offer Section */}
            <ScrollAnimatedSection>
                <OfferSection />
            </ScrollAnimatedSection>

            {/* History Section */}
            <ScrollAnimatedSection>
                <HistorySection />
            </ScrollAnimatedSection>

            {/* Content Section */}
            <ScrollAnimatedSection>
                <ContentSection reverse />
            </ScrollAnimatedSection>

            {/* Testimonials */}
            <ScrollAnimatedSection>
                <TestimonialsSection />
            </ScrollAnimatedSection>

            {/* Careers Section */}
            <ScrollAnimatedSection>
                <CareersSection />
            </ScrollAnimatedSection>
        </div>
    );
}
