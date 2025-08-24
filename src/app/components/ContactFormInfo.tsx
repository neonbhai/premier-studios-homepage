'use client';

import { EMAIL, PHONE_NUMBER, SOCIAL_LINKS } from '../../CONSTS';

const socialLinksArray = [
    { name: 'Discord', url: SOCIAL_LINKS.DISCORD },
    { name: 'Instagram', url: SOCIAL_LINKS.INSTAGRAM },
    { name: 'Twitter', url: SOCIAL_LINKS.TWITTER },
];

export default function ContactFormInfo() {
    return (
        <div className="flex w-full max-w-[20.25rem] flex-col gap-[1.5rem] md:gap-[2.1875rem]">
            <div className="flex flex-col gap-[1.5rem] md:gap-[2.1875rem]">
                <a
                    href={`mailto:${EMAIL}`}
                    className="cursor-pointer text-[1.5rem] leading-[1.21] font-medium text-white transition-colors hover:text-[#029BE6] md:text-[2.25rem]"
                >
                    {EMAIL}
                </a>
                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full cursor-pointer text-[0.875rem] leading-[1.21] font-medium text-white/52 transition-colors hover:text-[#029BE6] md:text-[1rem]"
                >
                    {PHONE_NUMBER}
                </a>
            </div>

            <div className="h-[1px] w-full bg-white"></div>

            <div className="flex items-center gap-[1rem] md:gap-[1.25rem]">
                {socialLinksArray.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-[0.875rem] leading-[1.21] font-normal text-white transition-colors hover:text-[#029BE6] md:text-[1rem]"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
