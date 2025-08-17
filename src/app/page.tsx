import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MarqueeSection from "./components/MarqueeSection";
import ContentSection from "./components/ContentSection";
import FeaturedProjectsSection from "./components/FeaturedProjectsSection";
import MinecraftServicesSection from "./components/MinecraftServicesSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectCategoriesSection from "./components/ProjectCategoriesSection";
import ProjectFilter from "./components/ProjectFilter";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className=" bg-[#050505]">
    {/* Hero Section */}
    <HeroSection showNavBar={true} />
    
    {/* About Section */}
    <AboutSection />
    
    {/* Marquee Section */}
    <MarqueeSection />
    
    {/* Content Section */}
    <ContentSection reverse={false} />
    
    {/* Featured Projects Section */}
    <FeaturedProjectsSection />
    
    {/* Minecraft Services Section */}
    <MinecraftServicesSection />
    
    {/* Services Section */}
    <ServicesSection />
    
    {/* Testimonials Section */}
    <TestimonialsSection /> 
    {/* Footer Section */}
    {/* <FooterSection /> */}
    </div>
  );
}
