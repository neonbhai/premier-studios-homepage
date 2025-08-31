import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';
import { offerServicesData } from '../data/offerServicesData';
import TextLinkWithArrow from './commons/TextLinkWithArrow';
import ServiceCard from './ServiceCard';

const DEFAULT_CONTENT = {
    tagText: 'Our services',
    ctaText: 'Collaborate with us',
} as const;

export default function OfferSection() {
    return (
        <section className="w-full py-[3.125rem]">
            <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex flex-col gap-[1.875rem]">
                    {/* Header Section */}
                    <div>
                        {/* Infinite Scroller */}
                        <div className="flex w-full justify-center md:justify-start lg:justify-start">
                            <Tags
                                text={DEFAULT_CONTENT.tagText}
                                variant="dark"
                                className="mb-4 lg:mb-8"
                            />
                        </div>

                        {/* Title and CTA */}
                        <div className="flex flex-col items-center justify-between md:flex-row lg:flex-row">
                            <HeaderSide text="What we" blueText="Offer" />

                            <TextLinkWithArrow
                                href="/contact-us"
                                text={DEFAULT_CONTENT.ctaText}
                            />
                        </div>
                    </div>

                    {/* Services Cards */}
                    <div className="mt-[1.875rem] flex flex-col items-center gap-[2.75rem] xl:flex-row">
                        {offerServicesData.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
