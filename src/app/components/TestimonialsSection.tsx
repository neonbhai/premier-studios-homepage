'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import HeaderCenter from './commons/HeaderCenter';
import Tags from './commons/Tags';
import ArrowButton from './commons/ArrowButton';

const TestimonialCard = ( ) => {
  return (
    <div className="flex-shrink-0 w-[320px] md:w-[550px] lg:w-[650px] xl:w-[750px]">
      <div className="flex flex-col lg:flex-row h-auto lg:h-[300px] xl:h-[350px] bg-black rounded-[20px] lg:rounded-[30px] overflow-hidden   gap-3">
        
        {/* User Info Section */}
        <div className="relative lg:w-[35%] h-48 lg:h-full rounded-[20px] lg:rounded-[30px] ">
          <Image
            src="/assets/testimonials/testimonial-bg.jpg"
            alt="User background"
            fill
            className="object-cover rounded-[20px] lg:rounded-[30px]"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-[20px] lg:rounded-[30px] "></div>
          
          {/* User Info */}
          <div className="absolute bottom-0 left-0 p-4 lg:p-6">
            <h4 className="text-white font-medium text-lg lg:text-xl xl:text-2xl leading-[1.4]">
              Alex Carter
            </h4>
            <p className="text-white/90 font-normal text-sm lg:text-base xl:text-lg leading-[1.5] mt-1">
              Marketing Director at NovaTech
            </p>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="bg-white lg:w-[65%] p-4 lg:p-6 xl:p-8 flex flex-col justify-between  rounded-[20px] lg:rounded-[30px] ">
          
          {/* Location */}
          <div className="mb-4 lg:mb-6">
            <h5 className="text-black font-medium text-base lg:text-lg xl:text-xl">
              TX | USA
            </h5>
          </div>

          {/* Quote and Text */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Quote Icons */}
            <div className="flex items-center mb-4">
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Text */}
            <p className="text-black font-normal text-sm lg:text-base xl:text-lg leading-[1.4] mb-6">
              {"Working with Premier Studio was a game-changer for our brand. Their attention to detail, creativity, and professionalism exceeded all expectations. The final product was beyond what we imagined."}
            </p>
          </div>

          {/* View Live Project Button */}
          <ArrowButton text="View Now" size="medium" variant='light' className2=' '  />
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    { id: 1, featured: false },
    { id: 2, featured: false },
    { id: 3, featured: true },
    { id: 4, featured: false },
    { id: 5, featured: false },
    { id: 6, featured: false },
  ];

  const scrollToSlide = (slideIndex: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth >= 1280 ? 620 : window.innerWidth >= 1024 ? 520 : window.innerWidth >= 768 ? 420 : 340;
      const gap = window.innerWidth >= 1024 ? 32 : 24;
      const slideWidth = cardWidth + gap;
      
      carouselRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    const nextIndex = currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide > 0 ? currentSlide - 1 : testimonials.length - 1;
    scrollToSlide(prevIndex);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20">
          
          {/* Testimonials Scroller */}

          <Tags text='testimonials' variant='dark' />

          {/* Title and Description */}
          <div className="flex flex-col items-center gap-6 md:gap-8 max-w-2xl text-center">
            <HeaderCenter whiteText='What Our' blueText='Customers Say' variant='dark'/>
            <p className="text-white/70 font-normal text-sm md:text-base lg:text-lg leading-[1.4]">
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          
          {/* Navigation Arrows - Hidden on mobile */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black hover:bg-white/10 text-white rounded-full items-center justify-center transition-colors border border-white/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black hover:bg-white/30 text-white rounded-full items-center justify-center transition-colors border border-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 md:gap-8 pb-4 px-4 md:px-0" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                 
                />
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-black/80 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-black' : 'bg-black/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center">
          <div className="relative bg-black/40 rounded-full w-32 h-1.5 md:w-[134px] md:h-[6px]">
            <div 
              className="absolute top-0 left-0 bg-black rounded-full transition-all duration-300 ease-out w-12 h-1.5 md:w-[51px] md:h-[6px]"
              style={{ 
                transform: `translateX(${(currentSlide / Math.max(testimonials.length - 1, 1)) * (window?.innerWidth >= 768 ? 134 - 51 : 128 - 48)}px)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}