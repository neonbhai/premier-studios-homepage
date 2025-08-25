'use client';

import { useState } from 'react';
import { isTouchDevice } from '../../../lib/detect-touch';

interface FAQCardProps {
    title: string;
    description: string;
}

export default function FAQCard({ title, description }: FAQCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTouch = isTouchDevice();

    const toggleExpanded = () => {
        // Only allow toggling on touch devices
        if (isTouch) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className={`group w-full overflow-hidden rounded-[20px] transition-all duration-500 ease-in-out lg:rounded-[30px] ${isTouch && isExpanded ? 'bg-white' : ''} hover:bg-white`}>
            {/* Header - Always Visible */}
            <div 
                className={`group flex w-full cursor-pointer items-center justify-between py-6 transition-all duration-500 md:py-8 ${isTouch && isExpanded ? 'bg-white text-black' : ''} hover:bg-white hover:text-black`}
                onClick={toggleExpanded}
            >
                {/* Left Content */}
                <div className="flex-1 text-left">
                    <h3 className={`transform text-lg leading-[1.2] font-medium transition-all duration-500 ease-in-out md:text-xl lg:text-2xl xl:text-3xl ${isTouch && isExpanded ? 'ml-10 translate-y-4 text-black' : 'text-white'} group-hover:ml-10 group-hover:translate-y-4 group-hover:text-black`}>
                        {title}
                    </h3>
                </div>

                {/* Plus/Minus Icon */}
                <div className="ml-4 flex-shrink-0">
                    <div className={`relative h-6 w-6 transition-all duration-300 ${isTouch && isExpanded ? '-ml-20 translate-y-4' : ''} group-hover:-ml-20 group-hover:translate-y-4`}>
                        {/* Vertical Line - disappears on hover to create minus */}
                        <div className={`absolute top-0 left-1/2 h-6 w-0.5 -translate-x-1/2 transition-all duration-300 ${isTouch && isExpanded ? 'bg-black opacity-0' : 'bg-white'} group-hover:bg-black group-hover:opacity-0`} />
                        {/* Horizontal Line - remains for minus */}
                        <div className={`absolute top-1/2 left-0 h-0.5 w-6 -translate-y-1/2 transition-all duration-300 ${isTouch && isExpanded ? 'bg-black' : 'bg-white'} group-hover:bg-black`} />
                    </div>
                </div>
            </div>

            {/* Expanded Content - Shows on Hover or Click */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isTouch && isExpanded ? 'max-h-96 bg-white pb-6 opacity-100 md:pb-8' : 'max-h-0 opacity-0'} group-hover:max-h-96 group-hover:bg-white group-hover:pb-6 group-hover:opacity-100 md:group-hover:pb-8`}>
                <div className={`transform transition-transform duration-500 ease-out ${isTouch && isExpanded ? 'translate-y-0' : 'translate-y-4'} group-hover:translate-y-0`}>
                    <div className="">
                        <p className={`max-w-4xl text-sm leading-[1.6] font-normal transition-all duration-500 ease-out md:text-base lg:text-lg ${isTouch && isExpanded ? 'ml-10 mr-10 text-black' : 'text-white/70'} group-hover:ml-10 group-hover:mr-10 group-hover:text-black`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
