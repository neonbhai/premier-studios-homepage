'use client';

import { useState } from 'react';

export default function ProjectCategoriesSection() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const categories = [
        'All Projects',
        'Creative Services',
        'Technical Services',
        'Writing Services',
    ];

    return (
        <section className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16">
                <div className="flex justify-center">
                    <div className="flex items-center gap-5">
                        {categories.map((category, index) => (
                            <div
                                key={category}
                                className="flex items-center gap-5"
                            >
                                <button
                                    onClick={() => setActiveCategory(category)}
                                    className={`text-base font-medium transition-colors ${
                                        activeCategory === category
                                            ? 'text-white'
                                            : 'text-white/53 hover:text-white/80'
                                    }`}
                                >
                                    {category}
                                </button>
                                {index < categories.length - 1 && (
                                    <div
                                        className={`h-[22px] w-[10px] ${
                                            activeCategory === category
                                                ? 'border-r border-white'
                                                : 'border-r border-white/52'
                                        }`}
                                        style={{ borderWidth: '1.5px' }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
