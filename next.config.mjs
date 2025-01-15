/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatar.vercel.sh',
            port: '',
            pathname: '/account123/**',
            search: '',
          },
        ],
    },
};

export default nextConfig;
