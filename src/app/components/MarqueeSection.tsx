import Image from 'next/image';

const logos = [
  { src: '/assets/logos/google.svg', alt: 'Google', width: 147, height: 42 },
  { src: '/assets/logos/microsoft.svg', alt: 'Microsoft', width: 173, height: 37 },
  { src: '/assets/logos/amazon.svg', alt: 'Amazon', width: 130, height: 40 },
  { src: '/assets/logos/frame2.svg', alt: 'Company 4', width: 149, height: 43 },
  { src: '/assets/logos/frame3.svg', alt: 'Company 5', width: 103, height: 43 },
];

export default function MarqueeSection() {
  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-black overflow-hidden">
      <div className="flex items-center animate-marquee">
        {/* First set of logos */}
        <div className="flex items-center gap-16 md:gap-20 lg:gap-[6.32rem] min-w-full">
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 md:h-10 lg:h-[2.63rem] w-auto opacity-52 hover:opacity-100 transition-opacity duration-300 invert"
              />
            </div>
          ))}
        </div>
        
        {/* Second set of logos for seamless loop */}
        <div className="flex items-center gap-16 md:gap-20 lg:gap-[6.32rem] min-w-full ml-16 md:ml-20 lg:ml-[6.32rem]">
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 md:h-10 lg:h-[2.63rem] w-auto opacity-52 hover:opacity-100 transition-opacity duration-300 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}