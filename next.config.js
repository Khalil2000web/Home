/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/tour',
        destination: 'https://tour.khaliil.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;