import Link from 'next/link';

interface CarouselNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
    viewAllHref?: string;
    viewAllText?: string;
    showViewAll?: boolean;
}

export default function CarouselNavigation({
    onPrevious,
    onNext,
    viewAllHref = '/projects',
    viewAllText = 'View all',
    showViewAll = true,
}: CarouselNavigationProps) {
    return (
        <>
            {/* Navigation Arrows */}
            <button
                onClick={onPrevious}
                className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:left-8"
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
                className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-600 bg-gray-800 shadow-lg transition-all hover:scale-105 hover:bg-gray-700 md:h-14 md:w-14 lg:right-8"
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

            {/* View All Button */}
            {showViewAll && (
                <div className="mt-12 md:mt-16 lg:mt-20">
                    <Link href={viewAllHref}>
                        <div className="flex justify-center">
                            <button className="min-w-[200px] rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:border-gray-400 hover:bg-gray-100 md:min-w-[271px] md:px-12 md:py-4 md:text-base lg:text-lg">
                                {viewAllText}
                            </button>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
}