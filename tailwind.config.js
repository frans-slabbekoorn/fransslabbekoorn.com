/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: {
            neutral: {
                50: '#E8F0F5',
                100: '#D2DCE4',
                200: '#B3C4D1',
                300: '#93ABBE',
                400: '#7392AB',
                500: '#587993',
                600: '#455E73',
                700: '#324453',
                800: '#1F2A33',
                900: '#0B1013',
                950: '#020303',
            },
            primary: {
                50: '#C1E1FE',
                100: '#A5D4FE',
                200: '#6EBAFD',
                300: '#369FFD',
                400: '#0385F9',
                500: '#0267C1',
                600: '#02549E',
                700: '#01417A',
                800: '#012E57',
                900: '#011C34',
                950: '#001222',
            },
        },
        extend: {
            maxWidth: {
                '9/10': '90%',
            },
            fontSize: {
                'sm': ['clamp(0.875rem, 0.7rem + 0.4vw, 1rem)', '1.33'],
                'base': ['clamp(1rem, 0.25rem + 1.56vw, 1.5rem)', '1.33'],
                'xl': ['clamp(1.125rem, -3.8rem + 8vw, 2rem)', '1.33'],
                '2xl': ['clamp(1.3125rem, -1.6rem + 8vw, 3.25rem)', '1.33'],
                '3xl': ['clamp(2rem, -3.8rem + 10.9vw, 5rem)', '1.33'],
            },
        },
    },
    variants: {},
    plugins: [],
};
