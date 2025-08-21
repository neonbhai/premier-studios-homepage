import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MarqueeSection from './components/MarqueeSection';
import ContentSection from './components/ContentSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import MinecraftServicesSection from './components/MinecraftServicesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ScrollAnimatedSection from './components/scroll-animated-section';

export default function Home() {
    return (
        <div className="bg-[#050505]">
            {/* Hero Section - No animation (first section) */}
            <HeroSection showNavBar={true} />

            {/* About Section */}
            <ScrollAnimatedSection>
                <AboutSection />
            </ScrollAnimatedSection>

            {/* Marquee Section */}
            <ScrollAnimatedSection>
                <MarqueeSection />
            </ScrollAnimatedSection>

            {/* Content Section */}
            <ScrollAnimatedSection>
                <ContentSection reverse={false} />
            </ScrollAnimatedSection>

            {/* Featured Projects Section */}
            <ScrollAnimatedSection>
                <FeaturedProjectsSection />
            </ScrollAnimatedSection>

            {/* Minecraft Services Section */}
            <ScrollAnimatedSection>
                <MinecraftServicesSection />
            </ScrollAnimatedSection>

            {/* Services Section */}
            <ScrollAnimatedSection>
                <ServicesSection />
            </ScrollAnimatedSection>

            {/* Testimonials Section */}
            <ScrollAnimatedSection>
                <TestimonialsSection />
            </ScrollAnimatedSection>
            {/* Footer Section - No animation (footer) */}
            {/* <FooterSection /> */}
        </div>
    );
}
