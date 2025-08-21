'use client';

import React from 'react';
import Image from 'next/image';
import { SOCIAL_LINKS } from '../../CONSTS';

interface SocialLink {
    href: string;
    icon: string;
    alt: string;
    width: number;
    height: number;
}

const socialLinks: SocialLink[] = [
    {
        href: SOCIAL_LINKS.DISCORD,
        icon: '/assets/discord-icon.svg',
        alt: 'Discord',
        width: 20,
        height: 16,
    },
    {
        href: SOCIAL_LINKS.INSTAGRAM,
        icon: '/assets/instagram-icon.svg',
        alt: 'Instagram',
        width: 20,
        height: 20,
    },
    {
        href: SOCIAL_LINKS.TWITTER,
        icon: '/assets/twitter-icon.svg',
        alt: 'Twitter',
        width: 24,
        height: 22,
    },
];

interface SocialMediaIconsProps {
    className?: string;
}

export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
    className = '',
}) => {
    return (
        <div
            className={`flex flex-row justify-end gap-1 md:gap-4 ${className}`}
        >
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-black/5 transition-colors hover:bg-black/10 md:h-12 md:w-12"
                >
                    <Image
                        src={link.icon}
                        alt={link.alt}
                        width={link.width}
                        height={link.height}
                        className="h-3 w-3 md:h-auto md:w-auto"
                    />
                </a>
            ))}
        </div>
    );
};
