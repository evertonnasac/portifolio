/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'png.pngtree.com',
            port: '',
            pathname: '/thumb_back/**',
          },
        ],
      },
}

module.exports = nextConfig
