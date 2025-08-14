'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FooterSection() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribe email:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-black py-8 md:py-12 lg:py-16">
            <div className="mx-auto w-full max-w-[90rem] px-4 md:px-8 lg:px-16">
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    <div className="flex flex-col gap-16">
                        {/* Top Grid Section */}
                        <div className="grid grid-cols-4 gap-8 border-b border-white/20 pb-16">
                            {/* Column 1 - Company Description */}
                            <div className="flex flex-col gap-6">
                                <div className="h-8"></div>{' '}
                                {/* Spacer to align with other columns */}
                                <p className="text-base leading-[1.5] text-white/70">
                                    At Premier Studios, we bring your Minecraft
                                    vision to life.
                                    <br />
                                    <br />
                                    From custom maps to plugins and design, our
                                    team connects you with expert creators ready
                                    to build whatever you can imagine.
                                </p>
                            </div>

                            {/* Column 2 - Quick Navigation */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-[5px] w-[5px] rounded-full bg-white"></div>
                                    <span className="text-base font-medium text-white">
                                        Quick navigation
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="#"
                                        className="text-base text-white transition-opacity hover:opacity-70"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-white transition-opacity hover:opacity-70"
                                    >
                                        Our Studio
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-white transition-opacity hover:opacity-70"
                                    >
                                        Our Work
                                    </a>
                                    <a
                                        href="#"
                                        className="text-base text-white transition-opacity hover:opacity-70"
                                    >
                                        Reviews
                                    </a>
                                </div>
                            </div>

                            {/* Column 3 - Contact Us */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-[5px] w-[5px] rounded-full bg-white"></div>
                                    <span className="text-base font-medium text-white">
                                        Contact us
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="text-base leading-[1.5] text-white">
                                        123 Pixel Lane, London, UK
                                        <br />
                                        SW1A 1AA
                                        <br />
                                        +44 20 7946 0990
                                    </div>
                                    <a
                                        href="mailto:hello@premierstudios.co.uk"
                                        className="text-base text-white transition-opacity hover:opacity-70"
                                    >
                                        hello@premierstudios.co.uk
                                    </a>
                                </div>
                            </div>

                            {/* Column 4 - Discover Premier */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="h-[5px] w-[5px] rounded-full bg-white"></div>
                                    <span className="text-base font-medium text-white">
                                        Discover Premier
                                    </span>
                                </div>
                                <button className="relative w-fit">
                                    <Image
                                        src="/assets/footer/contact-button.svg"
                                        alt="Contact Us"
                                        width={176}
                                        height={63}
                                    />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-base font-medium text-white">
                                        Contact Us
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Section with Logo and Newsletter */}
                        <div className="grid grid-cols-2 items-start gap-16">
                            {/* Large Logo */}
                            <div className="h-80 w-80">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Premier Studio Logo"
                                    width={320}
                                    height={320}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Newsletter Section */}
                            <div className="flex flex-col items-end gap-8">
                                {/* Newsletter Header */}
                                <div className="flex max-w-sm flex-col items-end gap-3">
                                    <h3 className="text-right text-3xl leading-[1.21] font-medium text-white">
                                        Stay in the loop
                                    </h3>
                                    <p className="text-right text-base leading-[1.5] text-white">
                                        Subscribe to our newsletter for
                                        exclusive promotions, discounts, and
                                        more!
                                    </p>
                                </div>

                                {/* Email Input and Subscribe */}
                                <form
                                    onSubmit={handleSubscribe}
                                    className="flex w-full max-w-md"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        className="flex-1 border border-r-0 border-white bg-transparent px-4 py-4 text-base font-medium text-white placeholder-white/40"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="relative flex-shrink-0"
                                    >
                                        <Image
                                            src="/assets/footer/subscribe-button.svg"
                                            alt="Subscribe"
                                            width={176}
                                            height={63}
                                        />
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-base font-medium text-white">
                                            Subscribe
                                        </span>
                                    </button>
                                </form>

                                {/* Social Media Icons */}
                                <div className="mt-8 flex items-center gap-4">
                                    <a
                                        href="#"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20"
                                    >
                                        <Image
                                            src="/assets/footer/discord-icon.svg"
                                            alt="Discord"
                                            width={20}
                                            height={16}
                                            className="invert"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20"
                                    >
                                        <Image
                                            src="/assets/footer/instagram-icon.svg"
                                            alt="Instagram"
                                            width={19}
                                            height={19}
                                            className="invert"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20"
                                    >
                                        <Image
                                            src="/assets/footer/twitter-icon.svg"
                                            alt="Twitter"
                                            width={23}
                                            height={21}
                                            className="invert"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8">
                            <span className="text-base font-medium text-white/40">
                                © 2025 goCaptivate. All Rights Reserved.
                            </span>
                            <a
                                href="#"
                                className="text-base font-medium text-white transition-opacity hover:opacity-70"
                            >
                                Terms & Condition
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-white transition-opacity hover:opacity-70"
                            >
                                Legal license
                            </a>
                            <a
                                href="#"
                                className="text-base font-medium text-white transition-opacity hover:opacity-70"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Layout */}
                <div className="lg:hidden">
                    <div className="flex flex-col gap-8 md:gap-12">
                        {/* Company Description */}
                        <div className="text-center md:text-left">
                            <p className="text-sm leading-[1.5] text-white/70 md:text-base">
                                At Premier Studios, we bring your Minecraft
                                vision to life.
                                <br className="hidden md:block" />
                                <br className="hidden md:block" />
                                From custom maps to plugins and design, our team
                                connects you with expert creators ready to build
                                whatever you can imagine.
                            </p>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                            {/* Quick Navigation */}
                            <div className="text-center md:text-left">
                                <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
                                    <div className="h-[5px] w-[5px] rounded-full bg-white"></div>
                                    <span className="text-base font-medium text-white md:text-lg">
                                        Quick navigation
                                    </span>
                                </div>
                                <div className="flex flex-col items-center gap-3 md:items-start">
                                    <a
                                        href="#"
                                        className="text-sm text-white transition-opacity hover:opacity-70 md:text-base"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm text-white transition-opacity hover:opacity-70 md:text-base"
                                    >
                                        Our Studio
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm text-white transition-opacity hover:opacity-70 md:text-base"
                                    >
                                        Our Work
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm text-white transition-opacity hover:opacity-70 md:text-base"
                                    >
                                        Reviews
                                    </a>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="text-center md:text-left">
                                <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
                                    <div className="h-[5px] w-[5px] rounded-full bg-white"></div>
                                    <span className="text-base font-medium text-white md:text-lg">
                                        Contact us
                                    </span>
                                </div>
                                <div className="flex flex-col items-center gap-4 md:items-start">
                                    <div className="text-sm leading-[1.5] text-white md:text-base">
                                        123 Pixel Lane, London, UK
                                        <br />
                                        SW1A 1AA
                                        <br />
                                        +44 20 7946 0990
                                    </div>
                                    <a
                                        href="mailto:hello@premierstudios.co.uk"
                                        className="text-sm text-white transition-opacity hover:opacity-70 md:text-base"
                                    >
                                        hello@premierstudios.co.uk
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="text-center">
                            <div className="flex flex-col items-center gap-6 md:gap-8">
                                {/* Newsletter Header */}
                                <div className="flex max-w-md flex-col items-center gap-3">
                                    <h3 className="text-xl leading-[1.21] font-medium text-white md:text-2xl lg:text-3xl">
                                        Stay in the loop
                                    </h3>
                                    <p className="text-sm leading-[1.5] text-white md:text-base">
                                        Subscribe to our newsletter for
                                        exclusive promotions, discounts, and
                                        more!
                                    </p>
                                </div>

                                {/* Email Input and Subscribe */}
                                <form
                                    onSubmit={handleSubscribe}
                                    className="flex w-full max-w-md flex-col gap-4 md:flex-row"
                                >
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        className="flex-1 rounded-md border border-white bg-transparent px-4 py-3 text-sm font-medium text-white placeholder-white/40 md:rounded-none md:text-base"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 md:rounded-none md:text-base"
                                    >
                                        Subscribe
                                    </button>
                                </form>

                                {/* Social Media Icons */}
                                <div className="flex items-center justify-center gap-4">
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20 md:h-12 md:w-12"
                                    >
                                        <Image
                                            src="/assets/footer/discord-icon.svg"
                                            alt="Discord"
                                            width={20}
                                            height={16}
                                            className="invert"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20 md:h-12 md:w-12"
                                    >
                                        <Image
                                            src="/assets/footer/instagram-icon.svg"
                                            alt="Instagram"
                                            width={19}
                                            height={19}
                                            className="invert"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white/10 transition-colors hover:bg-white/20 md:h-12 md:w-12"
                                    >
                                        <Image
                                            src="/assets/footer/twitter-icon.svg"
                                            alt="Twitter"
                                            width={23}
                                            height={21}
                                            className="invert"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Button */}
                        <div className="flex justify-center">
                            <button className="rounded-full bg-white px-8 py-4 text-base font-medium text-black transition-colors hover:bg-white/90">
                                Contact Us
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="relative h-32 w-32 md:h-40 md:w-40">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Premier Studio Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 md:flex-row md:gap-8">
                            <span className="text-sm font-medium text-white/40 md:text-base">
                                © 2025 goCaptivate. All Rights Reserved.
                            </span>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                <a
                                    href="#"
                                    className="text-sm font-medium text-white transition-opacity hover:opacity-70 md:text-base"
                                >
                                    Terms & Condition
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-white transition-opacity hover:opacity-70 md:text-base"
                                >
                                    Legal license
                                </a>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-white transition-opacity hover:opacity-70 md:text-base"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
