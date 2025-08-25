'use client';

import React from 'react';
import { FooterGridCell } from './FooterGridCell';
import { ContactInfo } from './ContactInfo';
import { QuickNavigation } from './QuickNavigation';
import { CompanyDescription } from './CompanyDescription';
import { ButtonWithCutoff } from './ButtonWithCutoff';
import { CONTACT_US_LINK } from '../../CONSTS';

export const FooterGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-0 xl:grid-cols-4">
            <FooterGridCell title="Contact us">
                <ContactInfo />
            </FooterGridCell>

            <FooterGridCell title="Quick navigation">
                <QuickNavigation />
            </FooterGridCell>

            <FooterGridCell title="Begin Your Journey">
                <CompanyDescription />
            </FooterGridCell>

            <FooterGridCell title="Discover Premier">
                <div className="flex justify-start">
                    <ButtonWithCutoff
                        text="Contact Us"
                        href={CONTACT_US_LINK}
                        flipped={true}
                        size="sm"
                        className="md:hidden"
                    />
                    <ButtonWithCutoff
                        text="Contact Us"
                        href={CONTACT_US_LINK}
                        flipped={true}
                        size="lg"
                        className="hidden md:block"
                    />
                </div>
            </FooterGridCell>
        </div>
    );
};
