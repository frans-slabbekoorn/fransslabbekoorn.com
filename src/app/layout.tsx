import React, { type ReactNode } from 'react';

import { type Metadata } from 'next';

import '@material-design-icons/font/filled.css';
import General_Sans from 'next/font/local';

import '~styles/global.css';

interface Props {
    children: ReactNode;
}

const GeneralSansFont = General_Sans({
    src: '../../public/assets/files/GeneralSans-Variable.ttf',
});

const RootLayout = ({ children }: Props) => {
    return (
        <html className={GeneralSansFont.className}>
            <body className="overflow-x-hidden">{children}</body>
        </html>
    );
};

export const metadata: Metadata = {
    title: 'Frans Slabbekoorn | Software Developer',
    description:
        "I'm a software developer based in Ouddorp, Netherlands, with expertise in backend development. Skilled in Laravel, Javascript, API's, and databases, I craft efficient solutions for complex problems.",
    icons: { icon: '/assets/icons/favicon.png' },
    keywords: ['frans slabbekoorn', 'ouddorp', 'software developer', 'backend developer'],
    colorScheme: 'light',
    themeColor: '#E8F0F5',
    openGraph: {
        title: 'Frans Slabbekoorn',
        description:
            "I'm a software developer based in Ouddorp, Netherlands, with expertise in backend development. Skilled in Laravel, Javascript, API's, and databases, I craft efficient solutions for complex problems.",
        url: 'https://fransslabbekoorn.com',
        siteName: 'fransslabbekoorn.com',
        type: 'website',
        images: [
            {
                url: '/assets/images/ogimage.png',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default RootLayout;
