const { withEyes } = require('eyes-next/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
};

module.exports = withEyes(nextConfig);
