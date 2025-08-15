import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your actual image domain
    formats: ['image/avif', 'image/webp']
},
  optimization: {
    images: {
      loader: 'imgix',
      path: 'https://your-image-domain.com/', // Replace with your actual image domain
    }
},
  webpack(config) {
    
    return config;
  },
  pageExtensions: ['tsx', 'ts', 'js', 'jsx']
};

export default nextConfig;