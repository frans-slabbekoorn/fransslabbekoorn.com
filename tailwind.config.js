/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            maxWidth: {
                '9/10': '90%',
            },
        },
    },
    plugins: [],
};
