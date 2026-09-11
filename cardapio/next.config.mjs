/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "cardapio",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./CardapioList": "./src/components/CardapioList",
        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;