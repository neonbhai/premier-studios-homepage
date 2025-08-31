import ContactFormHeader from './ContactFormHeader';
import ContactFormInfo from './ContactFormInfo';
import ContactForm from './ContactForm';

const DEFAULT_CONTENT = {
    tagText: 'Contact us',
    description:
        "Whether you're looking for a custom solution, need support, or just want to explore possibilities — we'd love to hear from you.",
} as const;

export default function ContactFormSection() {
    return (
        <section className="w-full py-[2rem] md:py-[3.125rem]">
            <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col items-start gap-[2rem] md:gap-[3.125rem] xl:flex-row">
                    {/* Left Content */}
                    <div className="flex w-full flex-col gap-[2.5rem] md:gap-[4.375rem] xl:w-[43rem]">
                        <ContactFormHeader
                            tagText={DEFAULT_CONTENT.tagText}
                            description={DEFAULT_CONTENT.description}
                        />
                        <ContactFormInfo />
                    </div>

                    {/* Right Form */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
