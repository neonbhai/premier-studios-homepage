'use client';

import { useState } from 'react';
import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';
import ContactFormInfo from './ContactFormInfo';
import InterestSelector from './InterestSelector';
import ContactFormFields from './ContactFormFields';
import ContactSubmitButton from './ContactSubmitButton';

interface ContactFormSectionProps {
    tagText?: string;
    description?: string;
    email?: string;
    phone?: string;
    socialLinks?: string[];
}

export default function ContactFormSection({
    tagText = 'Contact us',
    description = "Whether you're looking for a custom solution, need support, or just want to explore possibilities — we'd love to hear from you.",
}: ContactFormSectionProps) {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([
        'Minecraft Services',
    ]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const interests = [
        'Minecraft Services',
        'Creative Services',
        'Technical Services',
        'Writing Services',
        'Career',
    ];

    const toggleInterest = (interest: string) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((item) => item !== interest)
                : [...prev, interest]
        );
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log('Form submitted:', {
        //     ...formData,
        //     interests: selectedInterests,
        // });
    };

    return (
        <section className="w-full bg-[#050505] py-[2rem] md:py-[3.125rem]">
            <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col items-start gap-[2rem] md:gap-[3.125rem] xl:flex-row">
                    {/* Left Content */}
                    <div className="flex w-full flex-col gap-[2.5rem] md:gap-[4.375rem] xl:w-[43rem]">
                        {/* Header Content */}
                        <div className="flex flex-col gap-[1.5rem] md:gap-[1.875rem]">
                            <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                                {/* Tags */}
                                <div className="flex w-full justify-center md:justify-start lg:justify-start">
                                    <Tags text={tagText} variant="dark" />
                                </div>

                                {/* Title */}
                                {/* <h2 className="text-white text-[2rem] md:text-[3rem] font-medium leading-[1.21] w-full">
                  {title}
                </h2> */}

                                <HeaderSide
                                    text="Let's Create Something "
                                    blueText="Extraordinary"
                                    large
                                />
                            </div>

                            {/* Description */}
                            <p className="w-full max-w-[22.1875rem] text-[0.875rem] leading-[1.4] font-normal text-white/52 md:text-[1rem]">
                                {description}
                            </p>
                        </div>

                        {/* Contact Info */}
                        <ContactFormInfo />
                    </div>

                    {/* Right Form */}
                    <div className="flex w-full flex-col gap-[3rem] rounded-[1rem] bg-[#F7F7F7] p-[1.5rem] md:gap-[3.5rem] md:rounded-[1.5rem] md:p-[3rem] xl:w-[43.75rem]">
                        {/* Form Content */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full flex-col items-center gap-[2rem] md:gap-[4rem]"
                        >
                            {/* Interests Section */}
                            <InterestSelector
                                interests={interests}
                                selectedInterests={selectedInterests}
                                onToggleInterest={toggleInterest}
                            />

                            {/* Form Fields */}
                            <ContactFormFields
                                formData={formData}
                                focusedField={focusedField}
                                onInputChange={handleInputChange}
                                onFocusChange={setFocusedField}
                            />
                        </form>

                        {/* Submit Button */}
                        <ContactSubmitButton onSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
}
