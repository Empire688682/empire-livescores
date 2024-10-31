/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.api-sports.io'],
    },
    webpack: (config) => {
      config.cache = true;
      return config;
    },
  };
  
  export default nextConfig;
  