import Image from 'next/image';
import { logos } from '../data/MarqueeData';

export default function MarqueeSection() {
    return (
        <section className="w-full overflow-hidden py-8 md:py-12 lg:py-16">
            <div className="animate-marquee-1 flex items-center">
                {/* Duplicate the logos array to create seamless loop */}
                {[
                    ...logos,
                    ...logos,
                    ...logos,
                    ...logos,
                    ...logos,
                    ...logos,
                ].map((logo, index) => (
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
