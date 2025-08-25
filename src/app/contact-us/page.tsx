import ContactFormSection from '../components/ContactFormSection';
import NavBar from '../components/NavBar';
import ScrollAnimatedSection from '../components/scroll-animated-section';

export default function ContactUs() {
    return (
        <div className="bg-[#050505]">
            {/* NavBar - No animation (first section) */}
            <NavBar transparent />

            {/* Contact Form Section */}
            <ScrollAnimatedSection delay={0}>
                <ContactFormSection />
            </ScrollAnimatedSection>
        </div>
    );
}
