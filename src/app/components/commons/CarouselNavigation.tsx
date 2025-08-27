interface CarouselNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
}

export default function CarouselNavigation({
    onPrevious,
    onNext,
}: CarouselNavigationProps) {
    return (
        <>
            {/* Navigation Arrows */}
            <button
                onClick={onPrevious}
                aria-label="Previous item"
                className="absolute top-1/3 md:top-1/2 lg:top-1/2 left-2 md:left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:left-8"
            >
                <svg
                    className="h-5 w-5 text-white md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>

            <button
                onClick={onNext}
                aria-label="Next item"
                className="absolute top-1/3 md:top-1/2 lg:top-1/2 right-2 md:right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:right-8"
            >
                <svg
                    className="h-5 w-5 text-white md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </>
    );
}
