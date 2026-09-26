import React, { type ReactNode } from 'react';

import { type Metadata, type Viewport } from 'next';

import '@material-design-icons/font/filled.css';
import { Analytics } from '@vercel/analytics/react';
import { EyesNextProvider } from 'eyes-next';
import General_Sans from 'next/font/local';
import Script from 'next/script';

import {
    type Locale,
    defaultLocale,
    getDictionary,
    isLocale,
    localePaths,
    locales,
} from '~locales/index';
import '~styles/global.css';

interface Props {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}

const GeneralSansFont = General_Sans({
    src: '../../../public/assets/files/GeneralSans-Variable.ttf',
});

const resolveLocale = async (params: Props['params']): Promise<Locale> => {
    const { lang } = await params;
    return isLocale(lang) ? lang : defaultLocale;
};

const RootLayout = async ({ children, params }: Props) => {
    const lang = await resolveLocale(params);

    return (
        <html lang={lang} className={GeneralSansFont.className}>
            <body className="overflow-x-hidden">
                <EyesNextProvider siteId="690801271">{children}</EyesNextProvider>
                <Analytics />
                <Script
                    src="https://datafa.st/js/script.js"
                    data-website-id="dfid_XOSl7L36308TqnSBoxxUO"
                    data-domain="fransslabbekoorn.com"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
};

export const generateStaticParams = () => locales.map(lang => ({ lang }));

// Only the known locales exist, anything else is a 404
export const dynamicParams = false;

export const generateMetadata = async ({ params }: Pick<Props, 'params'>): Promise<Metadata> => {
    const lang = await resolveLocale(params);
    const { meta } = getDictionary(lang);
    const url = new URL(localePaths[lang], 'https://fransslabbekoorn.com').toString();

    return {
        metadataBase: new URL('https://fransslabbekoorn.com'),
        title: meta.title,
        description: meta.description,
        icons: { icon: '/assets/icons/favicon.png' },
        keywords: meta.keywords,
        alternates: {
            canonical: localePaths[lang],
            languages: { ...localePaths, 'x-default': localePaths.en },
        },
        openGraph: {
            title: 'Frans Slabbekoorn',
            description: meta.description,
            url,
            siteName: 'fransslabbekoorn.com',
            type: 'website',
            locale: meta.ogLocale,
            images: [
                {
                    url: '/assets/images/ogimage.png',
                    width: 1200,
                    height: 630,
                },
            ],
        },
    };
};

export const viewport: Viewport = {
    colorScheme: 'light',
    themeColor: '#E8F0F5',
};

export default RootLayout;
