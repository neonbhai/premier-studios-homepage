import Image from "next/image";

interface ProjectCardProps {
  title?: string;
  description?: string;
  year?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function ProjectCard({
  title = "Okari",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  year = "2025",
  imageSrc = "/assets/project-bg.png",
  imageAlt = "Project image",
  className = ""
}: ProjectCardProps) {
  return (
    <div className={`relative flex flex-col w-full h-full bg-[#F7F7F7] rounded-[1.875rem] overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className=" w-full h-[85%] p-2 rounded-[1.875rem] overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt} 
          className="object-cover w-full h-full overflow-hidden rounded-[1.475rem]"
        />
      </div>
      
      {/* Content Overlay */}
      <div className=" w-full  bg-white flex justify-between items-start gap-[1rem] z-10 px-7 py-2 mb-4">
        {/* Title */}
        <div>
        <h3 className="text-black text-[1.825rem] font-medium leading-[1.21] w-full">
          {title}
        </h3>
      
        {/* Description and Year */}
        <div className="flex justify-between items-start lg:items-end xl:items-end gap-[ .9375rem] w-full">
          <p className="text-black text-[1rem] font-light leading-[1.21] max-w-[23.25rem] flex-1">
            {description}
          </p>
        </div>
        </div>
          <span className="text-black text-[1rem] font-light leading-[1.21] whitespace-nowrap">
            {year}
          </span>
      </div>
    </div>
  );
}