import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Premier Studios',
    description:
        'Terms of Service for Premier Studios commission services and freelancer engagements.',
    keywords: 'terms of service, premier studios, freelancer, commissions',
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}