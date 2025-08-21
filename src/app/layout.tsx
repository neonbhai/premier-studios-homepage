import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import NavBar from "./components/NavBar";
import { Footer } from './components/Footer';
import '@/lib/gsap-config'; // Initialize GSAP configuration

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

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
            <body className={`${inter.variable} antialiased`}>
                {children}
                <Footer />
            </body>
        </html>
    );
}
