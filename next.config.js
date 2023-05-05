/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com"],
  },
}

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.pixabay.com',
//         port: '',
//         pathname: 'photo/2014/02/27/16/10/flowers-276014__340.jpg',
//       },
//     ],
//   },
// }

module.exports = nextConfig
