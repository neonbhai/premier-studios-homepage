import Image from 'next/image';
import ArrowButton from './commons/ArrowButton';
import HeaderCenter from './commons/HeaderCenter';

export default function MinecraftServicesSection() {
    return (
        <section className="mt-60 w-full px-2 py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[1560px] rounded-[30px] bg-white px-4 py-8 md:px-8 lg:px-16">
                <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                    {/* Image Section */}
                    <div className="animate-float relative z-10 -mt-60 w-full max-w-[623px] lg:w-1/2">
                        <div className="aspect-square w-full overflow-hidden rounded-[30px]">
                            <Image
                                src="/assets/minecraft-services.png"
                                alt="Minecraft Services"
                                width={623}
                                height={623}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative z-10 flex w-full max-w-[666px] flex-col gap-8 lg:w-1/2 lg:gap-12">
                        {/* Text Content */}
                        <div className="flex flex-col gap-4">
                            <HeaderCenter
                                whiteText="Our Minecraft"
                                blueText="Services"
                                variant="light"
                                side
                            />
                            <p className="text-sm leading-[1.3] text-black md:text-base lg:text-lg">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry{"'"}s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of
                                Letraset.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="">
                            <ArrowButton
                                text="View Projects"
                                variant="dark"
                                size="medium"
                                fill="#000000"
                                className2="text-white -ml-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
