'use client';

import { useState } from 'react';
import ContactFormHeader from './ContactFormHeader';
import ContactFormInfo from './ContactFormInfo';
import ContactFormContent from './ContactFormContent';

interface ContactFormSectionProps {
    tagText?: string;
    description?: string;
}

export default function ContactFormSection({
    tagText = 'Contact us',
    description = "Whether you're looking for a custom solution, need support, or just want to explore possibilities — we'd love to hear from you.",
}: ContactFormSectionProps) {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([
        'Minecraft Services',
    ]);

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

    return (
        <section className="w-full py-[2rem] md:py-[3.125rem]">
            <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col items-start gap-[2rem] md:gap-[3.125rem] xl:flex-row">
                    {/* Left Content */}
                    <div className="flex w-full flex-col gap-[2.5rem] md:gap-[4.375rem] xl:w-[43rem]">
                        <ContactFormHeader 
                            tagText={tagText}
                            description={description}
                        />
                        <ContactFormInfo />
                    </div>

                    {/* Right Form */}
                    <ContactFormContent
                        interests={interests}
                        selectedInterests={selectedInterests}
                        onToggleInterest={toggleInterest}
                    />
                </div>
            </div>
        </section>
    );
}
