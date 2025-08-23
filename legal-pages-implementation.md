# Legal Pages Implementation Guide

This document contains all the code needed to implement the `/terms` and `/privacy-policy` pages for a Premier Studios-style website. **Important Note:** The original implementation uses SuperGuild and IBM Plex Mono fonts, but this guide specifies using **Inter font only** for the new implementation.

## Font Setup

Replace the existing font configuration with Inter font only:

```typescript
// src/lib/fonts.ts
import { Inter } from 'next/font/google';

// Inter font - used for both headings and body text
export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-inter',
    display: 'swap',
});
```

Update your root layout to use Inter:

```typescript
// src/app/layout.tsx
import { inter } from '@/lib/fonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable}`}
        >
            <body className="antialiased font-sans">
                {/* Your content */}
            </body>
        </html>
    );
}
```

## CSS Styles

Add these legal-specific styles to your CSS (adjust font-family to use Inter):

```css
/* Legal Pages Styles */
.legal-section {
    @apply space-y-6;
}

.legal-heading {
    @apply text-primary font-inter text-lg font-medium leading-6 md:text-2xl lg:text-3xl;
}

.legal-content {
    @apply font-inter space-y-4 text-sm leading-relaxed text-white/80 md:text-base lg:text-lg;
}

.legal-text {
    @apply font-inter text-sm leading-relaxed text-white/80 md:text-base lg:text-lg;
}

.legal-subheading {
    @apply font-inter mb-2 text-sm font-medium text-white/80 md:text-base lg:text-lg;
}

.legal-list {
    @apply ml-4 list-disc space-y-1 marker:text-white/80;
}

.legal-list-spaced {
    @apply ml-4 list-disc space-y-2 marker:text-white/80;
}
```

## Shared Components

### TextPageHeader Component

```tsx
// src/components/TextPageHeader.tsx
interface TextPageHeaderProps {
    title: string;
    lastUpdated: string;
}

export default function TextPageHeader({
    title,
    lastUpdated,
}: TextPageHeaderProps) {
    const words = title.split(' ');
    const lastWord = words.pop();
    const titleStart = words.join(' ');

    return (
        <div className="mb-16 md:mb-28 md:mt-[50px] lg:mt-[50px]">
            <h1 className="font-inter mb-4 text-4xl font-medium leading-[1.2] text-blue-400 sm:text-6xl md:mb-6 md:text-8xl lg:text-[96px]">
                {titleStart}
                {titleStart && ' '}
                <span className="text-white">{lastWord}</span>
            </h1>
            <p className="font-inter mt-8 text-sm leading-6 text-white/80 md:text-base lg:mt-20">
                Last Updated: {lastUpdated}
            </p>
        </div>
    );
}
```

### LegalSection Component

```tsx
// src/components/LegalSection.tsx
interface LegalSectionProps {
    title?: string;
    number?: number;
    children: React.ReactNode;
}

export default function LegalSection({
    title,
    number,
    children,
}: LegalSectionProps) {
    const displayTitle = number ? `${number}. ${title}` : title;

    return (
        <section className="legal-section">
            {displayTitle && <h2 className="legal-heading">{displayTitle}</h2>}
            <div className="legal-content">{children}</div>
        </section>
    );
}
```

### LegalList Component

```tsx
// src/components/LegalList.tsx
interface LegalListProps {
    items: (string | React.ReactNode)[];
    spaced?: boolean;
}

export default function LegalList({ items, spaced = false }: LegalListProps) {
    const listClass = spaced ? 'legal-list-spaced' : 'legal-list';

    return (
        <ul className={listClass}>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
```

## Terms of Service Page

### Layout

```tsx
// src/app/terms/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Your Company Name',
    description:
        'Terms of Service for Your Company Name commission services and freelancer engagements.',
    keywords: 'terms of service, your company, freelancer, commissions',
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
```

### Page Component

```tsx
// src/app/terms/page.tsx
'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import TextPageHeader from '@/components/TextPageHeader';
import LegalSection from '@/components/LegalSection';
import LegalList from '@/components/LegalList';

export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="relative z-10 pb-20 pt-20 md:pb-40 md:pt-32">
                <div className="mx-auto max-w-[1280px] px-4 md:px-8 lg:px-20">
                    <TextPageHeader
                        title="Terms of Service"
                        lastUpdated="Sunday, February 9th, 2025"
                    />

                    <div className="space-y-8 md:space-y-16">
                        {/* Introduction */}
                        <div className="space-y-6">
                            <p className="legal-text">
                                These Terms of Service ("Terms") apply to your
                                use of our commission services and your
                                engagement of a Premier Studio Freelancer
                                ("Services"). These Terms (together with the
                                documents referred to in it) tell you the terms
                                and conditions on which we offer you the
                                Services.
                            </p>
                        </div>

                        <LegalSection number={1} title="About Us">
                            <p>
                                1.1. We are Premier Studios, LLC ("Premier
                                Studios", "we", "us", "our").
                            </p>
                            <p>
                                1.2. To contact us, please use
                                contact@premierstudios.net, our Contact Form, or
                                join our Discord Server.
                            </p>
                            <p>
                                1.3. These Terms were last updated on Sunday,
                                February 9th, 2025.
                            </p>
                            <p>
                                1.4. Our Privacy Policy equally applies to these
                                Terms and forms an integral part of these Terms.
                            </p>
                        </LegalSection>

                        <LegalSection number={2} title="The Services">
                            <p>
                                2.1. We agree to provide and you agree to
                                purchase the Services in accordance with the
                                details provided by you and as further discussed
                                in writing in the ticket between you and the
                                relevant Premier Studio Freelancer on the basis
                                of these Terms to the exclusion of any terms and
                                conditions you purport to apply. You shall not
                                assume you are entitled to features unless
                                mentioned (e.g. source files).
                            </p>
                            <p>
                                2.2. We may change these Terms from time to time
                                with or without notice. If you do not agree to
                                such terms, you must not use our Services.
                            </p>
                            <p>
                                2.3. We reserve the right to, without any
                                notice, explanation or liability and in our sole
                                discretion, refuse to allow you or suspend your
                                access to our Services at any time, if we
                                determine that you have breached these Terms.
                            </p>
                            <p>
                                2.4. You agree that access to or operation of
                                any of our Services may from time to time be
                                interrupted or encounter technical difficulties.
                            </p>
                        </LegalSection>

                        <LegalSection number={3} title="Prices and Payment">
                            <p>
                                3.1. The prices stated for the respective
                                services as determined by the relevant Premier
                                Studio Freelancer shall apply at the time the
                                order is placed ("Service Fees").
                            </p>
                            <p>
                                3.2. You are required to pay a handling fee of
                                10% for commissions up to and including $1,000
                                USD, and 6% for commissions above $1,000 USD
                                ("Handling Fee").
                            </p>
                            <p>
                                3.3. All prices are exclusive of Taxes, and you
                                shall be responsible for all Taxes applicable
                                under this Agreement.
                            </p>
                            <p>
                                3.4. We will invoice you for Service and
                                Handling Fees due in accordance with the
                                provisions of the requested Services.
                            </p>
                            <p>
                                3.5. Before your Premier Studio Freelancer
                                begins providing the Services, you will be
                                required to pay:
                            </p>
                            <LegalList
                                spaced
                                items={[
                                    'i) a 50% deposit of the Service and Handling Fees for normal work',
                                    'ii) a 100% deposit of the Service and Handling Fees for live work',
                                    "Normal work: Done on the freelancer's machine with watermarked updates after 50% deposit.",
                                    "Live work: Done on the client's infrastructure with full client access.",
                                ]}
                            />
                            <p>
                                3.6. All payments must be made in cleared funds,
                                through nominated payment methods, without
                                set-off, withholding, or deduction.
                            </p>
                        </LegalSection>

                        <LegalSection number={4} title="Refunds">
                            <p>
                                4.1. While we operate a limited refund policy,
                                you may be entitled to a refund under these
                                conditions:
                            </p>
                            <LegalList
                                spaced
                                items={[
                                    <>
                                        4.1.1. Missed Deadline
                                        <br />
                                        You may request a refund of up to 75% of
                                        Service Fees if a deadline is missed.
                                    </>,
                                    <>
                                        4.1.2. Unsatisfactory Product
                                        <br />
                                        You may request a refund of up to 15% of
                                        Service Fees. Correction requests are
                                        accepted if they are marginal and within
                                        original agreement scope.
                                    </>,
                                    <>
                                        4.1.3. Substandard Product
                                        <br />
                                        You may request a refund of up to 35% of
                                        Service Fees.
                                    </>,
                                    <>
                                        4.1.4. Other Requests
                                        <br />
                                        We may offer refunds for other reasons
                                        at our sole discretion.
                                    </>,
                                ]}
                            />
                            <p>
                                4.2. If you cancel Services, payments made are
                                generally non-refundable, unless otherwise
                                decided.
                            </p>
                            <p>4.3. Handling Fees are non-refundable.</p>
                            <p>
                                4.4. If issues or delays are caused by your
                                error or third-party events, refunds will not
                                apply.
                            </p>
                        </LegalSection>

                        <LegalSection
                            number={5}
                            title="Out-of-Scope Assignments"
                        >
                            <p>
                                5.1. Additional work or altered scope is treated
                                as Out-of-Scope Assignments.
                            </p>
                            <p>
                                5.2. Acceptance of such assignments requires a
                                new written agreement. Examples include:
                            </p>
                            <LegalList
                                items={[
                                    'Change of mind',
                                    'Midway product change',
                                    'Add-ons to a project',
                                ]}
                            />
                            <p>
                                5.3. Refusal to pay for Out-of-Scope Assignments
                                will result in delivery of the project as per
                                original scope, without refund.
                            </p>
                        </LegalSection>

                        <LegalSection number={6} title="Chargeback">
                            <p>
                                You agree to contact us first before initiating
                                any chargeback or dispute. Fraudulent
                                chargebacks will result in:
                            </p>
                            <LegalList
                                items={[
                                    'Blacklisting',
                                    'Legal action',
                                    'Reselling the work to recover loss',
                                ]}
                            />
                        </LegalSection>

                        <LegalSection number={7} title="Cancellation">
                            <p>
                                7.1. We may cancel Services at any time before
                                delivery.
                            </p>
                            <p>
                                7.2. Except when required by law, we are not
                                liable for any cancellation-related loss.
                            </p>
                        </LegalSection>

                        <LegalSection number={8} title="Commissions">
                            <p>
                                8.1. A commission is complete once delivered and
                                accepted.
                            </p>
                            <p>
                                8.2. It will auto-complete after 14 days without
                                client response.
                            </p>
                            <p>
                                8.3. A hold can be placed for up to 1 month
                                (with possible extension).
                            </p>
                            <p>
                                8.4. No refund if you cancel after work begins.
                            </p>
                            <p>
                                8.5. Changing freelancers resets your commission
                                and cancels previous agreements.
                            </p>
                        </LegalSection>

                        <LegalSection number={9} title="30 Days Support">
                            <p>
                                9.1. Support is offered for 30 days
                                post-completion.
                            </p>
                            <p>9.2. Subject to fair use and scope of work.</p>
                            <p>9.3. No support will be provided:</p>
                            <LegalList
                                items={[
                                    'Beyond 30 days',
                                    'If the service was altered by third parties',
                                    'If misused or instructions were ignored',
                                ]}
                            />
                            <p>
                                9.4. Additional support beyond 30 days is
                                chargeable.
                            </p>
                        </LegalSection>

                        <LegalSection number={10} title="Marketing">
                            <p>
                                You grant us a royalty-free, irrevocable,
                                perpetual license to showcase completed work
                                (excluding your name/brand unless it's part of
                                the scope) for promotional or portfolio use.
                            </p>
                        </LegalSection>

                        <LegalSection number={11} title="Non-Circumvention">
                            <p>
                                You agree not to bypass Premier Studios to work
                                directly with its freelancers. Violations may
                                lead to blacklisting and legal action.
                            </p>
                        </LegalSection>

                        <LegalSection number={12} title="Reporting Violations">
                            <p>
                                Report violations via Discord tickets or DMs.
                                Misuse of the reporting system may result in
                                account suspension. We are not responsible for
                                any payments made directly to freelancers.
                            </p>
                        </LegalSection>

                        <LegalSection number={13} title="Service Copyright">
                            <p>Unless agreed otherwise, you must not:</p>
                            <LegalList
                                items={[
                                    'Sell or exploit the Services',
                                    'Reverse-engineer or adapt them',
                                    'Remove trademarks or copyright',
                                    'Claim authorship',
                                    'Export illegally',
                                ]}
                            />
                            <p>
                                Violations may result in blacklisting and legal
                                action.
                            </p>
                        </LegalSection>

                        <LegalSection number={14} title="Confidentiality">
                            <p>
                                We agree to maintain confidentiality. If you
                                require an NDA, notify us early.
                            </p>
                        </LegalSection>

                        <LegalSection number={15} title="Project Files">
                            <p>
                                We archive project files, but you are
                                responsible for keeping your own backups. We are
                                not liable for data loss.
                            </p>
                        </LegalSection>

                        <LegalSection number={16} title="Rules and Conduct">
                            <p>
                                Violating our community guidelines may result
                                in:
                            </p>
                            <LegalList
                                items={[
                                    'Order cancellation (no refund)',
                                    'Blacklisting',
                                    'Legal action',
                                ]}
                            />
                            <p>
                                Rules are published on our website and Discord
                                (#rules channel).
                            </p>
                        </LegalSection>

                        <LegalSection
                            number={17}
                            title="Language Used in Tickets"
                        >
                            <p>
                                We recommend using English for quality
                                assurance. If you choose another language, you
                                are responsible for clarity, and we are not
                                liable for misunderstandings.
                            </p>
                        </LegalSection>

                        <LegalSection number={18} title="Recommendations">
                            <p>
                                Use of services not directly affiliated with
                                Premier Studios is at your own risk. See our
                                official partners on our Partners Page.
                            </p>
                        </LegalSection>

                        <LegalSection number={19} title="Other Important Terms">
                            <p>
                                19.1. We may transfer rights/obligations to
                                another organization.
                            </p>
                            <p>
                                19.2. These Terms are between you and us only.
                            </p>
                            <p>
                                19.3. If any term is unlawful, the rest remain
                                valid.
                            </p>
                            <p>
                                19.4. Waiving a right once does not waive future
                                rights.
                            </p>
                            <p>
                                19.5. These Terms do not create partnerships,
                                agencies, or employment.
                            </p>
                            <p>
                                19.6. This is the entire agreement between us.
                            </p>
                            <p>
                                19.7. Disputes must first go through mediation,
                                then arbitration in St. Louis, Missouri.
                            </p>
                            <p>
                                19.8. These Terms may be electronically signed,
                                including via checkboxes or typed names.
                            </p>
                            <p>
                                19.9. This Agreement is governed by the laws of
                                Missouri.
                            </p>
                        </LegalSection>
                    </div>
                </div>
            </main>
        </div>
    );
}
```

## Privacy Policy Page

### Layout

```tsx
// src/app/privacy-policy/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Your Company Name',
    description:
        'Privacy Policy for Your Company Name - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
```

### Privacy Policy Content Component

```tsx
// src/app/privacy-policy/components/PrivacyPolicyContent.tsx
import React from 'react';
import TextPageHeader from '@/components/TextPageHeader';
import LegalSection from '@/components/LegalSection';
import LegalList from '@/components/LegalList';

export const PrivacyPolicyContent: React.FC = () => {
    return (
        <main className="relative mx-auto max-w-[1280px] px-4 py-16 md:px-20 md:py-24 lg:py-36">
            <div className="space-y-20 md:space-y-28">
                <TextPageHeader
                    title="Privacy policy"
                    lastUpdated="July 22nd, 2025"
                />

                <div className="space-y-16 md:space-y-20">
                    <LegalSection title="Introduction">
                        <p>
                            This Privacy Policy outlines how Premier Studios
                            ("we", "our", or "us") collects, uses, stores, and
                            protects your information when you interact with our
                            services. By accessing or using our website,
                            services, or communications, you agree to the terms
                            outlined in this Policy.
                        </p>
                    </LegalSection>

                    <LegalSection title="Information We Collect">
                        <p>
                            We collect personal and non-personal information in
                            accordance with applicable data protection laws. The
                            types of data we may collect include:
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="legal-subheading">
                                    I. Account Details
                                </h3>
                                <p>
                                    Name, company name, and contact information
                                    provided through our intake forms or client
                                    communications.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    II. Contact Information
                                </h3>
                                <p>
                                    Email address and phone number (if provided)
                                    to communicate during the project lifecycle
                                    or for relevant updates.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    III. Payment Information
                                </h3>
                                <p>
                                    Payment details are processed through
                                    third-party services such as Stripe, PayPal,
                                    or Wise. We do not store sensitive payment
                                    data on our servers.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    IV. Communications & Logs
                                </h3>
                                <p>
                                    Message history, project discussions, and
                                    email threads may be retained for quality
                                    control, documentation, and service
                                    improvement.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    V. Order & Project Data
                                </h3>
                                <p>
                                    Information related to services purchased,
                                    project scope, timelines, and associated
                                    materials.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    VI. Technical Information
                                </h3>
                                <p>
                                    Browser type, IP address, location
                                    (city-level), and device type, collected
                                    through analytics tools for service
                                    improvement.
                                </p>
                            </div>
                            <div>
                                <h3 className="legal-subheading">
                                    VII. Interaction Data (Cookies & Tracking)
                                </h3>
                                <p>
                                    We use cookies and similar technologies to
                                    analyze user behavior, improve performance,
                                    and personalize user experience. You may opt
                                    out of cookies via your browser settings or
                                    use a browser extension to manage your
                                    preferences.
                                </p>
                            </div>
                        </div>
                    </LegalSection>

                    <LegalSection title="How We Use Your Information">
                        <p>
                            We use the information collected for the following
                            purposes:
                        </p>
                        <LegalList
                            items={[
                                'To deliver and fulfill services you request.',
                                'To communicate about project updates, feedback, and support.',
                                'To improve our services, website usability, and client experience.',
                                'To comply with legal obligations and enforce our Terms of Service.',
                                'For internal documentation, analytics, or anonymized case study development (with consent).',
                            ]}
                        />
                        <p>
                            We do not sell, rent, or trade your personal data to
                            third parties.
                        </p>
                    </LegalSection>

                    <LegalSection title="Third-Party Tools & Services">
                        <p>
                            We may use trusted third-party platforms to operate
                            parts of our service (e.g., payment processors,
                            analytics tools, project management apps). These
                            providers have their own privacy policies and are
                            contractually obligated to maintain data
                            confidentiality and security. Current third-party
                            services may include but are not limited to:
                        </p>
                        <LegalList
                            items={[
                                'Google Workspace (email, file storage)',
                                'Stripe / PayPal / Wise (payment)',
                                'Notion / Trello / Slack / Make.com (project collaboration)',
                                'Google Analytics (website performance)',
                            ]}
                        />
                    </LegalSection>

                    <LegalSection title="Information Security">
                        <p>
                            We implement appropriate administrative, technical,
                            and physical safeguards to protect your personal
                            data against unauthorized access, loss, or misuse.
                            While no system is 100% secure, we follow best
                            practices in data protection.
                        </p>
                    </LegalSection>

                    <LegalSection title="Data Retention">
                        <p>
                            We retain personal data only for as long as
                            necessary to fulfill the purposes outlined in this
                            Policy or as required by law. You may request data
                            deletion at any time (subject to our legal and
                            contractual obligations).
                        </p>
                    </LegalSection>

                    <LegalSection title="Your Rights">
                        <p>
                            Depending on your location, you may have the
                            following rights:
                        </p>
                        <LegalList
                            items={[
                                <>
                                    Access – You can request access to the
                                    personal data we hold about you.
                                </>,
                                <>
                                    Correction – You can correct inaccurate or
                                    incomplete data.
                                </>,
                                <>
                                    Deletion – You may request the erasure of
                                    your data (right to be forgotten).
                                </>,
                                <>
                                    Objection – You may object to how we process
                                    your data for direct marketing or legitimate
                                    interests.
                                </>,
                                <>
                                    Data Portability – You may request a copy of
                                    your data in a portable format.
                                </>,
                            ]}
                        />
                        <p>
                            To exercise your rights, contact us at our contact
                            form.
                        </p>
                    </LegalSection>

                    <LegalSection title="Data Disclosure">
                        <p>
                            We do not disclose personal data except in the
                            following cases:
                        </p>
                        <LegalList
                            items={[
                                'To authorized service providers who assist in delivering our services (under strict confidentiality).',
                                'If required by law or valid legal request (e.g., court order, government investigation).',
                                'To protect our legal rights or investigate fraud or security issues.',
                            ]}
                        />
                    </LegalSection>

                    <LegalSection title="Children's Privacy">
                        <p>
                            Our services are not intended for individuals under
                            the age of 13. We do not knowingly collect data from
                            children without verifiable parental consent.
                        </p>
                    </LegalSection>

                    <LegalSection title="Changes to This Policy">
                        <p>
                            We may update this Privacy Policy periodically. The
                            most current version will always be posted on our
                            website. Your continued use of our services
                            indicates acceptance of any updates.
                        </p>
                    </LegalSection>
                </div>
            </div>
        </main>
    );
};
```

### Main Privacy Policy Page

```tsx
// src/app/privacy-policy/page.tsx
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { PrivacyPolicyContent } from './components/PrivacyPolicyContent';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10">
                <PrivacyPolicyContent />
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
```

## Implementation Notes

1. **Font Replacement**: All instances of `font-heading`, `font-mono`, and `font-ibm-plex-mono` should be replaced with `font-inter`.

2. **Responsive Design**: The components are designed to be responsive with mobile-first approach.

3. **SEO Metadata**: Update the metadata in both layout files to match your company information.

4. **Component Dependencies**: Make sure you have a `Navbar` component in your project or update the imports accordingly.

5. **Content Customization**: Update all company-specific information (Premier Studios references) to match your business.

This implementation provides a complete, ready-to-use legal pages system that can be easily customized for any project while maintaining the same structure and styling approach as the original. The AI agent can copy these files directly into a new project and customize the content as needed.
