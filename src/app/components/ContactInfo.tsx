'use client';

import React from 'react';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../../CONSTS';

export const ContactInfo: React.FC = () => {
    return (
        <div className="space-y-2 md:space-y-4">
            <div className="text-[10px] text-white md:text-base">
                {ADDRESS.split(', ').slice(0, -1).join(', ')}
                <br />
                {ADDRESS.split(', ').slice(-1)[0]}
                <br />
                <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    {PHONE_NUMBER}
                </a>
            </div>
            <div className="text-[10px] break-all text-white md:text-base">
                <a
                    href={`mailto:${EMAIL}`}
                    className="relative inline-block pb-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    {EMAIL}
                </a>
            </div>
        </div>
    );
};
