export const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
        port: '',
        pathname: '/**', // Match all paths under this domain
      },
    ],
  },
};

export default nextConfig;