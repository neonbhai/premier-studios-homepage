'use client';

import React from 'react';
import NavBar from '../components/NavBar';
import TextPageHeader from '../components/TextPageHeader';
import LegalSection from '../components/LegalSection';
import LegalList from '../components/LegalList';

export default function TermsOfService() {
    return (
        <div className="min-h-screen">
            <NavBar />

            <main className="relative z-10 pb-20 pt-20 md:pb-40 md:pt-32">
                <div className="mx-auto px-4 md:px-8 lg:px-20">
                    <TextPageHeader
                        title="Terms of Service"
                        lastUpdated="Sunday, February 9th, 2025"
                    />

                    <div className="space-y-8 md:space-y-16">
                        {/* Introduction */}
                        <div className="space-y-6">
                            <p className="font-sans text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
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

