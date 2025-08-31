'use client';

import { useState } from 'react';
import ContactFormContent from './ContactFormContent';

export default function ContactForm() {
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
        <ContactFormContent
            interests={interests}
            selectedInterests={selectedInterests}
            onToggleInterest={toggleInterest}
        />
    );
}
