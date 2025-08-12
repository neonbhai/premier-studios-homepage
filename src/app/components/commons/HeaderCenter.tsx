interface HeaderCenterProps {
  whiteText: string;
  blueText: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function HeaderCenter({ whiteText, blueText, className = "", variant = "dark" }: HeaderCenterProps) {
  const textColor = variant === 'light' ? 'text-black' : 'text-white';
  
  return (
    <h2 className={`${textColor} text-center text-[2rem] md:text-[3rem] font-medium leading-[1.2] w-full ${className}`}>
      {whiteText} <span className="text-[#029BE6]">{blueText}</span>
    </h2>
  );
}