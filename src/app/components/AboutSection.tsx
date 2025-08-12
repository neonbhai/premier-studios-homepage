import HeaderCenter from './commons/HeaderCenter';
import Tags from './commons/Tags';

interface Stat {
  value: string;
  description: string;
}

interface AboutSectionProps {
  tagText?: string;
  whiteText?: string;
  blueText?: string;
  description?: string;
  stats?: Stat[];
}

export default function AboutSection({
  tagText = "About",
  whiteText = "Who are Premier",
  blueText = "Studio?",
  description = "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  stats = [
    { value: "400+", description: "High-Performing Wallets Tracked" },
    { value: "Real-Time", description: "Verified Trading Signals" },
    { value: "0% Auto-Trading", description: "You're in Full Control" },
    { value: "100% Data-Backed", description: "Actionable Insights, Not Hype" }
  ]
}: AboutSectionProps) {
  return (
    <section className="w-full py-[3.125rem] bg-black">
      <div className=" mx-auto px-[1rem] md:px-[2rem] lg:px-[4.25rem]">
        <div className="flex flex-col items-center gap-[3rem] md:gap-[6.25rem]">
          
          {/* Top Content Section */}
          <div className="flex flex-col items-center gap-[1.5rem] md:gap-[2.1875rem] max-w-[43.13125rem] w-full">
            
            {/* Infinite Scroller */}
            <Tags text={tagText} variant="dark" center />
            
            {/* Main Content */}
            <div className="flex flex-col items-center gap-[1.5rem] md:gap-[2.5rem] w-full">
              <HeaderCenter whiteText={whiteText} blueText={blueText} />
              <p className="text-white/52 text-center text-[0.875rem] md:text-[1rem] font-normal leading-[1.4] max-w-[38.625rem] px-[1rem] md:px-0">
                {description}
              </p>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[2rem] md:gap-[3rem] xl:gap-[3.73333rem] w-full justify-items-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-[0.75rem] md:gap-[1.06667rem]">
                <div className="text-white text-center text-[1.75rem] md:text-[2.13333rem] font-medium leading-[1.2] tracking-[-0.04em] whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-white/52 text-center text-[1rem] md:text-[1.2rem] font-medium leading-[1.4]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}