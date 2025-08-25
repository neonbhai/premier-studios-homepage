'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import FeaturedProjectCard from './cards/FeaturedProjectCard';
import CarouselNavigation from './commons/CarouselNavigation';
import CenteredHeader from './commons/CenteredHeader';
import { projectsData } from '../data/projectsData';

export default function GSAPCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const animateItems = useCallback(() => {
        itemsRef.current.forEach((item, index) => {
            if (!item) return;

            const isCenter = index === currentIndex;
            const isLeft =
                index ===
                (currentIndex - 1 + projectsData.length) % projectsData.length;
            const isRight = index === (currentIndex + 1) % projectsData.length;

            let xPosition = 0;
            let scale = 0.58; // Smaller scale for side cards (561/969 ratio from figma)
            let zIndex = 1;
            let opacity = 1;

            if (isCenter) {
                xPosition = 0;
                scale = 1;
                zIndex = 3;
                opacity = 1;
            } else if (isLeft) {
                xPosition = -480; // Adjusted for proper spacing
                scale = 0.58;
                zIndex = 2;
                opacity = 1;
            } else if (isRight) {
                xPosition = 480;
                scale = 0.58;
                zIndex = 2;
                opacity = 1;
            } else {
                // Hide other items
                opacity = 0;
                scale = 0.4;
            }

            gsap.to(item, {
                x: xPosition,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
                duration: 0.8,
                ease: 'power2.out',
            });
        });
    }, [currentIndex]);

    useEffect(() => {
        animateItems();
    }, [animateItems]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    };

    const goToPrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + projectsData.length) % projectsData.length
        );
    };

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[2680px]">
                <CenteredHeader
                    tagText="What we do"
                    tagVariant="dark"
                    whiteText="Our Featured"
                    blueText="Projects"
                    headerVariant="dark"
                    description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    headerClassName="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                    containerClassName="mb-12 flex flex-col items-center md:mb-16 lg:mb-20"
                />

                {/* Carousel Container */}
                <div className="relative">
                    <CarouselNavigation
                        onPrevious={goToPrev}
                        onNext={goToNext}
                        viewAllHref="/projects"
                        viewAllText="View all"
                    />

                    {/* GSAP Carousel Container */}
                    <div className="relative h-[600px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
                        <div
                            ref={carouselRef}
                            className="relative flex h-full items-center justify-center"
                        >
                            {projectsData.map((project, index) => (
                                <div
                                    key={project.id}
                                    ref={(el) => {
                                        itemsRef.current[index] = el;
                                    }}
                                    className="absolute flex h-full items-center justify-center"
                                    // style={{
                                    //     transformOrigin: 'center center',
                                    // }}
                                >
                                    <div className="relative h-[350px] w-[300px] md:h-[450px] md:w-[600px] lg:h-[550px] lg:w-[900px]">
                                        <FeaturedProjectCard
                                            project={project}
                                            className="h-full w-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="mt-8 flex justify-center space-x-2">
                        {projectsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'w-8 bg-blue-500'
                                        : 'w-2 bg-gray-400 hover:bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
