/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            }
        ]
    },
    api: {
        responseLimit: '50mb',
    },
}

module.exports = nextConfig
