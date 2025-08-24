import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';
import { offerServicesData, OfferService } from '../data/offerServicesData';
import Link from 'next/link';
import ArrowRightIcon from './commons/ArrowRightIcon';
import ServiceCard from './ServiceCard';

interface OfferSectionProps {
    tagText?: string;
    ctaText?: string;
    services?: OfferService[];
}

export default function OfferSection({
    tagText = 'Our services',
    ctaText = 'Collaborate with us',
    services = offerServicesData,
}: OfferSectionProps) {
    return (
        <section className="w-full bg-black py-[3.125rem]">
            <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col gap-[1.875rem]">
                    {/* Header Section */}
                    <div className="flex flex-col gap-[1.875rem]">
                        {/* Infinite Scroller */}
                        <div className="flex w-full justify-center md:justify-start lg:justify-start">
                            <Tags text={tagText} variant="dark" />
                        </div>

                        {/* Title and CTA */}
                        <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
                            <HeaderSide text="What we" blueText="Offer" />

                            <Link
                                href="/contact-us"
                                className="group flex cursor-pointer items-center gap-[0.75rem]"
                            >
                                <span className="text-[1.25rem] leading-[1.21] font-medium tracking-[0.02em] whitespace-nowrap text-white capitalize">
                                    {ctaText}
                                </span>
                                <div className="flex h-[1.5rem] w-[0.75rem] items-center justify-center">
                                    <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Services Cards */}
                    <div className="mt-[1.875rem] flex flex-col items-center gap-[2.75rem] xl:flex-row">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
