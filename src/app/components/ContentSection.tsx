import Image from 'next/image';
import ArrowButton from './commons/ArrowButton';
import Tags from './commons/Tags';

export default function ContentSection({reverse}:{reverse:boolean}) {
  return (
    <section className="w-full bg-black py-8 md:py-12 lg:py-16 flex justify-center">
      <div className="relative w-full px-[1rem] md:px-[2rem] lg:px-[4.25rem]">
        
        {/* Desktop Layout */}
        <div className={`hidden
          ${reverse?" lg:flex-row-reverse":"lg:flex-row"}
           flex-col lg:flex justify- center items-end w-full relative min-h-[766px] gap-10`}>
          {/* Left Image - Desktop Position */}
          <div className=' relative'>
          <div 
            className="a bsolute rounded-[20px] overflow-hidden"
            style={{
              left: '80px',
              top: '62px',
              width: '592px',
              height: '654px'
            }}
          >
            <Image
              src="/assets/content-image.png"
              alt="Content image"
              width={592}
              height={654}
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/46"></div>
            
          {/* Pagination Dots - Desktop Position */}
          <div 
            className="abs olute flex items-center gap-[12px]"
            style={{
              left: '351px',
              top: '689px'
            }}
          >
            <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
            <div className="w-[9px] h-[9px] bg-white/30 rounded-full"></div>
            <div className="w-[9px] h-[9px] bg-white/30 rounded-full"></div>
          </div>
          </div>
          </div>

          {/* Why Us Scroller - Desktop Position */}
    
    
<div className=' flex flex-col '>

          <div 
            className="  flex flex-col gap-[30px] mb-20"
            style={{
              left: '773px',
              top: '378px', 
            }}
          >
            <Tags text="Why Us" variant="dark" />
            <h2 className="text-white text-[2rem] font-medium leading-[1.21] w-full">
              What is Lorem Ipsum?
            </h2>
            
            <div className="flex flex-col gap-[30px]">
              <p className="text-white/70 text-[1rem] font-medium leading-[1.5]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
              </p>
            </div>
          </div>
 

          {/* Join Now Button - Desktop Position */}
          <div 
            className="abs olute"
            style={{
              left: '773px',
              top: '650.37px'
            }}
          >
            <ArrowButton text="Join Now" size="medium" variant='dark' className2=' '  />
          </div>
</div>
          {/* Main Content Area - Desktop Position */}
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Why Us Scroller - Mobile */}
            <Tags text="Why Us" variant="dark" center />

            {/* Image - Mobile */}
            <div className="w-full aspect-[4/3] md:aspect-[3/2] rounded-[20px] overflow-hidden relative">
              <Image
                src="/assets/content-image.png"
                alt="Content image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/46"></div>
            </div>

            {/* Content - Mobile */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-white text-xl md:text-2xl lg:text-[2rem] font-medium leading-[1.21] text-center md:text-left">
                What is Lorem Ipsum?
              </h2>
              
              <p className="text-white/70 text-sm md:text-base font-medium leading-[1.5] text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
              </p>
            </div>

            {/* Pagination & Button - Mobile */}
            <div className="flex flex-col items-center gap-6">
              {/* Pagination Dots */}
              <div className="flex items-center gap-[12px]">
                <div className="w-[9px] h-[9px] bg-white rounded-full"></div>
                <div className="w-[9px] h-[9px] bg-white/30 rounded-full"></div>
                <div className="w-[9px] h-[9px] bg-white/30 rounded-full"></div>
              </div>

              {/* Join Now Button */}
              <ArrowButton text="Join Now" size="medium" variant='dark' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}