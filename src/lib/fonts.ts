import { Inter } from 'next/font/google';

// Inter font - used for both headings and body text
export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-inter',
    display: 'swap',
});
