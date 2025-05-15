/** @type {import('next').NextConfig} */
export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
        pathname: "/coins/images/**",
      },
    ],
  },
};

