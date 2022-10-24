/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "", 
  },

  env: {
    STAGING_ALCHEMY_KEY:
      "https://goerli.infura.io/v3/ae70131d2e014254863d2fc4a7b41a31",
  },
};

module.exports = nextConfig;
