'use client';

import HeaderSide from "./commons/HeaderSide";
import Tags from "./commons/Tags";

export default function CareersSection() {
  const jobListings = [
    {
      id: 1,
      number: "01/",
      type: "Onsite Full-time",
      title: "Senior Product Designer",
    },
    {
      id: 2,
      number: "02/",
      type: "Onsite Full-time", 
      title: "Full Stack Engineer",
    },
    {
      id: 3,
      number: "03/",
      type: "Onsite Full-time",
      title: "Product Manager",
    },
    {
      id: 4,
      number: "04/",
      type: "Onsite Full-time",
      title: "Backend Engineer",
    },
  ];

  const scrollingText = Array(5).fill("Careers");

  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Scrolling Marquee */}
       <Tags text="Career"/>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 lg:mb-20 gap-8">
          <HeaderSide text="Explore Exciting" blueText="Opportunities" large/>
          <p className="text-white/52 font-medium text-base leading-6 max-w-[279px]">
            Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-12 md:space-y-16">
          {jobListings.map((job, index) => (
            <div key={job.id}>
              <div className="flex flex-col gap-5">
                {/* Job Type */}
                <p className="text-white/52 font-normal text-base">
                   <span className=" text-[#029BE6]"> {job.number}</span>  {job.type}
                </p>
                
                {/* Job Title and Apply Button */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <h3 className="text-white font-normal text-3xl md:text-4xl lg:text-[48px] leading-tight w-full">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-5">
                    <span className="text-white font-medium text-base">Apply</span>
                    <div className="border border-white rounded-md p-2.5">
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="white" strokeWidth="2">
                        <path d="M1 10L10 1M10 1H1M10 1V10"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider Line */}
              {index < jobListings.length - 1 && (
                <div className="mt-12 md:mt-16 border-t border-white/18" />
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}