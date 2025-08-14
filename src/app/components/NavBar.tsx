'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NavBarProps {
    logoSrc?: string;
    logoAlt?: string;
    navLinks?: { label: string; href: string }[];
    contactButtonText?: string;
    transparent?: boolean;
}

export default function NavBar({
    logoSrc = '/assets/logo.png',
    logoAlt = 'Premier Studio Logo',
    navLinks = [
        { label: 'home', href: '/' },
        { label: 'Our work', href: '/projects' },
        { label: 'About', href: '/about-us' },
        { label: 'Contact', href: '/contact-us' },
    ],
    contactButtonText = 'Contact us',
    transparent = false,
}: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`${transparent ? 'relative z-10' : 'bg-transparent'} flex items-center justify-between px-4 pt-4 sm:px-8 sm:pt-6 xl:px-[4.3vw] xl:pt-[3vh] ${!transparent ? 'pb-4 sm:pb-6 xl:pb-[3vh]' : ''}`}
        >
            {/* Logo */}
            <Link href={'/'}>
                <div className="h-4 w-24 sm:h-6 sm:w-32 xl:h-[4.8vh] xl:w-[14.9vw]">
                    <Image
                        src={logoSrc}
                        alt={logoAlt}
                        width={208}
                        height={37}
                        className="h-full w-full object-contain"
                    />
                </div>
            </Link>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden items-center gap-[12.4vw] xl:flex">
                {/* Nav Links */}
                <div className="flex h-[7.4vh] w-[40.6vw] items-center justify-center gap-[4.3vw] rounded-[76px] bg-white/16 px-6 py-4 backdrop-blur-[6px]">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link?.href}
                            className="text-[1.1vw] leading-[1.21] font-normal whitespace-nowrap text-white capitalize transition-opacity hover:opacity-80"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Contact Button */}
                <button className="h-[7.1vh] w-[11.2vw] rounded-[48px] bg-[#007AFF] px-[1.1vw] py-[0.8vh] text-[1.1vw] leading-[1.21] font-normal whitespace-nowrap text-white transition-colors hover:bg-[#0056CC]">
                    {contactButtonText}
                </button>
            </nav>

            {/* Mobile menu button */}
            <button
                className="relative z-50 text-white xl:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isMenuOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm xl:hidden">
                    <nav className="flex h-full flex-col items-center justify-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link?.href}
                                className="text-xl leading-[1.21] font-normal text-white capitalize transition-opacity hover:opacity-80"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            className="mt-4 rounded-full bg-[#007AFF] px-6 py-3 text-lg leading-[1.21] font-normal text-white transition-colors hover:bg-[#0056CC]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {contactButtonText}
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
