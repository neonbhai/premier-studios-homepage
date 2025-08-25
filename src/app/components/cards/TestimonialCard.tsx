import Image from 'next/image';
import { motion } from 'framer-motion';
import ArrowButton from '../commons/ArrowButton';

export default function TestimonialCard() {

    return (
        <div className="w-full flex-shrink-0">
            <div className="testimonial-card-content flex h-full flex-col gap-3 overflow-hidden rounded-[20px] bg-black lg:flex-row lg:rounded-[30px]">
                {/* User Info Section */}
                <div className="testimonial-image-section relative overflow-hidden rounded-[20px] lg:w-[35%] lg:rounded-[30px]">
                    <motion.div
                        className="relative h-full w-full"
                        style={{
                            transition: 'height 0.4s ease-in-out',
                        }}
                    >
                        <Image
                            src="/assets/testimonials/testimonial-bg.jpg"
                            alt="User background"
                            fill
                            className="rounded-[20px] object-cover lg:rounded-[30px]"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-transparent to-black/50 lg:rounded-[30px]"></div>

                        {/* User Info */}
                        <div className="absolute bottom-0 left-0 p-4 lg:p-6">
                            <h4 className="text-lg leading-[1.4] font-medium text-white lg:text-xl xl:text-2xl">
                                Alex Carter
                            </h4>
                            <p className="mt-1 text-sm leading-[1.5] font-normal text-white/90 lg:text-base xl:text-lg">
                                Marketing Director at NovaTech
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col justify-between rounded-[20px] bg-white p-4 lg:w-[65%] lg:rounded-[30px] lg:p-6 xl:p-8">
                    {/* Location */}
                    <div className="mb-4 lg:mb-6">
                        <h5 className="text-base font-medium text-black lg:text-lg xl:text-xl">
                            TX | USA
                        </h5>
                    </div>

                    {/* Quote and Text */}
                    <div className="mt-0 flex flex-1 flex-col justify-center md:mt-1 lg:mt-10 xl:mt-10">
                        {/* Quote Icons */}
                        <div className="mb-4 flex items-center">
                            <svg
                                className="h-4 w-4 text-blue-400 lg:h-5 lg:w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>

                        {/* Testimonial Text */}
                        <p className="mb-6 text-sm leading-[1.4] font-normal text-black lg:text-base xl:text-lg">
                            {
                                'Working with Premier Studio was a game-changer for our brand. Their attention to detail, creativity, and professionalism exceeded all expectations. The final product was beyond what we imagined.'
                            }
                        </p>
                    </div>

                    {/* View Live Project Button */}
                    <ArrowButton
                        text="View Now"
                        size="medium"
                        variant="dark"
                        fill="black"
                        className2="  "
                        className=""
                    />
                </div>
            </div>
        </div>
    );
}
