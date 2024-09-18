/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_URL: process.env.APP_URL,
        APP_FE_URL: process.env.APP_FE_URL
    }
};

export default nextConfig;
