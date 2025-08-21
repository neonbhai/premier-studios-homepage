'use client';

import { useState } from 'react';

interface FilterOption {
    id: string;
    label: string;
}

interface ProjectFilterProps {
    filters?: FilterOption[];
    onFilterChange?: (filterId: string) => void;
    activeFilter?: string;
}

export default function ProjectFilter({
    filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'creative', label: 'Creative Services' },
        { id: 'technical', label: 'Technical Services' },
        { id: 'writing', label: 'Writing Services' },
    ],
    onFilterChange,
    activeFilter = 'all',
}: ProjectFilterProps) {
    const [selectedFilter, setSelectedFilter] = useState(activeFilter);

    const handleFilterClick = (filterId: string) => {
        setSelectedFilter(filterId);
        onFilterChange?.(filterId);
    };

    return (
        <section className="w-full bg-black py-[2rem]">
            <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
                <div className="flex items-center gap-[0.3125rem] overflow-x-auto">
                    {filters.map((filter) => (
                        <div
                            key={filter.id}
                            className="flex items-center gap-[0.3125rem] whitespace-nowrap"
                        >
                            {/* Vertical Line */}
                            <div
                                className={`ml-2 h-[1.375rem] w-[0.625rem] rotate-12 ${
                                    selectedFilter === filter.id
                                        ? 'border-l-[1.5px] border-white'
                                        : 'border-l-[1.5px] border-white/52'
                                }`}
                            />

                            {/* Filter Text */}
                            <button
                                onClick={() => handleFilterClick(filter.id)}
                                className={`text-[1rem] leading-[1.5] font-medium transition-colors hover:text-white ${
                                    selectedFilter === filter.id
                                        ? 'text-white'
                                        : 'text-white/53'
                                }`}
                            >
                                {filter.label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
