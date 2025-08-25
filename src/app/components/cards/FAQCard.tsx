interface FAQCardProps {
    title: string;
    description: string;
}

export default function FAQCard({ title, description }: FAQCardProps) {
    return (
        <div className="group w-full overflow-hidden rounded-[20px] transition-all duration-500 ease-in-out group-hover:bg-white lg:rounded-[30px]">
            {/* Header - Always Visible */}
            <div className="group flex w-full cursor-pointer items-center justify-between py-6 transition-all duration-500 group-hover:bg-white group-hover:text-black md:py-8">
                {/* Left Content */}
                <div className="flex-1 text-left">
                    <h3 className="transform text-lg leading-[1.2] font-medium text-white transition-all duration-500 ease-in-out group-hover:ml-10 group-hover:translate-y-4 group-hover:text-black md:text-xl lg:text-2xl xl:text-3xl">
                        {title}
                    </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className="ml-4 flex-shrink-0">
                    <div className="relative h-6 w-6 transition-all duration-300 group-hover:-ml-20">
                        {/* Vertical Line - disappears on hover to create minus */}
                        <div className="absolute top-0 left-1/2 h-6 w-0.5 -translate-x-1/2 bg-white transition-all duration-300 group-hover:bg-black group-hover:opacity-0" />
                        {/* Horizontal Line - remains for minus */}
                        <div className="absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 bg-white transition-all duration-300 group-hover:bg-black" />
                    </div>
                </div>
            </div>

            {/* Expanded Content - Shows on Hover */}
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:bg-white group-hover:pb-6 group-hover:opacity-100 md:group-hover:pb-8">
                <div className="translate-y-4 transform transition-transform duration-500 ease-out group-hover:translate-y-0">
                    <div className="border-t border-gray-400 pt-4 md:pt-8">
                        <p className="max-w-4xl text-sm leading-[1.6] font-normal text-white/70 transition-all duration-500 ease-out group-hover:ml-10 group-hover:text-black md:text-base lg:text-lg">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
