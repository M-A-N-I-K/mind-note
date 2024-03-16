/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["files.edgestore.dev"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
