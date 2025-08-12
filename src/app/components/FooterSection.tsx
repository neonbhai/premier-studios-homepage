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
      <div className="w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex flex-col gap-16">
            
            {/* Top Grid Section */}
            <div className="grid grid-cols-4 gap-8 border-b border-white/20 pb-16">
              
              {/* Column 1 - Company Description */}
              <div className="flex flex-col gap-6">
                <div className="h-8"></div> {/* Spacer to align with other columns */}
                <p className="text-white/70 text-base leading-[1.5]">
                  At Premier Studios, we bring your Minecraft vision to life.
                  <br /><br />
                  From custom maps to plugins and design, our team connects you with expert creators ready to build whatever you can imagine.
                </p>
              </div>

              {/* Column 2 - Quick Navigation */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                  <span className="text-white text-base font-medium">Quick navigation</span>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-white text-base hover:opacity-70 transition-opacity">Home</a>
                  <a href="#" className="text-white text-base hover:opacity-70 transition-opacity">Our Studio</a>
                  <a href="#" className="text-white text-base hover:opacity-70 transition-opacity">Our Work</a>
                  <a href="#" className="text-white text-base hover:opacity-70 transition-opacity">Reviews</a>
                </div>
              </div>

              {/* Column 3 - Contact Us */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                  <span className="text-white text-base font-medium">Contact us</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-white text-base leading-[1.5]">
                    123 Pixel Lane, London, UK<br />
                    SW1A 1AA<br />
                    +44 20 7946 0990
                  </div>
                  <a href="mailto:hello@premierstudios.co.uk" className="text-white text-base hover:opacity-70 transition-opacity">
                    hello@premierstudios.co.uk
                  </a>
                </div>
              </div>

              {/* Column 4 - Discover Premier */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                  <span className="text-white text-base font-medium">Discover Premier</span>
                </div>
                <button className="relative w-fit">
                  <Image
                    src="/assets/footer/contact-button.svg"
                    alt="Contact Us"
                    width={176}
                    height={63}
                  />
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-base">
                    Contact Us
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Section with Logo and Newsletter */}
            <div className="grid grid-cols-2 gap-16 items-start">
              
              {/* Large Logo */}
              <div className="w-80 h-80">
                <Image
                  src="/assets/logo.png"
                  alt="Premier Studio Logo"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Newsletter Section */}
              <div className="flex flex-col items-end gap-8">
                
                {/* Newsletter Header */}
                <div className="flex flex-col items-end gap-3 max-w-sm">
                  <h3 className="text-white font-medium text-3xl leading-[1.21] text-right">
                    Stay in the loop
                  </h3>
                  <p className="text-white text-base leading-[1.5] text-right">
                    Subscribe to our newsletter for exclusive promotions, discounts, and more!
                  </p>
                </div>

                {/* Email Input and Subscribe */}
                <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 border border-white border-r-0 bg-transparent px-4 py-4 text-base font-medium text-white placeholder-white/40"
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
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-medium text-base">
                      Subscribe
                    </span>
                  </button>
                </form>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4 mt-8">
                  <a href="#" className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
                    <Image
                      src="/assets/footer/discord-icon.svg"
                      alt="Discord"
                      width={20}
                      height={16}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
                    <Image
                      src="/assets/footer/instagram-icon.svg"
                      alt="Instagram"
                      width={19}
                      height={19}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center w-12 h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
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
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
              <span className="text-white/40 font-medium text-base">
                © 2025 goCaptivate. All Rights Reserved.
              </span>
              <a href="#" className="text-white font-medium text-base hover:opacity-70 transition-opacity">
                Terms & Condition
              </a>
              <a href="#" className="text-white font-medium text-base hover:opacity-70 transition-opacity">
                Legal license
              </a>
              <a href="#" className="text-white font-medium text-base hover:opacity-70 transition-opacity">
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
              <p className="text-white/70 text-sm md:text-base leading-[1.5]">
                At Premier Studios, we bring your Minecraft vision to life.
                <br className="hidden md:block" /><br className="hidden md:block" />
                From custom maps to plugins and design, our team connects you with expert creators ready to build whatever you can imagine.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Quick Navigation */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                  <span className="text-white text-base md:text-lg font-medium">Quick navigation</span>
                </div>
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <a href="#" className="text-white text-sm md:text-base hover:opacity-70 transition-opacity">Home</a>
                  <a href="#" className="text-white text-sm md:text-base hover:opacity-70 transition-opacity">Our Studio</a>
                  <a href="#" className="text-white text-sm md:text-base hover:opacity-70 transition-opacity">Our Work</a>
                  <a href="#" className="text-white text-sm md:text-base hover:opacity-70 transition-opacity">Reviews</a>
                </div>
              </div>

              {/* Contact Us */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                  <div className="w-[5px] h-[5px] bg-white rounded-full"></div>
                  <span className="text-white text-base md:text-lg font-medium">Contact us</span>
                </div>
                <div className="flex flex-col gap-4 items-center md:items-start">
                  <div className="text-white text-sm md:text-base leading-[1.5]">
                    123 Pixel Lane, London, UK<br />
                    SW1A 1AA<br />
                    +44 20 7946 0990
                  </div>
                  <a href="mailto:hello@premierstudios.co.uk" className="text-white text-sm md:text-base hover:opacity-70 transition-opacity">
                    hello@premierstudios.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="text-center">
              <div className="flex flex-col gap-6 md:gap-8 items-center">
                
                {/* Newsletter Header */}
                <div className="flex flex-col gap-3 items-center max-w-md">
                  <h3 className="text-white font-medium text-xl md:text-2xl lg:text-3xl leading-[1.21]">
                    Stay in the loop
                  </h3>
                  <p className="text-white text-sm md:text-base leading-[1.5]">
                    Subscribe to our newsletter for exclusive promotions, discounts, and more!
                  </p>
                </div>

                {/* Email Input and Subscribe */}
                <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 border border-white bg-transparent px-4 py-3 text-sm md:text-base font-medium text-white placeholder-white/40 rounded-md md:rounded-none"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-black px-6 py-3 text-sm md:text-base font-medium hover:bg-white/90 transition-colors rounded-md md:rounded-none"
                  >
                    Subscribe
                  </button>
                </form>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4">
                  <a href="#" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
                    <Image
                      src="/assets/footer/discord-icon.svg"
                      alt="Discord"
                      width={20}
                      height={16}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
                    <Image
                      src="/assets/footer/instagram-icon.svg"
                      alt="Instagram"
                      width={19}
                      height={19}
                      className="invert"
                    />
                  </a>
                  <a href="#" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white rounded-full hover:bg-white/20 transition-colors">
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
              <button className="bg-white text-black px-8 py-4 text-base font-medium hover:bg-white/90 transition-colors rounded-full">
                Contact Us
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                <Image
                  src="/assets/logo.png"
                  alt="Premier Studio Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-8 border-t border-white/20">
              <span className="text-white/40 font-medium text-sm md:text-base">
                © 2025 goCaptivate. All Rights Reserved.
              </span>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a href="#" className="text-white font-medium text-sm md:text-base hover:opacity-70 transition-opacity">
                  Terms & Condition
                </a>
                <a href="#" className="text-white font-medium text-sm md:text-base hover:opacity-70 transition-opacity">
                  Legal license
                </a>
                <a href="#" className="text-white font-medium text-sm md:text-base hover:opacity-70 transition-opacity">
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