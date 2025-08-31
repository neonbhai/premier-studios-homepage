'use client';

import { useState } from 'react';
import InterestSelector from './InterestSelector';
import ContactFormFields from './ContactFormFields';
import ContactSubmitButton from './ContactSubmitButton';
import { useToast } from './commons/Toast';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ContactFormContentProps {
    interests: string[];
    selectedInterests: string[];
    onToggleInterest: (interest: string) => void;
}

export default function ContactFormContent({
    interests,
    selectedInterests,
    onToggleInterest,
}: ContactFormContentProps) {
    const { showToast } = useToast();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validate required fields
        if (!formData.name.trim()) {
            showToast('Please enter your name', 'error');
            return;
        }
        
        if (!formData.email.trim()) {
            showToast('Please enter your email address', 'error');
            return;
        }
        
        if (!isValidEmail(formData.email.trim())) {
            showToast('Please enter a valid email address', 'error');
            return;
        }
        
        if (!formData.message.trim()) {
            showToast('Please enter your message', 'error');
            return;
        }
        
        showToast('Thank you for your message! We\'ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="flex w-full flex-col gap-[3rem] rounded-[1rem] bg-[#F7F7F7] p-[1.5rem] md:gap-[3.5rem] md:rounded-[1.5rem] md:p-[3rem] xl:w-[43.75rem]">
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center gap-[2rem] md:gap-[4rem]"
            >
                <InterestSelector
                    interests={interests}
                    selectedInterests={selectedInterests}
                    onToggleInterest={onToggleInterest}
                />

                <ContactFormFields
                    formData={formData}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocusChange={setFocusedField}
                />
            </form>

            <ContactSubmitButton onSubmit={handleSubmit} />
        </div>
    );
}