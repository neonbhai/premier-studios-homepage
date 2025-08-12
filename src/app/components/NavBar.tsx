import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  logoSrc?: string;
  logoAlt?: string;
  navLinks?: { label: string; href: string }[];
  contactButtonText?: string;
  transparent?: boolean;
}

export default function NavBar({
  logoSrc = "/assets/logo.png",
  logoAlt = "Premier Studio Logo",
  navLinks = [
    { label: "home", href: "/" },
    { label: "Our work", href: "/projects" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" }
  ],
  contactButtonText = "Contact us",
  transparent = false
}: NavBarProps) {
  return (
    <header className={`${transparent ? 'relative z-10' : 'bg-transparent'} flex items-center justify-between px-4 sm:px-8 xl:px-[4.3vw] pt-4 sm:pt-6 xl:pt-[3vh] ${!transparent ? 'pb-4 sm:pb-6 xl:pb-[3vh]' : ''}`}>
      {/* Logo */}
      <Link href={'/'}>
      <div className="w-24 h-4 sm:w-32 sm:h-6 xl:w-[14.9vw] xl:h-[4.8vh]">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={208}
          height={37}
          className="w-full h-full object-contain"
        />
      </div>
      </Link>

      {/* Navigation - Hidden on mobile */}
      <nav className="hidden xl:flex items-center gap-[12.4vw]">
        {/* Nav Links */}
        <div className="flex items-center justify-center gap-[4.3vw] px-6 py-4 bg-white/16 backdrop-blur-[6px] rounded-[76px] w-[40.6vw] h-[7.4vh]">
          {navLinks.map((link, index) => (
            <Link key={index} href={link?.href} className="text-white text-[1.1vw] font-normal uppercase leading-[1.21] hover:opacity-80 transition-opacity whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <button className="bg-[#007AFF] text-white px-[1.1vw] py-[0.8vh] rounded-[48px] w-[11.2vw] h-[7.4vh] text-[1.1vw] font-normal leading-[1.21] hover:bg-[#0056CC] transition-colors whitespace-nowrap">
          {contactButtonText}
        </button>
      </nav>

      {/* Mobile menu button */}
      <button className="xl:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}