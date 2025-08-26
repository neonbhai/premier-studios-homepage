'use client';

import CenteredHeader from './commons/CenteredHeader';

interface HistoryEvent {
    year: string;
    title: string;
    position: 'left' | 'right';
}

const historyEvents: HistoryEvent[] = [
    {
        year: '2013',
        title: 'The founding of premier studio',
        position: 'right',
    },
    {
        year: '2014 - 2016',
        title: 'Early growth and expansion',
        position: 'left',
    },
    {
        year: '2017 - 2018',
        title: 'Major milestone achievements',
        position: 'right',
    },
    {
        year: '2019 - 2020',
        title: 'Innovation and market leadership',
        position: 'left',
    },
];

export default function HistorySection() {
    return (
        <section className="w-full bg-[#050505] py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[2680px] px-4 sm:px-6 lg:px-8">
                <CenteredHeader
                    tagText="Our history"
                    tagVariant="dark"
                    whiteText="History of Premier"
                    blueText="Studios"
                    headerVariant="dark"
                    description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently."
                />

                {/* Timeline Container */}
                <div className="relative mx-auto mt-16 max-w-4xl md:mt-20 lg:mt-24">
                    {/* Main Timeline Line */}
                    <div className="absolute top-0 left-1/2 h-full -translate-x-1/2 transform">
                        {/* Center blue line */}
                        <div className="h-full w-[6px] bg-[#029BE6]"></div>
                    </div>

                    {/* Timeline Events */}
                    <div className="relative">
                        {historyEvents.map((event, index) => (
                            <div
                                key={index}
                                className="relative pb-20 last:pb-0 md:pb-32 lg:pb-40"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute top-1/6 left-1/2 z-20 flex h-[34px] w-[34px] -translate-x-1/2 transform items-center justify-center rounded-full border border-white bg-[#050505]">
                                    <div className="h-[18px] w-[18px] rounded-full bg-[#029BE6]"></div>
                                </div>

                                {/* Content Card - Alternating on all screen sizes */}
                                <div
                                    className={`relative m-2 pt-0 ${
                                        event.position === 'left'
                                            ? 'flex justify-end pr-[50%] pl-0'
                                            : 'flex justify-start pr-0 pl-[50%]'
                                    }`}
                                >
                                    <div
                                        className={`w-full max-w-[240px] sm:max-w-[260px] md:max-w-[240px] lg:max-w-[280px] ${
                                            event.position === 'left'
                                                ? 'mr-4 sm:mr-6 md:mr-8 lg:mr-12'
                                                : 'ml-4 sm:ml-6 md:ml-8 lg:ml-12'
                                        }`}
                                    >
                                        <div className="rounded-xl bg-white p-5 shadow-lg md:p-6 lg:p-7">
                                            <div className="space-y-4 md:space-y-5">
                                                <h3 className="text-xl leading-[1.4] font-medium text-[#029BE6] md:text-2xl">
                                                    {event.year}
                                                </h3>
                                                <p className="text-sm leading-[1.4] font-normal text-black capitalize md:text-base">
                                                    {event.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
