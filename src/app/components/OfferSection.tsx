import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';

interface Service {
    number: string;
    title: string;
    description: string;
}

interface OfferSectionProps {
    tagText?: string;
    ctaText?: string;
    services?: Service[];
}

export default function OfferSection({
    tagText = 'Our services',
    ctaText = 'Collaborate with us',
    services = [
        {
            number: '01',
            title: 'Creative Services',
            description:
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            number: '02',
            title: 'Technical Services',
            description:
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            number: '03',
            title: 'Writing Services',
            description:
                'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
    ],
}: OfferSectionProps) {
    return (
        <section className="w-full bg-black py-[3.125rem]">
            <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col gap-[1.875rem]">
                    {/* Header Section */}
                    <div className="flex flex-col gap-[1.875rem]">
                        {/* Infinite Scroller */}
                        <div className="flex w-full justify-center md:justify-start lg:justify-start">
                            <Tags text={tagText} variant="dark" center />
                        </div>

                        {/* Title and CTA */}
                        <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
                            <HeaderSide text="What we" blueText="Offer" />

                            <div className="group flex cursor-pointer items-center gap-[0.75rem]">
                                <span className="text-[1.25rem] leading-[1.21] font-medium tracking-[0.02em] whitespace-nowrap text-white capitalize">
                                    {ctaText}
                                </span>
                                <div className="flex h-[1.5rem] w-[0.75rem] items-center justify-center">
                                    <svg
                                        width="7"
                                        height="13"
                                        viewBox="0 0 7 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            d="M1 1L6 6.5L1 12"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Cards */}
                    <div className="mt-[1.875rem] flex flex-col items-center gap-[2.75rem] xl:flex-row">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex w-full flex-col gap-[0.625rem] rounded-[1.875rem] border-2 border-white/52 p-[1.875rem_2.5rem] xl:w-auto"
                            >
                                <div className="flex flex-col items-end gap-[2.5rem]">
                                    <div className="flex flex-col gap-[2.5rem] self-stretch">
                                        <div className="flex flex-col items-start gap-[2.5rem]">
                                            {/* Number Badge */}
                                            <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center gap-[0.625rem] rounded-full bg-[#029BE6] p-[1.25rem]">
                                                <span className="text-[1rem] leading-[1.21] font-medium text-white">
                                                    {service.number}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-1 flex-col gap-[1.875rem] self-stretch">
                                                <h3 className="self-stretch text-[1.5rem] leading-[1em] font-medium text-white">
                                                    {
                                                        service.title.split(
                                                            ' '
                                                        )[0]
                                                    }{' '}
                                                    <span className="text-[#029BE6]">
                                                        {
                                                            service.title.split(
                                                                ' '
                                                            )[1]
                                                        }
                                                    </span>
                                                </h3>
                                                <p className="self-stretch text-[1rem] leading-[1.4] font-normal text-white/52">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow Button */}
                                    <div className="flex cursor-pointer items-center justify-center gap-[0.625rem] rounded-[0.375rem] border border-white p-[0.625rem] transition-colors hover:bg-white/10">
                                        <svg
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 10L10 1M10 1H1M10 1V10"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
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
