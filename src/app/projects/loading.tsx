export default function Loading() {
    return (
        <div className="bg-[#050505]">
            <div className="animate-pulse">
                {/* NavBar skeleton */}
                <div className="flex items-center justify-between px-[1rem] py-4 md:px-[2rem] lg:px-[5rem]">
                    <div className="h-8 w-32 rounded bg-white/10 sm:h-10 sm:w-44" />
                    <div className="hidden space-x-8 md:flex">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="h-5 w-16 rounded bg-white/10"
                            />
                        ))}
                    </div>
                    <div className="h-6 w-6 rounded bg-white/10 md:hidden" />
                </div>

                {/* Projects Header skeleton */}
                <section className="w-full py-[3.125rem]">
                    <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                        <div className="flex w-full flex-col gap-[1.875rem]">
                            {/* Tags - marquee skeleton */}
                            <div className="h-6 w-[7.4375rem] overflow-hidden rounded-full bg-white/10">
                                <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>

                            {/* Title and Description */}
                            <div className="relative h-[9.6875rem] w-full">
                                {/* Large Title skeleton */}
                                <div className="absolute top-0 left-0 h-16 w-80 rounded bg-[#029BE6]/30 md:h-24 md:w-96 lg:h-32 lg:w-[32rem]" />

                                {/* Description skeleton */}
                                <div className="absolute bottom-0 max-w-[17.4375rem] space-y-2 md:right-0 lg:right-0">
                                    <div className="h-4 w-full rounded bg-white/10" />
                                    <div className="h-4 w-4/5 rounded bg-white/10" />
                                    <div className="h-4 w-3/4 rounded bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Filter skeleton */}
                <section className="w-full py-[2rem]">
                    <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                        <div className="flex items-center gap-[0.3125rem] overflow-x-auto">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-[0.3125rem] whitespace-nowrap"
                                >
                                    {/* Vertical Line skeleton */}
                                    <div className="ml-2 h-[1.375rem] w-[0.625rem] rotate-12 border-l-[1.5px] border-white/20" />

                                    {/* Filter Text skeleton */}
                                    <div
                                        className={`h-5 rounded ${i === 1 ? 'w-24 bg-white/15' : 'w-32 bg-white/10'}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Grid skeleton */}
                <section className="w-full bg-[#050505] py-[3.125rem]">
                    <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                        <div className="grid grid-cols-1 gap-[2.5rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            {/* Project Card skeleton - Only 2 tiles as requested */}
                            {[1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="w-full overflow-hidden rounded-[1.875rem] bg-[#050505]"
                                >
                                    {/* Image Section skeleton */}
                                    <div className="relative m-[7px] h-[300px] overflow-hidden rounded-[1.5rem] bg-white/10 sm:h-[350px] md:h-[400px] lg:h-[477px]">
                                        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    </div>

                                    {/* Text Content Section skeleton */}
                                    <div className="p-[1.875rem] pt-4">
                                        <div className="flex flex-col gap-4">
                                            {/* Title skeleton */}
                                            <div className="h-7 w-24 rounded bg-white/15 sm:h-8 md:h-8 lg:h-8" />

                                            {/* Description and Year Row skeleton */}
                                            <div className="flex items-start justify-between gap-4 lg:gap-[159px]">
                                                <div className="max-w-[280px] flex-1 space-y-2 sm:max-w-[320px] md:max-w-[350px] lg:max-w-[372px]">
                                                    <div className="h-4 w-full rounded bg-white/10" />
                                                    <div className="h-4 w-3/4 rounded bg-white/10" />
                                                </div>
                                                <div className="h-4 w-12 flex-shrink-0 rounded bg-white/10" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
