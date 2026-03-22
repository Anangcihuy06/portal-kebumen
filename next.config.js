const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.kebumenkab.go.id',
      },
      {
        protocol: 'https',
        hostname: 'assets.pikiran-rakyat.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'assets-a1.kompasiana.com',
      },
      {
        protocol: 'https',
        hostname: 'kebumen24.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'zjglidcehtsqqqhbdxyp.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'www.jogjasuper.co.id',
      },
      {
        protocol: 'https',
        hostname: 'nurohmansmkn2.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: 'statik.tempo.co',
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig);
