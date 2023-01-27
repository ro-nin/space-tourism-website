/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // fontLoaders: [
  //   { loader: '@next/font/google', options: { subsets: ['latin'] } },
  // ],
};
