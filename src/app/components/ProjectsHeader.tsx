import Tags from './commons/Tags';

interface ProjectsHeaderProps {
  tagText?: string;
  title?: string;
  description?: string;
}

export default function ProjectsHeader({
  tagText = "Our work",
  title = "Projects.",
  description = "A curated selection of projects that reflect our commitment to simplicity and purposeful design."
}: ProjectsHeaderProps) {
  return (
    <section className="w-full py-[3.125rem] bg-black">
      <div className="mx-auto px-[1rem] md:px-[2rem] lg:px-[5rem]">
        <div className="flex flex-col gap-[1.875rem] w-full max-w-[80rem]">
          
          {/* Tags */}
          <Tags text={tagText} variant="dark" />
          
          {/* Title and Description */}
          <div className="relative w-full h-[9.6875rem]">
            {/* Large Title */}
            <h1 className="absolute left-0 top-0 text-[#029BE6] text-[4rem] md:text-[6rem] lg:text-[8rem] font-semibold leading-[1.21] tracking-[0.02em] capitalize">
              {title}
            </h1>
            
            {/* Description */}
            <p className="absolute md:right-0 lg:right-0 bottom-0 text-white/52 text-[1rem] font-medium leading-[1.5] max-w-[17.4375rem] text-left">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}