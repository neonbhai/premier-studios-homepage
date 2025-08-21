'use client';

import React from 'react';
import { EmailSubscribe } from './EmailSubscribe';
import { SocialMediaIcons } from './SocialMediaIcons';

export const NewsletterSection: React.FC = () => {
    return (
        <div className="max-w-6xl space-y-4 md:space-y-6">
            <div className="text-right">
                <h4 className="font-heading mb-1 text-2xl text-white md:mb-2 md:text-3xl">
                    Stay in the <span className="text-[#029BE6]">loop</span>
                </h4>
                <p className="text-xs text-white md:text-base">
                    Subscribe to our newsletter
                    <br />
                    for exclusive promotions, discounts,
                    <br />
                    and more!
                </p>
            </div>

            {/* Email Input and Subscribe */}
            <EmailSubscribe
                placeholder="Enter your email"
                buttonText="Subscribe"
                onSubmit={(email) => {
                    console.log('Subscribing email:', email);
                    // TODO: Add actual subscription logic
                }}
            />

            {/* Social Media Icons */}
            <SocialMediaIcons className="mt-4 justify-center md:mt-8 md:justify-end" />
        </div>
    );
};
