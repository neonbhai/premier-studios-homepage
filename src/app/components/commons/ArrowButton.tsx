import Image from "next/image";

interface ArrowButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
  className2?: string;
}

export default function ArrowButton({ 
  text = "Join Now",
  onClick, 
  className = "", 
  size = "medium",
  variant = "light",
  className2 = ""
}: ArrowButtonProps) {
  
  const sizeClasses = {
    small: {
      container: "w-[119px] h-[50px]",
      text: "text-xs",
      textPosition: "left-[32px] top-[15px]"
    },
    medium: {
      container: "w-[148.5px] h-[62.5px]",
      text: "text-base",
      textPosition: "left-[40px] top-[19px]"
    },
    large: {
      container: "w-[178px] h-[75px]",
      text: "text-lg",
      textPosition: "left-[48px] top-[23px]"
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <button 
      className={`relative group w-fit transition-all duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className={`${currentSize.container} relative`}>
        {/* Default state - use the exact SVG from Figma */}
        <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
          <Image
            src="/assets/arrow-button-bg.svg"
            alt="Button background"
            width={148.5}
            height={62.5}
            className={`w-full h-full ${
              variant === 'light' 
                ? '[filter:invert(1)]' 
                : ''
            }`}
          />
        </div>
        
        {/* Hover state - outlined version */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src="/assets/arrow-button-bg.svg"
            alt="Button background outline"
            width={148.5}
            height={62.5}
            className={`w-full h-full ${
              variant === 'light' 
                ? '[filter:invert(0)_brightness(0)_sepia(1)_hue-rotate(0deg)_saturate(100%)_contrast(100%)]' 
                : '[filter:invert(1)_brightness(0)_sepia(1)_hue-rotate(0deg)_saturate(100%)_contrast(100%)]'
            }`}
            style={{
              filter: variant === 'light' 
                ? 'invert(0) brightness(0) saturate(100%) contrast(100%) drop-shadow(0 0 0 2px black) drop-shadow(0 0 0 2px transparent)'
                : 'invert(1) brightness(0) saturate(100%) contrast(100%) drop-shadow(0 0 0 2px white) drop-shadow(0 0 0 2px transparent)'
            }}
          />
        </div>
        
        {/* Button Text */}
        <span 
          className={`absolute ${currentSize.textPosition} ${currentSize.text} font-medium transition-all duration-300 z-10 ${
            variant === 'light' 
              ? 'text-white group-hover:text-black' 
              : 'text-black group-hover:text-white'
          }`}
        >
          {text}
        </span>
      </div>
    </button>
  );
}