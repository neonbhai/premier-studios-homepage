'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatedHamburger } from './animated-hamburger';

const NAV_LINKS = [
    { label: 'home', href: '/' },
    { label: 'Our work', href: '/projects' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
];

interface NavBarProps {
    transparent?: boolean;
    overlay?: boolean;
}

interface NavLogoProps {
    className?: string;
}

interface DesktopNavProps {
    transparent?: boolean;
}

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

function NavLogo({ className = '' }: NavLogoProps) {
    return (
        <Link href={'/'}>
            <div
                className={`relative h-8 w-32 sm:h-10 sm:w-44 xl:h-[4.8vh] xl:w-[14.9vw] ${className}`}
            >
                <Image
                    src="/assets/logo.png"
                    alt="Premier Studio Logo"
                    width={208}
                    height={37}
                    className="h-full w-full object-contain"
                />
            </div>
        </Link>
    );
}

function DesktopNav({ transparent }: DesktopNavProps) {
    return (
        <nav className="hidden items-center gap-[12.4vw] lg:flex">
            <div
                className={`flex h-[7.4vh] w-[40.6vw] items-center justify-center gap-[4.3vw] rounded-[76px] ${transparent ? '' : 'bg-white/16'} px-6 py-4 backdrop-blur-[6px]`}
            >
                {NAV_LINKS.map((link, index) => (
                    <Link
                        key={index}
                        href={link?.href}
                        className="leading-[1.21] font-normal whitespace-nowrap capitalize transition-opacity hover:opacity-80 lg:text-[15px] xl:text-[1.1vw]"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <Link href={'/contact-us'}>
                <button className="h-[7.1vh] w-[11.2vw] cursor-pointer rounded-[48px] bg-[#007AFF] px-[1.1vw] py-[0.8vh] leading-[1.21] font-normal whitespace-nowrap text-white transition-colors hover:bg-[#0056CC] lg:text-[15px] xl:text-[1.1vw]">
                    Contact us
                </button>
            </Link>
        </nav>
    );
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40 bg-black/90 lg:hidden">
            <nav className="flex h-full flex-col items-center justify-center gap-8">
                {NAV_LINKS.map((link, index) => (
                    <Link
                        key={index}
                        href={link?.href}
                        className="text-xl leading-[1.21] font-normal text-white capitalize transition-opacity hover:opacity-80"
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default function NavBar({
    transparent = false,
    overlay = false,
}: NavBarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className={`${overlay ? 'relative z-10' : 'bg-transparent'} flex items-center justify-between px-8 pt-8 sm:px-9 sm:pt-9 xl:px-[4.3vw] xl:pt-[4vh] ${!overlay ? 'pb-4 sm:pb-6 xl:pb-[3vh]' : ''}`}
        >
            <NavLogo />
            <DesktopNav transparent={transparent} />
            <AnimatedHamburger
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden"
            />
            <MobileNav
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    );
}
