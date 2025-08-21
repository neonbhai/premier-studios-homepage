'use client';

import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';

const ServiceCard = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="group w-full overflow-hidden rounded-[20px] transition-all duration-300 ease-in-out group-hover:bg-white lg:rounded-[30px]">
            {/* Header - Always Visible */}
            <div className="group flex w-full cursor-pointer items-center justify-between py-6 transition-all group-hover:bg-white group-hover:text-black md:py-8">
                {/* Left Content */}
                <div className="flex-1 text-left">
                    <h3 className="text-lg leading-[1.2] font-medium text-white transition-all duration-300 group-hover:ml-10 group-hover:text-black md:text-xl lg:text-2xl xl:text-3xl">
                        {title}
                    </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className="ml-4 flex-shrink-0">
                    <div className="relative h-6 w-6 transition-all duration-300 group-hover:-ml-20">
                        {/* Vertical Line - disappears on hover to create minus */}
                        <div className="absolute top-0 left-1/2 h-6 w-0.5 -translate-x-1/2 bg-white transition-all duration-300 group-hover:bg-black group-hover:opacity-0" />
                        {/* Horizontal Line - remains for minus */}
                        <div className="absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 bg-white transition-all duration-300 group-hover:bg-black" />
                    </div>
                </div>
            </div>

            {/* Expanded Content - Shows on Hover */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-96 group-hover:bg-white group-hover:pb-6 group-hover:opacity-100 md:group-hover:pb-8">
                <div className="">
                    <div className="pt- border-t border-gray-400 md:pt-8">
                        <p className="max-w-4xl text-sm leading-[1.6] font-normal text-white/70 transition-all duration-300 group-hover:ml-10 group-hover:text-black md:text-base lg:text-lg">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Creative Services',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.",
        },
        {
            id: 2,
            title: 'Technical Services',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.",
        },
        {
            id: 3,
            title: 'Writing Services',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.",
        },
    ];

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="w-full px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                    {/* Left Side - Title and Scroller */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Our Services Scroller */}
                        <div className="flex justify-center lg:justify-start">
                            <Tags text="Our services" variant="dark" />
                        </div>

                        {/* Main Title */}
                        <HeaderSide text="What we" blueText="Offer" />
                    </div>

                    {/* Right Side - Collaborate Link */}
                    <div className="flex items-center justify-center gap-3 lg:mb-4 lg:justify-end">
                        <span className="text-sm leading-[1.2] font-medium tracking-wide text-white uppercase md:text-base lg:text-lg">
                            Collaborate with us
                        </span>
                        <svg
                            className="h-4 w-4 text-white md:h-5 md:w-5"
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
                    </div>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={service.id} className="flex flex-col">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                            />
                            {index < services.length - 1 && (
                                <div className="my-6 w-full border-t border-gray-600 md:my-8" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
