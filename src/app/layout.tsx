import type { Metadata } from 'next';
import { Inter, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
// import NavBar from "./components/NavBar";
import { Footer } from './components/Footer';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-grotesque',
    subsets: ['latin'],
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
            <body
                className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}
