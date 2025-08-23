import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import './globals.css';
// import NavBar from "./components/NavBar";
import { Footer } from './components/Footer';
import '@/lib/gsap-config'; // Initialize GSAP configuration

export const metadata: Metadata = {
    title: 'Premier Studios',
    description: 'Premier Studios',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased font-sans`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
