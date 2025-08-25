import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Premier Studios',
    description:
        'Privacy Policy for Premier Studios - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
