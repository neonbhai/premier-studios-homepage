'use client';

import { useState } from 'react';
import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';

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
    email = 'hello@premier.com',
    phone = '+44 20 7946 0958',
    socialLinks = ['Discord', 'Instagram', 'Facebook'],
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
        console.log('Form submitted:', {
            ...formData,
            interests: selectedInterests,
        });
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
                        <div className="flex w-full max-w-[20.25rem] flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                            <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                                <a
                                    href={`mailto:${email}`}
                                    className="cursor-pointer text-[1.5rem] leading-[1.21] font-medium text-white transition-colors hover:text-[#029BE6] md:text-[2.25rem]"
                                >
                                    {email}
                                </a>
                                <a
                                    href={`tel:${phone}`}
                                    className="w-full cursor-pointer text-[0.875rem] leading-[1.21] font-medium text-white/52 transition-colors hover:text-[#029BE6] md:text-[1rem]"
                                >
                                    {phone}
                                </a>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] w-full bg-white"></div>

                            {/* Social Links */}
                            <div className="flex items-center gap-[1rem] md:gap-[1.25rem]">
                                {socialLinks.map((social, index) => (
                                    <span
                                        key={index}
                                        className="cursor-pointer text-[0.875rem] leading-[1.21] font-normal text-white transition-colors hover:text-[#029BE6] md:text-[1rem]"
                                    >
                                        {social}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="flex w-full flex-col gap-[3rem] rounded-[1rem] bg-[#F7F7F7] p-[1.5rem] md:gap-[3.5rem] md:rounded-[1.5rem] md:p-[3rem] xl:w-[43.75rem]">
                        {/* Form Content */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full flex-col items-center gap-[2rem] md:gap-[4rem]"
                        >
                            {/* Interests Section */}
                            <div className="flex w-full flex-col gap-[1rem] md:gap-[1.5rem]">
                                <h3 className="text-[1rem] leading-[1.21] font-medium text-[#050505] md:text-[1.25rem]">
                                    I{"'"}m interested in...
                                </h3>

                                <div className="flex w-full flex-col gap-[1rem] lg:flex-row lg:flex-wrap">
                                    {interests.map((interest) => (
                                        <button
                                            key={interest}
                                            type="button"
                                            onClick={() =>
                                                toggleInterest(interest)
                                            }
                                            className={`rounded-full px-[0.5rem] py-[0.5rem] text-center text-[0.75rem] leading-[1.21] font-medium transition-colors md:px-[0.75rem] md:py-[0.625rem] md:text-[0.875rem] ${
                                                selectedInterests.includes(
                                                    interest
                                                )
                                                    ? 'border-[1.5px] border-[#029BE6] bg-[#029BE6] text-white'
                                                    : 'border-[1.5px] border-black/52 text-black/52'
                                            }`}
                                        >
                                            {interest}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="flex w-full flex-col gap-[2rem] md:gap-[4rem]">
                                {/* Name Field */}
                                <div className="flex flex-col gap-[0.5rem]">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Enter your name"
                                        className="border-none bg-transparent text-[1rem] leading-[1.5] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                                    />
                                    <div
                                        className={`h-[1.5px] w-full transition-colors ${focusedField === 'name' || formData.name ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                                    ></div>
                                </div>

                                {/* Email Field */}
                                <div className="flex flex-col gap-[0.5rem]">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Enter your email"
                                        className="border-none bg-transparent text-[1rem] leading-[1.21] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                                    />
                                    <div
                                        className={`h-[1.5px] w-full transition-colors ${focusedField === 'email' || formData.email ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                                    ></div>
                                </div>

                                {/* Message Field */}
                                <div className="flex flex-col gap-[0.5rem]">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() =>
                                            setFocusedField('message')
                                        }
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Enter your message"
                                        rows={1}
                                        className="resize-none border-none bg-transparent text-[1rem] leading-[1.21] font-medium text-black/52 outline-none placeholder:text-black/52 md:text-[1.25rem]"
                                    />
                                    <div
                                        className={`h-[1.5px] w-full transition-colors ${focusedField === 'message' || formData.message ? 'bg-[#029BE6]' : 'bg-black/52'}`}
                                    ></div>
                                </div>
                            </div>
                        </form>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="flex w-fit items-center gap-[0.75rem] rounded-full bg-[#029BE6] px-[2rem] py-[1rem] transition-colors hover:bg-[#0256CC] md:gap-[1rem] md:px-[4rem] md:py-[1.5rem]"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="md:h-6 md:w-6"
                            >
                                <path
                                    d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-[1rem] leading-[1.21] font-medium text-white md:text-[1.25rem]">
                                Send Message
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
