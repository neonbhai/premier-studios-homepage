'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Tags from './commons/Tags';
import HeaderCenter from './commons/HeaderCenter';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
};

const ProjectCard = ({
    className = '',
    position = 'center',
    project,
}: {
    className?: string;
    position?: string;
    project?: Project;
}) => {
    // Calculate styles based on position
    const getStyles = () => {
        if (position === 'center') {
            return 'w  opacity-100 scale-100';
        } else {
            return ' opacity-50 scale-90 hover:opacity-70';
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-[30px] transition-all duration-500 ease-in-out ${className} ${getStyles()}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/project-bg.png"
                    alt="Project background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-16 lg:left-16 text-black">
                <h3 className="mb-1 sm:mb-2 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[29px] font-medium leading-[1.21]">
                    {project?.title || 'ELEMENTO'}
                </h3>
                <p className="max-w-[200px] sm:max-w-[240px] md:max-w-[270px] lg:max-w-[294px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.6px] font-normal leading-[1.21]">
                    {project?.description || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
                </p>

                <div className="relative flex items-center mt-3 sm:mt-4 md:mt-5">
                  <button>

                    <Image
                        src="/assets/arrow-icon.svg"
                        alt="Arrow icon"
                        width={100}
                        height={42}
                        className="transition-transform group-hover:scale-105 sm:w-[118px] sm:h-[50px] md:w-[135px] md:h-[57px] lg:w-[148.5px] lg:h-[62.5px]"
                    />
                    <span className="absolute left-[18px] top-[12px] sm:left-[22px] sm:top-[15px] md:left-[25px] md:top-[17px] lg:left-[27px] lg:top-[19px] text-white text-[12px] sm:text-[14px] md:text-[15px] lg:text-base font-medium">
                        View project
                    </span>
                   </button>
                </div>
            </div>
 
        </div>
    );
};

const projects = [
    {
        id: 1,
        title: 'ELEMENTO',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-red-500',
    },
    {
        id: 2,
        title: 'PROJECT TWO',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-blue-500',
    },
    {
        id: 3,
        title: 'PROJECT THREE',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-green-500',
    },
    {
        id: 4,
        title: 'PROJECT FOUR',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-yellow-500',
    },
    {
        id: 5,
        title: 'PROJECT FIVE',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-purple-500',
    },
    {
        id: 6,
        title: 'PROJECT SIX',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-pink-500',
    },
    {
        id: 7,
        title: 'PROJECT SEVEN',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-indigo-500',
    },
    {
        id: 8,
        title: 'PROJECT EIGHT',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: '/assets/projects/project-card-bg.png',
        color: 'bg-teal-500',
    },
];
export default function FeaturedProjectsSection() {
    const [selectedImg, setSelectedImg] = useState<Project>(projects[0]);
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
        speed: 500,
        focusOnSelect: true,
        dotsClass: 'custom-dots',
        customPaging: (i: number) => (
            <div
                className={`dot mx-[2px] mt-2 h-2 w-2 rounded-full bg-gray-400 transition-all duration-300 ${selectedImg && selectedImg.id === projects[i].id ? 'bg-primary w-5' : ''}`}
            ></div>
        ),
        beforeChange: (current: number, next: number) =>
            handleHelperSelect(projects[next]),
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
            <div className="mx-auto w-full max-w-[1580px] px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <div className="mb-12 flex flex-col items-center md:mb-16 lg:mb-20">
                    {/* What We Do Scroller */}
                    <Tags text="What do we do" variant="dark" center />

                    {/* Title and Description */}
                    <div className="flex max-w-2xl flex-col items-center gap-6 text-center md:gap-8">
                        <HeaderCenter
                            whiteText="Our Featured"
                            blueText="Projects"
                            variant="dark"
                            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                        />
                        <p className="text-sm leading-[1.4] font-normal text-white/70 md:text-base lg:text-lg">
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
                        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 border border-gray-600 shadow-lg transition-all hover:bg-gray-700 hover:scale-105 md:h-14 md:w-14 lg:left-8"
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
                        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 border border-gray-600 shadow-lg transition-all hover:bg-gray-700 hover:scale-105 md:h-14 md:w-14 lg:right-8"
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
                    <div className="h-[400px] w-full md:h-[500px] lg:h-[600px] overflow-hidden">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            className="featured-projects-slider"
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="relative lg:-ml-12 transition-all duration-300 outline-none w-[450px] sm:w-[600px] md:w-[730px]  lg:w-[830px] xl:w-[830px]" 
                                >
                                    <motion.div
                                        className={`relative flex h-[350px] flex-col rounded-xl transition-all duration-300 md:h-[450px] lg:h-[550px] w-full ${
                                            selectedImg &&
                                            selectedImg.id === project.id
                                                ? 'scale-100'
                                                : 'scale-90'
                                        }`}
                                        initial={{ scale: 0.9 }}
                                        animate={
                                            selectedImg &&
                                            selectedImg.id === project.id
                                                ? { scale: 1 }
                                                : { scale: 0.9 }
                                        }
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative h-full w-full">
                                            <ProjectCard
                                             
                                                project={project}
                                                className="h-full w-[250px] xs:w-[300px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-[900px]"
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
                <div className="flex justify-center">
                    <button className="min-w-[200px] rounded-full bg-white border border-gray-300 px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:border-gray-400 md:min-w-[271px] md:px-12 md:py-4 md:text-base lg:text-lg">
                        View all
                    </button>
                </div>
            </div>
        </section>
    );
}
