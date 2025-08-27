import Image from 'next/image';

interface HeroBackgroundProps {
    backgroundImage: string;
}

export default function HeroBackground({
    backgroundImage,
}: HeroBackgroundProps) {
    return (
        <div className="hero-image-container absolute inset-0 m-[17px]">
            <Image
                src={backgroundImage}
                alt="Hero background"
                fill
                className="object-cover object-center"
            />
            {/* If black overlay to the image is needed: */}
            {/* <div className="absolute inset-0 bg-black/30 md:bg-black/30 lg:bg-black/30"></div> */}
        </div>
    );
}
