"use client";

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
    { id: 'writing', label: 'Writing Services' }
  ],
  onFilterChange,
  activeFilter = 'all'
}: ProjectFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter);

  const handleFilterClick = (filterId: string) => {
    setSelectedFilter(filterId);
    onFilterChange?.(filterId);
  };

  return (
    <section className="w-full py-[2rem] bg-black">
      <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
        <div className="flex items-center gap-[0.3125rem] overflow-x-auto">
          {filters.map((filter, index) => (
            <div key={filter.id} className="flex items-center gap-[0.3125rem] whitespace-nowrap">
              {/* Vertical Line */}
              <div 
                className={`w-[0.625rem] h-[1.375rem] rotate-12 ml-2 ${
                  selectedFilter === filter.id 
                    ? 'border-l-[1.5px] border-white' 
                    : 'border-l-[1.5px] border-white/52'
                }`}
              />
              
              {/* Filter Text */}
              <button
                onClick={() => handleFilterClick(filter.id)}
                className={`text-[1rem] font-medium leading-[1.5] transition-colors hover:text-white ${
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