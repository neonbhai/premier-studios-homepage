'use client';

import Link from 'next/link';
import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';
import ExternalArrowIcon from './commons/ExternalArrowIcon';

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
        <section className="w-full py-20">
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
                                <p className="text-sm font-normal text-white/52 md:text-base lg:text-base">
                                    <span className="text-[#029BE6]">
                                        {' '}
                                        {job.number}
                                    </span>{' '}
                                    {job.type}
                                </p>

                                {/* Job Title and Apply Button */}
                                <div className="item s-start flex flex-row items-center justify-between gap-6">
                                    <h3 className="w-full text-lg leading-tight font-normal text-white sm:text-2xl md:text-4xl lg:text-[48px]">
                                        {job.title}
                                    </h3>

                                    <Link
                                        href="/contact-us"
                                        className="flex items-center gap-5 transition-opacity hover:opacity-80"
                                    >
                                        <span className="text-sm font-medium text-white md:text-base lg:text-base">
                                            Apply
                                        </span>
                                        <div className="scale-80 rounded-md border border-white p-2.5 md:scale-100 lg:scale-100">
                                            <ExternalArrowIcon />
                                        </div>
                                    </Link>
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
        </section>
    );
}
