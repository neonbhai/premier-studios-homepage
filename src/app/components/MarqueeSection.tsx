import Image from 'next/image';

const logos = [
    { src: '/assets/logos/google.svg', alt: 'Google', width: 147, height: 42 },
    {
        src: '/assets/logos/microsoft.svg',
        alt: 'Microsoft',
        width: 173,
        height: 37,
    },
    { src: '/assets/logos/amazon.svg', alt: 'Amazon', width: 130, height: 40 },
    {
        src: '/assets/logos/frame2.svg',
        alt: 'Company 4',
        width: 149,
        height: 43,
    },
    {
        src: '/assets/logos/frame3.svg',
        alt: 'Company 5',
        width: 103,
        height: 43,
    },
];

export default function MarqueeSection() {
    return (
        <section className="w-full overflow-hidden bg-black py-8 md:py-12 lg:py-16">
            <div className="animate-marquee-1 flex items-center">
                {/* Duplicate the logos array to create seamless loop */}
                {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos ].map((logo, index) => (
                    <div
                        key={index}
                        className="mr-16 flex-shrink-0 md:mr-20 lg:mr-[6.32rem]"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.width}
                            height={logo.height}
                            className="h-8 w-auto opacity-52 invert transition-opacity duration-300 hover:opacity-100 md:h-10 lg:h-[2.63rem]"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
