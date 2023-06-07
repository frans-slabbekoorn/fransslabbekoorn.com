import React, { type ReactNode } from 'react';

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

export default RootLayout;
