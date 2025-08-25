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

                {/* Contact Form Section skeleton */}
                <section className="mt-[40px] w-full bg-[#050505] py-[2rem] md:py-[3.125rem]">
                    <div className="container mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                        <div className="flex flex-col items-start gap-[2rem] md:gap-[3.125rem] xl:flex-row">
                            {/* Left Content */}
                            <div className="flex w-full flex-col gap-[2.5rem] md:gap-[4.375rem] xl:w-[43rem]">
                                {/* Header Content */}
                                <div className="flex flex-col gap-[1.5rem] md:gap-[1.875rem]">
                                    <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                                        {/* Tags - marquee skeleton */}
                                        <div className="flex w-full justify-center md:justify-start lg:justify-start">
                                            <div className="h-6 w-[7.4375rem] overflow-hidden rounded-full bg-white/10">
                                                <div className="h-full w-full animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            </div>
                                        </div>

                                        {/* Title - HeaderSide skeleton */}
                                        <div className="space-y-2">
                                            <div className="h-8 w-4/5 rounded bg-white/15 md:h-12 lg:h-14 xl:h-16" />
                                            <div className="h-8 w-3/5 rounded bg-[#029BE6]/30 md:h-12 lg:h-14 xl:h-16" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[22.1875rem] space-y-2">
                                        <div className="h-4 w-full rounded bg-white/10" />
                                        <div className="h-4 w-4/5 rounded bg-white/10" />
                                        <div className="h-4 w-3/4 rounded bg-white/10" />
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="flex w-full max-w-[20.25rem] flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                                    <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                                        {/* Email */}
                                        <div className="h-8 w-4/5 rounded bg-white/15 md:h-12" />
                                        {/* Phone */}
                                        <div className="h-5 w-3/5 rounded bg-white/10" />
                                    </div>

                                    {/* Divider */}
                                    <div className="h-[1px] w-full bg-white/20" />

                                    {/* Social Links */}
                                    <div className="flex items-center gap-[1rem] md:gap-[1.25rem]">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="h-4 w-16 rounded bg-white/10"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="flex w-full flex-col gap-[3rem] rounded-[1rem] bg-[#050505] p-[1.5rem] md:gap-[3.5rem] md:rounded-[1.5rem] md:p-[3rem] xl:w-[43.75rem]">
                                {/* Form Content */}
                                <div className="flex w-full flex-col items-center gap-[2rem] md:gap-[4rem]">
                                    {/* Interests Section */}
                                    <div className="flex w-full flex-col gap-[1rem] md:gap-[1.5rem]">
                                        <div className="h-6 w-48 rounded bg-white/10" />

                                        <div className="flex w-full flex-col gap-[1rem] lg:flex-row lg:flex-wrap">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div
                                                    key={i}
                                                    className="h-10 w-32 rounded-full bg-white/10"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <div className="flex w-full flex-col gap-[1.5rem] md:gap-[2rem]">
                                        {/* Name field */}
                                        <div className="space-y-2">
                                            <div className="h-4 w-20 rounded bg-white/10" />
                                            <div className="h-12 rounded-lg border border-white/10 bg-white/5" />
                                        </div>

                                        {/* Email field */}
                                        <div className="space-y-2">
                                            <div className="h-4 w-16 rounded bg-white/10" />
                                            <div className="h-12 rounded-lg border border-white/10 bg-white/5" />
                                        </div>

                                        {/* Message field */}
                                        <div className="space-y-2">
                                            <div className="h-4 w-24 rounded bg-white/10" />
                                            <div className="h-32 rounded-lg border border-white/10 bg-white/5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="h-12 w-full rounded-lg bg-[#029BE6]/30" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
