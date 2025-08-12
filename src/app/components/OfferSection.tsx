import HeaderSide from './commons/HeaderSide';
import Tags from './commons/Tags';

interface Service {
  number: string;
  title: string;
  description: string;
}

interface OfferSectionProps {
  tagText?: string;
  title?: string;
  ctaText?: string;
  services?: Service[];
}

export default function OfferSection({
  tagText = "Our services",
  title = "What we Offer",
  ctaText = "Collaborate with us",
  services = [
    {
      number: "01",
      title: "Creative Services",
      description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      number: "02", 
      title: "Technical Services",
      description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      number: "03",
      title: "Writing Services", 
      description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
}: OfferSectionProps) {
  return (
    <section className="w-full py-[3.125rem] bg-black">
      <div className="  mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
        <div className="flex flex-col gap-[1.875rem]">
          
          {/* Header Section */}
          <div className="flex flex-col gap-[1.875rem]">
            {/* Infinite Scroller */}
            <div>
            <Tags text={tagText} variant="dark" center />
            </div>
            
            {/* Title and CTA */}
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
            
            <HeaderSide text='What we' blueText='Offer'/>
              
              <div className="flex items-center gap-[0.75rem] cursor-pointer group">
                <span className="text-white text-[1.25rem] font-medium leading-[1.21] tracking-[0.02em] capitalize whitespace-nowrap">
                  {ctaText}
                </span>
                <div className="w-[0.75rem] h-[1.5rem] flex items-center justify-center">
                  <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 1L6 6.5L1 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="flex flex-col xl:flex-row items-center gap-[2.75rem] mt-[1.875rem]">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col gap-[0.625rem] p-[1.875rem_2.5rem] border-2 border-white/52 rounded-[1.875rem] w-full xl:w-auto">
                <div className="flex flex-col items-end gap-[2.5rem]">
                  <div className="flex flex-col self-stretch gap-[2.5rem]">
                    <div className="flex flex-col items-start gap-[2.5rem]">
                      {/* Number Badge */}
                      <div className="flex justify-center items-center gap-[0.625rem] p-[1.25rem] bg-[#029BE6] rounded-full w-[2.5rem] h-[2.5rem]">
                        <span className="text-white text-[1rem] font-medium leading-[1.21]">
                          {service.number}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="flex flex-col self-stretch gap-[1.875rem] flex-1">
                        <h3 className="text-white text-[1.5rem] font-medium leading-[1em] self-stretch">
                          {service.title.split(' ')[0]} <span className="text-[#029BE6]">{service.title.split(' ')[1]}</span>
                        </h3>
                        <p className="text-white/52 text-[1rem] font-normal leading-[1.4] self-stretch">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="flex justify-center items-center gap-[0.625rem] p-[0.625rem] border border-white rounded-[0.375rem] cursor-pointer hover:bg-white/10 transition-colors">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 10L10 1M10 1H1M10 1V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}