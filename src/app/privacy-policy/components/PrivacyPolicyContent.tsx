import React from 'react';
import TextPageHeader from '@/app/components/TextPageHeader';
import LegalSection from '@/app/components/LegalSection';
import LegalList from '@/app/components/LegalList';

export const PrivacyPolicyContent: React.FC = () => {
    return (
        <main className="relative mx-auto px-4 py-16 md:px-20 md:py-24 lg:py-36">
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
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
                                    I. Account Details
                                </h3>
                                <p>
                                    Name, company name, and contact information
                                    provided through our intake forms or client
                                    communications.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
                                    II. Contact Information
                                </h3>
                                <p>
                                    Email address and phone number (if provided)
                                    to communicate during the project lifecycle
                                    or for relevant updates.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
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
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
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
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
                                    V. Order & Project Data
                                </h3>
                                <p>
                                    Information related to services purchased,
                                    project scope, timelines, and associated
                                    materials.
                                </p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
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
                                <h3 className="mb-2 font-sans text-sm font-medium text-white/80 md:text-base lg:text-lg">
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
