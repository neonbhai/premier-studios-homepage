'use client';

import Image from 'next/image';
import Tags from './commons/Tags';
import HeaderSide from './commons/HeaderSide';

const ServiceCard = ({ 
  title, 
  description
}: { 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="w-full   rounded-[20px] lg:rounded-[30px] overflow-hidden transition-all duration-300 group-hover:bg-white ease-in-out group">
      {/* Header - Always Visible */}
      <div className="w-full flex items-center justify-between group py-6 md:py-8  group-hover:bg-white group-hover:text-black transition-colors cursor-pointer">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h3 className="text-white font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl leading-[1.2] group-hover:text-black group-hover:ml-10 transition-all duration-300">
            {title}
          </h3>
        </div>

        {/* Plus/Minus Icon */}
        <div className="flex-shrink-0 ml-4">
          <div className="relative w-6 h-6   duration-300 group-hover:rotate-45  group-hover:-ml-20 transition-all">
            {/* Vertical Line */}
            <div className="absolute bg-white group-hover:bg-black  transition-all duration-300 left-1/2 top-0 w-0.5 h-6 -translate-x-1/2" />
            {/* Horizontal Line */}
            <div className="absolute bg-white group-hover:bg-black  transition-all duration-300 top-1/2 left-0 h-0.5 w-6 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Expanded Content - Shows on Hover */}
      <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 group-hover:pb-6 md:group-hover:pb-8 group-hover:bg-white ">
        <div className="">
          <div className="border-t border-gray-400 pt-  md:pt-8">
            <p className="text-white/70 group-hover:text-black font-normal text-sm md:text-base lg:text-lg leading-[1.6] max-w-4xl group-hover:ml-10 transition-all duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Creative Services",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset."
    },
    {
      id: 2,
      title: "Technical Services", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset."
    },
    {
      id: 3,
      title: "Writing Services",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset."
    }
  ];

  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 lg:mb-20 gap-8 lg:gap-12">
          
          {/* Left Side - Title and Scroller */}
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* Our Services Scroller */}
          <Tags text='Our services' variant='dark'/>

            {/* Main Title */}
            <HeaderSide text="What we" blueText="Offer"  />
          </div>
          
          {/* Right Side - Collaborate Link */}
          <div className="flex items-center justify-center lg:justify-end gap-3 lg:mb-4">
            <span className="text-white font-medium uppercase text-sm md:text-base lg:text-lg leading-[1.2] tracking-wide">
              Collaborate with us
            </span>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard 
                title={service.title} 
                description={service.description}
              />
              {index < services.length - 1 && (
                <div className="w-full border-t border-gray-600 my-6 md:my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}