'use client';

import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import FeaturedProjectCard from './cards/FeaturedProjectCard';
import CarouselNavigation from './commons/CarouselNavigation';
import CenteredHeader from './commons/CenteredHeader';
import { projectsData, Project } from '../data/projectsData';

export default function SlickCarousel() {
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

                    {/* Sliding Carousel Container */}
                    <div className="h-[600px] w-full overflow-hidden md:h-[600px] lg:h-[700px]">
                        <Slider
                            ref={sliderRef}
                            {...settings}
                            className="featured-projects-slider"
                        >
                            {projectsData.map((project) => (
                                <div key={project.id}>
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
                    </div>
                </div>
            </div>
        </section>
    );
}