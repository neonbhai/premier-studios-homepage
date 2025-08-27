'use client';

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import HeaderCenter from './commons/HeaderCenter';
import Tags from './commons/Tags';
import TestimonialCard from './cards/TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        // cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '15%',
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '10%',
                },
            },
        ],
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <section id="testimonials" className="w-full py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[2680px] px-4 md:px-8 lg:h-[700px] lg:px-16 xl:h-[800px]">
                {/* Header Section */}
                <div className="mx-auto mb-12 flex w-full max-w-7xl flex-col items-center md:mb-16 lg:mb-20">
                    {/* Testimonials Scroller */}

                    <Tags
                        text="testimonials"
                        variant="dark"
                        className="mb-4 lg:mb-8"
                    />

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
                    {/* Navigation Arrows */}
                    <motion.button
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous testimonial"
                        className="absolute top-1/2 left-4 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-black text-white transition-colors md:flex"
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
                    </motion.button>

                    <motion.button
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next testimonial"
                        className="absolute top-1/2 right-4 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black text-white transition-colors md:flex"
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
                    </motion.button>

                    {/* Carousel Container */}
                    <div className="testimonials-slider overflow-hidden">
                        <Slider
                            ref={sliderRef}
                            {...sliderSettings}
                            className="overflow-hidden"
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <div key={testimonial.id} className="px-2">
                                    <div className="testimonial-card-wrapper h-96 md:h-[400px] lg:h-[450px] xl:h-[500px]">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            className="flex h-full justify-center transition-all duration-300 ease-in-out"
                                        >
                                            <TestimonialCard />
                                            {/* <div className=' h-40  w-40 bg-red-100'/> */}
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Mobile Navigation Buttons */}
                    <div className="mt-6 flex justify-center gap-4 md:hidden">
                        <motion.button
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous testimonial"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
                        </motion.button>
                        <motion.button
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next testimonial"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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
                        </motion.button>
                    </div>

                    {/* Carousel Indicators */}
                    {/* <div className="mt-8 flex items-center justify-center gap-2">
                        {testimonialsData.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`h-2 w-2 rounded-full transition-colors md:h-3 md:w-3 ${
                                    currentSlide === index
                                        ? 'bg-white'
                                        : 'bg-white/30'
                                }`}
                            />
                        ))}
                    </div> */}
                </div>

                {/* Progress Bar */}
                {/* <div className="flex w-full justify-center">
                    <div className="relative h-1.5 w-32 rounded-full bg-white/10 md:h-[6px] md:w-[134px]">
                        <div
                            className="absolute top-0 left-0 h-1.5 w-12 rounded-full bg-white transition-all duration-300 ease-out md:h-[6px] md:w-[51px]"
                            style={{
                                transform: `translateX(${
                                    (currentSlide /
                                        Math.max(
                                            testimonialsData.length - 1,
                                            1
                                        )) *
                                    (typeof window !== 'undefined' &&
                                    window.innerWidth >= 768
                                        ? 83
                                        : 80)
                                }px)`,
                            }}
                        />
                    </div>
                </div> */}
            </div>
        </section>
    );
}
