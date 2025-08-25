'use client';

import { useState, useRef } from 'react';
import Tags from './commons/Tags';
import HeaderCenter from './commons/HeaderCenter';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FeaturedProjectCard from './cards/FeaturedProjectCard';
import { projectsData, Project } from '../data/projectsData';
export default function FeaturedProjectsSection() {
    const [selectedImg, setSelectedImg] = useState<Project>(projectsData[0]);
    const sliderRef = useRef<Slider>(null);

    const handleHelperSelect = (item: Project) => {
        setSelectedImg(item);
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        dots: false,
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0px',
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1200,
        focusOnSelect: true,
        dotsClass: 'custom-dots',
        customPaging: (i: number) => (
            <div
                className={`dot mx-[2px] mt-2 h-2 w-2 rounded-full bg-gray-400 transition-all duration-300 ${selectedImg && selectedImg.id === projectsData[i].id ? 'bg-primary w-5' : ''}`}
            ></div>
        ),
        beforeChange: (current: number, next: number) =>
            handleHelperSelect(projectsData[next]),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                    variableWidth: false,
                },
            },
        ],
        arrows: false,
    };

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[2680px]">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center md:mb-16 lg:mb-20">
                    {/* What We Do Scroller */}
                    <Tags text="What we do" variant="dark" />

                    {/* Title and Description */}
                    <div className="flex max-w-2xl flex-col items-center gap-6 text-center md:gap-8">
                        <HeaderCenter
                            whiteText="Our Featured"
                            blueText="Projects"
                            variant="dark"
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                        />
                        <p className="px-4 text-sm leading-[1.4] font-normal text-white/70 md:text-base lg:text-lg">
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative mb-12 md:mb-16 lg:mb-20">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:left-8"
                    >
                        <svg
                            className="h-5 w-5 text-white md:h-6 md:w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:right-8"
                    >
                        <svg
                            className="h-5 w-5 text-white md:h-6 md:w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Sliding Carousel Container */}
                    <div className="h-[600px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            className="featured-projects-slider"
                        >
                            {projectsData.map((project) => (
                                <div
                                    key={project.id}
                                    // className="relative w-[450px] transition-all duration-300 outline-none sm:w-[600px] md:w-[730px] lg:-ml-12 lg:w-[830px] xl:w-[80px] scroll-smooth"
                                >
                                    <motion.div
                                        className={`relative flex w-full flex-col rounded-xl transition-all duration-300 ${
                                            selectedImg &&
                                            selectedImg.id === project.id
                                                ? 'h-[350px] scale-100 md:h-[450px] lg:h-[550px]'
                                                : 'mt-[60%] h-[250px] scale-90 sm:mt-[35%] md:mt-[35%] md:h-[350px] lg:mt-[24.5%] lg:h-[450px]'
                                        }`}
                                        initial={{ scale: 0.9 }}
                                        animate={
                                            selectedImg &&
                                            selectedImg.id === project.id
                                                ? { scale: 1.1 }
                                                : { scale: 0.9 }
                                        }
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative h-full w-full">
                                            <FeaturedProjectCard
                                                project={project}
                                                className="xs:w-[300px] h-full w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[900px]"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                        {/* <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ 
                transform: `translateX(-${currentSlide * 85}%)`,
                width: `calc(${projects.length} * 85%)` 
              }}
            >
              {projects.map((project, index) => {
                const isCenter = index === currentSlide;
                const isAdjacent = Math.abs(index - currentSlide) === 1;
                const isVisible = isCenter || isAdjacent || Math.abs(index - currentSlide) <= 2;
                
                if (!isVisible) return <div key={project.id} className="w-full" />;
                
                return (
                  <div 
                    key={project.id}
                    className={`flex-shrink-0 h-full px-2 transition-all duration-700 ease-in-out ${
                      isCenter 
                        ? 'w-[85%]' // Center card takes 85% to account for the full sliding space
                        : 'w-[85%]'  // All cards have same width, but non-center ones are scaled down
                    }`}
                    onClick={() => {
                      if (!isCenter) {
                        console.log(`Clicked on project ${index + 1}`);
                        setCurrentSlide(index);
                      }
                    }}
                  >
                    <ProjectCard 
                      position={isCenter ? 'center' : 'side'}
                      project={project}
                      className={`cursor-pointer ${!isCenter ? 'hover:scale-105' : ''}`}
                    />
                  </div>
                );
              })}
            </div> */}
                    </div>
                </div>

                {/* View All Button */}
                <Link href="/projects">
                    <div className="flex justify-center">
                        <button className="min-w-[200px] rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:border-gray-400 hover:bg-gray-100 md:min-w-[271px] md:px-12 md:py-4 md:text-base lg:text-lg">
                            View all
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    );
}
