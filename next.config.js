const { withEyes } = require('eyes-next/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // English is the default locale and lives at the root instead of /en
    redirects: async () => [{ source: '/en', destination: '/', permanent: true }],
    rewrites: async () => [{ source: '/', destination: '/en' }],
};

module.exports = withEyes(nextConfig);
