import { type MetadataRoute } from 'next';

import { localePaths, locales } from '~locales/index';

const BASE_URL = 'https://fransslabbekoorn.com';

const languages = Object.fromEntries(
    locales.map(lang => [lang, new URL(localePaths[lang], BASE_URL).toString()]),
);

const sitemap = (): MetadataRoute.Sitemap =>
    locales.map(lang => ({
        url: new URL(localePaths[lang], BASE_URL).toString(),
        changeFrequency: 'monthly',
        priority: 1,
        alternates: { languages },
    }));

export default sitemap;
