'use client';

import Image from 'next/image';
import { useState, useRef, useEffect, useCallback } from 'react';
import HeaderCenter from './commons/HeaderCenter';
import Tags from './commons/Tags';
import ArrowButton from './commons/ArrowButton';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
    index: number;
    currentPosition: number;
    totalWidth: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    index,
    currentPosition,
    totalWidth,
}) => {
    const calculateImageHeight = () => {
        const cardWidth = totalWidth;
        const cardCenter = index * cardWidth;

        const distance = Math.abs(currentPosition - cardCenter);

        const normalizedDistance = Math.min(distance / cardWidth, 1);

        return `${100 - normalizedDistance * 50}%`;
    };

    return (
        <div className="w-[320px] flex-shrink-0 md:w-[550px] lg:w-[650px] xl:w-[750px]">
            <div className="flex h-auto flex-col gap-3 overflow-hidden rounded-[20px] bg-black lg:h-[300px] lg:flex-row lg:rounded-[30px] xl:h-[350px]">
                {/* User Info Section */}
                <div className="relative overflow-hidden rounded-[20px] lg:w-[35%] lg:rounded-[30px]">
                    <motion.div
                        className="relative w-full"
                        style={{
                            height: calculateImageHeight(),
                            transition: 'height 0.3s linear',
                        }}
                    >
                        <Image
                            src="/assets/testimonials/testimonial-bg.jpg"
                            alt="User background"
                            fill
                            className="rounded-[20px] object-cover lg:rounded-[30px]"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent to-black/50 lg:rounded-[30px]"></div>

                        {/* User Info */}
                        <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                            <h4 className="text-lg leading-[1.4] font-medium text-white lg:text-xl xl:text-2xl">
                                Alex Carter
                            </h4>
                            <p className="mt-1 text-sm leading-[1.5] font-normal text-white/90 lg:text-base xl:text-lg">
                                Marketing Director at NovaTech
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col justify-between rounded-[20px] bg-white p-4 lg:w-[65%] lg:rounded-[30px] lg:p-6 xl:p-8">
                    {/* Location */}
                    <div className="mb-4 lg:mb-6">
                        <h5 className="text-base font-medium text-black lg:text-lg xl:text-xl">
                            TX | USA
                        </h5>
                    </div>

                    {/* Quote and Text */}
                    <div className="flex flex-1 flex-col justify-center">
                        {/* Quote Icons */}
                        <div className="mb-4 flex items-center">
                            <svg
                                className="h-4 w-4 text-blue-400 lg:h-5 lg:w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>

                        {/* Testimonial Text */}
                        <p className="mb-6 text-sm leading-[1.4] font-normal text-black lg:text-base xl:text-lg">
                            {
                                'Working with Premier Studio was a game-changer for our brand. Their attention to detail, creativity, and professionalism exceeded all expectations. The final product was beyond what we imagined.'
                            }
                        </p>
                    </div>

                    {/* View Live Project Button */}
                    <ArrowButton
                        text="View Now"
                        size="medium"
                        variant="dark"
                        fill="black"
                        className2="  "
                        className=""
                    />
                </div>
            </div>
        </div>
    );
};

export default function TestimonialsSection() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonials = [
        { id: 1, featured: false },
        { id: 2, featured: false },
        { id: 3, featured: true },
        { id: 4, featured: false },
        { id: 5, featured: false },
        { id: 6, featured: false },
    ];

    const handleScroll = () => {
        if (carouselRef.current) {
            setScrollPosition(carouselRef.current.scrollLeft);
        }
    };

    const getCardWidth = () => {
        if (typeof window === 'undefined') return 620; // Default for SSR
        return window.innerWidth >= 1280
            ? 620
            : window.innerWidth >= 1024
              ? 520
              : window.innerWidth >= 768
                ? 420
                : 340;
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToSlide = useCallback(
        (slideIndex: number) => {
            if (
                carouselRef.current &&
                typeof window !== 'undefined' &&
                !isTransitioning
            ) {
                setIsTransitioning(true);
                const cardWidth =
                    window.innerWidth >= 1280
                        ? 620
                        : window.innerWidth >= 1024
                          ? 520
                          : window.innerWidth >= 768
                            ? 420
                            : 340;
                const gap = window.innerWidth >= 1024 ? 32 : 4;
                const slideWidth = cardWidth + gap;

                const targetScrollLeft =
                    slideIndex * (window.innerWidth < 400 ? 350 : slideWidth);

                // Animate scroll with precise 0.3s linear timing to match image transition
                const startScrollLeft = carouselRef.current.scrollLeft;
                const distance = targetScrollLeft - startScrollLeft;
                const duration = 300; // 0.3s in milliseconds
                const startTime = performance.now();

                const animateScroll = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    if (carouselRef.current) {
                        // Linear interpolation to match the image transition timing
                        carouselRef.current.scrollLeft =
                            startScrollLeft + distance * progress;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    } else {
                        setIsTransitioning(false);
                    }
                };

                requestAnimationFrame(animateScroll);
                setCurrentSlide(slideIndex);
            }
        },
        [isTransitioning]
    );

    const nextSlide = useCallback(() => {
        const nextIndex =
            currentSlide < testimonials.length - 1 ? currentSlide + 1 : 0;
        scrollToSlide(nextIndex);
    }, [currentSlide, testimonials.length, scrollToSlide]);

    const prevSlide = useCallback(() => {
        const prevIndex =
            currentSlide > 0 ? currentSlide - 1 : testimonials.length - 1;
        scrollToSlide(prevIndex);
    }, [currentSlide, testimonials.length, scrollToSlide]);

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide, isTransitioning, nextSlide]);

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[2680px] px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <div className="mx-auto mb-12 flex w-full max-w-7xl flex-col items-center md:mb-16 lg:mb-20">
                    {/* Testimonials Scroller */}

                    <Tags text="testimonials" variant="dark" />

                    {/* Title and Description */}
                    <div className="flex max-w-2xl flex-col items-center gap-6 text-center md:gap-8">
                        <HeaderCenter
                            whiteText="What Our"
                            blueText="Customers Say"
                            variant="dark"
                        />
                        <p className="text-sm leading-[1.4] font-normal text-white/70 md:text-base lg:text-lg">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently.
                        </p>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative mb-12 md:mb-16 lg:mb-20">
                    {/* Navigation Arrows - Hidden on mobile */}
                    <button
                        onClick={prevSlide}
                        className="hover:bg-white/ absolute top-1/2 left-4 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black text-white transition-colors md:flex"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hover:bg-whit /30 absolute top-1/2 right-4 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black text-white transition-colors md:flex"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="scrollbar-hide overflow-x-auto scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'auto',
                        }}
                    >
                        <div
                            className="flex justify-center gap-6 scroll-smooth px-4 pb-4 md:gap-8 md:px-0"
                            style={{ width: 'max-content' }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={testimonial.id}
                                    index={index}
                                    currentPosition={scrollPosition}
                                    totalWidth={
                                        getCardWidth() +
                                        (typeof window !== 'undefined' &&
                                        window.innerWidth >= 1024
                                            ? 32
                                            : 24)
                                    } // card width + gap
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="mt-6 flex justify-center gap-4 md:hidden">
                        <button
                            onClick={prevSlide}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-black"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-black"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="mt-8 flex items-center justify-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSlide(index)}
                                className={`h-2 w-2 rounded-full transition-colors md:h-3 md:w-3 ${
                                    currentSlide === index
                                        ? 'bg-black'
                                        : 'bg-black/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="flex w-full justify-center">
                    <div className="relative h-1.5 w-32 rounded-full bg-black/40 md:h-[6px] md:w-[134px]">
                        <div
                            className="absolute top-0 left-0 h-1.5 w-12 rounded-full bg-black transition-all duration-300 ease-out md:h-[6px] md:w-[51px]"
                            style={{
                                transform: `translateX(${(currentSlide / Math.max(testimonials.length - 1, 1)) * (typeof window !== 'undefined' && window?.innerWidth >= 768 ? 134 - 51 : 128 - 48)}px)`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
