"use client";

import { useState } from 'react';
import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';

interface ContactFormSectionProps {
  tagText?: string;
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  socialLinks?: string[];
}

export default function ContactFormSection({
  tagText = "Contact us",
  title = "Let's Create Something Extraordinary",
  description = "Whether you're looking for a custom solution, need support, or just want to explore possibilities — we'd love to hear from you.",
  email = "hello@premier.com",
  phone = "+44 20 7946 0958",
  socialLinks = ["Discord", "Instagram", "Facebook"]
}: ContactFormSectionProps) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Minecraft Services"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const interests = [
    "Minecraft Services",
    "Creative Services", 
    "Technical Services",
    "Writing Services",
    "Career"
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, interests: selectedInterests });
  };

  return (
    <section className="w-full py-[2rem] md:py-[3.125rem] bg-black">
      <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
        <div className="flex flex-col xl:flex-row gap-[2rem] md:gap-[3.125rem] items-start">
          
          {/* Left Content */}
          <div className="flex flex-col gap-[2.5rem] md:gap-[4.375rem] w-full xl:w-[43rem]">
            
            {/* Header Content */}
            <div className="flex flex-col gap-[1.5rem] md:gap-[1.875rem]">
              <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                {/* Tags */}
                <Tags text={tagText} variant="dark" />
                
                {/* Title */}
                {/* <h2 className="text-white text-[2rem] md:text-[3rem] font-medium leading-[1.21] w-full">
                  {title}
                </h2> */}

                <HeaderSide text="Let's Create Something " blueText='Extraordinary' large />
              </div>
              
              {/* Description */}
              <p className="text-white/52 text-[0.875rem] md:text-[1rem] font-normal leading-[1.4] w-full max-w-[22.1875rem]">
                {description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem] w-full max-w-[20.25rem]">
              <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                <div className="text-white text-[1.5rem] md:text-[2.25rem] font-medium leading-[1.21]">
                  {email}
                </div>
                <div className="text-white/52 text-[0.875rem] md:text-[1rem] font-medium leading-[1.21] w-full">
                  {phone}
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-full h-[1px] bg-white"></div>
              
              {/* Social Links */}
              <div className="flex items-center gap-[1rem] md:gap-[1.25rem]">
                {socialLinks.map((social, index) => (
                  <span key={index} className="text-white text-[0.875rem] md:text-[1rem] font-normal leading-[1.21] cursor-pointer hover:text-[#029BE6] transition-colors">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#F7F7F7] rounded-[1rem] md:rounded-[1.5rem] p-[1.5rem] md:p-[3rem] w-full xl:w-[43.75rem] flex flex-col gap-[3rem] md:gap-[7.5rem]">
            
            {/* Form Content */}
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[2rem] md:gap-[4rem] w-full">
              
              {/* Interests Section */}
              <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] w-full">
                <h3 className="text-[#050505] text-[1rem] md:text-[1.25rem] font-medium leading-[1.21]">
                  I{"'"}m interested in...
                </h3>
                
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex flex-wrap gap-[1rem] w-full">
                    {interests.slice(0, 2).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-[0.75rem] md:px-[1.25rem] py-[0.75rem] md:py-[0.9375rem] rounded-full text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.21] text-center transition-colors ${
                          selectedInterests.includes(interest)
                            ? 'bg-[#029BE6] text-white'
                            : 'border-[1.5px] border-black/52 text-black/52'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-[1rem]">
                    {interests.slice(2).map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-[0.75rem] md:px-[1.25rem] py-[0.75rem] md:py-[0.9375rem] rounded-full text-[0.875rem] md:text-[1.25rem] font-medium leading-[1.21] text-center transition-colors ${
                          selectedInterests.includes(interest)
                            ? 'bg-[#029BE6] text-white'
                            : 'border-[1.5px] border-black/52 text-black/52'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-[2rem] md:gap-[4rem] w-full">
                
                {/* Name Field */}
                <div className="flex flex-col gap-[0.5rem]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your name"
                    className="text-black/52 text-[1rem] md:text-[1.25rem] font-medium leading-[1.5] bg-transparent border-none outline-none placeholder:text-black/52 "
                  />
                  <div className={`w-full h-[1.5px] transition-colors ${focusedField === "name" || formData.name ? "bg-[#029BE6]" : "bg-black/52"}`}></div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-[0.5rem]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email"
                    className="text-black/52 text-[1rem] md:text-[1.25rem] font-medium leading-[1.21] bg-transparent border-none outline-none placeholder:text-black/52"
                  />
                  <div className={`w-full h-[1.5px] transition-colors ${focusedField === "email" || formData.email ? "bg-[#029BE6]" : "bg-black/52"}`}></div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-[0.5rem]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your message"
                    rows={1}
                    className="text-black/52 text-[1rem] md:text-[1.25rem] font-medium leading-[1.21] bg-transparent border-none outline-none resize-none placeholder:text-black/52"
                  />
                  <div className={`w-full h-[1.5px] transition-colors ${focusedField === "message" || formData.message ? "bg-[#029BE6]" : "bg-black/52"}`}></div>
                </div>
              </div>
            </form>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center gap-[0.75rem] md:gap-[1rem] px-[2rem] md:px-[4rem] py-[1rem] md:py-[1.5rem] bg-[#029BE6] rounded-full w-fit hover:bg-[#0256CC] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-[1rem] md:text-[1.25rem] font-medium leading-[1.21]">
                Send Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}