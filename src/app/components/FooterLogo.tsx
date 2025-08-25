import React from 'react';
import Image from 'next/image';

export const FooterLogo: React.FC = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                src="/assets/footer/Premier_logo_blue.png"
                alt="Premier Studios Logo"
                width={600}
                height={600}
                className="h-auto w-48 sm:w-64 md:w-80 lg:w-76"
            />
        </div>
    );
};
