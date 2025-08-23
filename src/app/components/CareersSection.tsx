'use client';

import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';

export default function CareersSection() {
    const jobListings = [
        {
            id: 1,
            number: '01/',
            type: 'Onsite Full-time',
            title: 'Senior Product Designer',
        },
        {
            id: 2,
            number: '02/',
            type: 'Onsite Full-time',
            title: 'Full Stack Engineer',
        },
        {
            id: 3,
            number: '03/',
            type: 'Onsite Full-time',
            title: 'Product Manager',
        },
        {
            id: 4,
            number: '04/',
            type: 'Onsite Full-time',
            title: 'Backend Engineer',
        },
    ];

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="w-full px-4 md:px-8 lg:px-16">
                {/* Scrolling Marquee */}
                <div className="flex w-full justify-start">
                    <Tags text="Career" />
                </div>

                {/* Header Section */}
                <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 lg:mb-20 lg:flex-row lg:items-end">
                    <HeaderSide
                        text="Explore Exciting"
                        blueText="Opportunities"
                        large
                    />
                    <p className="max-w-[289px] text-base leading-6 font-medium text-white/52">
                        Lorem Ipsum has been the industry{"'"}s standard dummy
                        text ever since the 1500s.
                    </p>
                </div>

                {/* Job Listings */}
                <div className="space-y-12 md:space-y-16">
                    {jobListings.map((job, index) => (
                        <div key={job.id}>
                            <div className="flex flex-col gap-5">
                                {/* Job Type */}
                                <p className=" text-sm  md:text-base lg:text-base font-normal text-white/52">
                                    <span className="text-[#029BE6]">
                                        {' '}
                                        {job.number}
                                    </span>{' '}
                                    {job.type}
                                </p>

                                {/* Job Title and Apply Button */}
                                <div className="flex item s-start justify-between gap-6 flex-row items-center">
                                    <h3 className="w-full text-lg sm:text-2xl leading-tight font-normal text-white md:text-4xl lg:text-[48px]">
                                        {job.title}
                                    </h3>

                                    <div className="flex items-center gap-5">
                                        <span className="  text-sm  md:text-base lg:text-base font-medium text-white">
                                            Apply
                                        </span>
                                        <div className="rounded-md scale-80 md:scale-100 lg:scale-100 border border-white p-2.5">
                                            <svg
                                                width="11"
                                                height="11"
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                            >
                                                <path d="M1 10L10 1M10 1H1M10 1V10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Divider Line */}
                            {index < jobListings.length - 1 && (
                                <div className="mt-12 border-t border-white/18 md:mt-16" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .animate-scroll {
                    animation: scroll 15s linear infinite;
                }
            `}</style>
        </section>
    );
}
