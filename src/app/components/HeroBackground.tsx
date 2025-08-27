import Image from 'next/image';

interface HeroBackgroundProps {
    backgroundImage: string;
}

export default function HeroBackground({
    backgroundImage,
}: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0 m-[17px]">
            <Image
                src={backgroundImage}
                alt="Hero background"
                fill
                className="rounded-3xl object-cover object-center"
            />
            {/* If black overlay to the image is needed: */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/40 lg:bg-black/40"></div>

            {/* Right angled triangle div using CSS borders */}
            <div className="absolute bottom-0 left-0 h-0 w-0 rotate-90 border-b-[60px] border-l-[60px] border-b-black border-l-transparent md:border-b-[100px] md:border-l-[100px]"></div>
        </div>
    );
}
