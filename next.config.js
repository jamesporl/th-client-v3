module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGES_HOSTNAME,
        port: '',
      },
    ],
  },
}
