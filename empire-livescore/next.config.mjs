/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        pathname: '/**', // Allows all paths under this domain
      },
    ],
  },
};

export default nextConfig;
