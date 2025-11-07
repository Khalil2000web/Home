/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/tour',
        destination: 'https://trips.khaliil.com/',
        permanent: true,
      },
      {
        source: '/trips',
        destination: 'https://trips.khaliil.com/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;