// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         port: "",
//         pathname: "/account123/**",
//       },
//     ],
//   },
// };

// import { withNextVideo } from "next-video/process";
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         port: "",
//         pathname: "/account123/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

// export default withNextVideo(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add the domain here
  },
};

module.exports = nextConfig;
