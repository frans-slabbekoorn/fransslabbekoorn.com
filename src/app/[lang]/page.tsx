import React from 'react';

import HomePage from '~components/HomePage';
import { defaultLocale, getDictionary, isLocale } from '~locales/index';

interface Props {
    params: Promise<{ lang: string }>;
}

const Page = async ({ params }: Props) => {
    const { lang } = await params;

    return <HomePage dict={getDictionary(isLocale(lang) ? lang : defaultLocale)} />;
};

export default Page;
