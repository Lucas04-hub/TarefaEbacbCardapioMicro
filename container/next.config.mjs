/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        remotes: {
          cardapio: 'cardapio@http://localhost:3000/_next/static/chunks/remoteEntry.js',
          pedido: 'pedido@http://localhost:3001/_next/static/chunks/remoteEntry.js',
        },
        exposes: {},
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );
    return config;
  },
};

export default nextConfig;
