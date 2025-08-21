'use client';

import React from 'react';

export const CompanyDescription: React.FC = () => {
    return (
        <p className="text-[10px] md:max-w-xs md:text-base md:leading-6">
            <span className="text-white">At Premier Studios</span>
            <span className="text-white/40">
                , we bring your Minecraft vision to life.
                <br />
                <br />
                From custom maps to plugins and design, our team connects you
                with expert creators ready to build whatever you can imagine.
            </span>
        </p>
    );
};
