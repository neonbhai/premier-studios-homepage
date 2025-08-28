import Image from 'next/image';

interface HeroBackgroundProps {
    backgroundImage: string;
}

export default function HeroBackground({
    backgroundImage,
}: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0 m-[17px] overflow-hidden rounded-3xl">
            <Image
                src={backgroundImage}
                alt="Hero background"
                fill
                className="z-0 rounded-3xl object-cover object-center"
            />
            {/* If black overlay to the image is needed: */}
            <div className="absolute inset-0 z-[1] bg-black/40 md:bg-black/40 lg:bg-black/40"></div>

            {/* Responsive opaque SVG wedge matching mask cut (desktop/tablet) */}
            <svg
                className="pointer-events-none absolute bottom-0 left-0 z-[2] hidden h-full w-full md:block top-1"
                viewBox="0 0 500 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path d="M0 200 H34 Q30 200 27 197 L0 170 Z" fill="#050505" stroke='#000000' />
            </svg>

            {/* Responsive opaque SVG wedge matching mobile cut */}
            <svg
                className="pointer-events-none absolute bottom-0 left-0 z-[2] h-full w-full md:hidden top-1"
                viewBox="0 0 361 383"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M0 383 H34.0705 Q30 383 27 380 L0 348.9295 Z"
                    fill="#050505"
                    stroke='#050505'
                />
            </svg>
        </div>
    );
}
