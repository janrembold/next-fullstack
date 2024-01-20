const withNextIntl = require("next-intl/plugin")();
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  reactStrictMode: false,
};

module.exports = withNextIntl(nextConfig);
