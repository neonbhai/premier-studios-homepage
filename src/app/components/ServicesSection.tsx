'use client';

import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';
import FAQCard from './cards/FAQCard';
import TextLinkWithArrow from './commons/TextLinkWithArrow';
import { servicesData } from '../data/servicesData';

export default function ServicesSection() {
    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="w-full px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <div className="mb-12 flex items-end justify-between gap-8 md:mb-16 lg:mb-20 lg:gap-12">
                    {/* Left Side - Title and Scroller */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Our Services Scroller */}
                        <div className="flex justify-start">
                            <Tags text="Our services" variant="dark" />
                        </div>

                        {/* Main Title */}
                        <HeaderSide text="What we" blueText="Offer" />
                    </div>

                    {/* Right Side - Collaborate Link */}
                    <div className="flex items-center justify-center lg:mb-4">
                        <TextLinkWithArrow
                            href="/contact-us"
                            text="Collaborate with us"
                        />
                    </div>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="flex flex-col">
                            <FAQCard
                                title={service.title}
                                description={service.description}
                            />
                            {index < servicesData.length - 1 && (
                                <div className="my-6 w-full border-t border-gray-600 md:my-8" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
