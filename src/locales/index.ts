import en, { type Dictionary } from '~locales/en';
import nl from '~locales/nl';

export const locales = ['en', 'nl'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// The default locale lives at the root, the others under their own prefix
export const localePaths: Record<Locale, string> = {
    en: '/',
    nl: '/nl',
};

const dictionaries: Record<Locale, Dictionary> = { en, nl };

export const isLocale = (value: string): value is Locale =>
    (locales as readonly string[]).includes(value);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
