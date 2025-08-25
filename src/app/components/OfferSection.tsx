import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';
import { offerServicesData, OfferService } from '../data/offerServicesData';
import TextLinkWithArrow from './commons/TextLinkWithArrow';
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

                            <TextLinkWithArrow
                                href="/contact-us"
                                text={ctaText}
                            />
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
