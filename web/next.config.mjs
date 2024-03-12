/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/listings',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
