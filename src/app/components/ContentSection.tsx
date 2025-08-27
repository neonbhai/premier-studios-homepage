import Image from 'next/image';
import ArrowButton from './commons/ArrowButton';
import Tags from './commons/Tags';

export default function ContentSection({
    reverse = false,
}: {
    reverse?: boolean;
}) {
    return (
        <section className="container mx-auto py-8 md:py-12 lg:py-16">
            <div className="relative w-full px-[1rem]">
                {/* Desktop Layout */}
                <div
                    className={`hidden ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} relative min-h-[766px] w-full flex-col items-end justify-center gap-16 md:gap-20 lg:flex lg:gap-32`}
                >
                    {/* Left Image - Desktop Position */}
                    <div className="relative">
                        <div
                            className="overflow-hidden rounded-[20px]"
                            style={{
                                left: '80px',
                                top: '62px',
                                width: '592px',
                                height: '654px',
                            }}
                        >
                            <Image
                                src="/assets/content-image.png"
                                alt="Content image"
                                width={592}
                                height={654}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/46"></div>

                            {/* Pagination Dots - Desktop Position */}
                            <div
                                className="abs olute flex items-center gap-[12px]"
                                style={{
                                    left: '351px',
                                    top: '689px',
                                }}
                            >
                                {/* <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white/30"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white/30"></div> */}
                            </div>
                        </div>
                    </div>

                    {/* Why Us Scroller - Desktop Position */}

                    <div className="flex max-w-2xl flex-col">
                        <div
                            className="mb-20 flex flex-col gap-[30px]"
                            style={{
                                left: '773px',
                                top: '378px',
                            }}
                        >
                            <Tags text="Why Us" variant="dark" />
                            <h2 className="w-full text-[2rem] leading-[1.21] font-medium text-white">
                                What is Lorem Ipsum?
                            </h2>

                            <div className="flex flex-col gap-[30px]">
                                <p className="text-[1rem] leading-[1.5] font-medium text-white/70">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry&apos;s standard
                                    dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but
                                    also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of
                                    Letraset.
                                </p>
                            </div>
                        </div>

                        {/* Join Now Button - Desktop Position */}
                        <div
                            className="abs olute"
                            style={{
                                left: '773px',
                                top: '650.37px',
                            }}
                        >
                            <ArrowButton
                                text="Join Now"
                                size="medium"
                                variant="light"
                                className2=" "
                            />
                        </div>
                    </div>
                    {/* Main Content Area - Desktop Position */}
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden">
                    <div className="flex flex-col gap-4 md:gap-12">
                        {/* Image - Mobile */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] md:aspect-[3/2]">
                            <Image
                                src="/assets/mobile-why-us.png"
                                alt="Content image"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/46"></div>
                        </div>

                        {/* Content - Mobile */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {/* Why Us Scroller - Mobile */}
                            <div className="flex w-full justify-center lg:justify-start">
                                <Tags text="Why Us" variant="dark" />
                            </div>
                            <h2 className="text-center text-xl leading-[1.21] font-medium text-white md:text-left md:text-2xl lg:text-[2rem]">
                                What is Lorem Ipsum?
                            </h2>

                            <p className="text-center text-sm leading-[1.5] font-medium text-white/70 md:text-left md:text-base">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset.
                            </p>
                        </div>

                        {/* Pagination & Button - Mobile */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Pagination Dots */}
                            <div className="flex items-center gap-[12px]">
                                {/* <div className="h-[9px] w-[9px] rounded-full bg-white"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white/30"></div>
                                <div className="h-[9px] w-[9px] rounded-full bg-white/30"></div> */}
                            </div>

                            {/* Join Now Button */}
                            <ArrowButton
                                text="Join Now"
                                size="medium"
                                variant="light"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
