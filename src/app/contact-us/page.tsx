import HeroSection from '../components/HeroSection';
import ContactFormSection from '../components/ContactFormSection';
import NavBar from '../components/NavBar';

export default function ContactUs() {
    return (
        <div className=" bg-[#050505] ">
            {/* Hero Section */}
            <NavBar project/>

            {/* Contact Form Section */}
            <ContactFormSection />
        </div>
    );
}
